export default defineAppConfig({
  ui: {
    colors: { primary: 'neutral', secondary: 'violet', neutral: 'neutral', success: 'emerald', info: 'blue', warning: 'amber', error: 'red' },
    button: { slots: { base: 'cursor-pointer' } },
    sidebar: { slots: { root: 'shrink-0', inner: 'bg-muted', body: 'px-2' } },
  },
})
