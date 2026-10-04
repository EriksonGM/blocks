<!-- Page: /ai-chat/credit-usage | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Credit usage · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchAgents": ""
})

const tabs1Active = ref("1")

const tabs1Items = [
  {
    "label": "Daily",
    "value": "0"
  },
  {
    "label": "Weekly",
    "value": "1"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Agents",
    "value": "0"
  },
  {
    "label": "Power users",
    "value": "1"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "agent": "Inbox triage",
    "category": "Customer support",
    "runs": "842",
    "hoursSaved": "164",
    "creditsUsed": "12,740",
    "share": "24.5%"
  },
  {
    "_id": "2",
    "agent": "Release notes writer",
    "category": "Content",
    "runs": "367",
    "hoursSaved": "73",
    "creditsUsed": "6,380",
    "share": "12.3%"
  },
  {
    "_id": "3",
    "agent": "Account research",
    "category": "Research",
    "runs": "596",
    "hoursSaved": "208",
    "creditsUsed": "9,120",
    "share": "17.6%"
  },
  {
    "_id": "4",
    "agent": "Meeting follow-ups",
    "category": "Operations",
    "runs": "224",
    "hoursSaved": "56",
    "creditsUsed": "4,280",
    "share": "8.2%"
  },
  {
    "_id": "5",
    "agent": "Product feedback digest",
    "category": "Research",
    "runs": "413",
    "hoursSaved": "119",
    "creditsUsed": "7,960",
    "share": "15.3%"
  },
  {
    "_id": "6",
    "agent": "Help center editor",
    "category": "Content",
    "runs": "178",
    "hoursSaved": "42",
    "creditsUsed": "3,510",
    "share": "6.8%"
  },
  {
    "_id": "7",
    "agent": "Pipeline health check",
    "category": "Operations",
    "runs": "309",
    "hoursSaved": "87",
    "creditsUsed": "5,820",
    "share": "11.2%"
  },
  {
    "_id": "8",
    "agent": "Onboarding guide",
    "category": "Customer support",
    "runs": "127",
    "hoursSaved": "31",
    "creditsUsed": "2,140",
    "share": "4.1%"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "agent",
    "header": "Agent"
  },
  {
    "accessorKey": "category",
    "header": "Category"
  },
  {
    "accessorKey": "runs",
    "header": "Runs"
  },
  {
    "accessorKey": "hoursSaved",
    "header": "Hours saved"
  },
  {
    "accessorKey": "creditsUsed",
    "header": "Credits used"
  },
  {
    "accessorKey": "share",
    "header": "Share"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchAgents || '').toLowerCase()
  const keys = ["agent","category","runs","hoursSaved","creditsUsed","share"] as const
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["agent","category","runs","hoursSaved","creditsUsed","share"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-credit-usage.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/credit-usage">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-5xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Credit usage</h1>
              <p class="text-muted max-w-2xl text-sm">A closer look at what your team is creating, running, and saving.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Usage period" data-orientation="horizontal" style="outline:none" />
            </div>
          </div>
          <div class="flex flex-col gap-10 pt-3">
            <!-- Card 1: Business plan -->
            <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
              <div class="flex space-y-1.5 p-6 flex-row flex-wrap items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                    <UIcon name="i-lucide-chart-no-axes-column" class="size-5" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <div class="leading-none font-semibold tracking-tight">Business plan</div>
                    <div class="text-muted text-sm">Team workspace · Monthly billing</div>
                  </div>
                </div>
                <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" to="/ai-chat/billing">
                  Manage plan
                </NuxtLink>
              </div>
              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
              <div class="p-6 flex flex-col gap-5 pt-6">
                <div class="flex flex-wrap items-end justify-between gap-3">
                  <div class="flex flex-col gap-1">
                    <span class="text-muted text-xs">Credits used this week</span>
                    <span class="text-3xl font-semibold tracking-tight tabular-nums">234,050</span>
                  </div>
                  <span class="text-muted text-xs">10–16 Sep 2026</span>
                </div>
                <div role="img" aria-label="Credit usage: organization 182,100 credits, agents 51,950 credits" class="flex h-3 gap-1">
                  <div class="rounded-md bg-success transition-[width] duration-300 motion-reduce:transition-none" style="width:77.80388805810723%" />
                  <div class="rounded-md bg-success/35 transition-[width] duration-300 motion-reduce:transition-none" style="width:22.196111941892756%" />
                </div>
                <div class="text-muted flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm">
                  <div class="flex flex-wrap gap-x-6 gap-y-2">
                    <span class="flex items-center gap-2">
                      <span class="size-2 rounded-sm bg-success" />
                      Organization usage (182.1Kcredits)
                    </span>
                    <span class="flex items-center gap-2">
                      <span class="size-2 rounded-sm bg-success/35" />
                      Agent usage (52K credits)
                    </span>
                  </div>
                  <span>Renews on 28 Sep 2026</span>
                </div>
              </div>
              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
              <div class="items-center grid grid-cols-2 divide-x p-0 md:grid-cols-4">
                <div class="flex flex-col gap-1.5 p-5">
                  <span class="text-2xl font-semibold tracking-tight tabular-nums">780</span>
                  <span class="text-muted text-sm">Hours saved</span>
                </div>
                <div class="flex flex-col gap-1.5 p-5">
                  <span class="text-2xl font-semibold tracking-tight tabular-nums">8</span>
                  <span class="text-muted text-sm">Active agents</span>
                </div>
                <div class="flex flex-col gap-1.5 p-5">
                  <span class="text-2xl font-semibold tracking-tight tabular-nums">3,056</span>
                  <span class="text-muted text-sm">Completed runs</span>
                </div>
                <div class="flex flex-col gap-1.5 p-5">
                  <span class="text-2xl font-semibold tracking-tight tabular-nums">437</span>
                  <span class="text-muted text-sm">Runs / day avg.</span>
                </div>
              </div>
            </UCard>
            <div data-orientation="horizontal" class="flex flex-col gap-4">
              <div class="flex flex-wrap items-center justify-between gap-4">
                <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Usage breakdown" data-orientation="horizontal" style="outline:none" />
                <div class="flex w-full flex-wrap items-center gap-2 sm:w-auto">
                  <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-full sm:w-60">
                    <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                      <UIcon name="i-lucide-search" class="size-4" />
                    </div>
                    <UInput v-model="form.searchAgents" type="text" data-slot="input-group-control" aria-label="Search agents" placeholder="Search agents…" name="searchAgents" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Export" type="button" @click="exportCsv()">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Export
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 border-dashed" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Filter
                  </UButton>
                </div>
              </div>
              <div data-orientation="horizontal" id="radix-_R_1atbsnpfknmlb_-content-agents" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-3" style="animation-duration:0s">
                <div class="overflow-hidden rounded-xl border border-default">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Agent / Category / Runs / Hours saved / Credits used / Share -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[800px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #agent-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Agent" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #agent-cell="{ row }">
                        {{ row.original.agent }}
                      </template>
                      <template #category-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Category" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #category-cell="{ row }">
                        {{ row.original.category }}
                      </template>
                      <template #runs-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Runs" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #runs-cell="{ row }">
                        {{ row.original.runs }}
                      </template>
                      <template #hoursSaved-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Hours saved" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #hoursSaved-cell="{ row }">
                        {{ row.original.hoursSaved }}
                      </template>
                      <template #creditsUsed-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Credits used" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #creditsUsed-cell="{ row }">
                        {{ row.original.creditsUsed }}
                      </template>
                      <template #share-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Share" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #share-cell="{ row }">
                        {{ row.original.share }}
                      </template>
                    </UTable>
                  </div>
                </div>
                <div class="text-muted flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>8 of 8agents</span>
                  <span>10–16 Sep 2026 · Share ofagent credits</span>
                </div>
              </div>
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
