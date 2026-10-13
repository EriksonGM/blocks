export interface BlockMeta {
  id: string
  title: string
  page: string
}

export interface BlockSource extends BlockMeta {
  file: string
  filename: string
  component: string
  template: string
  requirements: string[]
  assets: string[]
}
