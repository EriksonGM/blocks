<!-- Page: /payment-processor/dashboard-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 1 · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Personal",
    "value": "0"
  },
  {
    "label": "Corporate",
    "value": "1"
  }
]

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-1">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 w-full max-w-full flex-1 flex-col overflow-y-auto xl:flex-row xl:overflow-hidden">
            <div class="min-w-0 flex-1 xl:overflow-y-auto">
              <div class="mx-auto flex w-full max-w-[888px] min-w-0 flex-col gap-6 p-4 xl:p-6">
                <div class="flex items-center justify-between gap-4 py-1">
                  <div class="flex min-w-0 items-center gap-3">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default">
                      <img class="aspect-square h-full w-full" alt="Robert Austin" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <h1 class="truncate text-base font-semibold text-highlighted">Robert Austin</h1>
                      <p class="text-muted truncate text-sm">Payment processor dashboard</p>
                    </div>
                  </div>
                  <div class="hidden items-center gap-5 text-sm md:flex">
                    <div>
                      <span class="text-muted">Pending</span>
                      <span class="font-semibold">$8,420.16</span>
                    </div>
                    <div>
                      <span class="text-muted">Settled</span>
                      <span class="font-semibold">$42,180.90</span>
                    </div>
                  </div>
                </div>
                <div class="grid gap-4 lg:grid-cols-2 xl:gap-6">
                  <section class="border-(--ui-border)/80 bg-default rounded-2xl border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)] h-[178px] p-5 pb-6 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-muted text-[0.85rem]">Gross Volume</p>
                        <div class="mt-2 flex flex-wrap items-center gap-2.5">
                          <p class="text-[1.65rem] leading-none font-medium tracking-normal">$387,291.84</p>
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-full px-2.5 text-xs font-semibold bg-success/10 text-success">
                            +12%
                          </UBadge>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 min-w-0">
                      <div class="relative h-[76px] min-w-0 pb-3">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="322" height="64" class="chart-wrapper" style="position: relative; cursor: default; width: 322px; height: 64px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 322 64" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-vertical">
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="24.76923076923077" y1="4" x2="24.76923076923077" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="74.3076923076923" y1="4" x2="74.3076923076923" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="123.84615384615385" y1="4" x2="123.84615384615385" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="173.3846153846154" y1="4" x2="173.3846153846154" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="222.92307692307693" y1="4" x2="222.92307692307693" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="272.46153846153845" y1="4" x2="272.46153846153845" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="297.2307692307692" y1="4" x2="297.2307692307692" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="322" y1="4" x2="322" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="0" y1="4" x2="0" y2="52" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="0" y="4" height="48" width="322" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-value)" stroke-width="1.75" fill="none" id="recharts-line-_r_0_" height="48" width="322" class="chart-curve chart-line-curve" d="M0,46.667L24.769,46.667L49.538,9.333L74.308,9.333L99.077,30.667L123.846,30.667L148.615,20L173.385,20L198.154,9.333L222.923,9.333L247.692,30.667L272.462,30.667L297.231,20L322,9.333" />
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
                        <div class="text-muted pointer-events-none absolute right-0 bottom-1 left-0 grid grid-cols-6 text-[0.7rem]">
                          <span>0</span>
                          <span>2K</span>
                          <span>3K</span>
                          <span>4K</span>
                          <span>5K</span>
                          <span>100</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-default rounded-2xl border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)] h-[178px] p-5 pb-6 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-muted text-[0.85rem]">Net Revenue</p>
                        <div class="mt-2 flex flex-wrap items-center gap-2.5">
                          <p class="text-[1.65rem] leading-none font-medium tracking-normal">$369,840.22</p>
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-full px-2.5 text-xs font-semibold bg-success/10 text-success">
                            +9%
                          </UBadge>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 min-w-0">
                      <div class="relative h-[76px] min-w-0 pb-3">
                        <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="322" height="64" class="chart-wrapper" style="position: relative; cursor: default; width: 322px; height: 64px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 322 64" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-vertical">
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="29.272727272727273" y1="4" x2="29.272727272727273" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="58.54545454545455" y1="4" x2="58.54545454545455" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="87.81818181818181" y1="4" x2="87.81818181818181" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="117.0909090909091" y1="4" x2="117.0909090909091" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="146.36363636363637" y1="4" x2="146.36363636363637" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="175.63636363636363" y1="4" x2="175.63636363636363" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="204.9090909090909" y1="4" x2="204.9090909090909" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="234.1818181818182" y1="4" x2="234.1818181818182" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="263.45454545454544" y1="4" x2="263.45454545454544" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="322" y1="4" x2="322" y2="52" />
                                        <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="4" width="322" height="48" x1="0" y1="4" x2="0" y2="52" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts2-clip">
                                      <rect x="0" y="4" height="48" width="322" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300" />
                                  <g class="chart-zIndex-layer_400">
                                    <g class="chart-layer chart-line">
                                      <g class="chart-layer chart-shape">
                                        <path stroke="var(--color-value)" stroke-width="1.75" fill="none" id="recharts-line-_r_1_" height="48" width="322" class="chart-curve chart-line-curve" d="M0,20L29.273,25.333L58.545,30.667L87.818,30.667L117.091,20L146.364,20L175.636,25.333L204.909,25.333L234.182,9.333L263.455,9.333L292.727,20L322,25.333" />
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
                        <div class="text-muted pointer-events-none absolute right-0 bottom-1 left-0 grid grid-cols-6 text-[0.7rem]">
                          <span>0</span>
                          <span>2K</span>
                          <span>3K</span>
                          <span>4K</span>
                          <span>5K</span>
                          <span>100</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <section class="border-(--ui-border)/80 bg-default rounded-2xl border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)] h-[380px] p-4 border-default">
                  <div>
                    <div class="flex flex-wrap items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-chart-column" class="text-muted shrink-0" />
                        <h2 class="truncate text-lg font-semibold text-highlighted">Payment Volume</h2>
                      </div>
                      <div class="flex flex-wrap items-start justify-end gap-5">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <span class="size-2 rounded-full" style="background-color:var(--ui-primary)" />
                            <p class="text-muted text-[0.7rem] font-medium tracking-wide uppercase">Cards</p>
                          </div>
                          <div class="mt-1 flex flex-wrap items-center gap-2">
                            <p class="text-sm font-semibold text-highlighted">$142.8K</p>
                            <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-success/10 text-success">+11%</span>
                          </div>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <span class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 52%, var(--ui-bg))" />
                            <p class="text-muted text-[0.7rem] font-medium tracking-wide uppercase">Wallets</p>
                          </div>
                          <div class="mt-1 flex flex-wrap items-center gap-2">
                            <p class="text-sm font-semibold text-highlighted">$41.2K</p>
                            <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-success/10 text-success">+7%</span>
                          </div>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <span class="size-2 rounded-full" style="background-color:color-mix(in oklch, var(--ui-primary) 72%, var(--ui-bg))" />
                            <p class="text-muted text-[0.7rem] font-medium tracking-wide uppercase">Refunds</p>
                          </div>
                          <div class="mt-1 flex flex-wrap items-center gap-2">
                            <p class="text-sm font-semibold text-highlighted">$11.3K</p>
                            <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-error/10 text-error">-2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 h-[296px] min-w-0">
                    <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                    <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-scheduled:color-mix(in oklch, var(--ui-text-highlighted) 52%, var(--ui-bg));--color-expenses:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg));--color-income:var(--ui-primary);--color-reserve:color-mix(in oklch, var(--ui-bg) 55%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                      <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                      <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-scheduled:color-mix(in oklch, var(--ui-text-highlighted) 52%, var(--ui-bg));--color-expenses:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg));--color-income:var(--ui-primary);--color-reserve:color-mix(in oklch, var(--ui-bg) 55%, var(--ui-bg));width:100%;height:296px;min-width:0" role="img" aria-label="Analytics chart">
                        <div style="width:0;height:0;overflow:visible">
                          <div width="718" height="296" class="chart-wrapper" style="position: relative; cursor: default; width: 718px; height: 296px;">
                            <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 718 296" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                              <title />
                              <desc />
                              <g class="chart-zIndex-layer_-100">
                                <g class="chart-cartesian-grid">
                                  <g class="chart-cartesian-grid-horizontal">
                                    <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="46" y="6" width="672" height="260" x1="46" y1="266" x2="718" y2="266" />
                                    <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="46" y="6" width="672" height="260" x1="46" y1="201" x2="718" y2="201" />
                                    <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="46" y="6" width="672" height="260" x1="46" y1="136" x2="718" y2="136" />
                                    <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="46" y="6" width="672" height="260" x1="46" y1="71" x2="718" y2="71" />
                                    <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="46" y="6" width="672" height="260" x1="46" y1="6" x2="718" y2="6" />
                                  </g>
                                </g>
                              </g>
                              <g class="chart-zIndex-layer_-50" />
                              <defs>
                                <clipPath id="recharts3-clip">
                                  <rect x="46" y="6" height="260" width="672" />
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
                                          <path fill="var(--color-scheduled)" name="undefined" x="59" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 59,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="115" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 115,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="171" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 171,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="227" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 227,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="283" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 283,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="339" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 339,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="395" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 395,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="451" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 451,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="507" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 507,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="563" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 563,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="619" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 619,242.6 h 30 v 23.4 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-scheduled)" name="undefined" x="675" y="242.6" width="30" height="23.4" class="chart-rectangle" d="M 675,242.6 h 30 v 23.4 h -30 Z" />
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
                                          <path fill="var(--color-expenses)" name="undefined" x="59" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 59,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="115" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 115,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="171" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 171,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="227" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 227,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="283" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 283,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="339" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 339,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="395" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 395,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="451" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 451,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="507" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 507,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="563" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 563,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="619" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 619,195.8 h 30 v 46.8 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-expenses)" name="undefined" x="675" y="195.8" width="30" height="46.8" class="chart-rectangle" d="M 675,195.8 h 30 v 46.8 h -30 Z" />
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
                                          <path fill="var(--color-income)" name="undefined" x="59" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 59,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="115" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 115,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="171" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 171,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="227" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 227,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="283" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 283,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="339" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 339,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="395" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 395,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="451" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 451,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="507" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 507,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="563" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 563,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="619" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 619,86.6 h 30 v 109.2 h -30 Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-income)" name="undefined" x="675" y="86.6" width="30" height="109.2" class="chart-rectangle" d="M 675,86.6 h 30 v 109.2 h -30 Z" />
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
                                          <path fill="var(--color-reserve)" name="undefined" x="59" y="19" width="30" height="67.6" class="chart-rectangle" d="M59,23A 4,4,0,0,1,63,19L 85,19A 4,4,0,0,1,
        89,23L 89,86.6L 59,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="115" y="19" width="30" height="67.6" class="chart-rectangle" d="M115,23A 4,4,0,0,1,119,19L 141,19A 4,4,0,0,1,
        145,23L 145,86.6L 115,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="171" y="19" width="30" height="67.6" class="chart-rectangle" d="M171,23A 4,4,0,0,1,175,19L 197,19A 4,4,0,0,1,
        201,23L 201,86.6L 171,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="227" y="19" width="30" height="67.6" class="chart-rectangle" d="M227,23A 4,4,0,0,1,231,19L 253,19A 4,4,0,0,1,
        257,23L 257,86.6L 227,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="283" y="19" width="30" height="67.6" class="chart-rectangle" d="M283,23A 4,4,0,0,1,287,19L 309,19A 4,4,0,0,1,
        313,23L 313,86.6L 283,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="339" y="19" width="30" height="67.6" class="chart-rectangle" d="M339,23A 4,4,0,0,1,343,19L 365,19A 4,4,0,0,1,
        369,23L 369,86.6L 339,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="395" y="19" width="30" height="67.6" class="chart-rectangle" d="M395,23A 4,4,0,0,1,399,19L 421,19A 4,4,0,0,1,
        425,23L 425,86.6L 395,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="451" y="19" width="30" height="67.6" class="chart-rectangle" d="M451,23A 4,4,0,0,1,455,19L 477,19A 4,4,0,0,1,
        481,23L 481,86.6L 451,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="507" y="19" width="30" height="67.6" class="chart-rectangle" d="M507,23A 4,4,0,0,1,511,19L 533,19A 4,4,0,0,1,
        537,23L 537,86.6L 507,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="563" y="19" width="30" height="67.6" class="chart-rectangle" d="M563,23A 4,4,0,0,1,567,19L 589,19A 4,4,0,0,1,
        593,23L 593,86.6L 563,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="619" y="19" width="30" height="67.6" class="chart-rectangle" d="M619,23A 4,4,0,0,1,623,19L 645,19A 4,4,0,0,1,
        649,23L 649,86.6L 619,86.6Z" />
                                        </g>
                                      </g>
                                      <g class="chart-layer chart-bar-rectangle">
                                        <g class="chart-layer chart-inactive-bar">
                                          <path fill="var(--color-reserve)" name="undefined" x="675" y="19" width="30" height="67.6" class="chart-rectangle" d="M675,23A 4,4,0,0,1,679,19L 701,19A 4,4,0,0,1,
        705,23L 705,86.6L 675,86.6Z" />
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
                                    <text height="30" width="672" stroke="none" x="74" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="74">J</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="130" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="130">F</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="186" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="186">M</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="242" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="242">A</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="298" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="298">M</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="354" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="354">J</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="410" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="410">J</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="466" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="466">A</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="522" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="522">S</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="578" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="578">O</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="634" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="634">N</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text height="30" width="672" stroke="none" x="690" y="282" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                      <tspan x="690">D</tspan>
                                    </text>
                                  </g>
                                </g>
                                <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text width="46" height="260" stroke="none" x="38" y="266" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                      <tspan x="38">0</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text width="46" height="260" stroke="none" x="38" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                      <tspan x="38">5k</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text width="46" height="260" stroke="none" x="38" y="136" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                      <tspan x="38">10k</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text width="46" height="260" stroke="none" x="38" y="71" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                      <tspan x="38">15k</tspan>
                                    </text>
                                  </g>
                                  <g class="chart-layer chart-cartesian-axis-tick-label">
                                    <text width="46" height="260" stroke="none" x="38" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                      <tspan x="38">20k</tspan>
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
                </section>
                <div class="grid gap-4 lg:grid-cols-2 xl:gap-6">
                  <section class="border-(--ui-border)/80 bg-default rounded-2xl border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)] flex h-[214px] flex-col p-4 pb-5 border-default">
                    <div class="flex shrink-0 items-center justify-between gap-4 border-b pb-3 border-default">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-shield-check" class="text-muted shrink-0" />
                        <h2 class="truncate text-base font-semibold xl:text-lg text-highlighted">Dispute Health</h2>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 shrink-0 rounded-xl px-3 text-sm" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                        Details
                      </UButton>
                    </div>
                    <div class="mt-3 flex min-h-0 flex-1 items-start justify-between gap-4">
                      <div>
                        <p class="text-muted text-base">
                          Resolution health is
                          <span class="text-highlighted font-semibold">86/100</span>
                        </p>
                        <p class="text-muted mt-1 text-sm">4 open disputes, 1 urgent case, 92% response coverage.</p>
                      </div>
                      <div class="grid size-9 shrink-0 place-items-center rounded-full bg-warning/10 text-warning">
                        <UIcon name="i-lucide-circle-check" class="size-5" />
                      </div>
                    </div>
                    <div class="mt-auto grid shrink-0 grid-cols-36 gap-1.5">
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
                      <span class="h-5 rounded-sm bg-warning" />
                      <span class="h-5 rounded-sm bg-warning" />
                      <span class="h-5 rounded-sm bg-warning" />
                      <span class="h-5 rounded-sm bg-warning" />
                      <span class="h-5 rounded-sm bg-warning" />
                      <span class="h-5 rounded-sm bg-error" />
                      <span class="h-5 rounded-sm bg-error" />
                      <span class="h-5 rounded-sm bg-error" />
                      <span class="h-5 rounded-sm bg-muted" />
                      <span class="h-5 rounded-sm bg-muted" />
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 bg-default rounded-2xl border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)] h-[214px] p-4 pb-5 border-default">
                    <div class="flex items-center justify-between gap-3 border-b pb-3 border-default">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-chart-column" class="text-muted shrink-0" />
                        <h2 class="min-w-0 truncate text-base leading-tight font-semibold xl:text-lg text-highlighted">Payment Method Mix</h2>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 shrink-0 rounded-xl px-3 text-sm" aria-label="Weekly" type="button" @click="openAction(&quot;Weekly&quot;)">
                        Weekly
                        <UIcon name="i-lucide-chevron-down" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 h-[126px] min-w-0">
                      <!-- Chart 7: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-cards:var(--ui-primary);--color-wallets:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg));--color-bank:color-mix(in oklch, var(--ui-text-highlighted) 52%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                        <!-- Chart 8: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-cards:var(--ui-primary);--color-wallets:color-mix(in oklch, var(--ui-text-highlighted) 72%, var(--ui-bg));--color-bank:color-mix(in oklch, var(--ui-text-highlighted) 52%, var(--ui-bg));width:100%;height:126px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="330" height="126" class="chart-wrapper" style="position: relative; cursor: default; width: 330px; height: 126px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 330 126" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-vertical">
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="64" y1="0" x2="64" y2="88" />
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="117.2" y1="0" x2="117.2" y2="88" />
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="170.4" y1="0" x2="170.4" y2="88" />
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="223.6" y1="0" x2="223.6" y2="88" />
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="276.8" y1="0" x2="276.8" y2="88" />
                                      <line stroke="var(--ui-border)" stroke-dasharray="4 4" fill="none" x="64" y="0" width="266" height="88" x1="330" y1="0" x2="330" y2="88" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts4-clip">
                                    <rect x="64" y="0" height="88" width="266" />
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
                                            <path name="undefined" fill="var(--color-cards)" x="64" y="7" width="260.68" height="14" class="chart-rectangle" d="M64,11A 4,4,0,0,1,68,7L 320.68,7A 4,4,0,0,1,
        324.68,11L 324.68,17A 4,4,0,0,1,
        320.68,21L 68,21A 4,4,0,0,1,
        64,17Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" fill="var(--color-wallets)" x="64" y="36.3333" width="191.52" height="14" class="chart-rectangle" d="M64,40.3333A 4,4,0,0,1,68,36.3333L 251.52,36.3333A 4,4,0,0,1,
        255.52,40.3333L 255.52,46.3333A 4,4,0,0,1,
        251.52,50.3333L 68,50.3333A 4,4,0,0,1,
        64,46.3333Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path name="undefined" fill="var(--color-bank)" x="64" y="65.6667" width="69.16" height="14" class="chart-rectangle" d="M64,69.6667A 4,4,0,0,1,68,65.6667L 129.16,65.6667A 4,4,0,0,1,
        133.16,69.6667L 133.16,75.6667A 4,4,0,0,1,
        129.16,79.6667L 68,79.6667A 4,4,0,0,1,
        64,75.6667Z" />
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
                                      <text height="30" width="266" stroke="none" x="64" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="64">0</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="266" stroke="none" x="117.2" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="117.2">2K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="266" stroke="none" x="170.4" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="170.4">4K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="266" stroke="none" x="223.6" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="223.6">6K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="266" stroke="none" x="276.8" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="276.8">8K</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="266" stroke="none" x="319.7421875" y="96" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="319.7421875">10K</tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="64" height="88" stroke="none" x="56" y="14.666666666666666" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="56">Cards</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="64" height="88" stroke="none" x="56" y="44" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="56">Wallets</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text width="64" height="88" stroke="none" x="56" y="73.33333333333333" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                        <tspan x="56">Bank</tspan>
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
                  </section>
                </div>
              </div>
            </div>
            <aside class="border-default bg-default min-w-0 shrink-0 overflow-y-auto border-t xl:w-[384px] xl:border-t-0 xl:border-l 2xl:w-[400px]">
              <section class="flex min-h-full flex-col px-5 py-4">
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <UIcon name="i-lucide-credit-card" class="text-muted size-5" />
                    <h2 class="text-lg font-semibold tracking-normal text-highlighted">My Cards</h2>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 rounded-xl px-3 text-sm" aria-label="Add Card" type="button" @click="openAction(&quot;Add Card&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add Card
                  </UButton>
                </div>
                <div data-orientation="horizontal" class="mt-4">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted items-center justify-center grid h-10 w-full grid-cols-2 rounded-xl p-1" data-orientation="horizontal" style="outline:none" />
                </div>
                <!-- Card 1: Robert Austin$14,237.86Active -->
                <UCard class="relative mt-4 h-[190px] overflow-hidden rounded-2xl p-5 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)]" :ui="{ body: 'contents' }">
                  <div class="absolute top-0 right-0 h-full w-32 overflow-hidden opacity-60">
                    <div class="absolute top-[-30px] right-[-46px] h-44 w-[5.5rem] rotate-[31deg] rounded-3xl border border-default" />
                    <div class="absolute top-28 right-[-62px] h-44 w-[5.5rem] rotate-[31deg] rounded-3xl border border-default" />
                  </div>
                  <div class="relative flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                        <img class="aspect-square h-full w-full" alt="Robert Austin" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
                      </span>
                      <UIcon name="i-lucide-wifi" class="text-muted size-4 rotate-90" />
                    </div>
                    <span class="flex -space-x-1.5">
                      <span class="size-6 rounded-full bg-error" />
                      <span class="size-6 rounded-full bg-warning" />
                    </span>
                  </div>
                  <div class="relative mt-11 flex items-end justify-between gap-4">
                    <div>
                      <p class="text-muted text-sm">Robert Austin</p>
                      <p class="font-medium tracking-normal mt-2 text-[1.8rem]">$14,237.86</p>
                    </div>
                    <span class="bg-default inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium border-default">
                      <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                      Active
                    </span>
                  </div>
                </UCard>
                <dl class="mt-4 grid gap-3 text-[0.92rem]">
                  <div class="flex items-center justify-between gap-4">
                    <dt class="text-muted">Card Number</dt>
                    <dd class="font-semibold">•••• 1234</dd>
                  </div>
                  <div class="flex items-center justify-between gap-4">
                    <dt class="text-muted">Expiry Date</dt>
                    <dd class="font-semibold">06/27</dd>
                  </div>
                  <div class="flex items-center justify-between gap-4">
                    <dt class="text-muted">CVC</dt>
                    <dd class="font-semibold">•••</dd>
                  </div>
                  <div class="flex items-center justify-between gap-4">
                    <dt class="text-muted">Spending Limit</dt>
                    <dd class="font-semibold">$12,000.00</dd>
                  </div>
                </dl>
                <div class="mt-4 grid grid-cols-3 gap-2.5">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 rounded-xl px-2 text-[0.85rem]" aria-label="Unhide" type="button" @click="openAction(&quot;Unhide&quot;)">
                    Unhide
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 rounded-xl px-2 text-[0.85rem]" aria-label="Adjust Limit" type="button" @click="openAction(&quot;Adjust Limit&quot;)">
                    Adjust Limit
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 rounded-xl px-2 text-[0.85rem]" aria-label="More" type="button" @click="openAction(&quot;More&quot;)">
                    More
                  </UButton>
                </div>
                <div class="mt-5 flex min-h-0 flex-1 flex-col border-t pt-4 border-default">
                  <p class="text-muted text-xs font-semibold tracking-wide uppercase text-highlighted">Recent Payments</p>
                  <div class="mt-4 flex flex-col gap-4">
                    <div class="grid grid-cols-[2.5rem_1fr_auto_1rem] items-center gap-3">
                      <div class="grid size-10 place-items-center rounded-full border bg-success/10 text-success border-default">
                        <UIcon name="i-lucide-circle-check" class="size-4" />
                      </div>
                      <div class="min-w-0">
                        <p class="truncate text-[0.85rem] font-semibold text-highlighted">Checkout payment</p>
                        <p class="text-muted truncate text-sm">mara@northline.co via Visa</p>
                      </div>
                      <div class="text-right">
                        <p class="text-[0.85rem] font-semibold text-highlighted">$2,840.00</p>
                        <p class="text-muted text-sm">Oct 12</p>
                      </div>
                      <UIcon name="i-lucide-chevron-right" class="text-muted" />
                    </div>
                    <div class="grid grid-cols-[2.5rem_1fr_auto_1rem] items-center gap-3">
                      <div class="grid size-10 place-items-center rounded-full border bg-default text-info border-default">
                        <UIcon name="i-lucide-credit-card" class="size-4" />
                      </div>
                      <div class="min-w-0">
                        <p class="truncate text-[0.85rem] font-semibold text-highlighted">Subscription renewal</p>
                        <p class="text-muted truncate text-sm">Helio Supply via ACH debit</p>
                      </div>
                      <div class="text-right">
                        <p class="text-[0.85rem] font-semibold text-highlighted">$8,120.50</p>
                        <p class="text-muted text-sm">Oct 11</p>
                      </div>
                      <UIcon name="i-lucide-chevron-right" class="text-muted" />
                    </div>
                    <div class="grid grid-cols-[2.5rem_1fr_auto_1rem] items-center gap-3">
                      <div class="grid size-10 place-items-center rounded-full border bg-default text-muted border-default">
                        <UIcon name="i-lucide-history" class="size-4" />
                      </div>
                      <div class="min-w-0">
                        <p class="truncate text-[0.85rem] font-semibold text-highlighted">Refund issued</p>
                        <p class="text-muted truncate text-sm">Rune Atelier checkout reversal</p>
                      </div>
                      <div class="text-right">
                        <p class="text-[0.85rem] font-semibold text-highlighted">-$429.18</p>
                        <p class="text-muted text-sm">Oct 10</p>
                      </div>
                      <UIcon name="i-lucide-chevron-right" class="text-muted" />
                    </div>
                  </div>
                  <div class="mt-auto pt-5">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-10 w-full rounded-xl text-[0.85rem]" aria-label="See All Payments" type="button" @click="openAction(&quot;See All Payments&quot;)">
                      <UIcon name="i-lucide-history" class="size-4" />
                      See All Payments
                    </UButton>
                  </div>
                </div>
              </section>
            </aside>
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
