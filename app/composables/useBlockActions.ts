import navigation from '~/data/reference/navigation.json'
import type { BlockNode } from '~/types/blocks'

export function useBlockActions() {
  const route = useRoute()
  const toast = useToast()
  const values = useState<Record<string, string | boolean>>('block-values', () => ({}))
  const messages = useState<Record<string, { role: string, text: string }[]>>('block-messages', () => ({}))
  const dialog = useState<{ open: boolean, title: string, mode: string }>('block-dialog', () => ({ open: false, title: '', mode: '' }))
  const allLinks = navigation.groups.flatMap(g => g.items.flatMap(i => i.links))

  function key(node: BlockNode, suffix = '') {
    return `${route.path}:${node.key || node.attrs?.id || node.attrs?.name || node.attrs?.placeholder || node.attrs?.['aria-label'] || blockText(node).slice(0, 120)}:${suffix}`
  }

  async function act(node: BlockNode) {
    const label = (blockText(node) || String(node.attrs?.['aria-label'] || '')).trim()
    const lower = label.toLowerCase()
    const section = route.path.split('/')[1]
    if (/^(log ?in|sign ?in|sign ?up|register|create an account|go home|back to home|back to dashboard)$/.test(lower)) return navigateTo('/ecommerce/dashboard-1')
    if (route.path === '/forgot-password') { toast.add({ title: 'Reset link requested', description: 'Demo: connect this form to your authentication provider.', color: 'success' }); return }
    const direct = allLinks.find(link => link.path.startsWith(`/${section}/`) && link.label.toLowerCase() === lower)
    if (direct && direct.path !== route.path) return navigateTo(direct.path)
    if (/^(cancel|back|go back)$/.test(lower)) {
      const target = allLinks.find(link => link.path.startsWith(`/${section}/`) && /list-1|transactions$|customers$/.test(link.path))
      return navigateTo(target?.path || '/ecommerce/dashboard-1')
    }
    if (/export|download|csv/.test(lower)) {
      const page = await usePageBlocks(route.path)
      const rows = findBlocks(page.tree, block => block.tag === 'tr')
      const quote = (value: string) => `"${value.replaceAll('"', '""')}"`
      const content = rows.length
        ? rows.map(row => row.children?.filter(cell => cell.tag === 'td' || cell.tag === 'th').map(cell => quote(blockText(cell).trim())).join(',')).join('\n')
        : 'Field,Value\n' + Object.entries(values.value).filter(([k]) => k.startsWith(route.path)).map(([k, v]) => `${quote(k)},${quote(String(v))}`).join('\n')
      const url = URL.createObjectURL(new Blob([content], { type: 'text/csv' }))
      const anchor = document.createElement('a')
      anchor.href = url; anchor.download = `${section}-export.csv`; anchor.click(); URL.revokeObjectURL(url)
      return
    }
    if (/copy/.test(lower)) {
      navigator.clipboard?.writeText(String(node.attrs?.value || label))
      toast.add({ title: 'Copied to clipboard', color: 'success' }); return
    }
    if (/save|publish|create|add|new|invite|edit|delete|remove|refund|archive|schedule|filter|more|actions|send|submit|generate|run|approve|reject/i.test(lower) || !label) {
      dialog.value = { open: true, title: label || 'Actions', mode: /delete|remove|archive/.test(lower) ? 'delete' : /save|publish|submit/.test(lower) ? 'save' : 'edit' }
      return
    }
    if (/print/.test(lower)) { window.print(); return }
    values.value[key(node, 'active')] = !values.value[key(node, 'active')]
  }

  function save() {
    toast.add({ title: dialog.value.mode === 'delete' ? 'Item removed' : 'Changes saved', description: 'Your changes are saved in this browser.', color: 'success', icon: 'i-lucide-check' })
    dialog.value.open = false
  }

  function send(node: BlockNode, message: string) {
    if (!message.trim()) return
    const history = messages.value[route.path] ||= []
    history.push({ role: 'user', text: message })
    history.push({ role: 'assistant', text: 'Your message has been added to this demo conversation. Connect this reusable composer to your API using its submit event.' })
    values.value[key(node)] = ''
  }
  function submit() {
    if (['/login', '/register'].includes(route.path)) return navigateTo('/ecommerce/dashboard-1')
    if (route.path === '/forgot-password') { toast.add({ title: 'Reset link requested', color: 'success' }); return }
    dialog.value = { open: true, title: 'Save changes', mode: 'save' }
  }
  return { values, messages, dialog, key, act, save, send, submit }
}
