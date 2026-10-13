<!-- Page: /developers/overview | Native developer analytics with consistent, local example data. -->
<script setup lang="ts">
useHead({ title: 'Overview · Blocks Admin' })

// @copy:overview-chart-state:start
import { computed, ref } from 'vue'

const environment = ref('Production')
const period = ref('All 6 weeks')
const environmentOptions = ['Production', 'Development']
const periodOptions = ['All 6 weeks', 'Last 3 weeks']
const weekLabels = ['24 Aug', '31 Aug', '07 Sep', '14 Sep', '21 Sep', '28 Sep']
const selectedWeekLabels = computed(() => period.value === 'Last 3 weeks' ? weekLabels.slice(-3) : weekLabels)
function selectWeeks(values: number[]) {
  return period.value === 'Last 3 weeks' ? values.slice(-3) : values
}
function chartX(index: number, count: number) {
  return 30 + index * 300 / Math.max(1, count - 1)
}
function chartY(value: number, values: number[]) {
  return 150 - value / Math.max(1, ...values) * 110
}
function chartPoints(values: number[]) {
  return values.map((value, index) => `${chartX(index, values.length)},${chartY(value, values)}`).join(' ')
}
// @copy:overview-chart-state:end

// @copy:overview-request-data:start
const requestSeries = computed(() => selectWeeks(environment.value === 'Production' ? [32, 22, 42, 34, 70, 76] : [8, 6, 10, 12, 14, 18]))
const failedSeries = computed(() => selectWeeks(environment.value === 'Production' ? [1, 0, 1, 1, 2, 1] : [0, 1, 0, 0, 1, 0]))
const failedRequests = computed(() => failedSeries.value.reduce((sum, value) => sum + value, 0))
const successfulRequests = computed(() => requestSeries.value.reduce((sum, value) => sum + value, 0) - failedRequests.value)
const requestTrend = computed(() => {
  const values = requestSeries.value
  const previous = values[values.length - 2] || 1
  return ((values[values.length - 1]! - previous) / previous * 100).toFixed(1)
})
// @copy:overview-request-data:end

// @copy:overview-response-data:start
const responseSeries = computed(() => selectWeeks(environment.value === 'Production' ? [350, 190, 460, 142, 220, 200] : [180, 160, 220, 140, 170, 150]))
const responseMin = computed(() => Math.min(...responseSeries.value))
const responseMax = computed(() => Math.max(...responseSeries.value))
const responseAverage = computed(() => Math.round(responseSeries.value.reduce((sum, value) => sum + value, 0) / responseSeries.value.length))
const responseChange = computed(() => responseSeries.value.at(-1)! - responseSeries.value.at(-2)!)
// @copy:overview-response-data:end

