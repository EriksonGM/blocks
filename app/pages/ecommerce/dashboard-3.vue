<!-- Page: /ecommerce/dashboard-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 3 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "orderRef": "ORD-2024-001",
    "buyer": "Sarah Johnson",
    "total": "$2,499.00",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20"
  },
  {
    "_id": "2",
    "orderRef": "ORD-2024-002",
    "buyer": "Michael Chen",
    "total": "$1,348.00",
    "status": "Shipped",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20"
  },
  {
    "_id": "3",
    "orderRef": "ORD-2024-003",
    "buyer": "Emma Wilson",
    "total": "$1,198.00",
    "status": "Processing",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-warning/10 text-warning ring-1 ring-inset ring-warning/20 dark:bg-warning/30 dark:text-warning dark:ring-warning/20"
  },
  {
    "_id": "4",
    "orderRef": "ORD-2024-004",
    "buyer": "James Rodriguez",
    "total": "$799.00",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20"
  },
  {
    "_id": "5",
    "orderRef": "ORD-2024-005",
    "buyer": "Lisa Park",
    "total": "$599.00",
    "status": "Cancelled",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-error/10 text-error ring-1 ring-inset ring-error/10 dark:bg-error/30 dark:text-error dark:ring-error/20"
  },
  {
    "_id": "6",
    "orderRef": "ORD-2024-006",
    "buyer": "David Kim",
    "total": "$5,498.00",
    "status": "Shipped",
    "statusClass2": "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "orderRef",
    "header": "Order Ref"
  },
  {
    "accessorKey": "buyer",
    "header": "Buyer"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["orderRef","buyer","total","status"] as const
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["orderRef","buyer","total","status"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ecommerce-dashboard-3.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-3">
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
                <!-- Card 1: $189,540.75 -->
                <UCard class="rounded-xl" :ui="{ body: 'contents' }">
                  <div class="divide-default grid grid-cols-1 divide-x-0 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                    <div class="space-y-4 p-4 sm:p-6">
                      <div class="text-muted flex items-center gap-1.5">
                        <UIcon name="i-lucide-circle-dollar-sign" class="size-4 sm:size-[18px]" />
                        <span class="text-xs font-medium sm:text-sm">Monthly revenue</span>
                      </div>
                      <p class="text-2xl font-semibold tracking-tight sm:text-[28px] text-highlighted">$189,540.75</p>
                      <div class="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs xl:flex-nowrap">
                        <span class="font-medium text-success dark:text-success">
                          +27.9%
                          <span class="hidden sm:inline">($41,310.75)</span>
                        </span>
                        <span class="text-muted hidden items-center gap-2 sm:inline-flex">
                          <span class="bg-(--ui-text-muted) size-1 rounded-full" />
                          <span class="xl:whitespace-nowrap">vs Last Month</span>
                        </span>
                      </div>
                    </div>
                    <div class="space-y-4 p-4 sm:p-6">
                      <div class="text-muted flex items-center gap-1.5">
                        <UIcon name="i-lucide-clipboard-list" class="size-4 sm:size-[18px]" />
                        <span class="text-xs font-medium sm:text-sm">Orders fulfilled</span>
                      </div>
                      <p class="text-2xl font-semibold tracking-tight sm:text-[28px] text-highlighted">21,847</p>
                      <div class="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs xl:flex-nowrap">
                        <span class="font-medium text-success dark:text-success">
                          +18.4%
                          <span class="hidden sm:inline">(3,395)</span>
                        </span>
                        <span class="text-muted hidden items-center gap-2 sm:inline-flex">
                          <span class="bg-(--ui-text-muted) size-1 rounded-full" />
                          <span class="xl:whitespace-nowrap">vs Last Month</span>
                        </span>
                      </div>
                    </div>
                    <div class="space-y-4 p-4 sm:p-6">
                      <div class="text-muted flex items-center gap-1.5">
                        <UIcon name="i-lucide-users" class="size-4 sm:size-[18px]" />
                        <span class="text-xs font-medium sm:text-sm">New customers</span>
                      </div>
                      <p class="text-2xl font-semibold tracking-tight sm:text-[28px] text-highlighted">4,975</p>
                      <div class="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs xl:flex-nowrap">
                        <span class="font-medium text-success dark:text-success">
                          +20.8%
                          <span class="hidden sm:inline">(855)</span>
                        </span>
                        <span class="text-muted hidden items-center gap-2 sm:inline-flex">
                          <span class="bg-(--ui-text-muted) size-1 rounded-full" />
                          <span class="xl:whitespace-nowrap">vs Last Month</span>
                        </span>
                      </div>
                    </div>
                    <div class="space-y-4 p-4 sm:p-6">
                      <div class="text-muted flex items-center gap-1.5">
                        <UIcon name="i-lucide-credit-card" class="size-4 sm:size-[18px]" />
                        <span class="text-xs font-medium sm:text-sm">Refunds issued</span>
                      </div>
                      <p class="text-2xl font-semibold tracking-tight sm:text-[28px] text-highlighted">$8,473.00</p>
                      <div class="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs xl:flex-nowrap">
                        <span class="font-medium text-error dark:text-error">
                          -13.7%
                          <span class="hidden sm:inline">($1,348.00)</span>
                        </span>
                        <span class="text-muted hidden items-center gap-2 sm:inline-flex">
                          <span class="bg-(--ui-text-muted) size-1 rounded-full" />
                          <span class="xl:whitespace-nowrap">vs Last Month</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </UCard>
                <div class="flex flex-col gap-4 sm:gap-6 xl:flex-row">
                  <!-- Card 2: $276,000.00 -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-4 sm:gap-6 sm:p-6" :ui="{ body: 'contents' }">
                    <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div class="flex flex-1 flex-col gap-1">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$276,000.00</p>
                        <p class="text-muted text-xs">Total Revenue (Last 6 Months)</p>
                      </div>
                      <div class="hidden items-center gap-3 sm:flex sm:gap-5">
                        <div class="flex items-center gap-1.5 transition-opacity duration-200 motion-reduce:transition-none">
                          <div class="size-2.5 rounded-full sm:size-3" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-[10px] sm:text-xs">This Year</span>
                        </div>
                        <div class="flex items-center gap-1.5 transition-opacity duration-200 motion-reduce:transition-none">
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
                                <defs>
                                  <linearGradient id="thisYearGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-thisYear)" stop-opacity="0.3" />
                                    <stop offset="100%" stop-color="var(--color-thisYear)" stop-opacity="0.05" />
                                  </linearGradient>
                                  <linearGradient id="prevYearGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-prevYear)" stop-opacity="0.2" />
                                    <stop offset="100%" stop-color="var(--color-prevYear)" stop-opacity="0.02" />
                                  </linearGradient>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-area">
                                    <g class="chart-layer">
                                      <path stroke-width="2" fill="url(#thisYearGradient)" fill-opacity="1" height="240" stroke="none" width="602" id="recharts-area-_r_0_" class="chart-curve chart-area-area" d="M45,77C85.133,85,125.267,93,165.4,93C205.533,93,245.667,37,285.8,37C325.933,37,366.067,65,406.2,65C446.333,65,486.467,13,526.6,13C566.733,13,606.867,47,647,81L647,245C606.867,245,566.733,245,526.6,245C486.467,245,446.333,245,406.2,245C366.067,245,325.933,245,285.8,245C245.667,245,205.533,245,165.4,245C125.267,245,85.133,245,45,245Z" />
                                      <path stroke-width="2" fill="none" fill-opacity="1" height="240" stroke="var(--color-thisYear)" width="602" class="chart-curve chart-area-curve" d="M45,77C85.133,85,125.267,93,165.4,93C205.533,93,245.667,37,285.8,37C325.933,37,366.067,65,406.2,65C446.333,65,486.467,13,526.6,13C566.733,13,606.867,47,647,81" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-area">
                                    <g class="chart-layer">
                                      <path stroke-width="2" fill="url(#prevYearGradient)" fill-opacity="1" height="240" stroke="none" width="602" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M45,93C85.133,79,125.267,65,165.4,65C205.533,65,245.667,81,285.8,81C325.933,81,366.067,53,406.2,53C446.333,53,486.467,69,526.6,69C566.733,69,606.867,53,647,37L647,245C606.867,245,566.733,245,526.6,245C486.467,245,446.333,245,406.2,245C366.067,245,325.933,245,285.8,245C245.667,245,205.533,245,165.4,245C125.267,245,85.133,245,45,245Z" />
                                      <path stroke-width="2" fill="none" fill-opacity="1" height="240" stroke="var(--color-prevYear)" width="602" class="chart-curve chart-area-curve" d="M45,93C85.133,79,125.267,65,165.4,65C205.533,65,245.667,81,285.8,81C325.933,81,366.067,53,406.2,53C446.333,53,486.467,69,526.6,69C566.733,69,606.867,53,647,37" />
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
                                      <text height="30" width="602" stroke="none" x="45" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="45">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="165.4" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="165.4">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="285.8" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="285.8">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="406.20000000000005" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="406.20000000000005">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="526.6" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="526.6">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="602" stroke="none" x="643.234375" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="643.234375">Jun</tspan>
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
                  <div class="flex w-full flex-col gap-4 xl:w-[410px]">
                    <!-- Card 3: Order Status1,247 Orders This Month12.5%33.9%53.6%ProcessingShippedDelivered -->
                    <UCard class="flex flex-col gap-4 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 sm:gap-2.5">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Order status" type="button" @click="openAction(&quot;Order status&quot;)">
                            <UIcon name="i-lucide-shopping-cart" class="text-muted size-4 sm:size-[18px]" />
                          </UButton>
                          <div>
                            <span class="text-sm font-medium sm:text-base">Order Status</span>
                            <p class="text-muted text-[10px] sm:text-xs">1,247 Orders This Month</p>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="More options" type="button" @click="openAction(&quot;More options&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4" />
                        </UButton>
                      </div>
                      <div class="space-y-3">
                        <div class="flex h-3 w-full overflow-hidden rounded-full sm:h-4">
                          <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none" style="width:12.5%;background-color:var(--ui-primary)" data-slot="block-tooltip-trigger" aria-label="Processing: 156 orders (12.5%)" type="button" @click="openAction(&quot;Processing: 156 orders (12.5%)&quot;)" />
                          <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none" style="width:33.9%;background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Shipped: 423 orders (33.9%)" type="button" @click="openAction(&quot;Shipped: 423 orders (33.9%)&quot;)" />
                          <UButton color="neutral" variant="outline" class="h-full border-0 p-0 transition-opacity duration-200 motion-reduce:transition-none" style="width:53.6%;background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" data-slot="block-tooltip-trigger" aria-label="Delivered: 668 orders (53.6%)" type="button" @click="openAction(&quot;Delivered: 668 orders (53.6%)&quot;)" />
                        </div>
                        <div class="flex items-center justify-between text-[10px] sm:text-xs">
                          <span class="text-muted tabular-nums transition-opacity duration-200 motion-reduce:transition-none">12.5%</span>
                          <span class="text-muted tabular-nums transition-opacity duration-200 motion-reduce:transition-none">33.9%</span>
                          <span class="text-muted tabular-nums transition-opacity duration-200 motion-reduce:transition-none">53.6%</span>
                        </div>
                        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                          <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="Processing" type="button" @click="openAction(&quot;Processing&quot;)">
                            <span class="size-2.5 rounded-full sm:size-3" style="background-color:var(--ui-primary)" />
                            <span class="text-muted text-[10px] sm:text-xs">Processing</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="Shipped" type="button" @click="openAction(&quot;Shipped&quot;)">
                            <span class="size-2.5 rounded-full sm:size-3" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                            <span class="text-muted text-[10px] sm:text-xs">Shipped</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="flex items-center gap-1.5 border-0 bg-transparent p-0 transition-opacity duration-200 motion-reduce:transition-none" data-slot="block-tooltip-trigger" aria-label="Delivered" type="button" @click="openAction(&quot;Delivered&quot;)">
                            <span class="size-2.5 rounded-full sm:size-3" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                            <span class="text-muted text-[10px] sm:text-xs">Delivered</span>
                          </UButton>
                        </div>
                      </div>
                    </UCard>
                    <!-- Card 4: $250K -->
                    <UCard class="flex flex-1 flex-col gap-4 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 sm:gap-2.5">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Sales by category" type="button" @click="openAction(&quot;Sales by category&quot;)">
                            <UIcon name="i-lucide-chart-pie" class="text-muted size-4 sm:size-[18px]" />
                          </UButton>
                          <div>
                            <span class="text-sm font-medium sm:text-base">Sales by Category</span>
                            <p class="text-muted flex items-center gap-1 text-[10px] sm:text-xs">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3 text-success" />
                              <span class="text-success">+8.4%</span>
                              <span>vs last month</span>
                            </p>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="More options" type="button" @click="openAction(&quot;More options&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4" />
                        </UButton>
                      </div>
                      <div class="flex flex-1 items-center gap-4 sm:gap-6">
                        <div class="relative size-[100px] shrink-0 sm:size-[120px]">
                          <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                          <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style="" role="img" aria-label="Analytics chart">
                            <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                            <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                              <div style="width:0;height:0;overflow:visible">
                                <div width="120" height="120" class="chart-wrapper" style="position: relative; cursor: default; width: 120px; height: 120px;">
                                  <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 120 120" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                    <title />
                                    <desc />
                                    <g class="chart-zIndex-layer_-100" />
                                    <g class="chart-zIndex-layer_-50" />
                                    <defs>
                                      <clipPath id="recharts2-clip">
                                        <rect x="5" y="5" height="110" width="110" />
                                      </clipPath>
                                    </defs>
                                    <g class="chart-zIndex-layer_100">
                                      <g class="chart-layer chart-pie">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-pie-sector">
                                            <g class="chart-layer chart-shape">
                                              <path cx="60" cy="60" fill="var(--ui-primary)" class="chart-sector" d="M 109.5,60
    A 49.5,49.5,0,
    1,0,
    14.9069,80.4171
  L 32.4431,72.4771
            A 30.25,30.25,0,
            1,1,
            90.25,60 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-pie-sector">
                                            <g class="chart-layer chart-shape">
                                              <path cx="60" cy="60" fill="color-mix(in oklch, var(--ui-primary) 80%, var(--ui-bg))" class="chart-sector" d="M 15.6469,81.9784
    A 49.5,49.5,0,
    0,0,
    80.2786,105.1556
  L 72.3925,87.5951
            A 30.25,30.25,0,
            0,1,
            32.8953,73.4312 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-pie-sector">
                                            <g class="chart-layer chart-shape">
                                              <path cx="60" cy="60" fill="color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))" class="chart-sector" d="M 81.8421,104.4204
    A 49.5,49.5,0,
    0,0,
    107.0574,75.3574
  L 88.7573,69.3851
            A 30.25,30.25,0,
            0,1,
            73.348,87.1458 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-pie-sector">
                                            <g class="chart-layer chart-shape">
                                              <path cx="60" cy="60" fill="color-mix(in oklch, var(--ui-primary) 42%, var(--ui-bg))" class="chart-sector" d="M 107.5647,73.7057
    A 49.5,49.5,0,
    0,0,
    109.4698,61.7274
  L 90.2316,61.0557
            A 30.25,30.25,0,
            0,1,
            89.0673,68.3757 Z" />
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
                            <span class="text-sm font-semibold sm:text-base">$250K</span>
                            <span class="text-muted text-[8px] sm:text-[10px]">Total</span>
                          </div>
                        </div>
                        <div class="flex flex-1 flex-col gap-2 sm:gap-3">
                          <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex items-center justify-between gap-2 rounded-md border-0 bg-transparent p-0 text-left transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Electronics$145K58%" type="button" @click="openAction(&quot;Electronics$145K58%&quot;)">
                            <div class="flex items-center gap-2">
                              <div class="size-2 rounded-full sm:size-2.5" style="background-color:var(--ui-primary)" />
                              <span class="text-muted text-[10px] sm:text-xs">Electronics</span>
                            </div>
                            <div class="flex items-center gap-2 text-[10px] sm:text-xs">
                              <span class="font-medium tabular-nums">$145K</span>
                              <span class="text-muted tabular-nums">58%</span>
                            </div>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex items-center justify-between gap-2 rounded-md border-0 bg-transparent p-0 text-left transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Accessories$62K25%" type="button" @click="openAction(&quot;Accessories$62K25%&quot;)">
                            <div class="flex items-center gap-2">
                              <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 80%, var(--ui-bg))" />
                              <span class="text-muted text-[10px] sm:text-xs">Accessories</span>
                            </div>
                            <div class="flex items-center gap-2 text-[10px] sm:text-xs">
                              <span class="font-medium tabular-nums">$62K</span>
                              <span class="text-muted tabular-nums">25%</span>
                            </div>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex items-center justify-between gap-2 rounded-md border-0 bg-transparent p-0 text-left transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Software$33K13%" type="button" @click="openAction(&quot;Software$33K13%&quot;)">
                            <div class="flex items-center gap-2">
                              <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))" />
                              <span class="text-muted text-[10px] sm:text-xs">Software</span>
                            </div>
                            <div class="flex items-center gap-2 text-[10px] sm:text-xs">
                              <span class="font-medium tabular-nums">$33K</span>
                              <span class="text-muted tabular-nums">13%</span>
                            </div>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex items-center justify-between gap-2 rounded-md border-0 bg-transparent p-0 text-left transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none" aria-label="Other$10K4%" type="button" @click="openAction(&quot;Other$10K4%&quot;)">
                            <div class="flex items-center gap-2">
                              <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 42%, var(--ui-bg))" />
                              <span class="text-muted text-[10px] sm:text-xs">Other</span>
                            </div>
                            <div class="flex items-center gap-2 text-[10px] sm:text-xs">
                              <span class="font-medium tabular-nums">$10K</span>
                              <span class="text-muted tabular-nums">4%</span>
                            </div>
                          </UButton>
                        </div>
                      </div>
                    </UCard>
                  </div>
                </div>
                <div class="flex flex-col gap-4 xl:flex-row">
                  <!-- Card 5: Recent Transactions20FilterOrder RefBuyerTotalStatusORD-2024-001Sarah Johnson$2,499.00Deli -->
                  <UCard class="rounded-xl flex-1" :ui="{ body: 'contents' }">
                    <div class="flex items-center justify-between gap-3 px-4 pt-4 sm:px-6">
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 shrink-0 sm:size-8" aria-label="Recent transactions" type="button" @click="openAction(&quot;Recent transactions&quot;)">
                          <UIcon name="i-lucide-clipboard-list" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <span class="text-sm font-medium sm:text-base">Recent Transactions</span>
                        <UBadge color="neutral" variant="subtle" class="ml-1 inline-flex items-center rounded-md bg-default px-2 py-1 text-[10px] font-medium text-toned ring-1 ring-(--ui-border-accented)/10 ring-inset sm:text-xs dark:bg-(--ui-bg-elevated)/50 dark:text-muted dark:ring-(--ui-border-accented)/20">
                          20
                        </UBadge>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1.5 sm:h-9 sm:gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                        <UIcon name="i-lucide-funnel" class="size-3.5 sm:size-4" />
                        <span class="hidden sm:inline">Filter</span>
                      </UButton>
                    </div>
                    <div class="px-4 pt-3 pb-4 sm:px-6">
                      <div class="relative w-full overflow-auto">
                        <!-- Table 1: Order Ref / Buyer / Total / Status -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #orderRef-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Order Ref" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #orderRef-cell="{ row }">
                            {{ row.original.orderRef }}
                          </template>
                          <template #buyer-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Buyer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #buyer-cell="{ row }">
                            {{ row.original.buyer }}
                          </template>
                          <template #total-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #total-cell="{ row }">
                            {{ row.original.total }}
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
                    <div class="text-muted flex items-center justify-between border-t px-4 py-3 text-[10px] sm:px-6 sm:text-xs border-default">
                      <span>1-6 of 20</span>
                      <div class="flex items-center gap-1">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Go to previous page" type="button" disabled @click="openAction(&quot;Go to previous page&quot;)">
                          <UIcon name="i-lucide-chevron-left" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Go to next page" type="button" @click="openAction(&quot;Go to next page&quot;)">
                          <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 6: Recent ActivityNew user registration2 minutes agoAlex MorganNew Order Placed2 minutes agoA -->
                  <UCard class="rounded-xl xl:w-[360px]" :ui="{ body: 'contents' }">
                    <div class="flex items-center justify-between gap-3 px-4 pt-4 sm:px-6">
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 shrink-0 sm:size-8" aria-label="Recent activity" type="button" @click="openAction(&quot;Recent activity&quot;)">
                          <UIcon name="i-lucide-bell" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <span class="text-sm font-medium sm:text-base">Recent Activity</span>
                      </div>
                    </div>
                    <div data-slot="scroll-area" class="relative overflow-hidden h-[360px] px-4 pt-2 pb-4 text-xs sm:px-6 sm:text-sm" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="divide-y">
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">New user registration</span>
                                <span class="text-muted text-[10px] sm:text-xs">2 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Alex Morgan</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">New Order Placed</span>
                                <span class="text-muted text-[10px] sm:text-xs">2 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Alex Morgan</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Payment Received</span>
                                <span class="text-muted text-[10px] sm:text-xs">2 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Alex Morgan</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Invoice Sent</span>
                                <span class="text-muted text-[10px] sm:text-xs">6 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Jamie Lee</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Subscription Upgraded</span>
                                <span class="text-muted text-[10px] sm:text-xs">12 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Noah Roberts</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Refund Issued</span>
                                <span class="text-muted text-[10px] sm:text-xs">18 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Olivia White</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Password Reset</span>
                                <span class="text-muted text-[10px] sm:text-xs">24 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Ethan Parker</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">New Comment</span>
                                <span class="text-muted text-[10px] sm:text-xs">32 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Sophia Davis</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Support Ticket Closed</span>
                                <span class="text-muted text-[10px] sm:text-xs">45 minutes ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Michael Chen</span>
                            </div>
                            <div class="py-3">
                              <div class="flex items-center justify-between gap-3">
                                <span class="text-highlighted font-medium">Payout Processed</span>
                                <span class="text-muted text-[10px] sm:text-xs">1 hour ago</span>
                              </div>
                              <span class="text-muted text-[10px] sm:text-xs">Emma Wilson</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UCard>
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
