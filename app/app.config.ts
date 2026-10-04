export default defineAppConfig({
  ui: {
    colors: { primary: 'neutral', neutral: 'neutral' },
    button: { slots: { base: 'cursor-pointer' } },
    sidebar: { slots: { root: 'shrink-0', inner: 'bg-neutral-50 dark:bg-neutral-950', body: 'px-2' } },
  },
})
