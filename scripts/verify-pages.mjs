import assert from 'node:assert/strict'
import { readFile, readdir, access } from 'node:fs/promises'
import { resolve, relative } from 'node:path'
import { parse } from 'vue/compiler-sfc'

const root = resolve('.')
const pages = JSON.parse(await readFile(resolve(root, 'app/data/pages.json'), 'utf8'))
const navigation = JSON.parse(await readFile(resolve(root, 'app/data/navigation.json'), 'utf8'))
const routes = navigation.groups.flatMap(group => group.items.flatMap(item => item.links.map(link => link.path)))
assert.equal(new Set(routes).size, routes.length, 'Navigation contains duplicate routes')
assert.equal(new Set(pages.map(page => page.path)).size, pages.length, 'Page inventory contains duplicate routes')
for (const route of routes) assert.ok(pages.some(page => page.path === route), `Missing navigation route: ${route}`)

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const result = []
  for (const entry of entries) {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) result.push(...await files(path))
    else result.push(path)
  }
  return result
}
const vueFiles = (await files(resolve(root, 'app/pages'))).filter(file => file.endsWith('.vue'))
const themeFailures = []
let nuxtUiElements = 0
const components = new Set()
for (const file of vueFiles) {
  const source = await readFile(file, 'utf8')
  const name = relative(root, file).replaceAll('\\', '/')
  const { descriptor, errors } = parse(source, { filename: file })
  assert.equal(errors.length, 0, `Invalid Vue source: ${name}: ${errors.join(', ')}`)
  assert.ok(descriptor.template, `Missing template: ${name}`)
  assert.ok(!/<template\s*>/.test(descriptor.template.content), `Inert HTML template inside a page: ${name}`)
  assert.ok(!/<(?:Blocks[A-Z]\w*|App[A-Z]\w*)\b|usePageBlocks|useBlockActions|BlockNode|v-html|<component\b/.test(source), `Page uses a renderer or custom block: ${name}`)
  assert.ok(!/from\s+['"][^'"]*(?:components|data\/reference|composables)/.test(descriptor.scriptSetup?.content || ''), `Page content is not self-contained: ${name}`)
  for (const match of descriptor.template.content.matchAll(/<(U[A-Z]\w*)\b/g)) { components.add(match[1]); nuxtUiElements++ }
  const themeSource = descriptor.template.content + '\n' + descriptor.styles.map(style => style.content).join('\n')
  const palette = /(?:bg|text|border|ring|fill|stroke|from|via|to)-(?:neutral|slate|zinc|gray|stone|red|green|emerald|blue|sky|violet|purple|yellow|amber|orange|white|black)(?:-\d+)?\b/g
  for (const match of themeSource.matchAll(palette)) themeFailures.push({ file: name, issue: match[0] })
  if (/--ui-(?:primary|text(?:-[\w]+)?|bg(?:-[\w]+)?|border(?:-[\w]+)?):/.test(themeSource)) themeFailures.push({ file: name, issue: 'Overrides a Nuxt UI design token' })
  if (/(?:bg|text|border)-(?:card|background|foreground|muted-foreground|input|secondary-foreground|primary-foreground)\b/.test(themeSource)) themeFailures.push({ file: name, issue: 'Uses a legacy shadcn theme utility' })
  for (const match of themeSource.matchAll(/(?:fill|stroke|stop-color)="(#[\da-f]{3,8})"/gi)) themeFailures.push({ file: name, issue: `Fixed SVG color ${match[1]}` })
  for (const match of source.matchAll(/"\w+(?:Class|Style|Fill|Stroke|Stopcolor)\d+":\s*"([^"]*)"/g)) {
    if (/(?:bg|text|border)-(?:neutral|gray|white|black|red|blue|green)(?:-\d+)?\b|#[\da-f]{3,8}\b/.test(match[1])) themeFailures.push({ file: name, issue: 'Fixed color in row presentation data' })
  }
}
const mainCss = await readFile(resolve(root, 'app/assets/css/main.css'), 'utf8')
assert.ok(!/--ui-[\w-]+\s*:/.test(mainCss), 'Global CSS must not overwrite Nuxt UI colors')
assert.ok(!/@source\s+"[^\"]*reference/.test(mainCss), 'Reference layouts must not drive the generated CSS')
for (const page of pages) {
  assert.ok(page.source?.startsWith('app/pages/'), `Missing physical page source: ${page.path}`)
  await access(resolve(root, page.source))
}
console.log(JSON.stringify({ navigationEntries: routes.length, contentPages: pages.length, vuePageFiles: vueFiles.length, nuxtUiElements, nuxtUiComponents: [...components].sort(), themeFailures }, null, 2))
assert.equal(themeFailures.length, 0, 'Pages must use semantic Nuxt UI theme tokens')

if (process.argv.includes('--http')) {
  const base = process.env.BLOCKS_BASE_URL || 'http://127.0.0.1:3020'
  let index = 0
  const failures = []
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (index < pages.length) {
      const page = pages[index++]
      try {
        const response = await fetch(`${base}${page.path}`, { signal: AbortSignal.timeout(30000) })
        const html = await response.text()
        assert.equal(response.status, 200)
        assert.ok(html.includes('data-page='), 'Missing page render')
        assert.ok(!html.includes('statusCode&quot;:500'), 'SSR failed')
      } catch (error) { failures.push({ path: page.path, error: String(error) }) }
    }
  }))
  console.log(JSON.stringify({ checkedRoutes: pages.length, failures }, null, 2))
  assert.equal(failures.length, 0, 'Every page must render successfully')
}
