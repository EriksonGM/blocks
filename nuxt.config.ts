export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', './modules/block-catalog.mjs'],
  colorMode: { preference: 'light' },
  app: { head: { title: 'Blocks Admin · Nuxt UI', meta: [{ name: 'description', content: 'Complete admin pages written directly with Nuxt UI.' }] } },
  icon: { serverBundle: { collections: ['lucide'] } },
})
