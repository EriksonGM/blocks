import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const directory = resolve('app/data/reference')
const navigation = JSON.parse(await readFile(resolve(directory, 'navigation.json'), 'utf8'))
const paths = navigation.groups.flatMap(group => group.items.flatMap(item => item.links.map(link => link.path)))
assert.equal(new Set(paths).size, paths.length, 'Navigation must not contain duplicate routes')
const all = []
const links = new Set()
let blocks = 0
let charts = 0
let tabs = 0
let menus = 0
const chartVariables = new Set()
const chartPages = []
const incompletePages = []
function pageText(node) { return node.text || (node.children || []).map(pageText).join('') }
function inspect(node) {
  blocks++
  if (node.attrs?.href?.startsWith('/')) links.add(node.attrs.href.split('?')[0].split('#')[0])
  if (node.attrs?.['data-slot'] === 'chart') charts++
  if (node.panels) tabs++
  if (node.options) menus++
  for (const value of Object.values(node.attrs || {})) for (const match of String(value).matchAll(/var\((--color-[\w-]+)/g)) chartVariables.add(match[1])
  assert.notEqual(node.tag, 'script', 'Blocks must not contain executable scripts')
  node.children?.forEach(inspect)
  node.panels?.forEach(panel => inspect(panel.tree))
}
for (const name of await readdir(directory)) {
  if (name === 'navigation.json' || !name.endsWith('.json')) continue
  const page = JSON.parse(await readFile(resolve(directory, name), 'utf8'))
  assert.ok(page.tree && page.path && page.label, `${name} must have page content`)
  all.push(page.path)
  if (pageText(page.tree).trim().length < 60) incompletePages.push(page.path)
  const before = charts
  inspect(page.tree)
  if (charts > before) chartPages.push(page.path)
}
for (const path of paths) assert.ok(all.includes(path), `Missing page: ${path}`)
const missingLinks = [...links].filter(path => !all.includes(path) && path !== '/' && !path.startsWith('/reference/') && !path.startsWith('/original/users/') && !path.startsWith('/developers/webhooks/'))
assert.equal(incompletePages.length, 0, `Incomplete pages: ${incompletePages.join(', ')}`)
assert.equal(missingLinks.length, 0, `Missing linked routes: ${missingLinks.join(', ')}`)
console.log(JSON.stringify({ navigationPages: paths.length, pages: all.length, blocks, charts, tabGroups: tabs, menus, incompletePages, additionalLinkedRoutes: missingLinks, ...(process.argv.includes('--verbose') ? { chartVariables: [...chartVariables], chartPages } : {}) }, null, 2))

if (process.argv.includes('--http')) {
  let index = 0
  const failures = []
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (index < all.length) {
      const path = all[index++]
      try {
        const response = await fetch(`${process.env.BLOCKS_BASE_URL || 'http://127.0.0.1:3020'}${path}`)
        const html = await response.text()
        assert.equal(response.status, 200)
        assert.ok(html.includes('data-page='), 'Missing page render')
        assert.ok(!html.includes('statusCode&quot;:500'), 'Server rendering failed')
      } catch (error) { failures.push({ path, error: String(error) }) }
    }
  }))
  console.log(JSON.stringify({ checkedRoutes: all.length, failures }, null, 2))
  assert.equal(failures.length, 0, 'All routes must render successfully')
}
