<!-- Page: /ecommerce/dashboard-7 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 7 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "quarter3": "Quarter 3",
  "invoiceSearch": "",
  "field5": "5"
})

const quarter3Options = [
  "Quarter 1",
  "Quarter 2",
  "Quarter 3",
  "Quarter 4"
]

const field5Options = [
  "5",
  "10",
  "20"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "customer": "JBJames Brown",
    "customerText5": "JB",
    "customerText7": "James Brown",
    "invoiceID": "INV-00001",
    "date": "Jan 5, 2025",
    "amount": "$1,250.00",
    "priority": "High",
    "priorityClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-error/30 text-error dark:text-error bg-error/10 dark:bg-error/10",
    "status": "Paid",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-success/30 text-success dark:text-success bg-success/10 dark:bg-success/10"
  },
  {
    "_id": "2",
    "customer": "SMSarah Miller",
    "customerText5": "SM",
    "customerText7": "Sarah Miller",
    "invoiceID": "INV-00002",
    "date": "Jan 8, 2025",
    "amount": "$3,420.50",
    "priority": "Medium",
    "priorityClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-warning/30 text-warning dark:text-warning bg-warning/10 dark:bg-warning/10",
    "status": "Pending",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-warning/30 text-warning dark:text-warning bg-warning/10 dark:bg-warning/10"
  },
  {
    "_id": "3",
    "customer": "MCMichael Chen",
    "customerText5": "MC",
    "customerText7": "Michael Chen",
    "invoiceID": "INV-00003",
    "date": "Jan 12, 2025",
    "amount": "$890.00",
    "priority": "Low",
    "priorityClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-(--ui-border-accented)/30 text-toned dark:text-muted bg-muted dark:bg-(--ui-bg-accented)/10",
    "status": "Paid",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-success/30 text-success dark:text-success bg-success/10 dark:bg-success/10"
  },
  {
    "_id": "4",
    "customer": "EDEmily Davis",
    "customerText5": "ED",
    "customerText7": "Emily Davis",
    "invoiceID": "INV-00004",
    "date": "Jan 15, 2025",
    "amount": "$4,750.00",
    "priority": "High",
    "priorityClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-error/30 text-error dark:text-error bg-error/10 dark:bg-error/10",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-error/30 text-error dark:text-error bg-error/10 dark:bg-error/10"
  },
  {
    "_id": "5",
    "customer": "RWRobert Wilson",
    "customerText5": "RW",
    "customerText7": "Robert Wilson",
    "invoiceID": "INV-00005",
    "date": "Jan 18, 2025",
    "amount": "$567.25",
    "priority": "Low",
    "priorityClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-(--ui-border-accented)/30 text-toned dark:text-muted bg-muted dark:bg-(--ui-bg-accented)/10",
    "status": "Draft",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-(--ui-border-accented)/30 text-toned dark:text-muted bg-muted dark:bg-(--ui-bg-accented)/10"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "invoiceID",
    "header": "Invoice ID"
  },
  {
    "accessorKey": "date",
    "header": "Date"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "priority",
    "header": "Priority"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.invoiceSearch || '').toLowerCase()
  const keys = ["customer","invoiceID","date","amount","priority","status"] as const
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
  const rows = table1FilteredRows.value.map(row => ["customer","invoiceID","date","amount","priority","status"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ecommerce-dashboard-7.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-7">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <header class="bg-default flex w-full items-center gap-3 border-b px-4 py-4 sm:px-6 border-default">
                <div class="flex flex-col gap-0.5">
                  <h1 class="text-base font-medium text-pretty text-highlighted">Dashboard Overview</h1>
                  <p class="text-muted hidden text-xs sm:block">A summary for all the purchases, sales etc.</p>
                </div>
                <div class="ml-auto flex items-center gap-2">
                  <span class="text-muted hidden text-xs lg:inline">Jan 1 – 31, 2025</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-8 gap-1.5 text-xs" aria-label="All Platforms" type="button" @click="openAction(&quot;All Platforms&quot;)">
                    <UIcon name="i-lucide-globe" class="size-3.5" />
                    <span class="hidden sm:inline">All Platforms</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-8 gap-1.5 text-xs" aria-label="All Products" type="button" @click="openAction(&quot;All Products&quot;)">
                    <span class="hidden sm:inline">All Products</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-8 gap-1.5 text-xs" aria-label="Export" type="button" @click="exportCsv()">
                    <UIcon name="i-lucide-download" class="size-3.5" />
                    <span class="hidden sm:inline">Export</span>
                  </UButton>
                </div>
              </header>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:space-y-6 sm:p-4 md:p-6">
                <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <!-- Card 1: In-store Sales$7,820.75+$322.50 vs last monthBased on 5,000 orders -->
                  <UCard class="rounded-lg @container/card shadow-none" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="text-muted text-sm font-medium">In-store Sales</div>
                      <div class="tracking-tight text-2xl font-bold @[600px]/card:text-4xl @[800px]/card:text-5xl">$7,820.75</div>
                    </div>
                    <div class="flex p-6 pt-0 flex-col items-start gap-1 text-sm">
                      <div class="flex min-w-0 items-center gap-1.5 truncate font-medium">
                        <span class="text-success">+$322.50 vs last month</span>
                        <UIcon name="i-lucide-trending-up" class="size-3.5 shrink-0 text-success" />
                      </div>
                      <div class="text-muted text-xs">Based on 5,000 orders</div>
                    </div>
                  </UCard>
                  <!-- Card 2: Website Sales$985,937.45+$109,500.00 vs last monthBased on 21,000 orders -->
                  <UCard class="rounded-lg @container/card shadow-none" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="text-muted text-sm font-medium">Website Sales</div>
                      <div class="tracking-tight text-2xl font-bold @[600px]/card:text-4xl @[800px]/card:text-5xl">$985,937.45</div>
                    </div>
                    <div class="flex p-6 pt-0 flex-col items-start gap-1 text-sm">
                      <div class="flex min-w-0 items-center gap-1.5 truncate font-medium">
                        <span class="text-success">+$109,500.00 vs last month</span>
                        <UIcon name="i-lucide-trending-up" class="size-3.5 shrink-0 text-success" />
                      </div>
                      <div class="text-muted text-xs">Based on 21,000 orders</div>
                    </div>
                  </UCard>
                  <!-- Card 3: Wholesale$124,650.00+$7,935.00 vs last monthBased on 890 orders -->
                  <UCard class="rounded-lg @container/card shadow-none" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="text-muted text-sm font-medium">Wholesale</div>
                      <div class="tracking-tight text-2xl font-bold @[600px]/card:text-4xl @[800px]/card:text-5xl">$124,650.00</div>
                    </div>
                    <div class="flex p-6 pt-0 flex-col items-start gap-1 text-sm">
                      <div class="flex min-w-0 items-center gap-1.5 truncate font-medium">
                        <span class="text-success">+$7,935.00 vs last month</span>
                        <UIcon name="i-lucide-trending-up" class="size-3.5 shrink-0 text-success" />
                      </div>
                      <div class="text-muted text-xs">Based on 890 orders</div>
                    </div>
                  </UCard>
                  <!-- Card 4: Returns$15,503.00-$498.00 vs last monthBased on 6,000 orders -->
                  <UCard class="rounded-lg @container/card shadow-none" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="text-muted text-sm font-medium">Returns</div>
                      <div class="tracking-tight text-2xl font-bold @[600px]/card:text-4xl @[800px]/card:text-5xl">$15,503.00</div>
                    </div>
                    <div class="flex p-6 pt-0 flex-col items-start gap-1 text-sm">
                      <div class="flex min-w-0 items-center gap-1.5 truncate font-medium">
                        <span class="text-error">-$498.00 vs last month</span>
                        <UIcon name="i-lucide-trending-down" class="size-3.5 shrink-0 text-error" />
                      </div>
                      <div class="text-muted text-xs">Based on 6,000 orders</div>
                    </div>
                  </UCard>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 xl:flex-row">
                  <!-- Card 5: Revenue -->
                  <UCard class="flex min-w-0 flex-1 flex-col rounded-xl" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center justify-between border-b px-4 sm:px-5 border-default">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Revenue" type="button" @click="openAction(&quot;Revenue&quot;)">
                          <UIcon name="i-lucide-chart-column" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Revenue</h2>
                      </div>
                      <div class="flex items-center gap-3 sm:gap-5">
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-[10px] sm:text-xs">Revenue</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">Expenses</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                      <div class="flex flex-col gap-1">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$8,900.00</p>
                        <p class="text-muted text-[10px] tracking-wider uppercase sm:text-xs">This week vs last week</p>
                      </div>
                      <div class="h-[180px] w-full min-w-0 sm:h-[220px]">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-revenue:var(--ui-primary);--color-expenses:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-revenue:var(--ui-primary);--color-expenses:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="514" height="220" class="chart-wrapper" style="position: relative; cursor: default; width: 514px; height: 220px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 514 220" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="464" height="180" x1="45" y1="185" x2="509" y2="185" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="464" height="180" x1="45" y1="140" x2="509" y2="140" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="464" height="180" x1="45" y1="95" x2="509" y2="95" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="464" height="180" x1="45" y1="50" x2="509" y2="50" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="464" height="180" x1="45" y1="5" x2="509" y2="5" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="45" y="5" height="180" width="464" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300">
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_0_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="51.6286" y="113" width="53" height="72" class="chart-rectangle" d="M51.6286,113L 104.6286,113L 104.6286,185L 51.6286,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="117.9143" y="95" width="53" height="90" class="chart-rectangle" d="M117.9143,95L 170.9143,95L 170.9143,185L 117.9143,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="184.2" y="77" width="53" height="108" class="chart-rectangle" d="M184.2,77L 237.2,77L 237.2,185L 184.2,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="250.4857" y="119" width="53" height="66" class="chart-rectangle" d="M250.4857,119L 303.4857,119L 303.4857,185L 250.4857,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="316.7714" y="89" width="53" height="96" class="chart-rectangle" d="M316.7714,89L 369.7714,89L 369.7714,185L 316.7714,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="383.0571" y="137" width="53" height="48" class="chart-rectangle" d="M383.0571,137L 436.0571,137L 436.0571,185L 383.0571,185Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-revenue)" name="undefined" x="449.3429" y="131" width="53" height="54" class="chart-rectangle" d="M449.3429,131L 502.3429,131L 502.3429,185L 449.3429,185Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_1_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="51.6286" y="65" width="53" height="48" class="chart-rectangle" d="M51.6286,68A 3,3,0,0,1,54.6286,65L 101.6286,65A 3,3,0,0,1,
        104.6286,68L 104.6286,113L 51.6286,113Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="117.9143" y="59" width="53" height="36" class="chart-rectangle" d="M117.9143,62A 3,3,0,0,1,120.9143,59L 167.9143,59A 3,3,0,0,1,
        170.9143,62L 170.9143,95L 117.9143,95Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="184.2" y="11" width="53" height="66" class="chart-rectangle" d="M184.2,14A 3,3,0,0,1,187.2,11L 234.2,11A 3,3,0,0,1,
        237.2,14L 237.2,77L 184.2,77Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="250.4857" y="65" width="53" height="54" class="chart-rectangle" d="M250.4857,68A 3,3,0,0,1,253.4857,65L 300.4857,65A 3,3,0,0,1,
        303.4857,68L 303.4857,119L 250.4857,119Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="316.7714" y="17" width="53" height="72" class="chart-rectangle" d="M316.7714,20A 3,3,0,0,1,319.7714,17L 366.7714,17A 3,3,0,0,1,
        369.7714,20L 369.7714,89L 316.7714,89Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="383.0571" y="113" width="53" height="24" class="chart-rectangle" d="M383.0571,116A 3,3,0,0,1,386.0571,113L 433.0571,113A 3,3,0,0,1,
        436.0571,116L 436.0571,137L 383.0571,137Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-expenses)" name="undefined" x="449.3429" y="101" width="53" height="30" class="chart-rectangle" d="M449.3429,104A 3,3,0,0,1,452.3429,101L 499.3429,101A 3,3,0,0,1,
        502.3429,104L 502.3429,131L 449.3429,131Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
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
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis chart-yAxis yAxis">
                                      <g class="chart-cartesian-axis-ticks chart-yAxis-ticks">
                                        <g class="chart-cartesian-axis-tick-lines chart-yAxis-tick-lines">
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
                                        <text height="30" width="464" stroke="none" x="78.14285714285711" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="78.14285714285711">Mon</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="144.42857142857142" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="144.42857142857142">Tue</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="210.7142857142857" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="210.7142857142857">Wed</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="277" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="277">Thu</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="343.2857142857143" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="343.2857142857143">Fri</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="409.5714285714286" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="409.5714285714286">Sat</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="464" stroke="none" x="475.85714285714295" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="475.85714285714295">Sun</tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="180" stroke="none" x="32" y="185" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$0</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="180" stroke="none" x="32" y="140" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$750</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="180" stroke="none" x="32" y="95" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$2K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="180" stroke="none" x="32" y="50" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$2K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="180" stroke="none" x="32" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$3K</tspan>
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
                    </div>
                  </UCard>
                  <!-- Card 6: Sales Pipeline -->
                  <UCard class="flex min-w-0 flex-1 flex-col rounded-xl" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center justify-between border-b px-4 sm:px-5 border-default">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Sales Pipeline" type="button" @click="openAction(&quot;Sales Pipeline&quot;)">
                          <UIcon name="i-lucide-chart-column" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Sales Pipeline</h2>
                      </div>
                      <USelect v-model="form.quarter3" :items="quarter3Options" aria-label="Select quarter" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-[120px] text-xs" />
                    </div>
                    <div class="grid flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-[1fr_auto_1fr] sm:p-5">
                      <div class="flex min-h-0 flex-col gap-2">
                        <div>
                          <p class="text-lg font-semibold tracking-tight text-highlighted">3,980</p>
                          <p class="text-muted text-[10px] tracking-wider uppercase">Total Orders</p>
                        </div>
                        <div class="min-h-0 w-full flex-1">
                          <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-orders:var(--ui-primary)" role="img" aria-label="Analytics chart">
                            <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-orders:var(--ui-primary);width:100%;height:239px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="241" height="239" class="chart-wrapper" style="position: relative; cursor: default; width: 241px; height: 239px;">
                                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 241 239" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100" />
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts2-clip">
                                        <rect x="5" y="5" height="199" width="231" />
                                      </clipPath>
                                    </defs>
                                    <defs>
                                      <linearGradient id="pipelineGradientOrders" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="var(--color-orders)" stop-opacity="0.3" />
                                        <stop offset="100%" stop-color="var(--color-orders)" stop-opacity="0.05" />
                                      </linearGradient>
                                    </defs>
                                    <g class="chart-zIndex-layer_100">
                                      <g class="chart-layer chart-area">
                                        <g class="chart-layer">
                                          <defs>
                                            <clipPath id="animationClipPath-recharts-area-_r_2_">
                                              <rect x="5" y="0" width="214.91814362876377" height="206" />
                                            </clipPath>
                                          </defs>
                                          <g class="chart-layer">
                                            <g class="chart-layer">
                                              <path stroke-width="2" fill="url(#pipelineGradientOrders)" fill-opacity="0.6" height="199" stroke="none" width="231" id="recharts-area-_r_2_" class="chart-curve chart-area-area" d="M5,151.434L15.5,151.434L15.5,23.774L36.5,23.774L36.5,38.792L57.5,38.792L57.5,173.962L78.5,173.962L78.5,185.226L99.5,185.226L99.5,50.057L120.5,50.057L120.5,27.528L141.5,27.528L141.5,38.792L162.5,38.792L162.5,143.925L183.5,143.925L183.5,162.698L204.5,162.698L204.5,76.34L225.5,76.34L225.5,61.321L236,61.321L236,204L225.5,204L225.5,204L204.5,204L204.5,204L183.5,204L183.5,204L162.5,204L162.5,204L141.5,204L141.5,204L120.5,204L120.5,204L99.5,204L99.5,204L78.5,204L78.5,204L57.5,204L57.5,204L36.5,204L36.5,204L15.5,204L15.5,204L5,204Z" />
                                              <path stroke-width="2" fill="none" fill-opacity="0.6" height="199" stroke="var(--color-orders)" width="231" class="chart-curve chart-area-curve" d="M5,151.434L15.5,151.434L15.5,23.774L36.5,23.774L36.5,38.792L57.5,38.792L57.5,173.962L78.5,173.962L78.5,185.226L99.5,185.226L99.5,50.057L120.5,50.057L120.5,27.528L141.5,27.528L141.5,38.792L162.5,38.792L162.5,143.925L183.5,143.925L183.5,162.698L204.5,162.698L204.5,76.34L225.5,76.34L225.5,61.321L236,61.321" />
                                            </g>
                                          </g>
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
                                          <text height="30" width="231" stroke="none" x="5" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="5">Jul</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="231" stroke="none" x="89" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="89">Aug</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="231" stroke="none" x="173" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="173">Sep</tspan>
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
                      </div>
                      <div class="bg-(--ui-border) h-px w-full sm:h-auto sm:w-px sm:self-stretch" />
                      <div class="flex min-h-0 flex-col gap-2">
                        <div>
                          <p class="text-lg font-semibold tracking-tight text-highlighted">$94.7K</p>
                          <p class="text-muted text-[10px] tracking-wider uppercase">Total Sales</p>
                        </div>
                        <div class="min-h-0 w-full flex-1">
                          <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-sales:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                            <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-sales:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));width:100%;height:239px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="241" height="239" class="chart-wrapper" style="position: relative; cursor: default; width: 241px; height: 239px;">
                                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 241 239" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100" />
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts3-clip">
                                        <rect x="5" y="5" height="199" width="231" />
                                      </clipPath>
                                    </defs>
                                    <defs>
                                      <linearGradient id="pipelineGradientSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="var(--color-sales)" stop-opacity="0.3" />
                                        <stop offset="100%" stop-color="var(--color-sales)" stop-opacity="0.05" />
                                      </linearGradient>
                                    </defs>
                                    <g class="chart-zIndex-layer_100">
                                      <g class="chart-layer chart-area">
                                        <g class="chart-layer">
                                          <defs>
                                            <clipPath id="animationClipPath-recharts-area-_r_3_">
                                              <rect x="5" y="0" width="214.91814362876377" height="206" />
                                            </clipPath>
                                          </defs>
                                          <g class="chart-layer">
                                            <g class="chart-layer">
                                              <path stroke-width="2" fill="url(#pipelineGradientSales)" fill-opacity="0.6" height="199" stroke="none" width="231" id="recharts-area-_r_3_" class="chart-curve chart-area-area" d="M5,164.384L15.5,164.384L15.5,5.921L36.5,5.921L36.5,29.875L57.5,29.875L57.5,190.181L78.5,190.181L78.5,203.079L99.5,203.079L99.5,48.301L120.5,48.301L120.5,16.977L141.5,16.977L141.5,39.088L162.5,39.088L162.5,153.329L183.5,153.329L183.5,177.282L204.5,177.282L204.5,72.255L225.5,72.255L225.5,55.671L236,55.671L236,204L225.5,204L225.5,204L204.5,204L204.5,204L183.5,204L183.5,204L162.5,204L162.5,204L141.5,204L141.5,204L120.5,204L120.5,204L99.5,204L99.5,204L78.5,204L78.5,204L57.5,204L57.5,204L36.5,204L36.5,204L15.5,204L15.5,204L5,204Z" />
                                              <path stroke-width="2" fill="none" fill-opacity="0.6" height="199" stroke="var(--color-sales)" width="231" class="chart-curve chart-area-curve" d="M5,164.384L15.5,164.384L15.5,5.921L36.5,5.921L36.5,29.875L57.5,29.875L57.5,190.181L78.5,190.181L78.5,203.079L99.5,203.079L99.5,48.301L120.5,48.301L120.5,16.977L141.5,16.977L141.5,39.088L162.5,39.088L162.5,153.329L183.5,153.329L183.5,177.282L204.5,177.282L204.5,72.255L225.5,72.255L225.5,55.671L236,55.671" />
                                            </g>
                                          </g>
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
                                          <text height="30" width="231" stroke="none" x="5" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="5">Jul</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="231" stroke="none" x="89" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="89">Aug</tspan>
                                          </text>
                                        </g>
                                        <g class="chart-layer chart-cartesian-axis-tick-label">
                                          <text height="30" width="231" stroke="none" x="173" y="216" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                            <tspan x="173">Sep</tspan>
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
                      </div>
                    </div>
                  </UCard>
                </div>
                <div class="grid gap-4 sm:gap-6 lg:grid-cols-3">
                  <!-- Card 7: Sales by Category -->
                  <UCard class="flex flex-col gap-4 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex items-center gap-2.5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Sales by Category" type="button" @click="openAction(&quot;Sales by Category&quot;)">
                        <UIcon name="i-lucide-grid-3x3" class="text-muted size-4 sm:size-[18px]" />
                      </UButton>
                      <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Sales by Category</h2>
                    </div>
                    <div class="mx-auto aspect-square max-h-[250px] w-full">
                      <!-- Chart 7: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                        <!-- Chart 8: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="321" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 321px; height: 250px;">
                              <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 321 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-polar-grid">
                                    <g class="chart-polar-grid-concentric">
                                      <path cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,125L 160.5,125L 160.5,125L 160.5,125L 160.5,125Z" />
                                      <path cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,101L 183.3253563910837,117.58359213500127L 174.60684605501936,144.41640786499875L 146.39315394498064,144.41640786499875L 137.6746436089163,117.58359213500127Z" />
                                      <path cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,77L 206.15071278216737,110.16718427000252L 188.71369211003872,163.8328157299975L 132.28630788996128,163.8328157299975L 114.84928721783263,110.16718427000254Z" />
                                      <path cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,53L 228.97606917325106,102.75077640500379L 202.82053816505805,183.2492235949962L 118.17946183494195,183.2492235949962L 92.02393082674894,102.75077640500379Z" />
                                      <path cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,29L 251.80142556433475,95.33436854000504L 216.9273842200774,202.66563145999496L 104.07261577992259,202.66563145999496L 69.19857443566525,95.33436854000506Z" />
                                    </g>
                                    <g class="chart-polar-grid-angle">
                                      <line cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" x1="160.5" y1="125" x2="160.5" y2="29" />
                                      <line cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" x1="160.5" y1="125" x2="251.80142556433475" y2="95.33436854000504" />
                                      <line cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" x1="160.5" y1="125" x2="216.9273842200774" y2="202.66563145999496" />
                                      <line cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" x1="160.5" y1="125" x2="104.07261577992259" y2="202.66563145999496" />
                                      <line cx="160.5" cy="125" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" x1="160.5" y1="125" x2="69.19857443566525" y2="95.33436854000506" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts4-clip">
                                    <rect x="5" y="5" height="240" width="311" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-radar">
                                    <g class="chart-layer chart-radar-polygon">
                                      <path fill="var(--color-value)" fill-opacity="0.5" stroke="var(--color-value)" stroke-width="2" id="recharts-radar-_r_4_" class="chart-polygon" d="M160.5,51.7604L206.3704,110.0958L180.4496,152.4583L138.9754,154.6261L135.8659,116.9959L160.5,51.7604Z" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400" />
                                <g class="chart-zIndex-layer_500">
                                  <g class="chart-layer chart-polar-angle-axis angleAxis">
                                    <path cx="160.5" cy="125" fill="none" class="chart-polygon chart-polar-angle-axis-line" d="M160.5,29L251.8014,95.3344L216.9274,202.6656L104.0726,202.6656L69.1986,95.3344L160.5,29Z" />
                                    <g class="chart-layer chart-polar-angle-axis-ticks">
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="125" fill="none" x1="160.5" y1="29" x2="160.5" y2="21" />
                                        <text cx="160.5" cy="125" stroke="none" x="160.5" y="21" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="160.5">Electronics</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="125" fill="none" x1="251.80142556433475" y1="95.33436854000504" x2="259.409877694696" y2="92.86223258500547" />
                                        <text cx="160.5" cy="125" stroke="none" x="259.409877694696" y="92.86223258500547" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="start" fill="var(--ui-text-muted)">
                                          <tspan x="259.409877694696">Clothing</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="125" fill="none" x1="216.9273842200774" y1="202.66563145999496" x2="221.6296662384172" y2="209.13776741499453" />
                                        <text cx="160.5" cy="125" stroke="none" x="221.6296662384172" y="209.13776741499453" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="start" fill="var(--ui-text-muted)">
                                          <tspan x="221.6296662384172">Home &amp; Garden</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="125" fill="none" x1="104.07261577992259" y1="202.66563145999496" x2="99.3703337615828" y2="209.13776741499453" />
                                        <text cx="160.5" cy="125" stroke="none" x="99.3703337615828" y="209.13776741499453" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="99.3703337615828">Sports</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="125" fill="none" x1="69.19857443566525" y1="95.33436854000506" x2="61.59012230530402" y2="92.86223258500547" />
                                        <text cx="160.5" cy="125" stroke="none" x="61.59012230530402" y="92.86223258500547" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="61.59012230530402">Beauty</tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </g>
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
                  <!-- Card 8: Traffic Sources -->
                  <UCard class="flex h-full min-w-0 flex-col rounded-xl" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center justify-between px-4 sm:px-5">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Traffic Sources" type="button" @click="openAction(&quot;Traffic Sources&quot;)">
                          <UIcon name="i-lucide-grid-3x3" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <div class="flex items-center gap-2">
                          <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Traffic Sources</h2>
                          <span class="text-success text-xs font-medium">+30%</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex min-h-0 flex-1 flex-col justify-center gap-4 px-4 py-4 sm:px-5">
                      <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1.5">
                          <div class="bg-primary size-2.5 rounded-full" />
                          <span class="text-muted text-[10px] sm:text-xs">High</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="bg-primary/40 size-2.5 rounded-full" />
                          <span class="text-muted text-[10px] sm:text-xs">Medium</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="bg-primary/15 size-2.5 rounded-full" />
                          <span class="text-muted text-[10px] sm:text-xs">Low</span>
                        </div>
                      </div>
                      <div class="grid grid-cols-[auto_repeat(4,1fr)] gap-0.5 sm:gap-1">
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">6k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 15%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Total Week 1: 0%" type="button" @click="openAction(&quot;Total Week 1: 0%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 15%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Total Week 2: 0%" type="button" @click="openAction(&quot;Total Week 2: 0%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 15%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Total Week 3: 0%" type="button" @click="openAction(&quot;Total Week 3: 0%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 15%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Total Week 4: 0%" type="button" @click="openAction(&quot;Total Week 4: 0%&quot;)" />
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">5k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 33%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Google Ads Week 1: 50%" type="button" @click="openAction(&quot;Google Ads Week 1: 50%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 94%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Google Ads Week 2: 95%" type="button" @click="openAction(&quot;Google Ads Week 2: 95%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 22%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Google Ads Week 3: 20%" type="button" @click="openAction(&quot;Google Ads Week 3: 20%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 34%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Google Ads Week 4: 55%" type="button" @click="openAction(&quot;Google Ads Week 4: 55%&quot;)" />
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">4k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 24%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Facebook Week 1: 25%" type="button" @click="openAction(&quot;Facebook Week 1: 25%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 36%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Facebook Week 2: 60%" type="button" @click="openAction(&quot;Facebook Week 2: 60%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 20%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Facebook Week 3: 15%" type="button" @click="openAction(&quot;Facebook Week 3: 15%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 33%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Facebook Week 4: 50%" type="button" @click="openAction(&quot;Facebook Week 4: 50%&quot;)" />
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">2k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 22%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Organic Week 1: 20%" type="button" @click="openAction(&quot;Organic Week 1: 20%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 92%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Organic Week 2: 90%" type="button" @click="openAction(&quot;Organic Week 2: 90%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 19%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Organic Week 3: 10%" type="button" @click="openAction(&quot;Organic Week 3: 10%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 20%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Organic Week 4: 15%" type="button" @click="openAction(&quot;Organic Week 4: 15%&quot;)" />
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">3k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 31%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Email Week 1: 45%" type="button" @click="openAction(&quot;Email Week 1: 45%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 94%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Email Week 2: 95%" type="button" @click="openAction(&quot;Email Week 2: 95%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 91%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Email Week 3: 85%" type="button" @click="openAction(&quot;Email Week 3: 85%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 22%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Email Week 4: 20%" type="button" @click="openAction(&quot;Email Week 4: 20%&quot;)" />
                        <div class="flex items-center pr-2">
                          <span class="text-muted text-[11px] font-medium">4.5k</span>
                        </div>
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 29%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Direct Week 1: 40%" type="button" @click="openAction(&quot;Direct Week 1: 40%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 92%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Direct Week 2: 90%" type="button" @click="openAction(&quot;Direct Week 2: 90%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 89%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Direct Week 3: 80%" type="button" @click="openAction(&quot;Direct Week 3: 80%&quot;)" />
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented h-5 w-full rounded-sm focus-visible:ring-2 focus-visible:outline-none sm:h-6" style="background-color:color-mix(in oklch, var(--ui-primary) 24%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Direct Week 4: 25%" type="button" @click="openAction(&quot;Direct Week 4: 25%&quot;)" />
                        <div class="pt-2" />
                        <div class="text-muted pt-2 text-center text-[10px]">Week 1</div>
                        <div class="text-muted pt-2 text-center text-[10px]">Week 2</div>
                        <div class="text-muted pt-2 text-center text-[10px]">Week 3</div>
                        <div class="text-muted pt-2 text-center text-[10px]">Week 4</div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 9: Order Status -->
                  <UCard class="flex flex-col gap-4 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex items-center gap-2.5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Order Status" type="button" @click="openAction(&quot;Order Status&quot;)">
                        <UIcon name="i-lucide-users" class="text-muted size-4 sm:size-[18px]" />
                      </UButton>
                      <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Order Status</h2>
                    </div>
                    <div class="relative mx-auto w-full max-w-[220px] sm:max-w-[240px]">
                      <!-- Chart 9: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-square w-full" style="" role="img" aria-label="Analytics chart">
                        <!-- Chart 10: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;width:100%;height:240px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="240" height="240" class="chart-wrapper" style="position: relative; cursor: default; width: 240px; height: 240px;">
                              <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 240 240" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100" />
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts5-clip">
                                    <rect x="5" y="5" height="230" width="230" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-pie">
                                    <g class="chart-layer">
                                      <g class="chart-layer chart-pie-sector">
                                        <g class="chart-layer chart-shape">
                                          <path stroke-width="0" cx="120" cy="120" fill="var(--ui-primary)" stroke="var(--ui-bg)" name="fulfilled" fill-opacity="1" class="chart-sector" d="M 217.75,120
    A 97.75,97.75,0,
    1,0,
    105.8915,216.7265
  L 110.0411,188.2775
            A 69,69,0,
            1,1,
            189,120 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-pie-sector">
                                        <g class="chart-layer chart-shape">
                                          <path stroke-width="0" cx="120" cy="120" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="var(--ui-bg)" name="pending" fill-opacity="1" class="chart-sector" d="M 109.2758,217.1599
    A 97.75,97.75,0,
    0,0,
    207.2624,164.0492
  L 181.597,151.0936
            A 69,69,0,
            0,1,
            112.43,188.5835 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
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
                      <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                        <span class="text-muted text-[10px] tracking-wider uppercase">Orders</span>
                        <span class="text-lg font-semibold">4,050</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center gap-6">
                      <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded-md px-1 py-0.5 transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Fulfilled" type="button" @click="openAction(&quot;Fulfilled&quot;)">
                        <span class="size-2.5 rounded-full" style="background-color:var(--ui-primary)" />
                        <span class="text-muted text-xs">Fulfilled</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded-md px-1 py-0.5 transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Pending" type="button" @click="openAction(&quot;Pending&quot;)">
                        <span class="size-2.5 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                        <span class="text-muted text-xs">Pending</span>
                      </UButton>
                    </div>
                  </UCard>
                </div>
                <div>
                  <div class="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:gap-4 sm:py-3.5">
                    <div class="flex flex-1 flex-col gap-0.5">
                      <div class="flex items-center gap-2.5">
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Recent Orders</h2>
                        <UBadge color="neutral" variant="subtle" class="ml-1 inline-flex items-center rounded-md bg-default px-2 py-1 text-[10px] font-medium text-toned ring-1 ring-(--ui-border-accented)/10 ring-inset sm:text-xs dark:bg-(--ui-bg-elevated)/50 dark:text-muted dark:ring-(--ui-border-accented)/20">
                          18
                        </UBadge>
                      </div>
                      <p class="text-muted hidden text-xs sm:block">Display the recent invoices in the table below.</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="relative flex-1 sm:flex-none">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                        <UInput v-model="form.invoiceSearch" type="text" placeholder="Search invoices… (e.g., INV-00012)" aria-label="Search invoices" name="invoiceSearch" class="flex rounded-md md:text-sm h-8 w-full pr-12 pl-9 text-sm sm:h-9 sm:w-[180px] lg:w-[220px]" :ui="{ base: 'h-full' }" />
                        <UKbd class="bg-muted text-muted pointer-events-none absolute top-1/2 right-2.5 hidden -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] font-medium select-none sm:inline-block border-default">⌘1</UKbd>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1.5 sm:h-9 sm:gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                        <UIcon name="i-lucide-funnel" class="size-3.5 sm:size-4" />
                        <span class="hidden sm:inline">Filter</span>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-8 text-xs sm:h-9 sm:text-sm" aria-label="See All" type="button" @click="openAction(&quot;See All&quot;)">
                        See All
                      </UButton>
                    </div>
                  </div>
                  <div class="overflow-x-auto pb-3 sm:pb-4">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Customer / Invoice ID / Date / Amount / Priority / Status -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #customer-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #customer-cell="{ row }">
                          <div class="flex items-center gap-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">{{ row.original.customerText5 }}</span>
                            </span>
                            <span class="text-xs font-medium sm:text-sm">{{ row.original.customerText7 }}</span>
                          </div>
                        </template>
                        <template #invoiceID-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Invoice ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #invoiceID-cell="{ row }">
                          {{ row.original.invoiceID }}
                        </template>
                        <template #date-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #date-cell="{ row }">
                          {{ row.original.date }}
                        </template>
                        <template #amount-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #amount-cell="{ row }">
                          {{ row.original.amount }}
                        </template>
                        <template #priority-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Priority" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #priority-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" :class="row.original.priorityClass2">
                            {{ row.original.priority }}
                          </UBadge>
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                            {{ row.original.status }}
                          </UBadge>
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-between gap-3 border-t py-3 sm:flex-row border-default">
                    <div class="text-muted flex items-center gap-2 text-xs sm:text-sm">
                      <span class="hidden sm:inline">Rows per page:</span>
                      <USelect v-model="form.field5" :items="field5Options" aria-label="Rows per page" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[70px]" />
                      <span class="text-muted">1-5 of 18</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to first page" type="button" disabled @click="openAction(&quot;Go to first page&quot;)">
                        <UIcon name="i-lucide-chevrons-left" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to previous page" type="button" disabled @click="openAction(&quot;Go to previous page&quot;)">
                        <UIcon name="i-lucide-chevron-left" class="size-4" />
                      </UButton>
                      <div class="flex items-center gap-1 px-2">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 size-8" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                          1
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                          2
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                          3
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="4" type="button" @click="openAction(&quot;4&quot;)">
                          4
                        </UButton>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to next page" type="button" @click="openAction(&quot;Go to next page&quot;)">
                        <UIcon name="i-lucide-chevron-right" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to last page" type="button" @click="openAction(&quot;Go to last page&quot;)">
                        <UIcon name="i-lucide-chevrons-right" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
              </main>
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
