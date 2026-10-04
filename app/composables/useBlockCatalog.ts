import type { BlockNode } from '~/types/blocks'

/** Get independent cards, tables, charts and forms from any migrated page. */
export async function useBlockCatalog(path: string) {
  const page = await usePageBlocks(path)
  const blocks = findBlocks(page.tree, (node: BlockNode) =>
    ['table', 'form', 'article'].includes(node.tag || '') ||
    ['card', 'chart', 'tabs'].includes(node.attrs?.['data-slot'] || '') ||
    /\bbg-card\b.*\bborder\b|\bborder\b.*\bbg-card\b/.test(node.attrs?.class || ''),
  )
  return { page, blocks, get: (key: string) => findBlocks(page.tree, node => node.key === key)[0] }
}
