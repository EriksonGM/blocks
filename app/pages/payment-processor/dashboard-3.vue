<!-- Page: /payment-processor/dashboard-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "totalRevenue": "Total Revenue",
  "enabled": true,
  "enabled2": true,
  "enabled3": false,
  "enabled4": true
})

const totalRevenueOptions = [
  "Total Revenue",
  "Net Revenue"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-dashboard-3.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted min-h-0 flex-1 overflow-y-auto">
          <div class="mx-auto flex w-full max-w-[1536px] min-w-0 flex-col gap-4 p-4 md:p-6">
            <div class="bg-default relative flex flex-col">
              <div class="mb-5">
                <div class="flex flex-wrap items-start justify-between gap-4">
                  <USelect v-model="form.totalRevenue" :items="totalRevenueOptions" aria-label="Total Revenue" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md whitespace-nowrap focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 text-highlighted h-auto w-40 border-0 bg-transparent p-0 font-mono text-lg font-medium shadow-none focus:ring-0" />
                </div>
                <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p class="font-mono text-3xl font-normal">$11,135.04</p>
                    <p class="text-muted font-mono text-xs">vs$7,669last period</p>
                  </div>
                  <div aria-label="Revenue chart legend" class="text-muted flex items-center gap-4 font-mono text-xs" role="list">
                    <span class="flex items-center gap-2" role="listitem">Current period</span>
                    <span class="flex items-center gap-2" role="listitem">Previous period</span>
                  </div>
                </div>
                <div class="border-default mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-dashed pt-4 md:grid-cols-5">
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <p class="text-muted truncate font-mono text-xs">Processed volume</p>
                      <span class="bg-muted text-muted grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px]">i</span>
                    </div>
                    <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p class="text-highlighted font-mono text-base font-semibold text-highlighted">$482.0K</p>
                      <p class="font-mono text-xs font-medium text-success dark:text-success">+24.64%</p>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <p class="text-muted truncate font-mono text-xs">Successful payments</p>
                      <span class="bg-muted text-muted grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px]">i</span>
                    </div>
                    <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p class="text-highlighted font-mono text-base font-semibold text-highlighted">3,887</p>
                      <p class="font-mono text-xs font-medium text-success dark:text-success">+18.32%</p>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <p class="text-muted truncate font-mono text-xs">Revenue yield</p>
                      <span class="bg-muted text-muted grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px]">i</span>
                    </div>
                    <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p class="text-highlighted font-mono text-base font-semibold text-highlighted">2.31%</p>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <p class="text-muted truncate font-mono text-xs">Refund rate</p>
                      <span class="bg-muted text-muted grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px]">i</span>
                    </div>
                    <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p class="text-highlighted font-mono text-base font-semibold text-highlighted">3.82%</p>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <p class="text-muted truncate font-mono text-xs">Avg payment</p>
                      <span class="bg-muted text-muted grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px]">i</span>
                    </div>
                    <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p class="text-highlighted font-mono text-base font-semibold text-highlighted">$124.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-80 min-w-0">
                <div width="1136" height="320" class="chart-wrapper" style="position: relative; cursor: default; width: 1136px; height: 320px;">
                  <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 1136 320" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                    <title />
                    <desc />
                    <g class="chart-zIndex-layer_-100">
                      <g class="chart-cartesian-grid">
                        <g class="chart-cartesian-grid-horizontal">
                          <line stroke-dasharray="3 3" stroke="var(--ui-border)" fill="none" x="42" y="6" width="1088" height="278" x1="42" y1="284" x2="1130" y2="284" />
                          <line stroke-dasharray="3 3" stroke="var(--ui-border)" fill="none" x="42" y="6" width="1088" height="278" x1="42" y1="214.5" x2="1130" y2="214.5" />
                          <line stroke-dasharray="3 3" stroke="var(--ui-border)" fill="none" x="42" y="6" width="1088" height="278" x1="42" y1="145" x2="1130" y2="145" />
                          <line stroke-dasharray="3 3" stroke="var(--ui-border)" fill="none" x="42" y="6" width="1088" height="278" x1="42" y1="75.5" x2="1130" y2="75.5" />
                          <line stroke-dasharray="3 3" stroke="var(--ui-border)" fill="none" x="42" y="6" width="1088" height="278" x1="42" y1="6" x2="1130" y2="6" />
                        </g>
                      </g>
                    </g>
                    <g class="chart-zIndex-layer_-50" />
                    <defs>
                      <clipPath id="recharts8-clip">
                        <rect x="42" y="6" height="278" width="1088" />
                      </clipPath>
                    </defs>
                    <g class="chart-zIndex-layer_100" />
                    <g class="chart-zIndex-layer_200" />
                    <g class="chart-zIndex-layer_300">
                      <g class="chart-layer chart-bar" id="recharts-bar-_r_4_">
                        <g class="chart-layer chart-bar-rectangles">
                          <g class="chart-layer">
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="58.8692" y="245.08" width="14" height="38.92" class="chart-rectangle" d="M 58.8692,245.08 h 14 v 38.92 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="142.5615" y="280.2933" width="14" height="3.7067" class="chart-rectangle" d="M 142.5615,280.2933 h 14 v 3.7067 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="393.6385" y="253.8833" width="14" height="30.1167" class="chart-rectangle" d="M 393.6385,253.8833 h 14 v 30.1167 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="561.0231" y="270.1" width="14" height="13.9" class="chart-rectangle" d="M 561.0231,270.1 h 14 v 13.9 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="644.7154" y="233.96" width="14" height="50.04" class="chart-rectangle" d="M 644.7154,233.96 h 14 v 50.04 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="728.4077" y="195.9667" width="14" height="88.0333" class="chart-rectangle" d="M 728.4077,195.9667 h 14 v 88.0333 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="812.1" y="214.5" width="14" height="69.5" class="chart-rectangle" d="M 812.1,214.5 h 14 v 69.5 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="895.7923" y="276.1233" width="14" height="7.8767" class="chart-rectangle" d="M 895.7923,276.1233 h 14 v 7.8767 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="979.4846" y="252.9567" width="14" height="31.0433" class="chart-rectangle" d="M 979.4846,252.9567 h 14 v 31.0433 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="color-mix(in oklch, var(--ui-text-muted) 20%, var(--ui-bg))" name="undefined" x="1063.1769" y="255.2733" width="14" height="28.7267" class="chart-rectangle" d="M 1063.1769,255.2733 h 14 v 28.7267 h -14 Z" />
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
                                <path fill="var(--ui-primary)" name="undefined" x="93.8692" y="255.2733" width="14" height="28.7267" class="chart-rectangle" d="M 93.8692,255.2733 h 14 v 28.7267 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="177.5615" y="119.0533" width="14" height="164.9467" class="chart-rectangle" d="M 177.5615,119.0533 h 14 v 164.9467 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="261.2538" y="96.35" width="14" height="187.65" class="chart-rectangle" d="M 261.2538,96.35 h 14 v 187.65 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="344.9462" y="226.0833" width="14" height="57.9167" class="chart-rectangle" d="M 344.9462,226.0833 h 14 v 57.9167 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="428.6385" y="276.1233" width="14" height="7.8767" class="chart-rectangle" d="M 428.6385,276.1233 h 14 v 7.8767 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="512.3308" y="258.0533" width="14" height="25.9467" class="chart-rectangle" d="M 512.3308,258.0533 h 14 v 25.9467 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="596.0231" y="272.88" width="14" height="11.12" class="chart-rectangle" d="M 596.0231,272.88 h 14 v 11.12 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="679.7154" y="259.9067" width="14" height="24.0933" class="chart-rectangle" d="M 679.7154,259.9067 h 14 v 24.0933 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="763.4077" y="279.83" width="14" height="4.17" class="chart-rectangle" d="M 763.4077,279.83 h 14 v 4.17 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="847.1" y="281.4517" width="14" height="2.5483" class="chart-rectangle" d="M 847.1,281.4517 h 14 v 2.5483 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="1014.4846" y="282.3783" width="14" height="1.6217" class="chart-rectangle" d="M 1014.4846,282.3783 h 14 v 1.6217 h -14 Z" />
                              </g>
                            </g>
                            <g class="chart-layer chart-bar-rectangle">
                              <g class="chart-layer chart-inactive-bar">
                                <path fill="var(--ui-primary)" name="undefined" x="1098.1769" y="279.83" width="14" height="4.17" class="chart-rectangle" d="M 1098.1769,279.83 h 14 v 4.17 h -14 Z" />
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
                          <text height="30" width="1088" stroke="none" x="83.84615384615384" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="83.84615384615384">Jul</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="167.53846153846155" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="167.53846153846155">Aug</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="251.23076923076923" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="251.23076923076923">Sep</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="334.92307692307696" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="334.92307692307696">Oct</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="418.61538461538464" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="418.61538461538464">Nov</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="502.3076923076923" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="502.3076923076923">Dec</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="586" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="586">Jan</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="669.6923076923076" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="669.6923076923076">Feb</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="753.3846153846154" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="753.3846153846154">Mar</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="837.0769230769231" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="837.0769230769231">Apr</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="920.7692307692307" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="920.7692307692307">May</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="1004.4615384615385" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="1004.4615384615385">Jun</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text height="30" width="1088" stroke="none" x="1088.1538461538462" y="292" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                            <tspan x="1088.1538461538462">Jul</tspan>
                          </text>
                        </g>
                      </g>
                      <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text width="60" height="278" stroke="none" x="34" y="284" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                            <tspan x="34">0</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text width="60" height="278" stroke="none" x="34" y="214.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                            <tspan x="34">1500</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text width="60" height="278" stroke="none" x="34" y="145" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                            <tspan x="34">3000</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text width="60" height="278" stroke="none" x="34" y="75.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                            <tspan x="34">4500</tspan>
                          </text>
                        </g>
                        <g class="chart-layer chart-cartesian-axis-tick-label">
                          <text width="60" height="278" stroke="none" x="34" y="7.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                            <tspan x="34">6000</tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <section aria-label="Payment quick actions" class="border-(--ui-border)/70 bg-(--ui-bg)/80 flex flex-wrap items-center gap-2 border-y py-5 border-default">
              <div class="grid w-full min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:border-(--ui-text-highlighted)/30 hover:bg-elevated hover:text-default inline-flex h-10 w-full items-center justify-center gap-2 rounded-none border px-4 font-mono text-xs font-bold transition-colors" aria-label="Create payment link" type="button" @click="openAction(&quot;Create payment link&quot;)">
                  <UIcon name="i-lucide-credit-card" class="size-3.5" />
                  Create payment link
                </UButton>
                <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:border-(--ui-text-highlighted)/30 hover:bg-elevated hover:text-default inline-flex h-10 w-full items-center justify-center gap-2 rounded-none border px-4 font-mono text-xs font-bold transition-colors" aria-label="Send invoice" type="button" @click="openAction(&quot;Send invoice&quot;)">
                  <UIcon name="i-lucide-send" class="size-3.5" />
                  Send invoice
                </UButton>
                <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:border-(--ui-text-highlighted)/30 hover:bg-elevated hover:text-default inline-flex h-10 w-full items-center justify-center gap-2 rounded-none border px-4 font-mono text-xs font-bold transition-colors" aria-label="Review disputes" type="button" @click="openAction(&quot;Review disputes&quot;)">
                  <UIcon name="i-lucide-shield-check" class="size-3.5" />
                  Review disputes
                </UButton>
                <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:border-(--ui-text-highlighted)/30 hover:bg-elevated hover:text-default inline-flex h-10 w-full items-center justify-center gap-2 rounded-none border px-4 font-mono text-xs font-bold transition-colors" aria-label="Issue refund" type="button" @click="openAction(&quot;Issue refund&quot;)">
                  <UIcon name="i-lucide-refresh-ccw" class="size-3.5" />
                  Issue refund
                </UButton>
                <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:border-(--ui-text-highlighted)/30 hover:bg-elevated hover:text-default inline-flex h-10 w-full items-center justify-center gap-2 rounded-none border px-4 font-mono text-xs font-bold transition-colors" aria-label="Export receipts" type="button" @click="exportCsv()">
                  <UIcon name="i-lucide-receipt-text" class="size-3.5" />
                  Export receipts
                </UButton>
              </div>
            </section>
            <div class="grid h-full w-full grid-cols-1 gap-4 p-1 md:grid-cols-12">
              <!-- Card 1: Payment Funnel -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-2" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-funnel" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Payment Funnel</h3>
                        <p class="text-muted font-mono text-xs">Track checkout to paid</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0">
                  <div class="flex w-full min-w-0 flex-col">
                    <div class="mb-4 flex items-center justify-between">
                      <div class="space-y-1">
                        <div class="text-highlighted font-mono text-3xl font-medium tracking-tighter" style="opacity:0;transform:scale(0.5)">25.0%</div>
                        <div class="text-muted font-mono text-xs font-medium tracking-widest uppercase">Paid Conversion</div>
                      </div>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 bg-success/10 font-mono text-success dark:text-success border-default">+3.1%</div>
                    </div>
                    <div class="h-[240px] w-full">
                      <div class="h-full w-full" style="mask-image:linear-gradient(to bottom, black 20%, color-mix(in oklab, var(--ui-text-highlighted) 78%, transparent) 78%, transparent 100%)">
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:240px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="315" height="240" class="chart-wrapper" style="position: relative; cursor: default; width: 315px; height: 240px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 315 240" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100" />
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="5" y="5" height="230" width="305" />
                                  </clipPath>
                                </defs>
                                <g class="chart-layer chart-trapezoids">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-funnel-trapezoid">
                                      <g class="chart-layer chart-shape" />
                                    </g>
                                    <g class="chart-layer chart-funnel-trapezoid">
                                      <g class="chart-layer chart-shape" />
                                    </g>
                                    <g class="chart-layer chart-funnel-trapezoid">
                                      <g class="chart-layer chart-shape" />
                                    </g>
                                    <g class="chart-layer chart-funnel-trapezoid">
                                      <g class="chart-layer chart-shape" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_100" />
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
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-2">
                      <div class="border-default bg-(--ui-bg-elevated)/20 flex min-w-0 items-center gap-3 border px-3 py-2">
                        <div class="h-9 w-1.5 shrink-0" style="background-color:var(--ui-primary)" />
                        <div class="min-w-0">
                          <div class="text-muted truncate font-mono text-[10px] font-medium">Checkout</div>
                          <div class="text-highlighted mt-0.5 font-mono text-sm font-semibold">100%</div>
                        </div>
                      </div>
                      <div class="border-default bg-(--ui-bg-elevated)/20 flex min-w-0 items-center gap-3 border px-3 py-2">
                        <div class="h-9 w-1.5 shrink-0" style="background-color:color-mix(in oklch, var(--ui-text-muted) 72%, var(--ui-bg))" />
                        <div class="min-w-0">
                          <div class="text-muted truncate font-mono text-[10px] font-medium">Card Added</div>
                          <div class="text-highlighted mt-0.5 font-mono text-sm font-semibold">65%</div>
                        </div>
                      </div>
                      <div class="border-default bg-(--ui-bg-elevated)/20 flex min-w-0 items-center gap-3 border px-3 py-2">
                        <div class="h-9 w-1.5 shrink-0" style="background-color:color-mix(in oklch, var(--ui-text-muted) 48%, var(--ui-bg))" />
                        <div class="min-w-0">
                          <div class="text-muted truncate font-mono text-[10px] font-medium">3DS Auth</div>
                          <div class="text-highlighted mt-0.5 font-mono text-sm font-semibold">45%</div>
                        </div>
                      </div>
                      <div class="border-default bg-(--ui-bg-elevated)/20 flex min-w-0 items-center gap-3 border px-3 py-2">
                        <div class="h-9 w-1.5 shrink-0" style="background-color:color-mix(in oklch, var(--ui-text-muted) 32%, var(--ui-bg))" />
                        <div class="min-w-0">
                          <div class="text-muted truncate font-mono text-[10px] font-medium">Paid</div>
                          <div class="text-highlighted mt-0.5 font-mono text-sm font-semibold">25%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 2: Live Volume -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-1" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-activity" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Live Volume</h3>
                        <p class="text-muted font-mono text-xs">Watch processed volume now</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0 px-0 pb-0">
                  <div class="relative flex h-full flex-col">
                    <div class="mt-auto h-[180px] w-full">
                      <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                      <div class="chart-responsive-container" style="width:100%;height:180px;min-width:0" role="img" aria-label="Analytics chart">
                        <div style="width:0;height:0;overflow:visible">
                          <div width="363" height="180" class="chart-wrapper" style="position: relative; cursor: default; width: 363px; height: 180px;">
                            <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 363 180" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                              <title />
                              <desc />
                              <g class="chart-zIndex-layer_-100" />
                              <g class="chart-zIndex-layer_-50" />
                              <defs>
                                <clipPath id="recharts7-clip">
                                  <rect x="0" y="22" height="158" width="353" />
                                </clipPath>
                              </defs>
                              <defs>
                                <linearGradient id="colorRealTime" x1="0" x2="0" y1="0" y2="1">
                                  <stop offset="0%" stop-color="var(--ui-primary)" stop-opacity="0.3" />
                                  <stop offset="100%" stop-color="var(--ui-primary)" stop-opacity="0" />
                                </linearGradient>
                              </defs>
                              <g class="chart-zIndex-layer_100">
                                <g class="chart-layer chart-area">
                                  <g class="chart-layer">
                                    <defs>
                                      <clipPath id="animationClipPath-recharts-area-_r_1_">
                                        <rect x="0" y="0" width="0" height="182" />
                                      </clipPath>
                                    </defs>
                                    <g class="chart-layer">
                                      <g class="chart-layer">
                                        <path stroke-width="2" fill="url(#colorRealTime)" fill-opacity="0.6" height="158" stroke="none" width="353" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M0,124.7C10.697,114.167,21.394,103.633,32.091,103.633C42.788,103.633,53.485,112.85,64.182,112.85C74.879,112.85,85.576,97.05,96.273,97.05C106.97,97.05,117.667,115.483,128.364,115.483C139.061,115.483,149.758,79.933,160.455,79.933C171.152,79.933,181.848,86.517,192.545,86.517C203.242,86.517,213.939,64.133,224.636,64.133C235.333,64.133,246.03,73.35,256.727,73.35C267.424,73.35,278.121,56.233,288.818,56.233C299.515,56.233,310.212,62.817,320.909,62.817C331.606,62.817,342.303,54.258,353,45.7L353,180C342.303,180,331.606,180,320.909,180C310.212,180,299.515,180,288.818,180C278.121,180,267.424,180,256.727,180C246.03,180,235.333,180,224.636,180C213.939,180,203.242,180,192.545,180C181.848,180,171.152,180,160.455,180C149.758,180,139.061,180,128.364,180C117.667,180,106.97,180,96.273,180C85.576,180,74.879,180,64.182,180C53.485,180,42.788,180,32.091,180C21.394,180,10.697,180,0,180Z" style="filter: drop-shadow(0 0 5px var(--ui-primary));" />
                                        <path stroke-width="2" fill="none" fill-opacity="0.6" height="158" stroke="var(--ui-primary)" width="353" class="chart-curve chart-area-curve" d="M0,124.7C10.697,114.167,21.394,103.633,32.091,103.633C42.788,103.633,53.485,112.85,64.182,112.85C74.879,112.85,85.576,97.05,96.273,97.05C106.97,97.05,117.667,115.483,128.364,115.483C139.061,115.483,149.758,79.933,160.455,79.933C171.152,79.933,181.848,86.517,192.545,86.517C203.242,86.517,213.939,64.133,224.636,64.133C235.333,64.133,246.03,73.35,256.727,73.35C267.424,73.35,278.121,56.233,288.818,56.233C299.515,56.233,310.212,62.817,320.909,62.817C331.606,62.817,342.303,54.258,353,45.7" style="filter: drop-shadow(0 0 5px var(--ui-primary));" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g class="chart-zIndex-layer_200" />
                              <g class="chart-zIndex-layer_300" />
                              <g class="chart-zIndex-layer_400" />
                              <g class="chart-zIndex-layer_500" />
                              <g class="chart-zIndex-layer_600">
                                <g class="chart-layer chart-area-dots">
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g>
                                    <line stroke="var(--ui-text-highlighted)" stroke-dasharray="4 6" stroke-width="1" x1="0" x2="353" y1="45.7" y2="45.7" />
                                    <circle cx="353" cy="45.7" fill="var(--ui-bg)" opacity="0.85" r="14" stroke="var(--ui-primary)" stroke-width="7" />
                                    <circle cx="353" cy="45.7" fill="var(--ui-primary)" r="4.5" stroke="var(--ui-bg)" stroke-width="2" />
                                    <rect fill="var(--popover)" height="24" rx="4" stroke="var(--ui-border)" width="66" x="267" y="33.7" />
                                    <text dominant-baseline="middle" fill="var(--popover-foreground)" text-anchor="middle" x="300" y="45.7">$18.6K</text>
                                  </g>
                                </g>
                              </g>
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
                </div>
              </UCard>
              <!-- Card 3: Recent Payments -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-2" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-users" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Recent Payments</h3>
                        <p class="text-muted font-mono text-xs">Latest authorization activity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0">
                  <div class="relative max-h-[460px] overflow-y-auto pr-2" style="mask-image:linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%);scrollbar-color:var(--ui-border) transparent">
                    <div class="space-y-2">
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Leonard Kim" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$248.00</span>
                            <span class="text-muted font-mono text-xs">Visa 4242 - Succeeded</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">12s ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Avery Stone" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$89.20</span>
                            <span class="text-muted font-mono text-xs">Mastercard 1881 - Pending</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">1m ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Mika Nakamura" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$1,240.00</span>
                            <span class="text-muted font-mono text-xs">Amex 0005 - Succeeded</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">2m ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Emilia Weber" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$560.00</span>
                            <span class="text-muted font-mono text-xs">SEPA debit - Processing</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">4m ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Camille Laurent" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$32.10</span>
                            <span class="text-muted font-mono text-xs">Visa 9012 - Failed</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">5m ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Noah Osei" src="/reference/62828bc2a489837e.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$410.00</span>
                            <span class="text-muted font-mono text-xs">Interac - Succeeded</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">7m ago</span>
                      </div>
                      <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between border p-2 text-sm border-default" style="opacity:1;transform:none">
                        <div class="flex items-center gap-3.5">
                          <span class="relative flex overflow-hidden rounded-full border-default bg-muted size-10 shrink-0 border">
                            <img class="aspect-square h-full w-full" alt="Isla Bennett" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                          </span>
                          <div class="flex flex-col gap-1">
                            <span class="text-default group-hover:text-highlighted font-mono text-xs font-medium">$74.50</span>
                            <span class="text-muted font-mono text-xs">Apple Pay - Succeeded</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 pl-3 text-right font-mono text-xs">9m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 4: Processor Health -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-1" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-gauge" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Processor Health</h3>
                        <p class="text-muted font-mono text-xs">Monitor processor reliability</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0 pb-0">
                  <div class="grid h-[150px] grid-cols-3 gap-3">
                    <div class="border-default flex h-full flex-col items-center justify-between gap-2 border border-b-0 bg-[repeating-linear-gradient(135deg,var(--ui-bg-muted)_0,var(--ui-bg-muted)_1px,transparent_1px,transparent_8px)] p-3">
                      <div class="relative flex size-14 items-center justify-center">
                        <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36" width="100%" height="100%">
                          <title>Score indicator</title>
                          <circle class="stroke-(--ui-bg-elevated)" cx="18" cy="18" fill="none" r="16" stroke-width="2.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" style="opacity:0.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" />
                        </svg>
                        <span class="text-highlighted absolute font-mono text-sm font-medium">99</span>
                      </div>
                      <div class="space-y-0.5 text-center">
                        <div class="text-muted font-mono text-[10px] font-bold tracking-widest uppercase">AUTH</div>
                        <div class="text-highlighted font-mono text-xs font-medium opacity-90">98.7%</div>
                      </div>
                    </div>
                    <div class="border-default flex h-full flex-col items-center justify-between gap-2 border border-b-0 bg-[repeating-linear-gradient(135deg,var(--ui-bg-muted)_0,var(--ui-bg-muted)_1px,transparent_1px,transparent_8px)] p-3">
                      <div class="relative flex size-14 items-center justify-center">
                        <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36" width="100%" height="100%">
                          <title>Score indicator</title>
                          <circle class="stroke-(--ui-bg-elevated)" cx="18" cy="18" fill="none" r="16" stroke-width="2.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" style="opacity:0.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" />
                        </svg>
                        <span class="text-highlighted absolute font-mono text-sm font-medium">96</span>
                      </div>
                      <div class="space-y-0.5 text-center">
                        <div class="text-muted font-mono text-[10px] font-bold tracking-widest uppercase">API</div>
                        <div class="text-highlighted font-mono text-xs font-medium opacity-90">142ms</div>
                      </div>
                    </div>
                    <div class="border-default flex h-full flex-col items-center justify-between gap-2 border border-b-0 bg-[repeating-linear-gradient(135deg,var(--ui-bg-muted)_0,var(--ui-bg-muted)_1px,transparent_1px,transparent_8px)] p-3">
                      <div class="relative flex size-14 items-center justify-center">
                        <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36" width="100%" height="100%">
                          <title>Score indicator</title>
                          <circle class="stroke-(--ui-bg-elevated)" cx="18" cy="18" fill="none" r="16" stroke-width="2.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" style="opacity:0.5" />
                          <circle class="stroke-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-linecap="round" stroke-width="2.5" />
                        </svg>
                        <span class="text-highlighted absolute font-mono text-sm font-medium">100</span>
                      </div>
                      <div class="space-y-0.5 text-center">
                        <div class="text-muted font-mono text-[10px] font-bold tracking-widest uppercase">HOOKS</div>
                        <div class="text-highlighted font-mono text-xs font-medium opacity-90">99.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 5: Payment Events -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-1" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-mouse-pointer-click" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Payment Events</h3>
                        <p class="text-muted font-mono text-xs">Track processor event flow</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0">
                  <div class="relative max-h-[230px] overflow-y-auto pr-2" style="mask-image:linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%);scrollbar-color:var(--ui-border) transparent">
                    <div class="space-y-2">
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-success dark:text-success">
                            <UIcon name="i-lucide-credit-card" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">payment.succeeded</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">Visa 4242 - $248.00</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-success/10 text-success dark:text-success border-default">15.8k</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-success dark:text-success">
                            <UIcon name="i-lucide-receipt-text" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">invoice.paid</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">INV-2048 settled</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-success/10 text-success dark:text-success border-default">8.9k</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-muted">
                            <UIcon name="i-lucide-refresh-ccw" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">charge.refunded</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">Partial refund issued</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono border-default">1.2k</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-warning dark:text-warning">
                            <UIcon name="i-lucide-shield-check" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">dispute.created</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">Needs evidence</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-warning/10 text-warning dark:text-warning border-default">38</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-muted">
                            <UIcon name="i-lucide-send" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">payout.sent</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">Bank transfer queued</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono border-default">246</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-error">
                            <UIcon name="i-lucide-circle-alert" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">payment.failed</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">card_declined</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-(--ui-error)/10 text-error border-default">0.9k</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-muted">
                            <UIcon name="i-lucide-shield-check" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">mandate.updated</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">ACH authorization</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono border-default">418</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-success dark:text-success">
                            <UIcon name="i-lucide-activity" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">webhook.delivered</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">200 OK - 142ms</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-success/10 text-success dark:text-success border-default">32k</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-muted">
                            <UIcon name="i-lucide-refresh-ccw" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">refund.created</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">$74.50 returned</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono border-default">620</div>
                      </div>
                      <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-2 text-xs border-default" style="opacity:1;transform:none">
                        <div class="flex min-w-0 items-center gap-3">
                          <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-success dark:text-success">
                            <UIcon name="i-lucide-receipt-text" class="size-4" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-default truncate font-mono text-xs font-medium">subscription.renewed</div>
                            <div class="text-muted mt-0.5 truncate font-mono text-[10px]">Monthly plan</div>
                          </div>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 shrink-0 font-mono bg-success/10 text-success dark:text-success border-default">4.1k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 6: Payment Failures -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-1" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-bug" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Payment Failures</h3>
                        <p class="text-muted font-mono text-xs">Card declines and webhook errors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0 pb-0">
                  <div class="flex h-full flex-1 flex-col">
                    <div class="border-default bg-(--ui-bg-elevated)/20 relative overflow-hidden border p-4 transition-all">
                      <div class="flex items-start gap-3">
                        <div class="bg-(--ui-error)/10 rounded-md p-2">
                          <div style="transform: none;">
                            <UIcon name="i-lucide-circle-alert" class="text-error size-4 shrink-0" />
                          </div>
                        </div>
                        <div class="min-w-0 flex-1 space-y-2">
                          <div class="flex items-center justify-between gap-2">
                            <p class="text-default truncate font-mono text-[11px] font-medium">payment_intent.payment_failed</p>
                            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-(--ui-error) text-inverted shadow-sm hover:bg-(--ui-error)/80 border-default">
                              <span class="font-mono text-[10px]">DECLINED</span>
                            </div>
                          </div>
                          <p class="border-default bg-(--ui-bg)/50 text-muted rounded border p-1.5 font-mono text-[10px]">card_declined - insufficient_funds</p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 flex flex-col">
                      <div class="text-muted flex justify-between px-1 font-mono text-[10px] font-medium tracking-widest uppercase">
                        <span>Last 24 hours</span>
                        <span>38 Failed</span>
                      </div>
                      <div class="mt-3 grid grid-cols-3 gap-2">
                        <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 min-w-0 border px-2 py-1.5 border-default">
                          <div class="text-muted truncate font-mono text-[9px] font-medium tracking-widest uppercase">Declined</div>
                          <div class="text-highlighted mt-0.5 font-mono text-xs font-semibold">18</div>
                        </div>
                        <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 min-w-0 border px-2 py-1.5 border-default">
                          <div class="text-muted truncate font-mono text-[9px] font-medium tracking-widest uppercase">Recovered</div>
                          <div class="text-highlighted mt-0.5 font-mono text-xs font-semibold">11</div>
                        </div>
                        <div class="border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 min-w-0 border px-2 py-1.5 border-default">
                          <div class="text-muted truncate font-mono text-[9px] font-medium tracking-widest uppercase">Retrying</div>
                          <div class="text-highlighted mt-0.5 font-mono text-xs font-semibold">9</div>
                        </div>
                      </div>
                      <div class="mt-4 flex h-12 items-end gap-1">
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:40%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:70%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:30%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-error)" style="height:80%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:50%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-error)" style="height:90%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:60%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:40%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:65%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-error)" style="height:85%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:45%" />
                        <div class="flex-1 rounded-t-[1px] duration-300 bg-(--ui-text)/45 hover:bg-(--ui-text)/65" style="height:75%" />
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 7: Payment Controls -->
              <UCard class="group relative overflow-hidden backdrop-blur-xl duration-500 h-full md:col-span-4 md:row-span-1" style="opacity:1;transform:none" :ui="{ body: 'contents' }">
                <div class="relative z-20 px-6 py-4">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="bg-(--ui-bg-elevated)/40 ring-default flex size-8 items-center justify-center ring-1">
                        <UIcon name="i-lucide-flag" class="text-muted size-4" />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <h3 class="text-highlighted font-mono text-sm font-medium text-highlighted">Payment Controls</h3>
                        <p class="text-muted font-mono text-xs">Manage payment method rollout</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 p-6 pt-0">
                  <div class="max-h-[230px] space-y-2 overflow-y-auto pr-2" style="mask-image:linear-gradient(to bottom, black 90%, transparent 100%);scrollbar-color:var(--ui-border) transparent">
                    <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-3 transition-all border-default">
                      <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-highlighted shadow-[0_0_14px_color-mix(in_oklch,var(--ui-text-highlighted)_16%,transparent)]">
                          <UIcon name="i-lucide-credit-card" class="size-4" />
                        </div>
                        <div class="flex min-w-0 flex-col gap-0.5">
                          <span class="text-default group-hover:text-highlighted truncate font-mono text-xs font-medium">Apple Pay</span>
                          <span class="text-muted font-mono text-[9px] font-medium tracking-widest uppercase">wallet - Enabled</span>
                        </div>
                      </div>
                      <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                    </div>
                    <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-3 transition-all border-default">
                      <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-highlighted shadow-[0_0_14px_color-mix(in_oklch,var(--ui-text-highlighted)_16%,transparent)]">
                          <UIcon name="i-lucide-shield-check" class="size-4" />
                        </div>
                        <div class="flex min-w-0 flex-col gap-0.5">
                          <span class="text-default group-hover:text-highlighted truncate font-mono text-xs font-medium">ACH Debit</span>
                          <span class="text-muted font-mono text-[9px] font-medium tracking-widest uppercase">bank - Enabled</span>
                        </div>
                      </div>
                      <USwitch v-model="form.enabled2" aria-label="Toggle setting" />
                    </div>
                    <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-3 transition-all border-default">
                      <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-(--ui-text-muted)/60">
                          <UIcon name="i-lucide-shield-check" class="size-4" />
                        </div>
                        <div class="flex min-w-0 flex-col gap-0.5">
                          <span class="text-default group-hover:text-highlighted truncate font-mono text-xs font-medium">3DS Enforcement</span>
                          <span class="text-muted font-mono text-[9px] font-medium tracking-widest uppercase">risk - Monitoring</span>
                        </div>
                      </div>
                      <USwitch v-model="form.enabled3" aria-label="Toggle setting" />
                    </div>
                    <div class="group border-(--ui-border)/50 bg-(--ui-bg-elevated)/20 flex items-center justify-between gap-3 border p-3 transition-all border-default">
                      <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="border-default bg-default grid size-9 shrink-0 place-items-center rounded-md border text-highlighted shadow-[0_0_14px_color-mix(in_oklch,var(--ui-text-highlighted)_16%,transparent)]">
                          <UIcon name="i-lucide-refresh-ccw" class="size-4" />
                        </div>
                        <div class="flex min-w-0 flex-col gap-0.5">
                          <span class="text-default group-hover:text-highlighted truncate font-mono text-xs font-medium">Auto-retry Invoices</span>
                          <span class="text-muted font-mono text-[9px] font-medium tracking-widest uppercase">billing - Enabled</span>
                        </div>
                      </div>
                      <USwitch v-model="form.enabled4" aria-label="Toggle setting" />
                    </div>
                  </div>
                </div>
              </UCard>
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
