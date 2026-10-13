import { addTemplate, defineNuxtModule, updateTemplates } from 'nuxt/kit'
import { buildPageBlocks, catalogPages } from '../scripts/block-catalog.mjs'

export default defineNuxtModule({
  meta: { name: 'copyable-blocks' },
  setup(_options, nuxt) {
    for (const page of catalogPages) {
      addTemplate({
        filename: `copy-blocks/${page.key}.mjs`, write: true,
        getContents: async () => `export default ${JSON.stringify(await buildPageBlocks(page, nuxt.options.rootDir))}\n`,
      })
    }
    addTemplate({
      filename: 'copy-blocks.mjs', write: true,
      getContents: () => `export const blocks = ${JSON.stringify(catalogPages.flatMap(page => page.blocks.map(block => ({ id: block.id, title: block.title, page: page.path }))))}\nexport const loaders = {\n${catalogPages.map(page => `${JSON.stringify(page.path)}: () => import('./copy-blocks/${page.key}.mjs').then(module => module.default)`).join(',\n')}\n}\n`,
    })
    nuxt.hook('builder:watch', async (_event, path) => {
      const normalized = path.replaceAll('\\', '/')
      if (catalogPages.some(page => normalized.endsWith(page.file) || normalized.endsWith(page.file.replace(/^app\//, '')))) {
        await updateTemplates({ filter: template => template.filename.startsWith('copy-blocks/') })
      }
    })
  },
})
