import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { parse } from 'vue/compiler-sfc'

// Explicit dependencies: no DOM serialization or guessed script dependencies.
const registry = new URL('../app/data/copy-blocks/', import.meta.url)
export const catalogPages = readdirSync(registry).filter(file => file.endsWith('.json')).sort()
  .map(file => JSON.parse(readFileSync(new URL(file, registry), 'utf8')))
const pilotPaths = ['/ecommerce/dashboard-1', '/developers/webhooks', '/ai-chat/composer-1']
export const pilotPages = pilotPaths.map(path => catalogPages.find(page => page.path === path)).filter(Boolean)

assert.equal(new Set(catalogPages.map(page => page.path)).size, catalogPages.length, 'Duplicate catalogue route')
assert.equal(new Set(catalogPages.map(page => page.key)).size, catalogPages.length, 'Duplicate source chunk key')
for (const page of catalogPages) {
  assert.match(page.key, /^[a-z0-9-]+$/, 'Invalid source chunk key')
  assert.ok(page.file.startsWith('app/pages/') && !page.file.includes('..'), 'Invalid source file')
  assert.ok(page.blocks.length > 0, `No blocks registered for ${page.path}`)
}

export function region(source, name, kind) {
  const start = kind === 'style' ? `/* @copy:${name}:start */` : `// @copy:${name}:start`
  const end = kind === 'style' ? `/* @copy:${name}:end */` : `// @copy:${name}:end`
  assert.equal(source.split(start).length, 2, `Expected one ${start}`)
  assert.equal(source.split(end).length, 2, `Expected one ${end}`)
  const from = source.indexOf(start) + start.length
  const to = source.indexOf(end)
  assert.ok(to > from, `Invalid region: ${name}`)
  return source.slice(from, to).trim()
}

function dedent(source) {
  const lines = source.trim().split('\n')
  const indentation = Math.min(...lines.slice(1).filter(line => line.trim()).map(line => line.match(/^\s*/)[0].length))
  return lines.map((line, index) => index ? line.slice(Math.min(indentation, line.match(/^\s*/)[0].length)) : line).join('\n')
}

function findMarkedNode(ast, attribute, id) {
  const matches = []
  function visit(node) {
    if (node.type === 1 && node.props.some(prop => prop.type === 6 && prop.name === attribute && prop.value?.content === id)) matches.push(node)
    node.children?.forEach(visit)
  }
  visit(ast)
  assert.equal(matches.length, 1, `Expected one ${attribute}="${id}", found ${matches.length}`)
  return matches[0]
}

function templateFragment(ast, attribute, id) {
  const node = findMarkedNode(ast, attribute, id)
  const marker = node.props.find(prop => prop.type === 6 && prop.name === attribute)
  const offset = marker.loc.start.offset - node.loc.start.offset
  // Remove only the tooling attribute. Keep the original Vue source and directives.
  const source = node.loc.source.slice(0, offset) + node.loc.source.slice(offset + marker.loc.source.length)
  return dedent(source.replace(/ {2}(?=(?:class|tabindex)=)/, ' '))
}

export async function buildPageBlocks(page, root = resolve('.')) {
  const source = await readFile(resolve(root, page.file), 'utf8')
  const { descriptor, errors } = parse(source, { filename: page.file })
  assert.equal(errors.length, 0, `Invalid page: ${page.file}`)
  const ast = descriptor.template?.ast
  assert.ok(ast, `Missing template AST: ${page.file}`)
  return page.blocks.map(block => {
    const template = [templateFragment(ast, 'data-copy-block', block.id), ...(block.fragments || []).map(id => templateFragment(ast, 'data-copy-fragment', id))].join('\n\n')
    const script = block.script ? region(descriptor.scriptSetup.content, block.script, 'script') : ''
    const style = block.style ? region(descriptor.styles.map(style => style.content).join('\n'), block.style, 'style') : ''
    const component = `<!-- ${block.title} | Requires Nuxt 4, Nuxt UI 4 and the Lucide icon collection. -->\n${script ? `<script setup lang="ts">\n${script}\n</script>\n\n` : ''}<template>\n${template.split('\n').map(line => line ? '  ' + line : '').join('\n')}\n</template>\n${style ? `\n<style scoped>\n${style}\n</style>\n` : ''}`
    assert.ok(!/data-copy-|BlockCopyTools|\/reference\/|blob:|useRoute\(|useHead\(|localStorage|navigateTo\(/.test(component), `Non-portable dependency in ${block.id}`)
    return { id: block.id, title: block.title, page: page.path, file: page.file, filename: `${block.id}.vue`, component, template, requirements: ['Nuxt 4', 'Nuxt UI 4', 'Lucide icons'], assets: [] }
  })
}
