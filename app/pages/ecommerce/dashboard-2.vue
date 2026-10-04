<!-- Page: /ecommerce/dashboard-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "ordersSearch": "",
  "field10": "10"
})

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
    "actionsId5": "radix-_R_scsinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_sksinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_sssinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_t4sinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_tcsinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_tksinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_tssinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_u4sinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_ucsinpfiv5uknmlb_"
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
    "actionsId5": "radix-_R_uksinpfiv5uknmlb_"
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["field","order","customer","status","total","date","actions"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ecommerce-dashboard-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:space-y-6 sm:p-4 md:p-6">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div class="space-y-2 sm:space-y-5">
                    <h2 class="text-lg leading-relaxed font-semibold sm:text-[22px] text-highlighted">Welcome Back, John!</h2>
                    <p class="text-muted text-sm sm:text-base">
                      Today you have
                      <span class="text-highlighted font-medium">12 orders</span>
                       to fulfill,
                      <span class="text-highlighted font-medium">3 returns</span>
                       pending
                    </p>
                  </div>
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-2 sm:h-9" aria-label="Export" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      <span class="hidden sm:inline">Export</span>
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-8 gap-2 sm:h-9" aria-label="Add Product" type="button" @click="navigateTo(&quot;/ecommerce/add-product&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      <span class="hidden sm:inline">Add Product</span>
                    </UButton>
                  </div>
                </div>
                <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                  <!-- Card 1: $189,540.75 -->
                  <UCard class="flex flex-col gap-3 rounded-xl p-4 sm:p-5 lg:p-6" :ui="{ body: 'contents' }">
                    <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                      <UIcon name="i-lucide-circle-dollar-sign" class="size-3.5 sm:size-4" />
                      <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Monthly revenue</span>
                    </div>
                    <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">$148,230.00 previous month</p>
                    <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">$189,540.75</p>
                    <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                      <span class="whitespace-nowrap text-success">+27.9%</span>
                      <span class="text-muted whitespace-nowrap">vs last month</span>
                    </div>
                  </UCard>
                  <!-- Card 2: 21,847 -->
                  <UCard class="flex flex-col gap-3 rounded-xl p-4 sm:p-5 lg:p-6" :ui="{ body: 'contents' }">
                    <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                      <UIcon name="i-lucide-clipboard-list" class="size-3.5 sm:size-4" />
                      <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Orders fulfilled</span>
                    </div>
                    <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">18,452 previous month</p>
                    <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">21,847</p>
                    <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                      <span class="whitespace-nowrap text-success">+18.4%</span>
                      <span class="text-muted whitespace-nowrap">vs last month</span>
                    </div>
                  </UCard>
                  <!-- Card 3: 4,975 -->
                  <UCard class="flex flex-col gap-3 rounded-xl p-4 sm:p-5 lg:p-6" :ui="{ body: 'contents' }">
                    <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                      <UIcon name="i-lucide-users" class="size-3.5 sm:size-4" />
                      <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">New customers</span>
                    </div>
                    <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">4,120 previous month</p>
                    <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">4,975</p>
                    <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                      <span class="whitespace-nowrap text-success">+20.8%</span>
                      <span class="text-muted whitespace-nowrap">vs last month</span>
                    </div>
                  </UCard>
                  <!-- Card 4: $8,473.00 -->
                  <UCard class="flex flex-col gap-3 rounded-xl p-4 sm:p-5 lg:p-6" :ui="{ body: 'contents' }">
                    <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                      <UIcon name="i-lucide-credit-card" class="size-3.5 sm:size-4" />
                      <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Refunds issued</span>
                    </div>
                    <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">$9,821.00 previous month</p>
                    <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">$8,473.00</p>
                    <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3 shrink-0 text-error sm:size-3.5" />
                      <span class="whitespace-nowrap text-error">-13.7%</span>
                      <span class="text-muted whitespace-nowrap">vs last month</span>
                    </div>
                  </UCard>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 xl:flex-row">
                  <!-- Card 5: $276,000.00 -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-4 sm:gap-6 sm:p-6" :ui="{ body: 'contents' }">
                    <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div class="flex flex-1 flex-col gap-1">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$276,000.00</p>
                        <p class="text-muted text-xs">Total Revenue (Last 6 Months)</p>
                      </div>
                      <div class="hidden items-center gap-3 sm:flex sm:gap-5">
                        <div class="flex items-center gap-1.5">
                          <div class="size-2.5 rounded-full sm:size-3" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-[10px] sm:text-xs">This Year</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2.5 rounded-full sm:size-3" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">Prev Year</span>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Select time period" type="button" @click="openAction(&quot;Select time period&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="h-[200px] w-full min-w-0 sm:h-[240px] lg:h-[280px]">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-thisYear:var(--ui-primary);--color-prevYear:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-thisYear:var(--ui-primary);--color-prevYear:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:280px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="652" height="280" class="chart-wrapper" style="position: relative; cursor: default; width: 652px; height: 280px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 652 280" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="602" height="240" x1="45" y1="245" x2="647" y2="245" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="602" height="240" x1="45" y1="185" x2="647" y2="185" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="602" height="240" x1="45" y1="125" x2="647" y2="125" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="602" height="240" x1="45" y1="65" x2="647" y2="65" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="602" height="240" x1="45" y1="5" x2="647" y2="5" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="45" y="5" height="240" width="602" />
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
                                            <path fill="var(--color-thisYear)" name="undefined" x="62.5333" y="77" width="24" height="168" class="chart-rectangle" d="M62.5333,81A 4,4,0,0,1,66.5333,77L 82.5333,77A 4,4,0,0,1,
        86.5333,81L 86.5333,245L 62.5333,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="162.8667" y="93" width="24" height="152" class="chart-rectangle" d="M162.8667,97A 4,4,0,0,1,166.8667,93L 182.8667,93A 4,4,0,0,1,
        186.8667,97L 186.8667,245L 162.8667,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="263.2" y="37" width="24" height="208" class="chart-rectangle" d="M263.2,41A 4,4,0,0,1,267.2,37L 283.2,37A 4,4,0,0,1,
        287.2,41L 287.2,245L 263.2,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="363.5333" y="65" width="24" height="180" class="chart-rectangle" d="M363.5333,69A 4,4,0,0,1,367.5333,65L 383.5333,65A 4,4,0,0,1,
        387.5333,69L 387.5333,245L 363.5333,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="463.8667" y="13" width="24" height="232" class="chart-rectangle" d="M463.8667,17A 4,4,0,0,1,467.8667,13L 483.8667,13A 4,4,0,0,1,
        487.8667,17L 487.8667,245L 463.8667,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="564.2" y="81" width="24" height="164" class="chart-rectangle" d="M564.2,85A 4,4,0,0,1,568.2,81L 584.2,81A 4,4,0,0,1,
        588.2,85L 588.2,245L 564.2,245Z" />
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
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="103.5333" y="93" width="24" height="152" class="chart-rectangle" d="M103.5333,97A 4,4,0,0,1,107.5333,93L 123.5333,93A 4,4,0,0,1,
        127.5333,97L 127.5333,245L 103.5333,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="203.8667" y="65" width="24" height="180" class="chart-rectangle" d="M203.8667,69A 4,4,0,0,1,207.8667,65L 223.8667,65A 4,4,0,0,1,
        227.8667,69L 227.8667,245L 203.8667,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="304.2" y="81" width="24" height="164" class="chart-rectangle" d="M304.2,85A 4,4,0,0,1,308.2,81L 324.2,81A 4,4,0,0,1,
        328.2,85L 328.2,245L 304.2,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="404.5333" y="53" width="24" height="192" class="chart-rectangle" d="M404.5333,57A 4,4,0,0,1,408.5333,53L 424.5333,53A 4,4,0,0,1,
        428.5333,57L 428.5333,245L 404.5333,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="504.8667" y="69" width="24" height="176" class="chart-rectangle" d="M504.8667,73A 4,4,0,0,1,508.8667,69L 524.8667,69A 4,4,0,0,1,
        528.8667,73L 528.8667,245L 504.8667,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="605.2" y="37" width="24" height="208" class="chart-rectangle" d="M605.2,41A 4,4,0,0,1,609.2,37L 625.2,37A 4,4,0,0,1,
        629.2,41L 629.2,245L 605.2,245Z" />
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
                                      <text height="30" width="602" stroke="none" x="95.16666666666666" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="95.16666666666666">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="195.49999999999997" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="195.49999999999997">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="295.8333333333333" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="295.8333333333333">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="396.1666666666667" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="396.1666666666667">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="496.5" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="496.5">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="596.8333333333333" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="596.8333333333333">Jun</tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="240" stroke="none" x="32" y="245" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$0</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="240" stroke="none" x="32" y="185" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$15K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="240" stroke="none" x="32" y="125" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$30K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="240" stroke="none" x="32" y="65" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$45K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="240" stroke="none" x="32" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$60K</tspan>
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
                  <!-- Card 6: Revenue Channels -->
                  <UCard class="flex min-w-0 flex-col rounded-xl xl:w-[410px]" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center px-4 sm:px-5">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Revenue Channels" type="button" @click="openAction(&quot;Revenue Channels&quot;)">
                          <UIcon name="i-lucide-users" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Revenue Channels</h2>
                      </div>
                    </div>
                    <div class="flex flex-col gap-4 p-4 sm:p-5">
                      <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-semibold sm:text-3xl">$98K</span>
                        <span class="text-muted text-sm">total revenue</span>
                      </div>
                      <div class="flex h-2.5 gap-1 sm:h-3">
                        <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none rounded-l-full" style="flex:62000;background-color:var(--ui-primary)" data-slot="block-tooltip-trigger" aria-label="Online: $62,000.00 (63%)" type="button" @click="openAction(&quot;Online: $62,000.00 (63%)&quot;)" />
                        <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none" style="flex:24000;background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="In-Store: $24,000.00 (24%)" type="button" @click="openAction(&quot;In-Store: $24,000.00 (24%)&quot;)" />
                        <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none rounded-r-full" style="flex:12300;background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Marketplace: $12,300.00 (13%)" type="button" @click="openAction(&quot;Marketplace: $12,300.00 (13%)&quot;)" />
                      </div>
                      <div class="flex flex-wrap gap-3 sm:gap-5">
                        <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="Online" type="button" @click="openAction(&quot;Online&quot;)">
                          <span class="size-2 rounded-full sm:size-2.5" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-xs">Online</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="In-Store" type="button" @click="openAction(&quot;In-Store&quot;)">
                          <span class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                          <span class="text-muted text-xs">In-Store</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="Marketplace" type="button" @click="openAction(&quot;Marketplace&quot;)">
                          <span class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                          <span class="text-muted text-xs">Marketplace</span>
                        </UButton>
                      </div>
                      <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                        <span class="text-muted text-xs">Channels</span>
                        <span class="text-muted text-xs">Number</span>
                        <span class="text-muted text-xs">Total</span>
                      </div>
                      <div class="flex flex-col gap-3">
                        <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                          <div class="flex items-center gap-2.5">
                            <div class="bg-muted flex size-7 items-center justify-center rounded-full">
                              <span class="text-muted text-xs font-medium">W</span>
                            </div>
                            <span class="text-sm font-medium">Website</span>
                          </div>
                          <span class="text-sm tabular-nums">4,821</span>
                          <div class="flex items-center gap-0.5 text-xs text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                            18.3%
                          </div>
                        </div>
                        <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                          <div class="flex items-center gap-2.5">
                            <div class="bg-muted flex size-7 items-center justify-center rounded-full">
                              <span class="text-muted text-xs font-medium">M</span>
                            </div>
                            <span class="text-sm font-medium">Mobile App</span>
                          </div>
                          <span class="text-sm tabular-nums">3,147</span>
                          <div class="flex items-center gap-0.5 text-xs text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                            12.7%
                          </div>
                        </div>
                        <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                          <div class="flex items-center gap-2.5">
                            <div class="bg-muted flex size-7 items-center justify-center rounded-full">
                              <span class="text-muted text-xs font-medium">E</span>
                            </div>
                            <span class="text-sm font-medium">Email</span>
                          </div>
                          <span class="text-sm tabular-nums">1,893</span>
                          <div class="flex items-center gap-0.5 text-xs text-error">
                            <UIcon name="i-lucide-arrow-down-right" class="size-3.5" />
                            8.4%
                          </div>
                        </div>
                        <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                          <div class="flex items-center gap-2.5">
                            <div class="bg-muted flex size-7 items-center justify-center rounded-full">
                              <span class="text-muted text-xs font-medium">S</span>
                            </div>
                            <span class="text-sm font-medium">Social</span>
                          </div>
                          <span class="text-sm tabular-nums">762</span>
                          <div class="flex items-center gap-0.5 text-xs text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                            31.2%
                          </div>
                        </div>
                      </div>
                    </div>
                  </UCard>
                </div>
                <!-- Card 7: SJ -->
                <UCard class="rounded-xl" :ui="{ body: 'contents' }">
                  <div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-3.5">
                    <div class="flex flex-1 items-center gap-2 sm:gap-2.5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 shrink-0 sm:size-8" aria-label="Recent orders" type="button" @click="openAction(&quot;Recent orders&quot;)">
                        <UIcon name="i-lucide-clipboard-list" class="text-muted size-4 sm:size-[18px]" />
                      </UButton>
                      <span class="text-sm font-medium sm:text-base">Recent Orders</span>
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
