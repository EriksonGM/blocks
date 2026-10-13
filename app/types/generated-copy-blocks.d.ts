declare module '#build/copy-blocks.mjs' {
  export const blocks: import('./block-catalog').BlockMeta[]
  export const loaders: Record<string, () => Promise<import('./block-catalog').BlockSource[]>>
}
