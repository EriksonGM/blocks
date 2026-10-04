<!-- Page: /ecommerce/dashboard-8 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 8 · Blocks Admin" })

const toast = useToast()

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-8">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="flex h-full w-full flex-1 flex-col gap-4 overflow-auto p-4 sm:gap-6 sm:p-6">
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  <!-- Card 1: $485,000 -->
                  <UCard class="flex flex-col gap-1 p-4" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Total Revenue</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold">$485,000</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-error">-12.5%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 2: 18.5% -->
                  <UCard class="flex flex-col gap-1 p-4" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Conversion Rate</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold">18.5%</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-error">-12.5%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 3: 92 -->
                  <UCard class="flex flex-col gap-1 p-4" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Total Orders</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold">92</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-success">+25%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 4: 38 -->
                  <UCard class="flex flex-col gap-1 p-4" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">Active Customers</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold">38</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-success">+25%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                  <!-- Card 5: 12 -->
                  <UCard class="flex flex-col gap-1 p-4" :ui="{ body: 'contents' }">
                    <span class="text-muted text-xs">New Customers</span>
                    <div class="flex items-baseline gap-2">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold">12</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-success">+25%</span>
                      <span class="text-muted">vs Last Month</span>
                    </div>
                  </UCard>
                </div>
                <div class="grid gap-4 sm:gap-6 lg:grid-cols-3">
                  <!-- Card 6: $640,000 -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:gap-5 sm:p-5 lg:col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Sales Revenue</span>
                        <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold tabular-nums sm:text-3xl">$640,000</span>
                        <div class="flex items-center gap-1">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium text-success">+8.2%</span>
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                          <span class="text-muted text-sm">vs Last month</span>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">4w</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +11.6%
                          </span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">13w</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +7.9%
                          </span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">12m</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-error">
                            <UIcon name="i-lucide-arrow-down-right" class="size-3" />
                            -3.4%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="h-[180px] w-full min-w-0 sm:h-[220px]">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-full w-full" style="" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="707" height="220" class="chart-wrapper" style="position: relative; cursor: default; width: 707px; height: 220px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 707 220" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100" />
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="5" y="5" height="180" width="697" />
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
                                            <path name="undefined" x="10.8083" y="168.8" width="46" height="16.2" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 10.8083,168.8 h 46 v 16.2 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="68.8917" y="156.2" width="46" height="28.8" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 68.8917,156.2 h 46 v 28.8 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="126.975" y="161.825" width="46" height="23.175" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 126.975,161.825 h 46 v 23.175 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="185.0583" y="145.4" width="46" height="39.6" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 185.0583,145.4 h 46 v 39.6 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="243.1417" y="133.25" width="46" height="51.75" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 243.1417,133.25 h 46 v 51.75 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="301.225" y="153.05" width="46" height="31.95" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 301.225,153.05 h 46 v 31.95 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="359.3083" y="115.25" width="46" height="69.75" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 359.3083,115.25 h 46 v 69.75 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="417.3917" y="41" width="46" height="144" class="chart-rectangle duration-200" opacity="1" fill="color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" d="M 417.3917,41 h 46 v 144 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="475.475" y="92.75" width="46" height="92.25" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 475.475,92.75 h 46 v 92.25 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="533.5583" y="137.75" width="46" height="47.25" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 533.5583,137.75 h 46 v 47.25 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="591.6417" y="162.95" width="46" height="22.05" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 591.6417,162.95 h 46 v 22.05 h -46 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" x="649.725" y="126.5" width="46" height="58.5" class="chart-rectangle duration-200" opacity="0.2" fill="color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" d="M 649.725,126.5 h 46 v 58.5 h -46 Z" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-reference-line">
                                    <line opacity="0.35" y="640000" stroke="var(--ui-text-muted)" stroke-width="1" stroke-dasharray="3 3" fill="none" fill-opacity="1" x1="5" y1="40.99999999999999" x2="702" y2="40.99999999999999" class="chart-reference-line-line" />
                                    <rect x="0" y="31.999999999999993" width="58" height="18" fill="var(--ui-bg-muted)" rx="0" />
                                    <text x="6" y="44.99999999999999" fill="var(--ui-text-highlighted)">640000</text>
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
                                      <text height="30" width="697" stroke="none" x="34.04166666666667" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="34.04166666666667">JAN</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="92.125" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="92.125">FEB</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="150.20833333333334" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="150.20833333333334">MAR</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="208.29166666666666" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="208.29166666666666">APR</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="266.375" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="266.375">MAY</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="324.45833333333337" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="324.45833333333337">JUN</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="382.5416666666667" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="382.5416666666667">JUL</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="440.62500000000006" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="440.62500000000006">AUG</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="498.70833333333337" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="498.70833333333337">SEP</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="556.7916666666666" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="556.7916666666666">OCT</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="614.875" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="614.875">NOV</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="697" stroke="none" x="672.9583333333334" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="672.9583333333334">DEC</tspan>
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
                  <!-- Card 7: 2,388 -->
                  <UCard class="flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total Customers</span>
                        <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold tabular-nums sm:text-3xl">2,388</span>
                        <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-[11px] tracking-wide uppercase">Sun</span>
                        <div class="flex items-center gap-1">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium text-success">+2.9%</span>
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                          <span class="text-muted text-sm">vs Sat</span>
                        </div>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 px-2 text-xs" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                        Details
                      </UButton>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between">
                        <span class="text-muted text-sm">Enterprise</span>
                        <div class="flex items-center gap-4">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium tabular-nums">1,074</span>
                          <div class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +3.2%
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-muted text-sm">SMB</span>
                        <div class="flex items-center gap-4">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium tabular-nums">836</span>
                          <div class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs text-error">
                            <UIcon name="i-lucide-arrow-down-right" class="size-3" />
                            -1.5%
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-muted text-sm">Individual</span>
                        <div class="flex items-center gap-4">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium tabular-nums">478</span>
                          <div class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +5.8%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="h-[120px] w-full">
                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-customers:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-customers:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="321" height="120" class="chart-wrapper" style="position: relative; cursor: default; width: 321px; height: 120px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 321 120" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="35" y1="85" x2="316" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="35" y1="45" x2="316" y2="45" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="35" y1="5" x2="316" y2="5" />
                                    </g>
                                    <g class="chart-cartesian-grid-vertical">
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="35" y1="5" x2="35" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="81.83333333333334" y1="5" x2="81.83333333333334" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="128.66666666666669" y1="5" x2="128.66666666666669" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="175.5" y1="5" x2="175.5" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="222.33333333333334" y1="5" x2="222.33333333333334" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="269.1666666666667" y1="5" x2="269.1666666666667" y2="85" />
                                      <line stroke-dasharray="3 3" stroke="var(--ui-primary)" fill="none" x="35" y="5" width="281" height="80" x1="316" y1="5" x2="316" y2="85" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts2-clip">
                                    <rect x="35" y="5" height="80" width="281" />
                                  </clipPath>
                                </defs>
                                <defs>
                                  <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-customers)" stop-opacity="0.3" />
                                    <stop offset="100%" stop-color="var(--color-customers)" stop-opacity="0.05" />
                                  </linearGradient>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-area">
                                    <g class="chart-layer">
                                      <path stroke-width="1" fill="url(#customerGradient)" fill-opacity="0.6" height="80" stroke="none" width="281" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M35,28.077L81.833,18.846L128.667,32.077L175.5,8.692L222.333,26.846L269.167,13.615L316,11.523L316,85L269.167,85L222.333,85L175.5,85L128.667,85L81.833,85L35,85Z" />
                                      <path stroke-width="1" fill="none" fill-opacity="0.6" height="80" stroke="var(--color-customers)" width="281" class="chart-curve chart-area-curve" d="M35,28.077L81.833,18.846L128.667,32.077L175.5,8.692L222.333,26.846L269.167,13.615L316,11.523" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-reference-line">
                                    <line x="Sun" stroke="var(--color-customers)" stroke-dasharray="3 3" fill="none" fill-opacity="1" stroke-width="1" x1="316" y1="85" x2="316" y2="5" class="chart-reference-line-line" />
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
                                      <text height="30" width="281" stroke="none" x="35" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="35">Mon</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="81.83333333333334" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="81.83333333333334">Tue</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="128.66666666666669" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="128.66666666666669">Wed</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="175.5" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="175.5">Thu</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="222.33333333333334" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="222.33333333333334">Fri</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="269.1666666666667" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="269.1666666666667">Sat</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="281" stroke="none" x="311.875" y="98" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="311.875">Sun</tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="30" height="80" stroke="none" x="27" y="85" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="27">0.0k</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="30" height="80" stroke="none" x="27" y="65" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="27">0.7k</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="30" height="80" stroke="none" x="27" y="45" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="27">1.3k</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="30" height="80" stroke="none" x="27" y="6.75" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="27">2.6k</tspan>
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
                <div class="grid gap-4 sm:gap-6 lg:grid-cols-3">
                  <!-- Card 8: 24% -->
                  <UCard class="flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">User Retention</span>
                        <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold sm:text-3xl">24%</span>
                        <div class="flex items-center gap-1">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium text-success">+2.0%</span>
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-success" />
                        </div>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 px-2 text-xs" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                        Details
                      </UButton>
                    </div>
                    <div class="flex flex-col gap-px">
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 43%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 37%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 31%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 27%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 24%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 50%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 43%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 37%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 31%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 62%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 51%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 43%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 37%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 59%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 47%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 39%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 53%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 57%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                      <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                        <div class="hover:ring-(--ui-text-highlighted)/20 h-5 cursor-default transition-shadow hover:ring-1" style="background-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" data-slot="block-tooltip-trigger" />
                      </div>
                    </div>
                    <div class="grid gap-px" style="grid-template-columns:repeat(7, minmax(0, 1fr))">
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">1</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">2</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">3</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">4</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">5</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">6</span>
                      <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-muted text-center text-[10px]">7</span>
                    </div>
                  </UCard>
                  <!-- Card 9: 701.34M -->
                  <UCard class="flex min-w-0 flex-col gap-4 p-4 sm:gap-5 sm:p-5 lg:col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Store Visits</span>
                        <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-2xl font-semibold sm:text-3xl">701.34M</span>
                        <div class="flex items-center gap-1">
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className text-sm font-medium text-error">-12.5%</span>
                          <UIcon name="i-lucide-arrow-down-right" class="size-3.5 text-error" />
                          <span class="text-muted text-sm">vs Last month</span>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">3m</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +25%
                          </span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">6m</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                            +25%
                          </span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex items-center gap-1.5 border px-2 py-1 border-default">
                          <span class="text-muted text-xs">1y</span>
                          <span class="jetbrains_mono_7db2054d-module__9P72ta__className flex items-center gap-0.5 text-xs font-medium text-error">
                            <UIcon name="i-lucide-arrow-down-right" class="size-3" />
                            -12.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="h-[140px] w-full min-w-0 sm:h-[160px]">
                      <div class="h-full w-full min-w-0">
                        <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-visits:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--secondary-foreground:var(--ui-text-highlighted);--primary-foreground:var(--ui-bg)" role="img" aria-label="Analytics chart">
                          <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-visits:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--secondary-foreground:var(--ui-text-highlighted);--primary-foreground:var(--ui-bg);width:100%;height:160px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="707" height="160" class="chart-wrapper overflow-visible" style="position: relative; cursor: default; width: 707px; height: 160px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 707 160" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100" />
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts3-clip">
                                      <rect x="0" y="0" height="130" width="707" />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient id="visitsGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stop-color="var(--color-visits)" stop-opacity="0.3" />
                                      <stop offset="100%" stop-color="var(--color-visits)" stop-opacity="0.05" />
                                    </linearGradient>
                                  </defs>
                                  <line x1="707" y1="0" x2="707" y2="85%" stroke="var(--color-visits)" stroke-dasharray="3 3" stroke-linecap="round" />
                                  <rect x="651" y="0" width="56" height="18" fill="var(--secondary-foreground)" />
                                  <text x="679" y="13" text-anchor="middle" fill="var(--ui-text-inverted)">198</text>
                                  <g class="chart-zIndex-layer_100">
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-width="1" clip-path="inset(0px 0px 0px 0px)" fill="url(#visitsGradient)" fill-opacity="0.4" height="130" stroke="none" width="707" id="recharts-area-_r_2_" class="chart-curve chart-area-area" d="M12,90.188C32.697,56.956,53.394,23.725,74.091,23.725C94.788,23.725,115.485,67.113,136.182,67.113C156.879,67.113,177.576,45.338,198.273,45.338C218.97,45.338,239.667,63.05,260.364,63.05C281.061,63.05,301.758,32.825,322.455,32.825C343.152,32.825,363.848,79.3,384.545,79.3C405.242,79.3,425.939,9.263,446.636,9.263C467.333,9.263,488.03,49.129,508.727,50.538C529.424,51.946,550.121,52.65,570.818,52.65C591.515,52.65,612.212,18.362,632.909,18.362C653.606,18.362,674.303,58.094,695,97.825L695,130C674.303,130,653.606,130,632.909,130C612.212,130,591.515,130,570.818,130C550.121,130,529.424,130,508.727,130C488.03,130,467.333,130,446.636,130C425.939,130,405.242,130,384.545,130C363.848,130,343.152,130,322.455,130C301.758,130,281.061,130,260.364,130C239.667,130,218.97,130,198.273,130C177.576,130,156.879,130,136.182,130C115.485,130,94.788,130,74.091,130C53.394,130,32.697,130,12,130Z" />
                                        <path stroke-width="1" clip-path="inset(0px 0px 0px 0px)" fill="none" fill-opacity="0.4" height="130" stroke="var(--color-visits)" width="707" class="chart-curve chart-area-curve" d="M12,90.188C32.697,56.956,53.394,23.725,74.091,23.725C94.788,23.725,115.485,67.113,136.182,67.113C156.879,67.113,177.576,45.338,198.273,45.338C218.97,45.338,239.667,63.05,260.364,63.05C281.061,63.05,301.758,32.825,322.455,32.825C343.152,32.825,363.848,79.3,384.545,79.3C405.242,79.3,425.939,9.263,446.636,9.263C467.333,9.263,488.03,49.129,508.727,50.538C529.424,51.946,550.121,52.65,570.818,52.65C591.515,52.65,612.212,18.362,632.909,18.362C653.606,18.362,674.303,58.094,695,97.825" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-width="1" fill="none" fill-opacity="0.6" height="130" stroke="none" width="707" id="recharts-area-_r_3_" class="chart-curve chart-area-area" d="M12,90.188C32.697,56.956,53.394,23.725,74.091,23.725C94.788,23.725,115.485,67.113,136.182,67.113C156.879,67.113,177.576,45.338,198.273,45.338C218.97,45.338,239.667,63.05,260.364,63.05C281.061,63.05,301.758,32.825,322.455,32.825C343.152,32.825,363.848,79.3,384.545,79.3C405.242,79.3,425.939,9.263,446.636,9.263C467.333,9.263,488.03,49.129,508.727,50.538C529.424,51.946,550.121,52.65,570.818,52.65C591.515,52.65,612.212,18.362,632.909,18.362C653.606,18.362,674.303,58.094,695,97.825L695,130C674.303,130,653.606,130,632.909,130C612.212,130,591.515,130,570.818,130C550.121,130,529.424,130,508.727,130C488.03,130,467.333,130,446.636,130C425.939,130,405.242,130,384.545,130C363.848,130,343.152,130,322.455,130C301.758,130,281.061,130,260.364,130C239.667,130,218.97,130,198.273,130C177.576,130,156.879,130,136.182,130C115.485,130,94.788,130,74.091,130C53.394,130,32.697,130,12,130Z" />
                                        <path stroke-width="1" fill="none" fill-opacity="0.6" height="130" stroke="var(--color-visits)" width="707" class="chart-curve chart-area-curve" d="M12,90.188C32.697,56.956,53.394,23.725,74.091,23.725C94.788,23.725,115.485,67.113,136.182,67.113C156.879,67.113,177.576,45.338,198.273,45.338C218.97,45.338,239.667,63.05,260.364,63.05C281.061,63.05,301.758,32.825,322.455,32.825C343.152,32.825,363.848,79.3,384.545,79.3C405.242,79.3,425.939,9.263,446.636,9.263C467.333,9.263,488.03,49.129,508.727,50.538C529.424,51.946,550.121,52.65,570.818,52.65C591.515,52.65,612.212,18.362,632.909,18.362C653.606,18.362,674.303,58.094,695,97.825" />
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
                                  </g>
                                  <g class="chart-zIndex-layer_600" />
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="12" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="12">Jan</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="74.0909090909091" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="74.0909090909091">Feb</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="136.1818181818182" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="136.1818181818182">Mar</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="198.27272727272728" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="198.27272727272728">Apr</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="260.3636363636364" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="260.3636363636364">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="322.4545454545455" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="322.4545454545455">Jun</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="384.54545454545456" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="384.54545454545456">Jul</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="446.6363636363636" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="446.6363636363636">Aug</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="508.72727272727275" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="508.72727272727275">Sep</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="570.8181818181819" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="570.8181818181819">Oct</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="632.909090909091" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="632.909090909091">Nov</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="707" stroke="none" x="695" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="695">Dec</tspan>
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
