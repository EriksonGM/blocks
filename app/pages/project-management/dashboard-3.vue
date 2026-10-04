<!-- Page: /project-management/dashboard-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProjects": ""
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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function printPage() { window.print() }
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-3">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex min-h-[calc(100dvh-1px)] w-full overflow-hidden">
          <div class="flex min-w-0 flex-1 flex-col">
            <header class="bg-default min-w-0 border-b px-3 py-3 sm:px-4 lg:px-6 border-default">
              <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex min-w-0 items-center justify-between gap-3">
                  <div class="flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">Shadcnblocks</span>
                    <span class="text-muted">/</span>
                    <span class="font-medium">Dashboard</span>
                  </div>
                  <div class="flex shrink-0 items-center gap-2 lg:hidden">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-[6px]" aria-label="Notifications" type="button" @click="openAction(&quot;Notifications&quot;)">
                      <UIcon name="i-lucide-bell" class="size-4" />
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-9 rounded-[6px] px-3" aria-label="Invite" type="button" @click="openAction(&quot;Invite&quot;)">
                      <UIcon name="i-lucide-users" class="size-4" />
                      <span class="hidden min-[380px]:inline">Invite</span>
                    </UButton>
                  </div>
                </div>
                <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 lg:flex lg:items-center">
                  <div class="relative min-w-0 lg:w-[240px]">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full text-base md:text-sm h-9 rounded-[6px] pl-9" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="flex -space-x-2">
                    <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="border-(--ui-bg) bg-muted grid size-6 place-items-center rounded-full border-2 text-[10px] font-medium sm:size-7 sm:text-[11px]">+2</span>
                  </div>
                  <UButton color="primary" variant="solid" class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 hidden h-9 rounded-[6px] lg:inline-flex" aria-label="Invite" type="button" @click="openAction(&quot;Invite&quot;)">
                    <UIcon name="i-lucide-users" class="size-4" />
                    Invite
                  </UButton>
                  <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default hidden size-9 rounded-[6px] lg:inline-flex" aria-label="Notifications" type="button" @click="openAction(&quot;Notifications&quot;)">
                    <UIcon name="i-lucide-bell" class="size-4" />
                  </UButton>
                </div>
              </div>
            </header>
            <main class="dark:bg-default min-w-0 flex-1 overflow-auto bg-(--ui-bg-muted)/50 px-3 pt-3 pb-20 sm:px-4 sm:pt-4 md:px-6 md:pt-5 md:pb-24">
              <div class="mx-auto max-w-[1700px] space-y-3 sm:space-y-4">
                <div class="flex min-w-0 flex-wrap items-center justify-between gap-3">
                  <div>
                    <h1 class="text-xl font-semibold tracking-tight text-highlighted">Command Center</h1>
                    <p class="text-muted mt-1 text-xs">Track delivery, focus on what matters, and ship with confidence.</p>
                  </div>
                  <div class="text-muted flex shrink-0 items-center gap-2 text-xs">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    <span>3 min ago</span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-[6px]" aria-label="Refresh dashboard" type="button" @click="openAction(&quot;Refresh dashboard&quot;)">
                      <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
                    </UButton>
                  </div>
                </div>
                <div class="min-w-0 space-y-4">
                  <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none overflow-hidden border-default" style="opacity: 1; transform: none;">
                    <div class="grid grid-cols-2 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
                      <div class="col-span-2 min-w-0 border-b p-3.5 sm:p-4 lg:col-span-1 lg:border-r lg:border-b-0 border-default">
                        <p class="text-muted text-xs font-medium">Portfolio Health</p>
                        <div class="mt-2 flex min-w-0 items-end justify-between gap-4">
                          <div class="min-w-0">
                            <p class="text-xl leading-6 font-semibold text-success dark:text-success text-highlighted">Good</p>
                            <p class="mt-1 text-xs font-medium text-success dark:text-success">On track</p>
                          </div>
                          <svg class="h-8 w-24 shrink-0 text-success" viewBox="0 0 96 32" fill="none" width="100%" height="100%">
                            <path d="M3 21L14 18L25 22L36 13L47 17L58 9L69 20L80 11L93 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 21L14 18L25 22L36 13L47 17L58 9L69 20L80 11L93 15" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div class="min-w-0 border-b p-3.5 sm:p-4 lg:border-b-0 last:lg:border-r-0 border-r lg:border-r border-default">
                        <p class="text-muted truncate text-xs font-medium">Projects</p>
                        <p class="mt-1.5 text-xl leading-6 font-semibold tracking-tight sm:mt-2 text-highlighted">24</p>
                        <p class="text-muted mt-1 truncate text-xs">Active</p>
                      </div>
                      <div class="min-w-0 border-b p-3.5 sm:p-4 lg:border-r lg:border-b-0 last:lg:border-r-0 border-default">
                        <p class="text-muted truncate text-xs font-medium">On Track</p>
                        <p class="mt-1.5 text-xl leading-6 font-semibold tracking-tight sm:mt-2 text-highlighted">17</p>
                        <p class="text-muted mt-1 truncate text-xs">71%</p>
                      </div>
                      <div class="min-w-0 p-3.5 sm:p-4 lg:border-b-0 last:lg:border-r-0 border-r lg:border-r border-b-0 border-default">
                        <p class="text-muted truncate text-xs font-medium">At Risk</p>
                        <p class="mt-1.5 text-xl leading-6 font-semibold tracking-tight sm:mt-2 text-highlighted">5</p>
                        <p class="text-muted mt-1 truncate text-xs">21%</p>
                      </div>
                      <div class="min-w-0 p-3.5 sm:p-4 lg:border-r lg:border-b-0 last:lg:border-r-0 border-b-0 border-default">
                        <p class="text-muted truncate text-xs font-medium">Off Track</p>
                        <p class="mt-1.5 text-xl leading-6 font-semibold tracking-tight sm:mt-2 text-highlighted">2</p>
                        <p class="text-muted mt-1 truncate text-xs">8%</p>
                      </div>
                      <div class="min-w-0 p-3.5 sm:p-4 lg:border-b-0 last:lg:border-r-0 col-span-2 border-t border-r-0 lg:col-span-1 lg:border-t-0 lg:border-r border-b-0 border-default">
                        <p class="text-muted truncate text-xs font-medium">Budget Burn</p>
                        <p class="mt-1.5 text-xl leading-6 font-semibold tracking-tight sm:mt-2 text-highlighted">62%</p>
                        <p class="text-muted mt-1 truncate text-xs">$8.7M / $14.1M</p>
                      </div>
                    </div>
                  </section>
                  <div class="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(300px,0.9fr)]">
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex min-h-[260px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Sprint health</h2>
                          <div class="text-muted mt-3 flex items-center gap-4 text-[11px]">
                            <span class="inline-flex items-center gap-1.5">
                              <span class="size-2 rounded-full" style="background-color:var(--ui-primary)" />
                              Completed
                            </span>
                            <span class="inline-flex items-center gap-1.5">
                              <span class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))" />
                              Scope
                            </span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-[6px] px-3 text-xs shadow-none" aria-label="This sprint" type="button" @click="printPage()">
                            This sprint
                          </UButton>
                        </div>
                      </div>
                      <div class="grid min-h-0 gap-3 lg:grid-cols-[minmax(0,1fr)_92px]">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden [aspect-ratio:auto] h-[176px] w-full" style=";--color-closed:var(--ui-primary);--color-planned:color-mix(in oklch, var(--ui-text-highlighted) 46%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-closed:var(--ui-primary);--color-planned:color-mix(in oklch, var(--ui-text-highlighted) 46%, var(--ui-bg));width:100%;height:176px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="255" height="176" class="chart-wrapper" style="position: relative; cursor: default; width: 255px; height: 176px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 255 176" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="245" height="136" x1="5" y1="141" x2="250" y2="141" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="245" height="136" x1="5" y1="107" x2="250" y2="107" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="245" height="136" x1="5" y1="73" x2="250" y2="73" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="245" height="136" x1="5" y1="5" x2="250" y2="5" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="5" y="5" height="136" width="245" />
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
                                              <path fill="var(--color-closed)" name="undefined" x="15" y="104.7333" width="14" height="36.2667" class="chart-rectangle" d="M15,107.7333A 3,3,0,0,1,18,104.7333L 26,104.7333A 3,3,0,0,1,
        29,107.7333L 29,141L 15,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="50" y="84.3333" width="14" height="56.6667" class="chart-rectangle" d="M50,87.3333A 3,3,0,0,1,53,84.3333L 61,84.3333A 3,3,0,0,1,
        64,87.3333L 64,141L 50,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="85" y="73" width="14" height="68" class="chart-rectangle" d="M85,76A 3,3,0,0,1,88,73L 96,73A 3,3,0,0,1,
        99,76L 99,141L 85,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="120" y="63.9333" width="14" height="77.0667" class="chart-rectangle" d="M120,66.9333A 3,3,0,0,1,123,63.9333L 131,63.9333A 3,3,0,0,1,
        134,66.9333L 134,141L 120,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="155" y="48.0667" width="14" height="92.9333" class="chart-rectangle" d="M155,51.0667A 3,3,0,0,1,158,48.0667L 166,48.0667A 3,3,0,0,1,
        169,51.0667L 169,141L 155,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="190" y="41.2667" width="14" height="99.7333" class="chart-rectangle" d="M190,44.2667A 3,3,0,0,1,193,41.2667L 201,41.2667A 3,3,0,0,1,
        204,44.2667L 204,141L 190,141Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-closed)" name="undefined" x="225" y="29.9333" width="14" height="111.0667" class="chart-rectangle" d="M225,32.9333A 3,3,0,0,1,228,29.9333L 236,29.9333A 3,3,0,0,1,
        239,32.9333L 239,141L 225,141Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-planned)" stroke-width="2" fill="none" id="recharts-line-_r_1_" height="136" width="245" class="chart-curve chart-line-curve" d="M22.5,86.6C34.167,79.8,45.833,73,57.5,68.467C69.167,63.933,80.833,63.933,92.5,59.4C104.167,54.867,115.833,45.8,127.5,41.267C139.167,36.733,150.833,34.467,162.5,32.2C174.167,29.933,185.833,29.933,197.5,27.667C209.167,25.4,220.833,22,232.5,18.6" />
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
                                  </g>
                                  <g class="chart-zIndex-layer_600">
                                    <g class="chart-layer chart-line-dots">
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="22.5" cy="86.6" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="57.5" cy="68.46666666666667" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="92.5" cy="59.400000000000006" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="127.5" cy="41.26666666666667" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="162.5" cy="32.19999999999999" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="197.5" cy="27.666666666666664" class="chart-dot chart-line-dot" />
                                      <circle r="3" stroke="var(--color-planned)" stroke-width="2" fill="var(--ui-bg)" height="136" width="245" cx="232.5" cy="18.599999999999994" class="chart-dot chart-line-dot" />
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="22.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="22.5">Mon</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="57.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="57.5">Tue</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="92.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="92.5">Wed</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="127.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="127.5">Thu</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="162.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="162.5">Fri</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="197.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="197.5">Sat</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="245" stroke="none" x="232.5" y="155" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="232.5">Sun</tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 content-center gap-2 text-center lg:grid-cols-1 lg:text-right">
                          <div>
                            <p class="text-xl leading-6 font-semibold text-highlighted">68%</p>
                            <p class="text-muted text-[11px]">Sprint progress</p>
                          </div>
                          <div>
                            <p class="text-lg leading-6 font-semibold text-highlighted">32</p>
                            <p class="text-muted text-[11px]">Completed</p>
                          </div>
                          <div>
                            <p class="text-lg leading-6 font-semibold text-highlighted">47</p>
                            <p class="text-muted text-[11px]">Total points</p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex min-h-[260px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Budget Burn</h2>
                          <div class="text-muted mt-3 flex items-center gap-4 text-[11px]">
                            <span class="inline-flex items-center gap-1.5">
                              <span class="h-0.5 w-5 rounded-full" style="background-color:var(--ui-primary)" />
                              Actual
                            </span>
                            <span class="inline-flex items-center gap-1.5">
                              <span class="h-0.5 w-5 rounded-full border-t-2 border-dotted" style="border-color:color-mix(in oklch, var(--ui-primary) 72%, var(--ui-bg))" />
                              Forecast
                            </span>
                          </div>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-[6px] px-3 text-xs shadow-none" aria-label="FY2026" type="button" @click="openAction(&quot;FY2026&quot;)">
                          FY2026
                          <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0">
                        <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden [aspect-ratio:auto] h-[176px] w-full" style=";--color-actual:var(--ui-primary);--color-forecast:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                          <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-actual:var(--ui-primary);--color-forecast:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg));width:100%;height:176px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="340" height="176" class="chart-wrapper" style="position: relative; cursor: default; width: 340px; height: 176px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 340 176" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="32" y="8" width="300" height="138" x1="32" y1="146" x2="332" y2="146" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="32" y="8" width="300" height="138" x1="32" y1="111.5" x2="332" y2="111.5" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="32" y="8" width="300" height="138" x1="32" y1="77" x2="332" y2="77" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="32" y="8" width="300" height="138" x1="32" y1="42.5" x2="332" y2="42.5" />
                                        <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="32" y="8" width="300" height="138" x1="32" y1="8" x2="332" y2="8" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts2-clip">
                                      <rect x="32" y="8" height="138" width="300" />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient id="budgetActualGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stop-color="var(--color-actual)" stop-opacity="0.36" />
                                      <stop offset="100%" stop-color="var(--color-actual)" stop-opacity="0.08" />
                                    </linearGradient>
                                  </defs>
                                  <g class="chart-zIndex-layer_100">
                                    <g class="chart-layer chart-area">
                                      <g class="chart-layer">
                                        <path stroke-width="2" fill="url(#budgetActualGradient)" fill-opacity="0.6" height="138" stroke="none" width="300" id="recharts-area-_r_2_" class="chart-curve chart-area-area" d="M32,146C44.5,137.806,57,129.613,69.5,122.713C82,115.813,94.5,110.637,107,104.6C119.5,98.563,132,92.094,144.5,86.488C157,80.881,169.5,75.922,182,70.963L182,146C169.5,146,157,146,144.5,146C132,146,119.5,146,107,146C94.5,146,82,146,69.5,146C57,146,44.5,146,32,146Z" />
                                        <path stroke-width="2" fill="none" fill-opacity="0.6" height="138" stroke="var(--color-actual)" width="300" class="chart-curve chart-area-curve" d="M32,146C44.5,137.806,57,129.613,69.5,122.713C82,115.813,94.5,110.637,107,104.6C119.5,98.563,132,92.094,144.5,86.488C157,80.881,169.5,75.922,182,70.963" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-forecast)" stroke-width="2" stroke-dasharray="3 3" fill="none" id="recharts-line-_r_3_" height="138" width="300" class="chart-curve chart-line-curve" d="M182,70.963C194.5,65.572,207,60.181,219.5,54.575C232,48.969,244.5,41.781,257,37.325C269.5,32.869,282,29.994,294.5,27.838C307,25.681,319.5,25.034,332,24.388" />
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
                                        <text height="30" width="300" stroke="none" x="32" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="32">Jan</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="69.5" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="69.5">Feb</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="107" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="107">Mar</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="144.5" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="144.5">Apr</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="182" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="182">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="219.5" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="219.5">Jun</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="257" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="257">Jul</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="294.5" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="294.5">Aug</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="300" stroke="none" x="330.8125" y="162" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="330.8125">Sep</tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="44" height="138" stroke="none" x="24" y="146" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="24">$0M</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="44" height="138" stroke="none" x="24" y="111.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="24">$4M</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="44" height="138" stroke="none" x="24" y="77" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="24">$8M</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="44" height="138" stroke="none" x="24" y="42.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="24">$12M</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text width="44" height="138" stroke="none" x="24" y="8" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="24">$16M</tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-(--ui-bg)/90 absolute top-[72px] right-7 rounded-[6px] border px-3 py-2 shadow-sm dark:bg-[var(--ui-bg-inverted)]/95 border-default">
                          <p class="text-base leading-5 font-semibold text-highlighted">$8.7M</p>
                          <p class="text-muted mt-1 text-[11px]">62% of budget</p>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex min-h-[260px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-3 flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-zap" class="text-muted size-4" />
                          <h2 class="truncate text-base font-semibold text-highlighted">Current Project</h2>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-[6px] px-3 text-xs shadow-none" aria-label="See All" type="button" @click="openAction(&quot;See All&quot;)">
                          See All
                        </UButton>
                      </div>
                      <div class="min-h-0 flex-1 border-t pt-4 border-default">
                        <p class="text-muted text-xs">Project Name</p>
                        <div class="mt-2.5 flex min-w-0 items-center gap-2">
                          <div class="bg-default grid size-6 shrink-0 place-items-center rounded-[6px] border border-default">
                            <img alt="Shadcnblocks" width="16" height="16" class="size-4 dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                          </div>
                          <p class="truncate text-sm font-medium">Shadcnblocks</p>
                          <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-[4px] bg-warning/10 px-1.5 py-0 text-[10px] font-medium text-warning hover:bg-warning/10 dark:bg-warning/50 dark:text-warning border-default">In Progress</div>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-4">
                          <div class="min-w-0">
                            <p class="text-muted text-xs">Project Manager</p>
                            <div class="mt-2 flex min-w-0 items-center gap-2">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                              </span>
                              <span class="truncate text-sm font-medium">KiaraL.</span>
                            </div>
                          </div>
                          <div class="min-w-0">
                            <p class="text-muted text-xs">Design Lead</p>
                            <div class="mt-2 flex min-w-0 items-center gap-2">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                              </span>
                              <span class="truncate text-sm font-medium">JoeT.</span>
                            </div>
                          </div>
                        </div>
                        <div class="mt-5">
                          <div class="min-w-0">
                            <p class="text-muted text-xs">Team</p>
                            <div class="mt-2 flex items-center gap-3">
                              <div class="flex -space-x-2">
                                <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden border-(--ui-bg) size-6 rounded-full border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) bg-muted grid size-6 place-items-center rounded-full border-2 text-[10px] font-medium sm:size-7 sm:text-[11px]">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="grid gap-4 xl:grid-cols-3">
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex h-[335px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-4 flex items-start justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Upcoming milestones</h2>
                        </div>
                      </div>
                      <div class="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 [scrollbar-color:hsl(var(--ui-border))_transparent] [scrollbar-width:thin]">
                        <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_92px_70px] items-center gap-3 rounded-[6px] border p-3 border-default">
                          <div class="min-w-0">
                            <p class="truncate text-sm font-medium">Revenue dashboard v2</p>
                            <p class="text-muted mt-1 text-xs">REV-241</p>
                          </div>
                          <span class="text-muted text-xs">May 14, 2026</span>
                          <div class="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm hover:bg-primary/80 rounded-[4px] text-[11px] bg-success/10 text-success dark:bg-success/50 dark:text-success border-default">On Track</div>
                        </div>
                        <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_92px_70px] items-center gap-3 rounded-[6px] border p-3 border-default">
                          <div class="min-w-0">
                            <p class="truncate text-sm font-medium">Onboarding flow launch</p>
                            <p class="text-muted mt-1 text-xs">ONB-118</p>
                          </div>
                          <span class="text-muted text-xs">May 21, 2026</span>
                          <div class="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm hover:bg-primary/80 rounded-[4px] text-[11px] bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">At Risk</div>
                        </div>
                        <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_92px_70px] items-center gap-3 rounded-[6px] border p-3 border-default">
                          <div class="min-w-0">
                            <p class="truncate text-sm font-medium">Mobile app beta</p>
                            <p class="text-muted mt-1 text-xs">MBL-304</p>
                          </div>
                          <span class="text-muted text-xs">May 28, 2026</span>
                          <div class="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm hover:bg-primary/80 rounded-[4px] text-[11px] bg-success/10 text-success dark:bg-success/50 dark:text-success border-default">On Track</div>
                        </div>
                        <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_92px_70px] items-center gap-3 rounded-[6px] border p-3 border-default">
                          <div class="min-w-0">
                            <p class="truncate text-sm font-medium">Public API v1</p>
                            <p class="text-muted mt-1 text-xs">API-092</p>
                          </div>
                          <span class="text-muted text-xs">Jun 4, 2026</span>
                          <div class="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm hover:bg-primary/80 rounded-[4px] text-[11px] bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">At Risk</div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default mt-3 h-8 shrink-0 rounded-[6px] px-2 text-xs" aria-label="View all milestones" type="button" @click="openAction(&quot;View all milestones&quot;)">
                        View all milestones
                        <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                      </UButton>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex h-[335px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-4 flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-monitor" class="text-muted size-4" />
                          <h2 class="truncate text-base font-semibold text-highlighted">Status Tracker</h2>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-[6px] px-3 text-xs shadow-none" aria-label="See All" type="button" @click="openAction(&quot;See All&quot;)">
                          See All
                        </UButton>
                      </div>
                      <div class="min-h-0 flex-1 space-y-3 overflow-y-auto border-t pt-3 pr-1 [scrollbar-color:hsl(var(--ui-border))_transparent] [scrollbar-width:thin] border-default">
                        <div class="space-y-2.5">
                          <p class="text-muted text-xs">Absent</p>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-(--ui-text-muted)" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Cameron Williamson</p>
                                <p class="text-muted truncate text-xs">Replaced by Kiara L.</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-muted text-muted border-default">
                              <span class="bg-(--ui-text-muted) mr-1 size-1.5 rounded-full" />
                              Absent
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/62828bc2a489837e.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-(--ui-text-muted)" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Maya Rao</p>
                                <p class="text-muted truncate text-xs">Coverage by Ava R.</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-muted text-muted border-default">
                              <span class="bg-(--ui-text-muted) mr-1 size-1.5 rounded-full" />
                              Absent
                            </div>
                          </div>
                        </div>
                        <div class="space-y-2.5 border-t pt-3 border-default">
                          <p class="text-muted text-xs">Away</p>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Tania Brooks</p>
                                <p class="text-muted truncate text-xs">Synergy</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              25m
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Riya Sharma</p>
                                <p class="text-muted truncate text-xs">Discovery</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              18m
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Joe Tesla</p>
                                <p class="text-muted truncate text-xs">Apex</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              12m
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/146332adc3a2c901.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Ava Reed</p>
                                <p class="text-muted truncate text-xs">Console</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              10m
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Kiara Laras</p>
                                <p class="text-muted truncate text-xs">Pulse</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              8m
                            </div>
                          </div>
                          <div class="flex min-w-0 items-center justify-between gap-3">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="relative shrink-0">
                                <span class="relative flex shrink-0 overflow-hidden size-8 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/ada84674117f0188.png" loading="lazy" />
                                </span>
                                <span class="border-(--ui-bg) absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-warning" />
                              </div>
                              <div class="min-w-0">
                                <p class="truncate text-sm font-medium">Ben Lewis</p>
                                <p class="text-muted truncate text-xs">Infra</p>
                              </div>
                            </div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 shrink-0 rounded-full px-2 py-0 text-[11px] font-medium shadow-none bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">
                              <UIcon name="i-lucide-clock-3" class="mr-1 size-3" />
                              6m
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none flex h-[335px] flex-col p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-4 flex items-start justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Recent activity</h2>
                        </div>
                        <UIcon name="i-lucide-ellipsis" class="text-muted size-4" />
                      </div>
                      <div class="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 [scrollbar-color:hsl(var(--ui-border))_transparent] [scrollbar-width:thin]">
                        <div class="grid min-w-0 grid-cols-[28px_minmax(0,1fr)_44px] items-center gap-3 rounded-[6px] border p-2.5 border-default">
                          <span class="bg-muted grid size-7 place-items-center rounded-[5px]">
                            <UIcon name="i-lucide-bell" class="size-3.5 text-info" />
                          </span>
                          <div class="min-w-0">
                            <p class="truncate text-xs font-medium">commented on RFC-112</p>
                            <p class="text-muted truncate text-[11px]">Filters API performance improvements</p>
                          </div>
                          <span class="text-muted text-right text-[11px]">10m ago</span>
                        </div>
                        <div class="grid min-w-0 grid-cols-[28px_minmax(0,1fr)_44px] items-center gap-3 rounded-[6px] border p-2.5 border-default">
                          <span class="bg-muted grid size-7 place-items-center rounded-[5px]">
                            <UIcon name="i-lucide-circle-dot" class="size-3.5 text-secondary" />
                          </span>
                          <div class="min-w-0">
                            <p class="truncate text-xs font-medium">moved RFC-126 to Review</p>
                            <p class="text-muted truncate text-[11px]">Export module CSV support</p>
                          </div>
                          <span class="text-muted text-right text-[11px]">1h ago</span>
                        </div>
                        <div class="grid min-w-0 grid-cols-[28px_minmax(0,1fr)_44px] items-center gap-3 rounded-[6px] border p-2.5 border-default">
                          <span class="bg-muted grid size-7 place-items-center rounded-[5px]">
                            <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                          </span>
                          <div class="min-w-0">
                            <p class="truncate text-xs font-medium">closed RFC-101</p>
                            <p class="text-muted truncate text-[11px]">Timeline engine refactor</p>
                          </div>
                          <span class="text-muted text-right text-[11px]">2h ago</span>
                        </div>
                        <div class="grid min-w-0 grid-cols-[28px_minmax(0,1fr)_44px] items-center gap-3 rounded-[6px] border p-2.5 border-default">
                          <span class="bg-muted grid size-7 place-items-center rounded-[5px]">
                            <UIcon name="i-lucide-file-text" class="size-3.5 text-info" />
                          </span>
                          <div class="min-w-0">
                            <p class="truncate text-xs font-medium">updated ONB-118</p>
                            <p class="text-muted truncate text-[11px]">Onboarding stepper UI tweaks</p>
                          </div>
                          <span class="text-muted text-right text-[11px]">3h ago</span>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default mt-3 h-8 shrink-0 rounded-[6px] px-2 text-xs" aria-label="View all activity" type="button" @click="openAction(&quot;View all activity&quot;)">
                        View all activity
                        <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                      </UButton>
                    </section>
                  </div>
                  <div class="grid gap-4 xl:hidden">
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 sm:p-5 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-5 flex items-start justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Delivery throughput</h2>
                          <p class="text-muted mt-1 text-xs">Weekly planned vs completed issues</p>
                        </div>
                        <UIcon name="i-lucide-ellipsis" class="text-muted size-4" />
                      </div>
                      <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-[220px] w-full" style="" role="img" aria-label="Analytics chart">
                        <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;;width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible" />
                        </div>
                      </div>
                    </section>
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
