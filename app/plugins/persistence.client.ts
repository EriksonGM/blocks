export default defineNuxtPlugin((nuxtApp) => {
  const state = useState<Record<string, string | boolean>>('block-values', () => ({}))
  // Restore after hydration so browser-specific drafts match the server's first render.
  nuxtApp.hook('app:mounted', () => {
    try { state.value = JSON.parse(localStorage.getItem('blocks-admin-values') || '{}') } catch { /* Fresh demo state. */ }
    watch(state, () => {
      localStorage.setItem('blocks-admin-values', JSON.stringify(state.value))
    }, { deep: true, flush: 'sync' })
  })
})
