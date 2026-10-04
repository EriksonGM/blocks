<!-- Page: /ai-chat/api-keys | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "API keys · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All7",
    "value": "0"
  },
  {
    "label": "Active5",
    "value": "1"
  },
  {
    "label": "Expired1",
    "value": "2"
  },
  {
    "label": "Revoked1",
    "value": "3"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "nameOwner": "Production · supportSupport service",
    "nameOwnerText3": "Production · support",
    "nameOwnerText5": "Support service",
    "status": "Active",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-success",
    "key": "demo_···a7b2",
    "keyText5": "a7b2",
    "keyArialabel7": "Copy tracking ID for Production · support",
    "project": "Support copilot",
    "permissions": "Restricted",
    "expires": "Nov 24, 2026",
    "lastUsed": "2 min ago",
    "spend": "$86.42",
    "actions": "",
    "actionsGroup": "0",
    "actionsArialabel4": "Revoke Production · support",
    "actionsArialabel5": ""
  },
  {
    "_id": "2",
    "selection": "",
    "nameOwner": "Knowledge indexerKnowledge service",
    "nameOwnerText3": "Knowledge indexer",
    "nameOwnerText5": "Knowledge service",
    "status": "Active",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-success",
    "key": "demo_···e91c",
    "keyText5": "e91c",
    "keyArialabel7": "Copy tracking ID for Knowledge indexer",
    "project": "Knowledge search",
    "permissions": "Restricted",
    "expires": "Nov 28, 2026",
    "lastUsed": "12 min ago",
    "spend": "$54.18",
    "actions": "",
    "actionsGroup": "0",
    "actionsArialabel4": "Revoke Knowledge indexer",
    "actionsArialabel5": ""
  },
  {
    "_id": "3",
    "selection": "",
    "nameOwner": "Content studioOlivia Martin",
    "nameOwnerText3": "Content studio",
    "nameOwnerText5": "Olivia Martin",
    "status": "Active",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-success",
    "key": "demo_···ff80",
    "keyText5": "ff80",
    "keyArialabel7": "Copy tracking ID for Content studio",
    "project": "Content studio",
    "permissions": "All permissions",
    "expires": "Dec 1, 2026",
    "lastUsed": "38 min ago",
    "spend": "$31.86",
    "actions": "",
    "actionsGroup": "0",
    "actionsArialabel4": "Revoke Content studio",
    "actionsArialabel5": ""
  },
  {
    "_id": "4",
    "selection": "",
    "nameOwner": "Legacy content pipelineOlivia Martin",
    "nameOwnerText3": "Legacy content pipeline",
    "nameOwnerText5": "Olivia Martin",
    "status": "Revoked",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-(--ui-error)",
    "key": "demo_···cc90",
    "keyText5": "cc90",
    "keyArialabel7": "Copy tracking ID for Legacy content pipeline",
    "project": "Content studio",
    "permissions": "All permissions",
    "expires": "Revoked Sep 7",
    "lastUsed": "Sep 7",
    "spend": "$7.41",
    "actions": "",
    "actionsGroup": "1",
    "actionsArialabel4": "",
    "actionsArialabel5": "Revoke Legacy content pipeline"
  },
  {
    "_id": "5",
    "selection": "",
    "nameOwner": "Staging · supportAlex Morgan",
    "nameOwnerText3": "Staging · support",
    "nameOwnerText5": "Alex Morgan",
    "status": "Active",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-success",
    "key": "demo_···bb24",
    "keyText5": "bb24",
    "keyArialabel7": "Copy tracking ID for Staging · support",
    "project": "Support copilot",
    "permissions": "Restricted",
    "expires": "Oct 4, 2026",
    "lastUsed": "Yesterday",
    "spend": "$4.29",
    "actions": "",
    "actionsGroup": "0",
    "actionsArialabel4": "Revoke Staging · support",
    "actionsArialabel5": ""
  },
  {
    "_id": "6",
    "selection": "",
    "nameOwner": "Analytics · read onlyAlex Morgan",
    "nameOwnerText3": "Analytics · read only",
    "nameOwnerText5": "Alex Morgan",
    "status": "Active",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-success",
    "key": "demo_···09d3",
    "keyText5": "09d3",
    "keyArialabel7": "Copy tracking ID for Analytics · read only",
    "project": "Support copilot",
    "permissions": "Read only",
    "expires": "Dec 3, 2026",
    "lastUsed": "1 hr ago",
    "spend": "$0.00",
    "actions": "",
    "actionsGroup": "0",
    "actionsArialabel4": "Revoke Analytics · read only",
    "actionsArialabel5": ""
  },
  {
    "_id": "7",
    "selection": "",
    "nameOwner": "Import migrationKnowledge service",
    "nameOwnerText3": "Import migration",
    "nameOwnerText5": "Knowledge service",
    "status": "Expired",
    "statusClass3": "mr-1.5 size-1.5 shrink-0 rounded-full bg-(--ui-error)",
    "key": "demo_···ae64",
    "keyText5": "ae64",
    "keyArialabel7": "Copy tracking ID for Import migration",
    "project": "Knowledge search",
    "permissions": "Restricted",
    "expires": "Sep 1, 2026",
    "lastUsed": "Aug 31",
    "spend": "$0.00",
    "actions": "",
    "actionsGroup": "1",
    "actionsArialabel4": "",
    "actionsArialabel5": "Revoke Import migration"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "selection",
    "header": "",
    "enableSorting": false
  },
  {
    "accessorKey": "nameOwner",
    "header": "Name / owner"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "key",
    "header": "Key"
  },
  {
    "accessorKey": "project",
    "header": "Project"
  },
  {
    "accessorKey": "permissions",
    "header": "Permissions"
  },
  {
    "accessorKey": "expires",
    "header": "Expires"
  },
  {
    "accessorKey": "lastUsed",
    "header": "Last used"
  },
  {
    "accessorKey": "spend",
    "header": "Spend"
  },
  {
    "accessorKey": "actions",
    "header": "Actions"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["nameOwner","status","key","project","permissions","expires","lastUsed","spend","actions"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["selection","nameOwner","status","key","project","permissions","expires","lastUsed","spend","actions"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-api-keys.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/api-keys">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">API keys</h1>
              <p class="text-muted max-w-2xl text-sm">Manage how applications and people access your AI workspace.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Create key" type="button" @click="openAction(&quot;Create key&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
                Create key
              </UButton>
            </div>
          </div>
          <div data-orientation="horizontal" class="w-fit">
            <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Key status" data-orientation="horizontal" style="outline:none" />
          </div>
          <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm font-medium">7 API keys</p>
            <div class="flex flex-wrap items-center justify-end gap-1">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Search API keys" type="button" @click="openAction(&quot;Search API keys&quot;)">
                <UIcon name="i-lucide-search" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                <UIcon name="i-lucide-list-filter" class="size-4" />
                Filter
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-arrow-down-to-line" class="size-4" />
                Export
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="View" type="button" @click="openAction(&quot;View&quot;)">
                <UIcon name="i-lucide-columns-3" class="size-4" />
                View
              </UButton>
            </div>
          </div>
          <div class="overflow-hidden border-y border-default">
            <div class="relative w-full overflow-auto">
              <!-- Table 1: Name / owner / Status / Key / Project / Permissions / Expires / Last used / Spend / Actions -->
              <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[1050px]" aria-label="API key inventory" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                  <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                </template>
                <template #selection-cell="{ row }">
                  <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                </template>
                <template #nameOwner-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Name / owner" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #nameOwner-cell="{ row }">
                  <UButton color="neutral" variant="ghost" class="text-left font-medium whitespace-nowrap hover:underline" aria-label="Production · support" type="button" @click="openAction(&quot;Production · support&quot;, row.original._id, 1)">
                    {{ row.original.nameOwnerText3 }}
                  </UButton>
                  <p class="text-muted mt-1 text-xs">{{ row.original.nameOwnerText5 }}</p>
                </template>
                <template #status-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #status-cell="{ row }">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">
                    <span :class="row.original.statusClass3" />
                    {{ row.original.status }}
                  </div>
                </template>
                <template #key-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Key" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #key-cell="{ row }">
                  <div class="flex items-center gap-1">
                    <span class="font-mono text-xs">demo_···{{ row.original.keyText5 }}</span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.keyArialabel7" type="button" @click="copyValue(&quot;Copy tracking ID for Production · support&quot;)">
                      <UIcon name="i-lucide-copy" class="size-4" />
                    </UButton>
                  </div>
                </template>
                <template #project-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Project" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #project-cell="{ row }">
                  {{ row.original.project }}
                </template>
                <template #permissions-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Permissions" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #permissions-cell="{ row }">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">{{ row.original.permissions }}</div>
                </template>
                <template #expires-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Expires" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #expires-cell="{ row }">
                  {{ row.original.expires }}
                </template>
                <template #lastUsed-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Last used" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #lastUsed-cell="{ row }">
                  {{ row.original.lastUsed }}
                </template>
                <template #spend-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Spend" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #spend-cell="{ row }">
                  {{ row.original.spend }}
                </template>
                <template #actions-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Actions" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #actions-cell="{ row }">
                  <template v-if="row.original.actionsGroup === '0'">
                    <div class="flex justify-end">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.actionsArialabel4" type="button" @click="openAction(&quot;Revoke Production · support&quot;, row.original._id, 1)">
                        <UIcon name="i-lucide-trash-2" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template v-if="row.original.actionsGroup === '1'">
                    <div class="flex justify-end">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.actionsArialabel5" type="button" disabled @click="openAction(&quot;Revoke Legacy content pipeline&quot;, row.original._id, 1)">
                        <UIcon name="i-lucide-trash-2" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                </template>
              </UTable>
            </div>
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
