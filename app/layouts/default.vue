<script setup lang="ts">
import navigation from '~/data/navigation.json'
import pages from '~/data/pages.json'
import type { NavigationMenuItem, DropdownMenuItem } from '@nuxt/ui'

const route = useRoute()
const sidebarOpen = ref(true)
const searchOpen = ref(false)
const notificationOpen = ref(false)
const colorMode = useColorMode()
const appConfig = useAppConfig()
const themeLabel = computed(() => appConfig.ui.colors.primary === 'neutral' ? 'Default' : appConfig.ui.colors.primary.charAt(0).toUpperCase() + appConfig.ui.colors.primary.slice(1))
const themeMenu = computed<DropdownMenuItem[][]>(() => [
  [{ type: 'label', label: 'Accent color' }, ...['neutral', 'blue', 'emerald', 'violet'].map(color => ({
    label: color === 'neutral' ? 'Default' : color.charAt(0).toUpperCase() + color.slice(1),
    type: 'checkbox' as const,
    checked: appConfig.ui.colors.primary === color,
    onSelect: () => updateAppConfig({ ui: { colors: { primary: color } } }),
  }))],
  [{ type: 'label', label: 'Neutral palette' }, ...['neutral', 'slate', 'zinc'].map(color => ({
    label: color.charAt(0).toUpperCase() + color.slice(1),
    type: 'checkbox' as const,
    checked: appConfig.ui.colors.neutral === color,
    onSelect: () => updateAppConfig({ ui: { colors: { neutral: color } } }),
  }))],
  [{ label: 'Light', icon: 'i-lucide-sun', onSelect: () => { colorMode.preference = 'light' } }, { label: 'Dark', icon: 'i-lucide-moon', onSelect: () => { colorMode.preference = 'dark' } }, { label: 'System', icon: 'i-lucide-monitor', onSelect: () => { colorMode.preference = 'system' } }],
])
const appTitles: Record<string, string> = { ecommerce: 'Ecommerce App', 'project-management': 'Project Management', 'payment-processor': 'Payment Processor', 'ai-chat': 'AI Chat App', todo: 'Todo App', original: 'Shadcnblocks Admin', developers: 'Developers App' }
const title = computed(() => pages.find(page => page.path === decodeURIComponent(route.path))?.appTitle || appTitles[route.path.split('/')[1] || ''] || 'Shadcnblocks Admin')
const menuIcons: Record<string, string> = { Dashboard: 'layout-dashboard', Products: 'package', Orders: 'clipboard-list', Customers: 'users', Projects: 'folder-kanban', Teams: 'users', Members: 'contact', Issues: 'list-todo', Tasks: 'list-todo', Manage: 'list-checks', Users: 'users', Settings: 'settings', 'Dev Tools': 'code-xml', Auth: 'shield-check', Errors: 'circle-alert', Composers: 'message-square', Conversations: 'messages-square', 'API Platform': 'layers', Documents: 'file-text', Research: 'search', Applications: 'layout-grid', Skills: 'puzzle', Agents: 'bot', Automations: 'calendar-clock' }
const userMenu = [
  [{ label: 'Profile', icon: 'i-lucide-user', to: '/original/settings/profile' }, { label: 'Billing', icon: 'i-lucide-credit-card', to: '/original/settings/billing' }, { label: 'Settings', icon: 'i-lucide-settings', to: '/original/settings' }],
  [{ label: 'Log out', icon: 'i-lucide-log-out', to: '/login' }],
]
const commandGroups = navigation.groups.map(group => ({
  id: group.label,
  label: group.label,
  items: group.items.flatMap(item => item.links.map(link => ({
    label: `${item.label} / ${link.label}`,
    icon: item.icon ? `i-${item.icon}` : `i-lucide-${menuIcons[item.label] || 'file'}`,
    to: link.path,
    onSelect: () => { searchOpen.value = false },
  }))),
}))
function menuItems(group: typeof navigation.groups[number], state: string): NavigationMenuItem[] {
  return group.items.map(item => ({
    label: item.label,
    icon: item.icon ? `i-${item.icon}` : `i-lucide-${menuIcons[item.label] || 'folder'}`,
    ...(item.links.length === 1 && item.links[0]?.label === item.label ? { to: item.links[0].path } : {
      defaultOpen: item.links.some(link => link.path === decodeURIComponent(route.path)),
      children: item.links.map(link => ({ label: link.label, to: link.path, active: decodeURIComponent(route.path) === link.path })),
    }),
    tooltip: state === 'collapsed',
  }))
}
watch(() => route.path, () => { if (import.meta.client && window.innerWidth < 1024) sidebarOpen.value = false })
function shortcut(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchOpen.value = !searchOpen.value }
}
onMounted(() => { if (window.innerWidth < 1024) sidebarOpen.value = false; window.addEventListener('keydown', shortcut) })
onBeforeUnmount(() => { if (import.meta.client) window.removeEventListener('keydown', shortcut) })
</script>

