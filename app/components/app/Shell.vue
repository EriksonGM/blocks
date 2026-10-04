<script setup lang="ts">
import navigation from '~/data/reference/navigation.json'
import pages from '~/data/pages.json'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const open = ref(true)
const searchOpen = ref(false)
const notificationOpen = ref(false)
const colorMode = useColorMode()
const standalone = computed(() => ['/login', '/register', '/forgot-password', '/401', '/403', '/404', '/error', '/503', '/terms', '/privacy'].includes(route.path))
const appTitles: Record<string, string> = { ecommerce: 'Ecommerce App', 'project-management': 'Project Management App', 'payment-processor': 'Payment Processor App', 'ai-chat': 'AI Chat App', todo: 'Todo App', original: 'Shadcnblocks Admin', developers: 'Developer Tools' }
const title = computed(() => pages.find(page => page.path === decodeURIComponent(route.path))?.appTitle || appTitles[route.path.split('/')[1] || ''] || 'Shadcnblocks Admin')
const groups = navigation.groups
const menuIcons: Record<string, string> = { Dashboard: 'layout-dashboard', Products: 'package', Orders: 'clipboard-list', Customers: 'users', Projects: 'folder-kanban', Teams: 'users', Members: 'contact', Issues: 'list-todo', Tasks: 'list-todo', Manage: 'list-checks', Users: 'users', Settings: 'settings', 'Dev Tools': 'code-xml', Auth: 'shield-check', Errors: 'circle-alert', Composers: 'message-square', Conversations: 'messages-square', 'API Platform': 'layers', Documents: 'file-text', Research: 'search', Applications: 'layout-grid', Skills: 'puzzle', Agents: 'bot', Automations: 'calendar-clock' }
const userMenu = [
  [{ label: 'Profile', icon: 'i-lucide-user', to: '/original/settings/profile' }, { label: 'Billing', icon: 'i-lucide-credit-card', to: '/original/settings/billing' }, { label: 'Settings', icon: 'i-lucide-settings', to: '/original/settings' }],
  [{ label: 'Log out', icon: 'i-lucide-log-out', to: '/login' }],
]
function menuItems(group: typeof groups[number], state: string): NavigationMenuItem[] {
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

watch(() => route.path, () => { if (import.meta.client && window.innerWidth < 1024) open.value = false })
function shortcut(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchOpen.value = !searchOpen.value }
}
onMounted(() => { if (window.innerWidth < 1024) open.value = false; window.addEventListener('keydown', shortcut) })
onBeforeUnmount(() => { if (import.meta.client) window.removeEventListener('keydown', shortcut) })
</script>

<template>
  <div v-if="standalone" class="min-h-dvh bg-default"><slot /></div>
  <div v-else class="admin-shell flex h-dvh overflow-hidden bg-default">
    <USidebar v-model:open="open" collapsible="icon" rail :ui="{ container: 'h-dvh', inner: 'bg-neutral-50/80 dark:bg-neutral-950 border-r border-default', header: 'h-14 p-3 border-0', body: 'px-2 py-2', footer: 'border-0 p-2' }">
      <template #header="{ state }">
        <NuxtLink to="/ecommerce/dashboard-1" class="flex min-w-0 items-center gap-2">
          <div class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default"><UIcon name="i-lucide-box" class="size-5" /></div>
          <div v-if="state === 'expanded'" class="min-w-0 leading-tight"><p class="truncate text-xs font-semibold">Shadcnblocks Admin</p><p class="text-xs">Nuxt + Nuxt UI</p></div>
        </NuxtLink>
        <UButton v-if="open" icon="i-lucide-panel-left" variant="ghost" color="neutral" size="xs" class="ml-auto" aria-label="Toggle sidebar" @click="open = !open" />
      </template>
      <template #default="{ state }">
        <div v-for="group in groups" :key="group.label" class="mb-5">
          <p v-if="state === 'expanded'" class="px-2 py-2 text-xs font-medium text-muted">{{ group.label }}</p>
          <UNavigationMenu :key="`${group.label}:${state}:${route.path}`" :items="menuItems(group, state)" :collapsed="state === 'collapsed'" orientation="vertical" color="neutral" :ui="{ link: 'text-sm font-normal rounded-md px-2 py-2', childList: 'ms-3 border-s border-default ps-3', childLink: 'text-sm font-normal py-2' }" />
        </div>
      </template>
      <template #footer>
        <UDropdownMenu :items="userMenu" :content="{ side: 'top', align: 'start' }">
          <UButton color="neutral" variant="ghost" class="w-full justify-start p-2" aria-label="User menu">
            <UAvatar src="/reference/ausrobdev.png" alt="ausrobdev" class="rounded-lg" />
            <div v-if="open" class="min-w-0 text-left leading-tight"><p class="text-sm font-semibold">ausrobdev</p><p class="truncate text-xs">rob@shadcnblocks.com</p></div>
            <UIcon v-if="open" name="i-lucide-chevrons-up-down" class="ml-auto size-4" />
          </UButton>
        </UDropdownMenu>
      </template>
    </USidebar>
    <div class="flex min-w-0 flex-1 flex-col">
      <header class="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-default px-3">
        <div class="flex min-w-0 items-center gap-2">
          <UButton icon="i-lucide-panel-left" color="neutral" variant="ghost" :class="open ? 'lg:hidden' : ''" aria-label="Toggle sidebar" @click="open = !open" />
          <h1 class="truncate text-sm font-medium">{{ title }}</h1>
        </div>
        <div class="flex items-center gap-2">
          <UButton icon="i-lucide-search" color="neutral" variant="outline" aria-label="Open command palette" @click="searchOpen = true"><UKbd class="hidden sm:inline-flex" value="meta" /><UKbd class="hidden sm:inline-flex" value="K" /></UButton>
          <UButton icon="i-lucide-bell" color="neutral" variant="outline" class="relative" aria-label="Notifications, 2 unread" @click="notificationOpen = true"><span class="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">2</span></UButton>
          <UColorModeButton color="neutral" variant="ghost" />
          <UDropdownMenu :items="[{ label: 'Light', icon: 'i-lucide-sun', onSelect: () => colorMode.preference = 'light' }, { label: 'Dark', icon: 'i-lucide-moon', onSelect: () => colorMode.preference = 'dark' }, { label: 'System', icon: 'i-lucide-monitor', onSelect: () => colorMode.preference = 'system' }]">
            <UButton color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" class="hidden sm:flex"><span class="flex gap-0.5"><span v-for="shade in ['bg-neutral-900', 'bg-neutral-200', 'bg-neutral-100', 'bg-white']" :key="shade" :class="['size-3 rounded border border-default', shade]" /></span>Default</UButton>
          </UDropdownMenu>
        </div>
      </header>
      <div id="page-content" class="min-h-0 flex-1 overflow-auto"><slot /></div>
    </div>
    <AppCommandPalette v-model:open="searchOpen" />
    <USlideover v-model:open="notificationOpen" title="Notifications" description="You have 2 unread notifications.">
      <template #body>
        <div v-for="(notification, index) in ['Your monthly report is ready', 'New order received']" :key="notification" class="flex gap-3 border-b border-default py-4"><UIcon :name="index ? 'i-lucide-shopping-bag' : 'i-lucide-chart-no-axes-combined'" class="size-5 text-muted" /><div><p class="text-sm font-medium">{{ notification }}</p><p class="mt-1 text-xs text-muted">{{ index ? '5 minutes ago' : '2 minutes ago' }}</p></div></div>
      </template>
    </USlideover>
    <AppActionDialog />
  </div>
</template>
