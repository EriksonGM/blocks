<!-- Page: /project-management/issue-spreadsheet-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Issue Spreadsheet 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchIssues": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "issues": "RFC-101Finalize issue timeline architecture",
    "issuesText6": "RFC-101",
    "issuesText8": "Finalize issue timeline architecture",
    "status": "In Progress",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/30 dark:text-warning",
    "statusClass3": "size-1.5 rounded-full bg-warning dark:bg-warning",
    "priority": "high",
    "assignee": "Nina Oliver",
    "assigneeGroup": "0",
    "assigneeAlt5": "Nina Oliver",
    "assigneeSrc6": "/reference/ac13c01a479a177b.png",
    "labels": "timelinefrontend",
    "labelsGroup": "0",
    "labelsText6": "timeline",
    "labelsText10": "frontend",
    "startDate": "2026-04-02",
    "dueDate": "2026-04-10",
    "cycle": "Q2 Launch",
    "modules": "Platform"
  },
  {
    "_id": "2",
    "issues": "RFC-102Review gantt interaction states",
    "issuesText6": "RFC-102",
    "issuesText8": "Review gantt interaction states",
    "status": "Todo",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/30 dark:text-info",
    "statusClass3": "size-1.5 rounded-full bg-info dark:bg-info",
    "priority": "medium",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "review",
    "labelsGroup": "1",
    "labelsText6": "review",
    "labelsText10": "",
    "startDate": "2026-04-04",
    "dueDate": "2026-04-06",
    "cycle": "Q2 Launch",
    "modules": "Planning"
  },
  {
    "_id": "3",
    "issues": "RFC-103Sync issue filters with project views",
    "issuesText6": "RFC-103",
    "issuesText8": "Sync issue filters with project views",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/30 dark:text-secondary",
    "statusClass3": "size-1.5 rounded-full bg-secondary dark:bg-secondary",
    "priority": "high",
    "assignee": "Kai Young",
    "assigneeGroup": "0",
    "assigneeAlt5": "Kai Young",
    "assigneeSrc6": "/reference/82a5a2284fceeed0.png",
    "labels": "viewsfilters",
    "labelsGroup": "0",
    "labelsText6": "views",
    "labelsText10": "filters",
    "startDate": "2026-04-08",
    "dueDate": "2026-04-16",
    "cycle": "Q2 Launch",
    "modules": "Views"
  },
  {
    "_id": "4",
    "issues": "RFC-104Document drag and resize behavior",
    "issuesText6": "RFC-104",
    "issuesText8": "Document drag and resize behavior",
    "status": "Backlog",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-default dark:text-default",
    "statusClass3": "size-1.5 rounded-full bg-accented dark:bg-accented",
    "priority": "None",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "guidelines",
    "labelsGroup": "1",
    "labelsText6": "guidelines",
    "labelsText10": "",
    "startDate": "-",
    "dueDate": "-",
    "cycle": "None",
    "modules": "Guidelines"
  },
  {
    "_id": "5",
    "issues": "RFC-105Create empty and loading timeline states",
    "issuesText6": "RFC-105",
    "issuesText8": "Create empty and loading timeline states",
    "status": "Todo",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/30 dark:text-info",
    "statusClass3": "size-1.5 rounded-full bg-info dark:bg-info",
    "priority": "medium",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "states",
    "labelsGroup": "1",
    "labelsText6": "states",
    "labelsText10": "",
    "startDate": "2026-04-14",
    "dueDate": "2026-04-21",
    "cycle": "Q2 Launch",
    "modules": "States"
  },
  {
    "_id": "6",
    "issues": "RFC-106Add mock dependencies and handoff notes",
    "issuesText6": "RFC-106",
    "issuesText8": "Add mock dependencies and handoff notes",
    "status": "Done",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/30 dark:text-success",
    "statusClass3": "size-1.5 rounded-full bg-success dark:bg-success",
    "priority": "low",
    "assignee": "Lena Moss",
    "assigneeGroup": "0",
    "assigneeAlt5": "Lena Moss",
    "assigneeSrc6": "/reference/a99c47c2fa3dc656.png",
    "labels": "handoff",
    "labelsGroup": "1",
    "labelsText6": "handoff",
    "labelsText10": "",
    "startDate": "2026-04-03",
    "dueDate": "2026-04-07",
    "cycle": "Completed",
    "modules": "Operations"
  },
  {
    "_id": "7",
    "issues": "RFC-107Polish the quarter view density",
    "issuesText6": "RFC-107",
    "issuesText8": "Polish the quarter view density",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/30 dark:text-secondary",
    "statusClass3": "size-1.5 rounded-full bg-secondary dark:bg-secondary",
    "priority": "medium",
    "assignee": "Ava Reed",
    "assigneeGroup": "0",
    "assigneeAlt5": "Ava Reed",
    "assigneeSrc6": "/reference/5985a55c7498fe2e.png",
    "labels": "density",
    "labelsGroup": "1",
    "labelsText6": "density",
    "labelsText10": "",
    "startDate": "2026-04-06",
    "dueDate": "2026-04-08",
    "cycle": "Q2 Launch",
    "modules": "Calendar"
  },
  {
    "_id": "8",
    "issues": "RFC-108Prepare issue calendar follow-up screen",
    "issuesText6": "RFC-108",
    "issuesText8": "Prepare issue calendar follow-up screen",
    "status": "Backlog",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-default dark:text-default",
    "statusClass3": "size-1.5 rounded-full bg-accented dark:bg-accented",
    "priority": "None",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "calendar",
    "labelsGroup": "1",
    "labelsText6": "calendar",
    "labelsText10": "",
    "startDate": "-",
    "dueDate": "-",
    "cycle": "None",
    "modules": "Calendar"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "issues",
    "header": "Issues"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "priority",
    "header": "Priority"
  },
  {
    "accessorKey": "assignee",
    "header": "Assignee"
  },
  {
    "accessorKey": "labels",
    "header": "Labels"
  },
  {
    "accessorKey": "startDate",
    "header": "Start date"
  },
  {
    "accessorKey": "dueDate",
    "header": "Due date"
  },
  {
    "accessorKey": "cycle",
    "header": "Cycle"
  },
  {
    "accessorKey": "modules",
    "header": "Modules"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchIssues || '').toLowerCase()
  const keys = ["issues","status","priority","assignee","labels","startDate","dueDate","cycle","modules"] as const
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-spreadsheet-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex h-full flex-col overflow-hidden">
          <div class="border-b border-default">
            <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
              <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                <div class="flex shrink-0 items-center gap-2 pr-1">
                  <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-folder-kanban" class="size-4" />
                  </div>
                  <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                </div>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-8 shrink-0 rounded-md" aria-label="Project options" type="button" @click="openAction(&quot;Project options&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                </UButton>
                <div class="mx-4 h-5 w-px shrink-0 border-l border-default" />
                <div class="flex items-center gap-1">
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors bg-muted text-highlighted" aria-label="Issues" type="button" @click="openAction(&quot;Issues&quot;)">
                    Issues
                    <span class="bg-(--ui-text-highlighted) absolute bottom-[-14px] left-1/2 h-0.5 w-[80%] -translate-x-1/2 rounded-t-md" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Cycles" type="button" @click="openAction(&quot;Cycles&quot;)">
                    Cycles
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Modules" type="button" @click="openAction(&quot;Modules&quot;)">
                    Modules
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Views" type="button" @click="openAction(&quot;Views&quot;)">
                    Views
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Pages" type="button" @click="openAction(&quot;Pages&quot;)">
                    Pages
                  </UButton>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 text-xs h-9 rounded-lg px-4" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                  <UIcon name="i-lucide-plus" class="mr-2 size-3.5" />
                  Add issue
                </UButton>
              </div>
            </div>
          </div>
          <div class="border-b px-4 py-3 sm:px-6 border-default">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <span class="text-[15px] font-semibold">8 Issues</span>
              </div>
              <div class="grid min-w-0 grid-cols-3 items-center gap-2 sm:flex sm:flex-row sm:items-center">
                <div class="relative col-span-3 min-w-0 sm:w-60 lg:w-72">
                  <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                  <UInput v-model="form.searchIssues" type="text" placeholder="Search issues" aria-label="Search issues" name="searchIssues" class="flex w-full text-base md:text-sm h-9 rounded-lg pl-9" :ui="{ base: 'h-full' }" />
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs h-9 w-full justify-center rounded-lg sm:w-auto" aria-label="Status" type="button" @click="openAction(&quot;Status&quot;)">
                  <UIcon name="i-lucide-circle-dot" class="size-3.5" />
                  Status
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs h-9 w-full justify-center rounded-lg sm:w-auto" aria-label="Filters" type="button" @click="openAction(&quot;Filters&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Filters
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs h-9 w-full justify-center rounded-lg sm:w-auto" aria-label="Sort" type="button" @click="openAction(&quot;Sort&quot;)">
                  <UIcon name="i-lucide-arrow-up-down" class="size-3.5" />
                  Sort
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="horizontal-scrollbar vertical-scrollbar h-full overflow-auto">
              <!-- Table 1: Issues / Status / Priority / Assignee / Labels / Start date / Due date / Cycle / Modules -->
              <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1340px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #issues-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Issues" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #issues-cell="{ row }">
                  <div class="flex items-center justify-between gap-3">
                    <div class="min-w-0">
                      <div class="flex items-center gap-3">
                        <span class="shrink-0 text-[11px] font-medium tracking-[0.12em] text-muted uppercase dark:text-muted">{{ row.original.issuesText6 }}</span>
                        <span class="truncate text-[13px] font-medium text-highlighted dark:text-highlighted">{{ row.original.issuesText8 }}</span>
                      </div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 1)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </template>
                <template #status-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #status-cell="{ row }">
                  <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                    <span :class="row.original.statusClass3" />
                    <span>{{ row.original.status }}</span>
                  </UBadge>
                </template>
                <template #priority-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Priority" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #priority-cell="{ row }">
                  <div class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-flag" class="text-muted size-3.5" />
                    <span class="capitalize">{{ row.original.priority }}</span>
                  </div>
                </template>
                <template #assignee-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Assignee" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #assignee-cell="{ row }">
                  <template v-if="row.original.assigneeGroup === '0'">
                    <div class="inline-flex items-center gap-2">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                        <img class="aspect-square h-full w-full" :alt="row.original.assigneeAlt5" :src="row.original.assigneeSrc6" loading="lazy" />
                      </span>
                      <span class="truncate text-[13px]">{{ row.original.assignee }}</span>
                    </div>
                  </template>
                  <template v-if="row.original.assigneeGroup === '1'">
                    <span class="text-muted">{{ row.original.assignee }}</span>
                  </template>
                </template>
                <template #labels-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Labels" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #labels-cell="{ row }">
                  <template v-if="row.original.labelsGroup === '0'">
                    <div class="flex flex-nowrap gap-1.5">
                      <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                        <UIcon name="i-lucide-tag" class="size-3" />
                        {{ row.original.labelsText6 }}
                      </UBadge>
                      <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                        <UIcon name="i-lucide-tag" class="size-3" />
                        {{ row.original.labelsText10 }}
                      </UBadge>
                    </div>
                  </template>
                  <template v-if="row.original.labelsGroup === '1'">
                    <div class="flex flex-nowrap gap-1.5">
                      <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                        <UIcon name="i-lucide-tag" class="size-3" />
                        {{ row.original.labels }}
                      </UBadge>
                    </div>
                  </template>
                </template>
                <template #startDate-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Start date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #startDate-cell="{ row }">
                  <div class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5" />
                    <span>{{ row.original.startDate }}</span>
                  </div>
                </template>
                <template #dueDate-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Due date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #dueDate-cell="{ row }">
                  <div class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5" />
                    <span>{{ row.original.dueDate }}</span>
                  </div>
                </template>
                <template #cycle-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Cycle" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #cycle-cell="{ row }">
                  <div class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-circle-dot" class="text-muted size-3.5" />
                    <span>{{ row.original.cycle }}</span>
                  </div>
                </template>
                <template #modules-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Modules" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #modules-cell="{ row }">
                  <div class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-layers" class="text-muted size-3.5" />
                    <span>{{ row.original.modules }}</span>
                  </div>
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
