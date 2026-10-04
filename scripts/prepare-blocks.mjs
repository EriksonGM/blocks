import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import lucide from '@iconify-json/lucide/icons.json' with { type: 'json' }

const directory = resolve('app/data/reference')
const assetsDirectory = resolve('public/reference')
await mkdir(assetsDirectory, { recursive: true })
const assetRequests = new Map()
try {
  const previous = JSON.parse(await readFile(resolve('app/data/assets.json'), 'utf8'))
  for (const [url, filename] of Object.entries(previous.assets || {})) assetRequests.set(url, filename)
} catch { /* Initial import. */ }
assetRequests.set('https://shadcnblocks-admin.vercel.app/_next/static/immutable/media/83afe278b6a6bb3c-s.p.45535valc9rzk.woff2', 'inter-latin.woff2')
assetRequests.set('https://github.com/ausrobdev.png', 'ausrobdev.png')
const embeddedAssets = new Map()
const files = (await readdir(directory)).filter(name => name.endsWith('.json') && name !== 'navigation.json')
const manifest = []

function asset(source) {
  if (!source || source.startsWith('/reference/')) return source
  if (source.startsWith('data:application/pdf;base64,')) {
    const filename = createHash('sha256').update(source).digest('hex').slice(0, 16) + '.pdf'
    embeddedAssets.set(filename, Buffer.from(source.split(',')[1], 'base64'))
    return `/reference/${filename}`
  }
  if (source.startsWith('data:')) return source
  let url = new URL(source, 'https://shadcnblocks-admin.vercel.app')
  if (url.pathname === '/_next/image') url = new URL(url.searchParams.get('url'), url.origin)
  if (url.protocol !== 'https:') return source
  const extension = url.pathname.match(/\.(png|jpg|jpeg|webp|svg|avif|gif|woff2|pdf|wav|mp3|mp4|md)$/i)?.[0] || '.png'
  const filename = createHash('sha256').update(url.href).digest('hex').slice(0, 16) + extension
  assetRequests.set(url.href, filename)
  return `/reference/${filename}`
}

function prepare(node, key) {
  node.key = key
  if (node.tag === 'body') node.tag = 'div'
  const svgTags = { clippath: 'clipPath', lineargradient: 'linearGradient', radialgradient: 'radialGradient', textpath: 'textPath', foreignobject: 'foreignObject' }
  if (svgTags[node.tag]) node.tag = svgTags[node.tag]
  if (node.attrs) {
    for (const [name, value] of Object.entries(node.attrs)) node.attrs[name] = String(value)
    if (node.tag === 'icon' && node.attrs.name?.startsWith('i-lucide-')) {
      const valid = name => Boolean(lucide.icons[name] || lucide.aliases?.[name])
      if (!valid(node.attrs.name.slice(9))) {
        const name = (node.attrs.class || '').split(' ').filter(value => value.startsWith('lucide-')).map(value => value.slice(7)).find(valid)
        if (name) node.attrs.name = `i-lucide-${name}`
      }
    }
    if (node.attrs.src) node.attrs.src = asset(node.attrs.src)
    if (node.attrs.href?.startsWith('/') && /\.(pdf|wav|mp3|md)$/.test(node.attrs.href)) node.attrs.href = asset(node.attrs.href)
    // Discard transient reveal-animation state; these blocks display the final chart.
    if (node.attrs['clip-path']?.includes('animationClipPath')) delete node.attrs['clip-path']
    if (/^0px\s/.test(node.attrs['stroke-dasharray'] || '')) delete node.attrs['stroke-dasharray']
    if (node.tag === 'svg' && /react-flow/.test(node.attrs.class || '')) delete node.attrs.viewBox
    // React's generated ids are fine as SVG fragment identifiers, never as state keys.
  }
  node.children?.forEach((child, i) => prepare(child, `${key}.${i}`))
  node.panels?.forEach((panel, i) => prepare(panel.tree, `${key}.panel${i}`))
}

for (const file of files) {
  const data = JSON.parse(await readFile(resolve(directory, file), 'utf8'))
  prepare(data.tree, 'root')
  manifest.push({ path: data.path, label: data.label, appTitle: data.appTitle, headings: data.headings, file })
  await writeFile(resolve(directory, file), JSON.stringify(data, null, 2))
}
await writeFile(resolve('app/data/pages.json'), JSON.stringify(manifest, null, 2))
for (const [filename, content] of embeddedAssets) await writeFile(resolve(assetsDirectory, filename), content)

const entries = [...assetRequests.entries()]
let index = 0
const failed = []
await Promise.all(Array.from({ length: 8 }, async () => {
  while (index < entries.length) {
    const [url, filename] = entries[index++]
    try {
      try { await access(resolve(assetsDirectory, filename)); continue } catch { /* Download new asset. */ }
      const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      await writeFile(resolve(assetsDirectory, filename), Buffer.from(await response.arrayBuffer()))
    } catch (error) { failed.push({ url, filename, error: String(error) }) }
  }
}))
await writeFile(resolve('app/data/assets.json'), JSON.stringify({ assets: Object.fromEntries(assetRequests), failed }, null, 2))
console.log(JSON.stringify({ pages: files.length, downloadedAssets: entries.length - failed.length, failed }, null, 2))
