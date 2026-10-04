<!-- Page: /original/dashboard-12 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 12 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/dashboard-12">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col gap-4 p-4">
              <div class="flex flex-col items-start justify-between gap-2 md:flex-row">
                <div>
                  <h2 class="text-2xl font-bold tracking-tight text-highlighted">Overview Dashboard</h2>
                  <p class="text-muted">Here, take a look at your sales.</p>
                </div>
                <div class="flex items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 justify-start text-left font-normal text-muted" aria-label="Pick a date" type="button" @click="openAction(&quot;Pick a date&quot;)">
                    <UIcon name="i-lucide-calendar" class="size-4" />
                    <span>Pick a date</span>
                  </UButton>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Filter By" type="button" @click="openAction(&quot;Filter By&quot;)">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-filter">
                      <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
                    </svg>
                     Filter By
                  </UButton>
                </div>
              </div>
              <div class="grid auto-rows-auto grid-cols-12 gap-5">
                <div class="col-span-12 xl:col-span-8">
                  <!-- Card 1: Budgets - Consolidated -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row border-default">
                      <div class="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                        <div class="leading-none font-semibold tracking-tight">Budgets - Consolidated</div>
                        <div class="text-muted text-sm">Showing total budgets for the last 3 months</div>
                      </div>
                      <div class="flex">
                        <UButton color="neutral" variant="outline" class="data-[active=true]:bg-(--ui-bg-muted)/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6 border-default" aria-label="Desktop24,828" type="button" @click="openAction(&quot;Desktop24,828&quot;)">
                          <span class="text-muted text-xs">Desktop</span>
                          <span class="text-lg leading-none font-bold sm:text-3xl">24,828</span>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="data-[active=true]:bg-(--ui-bg-muted)/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6 border-default" aria-label="Mobile25,010" type="button" @click="openAction(&quot;Mobile25,010&quot;)">
                          <span class="text-muted text-xs">Mobile</span>
                          <span class="text-lg leading-none font-bold sm:text-3xl">25,010</span>
                        </UButton>
                      </div>
                    </div>
                    <div class="p-6 pt-0 px-2 sm:p-6">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[250px] w-full" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--color-desktop:var(--ui-text-dimmed)" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-dimmed);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="711" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 711px; height: 250px;">
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 711 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="220" x1="12" y1="220" x2="699" y2="220" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="220" x1="12" y1="165" x2="699" y2="165" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="220" x1="12" y1="110" x2="699" y2="110" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="220" x1="12" y1="55" x2="699" y2="55" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="12" y="0" width="687" height="220" x1="12" y1="0" x2="699" y2="0" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="12" y="0" height="220" width="687" />
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
                                            <path fill="var(--color-desktop)" name="undefined" x="12.7549" y="138.6" width="6" height="81.4" class="chart-rectangle" d="M 12.7549,138.6 h 6 v 81.4 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="20.3044" y="184.4333" width="6" height="35.5667" class="chart-rectangle" d="M 20.3044,184.4333 h 6 v 35.5667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="27.8538" y="158.7667" width="6" height="61.2333" class="chart-rectangle" d="M 27.8538,158.7667 h 6 v 61.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="35.4033" y="131.2667" width="6" height="88.7333" class="chart-rectangle" d="M 35.4033,131.2667 h 6 v 88.7333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="42.9527" y="83.2333" width="6" height="136.7667" class="chart-rectangle" d="M 42.9527,83.2333 h 6 v 136.7667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="50.5022" y="109.6333" width="6" height="110.3667" class="chart-rectangle" d="M 50.5022,109.6333 h 6 v 110.3667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="58.0516" y="130.1667" width="6" height="89.8333" class="chart-rectangle" d="M 58.0516,130.1667 h 6 v 89.8333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="65.6011" y="70.0333" width="6" height="149.9667" class="chart-rectangle" d="M 65.6011,70.0333 h 6 v 149.9667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="73.1505" y="198.3667" width="6" height="21.6333" class="chart-rectangle" d="M 73.1505,198.3667 h 6 v 21.6333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="80.7" y="124.3" width="6" height="95.7" class="chart-rectangle" d="M 80.7,124.3 h 6 v 95.7 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="88.2495" y="100.1" width="6" height="119.9" class="chart-rectangle" d="M 88.2495,100.1 h 6 v 119.9 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="95.7989" y="112.9333" width="6" height="107.0667" class="chart-rectangle" d="M 95.7989,112.9333 h 6 v 107.0667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="103.3484" y="94.6" width="6" height="125.4" class="chart-rectangle" d="M 103.3484,94.6 h 6 v 125.4 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="110.8978" y="169.7667" width="6" height="50.2333" class="chart-rectangle" d="M 110.8978,169.7667 h 6 v 50.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="118.4473" y="176" width="6" height="44" class="chart-rectangle" d="M 118.4473,176 h 6 v 44 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="125.9967" y="169.4" width="6" height="50.6" class="chart-rectangle" d="M 125.9967,169.4 h 6 v 50.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="133.5462" y="56.4667" width="6" height="163.5333" class="chart-rectangle" d="M 133.5462,56.4667 h 6 v 163.5333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="141.0956" y="86.5333" width="6" height="133.4667" class="chart-rectangle" d="M 141.0956,86.5333 h 6 v 133.4667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="148.6451" y="130.9" width="6" height="89.1" class="chart-rectangle" d="M 148.6451,130.9 h 6 v 89.1 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="156.1945" y="187.3667" width="6" height="32.6333" class="chart-rectangle" d="M 156.1945,187.3667 h 6 v 32.6333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="163.744" y="169.7667" width="6" height="50.2333" class="chart-rectangle" d="M 163.744,169.7667 h 6 v 50.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="171.2934" y="137.8667" width="6" height="82.1333" class="chart-rectangle" d="M 171.2934,137.8667 h 6 v 82.1333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="178.8429" y="169.4" width="6" height="50.6" class="chart-rectangle" d="M 178.8429,169.4 h 6 v 50.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="186.3923" y="78.1" width="6" height="141.9" class="chart-rectangle" d="M 186.3923,78.1 h 6 v 141.9 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="193.9418" y="141.1667" width="6" height="78.8333" class="chart-rectangle" d="M 193.9418,141.1667 h 6 v 78.8333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="201.4912" y="192.5" width="6" height="27.5" class="chart-rectangle" d="M 201.4912,192.5 h 6 v 27.5 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="209.0407" y="79.5667" width="6" height="140.4333" class="chart-rectangle" d="M 209.0407,79.5667 h 6 v 140.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="216.5901" y="175.2667" width="6" height="44.7333" class="chart-rectangle" d="M 216.5901,175.2667 h 6 v 44.7333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="224.1396" y="104.5" width="6" height="115.5" class="chart-rectangle" d="M 224.1396,104.5 h 6 v 115.5 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="231.689" y="53.5333" width="6" height="166.4667" class="chart-rectangle" d="M 231.689,53.5333 h 6 v 166.4667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="239.2385" y="159.5" width="6" height="60.5" class="chart-rectangle" d="M 239.2385,159.5 h 6 v 60.5 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="246.7879" y="112.5667" width="6" height="107.4333" class="chart-rectangle" d="M 246.7879,112.5667 h 6 v 107.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="254.3374" y="129.4333" width="6" height="90.5667" class="chart-rectangle" d="M 254.3374,129.4333 h 6 v 90.5667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="261.8868" y="78.8333" width="6" height="141.1667" class="chart-rectangle" d="M 261.8868,78.8333 h 6 v 141.1667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="269.4363" y="43.6333" width="6" height="176.3667" class="chart-rectangle" d="M 269.4363,43.6333 h 6 v 176.3667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="276.9857" y="37.4" width="6" height="182.6" class="chart-rectangle" d="M 276.9857,37.4 h 6 v 182.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="284.5352" y="77.7333" width="6" height="142.2667" class="chart-rectangle" d="M 284.5352,77.7333 h 6 v 142.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="292.0846" y="165.3667" width="6" height="54.6333" class="chart-rectangle" d="M 292.0846,165.3667 h 6 v 54.6333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="299.6341" y="136.7667" width="6" height="83.2333" class="chart-rectangle" d="M 299.6341,136.7667 h 6 v 83.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="307.1835" y="112.5667" width="6" height="107.4333" class="chart-rectangle" d="M 307.1835,112.5667 h 6 v 107.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="314.733" y="97.1667" width="6" height="122.8333" class="chart-rectangle" d="M 314.733,97.1667 h 6 v 122.8333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="322.2824" y="147.7667" width="6" height="72.2333" class="chart-rectangle" d="M 322.2824,147.7667 h 6 v 72.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="329.8319" y="147.7667" width="6" height="72.2333" class="chart-rectangle" d="M 329.8319,147.7667 h 6 v 72.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="337.3813" y="55.7333" width="6" height="164.2667" class="chart-rectangle" d="M 337.3813,55.7333 h 6 v 164.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="344.9308" y="46.5667" width="6" height="173.4333" class="chart-rectangle" d="M 344.9308,46.5667 h 6 v 173.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="352.4802" y="96.0667" width="6" height="123.9333" class="chart-rectangle" d="M 352.4802,96.0667 h 6 v 123.9333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="360.0297" y="37.0333" width="6" height="182.9667" class="chart-rectangle" d="M 360.0297,37.0333 h 6 v 182.9667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="367.5791" y="104.5" width="6" height="115.5" class="chart-rectangle" d="M 367.5791,104.5 h 6 v 115.5 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="375.1286" y="133.8333" width="6" height="86.1667" class="chart-rectangle" d="M 375.1286,133.8333 h 6 v 86.1667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="382.678" y="155.1" width="6" height="64.9" class="chart-rectangle" d="M 382.678,155.1 h 6 v 64.9 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="390.2275" y="189.9333" width="6" height="30.0667" class="chart-rectangle" d="M 390.2275,189.9333 h 6 v 30.0667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="397.7769" y="190.3" width="6" height="29.7" class="chart-rectangle" d="M 397.7769,190.3 h 6 v 29.7 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="405.3264" y="127.6" width="6" height="92.4" class="chart-rectangle" d="M 405.3264,127.6 h 6 v 92.4 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="412.8758" y="112.2" width="6" height="107.8" class="chart-rectangle" d="M 412.8758,112.2 h 6 v 107.8 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="420.4253" y="146.3" width="6" height="73.7" class="chart-rectangle" d="M 420.4253,146.3 h 6 v 73.7 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="427.9747" y="141.9" width="6" height="78.1" class="chart-rectangle" d="M 427.9747,141.9 h 6 v 78.1 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="435.5242" y="66" width="6" height="154" class="chart-rectangle" d="M 435.5242,66 h 6 v 154 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="443.0736" y="134.5667" width="6" height="85.4333" class="chart-rectangle" d="M 443.0736,134.5667 h 6 v 85.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="450.6231" y="191.4" width="6" height="28.6" class="chart-rectangle" d="M 450.6231,191.4 h 6 v 28.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="458.1725" y="95.3333" width="6" height="124.6667" class="chart-rectangle" d="M 458.1725,95.3333 h 6 v 124.6667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="465.722" y="154.7333" width="6" height="65.2667" class="chart-rectangle" d="M 465.722,154.7333 h 6 v 65.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="473.2714" y="154.7333" width="6" height="65.2667" class="chart-rectangle" d="M 473.2714,154.7333 h 6 v 65.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="480.8209" y="47.6667" width="6" height="172.3333" class="chart-rectangle" d="M 480.8209,47.6667 h 6 v 172.3333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="488.3703" y="182.2333" width="6" height="37.7667" class="chart-rectangle" d="M 488.3703,182.2333 h 6 v 37.7667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="495.9198" y="59.0333" width="6" height="160.9667" class="chart-rectangle" d="M 495.9198,59.0333 h 6 v 160.9667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="503.4692" y="187.7333" width="6" height="32.2667" class="chart-rectangle" d="M 503.4692,187.7333 h 6 v 32.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="511.0187" y="112.2" width="6" height="107.8" class="chart-rectangle" d="M 511.0187,112.2 h 6 v 107.8 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="518.5681" y="101.5667" width="6" height="118.4333" class="chart-rectangle" d="M 518.5681,101.5667 h 6 v 118.4333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="526.1176" y="78.8333" width="6" height="141.1667" class="chart-rectangle" d="M 526.1176,78.8333 h 6 v 141.1667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="533.667" y="59.4" width="6" height="160.6" class="chart-rectangle" d="M 533.667,59.4 h 6 v 160.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="541.2165" y="163.1667" width="6" height="56.8333" class="chart-rectangle" d="M 541.2165,163.1667 h 6 v 56.8333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="548.7659" y="186.2667" width="6" height="33.7333" class="chart-rectangle" d="M 548.7659,186.2667 h 6 v 33.7333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="556.3154" y="39.6" width="6" height="180.4" class="chart-rectangle" d="M 556.3154,39.6 h 6 v 180.4 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="563.8648" y="190.3" width="6" height="29.7" class="chart-rectangle" d="M 563.8648,190.3 h 6 v 29.7 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="571.4143" y="63.8" width="6" height="156.2" class="chart-rectangle" d="M 571.4143,63.8 h 6 v 156.2 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="578.9637" y="107.4333" width="6" height="112.5667" class="chart-rectangle" d="M 578.9637,107.4333 h 6 v 112.5667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="586.5132" y="83.9667" width="6" height="136.0333" class="chart-rectangle" d="M 586.5132,83.9667 h 6 v 136.0333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="594.0626" y="45.8333" width="6" height="174.1667" class="chart-rectangle" d="M 594.0626,45.8333 h 6 v 174.1667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="601.6121" y="180.7667" width="6" height="39.2333" class="chart-rectangle" d="M 601.6121,180.7667 h 6 v 39.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="609.1615" y="94.9667" width="6" height="125.0333" class="chart-rectangle" d="M 609.1615,94.9667 h 6 v 125.0333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="616.711" y="70.4" width="6" height="149.6" class="chart-rectangle" d="M 616.711,70.4 h 6 v 149.6 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="624.2604" y="158.0333" width="6" height="61.9667" class="chart-rectangle" d="M 624.2604,158.0333 h 6 v 61.9667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="631.8099" y="103.7667" width="6" height="116.2333" class="chart-rectangle" d="M 631.8099,103.7667 h 6 v 116.2333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="639.3593" y="44" width="6" height="176" class="chart-rectangle" d="M 639.3593,44 h 6 v 176 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="646.9088" y="171.6" width="6" height="48.4" class="chart-rectangle" d="M 646.9088,171.6 h 6 v 48.4 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="654.4582" y="168.3" width="6" height="51.7" class="chart-rectangle" d="M 654.4582,168.3 h 6 v 51.7 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="662.0077" y="60.8667" width="6" height="159.1333" class="chart-rectangle" d="M 662.0077,60.8667 h 6 v 159.1333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="669.5571" y="55.7333" width="6" height="164.2667" class="chart-rectangle" d="M 669.5571,55.7333 h 6 v 164.2667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="677.1066" y="165.3667" width="6" height="54.6333" class="chart-rectangle" d="M 677.1066,165.3667 h 6 v 54.6333 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="684.656" y="182.2333" width="6" height="37.7667" class="chart-rectangle" d="M 684.656,182.2333 h 6 v 37.7667 h -6 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="692.2055" y="56.4667" width="6" height="163.5333" class="chart-rectangle" d="M 692.2055,56.4667 h 6 v 163.5333 h -6 Z" />
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
                                      <text height="30" width="687" stroke="none" x="38.42307692307693" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="38.42307692307693">Apr 4</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="106.36813186813187" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="106.36813186813187">Apr 13</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="181.86263736263737" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="181.86263736263737">Apr 23</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="257.35714285714283" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="257.35714285714283">May 3</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="332.85164835164835" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="332.85164835164835">May 13</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="408.3461538461538" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="408.3461538461538">May 23</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="476.29120879120876" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="476.29120879120876">Jun 1</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="544.2362637362637" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="544.2362637362637">Jun 10</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="619.7307692307692" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="619.7307692307692">Jun 20</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="687" stroke="none" x="691.296875" y="234" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="691.296875">Jun 30</tspan>
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
                <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                  <!-- Card 2: Total Visitors Chart - Shape -->
                  <UCard class="rounded-lg flex h-full flex-col" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 items-center pb-0">
                      <div class="leading-none font-semibold tracking-tight">Total Visitors Chart - Shape</div>
                      <div class="text-muted text-sm">January - June 2024</div>
                    </div>
                    <div class="p-6 pt-0 flex-1 pb-0">
                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mx-auto h-[250px] w-full max-w-[250px]" style=";--chart-2:var(--ui-text-muted);--color-safari:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-safari:var(--ui-text-muted);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="250" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 250px; height: 250px;">
                              <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 250 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-polar-grid">
                                    <g class="chart-polar-grid-concentric">
                                      <circle cx="125" cy="125" stroke="none" class="chart-polar-grid-concentric-circle first:fill-(--ui-bg-muted) last:fill-(--ui-bg)" stroke-width="1" fill="none" r="86" />
                                      <circle cx="125" cy="125" stroke="none" class="chart-polar-grid-concentric-circle first:fill-(--ui-bg-muted) last:fill-(--ui-bg)" stroke-width="1" fill="none" r="74" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50">
                                  <g class="chart-layer chart-shape">
                                    <path fill="var(--ui-bg)" cx="125" cy="125" class="chart-sector chart-radial-bar-background-sector undefined" d="M 232,125
    A 107,107,0,
    0,0,
    106.4196,19.6256
  L 110.5872,43.261
            A 83,83,0,
            0,1,
            208,125 Z" />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="recharts2-clip">
                                    <rect x="5" y="5" height="240" width="240" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300">
                                  <g class="chart-layer chart-area">
                                    <g class="chart-layer chart-radial-bar-background" />
                                    <g class="chart-layer chart-radial-bar-sectors">
                                      <g class="chart-layer chart-shape">
                                        <path fill="var(--color-safari)" cx="125" cy="125" class="chart-sector chart-radial-bar-sector undefined" d="M 232,125
    A 107,107,0,
    0,0,
    119.335,18.1501
  L 120.6056,42.1164
            A 83,83,0,
            0,1,
            208,125 Z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_400" />
                                <g class="chart-zIndex-layer_500">
                                  <g class="chart-layer chart-polar-radius-axis radiusAxis">
                                    <text x="125" y="125" text-anchor="middle" dominant-baseline="middle">
                                      <tspan x="125" y="125" class="fill-(--ui-text-highlighted) text-4xl font-bold">1,260</tspan>
                                      <tspan x="125" y="149" class="fill-(--ui-text-muted)">Visitors</tspan>
                                    </text>
                                  </g>
                                </g>
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
                    <div class="flex items-center p-6 pt-0 flex-col gap-2 text-sm">
                      <div class="flex items-center gap-2 leading-none font-medium">
                        Trending up by 5.2% this month 
                        <UIcon name="i-lucide-trending-up" class="h-4 w-4" />
                      </div>
                      <div class="text-muted leading-none">Showing total visitors for the last 6 months</div>
                    </div>
                  </UCard>
                </div>
                <div class="col-span-12 grid grid-cols-4 gap-5 lg:col-span-6 xl:col-span-5">
                  <!-- Card 3: Session -->
                  <UCard class="rounded-lg col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 pt-4 pb-2">
                      <div class="flex w-full items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Session</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full p-1 border-default">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-clipboard-data text-info">
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                            <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                            <path d="M9 17v-4" />
                            <path d="M12 17v-1" />
                            <path d="M15 17v-2" />
                            <path d="M12 17v-1" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="flex flex-col items-start gap-1">
                        <h2 class="text-2xl font-bold text-highlighted">6,132</h2>
                        <div class="flex items-center gap-2 font-medium text-success">
                          <p class="text-sm">%90</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-trending-up">
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </div>
                        <p class="text-sm tracking-tight">vs Previous 30 Days</p>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 4: Page Views -->
                  <UCard class="rounded-lg col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 pt-4 pb-2">
                      <div class="flex w-full items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Page Views</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full p-1 border-default">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-eye text-secondary">
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="flex flex-col items-start gap-1">
                        <h2 class="text-2xl font-bold text-highlighted">11,236</h2>
                        <div class="flex items-center gap-2 font-medium text-error">
                          <p class="text-sm">%40</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-trending-down">
                            <path d="M3 7l6 6l4 -4l8 8" />
                            <path d="M21 10l0 7l-7 0" />
                          </svg>
                        </div>
                        <p class="text-sm tracking-tight">vs Previous 30 Days</p>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 5: Average -->
                  <UCard class="rounded-lg col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 pt-4 pb-2">
                      <div class="flex w-full items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Average</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full p-1 border-default">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-file-barcode text-warning">
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                            <path d="M8 13h1v3h-1l0 -3" />
                            <path d="M12 13v3" />
                            <path d="M15 13h1v3h-1l0 -3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="flex flex-col items-start gap-1">
                        <h2 class="text-2xl font-bold text-highlighted">46</h2>
                        <div class="flex items-center gap-2 font-medium text-success">
                          <p class="text-sm">%22</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-trending-up">
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </div>
                        <p class="text-sm tracking-tight">vs Previous 30 Days</p>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 6: Bounce Rate -->
                  <UCard class="rounded-lg col-span-2" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 pt-4 pb-2">
                      <div class="flex w-full items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Bounce Rate</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full p-1 border-default">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-speedtest text-error">
                            <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                            <path d="M16 9l-4 4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="flex flex-col items-start gap-1">
                        <h2 class="text-2xl font-bold text-highlighted">6,132</h2>
                        <div class="flex items-center gap-2 font-medium text-error">
                          <p class="text-sm">%30</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-trending-down">
                            <path d="M3 7l6 6l4 -4l8 8" />
                            <path d="M21 10l0 7l-7 0" />
                          </svg>
                        </div>
                        <p class="text-sm tracking-tight">vs Previous 30 Days</p>
                      </div>
                    </div>
                  </UCard>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                  <!-- Card 7: Sales By Month -->
                  <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 items-center pb-4">
                      <div class="leading-none font-semibold tracking-tight">Sales By Month</div>
                      <div class="text-muted text-sm">Showing total sales for the last 6 months</div>
                    </div>
                    <div class="p-6 pt-0 h-[calc(100%_-_82px)] pb-0">
                      <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mx-auto aspect-square h-full min-h-[200px] w-full" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted);width:100%;height:321px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="321" height="321" class="chart-wrapper" style="position: relative; cursor: default; width: 321px; height: 321px;">
                              <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 321 321" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-polar-grid">
                                    <g class="chart-polar-grid-concentric">
                                      <path cx="160.5" cy="160.5" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,160.5L 160.5,160.5L 160.5,160.5L 160.5,160.5L 160.5,160.5L 160.5,160.5Z" />
                                      <path cx="160.5" cy="160.5" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,129.4L 187.43339005769604,144.95L 187.43339005769604,176.05L 160.5,191.6L 133.56660994230396,176.05L 133.56660994230396,144.95Z" />
                                      <path cx="160.5" cy="160.5" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,98.3L 214.3667801153921,129.4L 214.3667801153921,191.6L 160.5,222.7L 106.63321988460791,191.6L 106.63321988460791,129.39999999999998Z" />
                                      <path cx="160.5" cy="160.5" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,67.19999999999999L 241.30017017308813,113.85L 241.30017017308813,207.15L 160.5,253.8L 79.69982982691185,207.15L 79.69982982691187,113.85Z" />
                                      <path cx="160.5" cy="160.5" stroke="var(--ui-text-dimmed)" stroke-width="1" fill="none" class="chart-polar-grid-concentric-polygon" d="M 160.5,36.099999999999994L 268.2335602307842,98.30000000000001L 268.2335602307842,222.7L 160.5,284.9L 52.76643976921582,222.7L 52.766439769215836,98.29999999999998Z" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts3-clip">
                                    <rect x="5" y="5" height="311" width="311" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-radar">
                                    <g class="chart-layer chart-radar-polygon">
                                      <path fill="var(--color-desktop)" fill-opacity="0" stroke="var(--color-desktop)" stroke-width="2" id="recharts-radar-_r_2_" class="chart-polygon" d="M160.5,62.651L244.7841,111.8385L254.8071,214.9482L160.5,251.5101L87.6056,202.5856L81.2273,114.7319L160.5,62.651Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-radar">
                                    <g class="chart-layer chart-radar-polygon">
                                      <path fill="var(--color-mobile)" fill-opacity="0" stroke="var(--color-mobile)" stroke-width="2" id="recharts-radar-_r_3_" class="chart-polygon" d="M160.5,76.3288L237.9503,115.784L242.5062,207.8463L160.5,244.6712L73.9379,210.4767L67.5596,106.8409L160.5,76.3288Z" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400" />
                                <g class="chart-zIndex-layer_500">
                                  <g class="chart-layer chart-polar-angle-axis angleAxis">
                                    <path cx="160.5" cy="160.5" fill="none" class="chart-polygon chart-polar-angle-axis-line" d="M160.5,36.1L268.2336,98.3L268.2336,222.7L160.5,284.9L52.7664,222.7L52.7664,98.3L160.5,36.1Z" />
                                    <g class="chart-layer chart-polar-angle-axis-ticks">
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="160.5" y1="36.099999999999994" x2="160.5" y2="28.099999999999994" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="160.5" y="28.099999999999994" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="160.5">January</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="268.2335602307842" y1="98.30000000000001" x2="275.1617634610597" y2="94.30000000000001" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="275.1617634610597" y="94.30000000000001" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="start" fill="var(--ui-text-muted)">
                                          <tspan x="275.1617634610597">February</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="268.2335602307842" y1="222.7" x2="275.1617634610597" y2="226.7" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="275.1617634610597" y="226.7" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="start" fill="var(--ui-text-muted)">
                                          <tspan x="275.1617634610597">March</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="160.5" y1="284.9" x2="160.5" y2="292.9" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="160.5" y="292.9" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="160.5">April</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="52.76643976921582" y1="222.7" x2="45.83823653894031" y2="226.7" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="45.83823653894031" y="226.7" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="45.83823653894031">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-polar-angle-axis-tick">
                                        <line class="chart-polar-angle-axis-tick-line" cx="160.5" cy="160.5" fill="none" x1="52.766439769215836" y1="98.29999999999998" x2="45.83823653894032" y2="94.29999999999998" />
                                        <text cx="160.5" cy="160.5" stroke="none" x="45.83823653894032" y="94.29999999999998" class="chart-text chart-polar-angle-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                          <tspan x="45.83823653894032">June</tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </g>
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
                  </UCard>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                  <!-- Card 8: Overview -->
                  <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="leading-none font-semibold tracking-tight">Overview</div>
                      <div class="text-muted text-sm">January - June 2024</div>
                    </div>
                    <div class="p-6 pt-0 h-[calc(100%_-_90px)]">
                      <!-- Chart 7: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-full min-h-[200px] w-full" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 8: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted);width:100%;height:289px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="223" height="289" class="chart-wrapper" style="position: relative; cursor: default; width: 223px; height: 289px;">
                              <div class="chart-legend-wrapper" style="position: absolute; width: 213px; height: auto; left: 5px; bottom: 5px;">
                                <div class="flex items-center justify-center gap-4 pt-3">
                                  <div class="[&amp;&gt;svg]:text-muted flex items-center gap-1.5 [&amp;&gt;svg]:h-3 [&amp;&gt;svg]:w-3">
                                    <div class="h-2 w-2 shrink-0 rounded-[2px]" style="background-color: var(--color-desktop);" />
                                    Desktop
                                  </div>
                                  <div class="[&amp;&gt;svg]:text-muted flex items-center gap-1.5 [&amp;&gt;svg]:h-3 [&amp;&gt;svg]:w-3">
                                    <div class="h-2 w-2 shrink-0 rounded-[2px]" style="background-color: var(--color-mobile);" />
                                    Mobile
                                  </div>
                                </div>
                              </div>
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 223 289" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="213" height="221" x1="5" y1="226" x2="218" y2="226" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="213" height="221" x1="5" y1="170.75" x2="218" y2="170.75" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="213" height="221" x1="5" y1="115.5" x2="218" y2="115.5" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="213" height="221" x1="5" y1="60.25" x2="218" y2="60.25" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="213" height="221" x1="5" y1="5" x2="218" y2="5" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts4-clip">
                                    <rect x="5" y="5" height="221" width="213" />
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
                                            <path fill="var(--color-desktop)" name="undefined" x="8.55" y="157.49" width="28" height="68.51" class="chart-rectangle" d="M8.55,157.49L 36.55,157.49L 36.55,222A 4,4,0,0,1,
        32.55,226L 12.55,226A 4,4,0,0,1,
        8.55,222Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="44.05" y="113.6583" width="28" height="112.3417" class="chart-rectangle" d="M44.05,113.6583L 72.05,113.6583L 72.05,222A 4,4,0,0,1,
        68.05,226L 48.05,226A 4,4,0,0,1,
        44.05,222Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="79.55" y="138.705" width="28" height="87.295" class="chart-rectangle" d="M79.55,138.705L 107.55,138.705L 107.55,222A 4,4,0,0,1,
        103.55,226L 83.55,226A 4,4,0,0,1,
        79.55,222Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="115.05" y="199.1117" width="28" height="26.8883" class="chart-rectangle" d="M115.05,199.1117L 143.05,199.1117L 143.05,222A 4,4,0,0,1,
        139.05,226L 119.05,226A 4,4,0,0,1,
        115.05,222Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="150.55" y="149.0183" width="28" height="76.9817" class="chart-rectangle" d="M150.55,149.0183L 178.55,149.0183L 178.55,222A 4,4,0,0,1,
        174.55,226L 154.55,226A 4,4,0,0,1,
        150.55,222Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="186.05" y="147.1767" width="28" height="78.8233" class="chart-rectangle" d="M186.05,147.1767L 214.05,147.1767L 214.05,222A 4,4,0,0,1,
        210.05,226L 190.05,226A 4,4,0,0,1,
        186.05,222Z" />
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
                                            <path fill="var(--color-mobile)" name="undefined" x="8.55" y="128.0233" width="28" height="29.4667" class="chart-rectangle" d="M8.55,132.0233A 4,4,0,0,1,12.55,128.0233L 32.55,128.0233A 4,4,0,0,1,
        36.55,132.0233L 36.55,157.49L 8.55,157.49Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="44.05" y="39.9917" width="28" height="73.6667" class="chart-rectangle" d="M44.05,43.9917A 4,4,0,0,1,48.05,39.9917L 68.05,39.9917A 4,4,0,0,1,
        72.05,43.9917L 72.05,113.6583L 44.05,113.6583Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="79.55" y="94.505" width="28" height="44.2" class="chart-rectangle" d="M79.55,98.505A 4,4,0,0,1,83.55,94.505L 103.55,94.505A 4,4,0,0,1,
        107.55,98.505L 107.55,138.705L 79.55,138.705Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="115.05" y="129.1283" width="28" height="69.9833" class="chart-rectangle" d="M115.05,133.1283A 4,4,0,0,1,119.05,129.1283L 139.05,129.1283A 4,4,0,0,1,
        143.05,133.1283L 143.05,199.1117L 115.05,199.1117Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="150.55" y="101.135" width="28" height="47.8833" class="chart-rectangle" d="M150.55,105.135A 4,4,0,0,1,154.55,101.135L 174.55,101.135A 4,4,0,0,1,
        178.55,105.135L 178.55,149.0183L 150.55,149.0183Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="186.05" y="95.61" width="28" height="51.5667" class="chart-rectangle" d="M186.05,99.61A 4,4,0,0,1,190.05,95.61L 210.05,95.61A 4,4,0,0,1,
        214.05,99.61L 214.05,147.1767L 186.05,147.1767Z" />
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
                                </g>
                                <g class="chart-zIndex-layer_600" />
                                <g class="chart-zIndex-layer_1000" />
                                <g class="chart-zIndex-layer_1100" />
                                <g class="chart-zIndex-layer_1200" />
                                <g class="chart-zIndex-layer_2000">
                                  <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="22.75" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="22.75">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="58.25" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="58.25">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="93.75" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="93.75">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="129.25" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="129.25">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="164.75" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="164.75">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="213" stroke="none" x="200.25" y="242" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="200.25">Jun</tspan>
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
              </div>
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
