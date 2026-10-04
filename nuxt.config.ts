export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  colorMode: { preference: 'light' },
  app: { head: { title: 'Blocks Admin · Nuxt UI', meta: [{ name: 'description', content: 'Reusable admin blocks built with Nuxt UI.' }] } },
  icon: { serverBundle: { collections: ['lucide'] } },
})