<template>
  <div class="admin-shell flex h-dvh overflow-hidden bg-default text-default">
    <USidebar v-model:open="sidebarOpen" collapsible="icon" rail :ui="{ container: 'h-dvh', inner: 'bg-muted border-r border-default', header: 'h-14 p-3 border-0', body: 'px-2 py-2', footer: 'border-0 p-2' }">
      <template #header="{ state }">
        <NuxtLink to="/ecommerce/dashboard-1" class="flex min-w-0 items-center gap-2">
          <div class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default"><UIcon name="i-lucide-box" class="size-5" /></div>
          <div v-if="state === 'expanded'" class="min-w-0 leading-tight"><p class="truncate text-xs font-semibold text-highlighted">Shadcnblocks Admin</p><p class="text-xs text-muted">Nuxt + Nuxt UI</p></div>
        </NuxtLink>
        <UButton v-if="sidebarOpen" icon="i-lucide-panel-left" variant="ghost" color="neutral" size="xs" class="ml-auto" aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
      </template>
      <template #default="{ state }">
        <div v-for="group in navigation.groups" :key="group.label" class="mb-5">
          <p v-if="state === 'expanded'" class="px-2 py-2 text-xs font-medium text-muted">{{ group.label }}</p>
          <UNavigationMenu :key="`${group.label}:${state}:${route.path}`" :items="menuItems(group, state)" :collapsed="state === 'collapsed'" orientation="vertical" color="primary" :ui="{ link: 'text-sm font-normal rounded-md px-2 py-2', childList: 'ms-3 border-s border-default ps-3', childLink: 'text-sm font-normal py-2' }" />
        </div>
      </template>
      <template #footer>
        <UDropdownMenu :items="userMenu" :content="{ side: 'top', align: 'start' }">
          <UButton color="neutral" variant="ghost" class="w-full justify-start p-2" aria-label="User menu">
            <UAvatar src="/reference/ausrobdev.png" alt="ausrobdev" class="rounded-lg" />
            <div v-if="sidebarOpen" class="min-w-0 text-left leading-tight"><p class="text-sm font-semibold">ausrobdev</p><p class="truncate text-xs text-muted">rob@shadcnblocks.com</p></div>
            <UIcon v-if="sidebarOpen" name="i-lucide-chevrons-up-down" class="ml-auto size-4" />
          </UButton>
        </UDropdownMenu>
      </template>
    </USidebar>
    <div class="flex min-w-0 flex-1 flex-col">
      <header class="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-default px-3">
        <div class="flex min-w-0 items-center gap-2">
          <UButton icon="i-lucide-panel-left" color="neutral" variant="ghost" :class="sidebarOpen ? 'lg:hidden' : ''" aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
          <h1 class="truncate text-sm font-medium text-highlighted">{{ title }}</h1>
        </div>
        <div class="flex items-center gap-2">
          <UButton icon="i-lucide-search" color="neutral" variant="outline" aria-label="Open command palette" @click="searchOpen = true"><UKbd class="hidden sm:inline-flex" value="meta" /><UKbd class="hidden sm:inline-flex" value="K" /></UButton>
          <UButton icon="i-lucide-bell" color="neutral" variant="outline" class="relative" aria-label="Notifications, 2 unread" @click="notificationOpen = true"><UBadge color="error" variant="solid" size="xs" class="absolute -right-1 -top-1 rounded-full">2</UBadge></UButton>
          <UColorModeButton color="neutral" variant="ghost" />
          <UDropdownMenu :items="themeMenu">
            <UButton color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" class="hidden sm:flex" aria-label="Choose theme"><span class="flex gap-0.5"><span v-for="shade in ['bg-primary', 'bg-accented', 'bg-muted', 'bg-default']" :key="shade" :class="['size-3 rounded border border-default', shade]" /></span>{{ themeLabel }}</UButton>
          </UDropdownMenu>
        </div>
      </header>
      <div id="page-content" class="min-h-0 flex-1 overflow-auto"><slot /></div>
    </div>
    <UModal v-model:open="searchOpen" title="Navigate to a page" description="Search all 219 pages." :ui="{ content: 'max-w-xl' }">
      <template #content><UCommandPalette :groups="commandGroups" placeholder="Search pages..." class="h-96" /></template>
    </UModal>
    <USlideover v-model:open="notificationOpen" title="Notifications" description="You have 2 unread notifications.">
      <template #body>
        <div v-for="(notification, index) in ['Your monthly report is ready', 'New order received']" :key="notification" class="flex gap-3 border-b border-default py-4"><UIcon :name="index ? 'i-lucide-shopping-bag' : 'i-lucide-chart-no-axes-combined'" class="size-5 text-muted" /><div><p class="text-sm font-medium">{{ notification }}</p><p class="mt-1 text-xs text-muted">{{ index ? '5 minutes ago' : '2 minutes ago' }}</p></div></div>
      </template>
    </USlideover>
  </div>
</template>
