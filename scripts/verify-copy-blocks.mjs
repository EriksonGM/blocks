import assert from 'node:assert/strict'
import { compileScript, compileTemplate, parse } from 'vue/compiler-sfc'
import { buildPageBlocks, catalogPages, region } from './block-catalog.mjs'

const selectedPath = process.argv.find(argument => argument.startsWith('--page='))?.slice(7)
const selectedPages = catalogPages.filter(page => !selectedPath || page.path === selectedPath)
if (selectedPath) assert.equal(selectedPages.length, 1, `Unregistered page: ${selectedPath}`)
const all = (await Promise.all(selectedPages.map(page => buildPageBlocks(page)))).flat()
assert.equal(all.length, selectedPages.reduce((count, page) => count + page.blocks.length, 0))
assert.equal(new Set(all.map(block => block.id)).size, all.length)
assert.equal(new Set(all.map(block => block.page)).size, selectedPages.length)

for (const block of all) {
  const { descriptor, errors } = parse(block.component, { filename: block.filename })
  assert.equal(errors.length, 0, `${block.id}: invalid Vue source`)
  const script = descriptor.scriptSetup ? compileScript(descriptor, { id: block.id }) : undefined
  const template = compileTemplate({
    id: block.id, filename: block.filename, source: descriptor.template.content,
    compilerOptions: { bindingMetadata: script?.bindings || {} },
  })
  assert.equal(template.errors.length, 0, `${block.id}: invalid template: ${template.errors}`)
  const unresolved = [...new Set([...template.code.matchAll(/_ctx\.([A-Za-z_$][\w$]*)/g)].map(match => match[1]))]
  assert.deepEqual(unresolved, [], `${block.id}: missing script bindings`)
  assert.ok(!/data-copy-|BlockCopyTools|#build|~\/|\/reference\/|blob:|localStorage|useRoute\(|useHead\(/.test(block.component), `${block.id}: catalogue dependency leaked`)
  assert.ok(!/<(?:Blocks[A-Z]\w*|App[A-Z]\w*)\b|<component\b|v-html/.test(block.template))
  assert.ok(!/<UForm\b/.test(block.template) || !/<UChatPrompt\b/.test(block.template), `${block.id}: nested forms`)
  assert.ok(!block.component.includes('@copy:'), `${block.id}: source markers leaked`)
  assert.deepEqual(block.assets, [])
}

const composer = all.find(block => block.id === 'chat-composer')
if (composer) {
  assert.ok(composer.component.includes('--ai-composer-surface: var(--ui-bg)'))
  assert.ok(composer.component.includes('function sendMessage'))
}
const table = all.find(block => block.id === 'webhooks-table')
if (table) {
  assert.ok(table.component.includes('copyValue(row.original.iDText20)'))
  assert.ok(table.component.includes('const table1Rows = ref('))
  assert.ok(table.component.includes('const table1FilteredRows = computed('))
}
assert.throws(() => region('// @copy:missing:end', 'missing', 'script'))
assert.throws(() => region('// @copy:bad:start\n// @copy:bad:start\n// @copy:bad:end', 'bad', 'script'))

if (process.argv.includes('--http')) {
  const base = process.env.BLOCKS_BASE_URL || 'http://127.0.0.1:3020'
  for (const page of selectedPages) {
    const response = await fetch(base + page.path, { signal: AbortSignal.timeout(30000) })
    assert.equal(response.status, 200, page.path)
    const html = await response.text()
    for (const block of page.blocks) assert.ok(html.includes(`data-copy-block="${block.id}"`), `${page.path}: missing ${block.id}`)
  }
}

console.log(JSON.stringify({ pages: selectedPages.map(page => page.path), copyableBlocks: all.map(block => ({ id: block.id, bytes: Buffer.byteLength(block.component) })), compiled: all.length, missingBindings: 0 }, null, 2))
