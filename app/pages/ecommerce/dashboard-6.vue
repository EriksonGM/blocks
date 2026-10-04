<!-- Page: /ecommerce/dashboard-6 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 6 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "ordersSearch": "",
  "field10": "10"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Week",
    "value": "0"
  },
  {
    "label": "Month",
    "value": "1"
  }
]

const field10Options = [
  "10",
  "25",
  "50"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "field": "1",
    "order": "ORD-2024-0012items",
    "orderText4": "ORD-2024-001",
    "orderText6": "2",
    "orderText7": "items",
    "customer": "SJSarah Johnson",
    "customerText5": "SJ",
    "customerText7": "Sarah Johnson",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "total": "$2,499.00",
    "date": "Jan 28, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-001",
    "actionsId5": "radix-_R_e6finpfiv5uknmlb_"
  },
  {
    "_id": "2",
    "field": "2",
    "order": "ORD-2024-0022items",
    "orderText4": "ORD-2024-002",
    "orderText6": "2",
    "orderText7": "items",
    "customer": "MCMichael Chen",
    "customerText5": "MC",
    "customerText7": "Michael Chen",
    "status": "Shipped",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20",
    "total": "$1,348.00",
    "date": "Jan 27, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-002",
    "actionsId5": "radix-_R_eafinpfiv5uknmlb_"
  },
  {
    "_id": "3",
    "field": "3",
    "order": "ORD-2024-0033items",
    "orderText4": "ORD-2024-003",
    "orderText6": "3",
    "orderText7": "items",
    "customer": "EWEmma Wilson",
    "customerText5": "EW",
    "customerText7": "Emma Wilson",
    "status": "Processing",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-warning/10 text-warning ring-1 ring-inset ring-warning/20 dark:bg-warning/30 dark:text-warning dark:ring-warning/20",
    "total": "$1,198.00",
    "date": "Jan 27, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-003",
    "actionsId5": "radix-_R_eefinpfiv5uknmlb_"
  },
  {
    "_id": "4",
    "field": "4",
    "order": "ORD-2024-0041item",
    "orderText4": "ORD-2024-004",
    "orderText6": "1",
    "orderText7": "item",
    "customer": "JRJames Rodriguez",
    "customerText5": "JR",
    "customerText7": "James Rodriguez",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "total": "$799.00",
    "date": "Jan 26, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-004",
    "actionsId5": "radix-_R_eifinpfiv5uknmlb_"
  },
  {
    "_id": "5",
    "field": "5",
    "order": "ORD-2024-0051item",
    "orderText4": "ORD-2024-005",
    "orderText6": "1",
    "orderText7": "item",
    "customer": "LPLisa Park",
    "customerText5": "LP",
    "customerText7": "Lisa Park",
    "status": "Cancelled",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-error/10 text-error ring-1 ring-inset ring-error/10 dark:bg-error/30 dark:text-error dark:ring-error/20",
    "total": "$599.00",
    "date": "Jan 26, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-005",
    "actionsId5": "radix-_R_emfinpfiv5uknmlb_"
  },
  {
    "_id": "6",
    "field": "6",
    "order": "ORD-2024-0062items",
    "orderText4": "ORD-2024-006",
    "orderText6": "2",
    "orderText7": "items",
    "customer": "DKDavid Kim",
    "customerText5": "DK",
    "customerText7": "David Kim",
    "status": "Shipped",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20",
    "total": "$5,498.00",
    "date": "Jan 25, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-006",
    "actionsId5": "radix-_R_eqfinpfiv5uknmlb_"
  },
  {
    "_id": "7",
    "field": "7",
    "order": "ORD-2024-0071item",
    "orderText4": "ORD-2024-007",
    "orderText6": "1",
    "orderText7": "item",
    "customer": "AMAnna Martinez",
    "customerText5": "AM",
    "customerText7": "Anna Martinez",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "total": "$1,199.00",
    "date": "Jan 25, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-007",
    "actionsId5": "radix-_R_eufinpfiv5uknmlb_"
  },
  {
    "_id": "8",
    "field": "8",
    "order": "ORD-2024-0082items",
    "orderText4": "ORD-2024-008",
    "orderText6": "2",
    "orderText7": "items",
    "customer": "RTRobert Taylor",
    "customerText5": "RT",
    "customerText7": "Robert Taylor",
    "status": "Processing",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-warning/10 text-warning ring-1 ring-inset ring-warning/20 dark:bg-warning/30 dark:text-warning dark:ring-warning/20",
    "total": "$878.00",
    "date": "Jan 24, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-008",
    "actionsId5": "radix-_R_f2finpfiv5uknmlb_"
  },
  {
    "_id": "9",
    "field": "9",
    "order": "ORD-2024-0091item",
    "orderText4": "ORD-2024-009",
    "orderText6": "1",
    "orderText7": "item",
    "customer": "JLJennifer Lee",
    "customerText5": "JL",
    "customerText7": "Jennifer Lee",
    "status": "Shipped",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20",
    "total": "$549.00",
    "date": "Jan 24, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-009",
    "actionsId5": "radix-_R_f6finpfiv5uknmlb_"
  },
  {
    "_id": "10",
    "field": "10",
    "order": "ORD-2024-0102items",
    "orderText4": "ORD-2024-010",
    "orderText6": "2",
    "orderText7": "items",
    "customer": "WBWilliam Brown",
    "customerText5": "WB",
    "customerText7": "William Brown",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "total": "$1,648.00",
    "date": "Jan 23, 2024",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-2024-010",
    "actionsId5": "radix-_R_fafinpfiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "field",
    "header": "#"
  },
  {
    "accessorKey": "order",
    "header": "Order"
  },
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  },
  {
    "accessorKey": "date",
    "header": "Date"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.ordersSearch || '').toLowerCase()
  const keys = ["field","order","customer","status","total","date","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-6">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:p-4 md:p-6">
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <!-- Card 1: $1,800,000.00 -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">$1,800,000.00</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Total Revenue</span>
                      <span class="text-[10px] font-medium sm:text-xs text-success dark:text-success">+12.0%</span>
                    </div>
                  </UCard>
                  <!-- Card 2: 2.4 days -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">2.4 days</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Avg. Fulfillment</span>
                      <span class="text-[10px] font-medium sm:text-xs text-error dark:text-error">-5.0%</span>
                    </div>
                  </UCard>
                  <!-- Card 3: 9,420 -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">9,420</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Orders</span>
                      <span class="text-[10px] font-medium sm:text-xs text-success dark:text-success">+18.0%</span>
                    </div>
                  </UCard>
                  <!-- Card 4: 4.2% -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">4.2%</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Conversion Rate</span>
                      <span class="text-[10px] font-medium sm:text-xs text-success dark:text-success">+1.2%</span>
                    </div>
                  </UCard>
                  <!-- Card 5: 3.1% -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">3.1%</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Return Rate</span>
                      <span class="text-[10px] font-medium sm:text-xs text-success dark:text-success">-11.0%</span>
                    </div>
                  </UCard>
                  <!-- Card 6: 184K -->
                  <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <span class="text-2xl font-semibold tracking-tight sm:text-3xl">184K</span>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-muted text-xs sm:text-sm">Page Views</span>
                      <span class="text-[10px] font-medium sm:text-xs text-success dark:text-success">+22.0%</span>
                    </div>
                  </UCard>
                </div>
                <div class="flex flex-col gap-4 xl:flex-row">
                  <!-- Card 7: Category Performance -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-5" :ui="{ body: 'contents' }">
                    <div class="flex flex-wrap items-start justify-between gap-2">
                      <div class="flex flex-col gap-1">
                        <h2 class="text-sm font-medium text-pretty text-highlighted">Category Performance</h2>
                        <span class="text-2xl font-bold tracking-tight">11,308</span>
                        <div class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted text-[10px]">Electronics</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted text-[10px]">Clothing</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted text-[10px]">Home &amp; Garden</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted text-[10px]">Sports</span>
                          </div>
                        </div>
                      </div>
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-(--ui-bg-muted)/50 flex items-center gap-0.5 rounded-lg border p-0.5 border-default" aria-label="Category performance period" />
                    </div>
                    <div id="category-chart-panel" class="h-[240px] w-full min-w-0 sm:h-[280px]">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-electronics:var(--ui-primary);--color-clothing:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-homeGarden:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-sports:color-mix(in oklch, var(--ui-text-highlighted) 40%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-electronics:var(--ui-primary);--color-clothing:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-homeGarden:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-sports:color-mix(in oklch, var(--ui-text-highlighted) 40%, var(--ui-bg));width:100%;height:280px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="658" height="280" class="chart-wrapper" style="position: relative; cursor: default; width: 658px; height: 280px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 658 280" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="245" x2="653" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="185" x2="653" y2="185" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="125" x2="653" y2="125" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="65" x2="653" y2="65" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="5" x2="653" y2="5" />
                                    </g>
                                    <g class="chart-cartesian-grid-vertical">
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="37" y1="5" x2="37" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="139.66666666666669" y1="5" x2="139.66666666666669" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="242.33333333333334" y1="5" x2="242.33333333333334" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="345" y1="5" x2="345" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="447.6666666666667" y1="5" x2="447.6666666666667" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="550.3333333333334" y1="5" x2="550.3333333333334" y2="245" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="37" y="5" width="616" height="240" x1="653" y1="5" x2="653" y2="245" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="37" y="5" height="240" width="616" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-electronics)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="692.8834228515625px 692.8834228515625px" d="M37,201.8L132.516,148.212L235.183,175.46L337.849,117.513L440.516,163.685L543.183,132.425L645.849,187.854" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-clothing)" stroke-width="2" fill="none" id="recharts-line-_r_1_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="728.3666381835938px 728.3666381835938px" d="M37,192.2L132.516,118.516L235.183,150.958L337.849,176.128L440.516,77.546L543.183,139.035L645.849,115.173" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-homeGarden)" stroke-width="2" fill="none" id="recharts-line-_r_2_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="650.2055053710938px 650.2055053710938px" d="M37,177.8L132.516,155.472L235.183,122.54L337.849,142.528L440.516,124.998L543.183,174.022L645.849,139.842" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-sports)" stroke-width="2" fill="none" id="recharts-line-_r_3_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="641.9664306640625px 641.9664306640625px" d="M37,161L132.516,176.63L235.183,139.842L337.849,99.042L440.516,125.227L543.183,151.961L645.849,167.197" />
                                    </g>
                                  </g>
                                </g>
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
                                      <text height="30" width="616" stroke="none" x="37" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="37">Mon</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="139.66666666666669" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="139.66666666666669">Tue</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="242.33333333333334" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="242.33333333333334">Wed</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="345" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="345">Thu</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="447.6666666666667" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="447.6666666666667">Fri</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="550.3333333333334" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="550.3333333333334">Sat</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="616" stroke="none" x="648.875" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="648.875">Sun</tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="32" height="240" stroke="none" x="24" y="245" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="24">0</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="32" height="240" stroke="none" x="24" y="185" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="24">250</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="32" height="240" stroke="none" x="24" y="125" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="24">500</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="32" height="240" stroke="none" x="24" y="65" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="24">750</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="32" height="240" stroke="none" x="24" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="24">1000</tspan>
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
                  <!-- Card 8: Order Fulfillment -->
                  <UCard class="flex flex-col gap-4 rounded-xl p-5 xl:w-[420px]" :ui="{ body: 'contents' }">
                    <div class="flex items-center justify-between gap-2">
                      <h2 class="text-sm font-medium text-pretty text-highlighted">Order Fulfillment</h2>
                      <div class="flex items-center gap-1">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                          <UIcon name="i-lucide-rotate-ccw" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7" aria-label="Options" type="button" @click="openAction(&quot;Options&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div>
                      <div class="text-muted flex items-center border-b pr-3 pb-2 text-[10px] border-default">
                        <span class="w-20 shrink-0">Order</span>
                        <span class="w-24 shrink-0">Shipped</span>
                        <span class="flex-1">Status</span>
                        <span class="w-8 shrink-0 text-right">Del[%]</span>
                      </div>
                      <div data-slot="scroll-area" class="relative overflow-hidden h-[280px]" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                        <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                          <div style="min-width:100%;display:table">
                            <div class="divide-y pr-3">
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4821</span>
                                <span class="text-muted w-24 shrink-0">Jan 27, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.5" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">92</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4819</span>
                                <span class="text-muted w-24 shrink-0">Jan 26, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.5" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">78</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4815</span>
                                <span class="text-muted w-24 shrink-0">Jan 25, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">100</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4812</span>
                                <span class="text-muted w-24 shrink-0">Jan 24, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.5" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">65</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4808</span>
                                <span class="text-muted w-24 shrink-0">Jan 23, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">43</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4805</span>
                                <span class="text-muted w-24 shrink-0">Jan 22, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">100</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4801</span>
                                <span class="text-muted w-24 shrink-0">Jan 21, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.5" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">88</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4798</span>
                                <span class="text-muted w-24 shrink-0">Jan 20, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">55</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4794</span>
                                <span class="text-muted w-24 shrink-0">Jan 19, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">100</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4790</span>
                                <span class="text-muted w-24 shrink-0">Jan 18, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.5" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">71</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4786</span>
                                <span class="text-muted w-24 shrink-0">Jan 17, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">35</span>
                              </div>
                              <div class="flex items-center gap-2 py-2.5 text-xs">
                                <span class="w-20 shrink-0 font-medium">ORD-4782</span>
                                <span class="text-muted w-24 shrink-0">Jan 16, 2025</span>
                                <div class="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.6" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:1" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.7" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.9" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-primary);opacity:0.8" />
                                  <div class="h-2 w-1.5 shrink-0 rounded-[1px]" style="background-color:var(--ui-bg-muted);opacity:0.2" />
                                </div>
                                <span class="w-8 shrink-0 text-right font-medium">96</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UCard>
                </div>
                <!-- Card 9: Recent Orders -->
                <UCard class="rounded-xl" :ui="{ body: 'contents' }">
                  <div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-3.5">
                    <div class="flex flex-1 items-center gap-2 sm:gap-2.5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 shrink-0 sm:size-8" aria-label="Recent orders" type="button" @click="openAction(&quot;Recent orders&quot;)">
                        <UIcon name="i-lucide-clipboard-list" class="text-muted size-4 sm:size-[18px]" />
                      </UButton>
                      <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Recent Orders</h2>
                      <UBadge color="neutral" variant="subtle" class="ml-1 inline-flex items-center rounded-md bg-default px-2 py-1 text-[10px] font-medium text-toned ring-1 ring-(--ui-border-accented)/10 ring-inset sm:text-xs dark:bg-(--ui-bg-elevated)/50 dark:text-muted dark:ring-(--ui-border-accented)/20">
                        20
                      </UBadge>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="relative flex-1 sm:flex-none">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2 sm:size-5" />
                        <UInput v-model="form.ordersSearch" type="text" placeholder="Search orders… (e.g., ORD-2024-002)" aria-label="Search orders" name="ordersSearch" class="flex rounded-md md:text-sm h-8 w-full pl-9 text-sm sm:h-9 sm:w-[160px] sm:pl-10 lg:w-[200px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1.5 sm:h-9 sm:gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                        <UIcon name="i-lucide-funnel" class="size-3.5 sm:size-4" />
                        <span class="hidden sm:inline">Filter</span>
                      </UButton>
                    </div>
                  </div>
                  <div class="overflow-x-auto px-3 pb-3 sm:px-6 sm:pb-4">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: # / Order / Customer / Status / Total / Date -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #field-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="#" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #field-cell="{ row }">
                          {{ row.original.field }}
                        </template>
                        <template #order-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Order" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #order-cell="{ row }">
                          <div class="min-w-0">
                            <span class="block truncate text-xs font-medium sm:text-sm">{{ row.original.orderText4 }}</span>
                            <span class="text-muted text-[10px] sm:text-xs">{{ row.original.orderText6 }}{{ row.original.orderText7 }}</span>
                          </div>
                        </template>
                        <template #customer-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #customer-cell="{ row }">
                          <div class="flex items-center gap-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full bg-muted size-6">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-muted text-[8px] font-semibold uppercase">{{ row.original.customerText5 }}</span>
                            </span>
                            <span class="text-muted text-xs sm:text-sm">{{ row.original.customerText7 }}</span>
                          </div>
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                            {{ row.original.status }}
                          </UBadge>
                        </template>
                        <template #total-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #total-cell="{ row }">
                          {{ row.original.total }}
                        </template>
                        <template #date-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #date-cell="{ row }">
                          {{ row.original.date }}
                        </template>
                        <template #actions-cell="{ row }">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 sm:size-8" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for ORD-2024-001&quot;, row.original._id, 1)">
                            <UIcon name="i-lucide-ellipsis" class="size-3.5 sm:size-4" />
                          </UButton>
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-between gap-3 border-t px-3 py-3 sm:flex-row sm:px-6 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs sm:text-sm">
                      <span class="hidden sm:inline">Rows per page:</span>
                      <USelect v-model="form.field10" :items="field10Options" aria-label="Rows per page" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[70px]" />
                      <span class="text-muted">1-10 of20</span>
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
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to next page" type="button" @click="openAction(&quot;Go to next page&quot;)">
                        <UIcon name="i-lucide-chevron-right" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Go to last page" type="button" @click="openAction(&quot;Go to last page&quot;)">
                        <UIcon name="i-lucide-chevrons-right" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </UCard>
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
