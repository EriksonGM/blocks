<!-- Page: /developers/events-&-logs | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

definePageMeta({"alias":["/developers/events-%26-logs"]})

const route = useRoute()

useHead({ title: "Events/Logs · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "custom": "Custom",
  "warning": false,
  "error": false,
  "search": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Pages",
    "value": "0"
  },
  {
    "label": "Routes",
    "value": "1"
  },
  {
    "label": "Hostnames",
    "value": "2"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Referrers",
    "value": "0"
  },
  {
    "label": "UTM Parameters",
    "value": "1"
  }
]

const customOptions = [
  "Past 30 minutes",
  "Maximum (1hour)",
  "Custom"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "timestamp": "2023-05-01 10:30:15",
    "timestampGroup": "0",
    "level": "INFO",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default",
    "message": "Application started successfully",
    "messageGroup": "0",
    "source": "app.js",
    "sourceGroup": "0"
  },
  {
    "_id": "2",
    "timestamp": "2023-05-01 10:31:23",
    "timestampGroup": "0",
    "level": "WARN",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 border-default",
    "message": "High memory usage detected",
    "messageGroup": "0",
    "source": "system.monitor.js",
    "sourceGroup": "0"
  },
  {
    "_id": "3",
    "timestamp": "2023-05-01 10:32:46",
    "timestampGroup": "0",
    "level": "ERROR",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-(--ui-error) text-inverted shadow-sm hover:bg-(--ui-error)/80 border-default",
    "message": "Failed to connect to database",
    "messageGroup": "0",
    "source": "database.js",
    "sourceGroup": "0"
  },
  {
    "_id": "4",
    "timestamp": "2023-05-01 10:33:12",
    "timestampGroup": "0",
    "level": "INFO",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default",
    "message": "User authentication successful",
    "messageGroup": "0",
    "source": "auth.js",
    "sourceGroup": "0"
  },
  {
    "_id": "5",
    "timestamp": "2023-05-01 10:34:57",
    "timestampGroup": "0",
    "level": "DEBUG",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default",
    "message": "Cache miss for key: user_preferences",
    "messageGroup": "0",
    "source": "cache.js",
    "sourceGroup": "0"
  },
  {
    "_id": "6",
    "timestamp": "2023-05-01 10:35:30",
    "timestampGroup": "0",
    "level": "INFO",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default",
    "message": "API request received: GET /api/users",
    "messageGroup": "0",
    "source": "api.js",
    "sourceGroup": "0"
  },
  {
    "_id": "7",
    "timestamp": "2023-05-01 10:36:05",
    "timestampGroup": "0",
    "level": "WARN",
    "levelGroup": "0",
    "levelClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 border-default",
    "message": "Deprecated function called: oldFunction()",
    "messageGroup": "0",
    "source": "legacy.js",
    "sourceGroup": "0"
  },
  {
    "_id": "8",
    "timestamp": "Total",
    "timestampGroup": "1",
    "level": "$2,500.00",
    "levelGroup": "1",
    "levelClass2": "",
    "message": "",
    "messageGroup": "1",
    "source": "",
    "sourceGroup": "1"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "timestamp",
    "header": "Timestamp"
  },
  {
    "accessorKey": "level",
    "header": "Level"
  },
  {
    "accessorKey": "message",
    "header": "Message"
  },
  {
    "accessorKey": "source",
    "header": "Source"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.search || '').toLowerCase()
  const keys = ["timestamp","level","message","source"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/events-&amp;-logs">
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
                <span class="text-muted">Events &amp; Logs</span>
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
            <main id="main-content" class="flex flex-col p-4 sm:p-6">
              <div class="flex w-full flex-col gap-2">
                <div class="flex items-center justify-between">
                  <div>
                    <h2 class="text-2xl font-bold text-highlighted">Events &amp; Logs</h2>
                    <p class="text-muted text-sm">Track, analyze, and act on application behaviors efficiently.</p>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" data-slot="dialog-trigger" aria-label="Import" type="button" @click="openAction(&quot;Import&quot;)">
                    Import
                  </UButton>
                </div>
              </div>
              <div class="mt-6 mb-4 grid grid-cols-6 gap-5">
                <div class="col-span-6">
                  <!-- Card 1: Filters -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="grid grid-cols-4 grid-rows-3">
                      <div class="border-(--ui-bg-muted) row-start-1 row-end-4 hidden border-r px-0 py-3 lg:col-start-1 lg:col-end-2 lg:block border-default">
                        <div class="flex h-full flex-col gap-3 md:max-h-[380px]">
                          <div class="flex items-center justify-between px-4">
                            <h1 class="text-sm font-bold text-highlighted">Filters</h1>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 py-2 px-3 text-xs" aria-label="Reset" type="button" @click="openAction(&quot;Reset&quot;)">
                              Reset
                            </UButton>
                          </div>
                          <div data-slot="scroll-area" class="relative overflow-hidden flex flex-col" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                            <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                              <div style="min-width:100%;display:table">
                                <div class="group/log-filter px-2">
                                  <UButton color="neutral" variant="soft" class="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 py-2 flex w-full items-center justify-start px-2" aria-label="TimelineToggle" type="button" @click="openAction(&quot;TimelineToggle&quot;)">
                                    <UIcon name="i-lucide-chevron-right" class="scale-125 transition-transform duration-200 group-data-[state=open]/log-filter:rotate-90" />
                                    <p class="text-sm">Timeline</p>
                                    <span class="sr-only">Toggle</span>
                                  </UButton>
                                  <div id="radix-_R_6cmav5uiv5uknmlb_" class="CollapsibleContent space-y-2 px-2 pt-1 pb-3 duration-75!" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 96px; --radix-collapsible-content-width: 266.5px;">
                                    <USelect v-model="form.custom" :items="customOptions" aria-label="Custom" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                                    <UButton color="neutral" variant="outline" class="gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm h-9 px-4 py-2 flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-highlighted ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accented focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-default bg-default hover:bg-elevated hover:text-default w-full" aria-label="03Oct,2026" type="button" @click="openAction(&quot;03Oct,2026&quot;)">
                                      <UIcon name="i-lucide-calendar" class="mr-2 h-4 w-4" />
                                      <span>
                                        <span id="day" class="date-part">03</span>
                                        <span id="month" class="date-part">Oct</span>
                                        ,
                                        <span id="year" class="date-part">2026</span>
                                      </span>
                                    </UButton>
                                  </div>
                                </div>
                                <div class="group/log-filter px-2">
                                  <UButton color="neutral" variant="soft" class="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 py-2 flex w-full items-center justify-start px-2" aria-label="Contains LevelToggle" type="button" @click="openAction(&quot;Contains LevelToggle&quot;)">
                                    <UIcon name="i-lucide-chevron-right" class="scale-125 transition-transform duration-200 group-data-[state=open]/log-filter:rotate-90" />
                                    <p class="text-sm">Contains Level</p>
                                    <span class="sr-only">Toggle</span>
                                  </UButton>
                                  <div id="radix-_R_acmav5uiv5uknmlb_" class="CollapsibleContent space-y-2 px-2 pt-1 pb-3 duration-75!" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 98px; --radix-collapsible-content-width: 266.5px;">
                                    <div class="border-(--ui-bg-muted) flex flex-col overflow-hidden rounded-md border border-default">
                                      <div class="flex items-center gap-2 px-2 hover:bg-muted dark:hover:bg-elevated">
                                        <UCheckbox v-model="form.warning" aria-label="Toggle setting" />
                                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex h-full flex-1 cursor-pointer items-center justify-between py-2" for="Warning">
                                          <p class="text-xs">Warning</p>
                                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 w-6 rounded-full p-0 border-default">
                                            <p class="m-auto text-[10px] opacity-70">10</p>
                                          </div>
                                        </label>
                                      </div>
                                      <div class="flex items-center gap-2 px-2 hover:bg-muted dark:hover:bg-elevated">
                                        <UCheckbox v-model="form.error" aria-label="Toggle setting" />
                                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex h-full flex-1 cursor-pointer items-center justify-between py-2" for="Error">
                                          <p class="text-xs">Error</p>
                                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 w-6 rounded-full p-0 border-default">
                                            <p class="m-auto text-[10px] opacity-70">4</p>
                                          </div>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="group/log-filter px-2">
                                  <UButton color="neutral" variant="soft" class="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 py-2 flex w-full items-center justify-start px-2" aria-label="EnvironmentSelect Environment" type="button" @click="openAction(&quot;EnvironmentSelect Environment&quot;)">
                                    <UIcon name="i-lucide-chevron-right" class="scale-125 transition-transform duration-200 group-data-[state=open]/log-filter:rotate-90" />
                                    <p class="text-sm">Environment</p>
                                    <span class="sr-only">Select Environment</span>
                                  </UButton>
                                  <div id="radix-_R_ecmav5uiv5uknmlb_" class="CollapsibleContent space-y-2 px-2 pt-1 pb-3 duration-75!" style="" />
                                </div>
                                <div class="group/log-filter px-2">
                                  <UButton color="neutral" variant="soft" class="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 py-2 flex w-full items-center justify-start px-2" aria-label="TypesSelect Event Type" type="button" @click="openAction(&quot;TypesSelect Event Type&quot;)">
                                    <UIcon name="i-lucide-chevron-right" class="scale-125 transition-transform duration-200 group-data-[state=open]/log-filter:rotate-90" />
                                    <p class="text-sm">Types</p>
                                    <span class="sr-only">Select Event Type</span>
                                  </UButton>
                                  <div id="radix-_R_icmav5uiv5uknmlb_" class="CollapsibleContent space-y-2 px-2 pt-1 pb-3 duration-75!" style="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-1 col-end-5 row-start-1 row-end-4 lg:col-start-2">
                        <div>
                          <div class="border-(--ui-bg-muted) flex items-center gap-2 border-b p-3 border-default">
                            <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 hidden shrink-0 lg:block" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-filter m-auto">
                                <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
                              </svg>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 block lg:hidden" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-filter m-auto">
                                <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
                              </svg>
                            </UButton>
                            <div class="relative flex-1">
                              <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                              <UInput v-model="form.search" type="search" placeholder="Search..." name="search" class="flex h-9 w-full rounded-md text-base md:text-sm pr-4 pl-10" :ui="{ base: 'h-full' }" />
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 shrink-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                              </svg>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 py-2 shrink-0 px-3" aria-label="Live" type="button" @click="openAction(&quot;Live&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-playstation-triangle rotate-90">
                                <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
                                <path d="M7.5 15h9l-4.5 -8l-4.5 8" />
                              </svg>
                              <p class="text-sm">Live</p>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 shrink-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots rotate-90">
                                <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                            </UButton>
                          </div>
                          <div class="relative w-full overflow-auto">
                            <!-- Table 1: Timestamp / Level / Message / Source -->
                            <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #timestamp-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Timestamp" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #timestamp-cell="{ row }">
                                <template v-if="row.original.timestampGroup === '0'">
                                  <div class="truncate">{{ row.original.timestamp }}</div>
                                </template>
                                <template v-if="row.original.timestampGroup === '1'">
                                  {{ row.original.timestamp }}
                                </template>
                              </template>
                              <template #level-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Level" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #level-cell="{ row }">
                                <template v-if="row.original.levelGroup === '0'">
                                  <div :class="row.original.levelClass2">{{ row.original.level }}</div>
                                </template>
                                <template v-if="row.original.levelGroup === '1'">
                                  {{ row.original.level }}
                                </template>
                              </template>
                              <template #message-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Message" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #message-cell="{ row }">
                                <template v-if="row.original.messageGroup === '0'">
                                  <div class="truncate">{{ row.original.message }}</div>
                                </template>
                                <template v-if="row.original.messageGroup === '1'">

                                </template>
                              </template>
                              <template #source-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Source" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #source-cell="{ row }">
                                <template v-if="row.original.sourceGroup === '0'">
                                  {{ row.original.source }}
                                </template>
                                <template v-if="row.original.sourceGroup === '1'">

                                </template>
                              </template>
                            </UTable>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UCard>
                </div>
                <div class="col-span-6 lg:col-span-3">
                  <!-- Card 2: VISITORS -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div data-orientation="horizontal" class="space-y-0">
                      <div class="flex flex-col space-y-1.5 p-6 px-4 py-3">
                        <div class="flex items-center justify-between">
                          <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex h-9 items-center justify-center rounded-lg p-1 gap-2 bg-transparent" data-orientation="horizontal" style="outline:none" />
                          <h1 class="text-muted text-xs font-medium text-highlighted">VISITORS</h1>
                        </div>
                      </div>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div data-orientation="horizontal" id="radix-_R_aav5uiv5uknmlb_-content-pages" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                        <div class="p-6 px-4 py-3">
                          <div class="flex flex-col">
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <p class="text-sm font-medium">/api-keys</p>
                              <p class="text-sm font-semibold text-highlighted">112</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <p class="text-sm font-medium">/overview</p>
                              <p class="text-sm font-semibold text-highlighted">45</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <p class="text-sm font-medium">/event-logs</p>
                              <p class="text-sm font-semibold text-highlighted">24</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <p class="text-sm font-medium">/login</p>
                              <p class="text-sm font-semibold text-highlighted">134</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <p class="text-sm font-medium">/otp</p>
                              <p class="text-sm font-semibold text-highlighted">120</p>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center p-6 px-4 py-3">
                          <div class="m-auto">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 py-2 rounded-full px-3 pt-[2px] pb-[2px] text-xs" data-slot="dialog-trigger" aria-label="View All" type="button" @click="openAction(&quot;View All&quot;)">
                              View All
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-maximize ml-2 h-4 w-4">
                                <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                              </svg>
                            </UButton>
                          </div>
                        </div>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_aav5uiv5uknmlb_-content-routes" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                      <div data-orientation="horizontal" id="radix-_R_aav5uiv5uknmlb_-content-hostnames" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                    </div>
                  </UCard>
                </div>
                <div class="col-span-6 lg:col-span-3">
                  <!-- Card 3: VISITORS -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div data-orientation="horizontal" class="space-y-0">
                      <div class="flex flex-col space-y-1.5 p-6 px-4 py-3">
                        <div class="flex items-center justify-between">
                          <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="text-muted inline-flex h-9 items-center justify-center rounded-lg p-1 gap-2 bg-transparent" data-orientation="horizontal" style="outline:none" />
                          <h1 class="text-muted text-xs font-medium text-highlighted">VISITORS</h1>
                        </div>
                      </div>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div data-orientation="horizontal" id="radix-_R_eav5uiv5uknmlb_-content-pages" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                        <div class="p-6 px-4 py-3">
                          <div class="flex flex-col">
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <div class="flex items-center gap-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-facebook">
                                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <p class="text-sm font-medium">facebook.com</p>
                              </div>
                              <p class="text-sm font-semibold text-highlighted">8</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <div class="flex items-center gap-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github">
                                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                                <p class="text-sm font-medium">github.com</p>
                              </div>
                              <p class="text-sm font-semibold text-highlighted">6</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <div class="flex items-center gap-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-google">
                                  <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" />
                                </svg>
                                <p class="text-sm font-medium">google.com</p>
                              </div>
                              <p class="text-sm font-semibold text-highlighted">5</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <div class="flex items-center gap-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin">
                                  <path d="M8 11v5" />
                                  <path d="M8 8v.01" />
                                  <path d="M12 16v-5" />
                                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
                                </svg>
                                <p class="text-sm font-medium">lnkd.in</p>
                              </div>
                              <p class="text-sm font-semibold text-highlighted">9</p>
                            </div>
                            <div class="flex cursor-pointer items-center justify-between rounded-md px-3 py-1 hover:bg-muted dark:hover:bg-elevated">
                              <div class="flex items-center gap-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-vercel">
                                  <path d="M3 19h18l-9 -15l-9 15" />
                                </svg>
                                <p class="text-sm font-medium">vercel.com</p>
                              </div>
                              <p class="text-sm font-semibold text-highlighted">2</p>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center p-6 px-4 py-3">
                          <div class="m-auto">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 py-2 rounded-full px-3 pt-[2px] pb-[2px] text-xs" data-slot="dialog-trigger" aria-label="View All" type="button" @click="openAction(&quot;View All&quot;)">
                              View All
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-maximize ml-2 h-4 w-4">
                                <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                              </svg>
                            </UButton>
                          </div>
                        </div>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_eav5uiv5uknmlb_-content-routes" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                      <div data-orientation="horizontal" id="radix-_R_eav5uiv5uknmlb_-content-hostnames" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                    </div>
                  </UCard>
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
