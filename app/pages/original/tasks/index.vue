<!-- Page: /original/tasks | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Tasks · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "filterTasks": "",
  "field10": "10"
})

const field10Options = [
  "10",
  "20",
  "30",
  "40",
  "50"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "task": "TASK-8782",
    "taskHref4": "/original/tasks/TASK-8782",
    "title": "DocumentationYou can't compress the program without quantifying the open-source SSD pixel!",
    "titleText4": "Documentation",
    "titleText6": "You can't compress the program without quantifying the open-source SSD pixel!",
    "status": "In Progress",
    "statusGroup": "0",
    "statusClass11": "tabler-icon tabler-icon-stopwatch text-muted mr-2 h-4 w-4",
    "statusD13": "M14.5 10.5l-2.5 2.5",
    "priority": "Medium",
    "priorityClass11": "tabler-icon tabler-icon-arrow-right text-muted mr-2 h-4 w-4",
    "priorityD12": "M5 12l14 0",
    "priorityD13": "M13 18l6 -6",
    "priorityD14": "M13 6l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_171l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "selection": "",
    "task": "TASK-7878",
    "taskHref4": "/original/tasks/TASK-7878",
    "title": "DocumentationTry to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    "titleText4": "Documentation",
    "titleText6": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    "status": "Backlog",
    "statusGroup": "1",
    "statusClass11": "tabler-icon tabler-icon-exclamation-circle text-muted mr-2 h-4 w-4",
    "statusD13": "M12 9v4",
    "priority": "Medium",
    "priorityClass11": "tabler-icon tabler-icon-arrow-right text-muted mr-2 h-4 w-4",
    "priorityD12": "M5 12l14 0",
    "priorityD13": "M13 18l6 -6",
    "priorityD14": "M13 6l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_172l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "selection": "",
    "task": "TASK-7839",
    "taskHref4": "/original/tasks/TASK-7839",
    "title": "BugWe need to bypass the neural TCP card!",
    "titleText4": "Bug",
    "titleText6": "We need to bypass the neural TCP card!",
    "status": "Todo",
    "statusGroup": "2",
    "statusClass11": "tabler-icon tabler-icon-circle text-muted mr-2 h-4 w-4",
    "statusD13": "",
    "priority": "High",
    "priorityClass11": "tabler-icon tabler-icon-arrow-up text-muted mr-2 h-4 w-4",
    "priorityD12": "M12 5l0 14",
    "priorityD13": "M18 11l-6 -6",
    "priorityD14": "M6 11l6 -6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_173l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "selection": "",
    "task": "TASK-5562",
    "taskHref4": "/original/tasks/TASK-5562",
    "title": "FeatureThe SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    "titleText4": "Feature",
    "titleText6": "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    "status": "Backlog",
    "statusGroup": "1",
    "statusClass11": "tabler-icon tabler-icon-exclamation-circle text-muted mr-2 h-4 w-4",
    "statusD13": "M12 9v4",
    "priority": "Medium",
    "priorityClass11": "tabler-icon tabler-icon-arrow-right text-muted mr-2 h-4 w-4",
    "priorityD12": "M5 12l14 0",
    "priorityD13": "M13 18l6 -6",
    "priorityD14": "M13 6l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_174l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "selection": "",
    "task": "TASK-8686",
    "taskHref4": "/original/tasks/TASK-8686",
    "title": "FeatureI'll parse the wireless SSL protocol, that should driver the API panel!",
    "titleText4": "Feature",
    "titleText6": "I'll parse the wireless SSL protocol, that should driver the API panel!",
    "status": "Canceled",
    "statusGroup": "3",
    "statusClass11": "tabler-icon tabler-icon-circle-x text-muted mr-2 h-4 w-4",
    "statusD13": "M10 10l4 4m0 -4l-4 4",
    "priority": "Medium",
    "priorityClass11": "tabler-icon tabler-icon-arrow-right text-muted mr-2 h-4 w-4",
    "priorityD12": "M5 12l14 0",
    "priorityD13": "M13 18l6 -6",
    "priorityD14": "M13 6l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_175l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "selection": "",
    "task": "TASK-1280",
    "taskHref4": "/original/tasks/TASK-1280",
    "title": "BugUse the digital TLS panel, then you can transmit the haptic system!",
    "titleText4": "Bug",
    "titleText6": "Use the digital TLS panel, then you can transmit the haptic system!",
    "status": "Done",
    "statusGroup": "3",
    "statusClass11": "tabler-icon tabler-icon-circle-check text-muted mr-2 h-4 w-4",
    "statusD13": "M9 12l2 2l4 -4",
    "priority": "High",
    "priorityClass11": "tabler-icon tabler-icon-arrow-up text-muted mr-2 h-4 w-4",
    "priorityD12": "M12 5l0 14",
    "priorityD13": "M18 11l-6 -6",
    "priorityD14": "M6 11l6 -6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_176l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "selection": "",
    "task": "TASK-7262",
    "taskHref4": "/original/tasks/TASK-7262",
    "title": "FeatureThe UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    "titleText4": "Feature",
    "titleText6": "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    "status": "Done",
    "statusGroup": "3",
    "statusClass11": "tabler-icon tabler-icon-circle-check text-muted mr-2 h-4 w-4",
    "statusD13": "M9 12l2 2l4 -4",
    "priority": "High",
    "priorityClass11": "tabler-icon tabler-icon-arrow-up text-muted mr-2 h-4 w-4",
    "priorityD12": "M12 5l0 14",
    "priorityD13": "M18 11l-6 -6",
    "priorityD14": "M6 11l6 -6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_177l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "selection": "",
    "task": "TASK-1138",
    "taskHref4": "/original/tasks/TASK-1138",
    "title": "FeatureGenerating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    "titleText4": "Feature",
    "titleText6": "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    "status": "In Progress",
    "statusGroup": "0",
    "statusClass11": "tabler-icon tabler-icon-stopwatch text-muted mr-2 h-4 w-4",
    "statusD13": "M14.5 10.5l-2.5 2.5",
    "priority": "Medium",
    "priorityClass11": "tabler-icon tabler-icon-arrow-right text-muted mr-2 h-4 w-4",
    "priorityD12": "M5 12l14 0",
    "priorityD13": "M13 18l6 -6",
    "priorityD14": "M13 6l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_178l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "selection": "",
    "task": "TASK-7184",
    "taskHref4": "/original/tasks/TASK-7184",
    "title": "FeatureWe need to program the back-end THX pixel!",
    "titleText4": "Feature",
    "titleText6": "We need to program the back-end THX pixel!",
    "status": "Todo",
    "statusGroup": "2",
    "statusClass11": "tabler-icon tabler-icon-circle text-muted mr-2 h-4 w-4",
    "statusD13": "",
    "priority": "Low",
    "priorityClass11": "tabler-icon tabler-icon-arrow-down text-muted mr-2 h-4 w-4",
    "priorityD12": "M12 5l0 14",
    "priorityD13": "M18 13l-6 6",
    "priorityD14": "M6 13l6 6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_179l5fiv5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "selection": "",
    "task": "TASK-5160",
    "taskHref4": "/original/tasks/TASK-5160",
    "title": "DocumentationCalculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    "titleText4": "Documentation",
    "titleText6": "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    "status": "In Progress",
    "statusGroup": "0",
    "statusClass11": "tabler-icon tabler-icon-stopwatch text-muted mr-2 h-4 w-4",
    "statusD13": "M14.5 10.5l-2.5 2.5",
    "priority": "High",
    "priorityClass11": "tabler-icon tabler-icon-arrow-up text-muted mr-2 h-4 w-4",
    "priorityD12": "M12 5l0 14",
    "priorityD13": "M18 11l-6 -6",
    "priorityD14": "M6 11l6 -6",
    "actions": "Open menu",
    "actionsId8": "radix-_R_17al5fiv5uiv5uknmlb_"
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
    "accessorKey": "task",
    "header": "Task"
  },
  {
    "accessorKey": "title",
    "header": "Title"
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
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.filterTasks || '').toLowerCase()
  const keys = ["task","title","status","priority","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/tasks">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Tasks</span>
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
            <main id="main-content" class="flex min-h-min flex-1 flex-col p-4 sm:p-6">
              <div class="mb-2 flex items-baseline justify-between gap-2">
                <div>
                  <h2 class="text-2xl font-bold tracking-tight text-highlighted">Tasks</h2>
                  <p class="text-muted">Here's a list of your tasks for this month!</p>
                </div>
                <div class="flex flex-wrap justify-end gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 font-semibold" aria-label="Import" type="button" @click="openAction(&quot;Import&quot;)">
                    Import
                  </UButton>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 font-semibold" aria-label="Create Task" type="button" @click="openAction(&quot;Create Task&quot;)">
                    Create Task
                  </UButton>
                </div>
              </div>
              <div class="flex-1">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
                      <UInput v-model="form.filterTasks" type="text" placeholder="Filter tasks..." name="filterTasks" class="flex rounded-md text-base md:text-sm h-8 w-[150px] lg:w-[250px]" :ui="{ base: 'h-full' }" />
                      <div class="flex gap-x-2">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 border-dashed" aria-label="Status" type="button" @click="openAction(&quot;Status&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="mr-2 h-4 w-4">
                            <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" />
                          </svg>
                          Status
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 border-dashed" aria-label="Priority" type="button" @click="openAction(&quot;Priority&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="mr-2 h-4 w-4">
                            <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" />
                          </svg>
                          Priority
                        </UButton>
                      </div>
                    </div>
                    <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs ml-auto hidden h-8 lg:flex" aria-label="View" type="button" @click="openAction(&quot;View&quot;)">
                      <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="mr-2 h-4 w-4">
                        <path d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z" fill="currentColor" />
                      </svg>
                      View
                    </UButton>
                  </div>
                  <div class="rounded-md border border-default">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Task / Title / Status / Priority -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                          <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                        </template>
                        <template #selection-cell="{ row }">
                          <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                        </template>
                        <template #task-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Task" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #task-cell="{ row }">
                          <div class="flex items-center gap-1">
                            <NuxtLink class="hover:text-primary w-[80px] font-semibold underline" :to="row.original.taskHref4">
                              {{ row.original.task }}
                            </NuxtLink>
                          </div>
                        </template>
                        <template #title-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Title" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #title-cell="{ row }">
                          <div class="flex space-x-2">
                            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">{{ row.original.titleText4 }}</div>
                            <span class="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">{{ row.original.titleText6 }}</span>
                          </div>
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <template v-if="row.original.statusGroup === '0'">
                            <div class="flex w-[100px] items-center">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-stopwatch text-muted mr-2 h-4 w-4">
                                <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
                                <path d="M14.5 10.5l-2.5 2.5" />
                                <path d="M17 8l1 -1" />
                                <path d="M14 3h-4" />
                              </svg>
                              <span>{{ row.original.status }}</span>
                            </div>
                          </template>
                          <template v-if="row.original.statusGroup === '1'">
                            <div class="flex w-[100px] items-center">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-exclamation-circle text-muted mr-2 h-4 w-4">
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 9v4" />
                                <path d="M12 16v.01" />
                              </svg>
                              <span>{{ row.original.status }}</span>
                            </div>
                          </template>
                          <template v-if="row.original.statusGroup === '2'">
                            <div class="flex w-[100px] items-center">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-circle text-muted mr-2 h-4 w-4">
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                              </svg>
                              <span>{{ row.original.status }}</span>
                            </div>
                          </template>
                          <template v-if="row.original.statusGroup === '3'">
                            <div class="flex w-[100px] items-center">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="row.original.statusClass11">
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path :d="row.original.statusD13" />
                              </svg>
                              <span>{{ row.original.status }}</span>
                            </div>
                          </template>
                        </template>
                        <template #priority-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Priority" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #priority-cell="{ row }">
                          <div class="flex items-center">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="row.original.priorityClass11">
                              <path :d="row.original.priorityD12" />
                              <path :d="row.original.priorityD13" />
                              <path :d="row.original.priorityD14" />
                            </svg>
                            <span>{{ row.original.priority }}</span>
                          </div>
                        </template>
                        <template #actions-cell="{ row }">
                          <div class="flex items-center gap-1">
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 1)">
                              <UIcon name="i-lucide-pen" class="size-4" />
                            </UButton>
                            <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default data-[state=open]:bg-muted flex h-8 w-8 p-0" aria-label="Open menu" type="button" @click="openAction(&quot;Open menu&quot;, row.original._id, 1)">
                              <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" />
                              </svg>
                              <span class="sr-only">{{ row.original.actions }}</span>
                            </UButton>
                          </div>
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="flex items-center justify-between overflow-auto px-2">
                    <div class="text-muted hidden flex-1 text-sm sm:block">0 of100 row(s) selected.</div>
                    <div class="flex items-center sm:space-x-6 lg:space-x-8">
                      <div class="flex items-center space-x-2">
                        <p class="hidden text-sm font-medium sm:block">Rows per page</p>
                        <USelect v-model="form.field10" :items="field10Options" aria-label="10" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[70px]" />
                      </div>
                      <div class="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of10</div>
                      <div class="flex items-center space-x-2">
                        <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default hidden h-8 w-8 p-0 lg:flex" aria-label="Go to first page" type="button" disabled @click="openAction(&quot;Go to first page&quot;)">
                          <span class="sr-only">Go to first page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 w-8 p-0" aria-label="Go to previous page" type="button" disabled @click="openAction(&quot;Go to previous page&quot;)">
                          <span class="sr-only">Go to previous page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 w-8 p-0" aria-label="Go to next page" type="button" @click="openAction(&quot;Go to next page&quot;)">
                          <span class="sr-only">Go to next page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default hidden h-8 w-8 p-0 lg:flex" aria-label="Go to last page" type="button" @click="openAction(&quot;Go to last page&quot;)">
                          <span class="sr-only">Go to last page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" />
                          </svg>
                        </UButton>
                      </div>
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