// @copy:overview-visitor-data:start
const visitorDevice = ref('Desktop')
const desktopVisitors = computed(() => selectWeeks(environment.value === 'Production' ? [3200, 3900, 4200, 4528, 4300, 4700] : [120, 160, 180, 210, 190, 240]))
const mobileVisitors = computed(() => selectWeeks(environment.value === 'Production' ? [3500, 3800, 4100, 4500, 4410, 4700] : [90, 110, 140, 150, 170, 200]))
const visitorSeries = computed(() => visitorDevice.value === 'Desktop' ? desktopVisitors.value : mobileVisitors.value)
const desktopTotal = computed(() => desktopVisitors.value.reduce((sum, value) => sum + value, 0))
const mobileTotal = computed(() => mobileVisitors.value.reduce((sum, value) => sum + value, 0))
function formatVisitors(value: number) {
  return value.toLocaleString('en-US')
}
// @copy:overview-visitor-data:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/overview">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
          <div class="space-y-1"><h1 class="text-2xl font-bold text-highlighted">Web Overview</h1><p class="text-sm text-muted">Example developer analytics. No external metrics or APIs are connected.</p></div>
          <div data-copy-fragment="overview-filters" class="flex flex-wrap gap-3"><USelect v-model="environment" :items="environmentOptions" aria-label="Overview environment" class="w-40" /><USelect v-model="period" :items="periodOptions" aria-label="Overview time period" class="w-40" /></div>
        </header>
        <p class="text-xs text-muted">Fixed sample: weekly data from 24 August to 4 October 2026. The environment and period update all three charts; recent activities are separate demonstration content.</p>
        <div class="grid min-w-0 items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div class="grid min-w-0 gap-6 md:grid-cols-2">
            <UCard data-copy-block="developer-request-metrics" tabindex="0" aria-label="API request metrics" class="min-w-0">
              <template #header><h2 class="font-semibold text-highlighted">API requests</h2><p class="mt-1 text-xs text-muted">{{ environment }} · {{ selectedWeekLabels.length }} weeks</p></template>
              <dl class="mb-4 flex flex-wrap gap-6 text-sm"><div><dt class="text-xs text-muted">Successful</dt><dd class="font-semibold text-highlighted" data-overview-success>{{ successfulRequests }}</dd></div><div><dt class="text-xs text-muted">Failed</dt><dd class="font-semibold text-highlighted" data-overview-failed>{{ failedRequests }}</dd></div></dl>
              <svg viewBox="0 0 360 195" role="img" :aria-label="`Total requests per week: ${requestSeries.join(', ')}`" class="block w-full text-primary">
                <line v-for="y in [40, 95, 150]" :key="y" x1="30" x2="330" :y1="y" :y2="y" stroke="var(--ui-border)" />
                <polyline :points="chartPoints(requestSeries)" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
                <g v-for="(value, index) in requestSeries" :key="index"><circle :cx="chartX(index, requestSeries.length)" :cy="chartY(value, requestSeries)" r="3" fill="currentColor" /><text :x="chartX(index, requestSeries.length)" :y="chartY(value, requestSeries) - 10" text-anchor="middle" fill="var(--ui-text-highlighted)" font-size="11">{{ value }}</text><text :x="chartX(index, requestSeries.length)" y="180" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ selectedWeekLabels[index] }}</text></g>
              </svg>
              <template #footer><p class="text-sm text-muted">Requests increased by {{ requestTrend }}% in the last sample week.</p></template>
            </UCard>
            <UCard data-copy-block="developer-response-metrics" tabindex="0" aria-label="API response time metrics" class="min-w-0">
              <template #header><h2 class="font-semibold text-highlighted">API response time</h2><p class="mt-1 text-xs text-muted">{{ environment }} · {{ selectedWeekLabels.length }} weekly averages</p></template>
              <dl class="mb-4 flex flex-wrap gap-5 text-sm"><div><dt class="text-xs text-muted">Min</dt><dd class="font-semibold text-highlighted">{{ responseMin }} ms</dd></div><div><dt class="text-xs text-muted">Avg</dt><dd class="font-semibold text-highlighted" data-overview-average>{{ responseAverage }} ms</dd></div><div><dt class="text-xs text-muted">Max</dt><dd class="font-semibold text-highlighted">{{ responseMax }} ms</dd></div></dl>
              <svg viewBox="0 0 360 195" role="img" :aria-label="`Weekly average response times in milliseconds: ${responseSeries.join(', ')}`" class="block w-full text-info">
                <line v-for="y in [40, 95, 150]" :key="y" x1="30" x2="330" :y1="y" :y2="y" stroke="var(--ui-border)" />
                <polyline :points="chartPoints(responseSeries)" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
                <g v-for="(value, index) in responseSeries" :key="index"><circle :cx="chartX(index, responseSeries.length)" :cy="chartY(value, responseSeries)" r="3" fill="currentColor" /><text :x="chartX(index, responseSeries.length)" :y="chartY(value, responseSeries) - 10" text-anchor="middle" fill="var(--ui-text-highlighted)" font-size="11">{{ value }}</text><text :x="chartX(index, responseSeries.length)" y="180" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ selectedWeekLabels[index] }}</text></g>
              </svg>
              <template #footer><p class="text-sm text-muted">Response time {{ responseChange <= 0 ? 'decreased' : 'increased' }} by {{ Math.abs(responseChange) }} ms in the last sample week.</p></template>
            </UCard>
            <UCard data-copy-block="developer-visitor-metrics" tabindex="0" aria-label="Visitor device metrics" class="min-w-0 md:col-span-2">
              <template #header><h2 class="font-semibold text-highlighted">Total visitors</h2><p class="mt-1 text-xs text-muted">{{ environment }} · {{ selectedWeekLabels.length }} sample weeks · {{ visitorDevice }}</p></template>
              <div class="mb-4 flex flex-wrap gap-3"><UButton color="neutral" :variant="visitorDevice === 'Desktop' ? 'soft' : 'outline'" :aria-pressed="visitorDevice === 'Desktop'" aria-label="Show desktop visitors" @click="visitorDevice = 'Desktop'"><span>Desktop <strong data-overview-desktop>{{ formatVisitors(desktopTotal) }}</strong></span></UButton><UButton color="neutral" :variant="visitorDevice === 'Mobile' ? 'soft' : 'outline'" :aria-pressed="visitorDevice === 'Mobile'" aria-label="Show mobile visitors" @click="visitorDevice = 'Mobile'"><span>Mobile <strong data-overview-mobile>{{ formatVisitors(mobileTotal) }}</strong></span></UButton></div>
              <svg viewBox="0 0 360 195" role="img" :aria-label="`${visitorDevice} visitors per week: ${visitorSeries.join(', ')}`" class="block max-h-64 w-full text-primary" preserveAspectRatio="xMidYMid meet">
                <line v-for="y in [40, 95, 150]" :key="y" x1="30" x2="330" :y1="y" :y2="y" stroke="var(--ui-border)" />
                <polyline :points="chartPoints(visitorSeries)" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" />
                <g v-for="(value, index) in visitorSeries" :key="index"><circle :cx="chartX(index, visitorSeries.length)" :cy="chartY(value, visitorSeries)" r="3" fill="currentColor" /><text :x="chartX(index, visitorSeries.length)" :y="chartY(value, visitorSeries) - 10" text-anchor="middle" fill="var(--ui-text-highlighted)" font-size="10">{{ value }}</text><text :x="chartX(index, visitorSeries.length)" y="180" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ selectedWeekLabels[index] }}</text></g>
              </svg>
              <template #footer><p class="text-xs text-muted">The buttons switch the plotted device series. Totals are calculated from the displayed sample weeks.</p></template>
            </UCard>
          </div>
          <UCard data-copy-block="developer-recent-activities" tabindex="0" aria-label="Recent example developer activities" class="min-w-0">
            <template #header><h2 class="font-semibold text-highlighted">Recent activities</h2><p class="mt-1 text-xs text-muted">Static examples, not a live repository feed.</p></template>
            <ul class="space-y-6">
              <li class="flex gap-3"><UIcon name="i-lucide-git-pull-request" class="mt-1 size-5 shrink-0 text-info" /><div class="min-w-0 flex-1 space-y-2"><p class="text-sm font-medium">Update user authentication</p><p class="text-xs text-muted">Improved security measures and fixed login bugs.</p><div class="flex flex-wrap items-center gap-2"><span class="flex size-8 items-center justify-center rounded-full bg-muted text-xs">JD</span><span class="text-xs text-muted">John Doe</span><UBadge label="Open" color="info" variant="subtle" /></div></div></li>
              <li class="flex gap-3"><UIcon name="i-lucide-git-merge" class="mt-1 size-5 shrink-0 text-success" /><div class="min-w-0 flex-1 space-y-2"><p class="text-sm font-medium">Fix responsive layout on mobile</p><p class="text-xs text-muted">Resolved layout issues for small screen devices.</p><div class="flex flex-wrap items-center gap-2"><span class="flex size-8 items-center justify-center rounded-full bg-muted text-xs">JS</span><span class="text-xs text-muted">Jane Smith</span><UBadge label="Merged" color="success" variant="subtle" /></div></div></li>
              <li class="flex gap-3"><UIcon name="i-lucide-git-commit-horizontal" class="mt-1 size-5 shrink-0 text-muted" /><div class="min-w-0 flex-1 space-y-2"><p class="text-sm font-medium">Refactor API endpoints</p><p class="text-xs text-muted">Improved performance and reduced redundancy.</p><div class="flex flex-wrap items-center gap-2"><span class="flex size-8 items-center justify-center rounded-full bg-muted text-xs">MJ</span><span class="text-xs text-muted">Mike Johnson</span><UBadge label="Committed" color="neutral" variant="subtle" /></div></div></li>
              <li class="flex gap-3"><UIcon name="i-lucide-circle-alert" class="mt-1 size-5 shrink-0 text-warning" /><div class="min-w-0 flex-1 space-y-2"><p class="text-sm font-medium">Performance optimization needed</p><p class="text-xs text-muted">Identified areas for improving application speed.</p><div class="flex flex-wrap items-center gap-2"><span class="flex size-8 items-center justify-center rounded-full bg-muted text-xs">AL</span><span class="text-xs text-muted">Alex Lee</span><UBadge label="Open" color="warning" variant="subtle" /></div></div></li>
            </ul>
          </UCard>
        </div>
      </main>
    </div>
    <BlockCopyTools page="/developers/overview" />
  </div>
</template>
