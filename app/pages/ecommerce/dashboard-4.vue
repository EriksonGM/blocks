<!-- Page: /ecommerce/dashboard-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "transactionsSearch": "",
  "all": "All",
  "field10": "10"
})

const allOptions = [
  "All",
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days"
]

const field10Options = [
  "5",
  "10",
  "20"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "transactionID": "TXN-100201",
    "customer": "SJSarah Johnson",
    "customerText5": "SJ",
    "customerText7": "Sarah Johnson",
    "amount": "$129.99",
    "type": "Sale",
    "paymentMethod": "Credit Card",
    "date": "Today",
    "status": "Completed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "statusName3": "i-lucide-circle-check",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100201",
    "actionsId5": "radix-_R_10csinpfiv5uknmlb_"
  },
  {
    "_id": "2",
    "transactionID": "TXN-100202",
    "customer": "MCMichael Chen",
    "customerText5": "MC",
    "customerText7": "Michael Chen",
    "amount": "$84.50",
    "type": "Sale",
    "paymentMethod": "PayPal",
    "date": "Today",
    "status": "Completed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "statusName3": "i-lucide-circle-check",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100202",
    "actionsId5": "radix-_R_10ksinpfiv5uknmlb_"
  },
  {
    "_id": "3",
    "transactionID": "TXN-100203",
    "customer": "EWEmma Wilson",
    "customerText5": "EW",
    "customerText7": "Emma Wilson",
    "amount": "$249.00",
    "type": "Subscription",
    "paymentMethod": "Credit Card",
    "date": "Today",
    "status": "Pending",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-warning/10 text-warning ring-1 ring-inset ring-warning/20 dark:bg-warning/30 dark:text-warning dark:ring-warning/20",
    "statusName3": "i-lucide-clock",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100203",
    "actionsId5": "radix-_R_10ssinpfiv5uknmlb_"
  },
  {
    "_id": "4",
    "transactionID": "TXN-100204",
    "customer": "JRJames Rodriguez",
    "customerText5": "JR",
    "customerText7": "James Rodriguez",
    "amount": "$45.99",
    "type": "Refund",
    "paymentMethod": "Debit Card",
    "date": "Today",
    "status": "Refunded",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20",
    "statusName3": "i-lucide-rotate-ccw",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100204",
    "actionsId5": "radix-_R_114sinpfiv5uknmlb_"
  },
  {
    "_id": "5",
    "transactionID": "TXN-100205",
    "customer": "LPLisa Park",
    "customerText5": "LP",
    "customerText7": "Lisa Park",
    "amount": "$312.00",
    "type": "Sale",
    "paymentMethod": "Bank Transfer",
    "date": "Today",
    "status": "Failed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-error/10 text-error ring-1 ring-inset ring-error/20 dark:bg-error/30 dark:text-error dark:ring-error/20",
    "statusName3": "i-lucide-circle-x",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100205",
    "actionsId5": "radix-_R_11csinpfiv5uknmlb_"
  },
  {
    "_id": "6",
    "transactionID": "TXN-100206",
    "customer": "DKDavid Kim",
    "customerText5": "DK",
    "customerText7": "David Kim",
    "amount": "$67.25",
    "type": "Sale",
    "paymentMethod": "Credit Card",
    "date": "1 day ago",
    "status": "Completed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "statusName3": "i-lucide-circle-check",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100206",
    "actionsId5": "radix-_R_11ksinpfiv5uknmlb_"
  },
  {
    "_id": "7",
    "transactionID": "TXN-100207",
    "customer": "AMAnna Martinez",
    "customerText5": "AM",
    "customerText7": "Anna Martinez",
    "amount": "$189.99",
    "type": "Subscription",
    "paymentMethod": "PayPal",
    "date": "1 day ago",
    "status": "Completed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "statusName3": "i-lucide-circle-check",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100207",
    "actionsId5": "radix-_R_11ssinpfiv5uknmlb_"
  },
  {
    "_id": "8",
    "transactionID": "TXN-100208",
    "customer": "RTRobert Taylor",
    "customerText5": "RT",
    "customerText7": "Robert Taylor",
    "amount": "$95.00",
    "type": "Sale",
    "paymentMethod": "Debit Card",
    "date": "1 day ago",
    "status": "Pending",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-warning/10 text-warning ring-1 ring-inset ring-warning/20 dark:bg-warning/30 dark:text-warning dark:ring-warning/20",
    "statusName3": "i-lucide-clock",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100208",
    "actionsId5": "radix-_R_124sinpfiv5uknmlb_"
  },
  {
    "_id": "9",
    "transactionID": "TXN-100209",
    "customer": "JLJennifer Lee",
    "customerText5": "JL",
    "customerText7": "Jennifer Lee",
    "amount": "$156.50",
    "type": "Refund",
    "paymentMethod": "Credit Card",
    "date": "1 day ago",
    "status": "Refunded",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-info/10 text-info ring-1 ring-inset ring-info/10 dark:bg-info/30 dark:text-info dark:ring-info/20",
    "statusName3": "i-lucide-rotate-ccw",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100209",
    "actionsId5": "radix-_R_12csinpfiv5uknmlb_"
  },
  {
    "_id": "10",
    "transactionID": "TXN-100210",
    "customer": "WBWilliam Brown",
    "customerText5": "WB",
    "customerText7": "William Brown",
    "amount": "$78.99",
    "type": "Sale",
    "paymentMethod": "PayPal",
    "date": "2 days ago",
    "status": "Completed",
    "statusClass2": "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs bg-success/10 text-success ring-1 ring-inset ring-success/20 dark:bg-success/30 dark:text-success dark:ring-success/20",
    "statusName3": "i-lucide-circle-check",
    "actions": "",
    "actionsArialabel3": "Open actions for TXN-100210",
    "actionsId5": "radix-_R_12ksinpfiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "transactionID",
    "header": "Transaction ID"
  },
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "type",
    "header": "Type"
  },
  {
    "accessorKey": "paymentMethod",
    "header": "Payment Method"
  },
  {
    "accessorKey": "date",
    "header": "Date"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.transactionsSearch || '').toLowerCase()
  const keys = ["transactionID","customer","amount","type","paymentMethod","date","status","actions"] as const
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
  const rows = table1FilteredRows.value.map(row => ["transactionID","customer","amount","type","paymentMethod","date","status","actions"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ecommerce-dashboard-4.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-4">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:space-y-6 sm:p-4 md:p-6">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div class="bg-muted flex items-center gap-1 rounded-lg p-1">
                    <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs font-medium transition-all sm:text-sm bg-default text-highlighted shadow-sm" aria-label="1 Year" type="button" @click="openAction(&quot;1 Year&quot;)">
                      1 Year
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs font-medium transition-all sm:text-sm text-muted hover:text-highlighted" aria-label="3 Months" type="button" @click="openAction(&quot;3 Months&quot;)">
                      3 Months
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs font-medium transition-all sm:text-sm text-muted hover:text-highlighted" aria-label="30 Days" type="button" @click="openAction(&quot;30 Days&quot;)">
                      30 Days
                    </UButton>
                  </div>
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-2 sm:h-9" aria-label="Export" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      <span class="hidden sm:inline">Export</span>
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-8 gap-2 sm:h-9" aria-label="New Transaction" type="button" @click="openAction(&quot;New Transaction&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      <span class="hidden sm:inline">New Transaction</span>
                    </UButton>
                  </div>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 lg:flex-row">
                  <!-- Card 1: $4,702,000.00 -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-4 sm:gap-5 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex flex-col gap-1">
                      <p class="text-muted text-xs sm:text-sm">Revenue Overview</p>
                      <div class="flex items-center gap-2">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$4,702,000.00</p>
                        <div class="flex items-center gap-0.5">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                          <span class="text-xs font-medium text-success">+18.5%</span>
                        </div>
                      </div>
                    </div>
                    <div class="h-[180px] w-full min-w-0 sm:h-[220px]">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-revenue:var(--ui-primary)" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-revenue:var(--ui-primary);width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
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
                                <defs>
                                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-revenue)" stop-opacity="0.15" />
                                    <stop offset="100%" stop-color="var(--color-revenue)" stop-opacity="0.02" />
                                  </linearGradient>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-area">
                                    <g class="chart-layer">
                                      <path stroke-width="2" fill="url(#revenueGradient)" fill-opacity="0.6" height="180" stroke="none" width="464" id="recharts-area-_r_0_" class="chart-curve chart-area-area" d="M45,99.5C59.061,96.775,73.121,94.05,87.182,91.4C101.242,88.75,115.303,85.8,129.364,83.6C143.424,81.4,157.485,78.2,171.545,78.2C185.606,78.2,199.667,82.4,213.727,82.4C227.788,82.4,241.848,74.25,255.909,71.6C269.97,68.95,284.03,68.5,298.091,66.5C312.152,64.5,326.212,61.45,340.273,59.6C354.333,57.75,368.394,57.3,382.455,55.4C396.515,53.5,410.576,50.5,424.636,48.2C438.697,45.9,452.758,44.4,466.818,41.6C480.879,38.8,494.939,35.1,509,31.4L509,185C494.939,185,480.879,185,466.818,185C452.758,185,438.697,185,424.636,185C410.576,185,396.515,185,382.455,185C368.394,185,354.333,185,340.273,185C326.212,185,312.152,185,298.091,185C284.03,185,269.97,185,255.909,185C241.848,185,227.788,185,213.727,185C199.667,185,185.606,185,171.545,185C157.485,185,143.424,185,129.364,185C115.303,185,101.242,185,87.182,185C73.121,185,59.061,185,45,185Z" />
                                      <path stroke-width="2" fill="none" fill-opacity="0.6" height="180" stroke="var(--color-revenue)" width="464" class="chart-curve chart-area-curve" d="M45,99.5C59.061,96.775,73.121,94.05,87.182,91.4C101.242,88.75,115.303,85.8,129.364,83.6C143.424,81.4,157.485,78.2,171.545,78.2C185.606,78.2,199.667,82.4,213.727,82.4C227.788,82.4,241.848,74.25,255.909,71.6C269.97,68.95,284.03,68.5,298.091,66.5C312.152,64.5,326.212,61.45,340.273,59.6C354.333,57.75,368.394,57.3,382.455,55.4C396.515,53.5,410.576,50.5,424.636,48.2C438.697,45.9,452.758,44.4,466.818,41.6C480.879,38.8,494.939,35.1,509,31.4" />
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
                                      <text height="30" width="464" stroke="none" x="45" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="45">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="87.18181818181819" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="87.18181818181819">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="129.36363636363637" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="129.36363636363637">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="171.54545454545453" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="171.54545454545453">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="213.72727272727272" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="213.72727272727272">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="255.9090909090909" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="255.9090909090909">Jun</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="298.09090909090907" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="298.09090909090907">Jul</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="340.27272727272725" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="340.27272727272725">Aug</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="382.45454545454544" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="382.45454545454544">Sep</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="424.6363636363636" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="424.6363636363636">Oct</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="466.8181818181818" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="466.8181818181818">Nov</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="504.6171875" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="504.6171875">Dec</tspan>
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
                                        <tspan x="32">$150K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="95" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$300K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="50" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$450K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$600K</tspan>
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
                  <!-- Card 2: $2,705,800.00 -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-4 sm:gap-5 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex flex-col gap-1">
                      <div class="flex items-center justify-between">
                        <p class="text-muted text-xs sm:text-sm">Costs Breakdown</p>
                        <div class="flex items-center gap-3">
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:var(--color-cogs)" />
                            <span class="text-muted text-[10px] sm:text-xs">COGS</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:var(--color-operatingExpenses)" />
                            <span class="text-muted text-[10px] sm:text-xs">Operating Expenses</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$2,705,800.00</p>
                        <div class="flex items-center gap-0.5">
                          <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                          <span class="text-xs font-medium text-error">-12.1%</span>
                        </div>
                      </div>
                    </div>
                    <div class="h-[180px] w-full min-w-0 sm:h-[220px]">
                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-cogs:var(--ui-primary);--color-operatingExpenses:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-cogs:var(--ui-primary);--color-operatingExpenses:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
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
                                  <clipPath id="recharts2-clip">
                                    <rect x="45" y="5" height="180" width="464" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300">
                                  <g class="chart-layer chart-bar" id="recharts-bar-_r_1_">
                                    <g class="chart-layer chart-bar-rectangles">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="48.8667" y="123.44" width="30" height="61.56" class="chart-rectangle" d="M48.8667,123.44L 78.8667,123.44L 78.8667,185L 48.8667,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="87.5333" y="117.62" width="30" height="67.38" class="chart-rectangle" d="M87.5333,117.62L 117.5333,117.62L 117.5333,185L 87.5333,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="126.2" y="111.98" width="30" height="73.02" class="chart-rectangle" d="M126.2,111.98L 156.2,111.98L 156.2,185L 126.2,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="164.8667" y="108.08" width="30" height="76.92" class="chart-rectangle" d="M164.8667,108.08L 194.8667,108.08L 194.8667,185L 164.8667,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="203.5333" y="111.14" width="30" height="73.86" class="chart-rectangle" d="M203.5333,111.14L 233.5333,111.14L 233.5333,185L 203.5333,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="242.2" y="103.34" width="30" height="81.66" class="chart-rectangle" d="M242.2,103.34L 272.2,103.34L 272.2,185L 242.2,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="280.8667" y="99.68" width="30" height="85.32" class="chart-rectangle" d="M280.8667,99.68L 310.8667,99.68L 310.8667,185L 280.8667,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="319.5333" y="94.7" width="30" height="90.3" class="chart-rectangle" d="M319.5333,94.7L 349.5333,94.7L 349.5333,185L 319.5333,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="358.2" y="91.7" width="30" height="93.3" class="chart-rectangle" d="M358.2,91.7L 388.2,91.7L 388.2,185L 358.2,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="396.8667" y="86.48" width="30" height="98.52" class="chart-rectangle" d="M396.8667,86.48L 426.8667,86.48L 426.8667,185L 396.8667,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="435.5333" y="81.74" width="30" height="103.26" class="chart-rectangle" d="M435.5333,81.74L 465.5333,81.74L 465.5333,185L 435.5333,185Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-cogs)" name="undefined" x="474.2" y="74.42" width="30" height="110.58" class="chart-rectangle" d="M474.2,74.42L 504.2,74.42L 504.2,185L 474.2,185Z" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar" id="recharts-bar-_r_2_">
                                    <g class="chart-layer chart-bar-rectangles">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="48.8667" y="89.24" width="30" height="34.2" class="chart-rectangle" d="M48.8667,92.24A 3,3,0,0,1,51.8667,89.24L 75.8667,89.24A 3,3,0,0,1,
        78.8667,92.24L 78.8667,123.44L 48.8667,123.44Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="87.5333" y="80.18" width="30" height="37.44" class="chart-rectangle" d="M87.5333,83.18A 3,3,0,0,1,90.5333,80.18L 114.5333,80.18A 3,3,0,0,1,
        117.5333,83.18L 117.5333,117.62L 87.5333,117.62Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="126.2" y="71.42" width="30" height="40.56" class="chart-rectangle" d="M126.2,74.42A 3,3,0,0,1,129.2,71.42L 153.2,71.42A 3,3,0,0,1,
        156.2,74.42L 156.2,111.98L 126.2,111.98Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="164.8667" y="65.36" width="30" height="42.72" class="chart-rectangle" d="M164.8667,68.36A 3,3,0,0,1,167.8667,65.36L 191.8667,65.36A 3,3,0,0,1,
        194.8667,68.36L 194.8667,108.08L 164.8667,108.08Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="203.5333" y="70.1" width="30" height="41.04" class="chart-rectangle" d="M203.5333,73.1A 3,3,0,0,1,206.5333,70.1L 230.5333,70.1A 3,3,0,0,1,
        233.5333,73.1L 233.5333,111.14L 203.5333,111.14Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="242.2" y="57.98" width="30" height="45.36" class="chart-rectangle" d="M242.2,60.98A 3,3,0,0,1,245.2,57.98L 269.2,57.98A 3,3,0,0,1,
        272.2,60.98L 272.2,103.34L 242.2,103.34Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="280.8667" y="52.28" width="30" height="47.4" class="chart-rectangle" d="M280.8667,55.28A 3,3,0,0,1,283.8667,52.28L 307.8667,52.28A 3,3,0,0,1,
        310.8667,55.28L 310.8667,99.68L 280.8667,99.68Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="319.5333" y="44.54" width="30" height="50.16" class="chart-rectangle" d="M319.5333,47.54A 3,3,0,0,1,322.5333,44.54L 346.5333,44.54A 3,3,0,0,1,
        349.5333,47.54L 349.5333,94.7L 319.5333,94.7Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="358.2" y="39.86" width="30" height="51.84" class="chart-rectangle" d="M358.2,42.86A 3,3,0,0,1,361.2,39.86L 385.2,39.86A 3,3,0,0,1,
        388.2,42.86L 388.2,91.7L 358.2,91.7Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="396.8667" y="31.76" width="30" height="54.72" class="chart-rectangle" d="M396.8667,34.76A 3,3,0,0,1,399.8667,31.76L 423.8667,31.76A 3,3,0,0,1,
        426.8667,34.76L 426.8667,86.48L 396.8667,86.48Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="435.5333" y="24.38" width="30" height="57.36" class="chart-rectangle" d="M435.5333,27.38A 3,3,0,0,1,438.5333,24.38L 462.5333,24.38A 3,3,0,0,1,
        465.5333,27.38L 465.5333,81.74L 435.5333,81.74Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-operatingExpenses)" name="undefined" x="474.2" y="12.98" width="30" height="61.44" class="chart-rectangle" d="M474.2,15.98A 3,3,0,0,1,477.2,12.98L 501.2,12.98A 3,3,0,0,1,
        504.2,15.98L 504.2,74.42L 474.2,74.42Z" />
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
                                      <text height="30" width="464" stroke="none" x="64.33333333333333" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="64.33333333333333">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="102.99999999999999" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="102.99999999999999">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="141.66666666666666" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="141.66666666666666">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="180.33333333333334" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="180.33333333333334">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="219" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="219">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="257.66666666666663" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="257.66666666666663">Jun</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="296.3333333333333" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="296.3333333333333">Jul</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="334.99999999999994" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="334.99999999999994">Aug</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="373.66666666666663" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="373.66666666666663">Sep</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="412.3333333333333" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="412.3333333333333">Oct</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="450.99999999999994" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="450.99999999999994">Nov</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="464" stroke="none" x="489.66666666666663" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="489.66666666666663">Dec</tspan>
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
                                        <tspan x="32">$75K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="95" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$150K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="50" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$225K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="40" height="180" stroke="none" x="32" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="32">$300K</tspan>
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
                <!-- Card 3: $487,500.00 -->
                <UCard class="grid grid-cols-2 gap-3 rounded-xl p-4 sm:gap-4 sm:p-5 lg:grid-cols-4 lg:gap-6 lg:p-6" :ui="{ body: 'contents' }">
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
                      <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                        <UIcon name="i-lucide-circle-dollar-sign" class="size-3.5 sm:size-4" />
                        <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Gross Revenue</span>
                      </div>
                      <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">$426,800.00 previous month</p>
                      <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">$487,500.00</p>
                      <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                        <span class="whitespace-nowrap text-success">+14.2%</span>
                        <span class="text-muted whitespace-nowrap">vs last month</span>
                      </div>
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
                      <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                        <UIcon name="i-lucide-wallet" class="size-3.5 sm:size-4" />
                        <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Net Profit</span>
                      </div>
                      <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">$168,200.00 previous month</p>
                      <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">$213,100.00</p>
                      <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                        <span class="whitespace-nowrap text-success">+26.7%</span>
                        <span class="text-muted whitespace-nowrap">vs last month</span>
                      </div>
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
                      <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                        <UIcon name="i-lucide-rotate-ccw" class="size-3.5 sm:size-4" />
                        <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Refund Rate</span>
                      </div>
                      <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">4.2% previous month</p>
                      <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">3.1%</p>
                      <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                        <span class="whitespace-nowrap text-success">+26.2%</span>
                        <span class="text-muted whitespace-nowrap">vs last month</span>
                      </div>
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
                      <div class="text-muted flex items-center gap-1.5 sm:gap-2">
                        <UIcon name="i-lucide-credit-card" class="size-3.5 sm:size-4" />
                        <span class="truncate text-[10px] font-medium sm:text-xs lg:text-sm">Avg Transaction</span>
                      </div>
                      <p class="text-(--ui-text-muted)/70 hidden text-[10px] sm:block sm:text-xs">$68.40 previous month</p>
                      <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl lg:text-[28px] text-highlighted">$74.20</p>
                      <div class="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] sm:text-xs">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3 shrink-0 text-success sm:size-3.5" />
                        <span class="whitespace-nowrap text-success">+8.5%</span>
                        <span class="text-muted whitespace-nowrap">vs last month</span>
                      </div>
                    </div>
                  </div>
                </UCard>
                <!-- Card 4: SJ -->
                <UCard class="rounded-xl" :ui="{ body: 'contents' }">
                  <div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-3.5">
                    <div class="flex flex-1 items-center gap-2 sm:gap-2.5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 shrink-0 sm:size-8" aria-label="Transactions" type="button" @click="openAction(&quot;Transactions&quot;)">
                        <UIcon name="i-lucide-shopping-cart" class="text-muted size-4 sm:size-[18px]" />
                      </UButton>
                      <span class="text-sm font-medium sm:text-base">Transactions</span>
                      <UBadge color="neutral" variant="subtle" class="ml-1 inline-flex items-center rounded-md bg-default px-2 py-1 text-[10px] font-medium text-toned ring-1 ring-(--ui-border-accented)/10 ring-inset sm:text-xs dark:bg-(--ui-bg-elevated)/50 dark:text-muted dark:ring-(--ui-border-accented)/20">
                        50
                      </UBadge>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="relative flex-1 sm:flex-none">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2 sm:size-5" />
                        <UInput v-model="form.transactionsSearch" type="search" aria-label="Search transactions" placeholder="Search transactions… (e.g., TXN-100201)" name="transactionsSearch" class="flex rounded-md md:text-sm h-8 w-full pl-9 text-sm sm:h-9 sm:w-[160px] sm:pl-10 lg:w-[200px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.all" :items="allOptions" aria-label="Filter by date" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[120px] text-xs sm:h-9 sm:w-[140px] sm:text-sm" />
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1.5 sm:h-9 sm:gap-2" aria-label="Status" type="button" @click="openAction(&quot;Status&quot;)">
                        <UIcon name="i-lucide-funnel" class="size-3.5 sm:size-4" />
                        <span class="hidden sm:inline">Status</span>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1.5 sm:h-9 sm:gap-2" aria-label="Method" type="button" @click="openAction(&quot;Method&quot;)">
                        <UIcon name="i-lucide-wallet" class="size-3.5 sm:size-4" />
                        <span class="hidden sm:inline">Method</span>
                      </UButton>
                    </div>
                  </div>
                  <div class="overflow-x-auto px-3 pb-3 sm:px-6 sm:pb-4">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Transaction ID / Customer / Amount / Type / Payment Method / Date / Status -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #transactionID-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Transaction ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #transactionID-cell="{ row }">
                          {{ row.original.transactionID }}
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
                        <template #amount-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #amount-cell="{ row }">
                          {{ row.original.amount }}
                        </template>
                        <template #type-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Type" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #type-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-normal sm:text-xs border-default">
                            {{ row.original.type }}
                          </UBadge>
                        </template>
                        <template #paymentMethod-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Payment Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #paymentMethod-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-normal sm:text-xs border-default">
                            {{ row.original.paymentMethod }}
                          </UBadge>
                        </template>
                        <template #date-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #date-cell="{ row }">
                          {{ row.original.date }}
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                            <UIcon :name="row.original.statusName3" class="size-3" />
                            {{ row.original.status }}
                          </UBadge>
                        </template>
                        <template #actions-cell="{ row }">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 sm:size-8" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for TXN-100201&quot;, row.original._id, 1)">
                            <UIcon name="i-lucide-ellipsis" class="size-3.5 sm:size-4" />
                          </UButton>
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-between gap-3 border-t px-3 py-3 sm:flex-row sm:px-6 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs sm:text-sm">
                      <span class="hidden sm:inline">Rows per page:</span>
                      <USelect v-model="form.field10" :items="field10Options" aria-label="10" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[70px]" />
                      <span class="text-muted">1-10of 50</span>
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
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="5" type="button" @click="openAction(&quot;5&quot;)">
                          5
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
