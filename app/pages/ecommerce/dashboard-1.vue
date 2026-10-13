<!-- Page: /ecommerce/dashboard-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
// Keep this SFC in LF: HTML normalizes CRLF inside multiline SVG attributes.
const route = useRoute()

useHead({ title: "Dashboard 1 · Blocks Admin" })

// @copy:dashboard-actions:start
import { reactive } from 'vue'

const toast = useToast()

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
// @copy:dashboard-actions:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/dashboard-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex w-full flex-1 flex-col overflow-hidden">
              <NuxtLink class="focus:bg-default focus:text-highlighted focus:ring-accented sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:ring-2" to="#dashboard-main">
                Skip to main content
              </NuxtLink>
              <main id="dashboard-main" class="bg-default w-full flex-1 space-y-4 overflow-auto p-3 sm:space-y-6 sm:p-4 md:p-6">
                <!-- Card 1: $189,540.75 -->
                <UCard data-copy-block="commerce-metrics" tabindex="0" class="grid grid-cols-2 gap-3 rounded-xl p-4 sm:gap-4 sm:p-5 lg:grid-cols-4 lg:gap-6 lg:p-6" :ui="{ body: 'contents' }">
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
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
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
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
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
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
                    </div>
                    <div class="bg-(--ui-border) mx-4 hidden h-full w-px lg:block xl:mx-6" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex-1 space-y-1 sm:space-y-2 lg:space-y-3">
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
                    </div>
                  </div>
                </UCard>
                <div class="flex flex-col gap-4 sm:gap-6 xl:flex-row">
                  <!-- Card 2: Total Revenue -->
                  <UCard data-copy-block="commerce-revenue" tabindex="0" class="flex min-w-0 flex-1 flex-col rounded-xl" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center justify-between border-b px-4 sm:px-5 border-default">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Revenue" type="button" @click="openAction(&quot;Revenue&quot;)">
                          <UIcon name="i-lucide-chart-column" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Total Revenue</h2>
                      </div>
                      <div class="flex items-center gap-3 sm:gap-5">
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-[10px] sm:text-xs">This Year</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">Prev Year</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                      <div class="flex flex-col gap-1">
                        <p class="text-xl leading-tight font-semibold tracking-tight sm:text-2xl text-highlighted">$633,000.00</p>
                        <p class="text-muted text-[10px] tracking-wider uppercase sm:text-xs">This year vs last year</p>
                      </div>
                      <div class="h-[200px] w-full min-w-0 sm:h-[240px] lg:h-[280px]">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-prevYear:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-thisYear:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-prevYear:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-thisYear:var(--ui-primary);width:100%;height:280px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="660" height="280" class="chart-wrapper" style="position: relative; cursor: default; width: 660px; height: 280px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 660 280" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="610" height="240" x1="45" y1="245" x2="655" y2="245" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="610" height="240" x1="45" y1="185" x2="655" y2="185" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="610" height="240" x1="45" y1="125" x2="655" y2="125" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="610" height="240" x1="45" y1="65" x2="655" y2="65" />
                                        <line stroke-dasharray="0" stroke="var(--ui-text-dimmed)" fill="none" x="45" y="5" width="610" height="240" x1="45" y1="5" x2="655" y2="5" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="45" y="5" height="240" width="610" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100">
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-width="1.5" fill="var(--color-prevYear)" fill-opacity="0.08" height="240" stroke="none" width="610" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M45,131L100.455,110L155.909,122L211.364,101L266.818,113L322.273,89L377.727,104L433.182,86L488.636,98L544.091,71L599.545,89L655,62L655,245L599.545,245L544.091,245L488.636,245L433.182,245L377.727,245L322.273,245L266.818,245L211.364,245L155.909,245L100.455,245L45,245Z" />
                                        <path stroke-width="1.5" fill="none" fill-opacity="0.08" height="240" stroke="var(--color-prevYear)" width="610" class="chart-curve chart-area-curve" d="M45,131L100.455,110L155.909,122L211.364,101L266.818,113L322.273,89L377.727,104L433.182,86L488.636,98L544.091,71L599.545,89L655,62" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-thisYear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" id="recharts-line-_r_0_" height="240" width="610" class="chart-curve chart-line-curve" stroke-dasharray="712.1213px 712.121337890625px" d="M45,119L100.455,131L155.909,89L211.364,110L266.818,71L322.273,122L377.727,80L433.182,101L488.636,59L544.091,83L599.545,44L655,32" />
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
                                  <g class="chart-zIndex-layer_600">
                                    <g class="chart-layer chart-line-dots">
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="45" cy="119" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="100.45454545454545" cy="131" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="155.9090909090909" cy="89" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="211.36363636363637" cy="110" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="266.8181818181818" cy="71" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="322.27272727272725" cy="122.00000000000001" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="377.72727272727275" cy="80" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="433.1818181818182" cy="101" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="488.6363636363636" cy="58.99999999999999" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="544.090909090909" cy="82.99999999999999" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="599.5454545454545" cy="43.99999999999999" class="chart-dot chart-line-dot" />
                                      <circle r="2" stroke="var(--color-thisYear)" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-thisYear)" height="240" width="610" cx="655" cy="32.000000000000014" class="chart-dot chart-line-dot" />
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="45" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="45">Jan</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="100.45454545454545" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="100.45454545454545">Feb</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="155.9090909090909" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="155.9090909090909">Mar</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="211.36363636363637" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="211.36363636363637">Apr</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="266.8181818181818" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="266.8181818181818">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="322.27272727272725" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="322.27272727272725">Jun</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="377.72727272727275" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="377.72727272727275">Jul</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="433.1818181818182" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="433.1818181818182">Aug</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="488.6363636363636" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="488.6363636363636">Sep</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="544.090909090909" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="544.090909090909">Oct</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="599.5454545454545" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="599.5454545454545">Nov</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="610" stroke="none" x="650.6171875" y="261" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="650.6171875">Dec</tspan>
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
                                          <tspan x="32">$20K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="240" stroke="none" x="32" y="125" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$40K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="240" stroke="none" x="32" y="65" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$60K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="40" height="240" stroke="none" x="32" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="32">$80K</tspan>
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
                  <!-- Card 3: Revenue by Channel -->
                  <UCard data-copy-block="commerce-channels" tabindex="0" class="flex min-w-0 flex-col rounded-xl xl:w-[410px]" :ui="{ body: 'contents' }">
                    <div class="flex h-14 items-center justify-between border-b px-4 sm:px-5 border-default">
                      <div class="flex items-center gap-2.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7 sm:size-8" aria-label="Revenue by Channel" type="button" @click="openAction(&quot;Revenue by Channel&quot;)">
                          <UIcon name="i-lucide-chart-column" class="text-muted size-4 sm:size-[18px]" />
                        </UButton>
                        <h2 class="text-sm font-medium text-pretty sm:text-base text-highlighted">Revenue by Channel</h2>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2 p-4 sm:p-5">
                      <div class="flex flex-wrap items-center gap-3 sm:gap-5">
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:var(--ui-primary)" />
                          <span class="text-muted text-[10px] sm:text-xs">Online</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">In-Store</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 55%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">Wholesale</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="size-2 rounded-full sm:size-2.5" style="background-color:color-mix(in oklch, var(--ui-primary) 40%, var(--ui-bg))" />
                          <span class="text-muted text-[10px] sm:text-xs">Marketplace</span>
                        </div>
                      </div>
                      <div class="h-[240px] w-full min-w-0 sm:h-[280px]">
                        <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-online:var(--ui-primary);--color-inStore:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-wholesale:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-marketplace:color-mix(in oklch, var(--ui-text-highlighted) 40%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                          <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-online:var(--ui-primary);--color-inStore:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));--color-wholesale:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-marketplace:color-mix(in oklch, var(--ui-text-highlighted) 40%, var(--ui-bg));width:100%;height:280px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="368" height="280" class="chart-wrapper" style="position: relative; cursor: default; width: 368px; height: 280px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 368 280" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100" />
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts2-clip">
                                      <rect x="27" y="0" height="250" width="341" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300">
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_2_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="8" width="119.35" height="24" class="chart-rectangle" d="M27,12A 4,4,0,0,1,31,8L 146.35,8L 146.35,32L 31,32A 4,4,0,0,1,
        27,28Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="49.6667" width="107.9833" height="24" class="chart-rectangle" d="M27,53.6667A 4,4,0,0,1,31,49.6667L 134.9833,49.6667L 134.9833,73.6667L 31,73.6667A 4,4,0,0,1,
        27,69.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="91.3333" width="144.925" height="24" class="chart-rectangle" d="M27,95.3333A 4,4,0,0,1,31,91.3333L 171.925,91.3333L 171.925,115.3333L 31,115.3333A 4,4,0,0,1,
        27,111.3333Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="133" width="127.875" height="24" class="chart-rectangle" d="M27,137A 4,4,0,0,1,31,133L 154.875,133L 154.875,157L 31,157A 4,4,0,0,1,
        27,153Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="174.6667" width="164.8167" height="24" class="chart-rectangle" d="M27,178.6667A 4,4,0,0,1,31,174.6667L 191.8167,174.6667L 191.8167,198.6667L 31,198.6667A 4,4,0,0,1,
        27,194.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-online)" name="undefined" x="27" y="216.3333" width="176.1833" height="24" class="chart-rectangle" d="M27,220.3333A 4,4,0,0,1,31,216.3333L 203.1833,216.3333L 203.1833,240.3333L 31,240.3333A 4,4,0,0,1,
        27,236.3333Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_3_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="146.35" y="8" width="51.15" height="24" class="chart-rectangle" d="M146.35,8L 197.5,8L 197.5,32L 146.35,32Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="134.9833" y="49.6667" width="59.675" height="24" class="chart-rectangle" d="M134.9833,49.6667L 194.6583,49.6667L 194.6583,73.6667L 134.9833,73.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="171.925" y="91.3333" width="53.9917" height="24" class="chart-rectangle" d="M171.925,91.3333L 225.9167,91.3333L 225.9167,115.3333L 171.925,115.3333Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="154.875" y="133" width="62.5167" height="24" class="chart-rectangle" d="M154.875,133L 217.3917,133L 217.3917,157L 154.875,157Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="191.8167" y="174.6667" width="68.2" height="24" class="chart-rectangle" d="M191.8167,174.6667L 260.0167,174.6667L 260.0167,198.6667L 191.8167,198.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-inStore)" name="undefined" x="203.1833" y="216.3333" width="56.8333" height="24" class="chart-rectangle" d="M203.1833,216.3333L 260.0167,216.3333L 260.0167,240.3333L 203.1833,240.3333Z" />
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
                                              <path fill="var(--color-wholesale)" name="undefined" x="197.5" y="8" width="34.1" height="24" class="chart-rectangle" d="M197.5,8L 231.6,8L 231.6,32L 197.5,32Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-wholesale)" name="undefined" x="194.6583" y="49.6667" width="39.7833" height="24" class="chart-rectangle" d="M194.6583,49.6667L 234.4417,49.6667L 234.4417,73.6667L 194.6583,73.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-wholesale)" name="undefined" x="225.9167" y="91.3333" width="31.2583" height="24" class="chart-rectangle" d="M225.9167,91.3333L 257.175,91.3333L 257.175,115.3333L 225.9167,115.3333Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-wholesale)" name="undefined" x="217.3917" y="133" width="42.625" height="24" class="chart-rectangle" d="M217.3917,133L 260.0167,133L 260.0167,157L 217.3917,157Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-wholesale)" name="undefined" x="260.0167" y="174.6667" width="36.9417" height="24" class="chart-rectangle" d="M260.0167,174.6667L 296.9583,174.6667L 296.9583,198.6667L 260.0167,198.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-wholesale)" name="undefined" x="260.0167" y="216.3333" width="45.4667" height="24" class="chart-rectangle" d="M260.0167,216.3333L 305.4833,216.3333L 305.4833,240.3333L 260.0167,240.3333Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_5_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="231.6" y="8" width="22.7333" height="24" class="chart-rectangle" d="M231.6,8L 250.3333,8A 4,4,0,0,1,
        254.3333,12L 254.3333,28A 4,4,0,0,1,
        250.3333,32L 231.6,32Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="234.4417" y="49.6667" width="26.9958" height="24" class="chart-rectangle" d="M234.4417,49.6667L 257.4375,49.6667A 4,4,0,0,1,
        261.4375,53.6667L 261.4375,69.6667A 4,4,0,0,1,
        257.4375,73.6667L 234.4417,73.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="257.175" y="91.3333" width="20.46" height="24" class="chart-rectangle" d="M257.175,91.3333L 273.635,91.3333A 4,4,0,0,1,
        277.635,95.3333L 277.635,111.3333A 4,4,0,0,1,
        273.635,115.3333L 257.175,115.3333Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="260.0167" y="133" width="30.69" height="24" class="chart-rectangle" d="M260.0167,133L 286.7067,133A 4,4,0,0,1,
        290.7067,137L 290.7067,153A 4,4,0,0,1,
        286.7067,157L 260.0167,157Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="296.9583" y="174.6667" width="32.6792" height="24" class="chart-rectangle" d="M296.9583,174.6667L 325.6375,174.6667A 4,4,0,0,1,
        329.6375,178.6667L 329.6375,194.6667A 4,4,0,0,1,
        325.6375,198.6667L 296.9583,198.6667Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-marketplace)" name="undefined" x="305.4833" y="216.3333" width="34.9525" height="24" class="chart-rectangle" d="M305.4833,216.3333L 336.4358,216.3333A 4,4,0,0,1,
        340.4358,220.3333L 340.4358,236.3333A 4,4,0,0,1,
        336.4358,240.3333L 305.4833,240.3333Z" />
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
                                        <text height="30" width="341" stroke="none" x="27" y="258" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="27">$0</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="341" stroke="none" x="112.25" y="258" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="112.25">$30K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="341" stroke="none" x="197.5" y="258" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="197.5">$60K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="341" stroke="none" x="282.75" y="258" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="282.75">$90K</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="341" stroke="none" x="353.1953125" y="258" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="353.1953125">$120K</tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="20.833333333333332" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">Jan</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="62.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">Feb</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="104.16666666666666" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">Mar</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="145.83333333333334" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">Apr</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="187.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="36" height="250" stroke="none" x="19" y="229.16666666666666" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="19">Jun</tspan>
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
                <div class="grid gap-4 lg:grid-cols-3">
                  <!-- Card 4: $959.00 -->
                  <UCard data-copy-block="commerce-order-value" tabindex="0" class="flex flex-col gap-3 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex min-h-[64px] items-start justify-between gap-3">
                      <div class="flex items-start gap-3">
                        <div class="bg-(--ui-bg-muted)/40 flex size-8 items-center justify-center rounded-md border border-default">
                          <UIcon name="i-lucide-circle-dollar-sign" class="text-muted size-4" />
                        </div>
                        <div class="space-y-1">
                          <p class="text-muted text-xs font-medium">Average Order Value</p>
                          <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span class="text-highlighted text-lg font-semibold">$959.00</span>
                            <span class="flex items-center gap-1 text-xs font-medium text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              2.4%
                            </span>
                            <span class="text-muted text-[10px] sm:text-xs">vs last month</span>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Average Order Value actions" type="button" @click="openAction(&quot;Average Order Value actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="min-h-[144px] w-full flex-1">
                      <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-value:var(--ui-primary);--color-reference:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);--color-reference:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:215px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="326" height="215" class="chart-wrapper" style="position: relative; cursor: default; width: 326px; height: 215px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 326 215" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke-dasharray="4 4" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="316" height="205" x1="5" y1="158.75" x2="321" y2="158.75" />
                                      <line stroke-dasharray="4 4" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="316" height="205" x1="5" y1="107.5" x2="321" y2="107.5" />
                                      <line stroke-dasharray="4 4" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="316" height="205" x1="5" y1="56.25" x2="321" y2="56.25" />
                                      <line stroke-dasharray="4 4" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="316" height="205" x1="5" y1="5" x2="321" y2="5" />
                                      <line stroke-dasharray="4 4" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="316" height="205" x1="5" y1="210" x2="321" y2="210" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts3-clip">
                                    <rect x="5" y="5" height="205" width="316" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300">
                                  <g class="chart-layer chart-bar" id="recharts-bar-_r_6_">
                                    <g class="chart-layer chart-bar-rectangles">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="6.1286" y="110.4286" width="9" height="99.5714" class="chart-rectangle" d="M6.1286,114.4286A 4,4,0,0,1,10.1286,110.4286L 11.1286,110.4286A 4,4,0,0,1,
        15.1286,114.4286L 15.1286,210L 6.1286,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="17.4143" y="75.2857" width="9" height="134.7143" class="chart-rectangle" d="M17.4143,79.2857A 4,4,0,0,1,21.4143,75.2857L 22.4143,75.2857A 4,4,0,0,1,
        26.4143,79.2857L 26.4143,210L 17.4143,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="28.7" y="98.7143" width="9" height="111.2857" class="chart-rectangle" d="M28.7,102.7143A 4,4,0,0,1,32.7,98.7143L 33.7,98.7143A 4,4,0,0,1,
        37.7,102.7143L 37.7,210L 28.7,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="39.9857" y="57.7143" width="9" height="152.2857" class="chart-rectangle" d="M39.9857,61.7143A 4,4,0,0,1,43.9857,57.7143L 44.9857,57.7143A 4,4,0,0,1,
        48.9857,61.7143L 48.9857,210L 39.9857,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="51.2714" y="89.9286" width="9" height="120.0714" class="chart-rectangle" d="M51.2714,93.9286A 4,4,0,0,1,55.2714,89.9286L 56.2714,89.9286A 4,4,0,0,1,
        60.2714,93.9286L 60.2714,210L 51.2714,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="62.5571" y="37.2143" width="9" height="172.7857" class="chart-rectangle" d="M62.5571,41.2143A 4,4,0,0,1,66.5571,37.2143L 67.5571,37.2143A 4,4,0,0,1,
        71.5571,41.2143L 71.5571,210L 62.5571,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="73.8429" y="104.5714" width="9" height="105.4286" class="chart-rectangle" d="M73.8429,108.5714A 4,4,0,0,1,77.8429,104.5714L 78.8429,104.5714A 4,4,0,0,1,
        82.8429,108.5714L 82.8429,210L 73.8429,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="85.1286" y="66.5" width="9" height="143.5" class="chart-rectangle" d="M85.1286,70.5A 4,4,0,0,1,89.1286,66.5L 90.1286,66.5A 4,4,0,0,1,
        94.1286,70.5L 94.1286,210L 85.1286,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="96.4143" y="46" width="9" height="164" class="chart-rectangle" d="M96.4143,50A 4,4,0,0,1,100.4143,46L 101.4143,46A 4,4,0,0,1,
        105.4143,50L 105.4143,210L 96.4143,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="107.7" y="101.6429" width="9" height="108.3571" class="chart-rectangle" d="M107.7,105.6429A 4,4,0,0,1,111.7,101.6429L 112.7,101.6429A 4,4,0,0,1,
        116.7,105.6429L 116.7,210L 107.7,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="118.9857" y="69.4286" width="9" height="140.5714" class="chart-rectangle" d="M118.9857,73.4286A 4,4,0,0,1,122.9857,69.4286L 123.9857,69.4286A 4,4,0,0,1,
        127.9857,73.4286L 127.9857,210L 118.9857,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="130.2714" y="51.8571" width="9" height="158.1429" class="chart-rectangle" d="M130.2714,55.8571A 4,4,0,0,1,134.2714,51.8571L 135.2714,51.8571A 4,4,0,0,1,
        139.2714,55.8571L 139.2714,210L 130.2714,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="141.5571" y="107.5" width="9" height="102.5" class="chart-rectangle" d="M141.5571,111.5A 4,4,0,0,1,145.5571,107.5L 146.5571,107.5A 4,4,0,0,1,
        150.5571,111.5L 150.5571,210L 141.5571,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="152.8429" y="72.3571" width="9" height="137.6429" class="chart-rectangle" d="M152.8429,76.3571A 4,4,0,0,1,156.8429,72.3571L 157.8429,72.3571A 4,4,0,0,1,
        161.8429,76.3571L 161.8429,210L 152.8429,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="164.1286" y="34.2857" width="9" height="175.7143" class="chart-rectangle" d="M164.1286,38.2857A 4,4,0,0,1,168.1286,34.2857L 169.1286,34.2857A 4,4,0,0,1,
        173.1286,38.2857L 173.1286,210L 164.1286,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="175.4143" y="84.0714" width="9" height="125.9286" class="chart-rectangle" d="M175.4143,88.0714A 4,4,0,0,1,179.4143,84.0714L 180.4143,84.0714A 4,4,0,0,1,
        184.4143,88.0714L 184.4143,210L 175.4143,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="186.7" y="95.7857" width="9" height="114.2143" class="chart-rectangle" d="M186.7,99.7857A 4,4,0,0,1,190.7,95.7857L 191.7,95.7857A 4,4,0,0,1,
        195.7,99.7857L 195.7,210L 186.7,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="197.9857" y="40.1429" width="9" height="169.8571" class="chart-rectangle" d="M197.9857,44.1429A 4,4,0,0,1,201.9857,40.1429L 202.9857,40.1429A 4,4,0,0,1,
        206.9857,44.1429L 206.9857,210L 197.9857,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="209.2714" y="89.9286" width="9" height="120.0714" class="chart-rectangle" d="M209.2714,93.9286A 4,4,0,0,1,213.2714,89.9286L 214.2714,89.9286A 4,4,0,0,1,
        218.2714,93.9286L 218.2714,210L 209.2714,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="220.5571" y="48.9286" width="9" height="161.0714" class="chart-rectangle" d="M220.5571,52.9286A 4,4,0,0,1,224.5571,48.9286L 225.5571,48.9286A 4,4,0,0,1,
        229.5571,52.9286L 229.5571,210L 220.5571,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="231.8429" y="66.5" width="9" height="143.5" class="chart-rectangle" d="M231.8429,70.5A 4,4,0,0,1,235.8429,66.5L 236.8429,66.5A 4,4,0,0,1,
        240.8429,70.5L 240.8429,210L 231.8429,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="243.1286" y="98.7143" width="9" height="111.2857" class="chart-rectangle" d="M243.1286,102.7143A 4,4,0,0,1,247.1286,98.7143L 248.1286,98.7143A 4,4,0,0,1,
        252.1286,102.7143L 252.1286,210L 243.1286,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="254.4143" y="25.5" width="9" height="184.5" class="chart-rectangle" d="M254.4143,29.5A 4,4,0,0,1,258.4143,25.5L 259.4143,25.5A 4,4,0,0,1,
        263.4143,29.5L 263.4143,210L 254.4143,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="265.7" y="81.1429" width="9" height="128.8571" class="chart-rectangle" d="M265.7,85.1429A 4,4,0,0,1,269.7,81.1429L 270.7,81.1429A 4,4,0,0,1,
        274.7,85.1429L 274.7,210L 265.7,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="276.9857" y="43.0714" width="9" height="166.9286" class="chart-rectangle" d="M276.9857,47.0714A 4,4,0,0,1,280.9857,43.0714L 281.9857,43.0714A 4,4,0,0,1,
        285.9857,47.0714L 285.9857,210L 276.9857,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="288.2714" y="69.4286" width="9" height="140.5714" class="chart-rectangle" d="M288.2714,73.4286A 4,4,0,0,1,292.2714,69.4286L 293.2714,69.4286A 4,4,0,0,1,
        297.2714,73.4286L 297.2714,210L 288.2714,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="299.5571" y="31.3571" width="9" height="178.6429" class="chart-rectangle" d="M299.5571,35.3571A 4,4,0,0,1,303.5571,31.3571L 304.5571,31.3571A 4,4,0,0,1,
        308.5571,35.3571L 308.5571,210L 299.5571,210Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-value)" fill-opacity="1" name="undefined" x="310.8429" y="51.8571" width="9" height="158.1429" class="chart-rectangle" d="M310.8429,55.8571A 4,4,0,0,1,314.8429,51.8571L 315.8429,51.8571A 4,4,0,0,1,
        319.8429,55.8571L 319.8429,210L 310.8429,210Z" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-reference-line">
                                    <line y="958.5714285714286" stroke="var(--color-reference)" stroke-dasharray="4 4" fill="none" fill-opacity="1" stroke-width="1" x1="5" y1="69.63775510204083" x2="321" y2="69.63775510204083" class="chart-reference-line-line" />
                                  </g>
                                </g>
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
                    </div>
                    <div class="text-muted flex min-h-[20px] items-center justify-between text-[10px] sm:text-xs">
                      <span>Feb 01</span>
                      <span>Feb 28</span>
                    </div>
                  </UCard>
                  <!-- Card 5: 837 -->
                  <UCard data-copy-block="commerce-sales" tabindex="0" class="flex flex-col gap-3 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex min-h-[64px] items-start justify-between gap-3">
                      <div class="flex items-start gap-3">
                        <div class="bg-(--ui-bg-muted)/40 flex size-8 items-center justify-center rounded-md border border-default">
                          <UIcon name="i-lucide-chart-column" class="text-muted size-4" />
                        </div>
                        <div class="space-y-1">
                          <p class="text-muted text-xs font-medium">Average Sales</p>
                          <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span class="text-highlighted text-lg font-semibold">837</span>
                            <span class="flex items-center gap-1 text-xs font-medium text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                              1.3%
                            </span>
                            <span class="text-muted text-[10px] sm:text-xs">vs last month</span>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Average Sales actions" type="button" @click="openAction(&quot;Average Sales actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="text-muted flex min-h-[20px] items-center gap-4 overflow-x-auto text-[10px] whitespace-nowrap sm:text-xs">
                      <span class="flex items-center gap-1">
                        <span class="size-2 rounded-full" style="background-color:var(--ui-primary)" />
                        This month
                      </span>
                      <span class="flex items-center gap-1">
                        <span class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 75%, var(--ui-bg))" />
                        Last month
                      </span>
                    </div>
                    <div class="min-h-[144px] w-full flex-1">
                      <!-- Chart 7: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-thisMonth:var(--ui-primary);--color-lastMonth:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 8: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-thisMonth:var(--ui-primary);--color-lastMonth:color-mix(in oklch, var(--ui-text-highlighted) 75%, var(--ui-bg));width:100%;height:183px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="326" height="183" class="chart-wrapper" style="position: relative; cursor: default; width: 326px; height: 183px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 326 183" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100" />
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts4-clip">
                                    <rect x="5" y="5" height="173" width="316" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-thisMonth)" stroke-width="2" fill="none" id="recharts-line-_r_7_" height="173" width="316" class="chart-curve chart-line-curve" stroke-dasharray="373.30035400390625px 373.30035400390625px" d="M5,85.733C8.901,79.967,12.802,74.2,16.704,74.2C20.605,74.2,24.506,79.967,28.407,79.967C32.309,79.967,36.21,73.96,40.111,71.317C44.012,68.674,47.914,66.031,51.815,64.108C55.716,62.186,59.617,59.783,63.519,59.783C67.42,59.783,71.321,65.55,75.222,68.433C79.123,71.317,83.025,77.083,86.926,77.083C90.827,77.083,94.728,69.154,98.63,65.55C102.531,61.946,106.432,55.458,110.333,55.458C114.235,55.458,118.136,56.9,122.037,58.342C125.938,59.783,129.84,62.426,133.741,64.108C137.642,65.79,141.543,66.751,145.444,68.433C149.346,70.115,153.247,74.2,157.148,74.2C161.049,74.2,164.951,66.511,168.852,62.667C172.753,58.822,176.654,51.133,180.556,51.133C184.457,51.133,188.358,55.458,192.259,56.9C196.16,58.342,200.062,59.783,203.963,59.783C207.864,59.783,211.765,55.939,215.667,54.017C219.568,52.094,223.469,48.25,227.37,48.25C231.272,48.25,235.173,52.575,239.074,52.575C242.975,52.575,246.877,48.731,250.778,46.808C254.679,44.886,258.58,42.724,262.481,41.042C266.383,39.36,270.284,37.918,274.185,36.717C278.086,35.515,281.988,34.794,285.889,33.833C289.79,32.872,293.691,30.95,297.593,30.95C301.494,30.95,305.395,36.717,309.296,36.717C313.198,36.717,317.099,32.392,321,28.067" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-lastMonth)" stroke-width="2" fill="none" id="recharts-line-_r_8_" height="173" width="316" class="chart-curve chart-line-curve" stroke-dasharray="344.416px 344.4160461425781px" d="M5,97.267C8.901,94.383,12.802,91.5,16.704,91.5C20.605,91.5,24.506,92.942,28.407,92.942C32.309,92.942,36.21,89.818,40.111,88.617C44.012,87.415,47.914,87.656,51.815,85.733C55.716,83.811,59.617,77.083,63.519,77.083C67.42,77.083,71.321,81.168,75.222,82.85C79.123,84.532,83.025,87.175,86.926,87.175C90.827,87.175,94.728,86.214,98.63,84.292C102.531,82.369,106.432,76.122,110.333,74.2C114.235,72.278,118.136,71.317,122.037,71.317C125.938,71.317,129.84,75.642,133.741,77.083C137.642,78.525,141.543,79.006,145.444,79.967C149.346,80.928,153.247,82.85,157.148,82.85C161.049,82.85,164.951,80.447,168.852,78.525C172.753,76.603,176.654,71.317,180.556,71.317C184.457,71.317,188.358,74.681,192.259,75.642C196.16,76.603,200.062,77.083,203.963,77.083C207.864,77.083,211.765,74.2,215.667,72.758C219.568,71.317,223.469,68.433,227.37,68.433C231.272,68.433,235.173,71.317,239.074,71.317C242.975,71.317,246.877,67.472,250.778,65.55C254.679,63.628,258.58,61.465,262.481,59.783C266.383,58.101,270.284,56.66,274.185,55.458C278.086,54.257,281.988,53.536,285.889,52.575C289.79,51.614,293.691,49.692,297.593,49.692C301.494,49.692,305.395,54.017,309.296,54.017C313.198,54.017,317.099,51.133,321,48.25" />
                                    </g>
                                  </g>
                                </g>
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
                    </div>
                    <div class="text-muted flex min-h-[20px] items-center justify-between text-[10px] sm:text-xs">
                      <span>Feb 01</span>
                      <span>Feb 28</span>
                    </div>
                  </UCard>
                  <!-- Card 6: 38% -->
                  <UCard data-copy-block="commerce-categories" tabindex="0" class="flex flex-col gap-3 rounded-xl p-4 sm:p-5" :ui="{ body: 'contents' }">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="bg-(--ui-bg-muted)/40 flex size-8 items-center justify-center rounded-md border border-default">
                          <UIcon name="i-lucide-package" class="text-muted size-4" />
                        </div>
                        <span class="text-sm font-medium">Product Categories</span>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Product categories actions" type="button" @click="openAction(&quot;Product categories actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="flex flex-1 items-center justify-center gap-4 sm:gap-6">
                      <div class="relative size-[170px] shrink-0 sm:size-[190px]">
                        <!-- Chart 9: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style="" role="img" aria-label="Analytics chart">
                          <!-- Chart 10: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;width:100%;height:190px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="190" height="190" class="chart-wrapper" style="position: relative; cursor: default; width: 190px; height: 190px;">
                                <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 190 190" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100" />
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts5-clip">
                                      <rect x="5" y="5" height="180" width="180" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100">
                                    <g class="chart-layer chart-pie">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-pie-sector">
                                          <g class="chart-layer chart-shape">
                                            <path cx="95" cy="95" fill="var(--ui-primary)" class="chart-sector" d="M 156.2,95
    A 61.2,61.2,0,
    0,0,
    53.8591,49.6915
  L 72.0095,69.6805
            A 34.2,34.2,0,
            0,1,
            129.2,95 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-pie-sector">
                                          <g class="chart-layer chart-shape">
                                            <path cx="95" cy="95" fill="color-mix(in oklch, var(--ui-primary) 80%, var(--ui-bg))" class="chart-sector" d="M 51.5442,51.9067
    A 61.2,61.2,0,
    0,0,
    55.0107,141.3281
  L 72.653,120.8892
            A 34.2,34.2,0,
            0,1,
            70.7159,70.9185 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-pie-sector">
                                          <g class="chart-layer chart-shape">
                                            <path cx="95" cy="95" fill="color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))" class="chart-sector" d="M 57.4901,143.3575
    A 61.2,61.2,0,
    0,0,
    130.3474,144.96
  L 114.753,122.9188
            A 34.2,34.2,0,
            0,1,
            74.0386,122.0233 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-pie-sector">
                                          <g class="chart-layer chart-shape">
                                            <path cx="95" cy="95" fill="color-mix(in oklch, var(--ui-primary) 42%, var(--ui-bg))" class="chart-sector" d="M 132.9137,143.0416
    A 61.2,61.2,0,
    0,0,
    156.1161,98.203
  L 129.1531,96.7899
            A 34.2,34.2,0,
            0,1,
            116.1871,121.8467 Z" />
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
                          <span class="text-lg font-semibold">38%</span>
                          <span class="text-muted text-[9px]">Electronics</span>
                        </div>
                      </div>
                      <div class="flex flex-col gap-2.5">
                        <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent p-0 text-left transition-opacity focus-visible:ring-2 focus-visible:outline-none" aria-label="Electronics38%" type="button" @click="openAction(&quot;Electronics38%&quot;)">
                          <div class="h-4 w-1 shrink-0 rounded-sm" style="background-color:var(--ui-primary)" />
                          <span class="text-muted flex-1 text-xs">Electronics</span>
                          <span class="text-xs font-semibold tabular-nums">38%</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent p-0 text-left transition-opacity focus-visible:ring-2 focus-visible:outline-none" aria-label="Clothing27%" type="button" @click="openAction(&quot;Clothing27%&quot;)">
                          <div class="h-4 w-1 shrink-0 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 80%, var(--ui-bg))" />
                          <span class="text-muted flex-1 text-xs">Clothing</span>
                          <span class="text-xs font-semibold tabular-nums">27%</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent p-0 text-left transition-opacity focus-visible:ring-2 focus-visible:outline-none" aria-label="Home &amp; Garden21%" type="button" @click="openAction(&quot;Home & Garden21%&quot;)">
                          <div class="h-4 w-1 shrink-0 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))" />
                          <span class="text-muted flex-1 text-xs">Home &amp; Garden</span>
                          <span class="text-xs font-semibold tabular-nums">21%</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent p-0 text-left transition-opacity focus-visible:ring-2 focus-visible:outline-none" aria-label="Sports14%" type="button" @click="openAction(&quot;Sports14%&quot;)">
                          <div class="h-4 w-1 shrink-0 rounded-sm" style="background-color:color-mix(in oklch, var(--ui-primary) 42%, var(--ui-bg))" />
                          <span class="text-muted flex-1 text-xs">Sports</span>
                          <span class="text-xs font-semibold tabular-nums">14%</span>
                        </UButton>
                      </div>
                    </div>
                    <div class="text-muted text-[10px] sm:text-xs">Last 28 days</div>
                  </UCard>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page-local action dialog -->
    <UModal data-copy-fragment="dashboard-actions" v-model:open="actionDialog.open" :title="actionDialog.title" description="Update the details below.">
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
    <BlockCopyTools page="/ecommerce/dashboard-1" />
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

/* @copy:charts:start */
.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
/* @copy:charts:end */
</style>
