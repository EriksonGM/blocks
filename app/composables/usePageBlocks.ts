import type { PageBlocks } from '~/types/blocks'

const modules = import.meta.glob<{ default: PageBlocks }>('../data/reference/*.json')

/** Lazy-load a page or reuse its individual blocks in any other Nuxt page. */
export async function usePageBlocks(path: string) {
  path = decodeURIComponent(path)
  const name = path.replace(/^\//, '').replace(/[^a-zA-Z0-9-]/g, '_')
  const load = modules[`../data/reference/${name}.json`] || (path.startsWith('/developers/webhooks/') ? modules['../data/reference/developers_webhooks.json'] : undefined)
  if (!load) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  const result = await load()
  return { ...result.default, path }
}
