<!-- Page: /ecommerce/dashboard-5 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 5 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-5">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:p-4 md:p-6">
                <div class="flex flex-col gap-4 xl:flex-row">
                  <!-- Card 1: $276,000.00 -->
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
                            <div width="650" height="280" class="chart-wrapper" style="position: relative; cursor: default; width: 650px; height: 280px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 650 280" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="600" height="240" x1="45" y1="245" x2="645" y2="245" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="600" height="240" x1="45" y1="185" x2="645" y2="185" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="600" height="240" x1="45" y1="125" x2="645" y2="125" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="600" height="240" x1="45" y1="65" x2="645" y2="65" />
                                      <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="600" height="240" x1="45" y1="5" x2="645" y2="5" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="45" y="5" height="240" width="600" />
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
                                            <path fill="var(--color-thisYear)" name="undefined" x="62.5" y="77" width="24" height="168" class="chart-rectangle" d="M62.5,81A 4,4,0,0,1,66.5,77L 82.5,77A 4,4,0,0,1,
        86.5,81L 86.5,245L 62.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="162.5" y="93" width="24" height="152" class="chart-rectangle" d="M162.5,97A 4,4,0,0,1,166.5,93L 182.5,93A 4,4,0,0,1,
        186.5,97L 186.5,245L 162.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="262.5" y="37" width="24" height="208" class="chart-rectangle" d="M262.5,41A 4,4,0,0,1,266.5,37L 282.5,37A 4,4,0,0,1,
        286.5,41L 286.5,245L 262.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="362.5" y="65" width="24" height="180" class="chart-rectangle" d="M362.5,69A 4,4,0,0,1,366.5,65L 382.5,65A 4,4,0,0,1,
        386.5,69L 386.5,245L 362.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="462.5" y="13" width="24" height="232" class="chart-rectangle" d="M462.5,17A 4,4,0,0,1,466.5,13L 482.5,13A 4,4,0,0,1,
        486.5,17L 486.5,245L 462.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-thisYear)" name="undefined" x="562.5" y="81" width="24" height="164" class="chart-rectangle" d="M562.5,85A 4,4,0,0,1,566.5,81L 582.5,81A 4,4,0,0,1,
        586.5,85L 586.5,245L 562.5,245Z" />
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
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="103.5" y="93" width="24" height="152" class="chart-rectangle" d="M103.5,97A 4,4,0,0,1,107.5,93L 123.5,93A 4,4,0,0,1,
        127.5,97L 127.5,245L 103.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="203.5" y="65" width="24" height="180" class="chart-rectangle" d="M203.5,69A 4,4,0,0,1,207.5,65L 223.5,65A 4,4,0,0,1,
        227.5,69L 227.5,245L 203.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="303.5" y="81" width="24" height="164" class="chart-rectangle" d="M303.5,85A 4,4,0,0,1,307.5,81L 323.5,81A 4,4,0,0,1,
        327.5,85L 327.5,245L 303.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="403.5" y="53" width="24" height="192" class="chart-rectangle" d="M403.5,57A 4,4,0,0,1,407.5,53L 423.5,53A 4,4,0,0,1,
        427.5,57L 427.5,245L 403.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="503.5" y="69" width="24" height="176" class="chart-rectangle" d="M503.5,73A 4,4,0,0,1,507.5,69L 523.5,69A 4,4,0,0,1,
        527.5,73L 527.5,245L 503.5,245Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-prevYear)" fill-opacity="0.4" name="undefined" x="603.5" y="37" width="24" height="208" class="chart-rectangle" d="M603.5,41A 4,4,0,0,1,607.5,37L 623.5,37A 4,4,0,0,1,
        627.5,41L 627.5,245L 603.5,245Z" />
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
                                      <text height="30" width="600" stroke="none" x="95" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="95">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="600" stroke="none" x="195" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="195">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="600" stroke="none" x="295" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="295">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="600" stroke="none" x="395" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="395">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="600" stroke="none" x="495" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="495">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="600" stroke="none" x="595" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="595">Jun</tspan>
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
                  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:w-[420px] xl:grid-cols-2">
                    <!-- Card 2: $1,800,000.00 -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Total Revenue</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Total Revenue" type="button" @click="openAction(&quot;More options for Total Revenue&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">$1,800,000.00</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-success dark:text-success">+12.0%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                    <!-- Card 3: 2.4 days -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Avg. Fulfillment</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Avg. Fulfillment" type="button" @click="openAction(&quot;More options for Avg. Fulfillment&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">2.4 days</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-error dark:text-error">-5.0%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                    <!-- Card 4: 9,420 -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Orders</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Orders" type="button" @click="openAction(&quot;More options for Orders&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">9,420</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-success dark:text-success">+18.0%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                    <!-- Card 5: 4.2% -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Conversion Rate</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Conversion Rate" type="button" @click="openAction(&quot;More options for Conversion Rate&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">4.2%</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-success dark:text-success">+1.2%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                    <!-- Card 6: 3.1% -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Return Rate</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Return Rate" type="button" @click="openAction(&quot;More options for Return Rate&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">3.1%</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-success dark:text-success">-11.0%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                    <!-- Card 7: 184K -->
                    <UCard class="flex flex-col rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                      <div class="flex items-start justify-between">
                        <span class="text-muted text-xs sm:text-sm">Page Views</span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted -mt-1 -mr-2 size-6" aria-label="More options for Page Views" type="button" @click="openAction(&quot;More options for Page Views&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                        </UButton>
                      </div>
                      <span class="mt-3 text-lg font-semibold tracking-tight sm:text-xl">184K</span>
                      <div class="mt-1 flex items-center gap-2 text-[10px] sm:text-xs">
                        <span class="font-medium text-success dark:text-success">+22.0%</span>
                        <span class="text-muted">vs last month</span>
                      </div>
                    </UCard>
                  </div>
                </div>
                <div class="flex flex-col gap-4 xl:flex-row">
                  <!-- Card 8: Category Performance -->
                  <UCard class="flex min-w-0 flex-1 flex-col gap-4 rounded-xl p-5" :ui="{ body: 'contents' }">
                    <div class="flex flex-wrap items-start justify-between gap-2">
                      <div class="flex flex-col gap-1">
                        <h2 class="text-sm font-medium text-pretty text-highlighted">Category Performance</h2>
                        <span class="text-2xl font-bold tracking-tight">11,308</span>
                        <div class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:var(--ui-primary)" />
                            <span class="text-muted text-[10px]">Electronics</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                            <span class="text-muted text-[10px]">Clothing</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                            <span class="text-muted text-[10px]">Home &amp; Garden</span>
                          </div>
                          <div class="flex items-center gap-1.5">
                            <div class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 40%, var(--ui-bg))" />
                            <span class="text-muted text-[10px]">Sports</span>
                          </div>
                        </div>
                      </div>
                      <div class="bg-(--ui-bg-muted)/50 flex items-center gap-0.5 rounded-lg border p-0.5 border-default">
                        <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1 text-xs font-medium transition-colors bg-default text-highlighted shadow-sm" aria-label="Week" type="button" @click="openAction(&quot;Week&quot;)">
                          Week
                        </UButton>
                        <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Month" type="button" @click="openAction(&quot;Month&quot;)">
                          Month
                        </UButton>
                      </div>
                    </div>
                    <div class="h-[240px] w-full min-w-0 sm:h-[280px]">
                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-electronics:var(--ui-primary);--color-clothing:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-homeGarden:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-sports:color-mix(in oklch, var(--ui-text-highlighted) 40%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
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
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts2-clip">
                                    <rect x="37" y="5" height="240" width="616" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-electronics)" stroke-width="2" fill="none" id="recharts-line-_r_2_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="704.6572875976562px 704.6572875976562px" d="M37,201.8C71.222,173,105.444,144.2,139.667,144.2C173.889,144.2,208.111,177.8,242.333,177.8C276.556,177.8,310.778,113,345,113C379.222,113,413.444,167.48,447.667,167.48C481.889,167.48,516.111,129.8,550.333,129.8C584.556,129.8,618.778,161,653,192.2" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-clothing)" stroke-width="2" fill="none" id="recharts-line-_r_3_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="741.7188720703125px 741.7188720703125px" d="M37,192.2C71.222,152.6,105.444,113,139.667,113C173.889,113,208.111,143,242.333,153.8C276.556,164.6,310.778,177.8,345,177.8C379.222,177.8,413.444,70.04,447.667,70.04C481.889,70.04,516.111,144.2,550.333,144.2C584.556,144.2,618.778,128.6,653,113" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-homeGarden)" stroke-width="2" fill="none" id="recharts-line-_r_4_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="655.2px 655.2000122070312px" d="M37,177.8C71.222,170.6,105.444,163.4,139.667,153.8C173.889,144.2,208.111,120.2,242.333,120.2C276.556,120.2,310.778,144.2,345,144.2C379.222,144.2,413.444,123.56,447.667,123.56C481.889,123.56,516.111,177.8,550.333,177.8C584.556,177.8,618.778,157.4,653,137" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-sports)" stroke-width="2" fill="none" id="recharts-line-_r_5_" height="240" width="616" class="chart-curve chart-line-curve" stroke-dasharray="644.669189453125px 644.669189453125px" d="M37,161C71.222,169.4,105.444,177.8,139.667,177.8C173.889,177.8,208.111,150.6,242.333,137C276.556,123.4,310.778,96.2,345,96.2C379.222,96.2,413.444,117.8,447.667,127.4C481.889,137,516.111,147,550.333,153.8C584.556,160.6,618.778,164.4,653,168.2" />
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
                  <!-- Card 9: Order Fulfillment -->
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
