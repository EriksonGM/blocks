<!-- Page: /ecommerce/dashboard-9 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 9 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "customer": "SCSarah Chen",
    "customerText4": "SC",
    "customerText6": "Sarah Chen",
    "order": "#ORD-7821",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center gap-x-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-success bg-success/10",
    "amount": "$129.99",
    "amountText4": "129.99",
    "time": "23 min ago"
  },
  {
    "_id": "2",
    "customer": "MJMarcus Johnson",
    "customerText4": "MJ",
    "customerText6": "Marcus Johnson",
    "order": "#ORD-7820",
    "status": "Processing",
    "statusClass2": "inline-flex items-center gap-x-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-warning bg-warning/10",
    "amount": "$89.95",
    "amountText4": "89.95",
    "time": "1 hour ago"
  },
  {
    "_id": "3",
    "customer": "EREmily Rodriguez",
    "customerText4": "ER",
    "customerText6": "Emily Rodriguez",
    "order": "#ORD-7819",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center gap-x-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-success bg-success/10",
    "amount": "$34.50",
    "amountText4": "34.50",
    "time": "2 hours ago"
  },
  {
    "_id": "4",
    "customer": "DKDavid Kim",
    "customerText4": "DK",
    "customerText6": "David Kim",
    "order": "#ORD-7818",
    "status": "Cancelled",
    "statusClass2": "inline-flex items-center gap-x-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-error bg-error/10",
    "amount": "$199.00",
    "amountText4": "199.00",
    "time": "3 hours ago"
  },
  {
    "_id": "5",
    "customer": "APAisha Patel",
    "customerText4": "AP",
    "customerText6": "Aisha Patel",
    "order": "#ORD-7817",
    "status": "Delivered",
    "statusClass2": "inline-flex items-center gap-x-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-success bg-success/10",
    "amount": "$45.00",
    "amountText4": "45.00",
    "time": "5 hours ago"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "order",
    "header": "Order"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "time",
    "header": "Time"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["customer","order","status","amount","time"] as const
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-9">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="bg-default flex w-full flex-1 flex-col overflow-auto">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <nav class="bg-default border-b border-default">
                <ul role="list" class="flex min-w-full items-center gap-6 overflow-x-auto px-4 sm:px-6">
                  <li class="shrink-0">
                    <NuxtLink class="inline-flex h-12 items-center border-b-2 text-sm font-semibold transition-colors border-(--ui-text-highlighted) text-highlighted" to="#">
                      Overview
                    </NuxtLink>
                  </li>
                  <li class="shrink-0">
                    <NuxtLink class="text-muted inline-flex h-12 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" to="#">
                      Orders
                    </NuxtLink>
                  </li>
                  <li class="shrink-0">
                    <NuxtLink class="text-muted inline-flex h-12 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" to="#">
                      Products
                    </NuxtLink>
                  </li>
                  <li class="shrink-0">
                    <NuxtLink class="text-muted inline-flex h-12 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" to="#">
                      Customers
                    </NuxtLink>
                  </li>
                  <li class="shrink-0">
                    <NuxtLink class="text-muted inline-flex h-12 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" to="#">
                      Analytics
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
              <main id="dashboard-main" class="bg-default flex w-full flex-1 flex-col">
                <div class="border-b px-4 py-4 sm:px-6 border-default">
                  <h1 class="flex gap-x-3 text-base/7 text-highlighted">
                    <span class="text-highlighted font-semibold">Acme Store</span>
                    <span class="text-(--ui-text-muted)/60">/</span>
                    <span class="text-highlighted font-semibold">Overview</span>
                  </h1>
                  <p class="text-muted mt-2 text-xs/6">Ecommerce analytics and performance metrics</p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 [&amp;&gt;*]:border-r [&amp;&gt;*:last-child]:border-r-0 border-default">
                  <!-- Card 1: $485,000 -->
                  <UCard class="flex h-full flex-col gap-2 border-b px-4 py-6 sm:px-6" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Total Revenue</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold">$485,000</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-error">-12.5%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 2: 18.5% -->
                  <UCard class="flex h-full flex-col gap-2 border-b px-4 py-6 sm:px-6" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Conversion Rate</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold">18.5%</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-error">-12.5%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 3: 92 -->
                  <UCard class="flex h-full flex-col gap-2 border-b px-4 py-6 sm:px-6" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Total Orders</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold">92</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-success">+25%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 4: 38 -->
                  <UCard class="flex h-full flex-col gap-2 border-b px-4 py-6 sm:px-6" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Active Customers</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold">38</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                      <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-success">+25%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                </div>
                <div class="grid lg:grid-cols-3">
                  <div class="border-b lg:col-span-2 lg:border-r border-default">
                    <div class="bg-default flex min-w-0 flex-1 flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex flex-col gap-1">
                          <span class="text-muted text-xs">Sales Revenue</span>
                          <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold tabular-nums sm:text-3xl">$640,000</span>
                          <div class="flex items-center gap-1">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-sm font-medium text-success">+8.2%</span>
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                            <span class="text-muted text-sm">vs Last month</span>
                          </div>
                        </div>
                        <div class="flex flex-wrap gap-2">
                          <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                            <span class="text-muted text-xs">4w</span>
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs font-medium text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              +11.6%
                            </span>
                          </div>
                          <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                            <span class="text-muted text-xs">13w</span>
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs font-medium text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              +7.9%
                            </span>
                          </div>
                          <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                            <span class="text-muted text-xs">12m</span>
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs font-medium text-error">
                              <UIcon name="i-lucide-arrow-down-right" class="size-3" />
                              -3.4%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="h-[180px] w-full min-w-0 sm:h-[220px]">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-full w-full" style=";--secondary-foreground:var(--ui-text-highlighted);--primary-foreground:var(--ui-bg)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--secondary-foreground:var(--ui-text-highlighted);--primary-foreground:var(--ui-bg);width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="748" height="220" class="chart-wrapper" style="position: relative; cursor: default; width: 748px; height: 220px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 748 220" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100" />
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="5" y="5" height="180" width="738" />
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
                                              <g role="button" aria-label="JAN revenue $72,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-0" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="11.15" y="168.79999999999998" width="49" height="16.200000000000017" fill="url(#revenue-gradient-0)" stroke="none" />
                                                <rect x="11.15" y="168.79999999999998" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="FEB revenue $128,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-1" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="72.65" y="156.20000000000002" width="49" height="28.799999999999983" fill="url(#revenue-gradient-1)" stroke="none" />
                                                <rect x="72.65" y="156.20000000000002" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="MAR revenue $103,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="134.15" y="161.82500000000002" width="49" height="23.174999999999983" fill="url(#revenue-gradient-2)" stroke="none" />
                                                <rect x="134.15" y="161.82500000000002" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="APR revenue $176,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-3" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="195.65" y="145.4" width="49" height="39.599999999999994" fill="url(#revenue-gradient-3)" stroke="none" />
                                                <rect x="195.65" y="145.4" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="MAY revenue $230,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-4" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="257.15" y="133.25" width="49" height="51.75" fill="url(#revenue-gradient-4)" stroke="none" />
                                                <rect x="257.15" y="133.25" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="JUN revenue $142,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-5" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="318.65" y="153.04999999999998" width="49" height="31.950000000000017" fill="url(#revenue-gradient-5)" stroke="none" />
                                                <rect x="318.65" y="153.04999999999998" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="JUL revenue $310,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-6" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="380.15" y="115.25000000000001" width="49" height="69.74999999999999" fill="url(#revenue-gradient-6)" stroke="none" />
                                                <rect x="380.15" y="115.25000000000001" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="AUG revenue $640,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-7" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" stop-opacity="0.6" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="441.65" y="40.99999999999999" width="49" height="144" fill="url(#revenue-gradient-7)" stroke="none" />
                                                <rect x="441.65" y="40.99999999999999" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="SEP revenue $410,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-8" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="503.15" y="92.75000000000001" width="49" height="92.24999999999999" fill="url(#revenue-gradient-8)" stroke="none" />
                                                <rect x="503.15" y="92.75000000000001" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="OCT revenue $210,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-9" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="564.65" y="137.75" width="49" height="47.25" fill="url(#revenue-gradient-9)" stroke="none" />
                                                <rect x="564.65" y="137.75" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="NOV revenue $98,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-10" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="626.15" y="162.95" width="49" height="22.05000000000001" fill="url(#revenue-gradient-10)" stroke="none" />
                                                <rect x="626.15" y="162.95" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <g role="button" aria-label="DEC revenue $260,000" style="cursor: pointer;">
                                                <defs>
                                                  <linearGradient id="revenue-gradient-11" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0.15" />
                                                    <stop offset="100%" stop-color="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stop-opacity="0" />
                                                  </linearGradient>
                                                </defs>
                                                <rect x="687.65" y="126.50000000000001" width="49" height="58.499999999999986" fill="url(#revenue-gradient-11)" stroke="none" />
                                                <rect x="687.65" y="126.50000000000001" width="49" height="2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke="none" />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-reference-line">
                                      <line opacity="0.4" y="640000" stroke="var(--secondary-foreground)" stroke-width="1" stroke-dasharray="3 3" fill="none" fill-opacity="1" x1="5" y1="40.99999999999999" x2="743" y2="40.99999999999999" class="chart-reference-line-line" />
                                      <rect x="0" y="31.999999999999993" width="58" height="18" fill="var(--secondary-foreground)" rx="0" />
                                      <text x="6" y="44.99999999999999" fill="var(--ui-text-inverted)">640000</text>
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
                                        <text height="30" width="738" stroke="none" x="35.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="35.75">JAN</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="97.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="97.25">FEB</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="158.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="158.75">MAR</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="220.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="220.25">APR</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="281.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="281.75">MAY</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="343.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="343.25">JUN</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="404.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="404.75">JUL</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="466.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="466.25">AUG</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="527.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="527.75">SEP</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="589.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="589.25">OCT</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="650.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="650.75">NOV</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="738" stroke="none" x="712.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="712.25">DEC</tspan>
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
                  <div class="border-b border-default">
                    <div class="bg-default flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex flex-col gap-1">
                          <span class="text-muted text-xs">Total Customers</span>
                          <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold tabular-nums">2,388</span>
                          <div class="flex items-center gap-1">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-sm font-medium text-success">+4.2%</span>
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                          </div>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 px-2 text-xs" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                          Details
                        </UButton>
                      </div>
                      <div class="h-[160px]">
                        <svg viewBox="0 0 280 200" class="h-full w-full" width="100%" height="100%">
                          <g role="button" aria-label="Enterprise: 45% of customers, 1,074 customers" style="transition:opacity 150ms ease-out">
                            <circle cx="180" cy="105" r="70" fill="var(--ui-primary)" fill-opacity="0.25" stroke="var(--ui-primary)" stroke-width="1" style="transition:all 150ms ease-out" />
                            <text x="180" y="105" text-anchor="middle" dominant-baseline="central" fill="currentColor" style="font-family:JetBrains Mono, monospace;opacity:1;transition:all 150ms ease-out">45%</text>
                          </g>
                          <g role="button" aria-label="SMB: 35% of customers, 836 customers" style="transition:opacity 150ms ease-out">
                            <circle cx="75" cy="130" r="61.73419725817378" fill="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" fill-opacity="0.25" stroke="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" stroke-width="1" style="transition:all 150ms ease-out" />
                            <text x="75" y="130" text-anchor="middle" dominant-baseline="central" fill="currentColor" style="font-family:JetBrains Mono, monospace;opacity:1;transition:all 150ms ease-out">35%</text>
                          </g>
                          <g role="button" aria-label="Individual: 20% of customers, 478 customers" style="transition:opacity 150ms ease-out">
                            <circle cx="100" cy="55" r="46.666666666666664" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.25" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="1" style="transition:all 150ms ease-out" />
                            <text x="100" y="55" text-anchor="middle" dominant-baseline="central" fill="currentColor" style="font-family:JetBrains Mono, monospace;opacity:1;transition:all 150ms ease-out">20%</text>
                          </g>
                        </svg>
                      </div>
                      <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between" style="opacity:1;transition:opacity 150ms ease-out" role="button" aria-label="Enterprise: 1,074 customers">
                          <div class="flex items-center gap-2">
                            <div class="h-2 w-2 rounded-full" style="background-color:var(--ui-primary)" />
                            <span class="text-muted text-sm" style="transition:all 150ms ease-out">Enterprise</span>
                          </div>
                          <div class="flex items-center gap-4">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-sm font-medium tabular-nums">1,074</span>
                            <div class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs tabular-nums text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              +3.2%
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between" style="opacity:1;transition:opacity 150ms ease-out" role="button" aria-label="SMB: 836 customers">
                          <div class="flex items-center gap-2">
                            <div class="h-2 w-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                            <span class="text-muted text-sm" style="transition:all 150ms ease-out">SMB</span>
                          </div>
                          <div class="flex items-center gap-4">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-sm font-medium tabular-nums">836</span>
                            <div class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs tabular-nums text-error">
                              <UIcon name="i-lucide-arrow-down-right" class="size-3" />
                              -1.5%
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between" style="opacity:1;transition:opacity 150ms ease-out" role="button" aria-label="Individual: 478 customers">
                          <div class="flex items-center gap-2">
                            <div class="h-2 w-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                            <span class="text-muted text-sm" style="transition:all 150ms ease-out">Individual</span>
                          </div>
                          <div class="flex items-center gap-4">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-sm font-medium tabular-nums">478</span>
                            <div class="jetbrains_mono_a72e0b6f-module__sAqf7W__className flex items-center gap-0.5 text-xs tabular-nums text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              +5.8%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid lg:grid-cols-3">
                  <div class="border-b lg:border-r border-default">
                    <div class="bg-default flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex flex-col gap-1">
                          <span class="text-muted text-xs">Geography</span>
                          <div class="flex items-baseline gap-2">
                            <span class="jetbrains_mono_a72e0b6f-module__sAqf7W__className text-2xl font-semibold tabular-nums">34,700</span>
                          </div>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 px-2 text-xs" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                          Details
                        </UButton>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="flex h-1.5 flex-1 overflow-hidden">
                          <div style="width:36%;background-color:var(--ui-primary);transition:width 150ms ease-out" class="h-full" />
                          <div style="width:56%;background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg));transition:width 150ms ease-out" class="h-full" />
                          <div style="width:8%;background-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg));transition:width 150ms ease-out" class="h-full" />
                        </div>
                      </div>
                      <div class="text-muted flex items-center gap-3 text-xs">
                        <span class="flex items-center gap-1">
                          <span class="inline-block h-1.5 w-1.5 rounded-full" style="background-color:var(--ui-primary)" />
                          Men 36%
                        </span>
                        <span class="flex items-center gap-1">
                          <span class="inline-block h-1.5 w-1.5 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                          Women 56%
                        </span>
                        <span class="flex items-center gap-1">
                          <span class="inline-block h-1.5 w-1.5 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          Other 8%
                        </span>
                      </div>
                      <div class="relative h-[200px]">
                        <svg viewBox="0 0 63 30" class="h-full w-full" width="100%" height="100%">
                          <defs>
                            <style>
          @keyframes mapMarkerPulse &#123;
            0% &#123; opacity: 1.0; &#125;
            50% &#123; opacity: 0.65; &#125;
            100% &#123; opacity: 1.0; &#125;
          &#125;
        </style>
                          </defs>
                          <circle cx="11.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="25.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="26.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="27.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="0" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="4" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="5" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="6" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="25" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="26" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="27" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="61" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="62" cy="0.8660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="0.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="4.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="5.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="6.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="25.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="61.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="62.5" cy="1.7320508075688772" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="1" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="2" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="4" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="5" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="6" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="28" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="61" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="62" cy="2.598076211353316" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="1.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="4.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="5.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="6.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="61.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="62.5" cy="3.4641016151377544" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="4" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="6" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="61" cy="4.330127018922193" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="3.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="7.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="8.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="5.196152422706632" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60" cy="6.06217782649107" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="59.5" cy="6.928203230275509" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="9" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="8.660254037844386" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="9.526279441628825" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="10.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="11.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="12.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="15.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="12.12435565298214" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="42" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="43" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="12.990381056766578" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="13.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="29.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="44.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="47.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="13.856406460551018" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="14" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="29" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="41" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="46" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="16.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="29.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50.5" cy="15.588457268119894" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="30" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="32" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="50" cy="16.454482671904334" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="33.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="48.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="49.5" cy="17.32050807568877" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="18.186533479473212" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="19.05255888325765" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="25" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="60" cy="19.918584287042087" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="38.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="23" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="24" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="40" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="21.650635094610966" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="34.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="39.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="51.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="22.516660498395403" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="36" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="37" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="53" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="54" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="58" cy="23.38268590217984" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="35.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="52.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="55.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="24.24871130596428" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="25.11473670974872" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="20" cy="25.11473670974872" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="21" cy="25.11473670974872" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57" cy="25.11473670974872" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="25.980762113533157" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="25.980762113533157" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="57.5" cy="25.980762113533157" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="62.5" cy="25.980762113533157" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="26.846787517317598" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="18.5" cy="27.712812921102035" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="27.712812921102035" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19" cy="28.578838324886473" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="19.5" cy="29.444863728670914" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="17.5" cy="10.392304845413264" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="31" cy="7.794228634059947" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="45" cy="14.722431864335457" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="22.5" cy="20.784609690826528" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <circle cx="56" cy="11.258330249197702" r="0.35" fill="currentColor" opacity="0.12" style="transition:opacity 300ms ease-out" />
                          <g role="button" aria-label="United States: 12,400 users" style="cursor:pointer;animation:mapMarkerPulse 3s ease-in-out 0s infinite">
                            <circle cx="17.5" cy="10.392304845413264" r="2.8" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.5" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="0.4" style="transition:all 150ms ease-out" />
                          </g>
                          <g role="button" aria-label="United Kingdom: 8,200 users" style="cursor:pointer;animation:mapMarkerPulse 3s ease-in-out 0.6s infinite">
                            <circle cx="31" cy="7.794228634059947" r="2.258064516129032" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.5" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="0.4" style="transition:all 150ms ease-out" />
                          </g>
                          <g role="button" aria-label="India: 6,500 users" style="cursor:pointer;animation:mapMarkerPulse 3s ease-in-out 1.2s infinite">
                            <circle cx="45" cy="14.722431864335457" r="2.0387096774193547" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.5" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="0.4" style="transition:all 150ms ease-out" />
                          </g>
                          <g role="button" aria-label="Brazil: 4,200 users" style="cursor:pointer;animation:mapMarkerPulse 3s ease-in-out 1.7999999999999998s infinite">
                            <circle cx="22.5" cy="20.784609690826528" r="1.7419354838709675" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.5" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="0.4" style="transition:all 150ms ease-out" />
                          </g>
                          <g role="button" aria-label="Japan: 3,400 users" style="cursor:pointer;animation:mapMarkerPulse 3s ease-in-out 2.4s infinite">
                            <circle cx="56" cy="11.258330249197702" r="1.6387096774193548" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" fill-opacity="0.5" stroke="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" stroke-width="0.4" style="transition:all 150ms ease-out" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="border-b lg:col-span-2 border-default">
                    <div class="bg-default flex flex-col">
                      <div class="px-4 pt-5 sm:px-6">
                        <h2 class="text-highlighted text-sm font-medium text-highlighted">Recent Orders</h2>
                      </div>
                      <div class="mt-4">
                        <!-- Table 1: Customer / Order / Status / Amount / Time -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full text-left" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #customer-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #customer-cell="{ row }">
                            <div class="flex items-center gap-x-3">
                              <div class="bg-muted text-muted flex size-8 items-center justify-center rounded-full text-xs font-medium">{{ row.original.customerText4 }}</div>
                              <span class="text-highlighted text-sm font-medium">{{ row.original.customerText6 }}</span>
                            </div>
                          </template>
                          <template #order-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Order" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #order-cell="{ row }">
                            <span class="text-muted font-mono text-xs">{{ row.original.order }}</span>
                          </template>
                          <template #status-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #status-cell="{ row }">
                            <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                              <span class="size-1.5 rounded-full bg-current" />
                              {{ row.original.status }}
                            </UBadge>
                          </template>
                          <template #amount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #amount-cell="{ row }">
                            <span class="text-highlighted font-[family-name:var(--font-jetbrains-mono)] text-sm">${{ row.original.amountText4 }}</span>
                          </template>
                          <template #time-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Time" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #time-cell="{ row }">
                            <span class="text-muted text-xs">{{ row.original.time }}</span>
                          </template>
                        </UTable>
                      </div>
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
