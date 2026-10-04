<!-- Page: /payment-processor/invoice-list | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Invoice List · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-list">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="mx-auto w-full max-w-7xl min-w-0 px-6 py-7 sm:px-8 lg:px-10">
              <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap items-center gap-5">
                  <h1 class="text-highlighted text-[26px] leading-8 font-semibold tracking-tight text-highlighted">Invoice Overview</h1>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 text-muted hover:bg-muted hover:text-highlighted h-8 gap-2 px-2 text-sm font-medium" aria-label="Last 6 months" type="button" @click="openAction(&quot;Last 6 months&quot;)">
                    Last 6 months
                    <UIcon name="i-lucide-chevron-down" class="size-4" />
                  </UButton>
                </div>
                <div class="grid gap-8 md:grid-cols-[210px_1px_1fr] md:items-center">
                  <div>
                    <div class="flex items-baseline gap-4">
                      <div class="text-highlighted text-xl font-semibold tracking-tight">$5,679</div>
                      <div class="text-muted text-sm font-semibold">Open this month</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-border) hidden h-6 md:block" />
                  <div>
                    <div class="flex items-baseline gap-4">
                      <div class="text-highlighted text-xl font-semibold tracking-tight">$24,478</div>
                      <div class="text-muted text-sm font-semibold">Total invoiced</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Card 1: 030k60k90k120k150kJanFebMarAprMayJunPaidOpenOverdue -->
              <UCard class="ring-default mt-7 overflow-hidden rounded-xl px-4 pt-4 pb-4 ring-1 sm:px-5" :ui="{ body: 'contents' }">
                <div class="overflow-x-auto">
                  <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                  <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[248px] w-[620px] sm:w-full" style=";--color-paid:color-mix(in oklch, var(--ui-text-highlighted) 96%, var(--ui-bg));--color-open:color-mix(in oklch, var(--ui-text-highlighted) 28%, var(--ui-bg));--color-overdue:color-mix(in oklch, var(--ui-text-highlighted) 18%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                    <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                    <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-paid:color-mix(in oklch, var(--ui-text-highlighted) 96%, var(--ui-bg));--color-open:color-mix(in oklch, var(--ui-text-highlighted) 28%, var(--ui-bg));--color-overdue:color-mix(in oklch, var(--ui-text-highlighted) 18%, var(--ui-bg));width:100%;height:248px;min-width:0" role="img" aria-label="Analytics chart">
                      <div style="width:0;height:0;overflow:visible">
                        <div width="1064" height="248" class="chart-wrapper" style="position: relative; cursor: default; width: 1064px; height: 248px;">
                          <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 1064 248" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                            <title />
                            <desc />
                            <g class="chart-zIndex-layer_-100">
                              <g class="chart-cartesian-grid">
                                <g class="chart-cartesian-grid-horizontal">
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="218" x2="1056" y2="218" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="178.625" x2="1056" y2="178.625" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="139.25" x2="1056" y2="139.25" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="99.875" x2="1056" y2="99.875" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="60.5" x2="1056" y2="60.5" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="21.125" x2="1056" y2="21.125" />
                                  <line stroke-dasharray="3 3" stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" fill="none" x="44" y="8" width="1012" height="210" x1="44" y1="8" x2="1056" y2="8" />
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_-50" />
                            <defs>
                              <clipPath id="recharts1-clip">
                                <rect x="44" y="8" height="210" width="1012" />
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
                                        <path fill="var(--color-paid)" name="undefined" x="101.3467" y="120.875" width="53" height="97.125" class="chart-rectangle" d="M101.3467,120.875L 154.3467,120.875L 154.3467,215A 3,3,0,0,1,
        151.3467,218L 104.3467,218A 3,3,0,0,1,
        101.3467,215Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-paid)" name="undefined" x="270.0133" y="98.5625" width="53" height="119.4375" class="chart-rectangle" d="M270.0133,98.5625L 323.0133,98.5625L 323.0133,215A 3,3,0,0,1,
        320.0133,218L 273.0133,218A 3,3,0,0,1,
        270.0133,215Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-paid)" name="undefined" x="438.68" y="170.75" width="53" height="47.25" class="chart-rectangle" d="M438.68,170.75L 491.68,170.75L 491.68,215A 3,3,0,0,1,
        488.68,218L 441.68,218A 3,3,0,0,1,
        438.68,215Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-paid)" name="undefined" x="607.3467" y="110.375" width="53" height="107.625" class="chart-rectangle" d="M607.3467,110.375L 660.3467,110.375L 660.3467,215A 3,3,0,0,1,
        657.3467,218L 610.3467,218A 3,3,0,0,1,
        607.3467,215Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-paid)" name="undefined" x="776.0133" y="63.125" width="53" height="154.875" class="chart-rectangle" d="M776.0133,63.125L 829.0133,63.125L 829.0133,215A 3,3,0,0,1,
        826.0133,218L 779.0133,218A 3,3,0,0,1,
        776.0133,215Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-paid)" name="undefined" x="944.68" y="128.75" width="53" height="89.25" class="chart-rectangle" d="M944.68,128.75L 997.68,128.75L 997.68,215A 3,3,0,0,1,
        994.68,218L 947.68,218A 3,3,0,0,1,
        944.68,215Z" />
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
                                        <path fill="var(--color-open)" name="undefined" x="101.3467" y="89.375" width="53" height="31.5" class="chart-rectangle" d="M 101.3467,89.375 h 53 v 31.5 h -53 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-open)" name="undefined" x="270.0133" y="48.6875" width="53" height="49.875" class="chart-rectangle" d="M 270.0133,48.6875 h 53 v 49.875 h -53 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-open)" name="undefined" x="438.68" y="97.25" width="53" height="73.5" class="chart-rectangle" d="M 438.68,97.25 h 53 v 73.5 h -53 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-open)" name="undefined" x="607.3467" y="85.4375" width="53" height="24.9375" class="chart-rectangle" d="M 607.3467,85.4375 h 53 v 24.9375 h -53 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-open)" name="undefined" x="776.0133" y="22.4375" width="53" height="40.6875" class="chart-rectangle" d="M 776.0133,22.4375 h 53 v 40.6875 h -53 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-open)" name="undefined" x="944.68" y="71" width="53" height="57.75" class="chart-rectangle" d="M 944.68,71 h 53 v 57.75 h -53 Z" />
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
                                        <path fill="var(--color-overdue)" name="undefined" x="101.3467" y="81.5" width="53" height="7.875" class="chart-rectangle" d="M101.3467,84.5A 3,3,0,0,1,104.3467,81.5L 151.3467,81.5A 3,3,0,0,1,
        154.3467,84.5L 154.3467,89.375L 101.3467,89.375Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-overdue)" name="undefined" x="270.0133" y="36.875" width="53" height="11.8125" class="chart-rectangle" d="M270.0133,39.875A 3,3,0,0,1,273.0133,36.875L 320.0133,36.875A 3,3,0,0,1,
        323.0133,39.875L 323.0133,48.6875L 270.0133,48.6875Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-overdue)" name="undefined" x="438.68" y="80.1875" width="53" height="17.0625" class="chart-rectangle" d="M438.68,83.1875A 3,3,0,0,1,441.68,80.1875L 488.68,80.1875A 3,3,0,0,1,
        491.68,83.1875L 491.68,97.25L 438.68,97.25Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-overdue)" name="undefined" x="607.3467" y="78.875" width="53" height="6.5625" class="chart-rectangle" d="M607.3467,81.875A 3,3,0,0,1,610.3467,78.875L 657.3467,78.875A 3,3,0,0,1,
        660.3467,81.875L 660.3467,85.4375L 607.3467,85.4375Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-overdue)" name="undefined" x="776.0133" y="13.25" width="53" height="9.1875" class="chart-rectangle" d="M776.0133,16.25A 3,3,0,0,1,779.0133,13.25L 826.0133,13.25A 3,3,0,0,1,
        829.0133,16.25L 829.0133,22.4375L 776.0133,22.4375Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-overdue)" name="undefined" x="944.68" y="56.5625" width="53" height="14.4375" class="chart-rectangle" d="M944.68,59.5625A 3,3,0,0,1,947.68,56.5625L 994.68,56.5625A 3,3,0,0,1,
        997.68,59.5625L 997.68,71L 944.68,71Z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_400" />
                            <g class="chart-zIndex-layer_500">
                              <g class="chart-layer chart-cartesian-axis chart-yAxis yAxis">
                                <g class="chart-cartesian-axis-ticks chart-yAxis-ticks">
                                  <g class="chart-cartesian-axis-tick-lines chart-yAxis-tick-lines">
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                  </g>
                                </g>
                              </g>
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
                              <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="218" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">0</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="178.625" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">30k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="139.25" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">60k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="99.875" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">90k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="60.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">120k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="210" stroke="none" x="36" y="21.125" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">150k</tspan>
                                  </text>
                                </g>
                              </g>
                              <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="128.33333333333331" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="128.33333333333331">Jan</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="297" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="297">Feb</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="465.66666666666663" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="465.66666666666663">Mar</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="634.3333333333334" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="634.3333333333334">Apr</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="803" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="803">May</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="1012" stroke="none" x="971.6666666666666" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="971.6666666666666">Jun</tspan>
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
                <div class="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  <div class="text-muted flex items-center gap-2 text-xs font-medium">
                    <span class="size-2.5 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 96%, var(--ui-bg))" />
                    Paid
                  </div>
                  <div class="text-muted flex items-center gap-2 text-xs font-medium">
                    <span class="size-2.5 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 28%, var(--ui-bg))" />
                    Open
                  </div>
                  <div class="text-muted flex items-center gap-2 text-xs font-medium">
                    <span class="size-2.5 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))" />
                    Overdue
                  </div>
                </div>
              </UCard>
              <div class="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <h2 class="text-highlighted text-xl font-semibold tracking-tight text-highlighted">This month</h2>
                  <span class="text-muted text-sm font-medium">Unpaid invoices</span>
                  <span class="text-sm font-semibold text-warning dark:text-warning">$5,679</span>
                  <span class="text-muted text-sm font-medium">Draft value</span>
                  <span class="text-highlighted text-sm font-semibold">$1,950</span>
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-sm font-semibold shadow-none" aria-label="New Invoice" type="button" @click="openAction(&quot;New Invoice&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                  New Invoice
                </UButton>
              </div>
              <div class="mt-7">
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Pro blocks license</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7184</div>
                  </div>
                  <div class="text-muted font-medium">Northline Studio</div>
                  <div class="font-semibold text-highlighted">Due Aug 12</div>
                  <div class="text-highlighted font-semibold md:text-right">$2,499.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Admin kit integration</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7183</div>
                  </div>
                  <div class="text-muted font-medium">Vela Design Co.</div>
                  <div class="font-semibold text-success dark:text-success">Settled Jul 28</div>
                  <div class="text-highlighted font-semibold md:text-right">$8,400.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Template migration</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7182</div>
                  </div>
                  <div class="text-muted font-medium">Harborline Apps</div>
                  <div class="font-semibold text-warning dark:text-warning">6 days past due</div>
                  <div class="text-highlighted font-semibold md:text-right">$3,180.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Duplicate component order</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7181</div>
                  </div>
                  <div class="text-muted font-medium">Pollen Interface</div>
                  <div class="font-semibold text-muted">Voided Jul 19</div>
                  <div class="text-highlighted font-semibold md:text-right">$899.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Figma kit handoff</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7180</div>
                  </div>
                  <div class="text-muted font-medium">Argent Labs</div>
                  <div class="font-semibold text-secondary dark:text-secondary">Draft saved</div>
                  <div class="text-highlighted font-semibold md:text-right">$1,950.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
              </div>
              <div class="mt-7 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <h2 class="text-highlighted text-xl font-semibold tracking-tight text-highlighted">Previous</h2>
                <span class="text-muted text-sm font-medium">Open invoices</span>
                <span class="text-highlighted text-sm font-semibold">$2,750</span>
              </div>
              <div class="mt-4">
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Lifetime access bundle</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7179</div>
                  </div>
                  <div class="text-muted font-medium">Cedar UI Works</div>
                  <div class="font-semibold text-success dark:text-success">Settled Jun 30</div>
                  <div class="text-highlighted font-semibold md:text-right">$6,800.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
                <div class="border-default grid min-h-14 grid-cols-1 items-center gap-2 border-b py-3 text-sm last:border-b-0 md:grid-cols-[1.2fr_1fr_150px_130px_32px]">
                  <div class="min-w-0">
                    <div class="text-highlighted font-semibold">Private block request</div>
                    <div class="text-muted mt-0.5 text-xs font-medium">INV-7178</div>
                  </div>
                  <div class="text-muted font-medium">North Pier Digital</div>
                  <div class="font-semibold text-warning dark:text-warning">14 days past due</div>
                  <div class="text-highlighted font-semibold md:text-right">$2,750.00</div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-muted hover:text-highlighted size-8 justify-self-start rounded-md md:justify-self-end" aria-label="Invoice actions" type="button" @click="openAction(&quot;Invoice actions&quot;)">
                    <span class="sr-only">Invoice actions</span>
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
              </div>
            </section>
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
