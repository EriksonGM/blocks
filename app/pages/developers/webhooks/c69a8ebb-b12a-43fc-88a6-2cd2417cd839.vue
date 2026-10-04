<!-- Page: /developers/webhooks/c69a8ebb-b12a-43fc-88a6-2cd2417cd839 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Webhooks · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "filterURLEndpoint": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "iD": "4ec192a9-ba72-437f-91f1-75fcb2048e264ec192a9-ba72-437f-91f1-75fcb2048e26",
    "iDText20": "4ec192a9-ba72-437f-91f1-75fcb2048e26",
    "iDText26": "4ec192a9-ba72-437f-91f1-75fcb2048e26",
    "uRLEndpoint": "https://honorable-term.org/",
    "uRLEndpointHref3": "/developers/webhooks/4ec192a9-ba72-437f-91f1-75fcb2048e26",
    "events": "4",
    "type": "application",
    "status": "enabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize border-success/20 bg-success/10 text-success dark:bg-success dark:text-success"
  },
  {
    "_id": "2",
    "iD": "351b34ca-e399-498b-b599-a2d8aea09f1e351b34ca-e399-498b-b599-a2d8aea09f1e",
    "iDText20": "351b34ca-e399-498b-b599-a2d8aea09f1e",
    "iDText26": "351b34ca-e399-498b-b599-a2d8aea09f1e",
    "uRLEndpoint": "https://frilly-squid.org/",
    "uRLEndpointHref3": "/developers/webhooks/351b34ca-e399-498b-b599-a2d8aea09f1e",
    "events": "1",
    "type": "none",
    "status": "enabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize border-success/20 bg-success/10 text-success dark:bg-success dark:text-success"
  },
  {
    "_id": "3",
    "iD": "44c7435f-88df-42b6-9b6a-4ae100fbbae144c7435f-88df-42b6-9b6a-4ae100fbbae1",
    "iDText20": "44c7435f-88df-42b6-9b6a-4ae100fbbae1",
    "iDText26": "44c7435f-88df-42b6-9b6a-4ae100fbbae1",
    "uRLEndpoint": "https://vivid-taro.info",
    "uRLEndpointHref3": "/developers/webhooks/44c7435f-88df-42b6-9b6a-4ae100fbbae1",
    "events": "4",
    "type": "platform",
    "status": "enabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize border-success/20 bg-success/10 text-success dark:bg-success dark:text-success"
  },
  {
    "_id": "4",
    "iD": "d5dda729-b41a-417f-af34-d47b7d9ae8cfd5dda729-b41a-417f-af34-d47b7d9ae8cf",
    "iDText20": "d5dda729-b41a-417f-af34-d47b7d9ae8cf",
    "iDText26": "d5dda729-b41a-417f-af34-d47b7d9ae8cf",
    "uRLEndpoint": "https://trusting-redesign.biz",
    "uRLEndpointHref3": "/developers/webhooks/d5dda729-b41a-417f-af34-d47b7d9ae8cf",
    "events": "3",
    "type": "application",
    "status": "enabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize border-success/20 bg-success/10 text-success dark:bg-success dark:text-success"
  },
  {
    "_id": "5",
    "iD": "fe807c0d-ec41-4588-a01b-1e928a596a7bfe807c0d-ec41-4588-a01b-1e928a596a7b",
    "iDText20": "fe807c0d-ec41-4588-a01b-1e928a596a7b",
    "iDText26": "fe807c0d-ec41-4588-a01b-1e928a596a7b",
    "uRLEndpoint": "https://meager-subsidy.com/",
    "uRLEndpointHref3": "/developers/webhooks/fe807c0d-ec41-4588-a01b-1e928a596a7b",
    "events": "3",
    "type": "none",
    "status": "disabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default"
  },
  {
    "_id": "6",
    "iD": "1e7330ae-2ecc-4c78-ad3f-150db236365c1e7330ae-2ecc-4c78-ad3f-150db236365c",
    "iDText20": "1e7330ae-2ecc-4c78-ad3f-150db236365c",
    "iDText26": "1e7330ae-2ecc-4c78-ad3f-150db236365c",
    "uRLEndpoint": "https://optimal-bungalow.net/",
    "uRLEndpointHref3": "/developers/webhooks/1e7330ae-2ecc-4c78-ad3f-150db236365c",
    "events": "4",
    "type": "none",
    "status": "disabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default"
  },
  {
    "_id": "7",
    "iD": "0a026dda-9b18-4a46-9b27-1ab2f27ad0cc0a026dda-9b18-4a46-9b27-1ab2f27ad0cc",
    "iDText20": "0a026dda-9b18-4a46-9b27-1ab2f27ad0cc",
    "iDText26": "0a026dda-9b18-4a46-9b27-1ab2f27ad0cc",
    "uRLEndpoint": "https://lazy-nectarine.net",
    "uRLEndpointHref3": "/developers/webhooks/0a026dda-9b18-4a46-9b27-1ab2f27ad0cc",
    "events": "5",
    "type": "none",
    "status": "disabled",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "iD",
    "header": "ID"
  },
  {
    "accessorKey": "uRLEndpoint",
    "header": "URL Endpoint"
  },
  {
    "accessorKey": "events",
    "header": "Events"
  },
  {
    "accessorKey": "type",
    "header": "Type"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.filterURLEndpoint || '').toLowerCase()
  const keys = ["iD","uRLEndpoint","events","type","status"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Restore drafts after hydration; the first client render matches SSR.
onMounted(() => {
  const key = 'nuxt-ui-page:' + route.path
  try {
    const draft = localStorage.getItem(key)
    if (draft) Object.assign(form, JSON.parse(draft))
  } catch { /* Use the defaults when no draft exists. */ }
  watch(form, value => localStorage.setItem(key, JSON.stringify(value)), { deep: true, flush: 'sync' })
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/webhooks/c69a8ebb-b12a-43fc-88a6-2cd2417cd839">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Developers</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Webhooks</span>
              </div>
              <div class="relative xl:mx-auto xl:w-full xl:max-w-md">
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default py-2 bg-(--ui-bg-muted)/70 text-muted hover:bg-(--ui-bg-muted)/90 hover:text-highlighted h-10 w-full justify-start rounded-full border-none px-3 font-normal shadow-none" aria-label="Search pages or run commands⌘K" type="button" @click="openAction(&quot;Search pages or run commands⌘K&quot;)">
                  <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                  <span class="min-w-0 flex-1 truncate text-left">Search pages or run commands</span>
                  <UKbd class="bg-default pointer-events-none hidden h-6 shrink-0 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex border-default">⌘K</UKbd>
                </UButton>
              </div>
            </div>
          </header>
          <div class="min-h-0 flex-1 overflow-auto has-[&gt;[data-layout=fixed]]:flex has-[&gt;[data-layout=fixed]]:overflow-hidden">
            <main id="main-content" class="flex w-full flex-1 flex-col gap-2 p-4 sm:p-6">
              <div class="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 class="text-2xl font-bold text-highlighted">Webhooks</h2>
                  <p class="text-muted text-sm">Setup, integrate and monitor webhooks.</p>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Add Webhook" type="button" @click="openAction(&quot;Add Webhook&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                   Add Webhook
                </UButton>
              </div>
              <div class="h-full flex-1">
                <div class="mt-4 space-y-2">
                  <div class="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
                    <UInput v-model="form.filterURLEndpoint" type="text" placeholder="Filter URL endpoint..." name="filterURLEndpoint" class="flex rounded-md text-base md:text-sm h-8 w-[250px]" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="rounded-md">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: ID / URL Endpoint / Events / Type / Status -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[43rem] sm:table-fixed" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #iD-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #iD-cell="{ row }">
                          <div class="flex items-center gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-6 scale-100 rounded-full" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                              </svg>
                            </UButton>
                            <div class="hidden sm:block">
                              <div class="truncate w-28">{{ row.original.iDText20 }}</div>
                            </div>
                            <div class="sm:hidden">
                              <div class="truncate w-28" type="button">{{ row.original.iDText26 }}</div>
                            </div>
                            <div class="w-3 max-w-36" />
                          </div>
                        </template>
                        <template #uRLEndpoint-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="URL Endpoint" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #uRLEndpoint-cell="{ row }">
                          <NuxtLink class="underline decoration-dashed underline-offset-2 hover:decoration-solid" :to="row.original.uRLEndpointHref3">
                            <div class="truncate min-w-40">{{ row.original.uRLEndpoint }}</div>
                          </NuxtLink>
                        </template>
                        <template #events-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Events" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #events-cell="{ row }">
                          <div class="text-center">{{ row.original.events }}</div>
                        </template>
                        <template #type-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Type" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #type-cell="{ row }">
                          <div class="truncate capitalize">{{ row.original.type }}</div>
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <div>
                            <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                          </div>
                        </template>
                      </UTable>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
    <!-- Page-local action dialog -->
    <UModal v-model:open="actionDialog.open" :title="actionDialog.title" description="Update the details below.">
      <template #body>
        <p v-if="actionDialog.mode === 'delete'" class="text-sm text-muted">Are you sure you want to remove this item?</p>
        <div v-else class="space-y-4">
          <UFormField label="Name"><UInput v-model="actionDialog.name" class="w-full" /></UFormField>
          <UFormField label="Description"><UTextarea v-model="actionDialog.description" class="w-full" /></UFormField>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton color="neutral" variant="outline" @click="actionDialog.open = false">Cancel</UButton>
          <UButton :color="actionDialog.mode === 'delete' ? 'error' : 'primary'" @click="confirmAction">{{ actionDialog.mode === 'delete' ? 'Remove' : 'Save changes' }}</UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<style scoped>

.page-content { min-height: 0; color: var(--ui-text); --chart-1: var(--ui-primary); --chart-2: var(--ui-text-highlighted); --chart-3: var(--ui-text-muted); --chart-4: var(--ui-text-dimmed); --chart-5: var(--ui-border-accented); --chart-6: var(--ui-border); --radius: var(--ui-radius); }
.page-content > div { min-height: 100%; }
.page-content *, .page-content ::before, .page-content ::after { border-color: var(--ui-border); }
.page-content [data-slot="scroll-area-viewport"] { overflow: auto !important; scrollbar-width: thin; }
.page-content [data-slot="scroll-area-scrollbar"] { display: none; }
.page-content pre { overflow: auto; }
.page-content img { object-fit: cover; }
</style>
