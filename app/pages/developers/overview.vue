<!-- Page: /developers/overview | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Overview · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "server": "Server"
})

const serverOptions = [
  "Production",
  "Development"
]

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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/overview">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Developers</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Overview</span>
              </div>
              <div class="relative xl:mx-auto xl:w-full xl:max-w-md">
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default py-2 bg-(--ui-bg-muted)/70 text-muted hover:bg-(--ui-bg-muted)/90 hover:text-highlighted h-10 w-full justify-start rounded-full border-none px-3 font-normal shadow-none" aria-label="Search pages or run commands⌘K" type="button" @click="openAction(&quot;Search pages or run commands⌘K&quot;)">
                  <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                  <span class="min-w-0 flex-1 truncate text-left">Search pages or run commands</span>
                  <UKbd class="bg-default pointer-events-none hidden h-6 shrink-0 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex border-default">⌘K</UKbd>
                </UButton>
              </div>
            </div>
          </header>
          <div class="min-h-0 flex-1 overflow-auto has-[&gt;[data-layout=fixed]]:flex has-[&gt;[data-layout=fixed]]:overflow-hidden">
            <main id="main-content" class="flex flex-col gap-5 p-4 sm:p-6">
              <div class="flex w-full flex-col gap-2">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 class="text-2xl font-bold text-highlighted">Web Overview</h2>
                    <p class="text-muted text-sm">Build, manage, and optimize developer workflows seamlessly.</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <USelect v-model="form.server" :items="serverOptions" aria-label="Server" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-fit gap-2 text-sm" />
                    <div class="flex items-center" type="button">
                      <div class="rounded-l-md border border-r-0 px-2 py-[0.5rem] border-default">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-calendar">
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                          <path d="M4 11h16" />
                          <path d="M11 15h1" />
                          <path d="M12 15v3" />
                        </svg>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 py-2 rounded-l-none px-3" aria-label="1 Jan 2023 - 31 Dec 2023" type="button" @click="openAction(&quot;1 Jan 2023 - 31 Dec 2023&quot;)">
                        <div class="text-right">
                          <div class="py-1 text-xs">
                            <div>1 Jan 2023 - 31 Dec 2023</div>
                          </div>
                        </div>
                        <div class="pl-1 opacity-60">
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none">
                            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" />
                          </svg>
                        </div>
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                <div class="flex basis-2/3 flex-col gap-4">
                  <div class="flex flex-col gap-3 sm:flex-row sm:gap-6">
                    <div class="text-default border space-y-4 rounded-none border-none bg-transparent shadow-none flex-1 border-default">
                      <div class="flex flex-col space-y-2 p-0">
                        <div class="leading-none font-semibold tracking-tight">API requests</div>
                        <div class="text-muted text-sm flex gap-4">
                          <div>
                            <div class="text-(--ui-text-muted)/85 text-xs font-semibold">Successful</div>
                            <span class="text-highlighted text-sm">270</span>
                          </div>
                          <div>
                            <div class="text-(--ui-text-muted)/85 text-xs font-semibold">Failed</div>
                            <span class="text-highlighted text-sm">6</span>
                          </div>
                        </div>
                      </div>
                      <div class="p-0">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden" style=";--chart-2:var(--ui-text-muted);--color-count:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-count:var(--ui-text-muted);width:100%;height:206px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="367" height="206" class="chart-wrapper" style="position: relative; cursor: default; width: 367px; height: 206px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 367 206" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="343" height="176" x1="12" y1="176" x2="355" y2="176" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="343" height="176" x1="12" y1="132" x2="355" y2="132" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="343" height="176" x1="12" y1="88" x2="355" y2="88" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="343" height="176" x1="12" y1="44" x2="355" y2="44" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="343" height="176" x1="12" y1="0" x2="355" y2="0" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="12" y="0" height="176" width="343" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-count)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="176" width="343" class="chart-curve chart-line-curve" stroke-dasharray="415.9058837890625px 415.9058837890625px" d="M12,105.6L80.6,133.76L149.2,84.48L217.8,117.92L286.4,35.2L355,8.8" />
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
                                        <text height="30" width="343" stroke="none" x="12" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="12">W1</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="80.6" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="80.6">W2</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="149.2" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="149.2">W3</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="217.79999999999998" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="217.79999999999998">W4</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="286.4" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="286.4">W5</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="355" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="355">W6</tspan>
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
                      <div class="flex flex-col items-start gap-2 p-0 text-sm">
                        <div class="flex gap-2 leading-none font-medium">
                          Requests increased by 8.7% this week
                          <UIcon name="i-lucide-trending-up" class="h-4 w-4" />
                        </div>
                        <div class="text-muted leading-none">Displaying total API requests for the past 6 weeks</div>
                      </div>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full sm:hidden" />
                    <div class="text-default border space-y-4 rounded-none border-none bg-transparent shadow-none flex-1 border-default">
                      <div class="flex flex-col space-y-2 p-0">
                        <div class="leading-none font-semibold tracking-tight">API response time</div>
                        <div class="text-muted text-sm flex gap-4">
                          <div>
                            <div class="text-(--ui-text-muted)/85 text-xs font-semibold">Min</div>
                            <span class="text-highlighted text-xs">142ms</span>
                          </div>
                          <div>
                            <div class="text-(--ui-text-muted)/85 text-xs font-semibold">Avg</div>
                            <span class="text-highlighted text-xs">260ms</span>
                          </div>
                          <div>
                            <div class="text-(--ui-text-muted)/85 text-xs font-semibold">Max</div>
                            <span class="text-highlighted text-xs">460ms</span>
                          </div>
                        </div>
                      </div>
                      <div class="p-0">
                        <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden" style=";--chart-1:var(--ui-text-dimmed);--color-time:var(--ui-text-dimmed)" role="img" aria-label="Analytics chart">
                          <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-time:var(--ui-text-dimmed);width:100%;height:206px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="367" height="206" class="chart-wrapper" style="position: relative; cursor: default; width: 367px; height: 206px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 367 206" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="20" width="343" height="156" x1="12" y1="176" x2="355" y2="176" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="20" width="343" height="156" x1="12" y1="137" x2="355" y2="137" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="20" width="343" height="156" x1="12" y1="98" x2="355" y2="98" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="20" width="343" height="156" x1="12" y1="59" x2="355" y2="59" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="20" width="343" height="156" x1="12" y1="20" x2="355" y2="20" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts2-clip">
                                      <rect x="12" y="20" height="156" width="343" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-time)" stroke-width="2" fill="none" id="recharts-line-_r_1_" height="156" width="343" class="chart-curve chart-line-curve" stroke-dasharray="444.7319px 444.7319030761719px" d="M12,85C34.867,113.207,57.733,141.414,80.6,126.6C103.467,111.786,126.333,53.952,149.2,56.4C172.067,58.848,194.933,121.579,217.8,139.08C240.667,156.581,263.533,128.852,286.4,118.8C309.267,108.748,332.133,116.374,355,124" />
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
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_600">
                                    <g class="chart-layer chart-line-dots">
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="12" cy="85" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="80.6" cy="126.6" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="149.2" cy="56.39999999999999" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="217.79999999999998" cy="139.07999999999998" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="286.4" cy="118.8" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-time)" stroke-width="2" fill="var(--color-time)" height="156" width="343" cx="355" cy="124.00000000000001" class="chart-dot chart-line-dot" />
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="12" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="12">W1</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="80.6" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="80.6">W2</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="149.2" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="149.2">W3</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="217.79999999999998" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="217.79999999999998">W4</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="286.4" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="286.4">W5</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="355" y="190" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="355">W6</tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-label-list">
                                      <text width="0" height="0" offset="12" x="12" y="73" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="12">350</tspan>
                                      </text>
                                      <text width="0" height="0" offset="12" x="80.6" y="114.6" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="80.6">190</tspan>
                                      </text>
                                      <text width="0" height="0" offset="12" x="149.2" y="44.39999999999999" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="149.2">460</tspan>
                                      </text>
                                      <text width="0" height="0" offset="12" x="217.79999999999998" y="127.07999999999998" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="217.79999999999998">142</tspan>
                                      </text>
                                      <text width="0" height="0" offset="12" x="286.4" y="106.8" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="286.4">220</tspan>
                                      </text>
                                      <text width="0" height="0" offset="12" x="355" y="112.00000000000001" class="chart-text fill-(--ui-text-highlighted)" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="355">200</tspan>
                                      </text>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col items-start gap-2 p-0 text-sm">
                        <div class="flex gap-2 leading-none font-medium">
                          Response time decreased by 20ms this week
                          <UIcon name="i-lucide-trending-down" class="h-4 w-4" />
                        </div>
                        <div class="text-muted leading-none">Average API response time for the past 6 weeks in milliseconds</div>
                      </div>
                    </div>
                  </div>
                  <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                  <div class="text-default border space-y-4 rounded-none border-none bg-transparent shadow-none col-span-2 border-default">
                    <div class="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                      <div class="flex flex-1 flex-col justify-center gap-1 px-0 py-2 sm:py-3">
                        <div class="leading-none font-semibold tracking-tight">Total visitors</div>
                        <div class="text-muted text-sm">Showing total visitors for the last 3 months</div>
                      </div>
                      <div class="flex">
                        <UButton color="neutral" variant="soft" class="data-[active=true]:bg-(--ui-bg-muted)/50 flex flex-1 flex-col justify-center gap-0.5 text-left px-4 py-2" aria-label="Desktop24,828" type="button" @click="openAction(&quot;Desktop24,828&quot;)">
                          <span class="text-muted text-xs">Desktop</span>
                          <span class="text-lg leading-none font-bold sm:text-xl">24,828</span>
                        </UButton>
                        <UButton color="neutral" variant="soft" class="data-[active=true]:bg-(--ui-bg-muted)/50 flex flex-1 flex-col justify-center gap-0.5 text-left px-4 py-2" aria-label="Mobile25,010" type="button" @click="openAction(&quot;Mobile25,010&quot;)">
                          <span class="text-muted text-xs">Mobile</span>
                          <span class="text-lg leading-none font-bold sm:text-xl">25,010</span>
                        </UButton>
                      </div>
                    </div>
                    <div class="p-0">
                      <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[250px] w-full" style=";--chart-3:var(--ui-text-muted);--chart-4:var(--ui-text-muted);--color-desktop:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-muted);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="757" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 757px; height: 250px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 757 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="733" height="220" x1="12" y1="220" x2="745" y2="220" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="733" height="220" x1="12" y1="165" x2="745" y2="165" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="733" height="220" x1="12" y1="110" x2="745" y2="110" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="733" height="220" x1="12" y1="55" x2="745" y2="55" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="733" height="220" x1="12" y1="0" x2="745" y2="0" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts3-clip">
                                    <rect x="12" y="0" height="220" width="733" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400">
                                  <g class="chart-layer chart-line">
                                    <g class="chart-layer chart-shape">
                                      <path stroke="var(--color-desktop)" stroke-width="2" fill="none" id="recharts-line-_r_2_" height="220" width="733" class="chart-curve chart-line-curve" stroke-dasharray="5172.0576px 5172.0576171875px" d="M12,138.6C14.715,161.517,17.43,184.433,20.144,184.433C22.859,184.433,25.574,167.628,28.289,158.767C31.004,149.906,33.719,143.856,36.433,131.267C39.148,118.678,41.863,83.233,44.578,83.233C47.293,83.233,50.007,101.811,52.722,109.633C55.437,117.456,58.152,130.167,60.867,130.167C63.581,130.167,66.296,70.033,69.011,70.033C71.726,70.033,74.441,198.367,77.156,198.367C79.87,198.367,82.585,140.433,85.3,124.3C88.015,108.167,90.73,100.1,93.444,100.1C96.159,100.1,98.874,112.933,101.589,112.933C104.304,112.933,107.019,94.6,109.733,94.6C112.448,94.6,115.163,165.611,117.878,169.767C120.593,173.922,123.307,176,126.022,176C128.737,176,131.452,173.8,134.167,169.4C136.881,165,139.596,56.467,142.311,56.467C145.026,56.467,147.741,74.128,150.456,86.533C153.17,98.939,155.885,114.094,158.6,130.9C161.315,147.706,164.03,187.367,166.744,187.367C169.459,187.367,172.174,178.017,174.889,169.767C177.604,161.517,180.319,137.867,183.033,137.867C185.748,137.867,188.463,169.4,191.178,169.4C193.893,169.4,196.607,78.1,199.322,78.1C202.037,78.1,204.752,122.1,207.467,141.167C210.181,160.233,212.896,192.5,215.611,192.5C218.326,192.5,221.041,79.567,223.756,79.567C226.47,79.567,229.185,175.267,231.9,175.267C234.615,175.267,237.33,124.789,240.044,104.5C242.759,84.211,245.474,53.533,248.189,53.533C250.904,53.533,253.619,159.5,256.333,159.5C259.048,159.5,261.763,112.567,264.478,112.567C267.193,112.567,269.907,129.433,272.622,129.433C275.337,129.433,278.052,93.133,280.767,78.833C283.481,64.533,286.196,47.789,288.911,43.633C291.626,39.478,294.341,37.4,297.056,37.4C299.77,37.4,302.485,56.406,305.2,77.733C307.915,99.061,310.63,165.367,313.344,165.367C316.059,165.367,318.774,145.567,321.489,136.767C324.204,127.967,326.919,119.167,329.633,112.567C332.348,105.967,335.063,97.167,337.778,97.167C340.493,97.167,343.207,147.767,345.922,147.767C348.637,147.767,351.352,147.767,354.067,147.767C356.781,147.767,359.496,61.844,362.211,55.733C364.926,49.622,367.641,46.567,370.356,46.567C373.07,46.567,375.785,96.067,378.5,96.067C381.215,96.067,383.93,37.033,386.644,37.033C389.359,37.033,392.074,88.367,394.789,104.5C397.504,120.633,400.219,125.4,402.933,133.833C405.648,142.267,408.363,145.75,411.078,155.1C413.793,164.45,416.507,189.689,419.222,189.933C421.937,190.178,424.652,190.3,427.367,190.3C430.081,190.3,432.796,137.867,435.511,127.6C438.226,117.333,440.941,112.2,443.656,112.2C446.37,112.2,449.085,146.3,451.8,146.3C454.515,146.3,457.23,144.833,459.944,141.9C462.659,138.967,465.374,66,468.089,66C470.804,66,473.519,113.667,476.233,134.567C478.948,155.467,481.663,191.4,484.378,191.4C487.093,191.4,489.807,95.333,492.522,95.333C495.237,95.333,497.952,154.733,500.667,154.733C503.381,154.733,506.096,154.733,508.811,154.733C511.526,154.733,514.241,47.667,516.956,47.667C519.67,47.667,522.385,182.233,525.1,182.233C527.815,182.233,530.53,59.033,533.244,59.033C535.959,59.033,538.674,187.733,541.389,187.733C544.104,187.733,546.819,119.289,549.533,112.2C552.248,105.111,554.963,107.128,557.678,101.567C560.393,96.006,563.107,85.861,565.822,78.833C568.537,71.806,571.252,59.4,573.967,59.4C576.681,59.4,579.396,147.767,582.111,163.167C584.826,178.567,587.541,186.267,590.256,186.267C592.97,186.267,595.685,39.6,598.4,39.6C601.115,39.6,603.83,190.3,606.544,190.3C609.259,190.3,611.974,63.8,614.689,63.8C617.404,63.8,620.119,107.433,622.833,107.433C625.548,107.433,628.263,94.233,630.978,83.967C633.693,73.7,636.407,45.833,639.122,45.833C641.837,45.833,644.552,180.767,647.267,180.767C649.981,180.767,652.696,111.344,655.411,94.967C658.126,78.589,660.841,70.4,663.556,70.4C666.27,70.4,668.985,158.033,671.7,158.033C674.415,158.033,677.13,122.772,679.844,103.767C682.559,84.761,685.274,44,687.989,44C690.704,44,693.419,171.6,696.133,171.6C698.848,171.6,701.563,170.5,704.278,168.3C706.993,166.1,709.707,64.289,712.422,60.867C715.137,57.444,717.852,55.733,720.567,55.733C723.281,55.733,725.996,154.122,728.711,165.367C731.426,176.611,734.141,182.233,736.856,182.233C739.57,182.233,742.285,119.35,745,56.467" />
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
                                      <text height="30" width="733" stroke="none" x="85.3" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="85.3">Apr 10</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="158.6" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="158.6">Apr 19</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="231.89999999999998" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="231.89999999999998">Apr 28</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="305.2" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="305.2">May 7</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="378.5" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="378.5">May 16</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="451.79999999999995" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="451.79999999999995">May 25</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="525.1" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="525.1">Jun 3</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="590.2555555555555" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="590.2555555555555">Jun 11</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="663.5555555555555" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="663.5555555555555">Jun 20</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="733" stroke="none" x="737.296875" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="737.296875">Jun 30</tspan>
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
                <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full lg:hidden" />
                <div class="flex flex-1 flex-col">
                  <div class="text-default border space-y-4 rounded-none border-none bg-transparent shadow-none border-default">
                    <div class="flex flex-col space-y-1.5 p-0">
                      <div class="leading-none font-semibold tracking-tight">Recent activities</div>
                    </div>
                    <div class="space-y-6 p-0">
                      <div class="flex items-start space-x-4">
                        <div class="mt-1">
                          <UIcon name="i-lucide-git-pull-request" class="h-5 w-5 text-info" />
                        </div>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-medium tracking-tight">Update user authentication</p>
                            <span class="text-muted text-xs">2 hours ago</span>
                          </div>
                          <p class="text-muted text-xs">Improved security measures and fixed login bugs</p>
                          <div class="flex items-center pt-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-8 w-8">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">JD</span>
                            </span>
                            <span class="text-muted text-sm">John Doe</span>
                            <span class="ml-auto rounded-full px-2 py-1 text-xs bg-info/10 text-info dark:bg-info dark:text-info">open</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-start space-x-4">
                        <div class="mt-1">
                          <UIcon name="i-lucide-git-merge" class="h-5 w-5 text-success" />
                        </div>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-medium tracking-tight">Fix responsive layout on mobile</p>
                            <span class="text-muted text-xs">5 hours ago</span>
                          </div>
                          <p class="text-muted text-xs">Resolved layout issues for small screen devices</p>
                          <div class="flex items-center pt-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-8 w-8">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">JS</span>
                            </span>
                            <span class="text-muted text-sm">Jane Smith</span>
                            <span class="ml-auto rounded-full px-2 py-1 text-xs bg-success/10 text-success dark:bg-success dark:text-success">closed</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-start space-x-4">
                        <div class="mt-1">
                          <UIcon name="i-lucide-git-commit-horizontal" class="h-5 w-5 text-secondary" />
                        </div>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-medium tracking-tight">Refactor API endpoints</p>
                            <span class="text-muted text-xs">1 day ago</span>
                          </div>
                          <p class="text-muted text-xs">Improved performance and reduced redundancy</p>
                          <div class="flex items-center pt-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-8 w-8">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">MJ</span>
                            </span>
                            <span class="text-muted text-sm">Mike Johnson</span>
                            <span class="ml-auto rounded-full px-2 py-1 text-xs bg-secondary/10 text-secondary dark:bg-secondary dark:text-secondary">merged</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-start space-x-4">
                        <div class="mt-1">
                          <UIcon name="i-lucide-circle-alert" class="h-5 w-5 text-error" />
                        </div>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-medium tracking-tight">Performance optimization needed</p>
                            <span class="text-muted text-xs">3 days ago</span>
                          </div>
                          <p class="text-muted text-xs">Identified areas for improving application speed</p>
                          <div class="flex items-center pt-2">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-8 w-8">
                              <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">AL</span>
                            </span>
                            <span class="text-muted text-sm">Alex Lee</span>
                            <span class="ml-auto rounded-full px-2 py-1 text-xs bg-info/10 text-info dark:bg-info dark:text-info">open</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
