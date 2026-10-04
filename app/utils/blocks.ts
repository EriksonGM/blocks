import type { BlockNode } from '~/types/blocks'

export function blockText(node: BlockNode): string {
  return node.text ?? blockChildren(node).map(blockText).join('')
}

/** Recover word separators between inline elements in the portable content. */
export function blockChildren(node: BlockNode): BlockNode[] {
  const children = node.children ?? []
  if (!['p', 'span', 'strong', 'em', 'label', 'legend', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'a'].includes(node.tag || '')) return children
  return children.flatMap((child, index) => {
    const next = children[index + 1]
    if (!next || child.tag === 'br' || next.tag === 'br') return [child]
    const left = blockText(child), right = blockText(next)
    const wordBoundary = /[a-zA-Z,;]$/.test(left) && /^[a-zA-Z0-9]/.test(right) || /[0-9]$/.test(left) && /^[a-zA-Z]/.test(right)
    return wordBoundary ? [child, { text: ' ', key: `${child.key || index}.separator` }] : [child]
  })
}

export function findBlocks(node: BlockNode, predicate: (node: BlockNode) => boolean): BlockNode[] {
  return [ ...(predicate(node) ? [node] : []), ...(node.children ?? []).flatMap(child => findBlocks(child, predicate)) ]
}

export function referenceAsset(value: string) {
  if (value.startsWith('/reference/')) return value
  if (!value.startsWith('/')) return value
  // Resolve Next's image proxy to the original image file.
  if (value.startsWith('/_next/image')) {
    const original = new URL(value, 'https://shadcnblocks-admin.vercel.app').searchParams.get('url')
    if (original) return referenceAsset(original)
  }
  return `https://shadcnblocks-admin.vercel.app${value}`
}

export function blockClass(node: BlockNode) {
  return String(node.attrs?.class ?? '').replace(/\b(lucide|lucide-[\w-]+)\b/g, '').trim()
}
