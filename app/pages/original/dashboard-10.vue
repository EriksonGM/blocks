<!-- Page: /original/dashboard-10 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 10 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "filterEmails": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Overview",
    "value": "0"
  },
  {
    "label": "Analytics",
    "value": "1"
  },
  {
    "label": "Reports",
    "value": "2"
  },
  {
    "label": "Notifications",
    "value": "3"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "status": "success",
    "email": "ken99@yahoo.com",
    "amount": "$316.00",
    "actions": "Open menu",
    "actionsId4": "radix-_R_56ldinpfiv5uknmlb_"
  },
  {
    "_id": "2",
    "selection": "",
    "status": "success",
    "email": "Abe45@gmail.com",
    "amount": "$242.00",
    "actions": "Open menu",
    "actionsId4": "radix-_R_5aldinpfiv5uknmlb_"
  },
  {
    "_id": "3",
    "selection": "",
    "status": "processing",
    "email": "Monserrat44@gmail.com",
    "amount": "$837.00",
    "actions": "Open menu",
    "actionsId4": "radix-_R_5eldinpfiv5uknmlb_"
  },
  {
    "_id": "4",
    "selection": "",
    "status": "failed",
    "email": "carmella@hotmail.com",
    "amount": "$721.00",
    "actions": "Open menu",
    "actionsId4": "radix-_R_5ildinpfiv5uknmlb_"
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
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "email",
    "header": "Email"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.filterEmails || '').toLowerCase()
  const keys = ["status","email","amount","actions"] as const
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
  const rows = table1FilteredRows.value.map(row => ["selection","status","email","amount","actions"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "original-dashboard-10.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/dashboard-10">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="space-y-4 p-4">
              <div class="mb-2 flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center">
                <h1 class="text-2xl font-bold tracking-tight text-highlighted">Dashboard</h1>
                <div class="flex items-center space-x-2">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Download" type="button" @click="exportCsv()">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-download">
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    Download
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 justify-start text-left font-normal text-muted" aria-label="Pick a date" type="button" @click="openAction(&quot;Pick a date&quot;)">
                    <UIcon name="i-lucide-calendar" class="size-4" />
                    <span>Pick a date</span>
                  </UButton>
                </div>
              </div>
              <div data-orientation="vertical" class="space-y-4">
                <div class="w-full overflow-x-auto pb-2">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" data-orientation="vertical" style="outline:none" />
                </div>
                <div data-orientation="vertical" id="radix-_R_inpfiv5uknmlb_-content-overview" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden space-y-4" style="animation-duration:0s">
                  <div class="grid auto-rows-auto grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-9">
                    <!-- Card 1: Details -->
                    <UCard class="rounded-lg col-span-3 h-full lg:col-span-2 xl:col-span-2" :ui="{ body: 'contents' }">
                      <div class="p-6 flex flex-row items-center justify-between gap-5 space-y-0 pt-4 pb-2">
                        <div class="tracking-tight flex items-center gap-2 truncate text-sm font-medium">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-subscript">
                            <path d="M5 7l8 10m-8 0l8 -10" />
                            <path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
                          </svg>
                          New Subscriptions
                        </div>
                        <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                          </svg>
                          <span class="sr-only">More Info</span>
                        </UButton>
                      </div>
                      <div class="p-6 flex h-[calc(100%_-_48px)] flex-col justify-between py-4">
                        <div class="flex flex-col">
                          <div class="flex flex-wrap items-center justify-between gap-6">
                            <div class="text-3xl font-bold">4,682</div>
                            <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                            <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden w-[70px]" style=";--chart-1:var(--ui-text-dimmed);--color-month:var(--ui-text-dimmed)" role="img" aria-label="Analytics chart">
                              <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                              <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-month:var(--ui-text-dimmed);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                <div style="width:0;height:0;overflow:visible">
                                  <div width="70" height="39" class="chart-wrapper" style="position: relative; cursor: default; width: 70px; height: 39px;">
                                    <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 70 39" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                      <title />
                                      <desc />
                                      <g class="chart-zIndex-layer_-100" />
                                      <g class="chart-zIndex-layer_-50" />
                                      <defs>
                                        <clipPath id="recharts1-clip">
                                          <rect x="5" y="5" height="29" width="60" />
                                        </clipPath>
                                      </defs>
                                      <g class="chart-zIndex-layer_100" />
                                      <g class="chart-zIndex-layer_200" />
                                      <g class="chart-zIndex-layer_300" />
                                      <g class="chart-zIndex-layer_400">
                                        <g class="chart-layer chart-line">
                                          <g class="chart-layer chart-shape">
                                            <path stroke="var(--color-month)" stroke-width="1.5" fill="none" id="recharts-line-_r_0_" height="29" width="60" class="chart-curve chart-line-curve" stroke-dasharray="100.9764px 100.97642517089844px" d="M5,15.875L15,6.359L25,12.522L35,27.384L45,15.059L55,33.094L65,14.606" />
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-zIndex-layer_500" />
                                      <g class="chart-zIndex-layer_600" />
                                      <g class="chart-zIndex-layer_1000" />
                                      <g class="chart-zIndex-layer_1100" />
                                      <g class="chart-zIndex-layer_1200" />
                                      <g class="chart-zIndex-layer_2000" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="text-muted text-xs">Since Last week</p>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-5">
                          <div class="text-sm font-semibold">Details</div>
                          <div class="flex items-center gap-1 text-success dark:text-success">
                            <p class="text-[13px] leading-none font-medium">15.54%</p>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="tabler-icon tabler-icon-caret-up-filled">
                              <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <!-- Card 2: Details -->
                    <UCard class="rounded-lg col-span-3 h-full lg:col-span-2 xl:col-span-2" :ui="{ body: 'contents' }">
                      <div class="p-6 flex flex-row items-center justify-between gap-5 space-y-0 pt-4 pb-2">
                        <div class="tracking-tight flex items-center gap-2 truncate text-sm font-medium">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-menu-order">
                            <path d="M4 10h16" />
                            <path d="M4 14h16" />
                            <path d="M9 18l3 3l3 -3" />
                            <path d="M9 6l3 -3l3 3" />
                          </svg>
                          New Orders
                        </div>
                        <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                          </svg>
                          <span class="sr-only">More Info</span>
                        </UButton>
                      </div>
                      <div class="p-6 flex h-[calc(100%_-_48px)] flex-col justify-between py-4">
                        <div class="flex flex-col">
                          <div class="flex flex-wrap items-center justify-between gap-6">
                            <div class="text-3xl font-bold">1,226</div>
                            <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                            <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden w-[70px]" style=";--chart-2:var(--ui-text-muted);--color-month:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                              <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                              <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-month:var(--ui-text-muted);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                <div style="width:0;height:0;overflow:visible">
                                  <div width="70" height="39" class="chart-wrapper" style="position: relative; cursor: default; width: 70px; height: 39px;">
                                    <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 70 39" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                      <title />
                                      <desc />
                                      <g class="chart-zIndex-layer_-100" />
                                      <g class="chart-zIndex-layer_-50" />
                                      <defs>
                                        <clipPath id="recharts2-clip">
                                          <rect x="5" y="5" height="29" width="60" />
                                        </clipPath>
                                      </defs>
                                      <g class="chart-zIndex-layer_100" />
                                      <g class="chart-zIndex-layer_200" />
                                      <g class="chart-zIndex-layer_300" />
                                      <g class="chart-zIndex-layer_400">
                                        <g class="chart-layer chart-line">
                                          <g class="chart-layer chart-shape">
                                            <path stroke="var(--color-month)" stroke-width="1.5" fill="none" id="recharts-line-_r_1_" height="29" width="60" class="chart-curve chart-line-curve" stroke-dasharray="80.24917602539062px 80.24917602539062px" d="M5,17.144L15,6.359L25,12.522L35,27.384L45,15.059L55,14.606L65,14.606" />
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-zIndex-layer_500" />
                                      <g class="chart-zIndex-layer_600" />
                                      <g class="chart-zIndex-layer_1000" />
                                      <g class="chart-zIndex-layer_1100" />
                                      <g class="chart-zIndex-layer_1200" />
                                      <g class="chart-zIndex-layer_2000" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="text-muted text-xs">Since Last week</p>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-5">
                          <div class="text-sm font-semibold">Details</div>
                          <div class="flex items-center gap-1 text-error dark:text-error">
                            <p class="text-[13px] leading-none font-medium">40.2%</p>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="tabler-icon tabler-icon-caret-down-filled">
                              <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <!-- Card 3: Details -->
                    <UCard class="rounded-lg col-span-3 h-full lg:col-span-2 xl:col-span-2" :ui="{ body: 'contents' }">
                      <div class="p-6 flex flex-row items-center justify-between gap-5 space-y-0 pt-4 pb-2">
                        <div class="tracking-tight flex items-center gap-2 truncate text-sm font-medium">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-gift">
                            <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
                            <path d="M12 8l0 13" />
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                          </svg>
                          Avg Order Revenue
                        </div>
                        <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                          </svg>
                          <span class="sr-only">More Info</span>
                        </UButton>
                      </div>
                      <div class="p-6 flex h-[calc(100%_-_48px)] flex-col justify-between py-4">
                        <div class="flex flex-col">
                          <div class="flex flex-wrap items-center justify-between gap-6">
                            <div class="text-3xl font-bold">1,080</div>
                            <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                            <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden w-[70px]" style=";--color-month:var(--ui-info)" role="img" aria-label="Analytics chart">
                              <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                              <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-month:var(--ui-info);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                <div style="width:0;height:0;overflow:visible">
                                  <div width="70" height="39" class="chart-wrapper" style="position: relative; cursor: default; width: 70px; height: 39px;">
                                    <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 70 39" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                      <title />
                                      <desc />
                                      <g class="chart-zIndex-layer_-100" />
                                      <g class="chart-zIndex-layer_-50" />
                                      <defs>
                                        <clipPath id="recharts3-clip">
                                          <rect x="5" y="5" height="29" width="60" />
                                        </clipPath>
                                      </defs>
                                      <g class="chart-zIndex-layer_100" />
                                      <g class="chart-zIndex-layer_200" />
                                      <g class="chart-zIndex-layer_300" />
                                      <g class="chart-zIndex-layer_400">
                                        <g class="chart-layer chart-line">
                                          <g class="chart-layer chart-shape">
                                            <path stroke="var(--color-month)" stroke-width="1.5" fill="none" id="recharts-line-_r_2_" height="29" width="60" class="chart-curve chart-line-curve" stroke-dasharray="88.8306px 88.83061981201172px" d="M5,29.167L15,21.917L25,10.8L35,25.01L45,13.797L55,19.5L65,5" />
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-zIndex-layer_500" />
                                      <g class="chart-zIndex-layer_600" />
                                      <g class="chart-zIndex-layer_1000" />
                                      <g class="chart-zIndex-layer_1100" />
                                      <g class="chart-zIndex-layer_1200" />
                                      <g class="chart-zIndex-layer_2000" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="text-muted text-xs">Since Last week</p>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-5">
                          <div class="text-sm font-semibold">Details</div>
                          <div class="flex items-center gap-1 text-success dark:text-success">
                            <p class="text-[13px] leading-none font-medium">10.8%</p>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="tabler-icon tabler-icon-caret-up-filled">
                              <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <div class="col-span-3">
                      <!-- Card 4: Total Revenue$15,231.89+20.1% from last month -->
                      <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                        <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                          <div class="tracking-tight text-sm font-normal">Total Revenue</div>
                        </div>
                        <div class="p-6 pt-0 h-[calc(100%_-_52px)] pb-0">
                          <div class="text-2xl font-bold">$15,231.89</div>
                          <p class="text-muted text-xs">+20.1% from last month</p>
                          <!-- Chart 7: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-[80px] w-full" style=";--color-revenue:var(--ui-primary)" role="img" aria-label="Analytics chart">
                            <!-- Chart 8: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-revenue:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="321" height="80" class="chart-wrapper" style="position: relative; cursor: default; width: 321px; height: 80px;">
                                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 321 80" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100" />
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts4-clip">
                                        <rect x="10" y="5" height="75" width="301" />
                                      </clipPath>
                                    </defs>
                                    <g class="chart-zIndex-layer_100" />
                                    <g class="chart-zIndex-layer_200" />
                                    <g class="chart-zIndex-layer_300" />
                                    <g class="chart-zIndex-layer_400">
                                      <g class="chart-layer chart-line">
                                        <g class="chart-layer chart-shape">
                                          <path stroke-width="2" stroke="var(--color-revenue)" fill="none" id="recharts-line-_r_3_" height="75" width="301" class="chart-curve chart-line-curve" stroke-dasharray="323.326171875px 323.326171875px" d="M10,52.143C24.333,46.779,38.667,41.415,53,41.415C67.333,41.415,81.667,52.679,96,54.821C110.333,56.964,124.667,56.964,139,58.036C153.333,59.107,167.667,61.25,182,61.25C196.333,61.25,210.667,56.18,225,54.286C239.333,52.391,253.667,52.818,268,49.882C282.333,46.946,296.667,28.016,311,9.085" />
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_500" />
                                    <g class="chart-zIndex-layer_600">
                                      <g class="chart-layer chart-line-dots">
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="10" cy="52.14285714285714" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="53" cy="41.41517857142857" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="96" cy="54.821428571428584" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="139" cy="58.035714285714285" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="182" cy="61.25" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="225" cy="54.285714285714285" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="268" cy="49.88214285714285" class="chart-dot chart-line-dot" />
                                        <circle r="3" stroke-width="2" stroke="var(--color-revenue)" fill="var(--ui-bg)" height="75" width="301" cx="311" cy="9.08482142857143" class="chart-dot chart-line-dot" />
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_1000" />
                                    <g class="chart-zIndex-layer_1100" />
                                    <g class="chart-zIndex-layer_1200" />
                                    <g class="chart-zIndex-layer_2000" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                    <div class="col-span-3 md:col-span-6">
                      <!-- Card 5: Sale Activity - Monthly -->
                      <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Sale Activity - Monthly</div>
                          <div class="text-muted text-sm">Showing total sales for the last 6 months</div>
                        </div>
                        <div class="p-6 pt-0 h-[calc(100%_-_90px)]">
                          <!-- Chart 9: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-full min-h-[200px] w-full" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                            <!-- Chart 10: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted);width:100%;height:214px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="711" height="214" class="chart-wrapper" style="position: relative; cursor: default; width: 711px; height: 214px;">
                                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 711 214" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100">
                                      <g class="chart-cartesian-grid">
                                        <g class="chart-cartesian-grid-horizontal">
                                          <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="184" x1="12" y1="184" x2="699" y2="184" />
                                          <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="184" x1="12" y1="138" x2="699" y2="138" />
                                          <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="184" x1="12" y1="92" x2="699" y2="92" />
                                          <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="184" x1="12" y1="46" x2="699" y2="46" />
                                          <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="184" x1="12" y1="0" x2="699" y2="0" />
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts5-clip">
                                        <rect x="12" y="0" height="184" width="687" />
                                      </clipPath>
                                    </defs>
                                    <defs>
                                      <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stop-color="var(--color-desktop)" stop-opacity="0.8" />
                                        <stop offset="95%" stop-color="var(--color-desktop)" stop-opacity="0.1" />
                                      </linearGradient>
                                      <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stop-color="var(--color-mobile)" stop-opacity="0.8" />
                                        <stop offset="95%" stop-color="var(--color-mobile)" stop-opacity="0.1" />
                                      </linearGradient>
                                    </defs>
                                    <g class="chart-zIndex-layer_100">
                                      <g class="chart-layer chart-area">
                                        <g class="chart-layer">
                                          <path stroke-width="1" fill="url(#fillMobile)" fill-opacity="0.4" height="184" stroke="none" width="687" id="recharts-area-_r_4_" class="chart-curve chart-area-area" d="M12,159.467C57.8,140.333,103.6,121.199,149.4,122.667C195.2,124.134,241,146.202,286.8,147.2C332.6,148.198,378.4,128.125,424.2,125.733C470,123.342,515.8,138.631,561.6,144.133C607.4,149.636,653.2,145.351,699,141.067L699,184C653.2,184,607.4,184,561.6,184C515.8,184,470,184,424.2,184C378.4,184,332.6,184,286.8,184C241,184,195.2,184,149.4,184C103.6,184,57.8,184,12,184Z" />
                                          <path stroke-width="1" fill="none" fill-opacity="0.4" height="184" stroke="var(--color-mobile)" width="687" class="chart-curve chart-area-curve" d="M12,159.467C57.8,140.333,103.6,121.199,149.4,122.667C195.2,124.134,241,146.202,286.8,147.2C332.6,148.198,378.4,128.125,424.2,125.733C470,123.342,515.8,138.631,561.6,144.133C607.4,149.636,653.2,145.351,699,141.067" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-area">
                                        <g class="chart-layer">
                                          <path stroke-width="1" fill="url(#fillDesktop)" fill-opacity="0.4" height="184" stroke="none" width="687" id="recharts-area-_r_5_" class="chart-curve chart-area-area" d="M12,102.427C57.8,67.362,103.6,32.297,149.4,29.133C195.2,25.969,241,54.706,286.8,74.52C332.6,94.334,378.4,105.225,424.2,103.347C470,101.468,515.8,86.819,561.6,80.04C607.4,73.261,653.2,74.35,699,75.44L699,141.067C653.2,145.351,607.4,149.636,561.6,144.133C515.8,138.631,470,123.342,424.2,125.733C378.4,128.125,332.6,148.198,286.8,147.2C241,146.202,195.2,124.134,149.4,122.667C103.6,121.199,57.8,140.333,12,159.467Z" />
                                          <path stroke-width="1" fill="none" fill-opacity="0.4" height="184" stroke="var(--color-desktop)" width="687" class="chart-curve chart-area-curve" d="M12,102.427C57.8,67.362,103.6,32.297,149.4,29.133C195.2,25.969,241,54.706,286.8,74.52C332.6,94.334,378.4,105.225,424.2,103.347C470,101.468,515.8,86.819,561.6,80.04C607.4,73.261,653.2,74.35,699,75.44" />
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_200" />
                                    <g class="chart-zIndex-layer_300" />
                                    <g class="chart-zIndex-layer_400" />
                                    <g class="chart-zIndex-layer_500">
                                      <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                                        <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                          <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                            <g class="chart-layer chart-cartesian-axis-tick" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_600" />
                                    <g class="chart-zIndex-layer_1000" />
                                    <g class="chart-zIndex-layer_1100" />
                                    <g class="chart-zIndex-layer_1200" />
                                    <g class="chart-zIndex-layer_2000">
                                      <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="12" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="12">Jan</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="149.4" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="149.4">Feb</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="286.8" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="286.8">Mar</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="424.20000000000005" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="424.20000000000005">Apr</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="561.6" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="561.6">May</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="687" stroke="none" x="699" y="198" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="699">Jun</tspan>
                                          </text>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                    <div class="col-span-3 md:col-span-6 lg:col-span-3">
                      <!-- Card 6: Subscriptions+2350+180.1% from last month -->
                      <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                        <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                          <div class="tracking-tight text-sm font-normal">Subscriptions</div>
                        </div>
                        <div class="p-6 pt-0 h-full">
                          <div class="text-2xl font-bold">+2350</div>
                          <p class="text-muted text-xs">+180.1% from last month</p>
                          <!-- Chart 11: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mt-6 h-[calc(100%_-_120px)] max-h-[205px] w-full" style=";--chart-2:var(--ui-text-muted);--chart-1:var(--ui-text-dimmed);--color-subscription:var(--ui-text-dimmed);--color-revenue:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                            <!-- Chart 12: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-subscription:var(--ui-text-dimmed);--color-revenue:var(--ui-text-muted);width:100%;height:184px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="321" height="184" class="chart-wrapper" style="position: relative; cursor: default; width: 321px; height: 184px;">
                                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 321 184" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100" />
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts6-clip">
                                        <rect x="5" y="5" height="174" width="311" />
                                      </clipPath>
                                    </defs>
                                    <g class="chart-zIndex-layer_100" />
                                    <g class="chart-zIndex-layer_200" />
                                    <g class="chart-zIndex-layer_300">
                                      <g class="chart-layer chart-bar" id="recharts-bar-_r_6_">
                                        <g class="chart-layer chart-bar-rectangles">
                                          <g class="chart-layer">
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="8.8875" y="109.4" width="13" height="69.6" class="chart-rectangle" d="M 8.8875,113.4
            A 4,4,0,0,1,12.8875,109.4
            L 17.8875,109.4
            A 4,4,0,0,1,21.8875,113.4
            L 21.8875,175
            A 4,4,0,0,1,17.8875,179
            L 12.8875,179
            A 4,4,0,0,1,8.8875,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="47.7625" y="92" width="13" height="87" class="chart-rectangle" d="M 47.7625,96
            A 4,4,0,0,1,51.7625,92
            L 56.7625,92
            A 4,4,0,0,1,60.7625,96
            L 60.7625,175
            A 4,4,0,0,1,56.7625,179
            L 51.7625,179
            A 4,4,0,0,1,47.7625,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="86.6375" y="121" width="13" height="58" class="chart-rectangle" d="M 86.6375,125
            A 4,4,0,0,1,90.6375,121
            L 95.6375,121
            A 4,4,0,0,1,99.6375,125
            L 99.6375,175
            A 4,4,0,0,1,95.6375,179
            L 90.6375,179
            A 4,4,0,0,1,86.6375,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="125.5125" y="98.38" width="13" height="80.62" class="chart-rectangle" d="M 125.5125,102.38
            A 4,4,0,0,1,129.5125,98.38
            L 134.5125,98.38
            A 4,4,0,0,1,138.5125,102.38
            L 138.5125,175
            A 4,4,0,0,1,134.5125,179
            L 129.5125,179
            A 4,4,0,0,1,125.5125,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="164.3875" y="124.19" width="13" height="54.81" class="chart-rectangle" d="M 164.3875,128.19
            A 4,4,0,0,1,168.3875,124.19
            L 173.3875,124.19
            A 4,4,0,0,1,177.3875,128.19
            L 177.3875,175
            A 4,4,0,0,1,173.3875,179
            L 168.3875,179
            A 4,4,0,0,1,164.3875,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="203.2625" y="109.69" width="13" height="69.31" class="chart-rectangle" d="M 203.2625,113.69
            A 4,4,0,0,1,207.2625,109.69
            L 212.2625,109.69
            A 4,4,0,0,1,216.2625,113.69
            L 216.2625,175
            A 4,4,0,0,1,212.2625,179
            L 207.2625,179
            A 4,4,0,0,1,203.2625,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="242.1375" y="98.38" width="13" height="80.62" class="chart-rectangle" d="M 242.1375,102.38
            A 4,4,0,0,1,246.1375,98.38
            L 251.1375,98.38
            A 4,4,0,0,1,255.1375,102.38
            L 255.1375,175
            A 4,4,0,0,1,251.1375,179
            L 246.1375,179
            A 4,4,0,0,1,242.1375,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-subscription)" name="undefined" x="281.0125" y="124.19" width="13" height="54.81" class="chart-rectangle" d="M 281.0125,128.19
            A 4,4,0,0,1,285.0125,124.19
            L 290.0125,124.19
            A 4,4,0,0,1,294.0125,128.19
            L 294.0125,175
            A 4,4,0,0,1,290.0125,179
            L 285.0125,179
            A 4,4,0,0,1,281.0125,175 Z" />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar" id="recharts-bar-_r_7_">
                                        <g class="chart-layer chart-bar-rectangles">
                                          <g class="chart-layer">
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="25.8875" y="148.84" width="13" height="30.16" class="chart-rectangle" d="M 25.8875,152.84
            A 4,4,0,0,1,29.8875,148.84
            L 34.8875,148.84
            A 4,4,0,0,1,38.8875,152.84
            L 38.8875,175
            A 4,4,0,0,1,34.8875,179
            L 29.8875,179
            A 4,4,0,0,1,25.8875,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="64.7625" y="137.24" width="13" height="41.76" class="chart-rectangle" d="M 64.7625,141.24
            A 4,4,0,0,1,68.7625,137.24
            L 73.7625,137.24
            A 4,4,0,0,1,77.7625,141.24
            L 77.7625,175
            A 4,4,0,0,1,73.7625,179
            L 68.7625,179
            A 4,4,0,0,1,64.7625,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="103.6375" y="51.4" width="13" height="127.6" class="chart-rectangle" d="M 103.6375,55.4
            A 4,4,0,0,1,107.6375,51.4
            L 112.6375,51.4
            A 4,4,0,0,1,116.6375,55.4
            L 116.6375,175
            A 4,4,0,0,1,112.6375,179
            L 107.6375,179
            A 4,4,0,0,1,103.6375,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="142.5125" y="86.2" width="13" height="92.8" class="chart-rectangle" d="M 142.5125,90.2
            A 4,4,0,0,1,146.5125,86.2
            L 151.5125,86.2
            A 4,4,0,0,1,155.5125,90.2
            L 155.5125,175
            A 4,4,0,0,1,151.5125,179
            L 146.5125,179
            A 4,4,0,0,1,142.5125,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="181.3875" y="150" width="13" height="29" class="chart-rectangle" d="M 181.3875,154
            A 4,4,0,0,1,185.3875,150
            L 190.3875,150
            A 4,4,0,0,1,194.3875,154
            L 194.3875,175
            A 4,4,0,0,1,190.3875,179
            L 185.3875,179
            A 4,4,0,0,1,181.3875,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="220.2625" y="16.6" width="13" height="162.4" class="chart-rectangle" d="M 220.2625,20.6
            A 4,4,0,0,1,224.2625,16.6
            L 229.2625,16.6
            A 4,4,0,0,1,233.2625,20.6
            L 233.2625,175
            A 4,4,0,0,1,229.2625,179
            L 224.2625,179
            A 4,4,0,0,1,220.2625,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="259.1375" y="146.52" width="13" height="32.48" class="chart-rectangle" d="M 259.1375,150.52
            A 4,4,0,0,1,263.1375,146.52
            L 268.1375,146.52
            A 4,4,0,0,1,272.1375,150.52
            L 272.1375,175
            A 4,4,0,0,1,268.1375,179
            L 263.1375,179
            A 4,4,0,0,1,259.1375,175 Z" />
                                              </g>
                                            </g>
                                            <g class="chart-layer chart-bar-rectangle">
                                              <g class="chart-layer chart-inactive-bar">
                                                <path fill="var(--color-revenue)" name="undefined" x="298.0125" y="102.44" width="13" height="76.56" class="chart-rectangle" d="M 298.0125,106.44
            A 4,4,0,0,1,302.0125,102.44
            L 307.0125,102.44
            A 4,4,0,0,1,311.0125,106.44
            L 311.0125,175
            A 4,4,0,0,1,307.0125,179
            L 302.0125,179
            A 4,4,0,0,1,298.0125,175 Z" />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-zIndex-layer_400" />
                                    <g class="chart-zIndex-layer_500" />
                                    <g class="chart-zIndex-layer_600" />
                                    <g class="chart-zIndex-layer_1000" />
                                    <g class="chart-zIndex-layer_1100" />
                                    <g class="chart-zIndex-layer_1200" />
                                    <g class="chart-zIndex-layer_2000" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                    <div class="col-span-3 md:col-span-6 lg:col-span-5 xl:col-span-6">
                      <!-- Card 7: Payments -->
                      <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="font-semibold tracking-tight text-xl">Payments</div>
                          <div class="text-muted text-sm">Manage your payments.</div>
                        </div>
                        <div class="p-6 pt-0 h-[calc(100%_-_102px)]">
                          <div class="mb-4 flex items-center gap-4">
                            <UInput v-model="form.filterEmails" type="text" placeholder="Filter emails..." name="filterEmails" class="flex h-9 w-full rounded-md text-base md:text-sm max-w-sm" :ui="{ base: 'h-full' }" />
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 ml-auto" aria-label="Columns" type="button" @click="openAction(&quot;Columns&quot;)">
                              Columns 
                              <UIcon name="i-lucide-chevron-down" class="size-4" />
                            </UButton>
                          </div>
                          <div class="h-[calc(100%_-_52px)] rounded-md border border-default">
                            <div class="relative w-full overflow-auto">
                              <!-- Table 1: Status / Email / Amount -->
                              <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                                  <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                                </template>
                                <template #selection-cell="{ row }">
                                  <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                                </template>
                                <template #status-header="{ column }">
                                  <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                                </template>
                                <template #status-cell="{ row }">
                                  <div class="capitalize">{{ row.original.status }}</div>
                                </template>
                                <template #email-header="{ column }">
                                  <UButton color="neutral" variant="ghost" size="xs" label="Email" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                                </template>
                                <template #email-cell="{ row }">
                                  <div class="lowercase">{{ row.original.email }}</div>
                                </template>
                                <template #amount-header="{ column }">
                                  <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                                </template>
                                <template #amount-cell="{ row }">
                                  <div class="text-right font-medium">{{ row.original.amount }}</div>
                                </template>
                                <template #actions-cell="{ row }">
                                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 w-8 p-0" aria-label="Open menu" type="button" @click="openAction(&quot;Open menu&quot;, row.original._id, 1)">
                                    <span class="sr-only">{{ row.original.actions }}</span>
                                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                                  </UButton>
                                </template>
                              </UTable>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                    <div class="col-span-3 md:col-span-6 lg:col-span-4 xl:col-span-3">
                      <!-- Card 8: Team Members -->
                      <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Team Members</div>
                          <div class="text-muted text-sm truncate">Invite your team members to collaborate.</div>
                        </div>
                        <div class="p-6 pt-0 grid gap-6">
                          <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center space-x-4">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                <img class="aspect-square h-full w-full" alt="Image" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="text-sm leading-none font-medium">Dale Komen</p>
                                <p class="text-muted text-sm">dale@example.com</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 py-0" aria-label="Member" type="button" @click="openAction(&quot;Member&quot;)">
                              Member 
                              <UIcon name="i-lucide-chevron-down" class="text-muted" />
                            </UButton>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center space-x-4">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                <img class="aspect-square h-full w-full" alt="Image" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="text-sm leading-none font-medium">Sofia Davis</p>
                                <p class="text-muted text-sm">m@example.com</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 py-0" aria-label="Owner" type="button" @click="openAction(&quot;Owner&quot;)">
                              Owner 
                              <UIcon name="i-lucide-chevron-down" class="text-muted" />
                            </UButton>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center space-x-4">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                <img class="aspect-square h-full w-full" alt="Image" src="/reference/247ac7c76922347b.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="text-sm leading-none font-medium">Jackson Lee</p>
                                <p class="text-muted text-sm">p@example.com</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 py-0" aria-label="Member" type="button" @click="openAction(&quot;Member&quot;)">
                              Member 
                              <UIcon name="i-lucide-chevron-down" class="text-muted" />
                            </UButton>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center space-x-4">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                <img class="aspect-square h-full w-full" alt="Image" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="text-sm leading-none font-medium">Isabella Nguyen</p>
                                <p class="text-muted text-sm">i@example.com</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 py-0" aria-label="Member" type="button" @click="openAction(&quot;Member&quot;)">
                              Member 
                              <UIcon name="i-lucide-chevron-down" class="text-muted" />
                            </UButton>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center space-x-4">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                                <img class="aspect-square h-full w-full" alt="Image" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="text-sm leading-none font-medium">Hugan Romex</p>
                                <p class="text-muted text-sm">kai@example.com</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 py-0" aria-label="Member" type="button" @click="openAction(&quot;Member&quot;)">
                              Member 
                              <UIcon name="i-lucide-chevron-down" class="text-muted" />
                            </UButton>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </div>
                </div>
                <div data-orientation="vertical" id="radix-_R_inpfiv5uknmlb_-content-analytics" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden space-y-4" />
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
