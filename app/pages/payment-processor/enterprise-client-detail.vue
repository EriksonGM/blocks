<!-- Page: /payment-processor/enterprise-client-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Enterprise Client Detail · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/enterprise-client-detail">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="vertical-scrollbar grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:overflow-hidden xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
            <div class="flex min-h-0 flex-col border-b lg:border-r lg:border-b-0 border-default">
              <div class="flex shrink-0 flex-col border-b px-5 py-6 lg:h-72 border-default">
                <div class="bg-(--ui-bg-muted)/40 grid size-14 place-items-center rounded-2xl border shadow-sm border-default">
                  <img alt="Shadcnblocks.com logo" width="32" height="37" class="h-8 w-auto dark:invert" style="color:transparent" src="/reference/138179f32dde443d.svg" loading="lazy" />
                </div>
                <h1 class="mt-4 text-xl font-semibold tracking-tight text-highlighted">Shadcnblocks.com</h1>
                <p class="text-muted mt-1 text-sm">shadcnblocks.com</p>
                <div class="mt-4 flex flex-wrap items-center gap-2">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-8 rounded-md px-3 text-xs" aria-label="New invoice" type="button" @click="openAction(&quot;New invoice&quot;)">
                    <UIcon name="i-lucide-file-plus-corner" class="size-4" />
                    New invoice
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-xs" aria-label="Email" type="button" @click="openAction(&quot;Email&quot;)">
                    <UIcon name="i-lucide-mail" class="size-4" />
                    Email
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-xs" aria-label="Add note" type="button" @click="openAction(&quot;Add note&quot;)">
                    <UIcon name="i-lucide-circle-plus" class="size-4" />
                    Add note
                  </UButton>
                </div>
                <dl class="mt-auto flex flex-wrap items-start gap-x-6 gap-y-3 pt-6">
                  <div>
                    <dt class="text-muted text-xs">Lifetime volume</dt>
                    <dd class="mt-1 text-sm font-medium tabular-nums">$2.41M</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">On-time rate</dt>
                    <dd class="mt-1 text-sm font-medium tabular-nums">96%</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Avg days to pay</dt>
                    <dd class="mt-1 text-sm font-medium tabular-nums">18 days</dd>
                  </div>
                </dl>
              </div>
              <div class="horizontal-scrollbar flex shrink-0 items-center gap-5 overflow-x-auto border-b px-5 border-default">
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors border-b-foreground text-highlighted" aria-label="Details" type="button" @click="openAction(&quot;Details&quot;)">
                  <UIcon name="i-lucide-file-text" class="size-4" />
                  Details
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Contacts" type="button" @click="openAction(&quot;Contacts&quot;)">
                  <UIcon name="i-lucide-users" class="size-4" />
                  Contacts
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Notes" type="button" @click="openAction(&quot;Notes&quot;)">
                  <UIcon name="i-lucide-pencil" class="size-4" />
                  Notes
                </UButton>
              </div>
              <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
                <div class="space-y-0.5 px-3 py-4">
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-building-2" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Legal name</p>
                    <p class="min-w-0 flex-1 truncate text-sm">Shadcnblocks.com</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Legal name" type="button" @click="openAction(&quot;Actions for Legal name&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-mail" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Billing email</p>
                    <p class="min-w-0 flex-1 truncate text-sm">billing@shadcnblocks.com</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Billing email" type="button" @click="openAction(&quot;Actions for Billing email&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-globe" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Website</p>
                    <p class="min-w-0 flex-1 truncate text-sm">shadcnblocks.com</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Website" type="button" @click="openAction(&quot;Actions for Website&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-map-pin" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Location</p>
                    <p class="min-w-0 flex-1 truncate text-sm">Sydney, Australia</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Location" type="button" @click="openAction(&quot;Actions for Location&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-calendar-days" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Customer since</p>
                    <p class="min-w-0 flex-1 truncate text-sm">March 2023</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Customer since" type="button" @click="openAction(&quot;Actions for Customer since&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-user-round" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Account manager</p>
                    <p class="min-w-0 flex-1 truncate text-sm">Ingrid Sandoval</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Account manager" type="button" @click="openAction(&quot;Actions for Account manager&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-landmark" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Tax ID</p>
                    <p class="min-w-0 flex-1 truncate text-sm">ABN 74 612 893 204</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Tax ID" type="button" @click="openAction(&quot;Actions for Tax ID&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-receipt" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Payment terms</p>
                    <p class="min-w-0 flex-1 truncate text-sm">Net 30</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Payment terms" type="button" @click="openAction(&quot;Actions for Payment terms&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                  <div class="group hover:bg-(--ui-bg-muted)/40 relative flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
                    <UIcon name="i-lucide-users" class="text-muted size-4 shrink-0" />
                    <p class="text-muted w-32 shrink-0 truncate text-sm">Licensed seats</p>
                    <p class="min-w-0 flex-1 truncate text-sm">240 across 4 teams</p>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default bg-(--ui-bg-muted)/40 absolute top-1/2 right-2 size-7 -translate-y-1/2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100" aria-label="Actions for Licensed seats" type="button" @click="openAction(&quot;Actions for Licensed seats&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
                <div class="border-t px-5 py-5 border-default">
                  <div class="text-muted flex items-center gap-2 text-sm">
                    <UIcon name="i-lucide-building-2" class="size-4" />
                    About the account
                  </div>
                  <div class="mt-3 space-y-3">
                    <p class="text-sm leading-relaxed">Shadcnblocks.com uses the full catalogue across product, design, and engineering, with 240 named seats across four teams. The account moved from per-project purchases to a single annual agreement in March 2023.</p>
                    <p class="text-sm leading-relaxed">Billing runs on one consolidated invoice each quarter, settled by bank transfer against a purchase order. The finance team requires a PO reference on every invoice, so automatic card capture stays switched off.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex min-h-0 flex-col">
              <div class="flex shrink-0 flex-col border-b px-5 py-6 lg:h-72 border-default">
                <div class="flex shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-3">
                  <div>
                    <p class="text-muted text-xs">Billed volume · last 12 months</p>
                    <p class="mt-1 text-3xl font-semibold tracking-tight tabular-nums text-highlighted">$1.06M</p>
                  </div>
                  <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div class="flex items-center gap-2">
                      <span class="text-muted text-xs">Paid</span>
                      <span class="text-xs font-medium tabular-nums">$858K</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted text-xs">Open</span>
                      <span class="text-xs font-medium tabular-nums">$18K</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted text-xs">Overdue</span>
                      <span class="text-xs font-medium tabular-nums">$184K</span>
                    </div>
                  </div>
                </div>
                <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mt-4 aspect-auto h-40 w-full lg:h-auto lg:min-h-0 lg:flex-1" style=";--color-paid:var(--ui-primary);--color-open:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-overdue:color-mix(in oklch, var(--ui-text-highlighted) 28%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                  <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                  <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-paid:var(--ui-primary);--color-open:color-mix(in oklch, var(--ui-text-highlighted) 55%, var(--ui-bg));--color-overdue:color-mix(in oklch, var(--ui-text-highlighted) 28%, var(--ui-bg));width:100%;height:167px;min-width:0" role="img" aria-label="Analytics chart">
                    <div style="width:0;height:0;overflow:visible">
                      <div width="728" height="167" class="chart-wrapper" style="position: relative; cursor: default; width: 728px; height: 167px;">
                        <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 728 167" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                          <title />
                          <desc />
                          <g class="chart-zIndex-layer_-100">
                            <g class="chart-cartesian-grid">
                              <g class="chart-cartesian-grid-horizontal">
                                <line stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" stroke-dasharray="3 3" fill="none" x="44" y="4" width="676" height="133" x1="44" y1="137" x2="720" y2="137" />
                                <line stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" stroke-dasharray="3 3" fill="none" x="44" y="4" width="676" height="133" x1="44" y1="70.5" x2="720" y2="70.5" />
                                <line stroke="color-mix(in oklch, var(--ui-border) 78%, transparent)" stroke-dasharray="3 3" fill="none" x="44" y="4" width="676" height="133" x1="44" y1="4" x2="720" y2="4" />
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_-50" />
                          <defs>
                            <clipPath id="recharts1-clip">
                              <rect x="44" y="4" height="133" width="676" />
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
                                      <path fill="var(--color-paid)" name="undefined" x="60.9" y="95.77" width="22" height="41.23" class="chart-rectangle" d="M60.9,95.77L 82.9,95.77L 82.9,137L 60.9,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="117.2333" y="87.79" width="22" height="49.21" class="chart-rectangle" d="M117.2333,87.79L 139.2333,87.79L 139.2333,137L 117.2333,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="173.5667" y="78.48" width="22" height="58.52" class="chart-rectangle" d="M173.5667,78.48L 195.5667,78.48L 195.5667,137L 173.5667,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="229.9" y="107.075" width="22" height="29.925" class="chart-rectangle" d="M229.9,107.075L 251.9,107.075L 251.9,137L 229.9,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="286.2333" y="73.16" width="22" height="63.84" class="chart-rectangle" d="M286.2333,73.16L 308.2333,73.16L 308.2333,137L 286.2333,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="342.5667" y="102.42" width="22" height="34.58" class="chart-rectangle" d="M342.5667,102.42L 364.5667,102.42L 364.5667,137L 342.5667,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="398.9" y="78.48" width="22" height="58.52" class="chart-rectangle" d="M398.9,78.48L 420.9,78.48L 420.9,137L 398.9,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="455.2333" y="89.785" width="22" height="47.215" class="chart-rectangle" d="M455.2333,89.785L 477.2333,89.785L 477.2333,137L 455.2333,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="511.5667" y="109.07" width="22" height="27.93" class="chart-rectangle" d="M511.5667,109.07L 533.5667,109.07L 533.5667,137L 511.5667,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="567.9" y="78.48" width="22" height="58.52" class="chart-rectangle" d="M567.9,78.48L 589.9,78.48L 589.9,137L 567.9,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="624.2333" y="73.16" width="22" height="63.84" class="chart-rectangle" d="M624.2333,73.16L 646.2333,73.16L 646.2333,137L 624.2333,137Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-paid)" name="undefined" x="680.5667" y="99.76" width="22" height="37.24" class="chart-rectangle" d="M680.5667,99.76L 702.5667,99.76L 702.5667,137L 680.5667,137Z" />
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
                                      <path fill="var(--color-open)" name="undefined" x="680.5667" y="87.79" width="22" height="11.97" class="chart-rectangle" d="M680.5667,87.79L 702.5667,87.79L 702.5667,99.76L 680.5667,99.76Z" />
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
                                      <path fill="var(--color-overdue)" name="undefined" x="624.2333" y="14.64" width="22" height="58.52" class="chart-rectangle" d="M624.2333,17.64A 3,3,0,0,1,627.2333,14.64L 643.2333,14.64A 3,3,0,0,1,
        646.2333,17.64L 646.2333,73.16L 624.2333,73.16Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-overdue)" name="undefined" x="680.5667" y="23.95" width="22" height="63.84" class="chart-rectangle" d="M680.5667,26.95A 3,3,0,0,1,683.5667,23.95L 699.5667,23.95A 3,3,0,0,1,
        702.5667,26.95L 702.5667,87.79L 680.5667,87.79Z" />
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
                                <text width="44" height="133" stroke="none" x="36" y="137" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="36">0</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="44" height="133" stroke="none" x="36" y="70.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="36">100k</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="44" height="133" stroke="none" x="36" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="36">200k</tspan>
                                </text>
                              </g>
                            </g>
                            <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="72.16666666666667" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="72.16666666666667">Aug</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="128.5" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="128.5">Sep</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="184.83333333333334" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="184.83333333333334">Oct</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="241.16666666666666" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="241.16666666666666">Nov</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="297.50000000000006" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="297.50000000000006">Dec</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="353.83333333333337" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="353.83333333333337">Jan</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="410.1666666666667" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="410.1666666666667">Feb</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="466.50000000000006" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="466.50000000000006">Mar</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="522.8333333333334" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="522.8333333333334">Apr</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="579.1666666666666" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="579.1666666666666">May</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="635.5" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="635.5">Jun</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="676" stroke="none" x="691.8333333333334" y="151" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="691.8333333333334">Jul</tspan>
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
              <div class="horizontal-scrollbar flex shrink-0 items-center gap-5 overflow-x-auto border-b px-5 border-default">
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors border-b-foreground text-highlighted" aria-label="Invoices" type="button" @click="openAction(&quot;Invoices&quot;)">
                  <UIcon name="i-lucide-receipt" class="size-4" />
                  Invoices
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Activity" type="button" @click="openAction(&quot;Activity&quot;)">
                  <UIcon name="i-lucide-calendar-days" class="size-4" />
                  Activity
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Payment methods" type="button" @click="openAction(&quot;Payment methods&quot;)">
                  <UIcon name="i-lucide-credit-card" class="size-4" />
                  Payment methods
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Settings" type="button" @click="openAction(&quot;Settings&quot;)">
                  <UIcon name="i-lucide-shield-check" class="size-4" />
                  Settings
                </UButton>
              </div>
              <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
                <div class="px-5 py-5">
                  <p class="text-muted text-sm">Total: 8 invoices</p>
                  <div class="mt-3 grid gap-3 xl:grid-cols-2">
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2081</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-(--ui-error)/20 bg-(--ui-error)/10 text-error dark:bg-(--ui-error)/15 border-default">Overdue</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Q3 workspace expansion · 40 seats</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$96,000.00</span>
                        · Due 12 days ago
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2074</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-(--ui-error)/20 bg-(--ui-error)/10 text-error dark:bg-(--ui-error)/15 border-default">Overdue</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Annual agreement · Q3 instalment</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$88,000.00</span>
                        · Due 4 days ago
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2068</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/40 dark:text-info">Open</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Priority support retainer</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$18,000.00</span>
                        · Due in 16 days
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2055</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/40 dark:text-success">Paid</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Annual agreement · Q2 instalment</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$88,000.00</span>
                        · Paid 14 May 2026
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2041</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/40 dark:text-success">Paid</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Custom component commission · design system</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$42,500.00</span>
                        · Paid 2 Apr 2026
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2029</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/40 dark:text-success">Paid</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Annual agreement · Q1 instalment</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$88,000.00</span>
                        · Paid 19 Feb 2026
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2014</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/40 dark:text-success">Paid</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Figma kit handoff · design system</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$12,400.00</span>
                        · Paid 8 Jan 2026
                      </p>
                    </div>
                    <div class="hover:bg-(--ui-bg-muted)/40 rounded-xl border px-4 py-3 transition-colors border-default">
                      <div class="flex items-start justify-between gap-3">
                        <p class="min-w-0 truncate text-sm font-medium">INV-2098</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 shrink-0 rounded-full px-2 text-[11px] font-medium shadow-none bg-muted text-muted border-transparent border-default">Draft</div>
                      </div>
                      <p class="text-muted mt-1 truncate text-xs">Q4 workspace expansion · product team</p>
                      <p class="text-muted mt-3 text-xs">
                        <span class="text-highlighted font-medium tabular-nums">$74,000.00</span>
                        · Not yet issued
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
