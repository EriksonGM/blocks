/** Serializable, framework-independent content for a reusable Nuxt UI block. */
export interface BlockNode {
  key?: string
  tag?: string
  text?: string
  attrs?: Record<string, string>
  children?: BlockNode[]
  options?: string[]
  panels?: { label: string, tree: BlockNode }[]
}

export interface PageBlocks {
  path: string
  label: string
  appTitle: string
  headings: string[]
  tree: BlockNode
}

export interface NavigationGroup {
  label: string
  items: { label: string, icon?: string, links: { label: string, path: string }[] }[]
}
