<!-- Page: /payment-processor/dashboard-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 2 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden [contain:layout_paint]">
          <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="mx-auto flex w-full max-w-[1536px] min-w-0 flex-col gap-6 p-4 md:p-6">
              <header class="flex flex-wrap items-end justify-between gap-4">
                <div class="min-w-0 flex-1">
                  <h1 class="text-2xl font-semibold tracking-normal text-highlighted">Welcome back, Alex</h1>
                  <div class="relative mt-5 max-w-[540px]">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <div class="border-default bg-default text-muted flex h-10 items-center rounded-md border pr-3 pl-10 text-sm shadow-xs">
                      <span class="min-w-0 flex-1 truncate">Search...</span>
                      <span class="font-mono text-xs">⌘ K</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 rounded-md px-4" aria-label="Create" type="button" @click="openAction(&quot;Create&quot;)">
                    Create
                    <UIcon name="i-lucide-chevron-down" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default px-4 py-2 text-muted hidden h-9 gap-2 md:inline-flex" aria-label="Help" type="button" @click="openAction(&quot;Help&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-4" />
                    Help
                  </UButton>
                </div>
              </header>
              <div class="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_400px] 2xl:grid-cols-[minmax(0,1fr)_430px]">
                <div class="flex min-w-0 flex-col gap-4">
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <div class="flex items-center gap-2">
                        <h2 class="text-base leading-none font-medium text-highlighted">Today</h2>
                        <UIcon name="i-lucide-info" class="text-muted size-4" />
                      </div>
                      <div class="flex items-center gap-5 text-sm">
                        <span class="flex items-center gap-2">
                          <span class="bg-primary h-0.5 w-4 rounded-full" />
                          Today
                        </span>
                        <span class="text-muted flex items-center gap-2">
                          <span class="bg-(--ui-text-muted)/40 h-0.5 w-4 rounded-full" />
                          Yesterday
                        </span>
                      </div>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1 p-5">
                      <div class="grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                        <div class="py-3 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0">
                          <p class="text-muted truncate text-[0.84rem] whitespace-nowrap">Gross volume</p>
                          <p class="mt-2 truncate text-xl font-medium tracking-normal whitespace-nowrap 2xl:text-2xl">$125,560.00</p>
                          <p class="mt-1 text-sm font-medium whitespace-nowrap text-success dark:text-success">+12.8%</p>
                        </div>
                        <div class="py-3 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0">
                          <p class="text-muted truncate text-[0.84rem] whitespace-nowrap">Successful payments</p>
                          <p class="mt-2 truncate text-xl font-medium tracking-normal whitespace-nowrap 2xl:text-2xl">2,345</p>
                          <p class="mt-1 text-sm font-medium whitespace-nowrap text-success dark:text-success">+8.3%</p>
                        </div>
                        <div class="py-3 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0">
                          <p class="text-muted truncate text-[0.84rem] whitespace-nowrap">New customers</p>
                          <p class="mt-2 truncate text-xl font-medium tracking-normal whitespace-nowrap 2xl:text-2xl">156</p>
                          <p class="mt-1 text-sm font-medium whitespace-nowrap text-success dark:text-success">+3.1%</p>
                        </div>
                        <div class="py-3 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0">
                          <p class="text-muted truncate text-[0.84rem] whitespace-nowrap">Net volume from sales</p>
                          <p class="mt-2 truncate text-xl font-medium tracking-normal whitespace-nowrap 2xl:text-2xl">$122,312.80</p>
                          <p class="mt-1 text-sm font-medium whitespace-nowrap text-success dark:text-success">+11.5%</p>
                        </div>
                      </div>
                      <div class="h-[176px] min-w-0">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-today:var(--ui-primary);--color-yesterday:color-mix(in oklch, var(--ui-text-muted) 45%, var(--ui-bg));--color-estimate:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-today:var(--ui-primary);--color-yesterday:color-mix(in oklch, var(--ui-text-muted) 45%, var(--ui-bg));--color-estimate:var(--ui-primary);width:100%;height:176px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="670" height="176" class="chart-wrapper" style="position: relative; cursor: default; width: 670px; height: 176px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 670 176" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="0" y="8" width="662" height="138" x1="0" y1="146" x2="662" y2="146" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="0" y="8" width="662" height="138" x1="0" y1="107.66666666666667" x2="662" y2="107.66666666666667" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="0" y="8" width="662" height="138" x1="0" y1="69.33333333333333" x2="662" y2="69.33333333333333" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="0" y="8" width="662" height="138" x1="0" y1="8" x2="662" y2="8" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="0" y="8" height="138" width="662" />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient id="today-volume-fill" x1="0" x2="0" y1="0" y2="1">
                                      <stop offset="0%" stop-color="var(--color-today)" stop-opacity="0.14" />
                                      <stop offset="90%" stop-color="var(--color-today)" stop-opacity="0" />
                                    </linearGradient>
                                  </defs>
                                  <g class="chart-zIndex-layer_100">
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-dasharray="5 5" stroke-width="1.75" fill="transparent" fill-opacity="0.6" height="138" stroke="none" width="662" id="recharts-area-_r_0_" class="chart-curve chart-area-area" d="M0,118.4C20.061,116.611,40.121,114.822,60.182,112.267C80.242,109.711,100.303,105.367,120.364,103.067C140.424,100.767,160.485,98.467,180.545,98.467C200.606,98.467,220.667,100,240.727,100C260.788,100,280.848,89.267,300.909,89.267C320.97,89.267,341.03,93.867,361.091,93.867C381.152,93.867,401.212,86.2,421.273,83.133C441.333,80.067,461.394,78.789,481.455,75.467C501.515,72.144,521.576,67.289,541.636,63.2C561.697,59.111,581.758,57.067,601.818,50.933C621.879,44.8,641.939,35.6,662,26.4L662,146C641.939,146,621.879,146,601.818,146C581.758,146,561.697,146,541.636,146C521.576,146,501.515,146,481.455,146C461.394,146,441.333,146,421.273,146C401.212,146,381.152,146,361.091,146C341.03,146,320.97,146,300.909,146C280.848,146,260.788,146,240.727,146C220.667,146,200.606,146,180.545,146C160.485,146,140.424,146,120.364,146C100.303,146,80.242,146,60.182,146C40.121,146,20.061,146,0,146Z" />
                                        <path stroke-dasharray="5 5" stroke-width="1.75" fill="none" fill-opacity="0.6" height="138" stroke="var(--color-yesterday)" width="662" class="chart-curve chart-area-curve" d="M0,118.4C20.061,116.611,40.121,114.822,60.182,112.267C80.242,109.711,100.303,105.367,120.364,103.067C140.424,100.767,160.485,98.467,180.545,98.467C200.606,98.467,220.667,100,240.727,100C260.788,100,280.848,89.267,300.909,89.267C320.97,89.267,341.03,93.867,361.091,93.867C381.152,93.867,401.212,86.2,421.273,83.133C441.333,80.067,461.394,78.789,481.455,75.467C501.515,72.144,521.576,67.289,541.636,63.2C561.697,59.111,581.758,57.067,601.818,50.933C621.879,44.8,641.939,35.6,662,26.4" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-width="2" fill="url(#today-volume-fill)" fill-opacity="0.6" height="138" stroke="none" width="662" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M0,127.6C20.061,124.533,40.121,121.467,60.182,118.4C80.242,115.333,100.303,109.2,120.364,109.2C140.424,109.2,160.485,112.267,180.545,112.267C200.606,112.267,220.667,98.978,240.727,93.867C260.788,88.756,280.848,81.6,300.909,81.6C320.97,81.6,341.03,83.9,361.091,86.2L361.091,146C341.03,146,320.97,146,300.909,146C280.848,146,260.788,146,240.727,146C220.667,146,200.606,146,180.545,146C160.485,146,140.424,146,120.364,146C100.303,146,80.242,146,60.182,146C40.121,146,20.061,146,0,146Z" />
                                        <path stroke-width="2" fill="none" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" class="chart-curve chart-area-curve" d="M0,127.6C20.061,124.533,40.121,121.467,60.182,118.4C80.242,115.333,100.303,109.2,120.364,109.2C140.424,109.2,160.485,112.267,180.545,112.267C200.606,112.267,220.667,98.978,240.727,93.867C260.788,88.756,280.848,81.6,300.909,81.6C320.97,81.6,341.03,83.9,361.091,86.2" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-dasharray="5 5" stroke-width="2" fill="transparent" fill-opacity="0.6" height="138" stroke="none" width="662" id="recharts-area-_r_2_" class="chart-curve chart-area-area" d="M361.091,86.2C381.152,81.472,401.212,76.744,421.273,72.4C441.333,68.056,461.394,60.133,481.455,60.133C501.515,60.133,521.576,66.267,541.636,66.267C561.697,66.267,581.758,57.833,601.818,52.467C621.879,47.1,641.939,40.583,662,34.067L662,146C641.939,146,621.879,146,601.818,146C581.758,146,561.697,146,541.636,146C521.576,146,501.515,146,481.455,146C461.394,146,441.333,146,421.273,146C401.212,146,381.152,146,361.091,146Z" />
                                        <path stroke-dasharray="5 5" stroke-width="2" fill="none" fill-opacity="0.6" height="138" stroke="var(--color-estimate)" width="662" class="chart-curve chart-area-curve" d="M361.091,86.2C381.152,81.472,401.212,76.744,421.273,72.4C441.333,68.056,461.394,60.133,481.455,60.133C501.515,60.133,521.576,66.267,541.636,66.267C561.697,66.267,581.758,57.833,601.818,52.467C621.879,47.1,641.939,40.583,662,34.067" />
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
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_600">
                                    <g class="chart-layer chart-area-dots">
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="0" cy="127.6" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="60.18181818181818" cy="118.4" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="120.36363636363636" cy="109.20000000000002" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="180.54545454545453" cy="112.26666666666665" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="240.72727272727272" cy="93.86666666666667" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="300.9090909090909" cy="81.6" class="chart-dot chart-area-dot" />
                                      <circle r="3" stroke-width="2" fill="var(--ui-bg)" fill-opacity="0.6" height="138" stroke="var(--color-today)" width="662" cx="361.09090909090907" cy="86.2" class="chart-dot chart-area-dot" />
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="60.18181818181818" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="60.18181818181818">2 AM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="120.36363636363636" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="120.36363636363636">4 AM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="180.54545454545453" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="180.54545454545453">6 AM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="240.72727272727272" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="240.72727272727272">8 AM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="300.9090909090909" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="300.9090909090909">10 AM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="361.09090909090907" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="361.09090909090907">Now</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="421.27272727272725" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="421.27272727272725">2 PM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="481.45454545454544" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="481.45454545454544">4 PM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="541.6363636363636" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="541.6363636363636">6 PM</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="662" stroke="none" x="645.1640625" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="645.1640625">11:59 PM</tspan>
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
                  </section>
                  <section class="bg-(--ui-bg-muted)/35 overflow-hidden rounded-[14px] border p-1 border-default">
                    <div class="grid gap-1 md:grid-cols-3">
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <div class="text-muted flex items-center gap-2 text-sm">
                          Avg revenue
                          <UIcon name="i-lucide-info" class="size-3.5" />
                        </div>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">$67.42</p>
                        </div>
                      </div>
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <p class="text-muted flex items-center gap-2 text-sm">
                          <UIcon name="i-lucide-trending-up" class="size-4" />
                          MRR
                        </p>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">$84.2K</p>
                        </div>
                      </div>
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <p class="text-muted flex items-center gap-2 text-sm">
                          <UIcon name="i-lucide-trending-up" class="size-4" />
                          ARR
                        </p>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">$1.01M</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <h2 class="text-base leading-none font-medium text-highlighted">Gross volume</h2>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 h-7 rounded-md px-2.5 text-xs" aria-label="This month" type="button" @click="openAction(&quot;This month&quot;)">
                          This month
                          <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 h-7 rounded-md px-2.5 text-xs" aria-label="Compare" type="button" @click="openAction(&quot;Compare&quot;)">
                          Compare
                          <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 h-7 rounded-md px-2.5 text-xs" aria-label="Daily" type="button" @click="openAction(&quot;Daily&quot;)">
                          Daily
                          <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-7 w-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1 p-5">
                      <div class="border-b pb-5 border-default">
                        <div class="flex flex-wrap items-end gap-x-4 gap-y-2">
                          <p class="text-primary text-3xl font-semibold tracking-normal text-highlighted">$3,528,198.72</p>
                          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 pb-1">
                            <p class="text-primary text-sm font-medium">+14.6%</p>
                            <p class="text-muted text-sm">$3,077,692.08 last month</p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5 h-[250px] min-w-0">
                        <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-previous:color-mix(in oklch, var(--ui-text-muted) 22%, var(--ui-bg));--color-current:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-previous:color-mix(in oklch, var(--ui-text-muted) 22%, var(--ui-bg));--color-current:var(--ui-primary);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="670" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 670px; height: 250px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 670 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="48" y="8" width="622" height="212" x1="48" y1="220" x2="670" y2="220" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="48" y="8" width="622" height="212" x1="48" y1="167" x2="670" y2="167" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="48" y="8" width="622" height="212" x1="48" y1="114" x2="670" y2="114" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="48" y="8" width="622" height="212" x1="48" y1="61" x2="670" y2="61" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="4 6" fill="none" x="48" y="8" width="622" height="212" x1="48" y1="8" x2="670" y2="8" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts2-clip">
                                      <rect x="48" y="8" height="212" width="622" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300">
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_3_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="48" y="137.32" width="8" height="82.68" class="chart-rectangle" d="M48,139.32A 2,2,0,0,1,50,137.32L 54,137.32A 2,2,0,0,1,
        56,139.32L 56,220L 48,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="68.0645" y="122.48" width="8" height="97.52" class="chart-rectangle" d="M68.0645,124.48A 2,2,0,0,1,70.0645,122.48L 74.0645,122.48A 2,2,0,0,1,
        76.0645,124.48L 76.0645,220L 68.0645,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="88.129" y="103.4" width="8" height="116.6" class="chart-rectangle" d="M88.129,105.4A 2,2,0,0,1,90.129,103.4L 94.129,103.4A 2,2,0,0,1,
        96.129,105.4L 96.129,220L 88.129,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="108.1935" y="73.72" width="8" height="146.28" class="chart-rectangle" d="M108.1935,75.72A 2,2,0,0,1,110.1935,73.72L 114.1935,73.72A 2,2,0,0,1,
        116.1935,75.72L 116.1935,220L 108.1935,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="128.2581" y="101.28" width="8" height="118.72" class="chart-rectangle" d="M128.2581,103.28A 2,2,0,0,1,130.2581,101.28L 134.2581,101.28A 2,2,0,0,1,
        136.2581,103.28L 136.2581,220L 128.2581,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="148.3226" y="109.76" width="8" height="110.24" class="chart-rectangle" d="M148.3226,111.76A 2,2,0,0,1,150.3226,109.76L 154.3226,109.76A 2,2,0,0,1,
        156.3226,111.76L 156.3226,220L 148.3226,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="168.3871" y="120.36" width="8" height="99.64" class="chart-rectangle" d="M168.3871,122.36A 2,2,0,0,1,170.3871,120.36L 174.3871,120.36A 2,2,0,0,1,
        176.3871,122.36L 176.3871,220L 168.3871,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="188.4516" y="58.88" width="8" height="161.12" class="chart-rectangle" d="M188.4516,60.88A 2,2,0,0,1,190.4516,58.88L 194.4516,58.88A 2,2,0,0,1,
        196.4516,60.88L 196.4516,220L 188.4516,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="208.5161" y="75.84" width="8" height="144.16" class="chart-rectangle" d="M208.5161,77.84A 2,2,0,0,1,210.5161,75.84L 214.5161,75.84A 2,2,0,0,1,
        216.5161,77.84L 216.5161,220L 208.5161,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="228.5806" y="109.76" width="8" height="110.24" class="chart-rectangle" d="M228.5806,111.76A 2,2,0,0,1,230.5806,109.76L 234.5806,109.76A 2,2,0,0,1,
        236.5806,111.76L 236.5806,220L 228.5806,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="248.6452" y="94.92" width="8" height="125.08" class="chart-rectangle" d="M248.6452,96.92A 2,2,0,0,1,250.6452,94.92L 254.6452,94.92A 2,2,0,0,1,
        256.6452,96.92L 256.6452,220L 248.6452,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="268.7097" y="73.72" width="8" height="146.28" class="chart-rectangle" d="M268.7097,75.72A 2,2,0,0,1,270.7097,73.72L 274.7097,73.72A 2,2,0,0,1,
        276.7097,75.72L 276.7097,220L 268.7097,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="288.7742" y="107.64" width="8" height="112.36" class="chart-rectangle" d="M288.7742,109.64A 2,2,0,0,1,290.7742,107.64L 294.7742,107.64A 2,2,0,0,1,
        296.7742,109.64L 296.7742,220L 288.7742,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="308.8387" y="124.6" width="8" height="95.4" class="chart-rectangle" d="M308.8387,126.6A 2,2,0,0,1,310.8387,124.6L 314.8387,124.6A 2,2,0,0,1,
        316.8387,126.6L 316.8387,220L 308.8387,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="328.9032" y="86.44" width="8" height="133.56" class="chart-rectangle" d="M328.9032,88.44A 2,2,0,0,1,330.9032,86.44L 334.9032,86.44A 2,2,0,0,1,
        336.9032,88.44L 336.9032,220L 328.9032,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="348.9677" y="58.88" width="8" height="161.12" class="chart-rectangle" d="M348.9677,60.88A 2,2,0,0,1,350.9677,58.88L 354.9677,58.88A 2,2,0,0,1,
        356.9677,60.88L 356.9677,220L 348.9677,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="369.0323" y="65.24" width="8" height="154.76" class="chart-rectangle" d="M369.0323,67.24A 2,2,0,0,1,371.0323,65.24L 375.0323,65.24A 2,2,0,0,1,
        377.0323,67.24L 377.0323,220L 369.0323,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="389.0968" y="73.72" width="8" height="146.28" class="chart-rectangle" d="M389.0968,75.72A 2,2,0,0,1,391.0968,73.72L 395.0968,73.72A 2,2,0,0,1,
        397.0968,75.72L 397.0968,220L 389.0968,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="409.1613" y="94.92" width="8" height="125.08" class="chart-rectangle" d="M409.1613,96.92A 2,2,0,0,1,411.1613,94.92L 415.1613,94.92A 2,2,0,0,1,
        417.1613,96.92L 417.1613,220L 409.1613,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="429.2258" y="120.36" width="8" height="99.64" class="chart-rectangle" d="M429.2258,122.36A 2,2,0,0,1,431.2258,120.36L 435.2258,120.36A 2,2,0,0,1,
        437.2258,122.36L 437.2258,220L 429.2258,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="449.2903" y="154.28" width="8" height="65.72" class="chart-rectangle" d="M449.2903,156.28A 2,2,0,0,1,451.2903,154.28L 455.2903,154.28A 2,2,0,0,1,
        457.2903,156.28L 457.2903,220L 449.2903,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="469.3548" y="164.88" width="8" height="55.12" class="chart-rectangle" d="M469.3548,166.88A 2,2,0,0,1,471.3548,164.88L 475.3548,164.88A 2,2,0,0,1,
        477.3548,166.88L 477.3548,220L 469.3548,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="489.4194" y="139.44" width="8" height="80.56" class="chart-rectangle" d="M489.4194,141.44A 2,2,0,0,1,491.4194,139.44L 495.4194,139.44A 2,2,0,0,1,
        497.4194,141.44L 497.4194,220L 489.4194,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="509.4839" y="54.64" width="8" height="165.36" class="chart-rectangle" d="M509.4839,56.64A 2,2,0,0,1,511.4839,54.64L 515.4839,54.64A 2,2,0,0,1,
        517.4839,56.64L 517.4839,220L 509.4839,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="529.5484" y="73.72" width="8" height="146.28" class="chart-rectangle" d="M529.5484,75.72A 2,2,0,0,1,531.5484,73.72L 535.5484,73.72A 2,2,0,0,1,
        537.5484,75.72L 537.5484,220L 529.5484,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="549.6129" y="97.04" width="8" height="122.96" class="chart-rectangle" d="M549.6129,99.04A 2,2,0,0,1,551.6129,97.04L 555.6129,97.04A 2,2,0,0,1,
        557.6129,99.04L 557.6129,220L 549.6129,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="569.6774" y="109.76" width="8" height="110.24" class="chart-rectangle" d="M569.6774,111.76A 2,2,0,0,1,571.6774,109.76L 575.6774,109.76A 2,2,0,0,1,
        577.6774,111.76L 577.6774,220L 569.6774,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="589.7419" y="80.08" width="8" height="139.92" class="chart-rectangle" d="M589.7419,82.08A 2,2,0,0,1,591.7419,80.08L 595.7419,80.08A 2,2,0,0,1,
        597.7419,82.08L 597.7419,220L 589.7419,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="609.8065" y="54.64" width="8" height="165.36" class="chart-rectangle" d="M609.8065,56.64A 2,2,0,0,1,611.8065,54.64L 615.8065,54.64A 2,2,0,0,1,
        617.8065,56.64L 617.8065,220L 609.8065,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="629.871" y="63.12" width="8" height="156.88" class="chart-rectangle" d="M629.871,65.12A 2,2,0,0,1,631.871,63.12L 635.871,63.12A 2,2,0,0,1,
        637.871,65.12L 637.871,220L 629.871,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-previous)" name="undefined" x="649.9355" y="58.88" width="8" height="161.12" class="chart-rectangle" d="M649.9355,60.88A 2,2,0,0,1,651.9355,58.88L 655.9355,58.88A 2,2,0,0,1,
        657.9355,60.88L 657.9355,220L 649.9355,220Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_4_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="60" y="164.88" width="8" height="55.12" class="chart-rectangle" d="M60,166.88A 2,2,0,0,1,62,164.88L 66,164.88A 2,2,0,0,1,
        68,166.88L 68,220L 60,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="80.0645" y="109.76" width="8" height="110.24" class="chart-rectangle" d="M80.0645,111.76A 2,2,0,0,1,82.0645,109.76L 86.0645,109.76A 2,2,0,0,1,
        88.0645,111.76L 88.0645,220L 80.0645,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="100.129" y="63.12" width="8" height="156.88" class="chart-rectangle" d="M100.129,65.12A 2,2,0,0,1,102.129,63.12L 106.129,63.12A 2,2,0,0,1,
        108.129,65.12L 108.129,220L 100.129,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="120.1935" y="107.64" width="8" height="112.36" class="chart-rectangle" d="M120.1935,109.64A 2,2,0,0,1,122.1935,107.64L 126.1935,107.64A 2,2,0,0,1,
        128.1935,109.64L 128.1935,220L 120.1935,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="140.2581" y="75.84" width="8" height="144.16" class="chart-rectangle" d="M140.2581,77.84A 2,2,0,0,1,142.2581,75.84L 146.2581,75.84A 2,2,0,0,1,
        148.2581,77.84L 148.2581,220L 140.2581,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="160.3226" y="143.68" width="8" height="76.32" class="chart-rectangle" d="M160.3226,145.68A 2,2,0,0,1,162.3226,143.68L 166.3226,143.68A 2,2,0,0,1,
        168.3226,145.68L 168.3226,220L 160.3226,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="180.3871" y="94.92" width="8" height="125.08" class="chart-rectangle" d="M180.3871,96.92A 2,2,0,0,1,182.3871,94.92L 186.3871,94.92A 2,2,0,0,1,
        188.3871,96.92L 188.3871,220L 180.3871,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="200.4516" y="86.44" width="8" height="133.56" class="chart-rectangle" d="M200.4516,88.44A 2,2,0,0,1,202.4516,86.44L 206.4516,86.44A 2,2,0,0,1,
        208.4516,88.44L 208.4516,220L 200.4516,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="220.5161" y="118.24" width="8" height="101.76" class="chart-rectangle" d="M220.5161,120.24A 2,2,0,0,1,222.5161,118.24L 226.5161,118.24A 2,2,0,0,1,
        228.5161,120.24L 228.5161,220L 220.5161,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="240.5806" y="164.88" width="8" height="55.12" class="chart-rectangle" d="M240.5806,166.88A 2,2,0,0,1,242.5806,164.88L 246.5806,164.88A 2,2,0,0,1,
        248.5806,166.88L 248.5806,220L 240.5806,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="260.6452" y="67.36" width="8" height="152.64" class="chart-rectangle" d="M260.6452,69.36A 2,2,0,0,1,262.6452,67.36L 266.6452,67.36A 2,2,0,0,1,
        268.6452,69.36L 268.6452,220L 260.6452,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="280.7097" y="160.64" width="8" height="59.36" class="chart-rectangle" d="M280.7097,162.64A 2,2,0,0,1,282.7097,160.64L 286.7097,160.64A 2,2,0,0,1,
        288.7097,162.64L 288.7097,220L 280.7097,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="300.7742" y="147.92" width="8" height="72.08" class="chart-rectangle" d="M300.7742,149.92A 2,2,0,0,1,302.7742,147.92L 306.7742,147.92A 2,2,0,0,1,
        308.7742,149.92L 308.7742,220L 300.7742,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="320.8387" y="143.68" width="8" height="76.32" class="chart-rectangle" d="M320.8387,145.68A 2,2,0,0,1,322.8387,143.68L 326.8387,143.68A 2,2,0,0,1,
        328.8387,145.68L 328.8387,220L 320.8387,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="340.9032" y="107.64" width="8" height="112.36" class="chart-rectangle" d="M340.9032,109.64A 2,2,0,0,1,342.9032,107.64L 346.9032,107.64A 2,2,0,0,1,
        348.9032,109.64L 348.9032,220L 340.9032,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="360.9677" y="80.08" width="8" height="139.92" class="chart-rectangle" d="M360.9677,82.08A 2,2,0,0,1,362.9677,80.08L 366.9677,80.08A 2,2,0,0,1,
        368.9677,82.08L 368.9677,220L 360.9677,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="381.0323" y="52.52" width="8" height="167.48" class="chart-rectangle" d="M381.0323,54.52A 2,2,0,0,1,383.0323,52.52L 387.0323,52.52A 2,2,0,0,1,
        389.0323,54.52L 389.0323,220L 381.0323,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="401.0968" y="84.32" width="8" height="135.68" class="chart-rectangle" d="M401.0968,86.32A 2,2,0,0,1,403.0968,84.32L 407.0968,84.32A 2,2,0,0,1,
        409.0968,86.32L 409.0968,220L 401.0968,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="421.1613" y="114" width="8" height="106" class="chart-rectangle" d="M421.1613,116A 2,2,0,0,1,423.1613,114L 427.1613,114A 2,2,0,0,1,
        429.1613,116L 429.1613,220L 421.1613,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="441.2258" y="171.24" width="8" height="48.76" class="chart-rectangle" d="M441.2258,173.24A 2,2,0,0,1,443.2258,171.24L 447.2258,171.24A 2,2,0,0,1,
        449.2258,173.24L 449.2258,220L 441.2258,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="461.2903" y="164.88" width="8" height="55.12" class="chart-rectangle" d="M461.2903,166.88A 2,2,0,0,1,463.2903,164.88L 467.2903,164.88A 2,2,0,0,1,
        469.2903,166.88L 469.2903,220L 461.2903,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="481.3548" y="175.48" width="8" height="44.52" class="chart-rectangle" d="M481.3548,177.48A 2,2,0,0,1,483.3548,175.48L 487.3548,175.48A 2,2,0,0,1,
        489.3548,177.48L 489.3548,220L 481.3548,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="501.4194" y="130.96" width="8" height="89.04" class="chart-rectangle" d="M501.4194,132.96A 2,2,0,0,1,503.4194,130.96L 507.4194,130.96A 2,2,0,0,1,
        509.4194,132.96L 509.4194,220L 501.4194,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="521.4839" y="63.12" width="8" height="156.88" class="chart-rectangle" d="M521.4839,65.12A 2,2,0,0,1,523.4839,63.12L 527.4839,63.12A 2,2,0,0,1,
        529.4839,65.12L 529.4839,220L 521.4839,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="541.5484" y="69.48" width="8" height="150.52" class="chart-rectangle" d="M541.5484,71.48A 2,2,0,0,1,543.5484,69.48L 547.5484,69.48A 2,2,0,0,1,
        549.5484,71.48L 549.5484,220L 541.5484,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="561.6129" y="114" width="8" height="106" class="chart-rectangle" d="M561.6129,116A 2,2,0,0,1,563.6129,114L 567.6129,114A 2,2,0,0,1,
        569.6129,116L 569.6129,220L 561.6129,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="581.6774" y="160.64" width="8" height="59.36" class="chart-rectangle" d="M581.6774,162.64A 2,2,0,0,1,583.6774,160.64L 587.6774,160.64A 2,2,0,0,1,
        589.6774,162.64L 589.6774,220L 581.6774,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="601.7419" y="90.68" width="8" height="129.32" class="chart-rectangle" d="M601.7419,92.68A 2,2,0,0,1,603.7419,90.68L 607.7419,90.68A 2,2,0,0,1,
        609.7419,92.68L 609.7419,220L 601.7419,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="621.8065" y="63.12" width="8" height="156.88" class="chart-rectangle" d="M621.8065,65.12A 2,2,0,0,1,623.8065,63.12L 627.8065,63.12A 2,2,0,0,1,
        629.8065,65.12L 629.8065,220L 621.8065,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="641.871" y="90.68" width="8" height="129.32" class="chart-rectangle" d="M641.871,92.68A 2,2,0,0,1,643.871,90.68L 647.871,90.68A 2,2,0,0,1,
        649.871,92.68L 649.871,220L 641.871,220Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-current)" name="undefined" x="661.9355" y="128.84" width="8" height="91.16" class="chart-rectangle" d="M661.9355,130.84A 2,2,0,0,1,663.9355,128.84L 667.9355,128.84A 2,2,0,0,1,
        669.9355,130.84L 669.9355,220L 661.9355,220Z" />
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
                                        <text height="30" width="622" stroke="none" x="58.03225806451613" y="236" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="58.03225806451613">May 1</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="622" stroke="none" x="198.48387096774195" y="236" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="198.48387096774195">May 8</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="622" stroke="none" x="338.9354838709678" y="236" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="338.9354838709678">May 15</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="622" stroke="none" x="479.3870967741936" y="236" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="479.3870967741936">May 22</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="622" stroke="none" x="619.8387096774194" y="236" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="619.8387096774194">May 29</tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="48" height="212" stroke="none" x="40" y="220" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="40">$0K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="48" height="212" stroke="none" x="40" y="167" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="40">$50K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="48" height="212" stroke="none" x="40" y="114" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="40">$100K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="48" height="212" stroke="none" x="40" y="61" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="40">$150K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="48" height="212" stroke="none" x="40" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="40">$200K</tspan>
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
                    <div class="flex min-h-10 flex-wrap items-center justify-between gap-4 px-3 py-2">
                      <div class="flex flex-wrap items-center gap-5 text-sm">
                        <span class="flex items-center gap-2">
                          <span class="bg-primary size-2 rounded-sm" />
                          May 1 - May 31
                        </span>
                        <span class="text-muted flex items-center gap-2">
                          <span class="bg-muted size-2 rounded-sm" />
                          Apr 1 - Apr 30
                        </span>
                      </div>
                      <div class="flex items-center gap-5">
                        <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto p-0 text-sm font-medium" aria-label="View report" type="button" @click="openAction(&quot;View report&quot;)">
                          View report
                        </UButton>
                        <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto p-0 text-sm font-medium" aria-label="View more" type="button" @click="openAction(&quot;View more&quot;)">
                          View more
                        </UButton>
                      </div>
                    </div>
                  </section>
                  <section class="text-default ring-(--ui-border)/80 border outline-none bg-default border-(--ui-border)/70 rounded-lg p-0 shadow-xs ring-0 border-default">
                    <div class="bg-(--ui-bg)/95 ring-default overflow-hidden rounded-lg ring-0">
                      <div class="flex min-h-14 items-center gap-4 px-4 py-3 max-md:flex-wrap">
                        <div class="flex shrink-0 items-center gap-2">
                          <span class="bg-muted text-highlighted grid size-8 place-items-center rounded-md">
                            <UIcon name="i-lucide-trending-up" class="size-4" />
                          </span>
                          <span class="text-sm font-medium whitespace-nowrap">Signals</span>
                        </div>
                        <div class="relative min-w-0 flex-1 overflow-hidden border-l pl-4 max-md:min-w-full max-md:border-l-0 max-md:pl-0 border-default">
                          <div class="animate-in fade-in-0 slide-in-from-right-4 min-w-0 duration-500">
                            <div class="flex min-w-0 items-baseline gap-3">
                              <span class="text-muted text-sm whitespace-nowrap">Volume pace</span>
                              <span class="text-base leading-none font-semibold tracking-normal">+12.8%</span>
                              <span class="text-muted min-w-0 truncate text-sm">Tracking above yesterday through 10 AM</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex shrink-0 items-center gap-1.5">
                          <div class="flex items-center gap-1.5">
                            <UButton color="primary" variant="solid" class="h-1.5 rounded-full transition-all duration-300 bg-(--ui-text-highlighted) w-5" aria-label="Show Volume pace insight" type="button" @click="openAction(&quot;Show Volume pace insight&quot;)" />
                            <UButton color="neutral" variant="soft" class="h-1.5 rounded-full transition-all duration-300 bg-(--ui-text-muted)/25 hover:bg-(--ui-text-muted)/50 w-1.5" aria-label="Show Payout window insight" type="button" @click="openAction(&quot;Show Payout window insight&quot;)" />
                            <UButton color="neutral" variant="soft" class="h-1.5 rounded-full transition-all duration-300 bg-(--ui-text-muted)/25 hover:bg-(--ui-text-muted)/50 w-1.5" aria-label="Show Auth quality insight" type="button" @click="openAction(&quot;Show Auth quality insight&quot;)" />
                            <UButton color="neutral" variant="soft" class="h-1.5 rounded-full transition-all duration-300 bg-(--ui-text-muted)/25 hover:bg-(--ui-text-muted)/50 w-1.5" aria-label="Show Risk watch insight" type="button" @click="openAction(&quot;Show Risk watch insight&quot;)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <h2 class="text-base leading-none font-medium text-highlighted">Top countries by volume</h2>
                      <div class="flex items-center gap-4">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9 rounded-md" aria-label="Open country volume report" type="button" @click="openAction(&quot;Open country volume report&quot;)">
                          <UIcon name="i-lucide-external-link" class="size-4" />
                          <span class="sr-only">Open country volume report</span>
                        </UButton>
                      </div>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1 p-3">
                      <div class="grid gap-3 lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]">
                        <div class="bg-(--ui-bg-muted)/20 relative grid min-h-[240px] place-items-center overflow-hidden rounded-md">
                          <svg class="h-full w-full scale-[1.12] text-[color-mix(in_oklch,var(--ui-text-muted)_58%,var(--ui-bg))] dark:text-[color-mix(in_oklch,var(--ui-text-muted)_72%,var(--ui-bg))]" viewBox="0 0 116 58.657676649772945" width="100%" height="100%">
                            <defs>
                              <style>
            @keyframes paymentMapMarkerPulse &#123;
              0% &#123; opacity: 0.9; transform: scale(1); &#125;
              50% &#123; opacity: 0.45; transform: scale(0.92); &#125;
              100% &#123; opacity: 0.9; transform: scale(1); &#125;
            &#125;
          </style>
                            </defs>
                            <circle cx="4.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="46.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="47.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="48.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="49.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="0" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="46" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="47" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="48" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="49" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="0.8660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="46.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="47.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="48.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114.5" cy="1.7320508075688772" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="46" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="47" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114" cy="2.598076211353316" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114.5" cy="3.4641016151377544" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114" cy="4.330127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="0.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="50.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="51.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114.5" cy="5.196152422706632" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="50" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="51" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114" cy="6.06217782649107" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114.5" cy="6.928203230275509" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114" cy="7.794228634059947" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="1.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="2.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="5.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="7.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="8.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="9.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="114.5" cy="8.660254037844386" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="3" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="6" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="10" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="110" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="9.526279441628825" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="4.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="11.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="10.392304845413264" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="113" cy="11.258330249197702" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="13.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112.5" cy="12.12435565298214" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="12" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="112" cy="12.990381056766578" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="111.5" cy="13.856406460551018" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="14.722431864335457" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="14.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="15.588457268119894" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="16.454482671904334" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="17.32050807568877" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="18.186533479473212" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="19.05255888325765" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="19.918584287042087" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="15.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="20.784609690826528" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="16" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="21.650635094610966" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="17.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="22.516660498395403" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="18" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="23.38268590217984" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="19.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="24.24871130596428" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="25.11473670974872" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="20.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="78.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="79.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="80.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="81.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="25.980762113533157" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="87" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="88" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="26.846787517317598" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="21.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="22.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="77.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="82.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="89.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="27.712812921102035" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="23" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="75" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="76" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="86" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="90" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="28.578838324886473" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="24.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="25.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="26.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="27.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="29.444863728670914" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="30.31088913245535" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="28.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="52.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="83.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="31.17691453623979" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="29" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="53" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="58" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="84" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="85" cy="32.042939940024226" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="54.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="55.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="56.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="57.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="59.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="60.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="32.90896534380867" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="33.77499074759311" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="91.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="34.64101615137754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="92" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="35.50704155516198" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="30.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="61.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="93.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="36.373066958946424" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="45" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="94" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="95" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="37.23909236273086" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="38.1051177665153" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="71" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="38.97114317029974" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="31.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="39.837168574084174" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="44" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="70" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="74" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="40.703193977868615" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="41.569219381653056" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="42" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="43" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="42.43524478543749" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="41.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="62.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="69.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="72.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="73.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="96.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="43.30127018922193" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="44.167295593006365" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="63.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="68.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109.5" cy="45.033320996790806" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="39" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="40" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="67" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="100" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="101" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="102" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="45.89934640057525" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="38.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="64.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="65.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="66.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="97.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="98.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="99.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="103.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="104.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="46.76537180435968" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="109" cy="47.63139720814412" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="105.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="106.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108.5" cy="48.49742261192856" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="49.363448015713" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="49.363448015713" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="49.363448015713" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="36" cy="49.363448015713" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="50.22947341949744" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="50.22947341949744" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="50.22947341949744" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="107.5" cy="50.22947341949744" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="51.09549882328188" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="51.09549882328188" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="35" cy="51.09549882328188" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="108" cy="51.09549882328188" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="51.96152422706631" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="51.96152422706631" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="51.96152422706631" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="52.827549630850754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="52.827549630850754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="52.827549630850754" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="53.693575034635195" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="53.693575034635195" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="53.693575034635195" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32" cy="54.55960043841963" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="54.55960043841963" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="54.55960043841963" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="32.5" cy="55.42562584220407" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="55.42562584220407" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="37.5" cy="55.42562584220407" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33" cy="56.29165124598851" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34" cy="56.29165124598851" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="33.5" cy="57.157676649772945" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <circle cx="34.5" cy="57.157676649772945" fill="currentColor" opacity="0.42" r="0.4" style="transition:opacity 220ms ease-out" />
                            <g style="animation:paymentMapMarkerPulse 3.2s ease-in-out 0s infinite;transform-origin:109.5px 46.76537180435968px">
                              <circle cx="109.5" cy="46.76537180435968" fill="var(--ui-primary)" fill-opacity="0.16" r="3.6799999999999997" stroke="var(--ui-primary)" stroke-width="0.28" style="transition:all 220ms ease-out" />
                              <circle cx="109.5" cy="46.76537180435968" fill="var(--ui-primary)" fill-opacity="0.94" r="1.242" stroke="var(--ui-bg)" stroke-width="0.42" style="transition:all 220ms ease-out" />
                            </g>
                            <g style="animation:paymentMapMarkerPulse 3.2s ease-in-out 0.45s infinite;transform-origin:31.5px 20.784609690826528px">
                              <circle cx="31.5" cy="20.784609690826528" fill="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" fill-opacity="0.16" r="2.848" stroke="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" stroke-width="0.28" style="transition:all 220ms ease-out" />
                              <circle cx="31.5" cy="20.784609690826528" fill="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" fill-opacity="0.94" r="0.9611999999999999" stroke="var(--ui-bg)" stroke-width="0.42" style="transition:all 220ms ease-out" />
                            </g>
                            <g style="animation:paymentMapMarkerPulse 3.2s ease-in-out 0.9s infinite;transform-origin:57px 14.722431864335457px">
                              <circle cx="57" cy="14.722431864335457" fill="color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" fill-opacity="0.16" r="2.656" stroke="color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" stroke-width="0.28" style="transition:all 220ms ease-out" />
                              <circle cx="57" cy="14.722431864335457" fill="color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" fill-opacity="0.94" r="0.8964" stroke="var(--ui-bg)" stroke-width="0.42" style="transition:all 220ms ease-out" />
                            </g>
                            <circle cx="17.5" cy="22.516660498395403" fill="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" opacity="0.62" r="0.7716000000000001" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="32" cy="19.918584287042087" fill="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" opacity="0.62" r="0.7412000000000001" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="27.5" cy="19.05255888325765" fill="color-mix(in oklch, var(--ui-primary) 82%, var(--ui-bg))" opacity="0.62" r="0.6804" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="57" cy="12.990381056766578" fill="color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" opacity="0.62" r="0.6424000000000001" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="56.5" cy="12.12435565298214" fill="color-mix(in oklch, var(--ui-primary) 64%, var(--ui-bg))" opacity="0.62" r="0.6044" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="107.5" cy="48.49742261192856" fill="var(--ui-primary)" opacity="0.62" r="0.7108000000000001" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="109.5" cy="45.033320996790806" fill="var(--ui-primary)" opacity="0.62" r="0.6272" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="58.5" cy="15.588457268119894" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.6348" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="62.5" cy="13.856406460551018" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.6196" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="76.5" cy="25.980762113533157" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.65" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="93.5" cy="34.64101615137754" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.6652" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="105" cy="21.650635094610966" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.65" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="24" cy="28.578838324886473" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.5892000000000001" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="41.5" cy="43.30127018922193" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.5968" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                            <circle cx="33.5" cy="46.76537180435968" fill="color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" opacity="0.62" r="0.5664" stroke="var(--ui-bg)" stroke-width="0.24" style="transition:all 220ms ease-out" />
                          </svg>
                        </div>
                        <div class="divide-(--ui-border)/70 grid h-full grid-rows-4 divide-y">
                          <div class="flex min-h-0 items-center">
                            <div class="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5">
                              <div class="min-w-0">
                                <p class="truncate text-xs font-semibold text-highlighted">Australia</p>
                                <p class="text-muted mt-0.5 truncate text-[11px]">482 payments</p>
                              </div>
                              <div class="text-right">
                                <p class="text-xs font-semibold tabular-nums text-highlighted">$12.8K</p>
                                <p class="text-muted text-[11px] tabular-nums">39%</p>
                              </div>
                            </div>
                          </div>
                          <div class="flex min-h-0 items-center">
                            <div class="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5">
                              <div class="min-w-0">
                                <p class="truncate text-xs font-semibold text-highlighted">United States</p>
                                <p class="text-muted mt-0.5 truncate text-[11px]">316 payments</p>
                              </div>
                              <div class="text-right">
                                <p class="text-xs font-semibold tabular-nums text-highlighted">$8.4K</p>
                                <p class="text-muted text-[11px] tabular-nums">26%</p>
                              </div>
                            </div>
                          </div>
                          <div class="flex min-h-0 items-center">
                            <div class="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5">
                              <div class="min-w-0">
                                <p class="truncate text-xs font-semibold text-highlighted">United Kingdom</p>
                                <p class="text-muted mt-0.5 truncate text-[11px]">218 payments</p>
                              </div>
                              <div class="text-right">
                                <p class="text-xs font-semibold tabular-nums text-highlighted">$5.9K</p>
                                <p class="text-muted text-[11px] tabular-nums">18%</p>
                              </div>
                            </div>
                          </div>
                          <div class="flex min-h-0 items-center">
                            <div class="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5">
                              <div class="min-w-0">
                                <p class="truncate text-xs font-semibold text-highlighted">Other countries</p>
                                <p class="text-muted mt-0.5 truncate text-[11px]">210 payments</p>
                              </div>
                              <div class="text-right">
                                <p class="text-xs font-semibold tabular-nums text-highlighted">$5.6K</p>
                                <p class="text-muted text-[11px] tabular-nums">17%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="flex min-w-0 flex-col gap-4">
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <h2 class="text-base leading-none font-medium text-highlighted">Balance</h2>
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto p-0 text-sm font-medium" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
                        View all
                      </UButton>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1">
                      <div class="px-2 pt-4 pb-5">
                        <div class="flex items-start justify-between gap-4 rounded-lg px-2 py-2">
                          <div class="min-w-0">
                            <div class="flex items-center gap-2">
                              <p class="text-sm font-medium">Available to pay out</p>
                              <UIcon name="i-lucide-info" class="text-muted size-4" />
                            </div>
                            <p class="mt-3 text-[2rem] leading-none font-semibold tracking-normal text-highlighted">$42,215.68</p>
                          </div>
                          <div class="text-muted bg-default ring-default grid size-14 shrink-0 place-items-center rounded-full ring-1">
                            <UIcon name="i-lucide-landmark" class="size-6" />
                          </div>
                        </div>
                        <div class="mx-2 mt-4 inline-flex items-center gap-2 rounded-lg bg-success/10 px-2 py-2 text-sm text-success ring-1 ring-success/10 dark:text-success">
                          <UIcon name="i-lucide-calendar-days" class="size-5 text-success/75 dark:text-success/75" />
                          Next payout tomorrow
                        </div>
                      </div>
                      <div class="text-highlighted mt-2 mb-1 space-y-1 overflow-hidden border-t px-2 py-2 border-default">
                        <div class="relative grid cursor-default grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-lg px-2 py-2 text-sm outline-hidden select-none">
                          <div class="grid size-9 place-items-center rounded-lg">
                            <UIcon name="i-lucide-dollar-sign" class="text-muted size-5 shrink-0" />
                          </div>
                          <div class="min-w-0">
                            <div class="mb-2 flex items-center justify-between gap-3">
                              <p class="text-sm font-medium">USD</p>
                              <p class="text-sm font-medium">$32,124.52</p>
                            </div>
                            <div class="flex items-center gap-3">
                              <div class="bg-muted h-1.5 min-w-0 flex-1 overflow-hidden rounded-full">
                                <div class="bg-(--ui-text-highlighted) h-full rounded-full" style="width:78%" />
                              </div>
                              <span class="text-muted ml-auto text-xs tracking-widest">78%</span>
                            </div>
                          </div>
                        </div>
                        <div class="relative grid cursor-default grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-lg px-2 py-2 text-sm outline-hidden select-none">
                          <div class="grid size-9 place-items-center rounded-lg">
                            <UIcon name="i-lucide-euro" class="text-muted size-5 shrink-0" />
                          </div>
                          <div class="min-w-0">
                            <div class="mb-2 flex items-center justify-between gap-3">
                              <p class="text-sm font-medium">EUR</p>
                              <p class="text-sm font-medium">€9,280.74</p>
                            </div>
                            <div class="flex items-center gap-3">
                              <div class="bg-muted h-1.5 min-w-0 flex-1 overflow-hidden rounded-full">
                                <div class="bg-(--ui-text-highlighted) h-full rounded-full" style="width:22%" />
                              </div>
                              <span class="text-muted ml-auto text-xs tracking-widest">22%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="px-2 py-2">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-10 w-full justify-center rounded-lg px-2 py-2 text-sm shadow-none" aria-label="View all balances" type="button" @click="openAction(&quot;View all balances&quot;)">
                          View all balances
                          <UIcon name="i-lucide-arrow-right" class="text-muted size-5" />
                        </UButton>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <h2 class="text-base leading-none font-medium text-highlighted">Recent payments</h2>
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto p-0 text-sm font-medium" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
                        View all
                      </UButton>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1 p-5">
                      <div class="divide-y">
                        <div class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Jenny Rosen" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-2">
                            <p class="truncate text-sm font-medium">Jenny Rosen</p>
                            <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-success/10 text-success dark:bg-success/10 dark:text-success">
                              Succeeded
                            </UBadge>
                          </div>
                          <div class="flex min-w-[7.75rem] flex-col items-end gap-2">
                            <div class="flex items-center gap-2">
                              <span class="border-default bg-default text-muted rounded border px-1.5 py-0.5 text-[0.65rem] font-semibold">VISA</span>
                              <span class="text-muted text-sm">•••• 4242</span>
                            </div>
                            <p class="text-muted truncate text-xs">Today, 9:41 AM</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Robert Fox" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-2">
                            <p class="truncate text-sm font-medium">Robert Fox</p>
                            <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-success/10 text-success dark:bg-success/10 dark:text-success">
                              Succeeded
                            </UBadge>
                          </div>
                          <div class="flex min-w-[7.75rem] flex-col items-end gap-2">
                            <div class="flex items-center gap-2">
                              <span class="border-default bg-default text-muted rounded border px-1.5 py-0.5 text-[0.65rem] font-semibold">MC</span>
                              <span class="text-muted text-sm">•••• 4444</span>
                            </div>
                            <p class="text-muted truncate text-xs">Today, 9:32 AM</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Wade Warren" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-2">
                            <p class="truncate text-sm font-medium">Wade Warren</p>
                            <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-success/10 text-success dark:bg-success/10 dark:text-success">
                              Succeeded
                            </UBadge>
                          </div>
                          <div class="flex min-w-[7.75rem] flex-col items-end gap-2">
                            <div class="flex items-center gap-2">
                              <span class="border-default bg-default text-muted rounded border px-1.5 py-0.5 text-[0.65rem] font-semibold">AMEX</span>
                              <span class="text-muted text-sm">•••• 8431</span>
                            </div>
                            <p class="text-muted truncate text-xs">Today, 9:21 AM</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Esther Howard" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-2">
                            <p class="truncate text-sm font-medium">Esther Howard</p>
                            <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-(--ui-error)/10 text-error">
                              Failed
                            </UBadge>
                          </div>
                          <div class="flex min-w-[7.75rem] flex-col items-end gap-2">
                            <div class="flex items-center gap-2">
                              <span class="border-default bg-default text-muted rounded border px-1.5 py-0.5 text-[0.65rem] font-semibold">VISA</span>
                              <span class="text-muted text-sm">•••• 4242</span>
                            </div>
                            <p class="text-muted truncate text-xs">Today, 9:02 AM</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 py-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-2">
                            <p class="truncate text-sm font-medium">Cameron Williamson</p>
                            <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-success/10 text-success dark:bg-success/10 dark:text-success">
                              Succeeded
                            </UBadge>
                          </div>
                          <div class="flex min-w-[7.75rem] flex-col items-end gap-2">
                            <div class="flex items-center gap-2">
                              <span class="border-default bg-default text-muted rounded border px-1.5 py-0.5 text-[0.65rem] font-semibold">MC</span>
                              <span class="text-muted text-sm">•••• 5555</span>
                            </div>
                            <p class="text-muted truncate text-xs">Today, 8:47 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-(--ui-bg-muted)/35 text-default ring-(--ui-border)/80 rounded-2xl border p-1 shadow-none ring-1 outline-none border-default">
                    <div class="flex h-12 items-center justify-between gap-2 px-3">
                      <h2 class="min-w-0 truncate text-base leading-none font-medium text-highlighted">Dispute resolution</h2>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-sm" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                        Details
                      </UButton>
                    </div>
                    <div class="bg-(--ui-bg)/95 ring-default rounded-xl ring-1 p-4">
                      <div>
                        <div class="flex items-center justify-between gap-4">
                          <div>
                            <p class="text-muted text-xs">Resolution health</p>
                            <p class="mt-1 text-2xl font-semibold tracking-normal text-highlighted">
                              86
                              <span class="text-muted text-base">/100</span>
                            </p>
                          </div>
                        </div>
                        <p class="text-muted mt-2 text-xs">4 open disputes, 1 urgent response due today.</p>
                        <div class="mt-3 grid shrink-0 grid-cols-36 gap-1.5">
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-warning" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-warning" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-error" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-success" />
                          <span class="h-5 rounded-sm bg-muted" />
                          <span class="h-5 rounded-sm bg-muted" />
                        </div>
                        <div class="mt-3 grid grid-cols-3 gap-3 border-t pt-3 border-default">
                          <div>
                            <p class="text-muted text-xs">Coverage</p>
                            <p class="mt-1 text-sm font-semibold text-highlighted">92%</p>
                          </div>
                          <div>
                            <p class="text-muted text-xs">Win rate</p>
                            <p class="mt-1 text-sm font-semibold text-highlighted">74%</p>
                          </div>
                          <div>
                            <p class="text-muted text-xs">At risk</p>
                            <p class="mt-1 text-sm font-semibold text-highlighted">$3.2K</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
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
