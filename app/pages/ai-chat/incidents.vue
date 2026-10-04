<!-- Page: /ai-chat/incidents | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Incidents · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "writeANote": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Overview",
    "value": "0"
  },
  {
    "label": "Endpoints",
    "value": "1"
  },
  {
    "label": "Regions",
    "value": "2"
  }
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
  anchor.download = "ai-chat-incidents.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/incidents">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-auto">
        <div class="mx-auto flex max-w-[1200px] flex-col gap-5 p-4 md:p-7">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="bg-muted flex size-11 shrink-0 items-center justify-center rounded-xl border border-default">
                <UIcon name="i-lucide-siren" class="size-5" />
              </span>
              <div>
                <h1 class="text-xl font-semibold tracking-tight text-highlighted">API platform · production</h1>
                <p class="text-muted mt-1 text-[13px]">5 regions · 99.95% monthly SLO · 1,681August incidents</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/profile">
                Profile 
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                Logs 
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/knowledge-base">
                Runbook 
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-download" class="size-4" />
                Export
              </UButton>
            </div>
          </div>
          <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="flex gap-1 border-b border-default" aria-label="Incident views" />
          <div class="grid min-w-0 gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
            <aside aria-label="Platform details" class="min-w-0">
              <h2 class="mb-3 text-sm font-semibold text-highlighted">Details</h2>
              <dl class="flex flex-col gap-3">
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Internal name</dt>
                  <dd class="min-w-0 font-mono text-xs break-words">chat-completions</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Version</dt>
                  <dd class="min-w-0 font-mono text-xs break-words">2026-08-01</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Provider</dt>
                  <dd class="min-w-0 font-medium break-words">Northstar inference</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Primary region</dt>
                  <dd class="min-w-0 font-medium break-words">us-east</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Owner</dt>
                  <dd class="min-w-0 font-medium break-words">ML platform</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Added</dt>
                  <dd class="min-w-0 font-medium break-words">Mar 14, 2026</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">SLO</dt>
                  <dd class="min-w-0 font-medium break-words">99.95% monthly</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Base URL</dt>
                  <dd class="min-w-0 font-mono text-xs break-words">api.northstar.dev/v1</dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Status</dt>
                  <dd class="flex items-center gap-1.5 font-medium">
                    <span class="size-1.5 rounded-full bg-success" />
                    Operational
                  </dd>
                </div>
                <div class="grid grid-cols-[104px_minmax(0,1fr)] gap-2 text-[13px]">
                  <dt class="text-muted">Filtered August incidents</dt>
                  <dd class="font-medium tabular-nums">1,681</dd>
                </div>
              </dl>
              <div class="mt-5 border-t pt-4 border-default">
                <h3 class="mb-2 text-sm font-semibold text-highlighted">Internal notes</h3>
                <ul class="flex flex-col gap-2">
                  <li class="group flex items-start gap-2 rounded-lg border p-2.5 text-xs leading-5 border-default">
                    <span class="min-w-0 flex-1 break-words">Aug 17 spike traced to unbounded retries — read the outage postmortem before touching limits.</span>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted shrink-0 opacity-0 group-hover:opacity-100" aria-label="Delete internal note" type="button" @click="openAction(&quot;Delete internal note&quot;)">
                      <UIcon name="i-lucide-trash-2" class="size-3.5" />
                    </UButton>
                  </li>
                </ul>
                <div class="mt-2 flex gap-2">
                  <UInput v-model="form.writeANote" type="text" aria-label="Add an internal note" placeholder="Write a note…" name="writeANote" class="flex w-full rounded-md md:text-sm h-8 min-w-0 flex-1 text-xs" :ui="{ base: 'h-full' }" />
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 h-8 shrink-0 text-xs" aria-label="Add" type="button" disabled @click="openAction(&quot;Add&quot;)">
                    Add
                  </UButton>
                </div>
              </div>
            </aside>
            <div class="flex min-w-0 flex-col gap-5">
              <section aria-label="Incident overview" class="flex min-w-0 flex-col gap-5">
                <section aria-label="Total incidents" class="min-w-0 rounded-xl border p-4 sm:p-5 border-default">
                  <div class="mb-1 flex items-start justify-between gap-3">
                    <h2 class="text-sm font-medium text-highlighted">Incidents</h2>
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline rounded-md h-auto p-0 text-xs" to="/ai-chat/api-requests">
                      View data 
                      <UIcon name="i-lucide-chevron-right" class="size-4" />
                    </NuxtLink>
                  </div>
                  <p class="text-2xl font-semibold tabular-nums text-highlighted">1,681</p>
                  <p class="text-muted mb-3 text-xs">Total</p>
                  <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                  <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-56 w-full" style=";--color-total:var(--ui-success)" role="img" aria-label="Analytics chart">
                    <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                    <div class="chart-responsive-container" style="width: 100%; height: 100%; min-width: 1px; min-height: 1px;;--color-total:var(--ui-success);width:100%;height:224px;min-width:0" role="img" aria-label="Analytics chart">
                      <div style="width: 0px; height: 0px; overflow: visible;">
                        <div width="762" height="224" class="chart-wrapper" style="position: relative; cursor: default; width: 762px; height: 224px;">
                          <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 762 224" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                            <title />
                            <desc />
                            <g class="chart-zIndex-layer_-100">
                              <g class="chart-cartesian-grid">
                                <g class="chart-cartesian-grid-horizontal">
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="194" x2="750" y2="194" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="147.5" x2="750" y2="147.5" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="101" x2="750" y2="101" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="54.5" x2="750" y2="54.5" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="8" x2="750" y2="8" />
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_-50" />
                            <defs>
                              <clipPath id="recharts426-clip">
                                <rect x="44" y="8" height="186" width="706" />
                              </clipPath>
                            </defs>
                            <g class="chart-zIndex-layer_100" />
                            <g class="chart-zIndex-layer_200" />
                            <g class="chart-zIndex-layer_300">
                              <g class="chart-layer chart-bar" id="recharts-bar-_r_b_">
                                <g class="chart-layer chart-bar-rectangles">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="47.2774" y="187.2364" width="16" height="6.7636" class="chart-rectangle" d="M47.2774,190.2364A 3,3,0,0,1,50.2774,187.2364L 60.2774,187.2364A 3,3,0,0,1,
        63.2774,190.2364L 63.2774,194L 47.2774,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="70.0516" y="178.7818" width="16" height="15.2182" class="chart-rectangle" d="M70.0516,181.7818A 3,3,0,0,1,73.0516,178.7818L 83.0516,178.7818A 3,3,0,0,1,
        86.0516,181.7818L 86.0516,194L 70.0516,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="92.8258" y="181.3182" width="16" height="12.6818" class="chart-rectangle" d="M92.8258,184.3182A 3,3,0,0,1,95.8258,181.3182L 105.8258,181.3182A 3,3,0,0,1,
        108.8258,184.3182L 108.8258,194L 92.8258,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="115.6" y="183.8545" width="16" height="10.1455" class="chart-rectangle" d="M115.6,186.8545A 3,3,0,0,1,118.6,183.8545L 128.6,183.8545A 3,3,0,0,1,
        131.6,186.8545L 131.6,194L 115.6,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="138.3742" y="141.5818" width="16" height="52.4182" class="chart-rectangle" d="M138.3742,144.5818A 3,3,0,0,1,141.3742,141.5818L 151.3742,141.5818A 3,3,0,0,1,
        154.3742,144.5818L 154.3742,194L 138.3742,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="161.1484" y="94.2364" width="16" height="99.7636" class="chart-rectangle" d="M161.1484,97.2364A 3,3,0,0,1,164.1484,94.2364L 174.1484,94.2364A 3,3,0,0,1,
        177.1484,97.2364L 177.1484,194L 161.1484,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="183.9226" y="102.6909" width="16" height="91.3091" class="chart-rectangle" d="M183.9226,105.6909A 3,3,0,0,1,186.9226,102.6909L 196.9226,102.6909A 3,3,0,0,1,
        199.9226,105.6909L 199.9226,194L 183.9226,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="206.6968" y="35.0545" width="16" height="158.9455" class="chart-rectangle" d="M206.6968,38.0545A 3,3,0,0,1,209.6968,35.0545L 219.6968,35.0545A 3,3,0,0,1,
        222.6968,38.0545L 222.6968,194L 206.6968,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="229.471" y="107.7636" width="16" height="86.2364" class="chart-rectangle" d="M229.471,110.7636A 3,3,0,0,1,232.471,107.7636L 242.471,107.7636A 3,3,0,0,1,
        245.471,110.7636L 245.471,194L 229.471,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="252.2452" y="175.4" width="16" height="18.6" class="chart-rectangle" d="M252.2452,178.4A 3,3,0,0,1,255.2452,175.4L 265.2452,175.4A 3,3,0,0,1,
        268.2452,178.4L 268.2452,194L 252.2452,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="275.0194" y="187.2364" width="16" height="6.7636" class="chart-rectangle" d="M275.0194,190.2364A 3,3,0,0,1,278.0194,187.2364L 288.0194,187.2364A 3,3,0,0,1,
        291.0194,190.2364L 291.0194,194L 275.0194,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="297.7935" y="178.7818" width="16" height="15.2182" class="chart-rectangle" d="M297.7935,181.7818A 3,3,0,0,1,300.7935,178.7818L 310.7935,178.7818A 3,3,0,0,1,
        313.7935,181.7818L 313.7935,194L 297.7935,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="320.5677" y="181.3182" width="16" height="12.6818" class="chart-rectangle" d="M320.5677,184.3182A 3,3,0,0,1,323.5677,181.3182L 333.5677,181.3182A 3,3,0,0,1,
        336.5677,184.3182L 336.5677,194L 320.5677,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="343.3419" y="186.3909" width="16" height="7.6091" class="chart-rectangle" d="M343.3419,189.3909A 3,3,0,0,1,346.3419,186.3909L 356.3419,186.3909A 3,3,0,0,1,
        359.3419,189.3909L 359.3419,194L 343.3419,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="366.1161" y="173.7091" width="16" height="20.2909" class="chart-rectangle" d="M366.1161,176.7091A 3,3,0,0,1,369.1161,173.7091L 379.1161,173.7091A 3,3,0,0,1,
        382.1161,176.7091L 382.1161,194L 366.1161,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="388.8903" y="128.0545" width="16" height="65.9455" class="chart-rectangle" d="M388.8903,131.0545A 3,3,0,0,1,391.8903,128.0545L 401.8903,128.0545A 3,3,0,0,1,
        404.8903,131.0545L 404.8903,194L 388.8903,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="411.6645" y="111.1455" width="16" height="82.8545" class="chart-rectangle" d="M411.6645,114.1455A 3,3,0,0,1,414.6645,111.1455L 424.6645,111.1455A 3,3,0,0,1,
        427.6645,114.1455L 427.6645,194L 411.6645,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="434.4387" y="29.1364" width="16" height="164.8636" class="chart-rectangle" d="M434.4387,32.1364A 3,3,0,0,1,437.4387,29.1364L 447.4387,29.1364A 3,3,0,0,1,
        450.4387,32.1364L 450.4387,194L 434.4387,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="457.2129" y="16.4545" width="16" height="177.5455" class="chart-rectangle" d="M457.2129,19.4545A 3,3,0,0,1,460.2129,16.4545L 470.2129,16.4545A 3,3,0,0,1,
        473.2129,19.4545L 473.2129,194L 457.2129,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="479.9871" y="141.5818" width="16" height="52.4182" class="chart-rectangle" d="M479.9871,144.5818A 3,3,0,0,1,482.9871,141.5818L 492.9871,141.5818A 3,3,0,0,1,
        495.9871,144.5818L 495.9871,194L 479.9871,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="502.7613" y="99.3091" width="16" height="94.6909" class="chart-rectangle" d="M502.7613,102.3091A 3,3,0,0,1,505.7613,99.3091L 515.7613,99.3091A 3,3,0,0,1,
        518.7613,102.3091L 518.7613,194L 502.7613,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="525.5355" y="173.7091" width="16" height="20.2909" class="chart-rectangle" d="M525.5355,176.7091A 3,3,0,0,1,528.5355,173.7091L 538.5355,173.7091A 3,3,0,0,1,
        541.5355,176.7091L 541.5355,194L 525.5355,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="548.3097" y="186.3909" width="16" height="7.6091" class="chart-rectangle" d="M548.3097,189.3909A 3,3,0,0,1,551.3097,186.3909L 561.3097,186.3909A 3,3,0,0,1,
        564.3097,189.3909L 564.3097,194L 548.3097,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="571.0839" y="178.7818" width="16" height="15.2182" class="chart-rectangle" d="M571.0839,181.7818A 3,3,0,0,1,574.0839,178.7818L 584.0839,178.7818A 3,3,0,0,1,
        587.0839,181.7818L 587.0839,194L 571.0839,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="593.8581" y="170.3273" width="16" height="23.6727" class="chart-rectangle" d="M593.8581,173.3273A 3,3,0,0,1,596.8581,170.3273L 606.8581,170.3273A 3,3,0,0,1,
        609.8581,173.3273L 609.8581,194L 593.8581,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="616.6323" y="186.3909" width="16" height="7.6091" class="chart-rectangle" d="M616.6323,189.3909A 3,3,0,0,1,619.6323,186.3909L 629.6323,186.3909A 3,3,0,0,1,
        632.6323,189.3909L 632.6323,194L 616.6323,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="639.4065" y="173.7091" width="16" height="20.2909" class="chart-rectangle" d="M639.4065,176.7091A 3,3,0,0,1,642.4065,173.7091L 652.4065,173.7091A 3,3,0,0,1,
        655.4065,176.7091L 655.4065,194L 639.4065,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="662.1806" y="175.4" width="16" height="18.6" class="chart-rectangle" d="M662.1806,178.4A 3,3,0,0,1,665.1806,175.4L 675.1806,175.4A 3,3,0,0,1,
        678.1806,178.4L 678.1806,194L 662.1806,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="684.9548" y="166.9455" width="16" height="27.0545" class="chart-rectangle" d="M684.9548,169.9455A 3,3,0,0,1,687.9548,166.9455L 697.9548,166.9455A 3,3,0,0,1,
        700.9548,169.9455L 700.9548,194L 684.9548,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="707.729" y="175.4" width="16" height="18.6" class="chart-rectangle" d="M707.729,178.4A 3,3,0,0,1,710.729,175.4L 720.729,175.4A 3,3,0,0,1,
        723.729,178.4L 723.729,194L 707.729,194Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-total)" name="undefined" x="730.5032" y="184.7" width="16" height="9.3" class="chart-rectangle" d="M730.5032,187.7A 3,3,0,0,1,733.5032,184.7L 743.5032,184.7A 3,3,0,0,1,
        746.5032,187.7L 746.5032,194L 730.5032,194Z" />
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
                                  <text height="30" width="706" stroke="none" x="55.38709677419355" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="55.38709677419355">Aug 1</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="100.93548387096774" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="100.93548387096774">Aug 3</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="146.48387096774192" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="146.48387096774192">Aug 5</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="192.0322580645161" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="192.0322580645161">Aug 7</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="237.5806451612903" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="237.5806451612903">Aug 9</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="283.1290322580645" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="283.1290322580645">Aug 11</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="328.67741935483866" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="328.67741935483866">Aug 13</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="374.22580645161287" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="374.22580645161287">Aug 15</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="419.7741935483871" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="419.7741935483871">Aug 17</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="465.3225806451613" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="465.3225806451613">Aug 19</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="510.8709677419355" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="510.8709677419355">Aug 21</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="556.4193548387096" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="556.4193548387096">Aug 23</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="601.9677419354838" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="601.9677419354838">Aug 25</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="647.516129032258" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="647.516129032258">Aug 27</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="693.0645161290322" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="693.0645161290322">Aug 29</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="738.6129032258065" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="738.6129032258065">Aug 31</tspan>
                                  </text>
                                </g>
                              </g>
                              <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="194" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">0</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="147.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">55</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="101" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">110</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="54.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">165</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="8.25" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">220</tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-label="Incidents by severity" class="min-w-0 rounded-xl border p-4 sm:p-5 border-default">
                  <div class="mb-1 flex items-start justify-between gap-3">
                    <h2 class="text-sm font-medium text-highlighted">Incidents by severity</h2>
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline rounded-md h-auto p-0 text-xs" to="/ai-chat/api-requests">
                      View data 
                      <UIcon name="i-lucide-chevron-right" class="size-4" />
                    </NuxtLink>
                  </div>
                  <div class="mb-3 flex flex-wrap gap-x-6 gap-y-2">
                    <UButton color="neutral" variant="ghost" title="Hide Critical" class="" aria-label="424Critical" type="button" @click="openAction(&quot;424Critical&quot;)">
                      <span class="block text-left text-xl font-semibold tabular-nums">424</span>
                      <span class="mt-0.5 flex items-center gap-1.5 text-xs">
                        <span class="size-2 rounded-full" style="background-color: var(--ui-error);" />
                        <span class="text-muted">Critical</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" title="Hide High" class="" aria-label="663High" type="button" @click="openAction(&quot;663High&quot;)">
                      <span class="block text-left text-xl font-semibold tabular-nums">663</span>
                      <span class="mt-0.5 flex items-center gap-1.5 text-xs">
                        <span class="size-2 rounded-full" style="background-color: var(--ui-error);" />
                        <span class="text-muted">High</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" title="Hide Medium" class="" aria-label="555Medium" type="button" @click="openAction(&quot;555Medium&quot;)">
                      <span class="block text-left text-xl font-semibold tabular-nums">555</span>
                      <span class="mt-0.5 flex items-center gap-1.5 text-xs">
                        <span class="size-2 rounded-full" style="background-color: var(--ui-warning);" />
                        <span class="text-muted">Medium</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" title="Hide Low" class="" aria-label="39Low" type="button" @click="openAction(&quot;39Low&quot;)">
                      <span class="block text-left text-xl font-semibold tabular-nums">39</span>
                      <span class="mt-0.5 flex items-center gap-1.5 text-xs">
                        <span class="size-2 rounded-full" style="background-color: var(--ui-text-muted);" />
                        <span class="text-muted">Low</span>
                      </span>
                    </UButton>
                  </div>
                  <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                  <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-56 w-full" style=";--color-critical:var(--ui-error);--color-high:var(--ui-error);--color-medium:var(--ui-warning);--color-low:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                    <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                    <div class="chart-responsive-container" style="width: 100%; height: 100%; min-width: 1px; min-height: 1px;;--color-critical:var(--ui-error);--color-high:var(--ui-error);--color-medium:var(--ui-warning);--color-low:var(--ui-text-muted);width:100%;height:224px;min-width:0" role="img" aria-label="Analytics chart">
                      <div style="width: 0px; height: 0px; overflow: visible;">
                        <div width="762" height="224" class="chart-wrapper" style="position: relative; cursor: default; width: 762px; height: 224px;">
                          <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 762 224" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                            <title />
                            <desc />
                            <g class="chart-zIndex-layer_-100">
                              <g class="chart-cartesian-grid">
                                <g class="chart-cartesian-grid-horizontal">
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="194" x2="750" y2="194" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="147.5" x2="750" y2="147.5" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="101" x2="750" y2="101" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="54.5" x2="750" y2="54.5" />
                                  <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="44" y="8" width="706" height="186" x1="44" y1="8" x2="750" y2="8" />
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_-50" />
                            <defs>
                              <clipPath id="recharts427-clip">
                                <rect x="44" y="8" height="186" width="706" />
                              </clipPath>
                            </defs>
                            <g class="chart-zIndex-layer_100" />
                            <g class="chart-zIndex-layer_200" />
                            <g class="chart-zIndex-layer_300">
                              <g class="chart-layer chart-bar" id="recharts-bar-_r_c_">
                                <g class="chart-layer chart-bar-rectangles">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="47.2774" y="191.4636" width="16" height="2.5364" class="chart-rectangle" d="M 47.2774,191.4636 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="70.0516" y="188.0818" width="16" height="5.9182" class="chart-rectangle" d="M 70.0516,188.0818 h 16 v 5.9182 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="92.8258" y="189.7727" width="16" height="4.2273" class="chart-rectangle" d="M 92.8258,189.7727 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="115.6" y="190.6182" width="16" height="3.3818" class="chart-rectangle" d="M 115.6,190.6182 h 16 v 3.3818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="138.3742" y="165.2545" width="16" height="28.7455" class="chart-rectangle" d="M 138.3742,165.2545 h 16 v 28.7455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="161.1484" y="164.4091" width="16" height="29.5909" class="chart-rectangle" d="M 161.1484,164.4091 h 16 v 29.5909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="183.9226" y="161.8727" width="16" height="32.1273" class="chart-rectangle" d="M 183.9226,161.8727 h 16 v 32.1273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="206.6968" y="149.1909" width="16" height="44.8091" class="chart-rectangle" d="M 206.6968,149.1909 h 16 v 44.8091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="229.471" y="163.5636" width="16" height="30.4364" class="chart-rectangle" d="M 229.471,163.5636 h 16 v 30.4364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="252.2452" y="188.0818" width="16" height="5.9182" class="chart-rectangle" d="M 252.2452,188.0818 h 16 v 5.9182 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="388.8903" y="171.1727" width="16" height="22.8273" class="chart-rectangle" d="M 388.8903,171.1727 h 16 v 22.8273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="411.6645" y="179.6273" width="16" height="14.3727" class="chart-rectangle" d="M 411.6645,179.6273 h 16 v 14.3727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="434.4387" y="167.7909" width="16" height="26.2091" class="chart-rectangle" d="M 434.4387,167.7909 h 16 v 26.2091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="457.2129" y="140.7364" width="16" height="53.2636" class="chart-rectangle" d="M 457.2129,140.7364 h 16 v 53.2636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="479.9871" y="175.4" width="16" height="18.6" class="chart-rectangle" d="M 479.9871,175.4 h 16 v 18.6 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="502.7613" y="165.2545" width="16" height="28.7455" class="chart-rectangle" d="M 502.7613,165.2545 h 16 v 28.7455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-critical)" name="undefined" x="662.1806" y="187.2364" width="16" height="6.7636" class="chart-rectangle" d="M 662.1806,187.2364 h 16 v 6.7636 h -16 Z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g class="chart-layer chart-bar" id="recharts-bar-_r_d_">
                                <g class="chart-layer chart-bar-rectangles">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="47.2774" y="188.9273" width="16" height="2.5364" class="chart-rectangle" d="M 47.2774,188.9273 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="70.0516" y="183.0091" width="16" height="5.0727" class="chart-rectangle" d="M 70.0516,183.0091 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="92.8258" y="184.7" width="16" height="5.0727" class="chart-rectangle" d="M 92.8258,184.7 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="115.6" y="187.2364" width="16" height="3.3818" class="chart-rectangle" d="M 115.6,187.2364 h 16 v 3.3818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="138.3742" y="149.1909" width="16" height="16.0636" class="chart-rectangle" d="M 138.3742,149.1909 h 16 v 16.0636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="161.1484" y="114.5273" width="16" height="49.8818" class="chart-rectangle" d="M 161.1484,114.5273 h 16 v 49.8818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="183.9226" y="125.5182" width="16" height="36.3545" class="chart-rectangle" d="M 183.9226,125.5182 h 16 v 36.3545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="206.6968" y="82.4" width="16" height="66.7909" class="chart-rectangle" d="M 206.6968,82.4 h 16 v 66.7909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="229.471" y="129.7455" width="16" height="33.8182" class="chart-rectangle" d="M 229.471,129.7455 h 16 v 33.8182 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="252.2452" y="181.3182" width="16" height="6.7636" class="chart-rectangle" d="M 252.2452,181.3182 h 16 v 6.7636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="275.0194" y="192.3091" width="16" height="1.6909" class="chart-rectangle" d="M 275.0194,192.3091 h 16 v 1.6909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="297.7935" y="188.9273" width="16" height="5.0727" class="chart-rectangle" d="M 297.7935,188.9273 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="320.5677" y="190.6182" width="16" height="3.3818" class="chart-rectangle" d="M 320.5677,190.6182 h 16 v 3.3818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="343.3419" y="191.4636" width="16" height="2.5364" class="chart-rectangle" d="M 343.3419,191.4636 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="366.1161" y="185.5455" width="16" height="8.4545" class="chart-rectangle" d="M 366.1161,185.5455 h 16 v 8.4545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="388.8903" y="144.9636" width="16" height="26.2091" class="chart-rectangle" d="M 388.8903,144.9636 h 16 v 26.2091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="411.6645" y="152.5727" width="16" height="27.0545" class="chart-rectangle" d="M 411.6645,152.5727 h 16 v 27.0545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="434.4387" y="111.9909" width="16" height="55.8" class="chart-rectangle" d="M 434.4387,111.9909 h 16 v 55.8 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="457.2129" y="61.2636" width="16" height="79.4727" class="chart-rectangle" d="M 457.2129,61.2636 h 16 v 79.4727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="479.9871" y="155.1091" width="16" height="20.2909" class="chart-rectangle" d="M 479.9871,155.1091 h 16 v 20.2909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="502.7613" y="117.9091" width="16" height="47.3455" class="chart-rectangle" d="M 502.7613,117.9091 h 16 v 47.3455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="525.5355" y="187.2364" width="16" height="6.7636" class="chart-rectangle" d="M 525.5355,187.2364 h 16 v 6.7636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="548.3097" y="191.4636" width="16" height="2.5364" class="chart-rectangle" d="M 548.3097,191.4636 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="571.0839" y="188.0818" width="16" height="5.9182" class="chart-rectangle" d="M 571.0839,188.0818 h 16 v 5.9182 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="593.8581" y="185.5455" width="16" height="8.4545" class="chart-rectangle" d="M 593.8581,185.5455 h 16 v 8.4545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="616.6323" y="191.4636" width="16" height="2.5364" class="chart-rectangle" d="M 616.6323,191.4636 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="639.4065" y="186.3909" width="16" height="7.6091" class="chart-rectangle" d="M 639.4065,186.3909 h 16 v 7.6091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="662.1806" y="180.4727" width="16" height="6.7636" class="chart-rectangle" d="M 662.1806,180.4727 h 16 v 6.7636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="684.9548" y="184.7" width="16" height="9.3" class="chart-rectangle" d="M 684.9548,184.7 h 16 v 9.3 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="707.729" y="188.9273" width="16" height="5.0727" class="chart-rectangle" d="M 707.729,188.9273 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-high)" name="undefined" x="730.5032" y="191.4636" width="16" height="2.5364" class="chart-rectangle" d="M 730.5032,191.4636 h 16 v 2.5364 h -16 Z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g class="chart-layer chart-bar" id="recharts-bar-_r_e_">
                                <g class="chart-layer chart-bar-rectangles">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="47.2774" y="187.2364" width="16" height="1.6909" class="chart-rectangle" d="M 47.2774,187.2364 h 16 v 1.6909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="70.0516" y="178.7818" width="16" height="4.2273" class="chart-rectangle" d="M 70.0516,178.7818 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="92.8258" y="181.3182" width="16" height="3.3818" class="chart-rectangle" d="M 92.8258,181.3182 h 16 v 3.3818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="115.6" y="183.8545" width="16" height="3.3818" class="chart-rectangle" d="M 115.6,183.8545 h 16 v 3.3818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="138.3742" y="141.5818" width="16" height="7.6091" class="chart-rectangle" d="M 138.3742,141.5818 h 16 v 7.6091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="161.1484" y="94.2364" width="16" height="20.2909" class="chart-rectangle" d="M 161.1484,94.2364 h 16 v 20.2909 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="183.9226" y="102.6909" width="16" height="22.8273" class="chart-rectangle" d="M 183.9226,102.6909 h 16 v 22.8273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="206.6968" y="35.0545" width="16" height="47.3455" class="chart-rectangle" d="M 206.6968,35.0545 h 16 v 47.3455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="229.471" y="107.7636" width="16" height="21.9818" class="chart-rectangle" d="M 229.471,107.7636 h 16 v 21.9818 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="252.2452" y="175.4" width="16" height="5.9182" class="chart-rectangle" d="M 252.2452,175.4 h 16 v 5.9182 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="275.0194" y="188.0818" width="16" height="4.2273" class="chart-rectangle" d="M 275.0194,188.0818 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="297.7935" y="180.4727" width="16" height="8.4545" class="chart-rectangle" d="M 297.7935,180.4727 h 16 v 8.4545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="320.5677" y="183.0091" width="16" height="7.6091" class="chart-rectangle" d="M 320.5677,183.0091 h 16 v 7.6091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="343.3419" y="187.2364" width="16" height="4.2273" class="chart-rectangle" d="M 343.3419,187.2364 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="366.1161" y="175.4" width="16" height="10.1455" class="chart-rectangle" d="M 366.1161,175.4 h 16 v 10.1455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="388.8903" y="128.0545" width="16" height="16.9091" class="chart-rectangle" d="M 388.8903,128.0545 h 16 v 16.9091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="411.6645" y="111.1455" width="16" height="41.4273" class="chart-rectangle" d="M 411.6645,111.1455 h 16 v 41.4273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="434.4387" y="29.1364" width="16" height="82.8545" class="chart-rectangle" d="M 434.4387,29.1364 h 16 v 82.8545 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="457.2129" y="16.4545" width="16" height="44.8091" class="chart-rectangle" d="M 457.2129,16.4545 h 16 v 44.8091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="479.9871" y="141.5818" width="16" height="13.5273" class="chart-rectangle" d="M 479.9871,141.5818 h 16 v 13.5273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="502.7613" y="99.3091" width="16" height="18.6" class="chart-rectangle" d="M 502.7613,99.3091 h 16 v 18.6 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="525.5355" y="177.0909" width="16" height="10.1455" class="chart-rectangle" d="M 525.5355,177.0909 h 16 v 10.1455 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="548.3097" y="187.2364" width="16" height="4.2273" class="chart-rectangle" d="M 548.3097,187.2364 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="571.0839" y="181.3182" width="16" height="6.7636" class="chart-rectangle" d="M 571.0839,181.3182 h 16 v 6.7636 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="593.8581" y="173.7091" width="16" height="11.8364" class="chart-rectangle" d="M 593.8581,173.7091 h 16 v 11.8364 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="616.6323" y="187.2364" width="16" height="4.2273" class="chart-rectangle" d="M 616.6323,187.2364 h 16 v 4.2273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="639.4065" y="177.0909" width="16" height="9.3" class="chart-rectangle" d="M 639.4065,177.0909 h 16 v 9.3 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="662.1806" y="175.4" width="16" height="5.0727" class="chart-rectangle" d="M 662.1806,175.4 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="684.9548" y="171.1727" width="16" height="13.5273" class="chart-rectangle" d="M 684.9548,171.1727 h 16 v 13.5273 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="707.729" y="181.3182" width="16" height="7.6091" class="chart-rectangle" d="M 707.729,181.3182 h 16 v 7.6091 h -16 Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-medium)" name="undefined" x="730.5032" y="186.3909" width="16" height="5.0727" class="chart-rectangle" d="M 730.5032,186.3909 h 16 v 5.0727 h -16 Z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g class="chart-layer chart-bar" id="recharts-bar-_r_f_">
                                <g class="chart-layer chart-bar-rectangles">
                                  <g class="chart-layer">
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="275.0194" y="187.2364" width="16" height="0.8455" class="chart-rectangle" d="M275.0194,187.6591A 0.4228,0.4228,0,0,1,275.4421,187.2364L 290.5966,187.2364A 0.4228,0.4228,0,0,1,
        291.0194,187.6591L 291.0194,188.0818L 275.0194,188.0818Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="297.7935" y="178.7818" width="16" height="1.6909" class="chart-rectangle" d="M297.7935,179.6273A 0.8455,0.8455,0,0,1,298.639,178.7818L 312.9481,178.7818A 0.8455,0.8455,0,0,1,
        313.7935,179.6273L 313.7935,180.4727L 297.7935,180.4727Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="320.5677" y="181.3182" width="16" height="1.6909" class="chart-rectangle" d="M320.5677,182.1636A 0.8455,0.8455,0,0,1,321.4132,181.3182L 335.7223,181.3182A 0.8455,0.8455,0,0,1,
        336.5677,182.1636L 336.5677,183.0091L 320.5677,183.0091Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="343.3419" y="186.3909" width="16" height="0.8455" class="chart-rectangle" d="M343.3419,186.8137A 0.4228,0.4228,0,0,1,343.7647,186.3909L 358.9192,186.3909A 0.4228,0.4228,0,0,1,
        359.3419,186.8137L 359.3419,187.2364L 343.3419,187.2364Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="366.1161" y="173.7091" width="16" height="1.6909" class="chart-rectangle" d="M366.1161,174.5545A 0.8455,0.8455,0,0,1,366.9616,173.7091L 381.2707,173.7091A 0.8455,0.8455,0,0,1,
        382.1161,174.5545L 382.1161,175.4L 366.1161,175.4Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="525.5355" y="173.7091" width="16" height="3.3818" class="chart-rectangle" d="M525.5355,175.4A 1.6909,1.6909,0,0,1,527.2264,173.7091L 539.8446,173.7091A 1.6909,1.6909,0,0,1,
        541.5355,175.4L 541.5355,177.0909L 525.5355,177.0909Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="548.3097" y="186.3909" width="16" height="0.8455" class="chart-rectangle" d="M548.3097,186.8137A 0.4228,0.4228,0,0,1,548.7324,186.3909L 563.8869,186.3909A 0.4228,0.4228,0,0,1,
        564.3097,186.8137L 564.3097,187.2364L 548.3097,187.2364Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="571.0839" y="178.7818" width="16" height="2.5364" class="chart-rectangle" d="M571.0839,180.05A 1.2682,1.2682,0,0,1,572.3521,178.7818L 585.8157,178.7818A 1.2682,1.2682,0,0,1,
        587.0839,180.05L 587.0839,181.3182L 571.0839,181.3182Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="593.8581" y="170.3273" width="16" height="3.3818" class="chart-rectangle" d="M593.8581,172.0182A 1.6909,1.6909,0,0,1,595.549,170.3273L 608.1672,170.3273A 1.6909,1.6909,0,0,1,
        609.8581,172.0182L 609.8581,173.7091L 593.8581,173.7091Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="616.6323" y="186.3909" width="16" height="0.8455" class="chart-rectangle" d="M616.6323,186.8137A 0.4228,0.4228,0,0,1,617.055,186.3909L 632.2095,186.3909A 0.4228,0.4228,0,0,1,
        632.6323,186.8137L 632.6323,187.2364L 616.6323,187.2364Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="639.4065" y="173.7091" width="16" height="3.3818" class="chart-rectangle" d="M639.4065,175.4A 1.6909,1.6909,0,0,1,641.0974,173.7091L 653.7156,173.7091A 1.6909,1.6909,0,0,1,
        655.4065,175.4L 655.4065,177.0909L 639.4065,177.0909Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="684.9548" y="166.9455" width="16" height="4.2273" class="chart-rectangle" d="M684.9548,169.0591A 2.1136,2.1136,0,0,1,687.0685,166.9455L 698.8412,166.9455A 2.1136,2.1136,0,0,1,
        700.9548,169.0591L 700.9548,171.1727L 684.9548,171.1727Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="707.729" y="175.4" width="16" height="5.9182" class="chart-rectangle" d="M707.729,178.3591A 2.9591,2.9591,0,0,1,710.6881,175.4L 720.7699,175.4A 2.9591,2.9591,0,0,1,
        723.729,178.3591L 723.729,181.3182L 707.729,181.3182Z" />
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar-rectangle">
                                      <g class="chart-layer chart-inactive-bar">
                                        <path fill="var(--color-low)" name="undefined" x="730.5032" y="184.7" width="16" height="1.6909" class="chart-rectangle" d="M730.5032,185.5454A 0.8455,0.8455,0,0,1,731.3487,184.7L 745.6578,184.7A 0.8455,0.8455,0,0,1,
        746.5032,185.5454L 746.5032,186.3909L 730.5032,186.3909Z" />
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
                                  <text height="30" width="706" stroke="none" x="55.38709677419355" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="55.38709677419355">Aug 1</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="100.93548387096774" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="100.93548387096774">Aug 3</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="146.48387096774192" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="146.48387096774192">Aug 5</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="192.0322580645161" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="192.0322580645161">Aug 7</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="237.5806451612903" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="237.5806451612903">Aug 9</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="283.1290322580645" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="283.1290322580645">Aug 11</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="328.67741935483866" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="328.67741935483866">Aug 13</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="374.22580645161287" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="374.22580645161287">Aug 15</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="419.7741935483871" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="419.7741935483871">Aug 17</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="465.3225806451613" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="465.3225806451613">Aug 19</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="510.8709677419355" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="510.8709677419355">Aug 21</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="556.4193548387096" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="556.4193548387096">Aug 23</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="601.9677419354838" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="601.9677419354838">Aug 25</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="647.516129032258" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="647.516129032258">Aug 27</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="693.0645161290322" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="693.0645161290322">Aug 29</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="706" stroke="none" x="738.6129032258065" y="208" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="738.6129032258065">Aug 31</tspan>
                                  </text>
                                </g>
                              </g>
                              <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="194" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">0</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="147.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">55</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="101" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">110</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="54.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">165</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="44" height="186" stroke="none" x="36" y="8.25" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="36">220</tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-2 text-xs">Select a severity above to isolate it.</p>
                </section>
              </section>
            </div>
          </div>
          <p role="status" class="text-muted text-xs">Static August sample · drill into request-level rows in API Requests.</p>
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
