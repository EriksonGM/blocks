<!-- Page: /ecommerce/shipment-detail-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Shipment Detail 1 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/shipment-detail-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Shipments</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Shipment Detail 1</span>
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
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-4 sm:p-6 md:p-8">
                <div class="flex flex-col gap-5 pb-6 md:hidden">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Shipments</span>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-md border shadow-none border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-arrow-left" class="size-4" />
                  </UButton>
                  <div class="flex min-w-0 flex-1 flex-col gap-2.5">
                    <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Shipment details</p>
                    <h1 class="text-[1.75rem] leading-none font-semibold tracking-tight text-highlighted">SHP-8801</h1>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">In transit</div>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">Delay</div>
                    </div>
                    <p class="text-muted text-sm leading-6">Mar 18, 2026 · ORD-52108</p>
                  </div>
                  <div class="flex flex-col gap-3">
                    <UButton color="neutral" variant="ghost" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto justify-start p-0 text-sm" aria-label="Cancel shipment" type="button" @click="openAction(&quot;Cancel shipment&quot;)">
                      Cancel shipment
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 rounded-xl shadow-none" aria-label="Notify customer" type="button" @click="openAction(&quot;Notify customer&quot;)">
                      <UIcon name="i-lucide-message-square-more" class="size-4" />
                      Notify customer
                    </UButton>
                  </div>
                </div>
                <div class="hidden items-start justify-between gap-6 pb-8 md:flex">
                  <div class="flex min-w-0 flex-col gap-3">
                    <div class="flex flex-wrap items-center gap-3">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-10 rounded-full" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-arrow-left" class="size-4" />
                      </UButton>
                      <h1 class="text-4xl font-medium tracking-tight text-highlighted">SHP-8801</h1>
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">In transit</div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">Delay</div>
                      </div>
                    </div>
                    <p class="text-muted text-sm">
                      Shipping date Mar 18, 2026 · Order ID
                      <span class="text-highlighted font-medium">ORD-52108</span>
                    </p>
                  </div>
                  <div class="flex flex-col items-end gap-3">
                    <div class="flex items-center gap-2">
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 h-auto px-2 text-sm" aria-label="Cancel shipment" type="button" @click="openAction(&quot;Cancel shipment&quot;)">
                        Cancel shipment
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 rounded-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-message-square-more" class="size-4" />
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 h-9 px-4 py-2 rounded-md shadow-none" aria-label="Notify Customer" type="button" @click="openAction(&quot;Notify Customer&quot;)">
                        Notify Customer
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="grid gap-6 md:h-[calc(100svh-13rem)] md:min-h-0 md:grid-cols-2 md:items-stretch md:gap-6">
                  <div class="flex flex-col gap-5 sm:gap-6 md:min-h-0">
                    <!-- Card 1: Seattle to Chicago -->
                    <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6 gap-0 border-b px-4 py-4 sm:px-6 sm:py-5 border-default">
                        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <div class="flex flex-wrap items-center gap-2 text-sm">
                            <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2.5 py-1 font-normal border-default">ParcelFlow Express</div>
                            <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2.5 py-1 font-normal border-default">Priority air</div>
                          </div>
                          <div class="shrink-0 sm:text-right">
                            <span class="text-muted block text-xs">ETA</span>
                            <p class="text-highlighted text-sm font-medium">
                              <span class="hidden sm:inline">21 Mar 2026 · 10:30 PM</span>
                              <span class="sm:hidden">21 Mar 2026, 10:30 PM</span>
                            </p>
                          </div>
                        </div>
                        <div class="min-w-0">
                          <span class="text-muted text-xs">Route</span>
                          <p class="text-lg font-semibold tracking-tight sm:text-xl text-highlighted">Seattle to Chicago</p>
                          <p class="text-muted text-sm leading-5 sm:truncate">Mercer Hub → Salt Lake City Hub →Chicago Sort Hub</p>
                        </div>
                      </div>
                      <div class="p-6 px-4 pt-4 pb-5 sm:px-6 sm:pt-5">
                        <div class="grid gap-3 sm:hidden">
                          <div class="grid grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto] items-center gap-x-2">
                            <span class="flex size-9 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                              <UIcon name="i-lucide-package" class="size-4 text-(--ui-bg)" />
                            </span>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-full" />
                            </div>
                            <span class="flex size-9 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                              <UIcon name="i-lucide-clipboard-check" class="size-4 text-(--ui-bg)" />
                            </span>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-full" />
                            </div>
                            <span class="flex size-9 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                              <UIcon name="i-lucide-truck" class="size-4 text-highlighted" />
                            </span>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-2/3" />
                            </div>
                            <span class="flex size-9 items-center justify-center rounded-full border border-default bg-(--ui-bg-muted)/20 text-muted">
                              <UIcon name="i-lucide-map-pin" class="size-4 text-(--ui-text-muted)/60" />
                            </span>
                          </div>
                          <div class="text-muted grid grid-cols-4 gap-2 text-center text-[11px] font-medium">
                            <span>Created</span>
                            <span>Confirmed</span>
                            <span>Transit</span>
                            <span>Delivered</span>
                          </div>
                        </div>
                        <div class="hidden gap-4 sm:grid sm:grid-cols-4">
                          <div class="flex flex-col gap-2.5">
                            <div class="flex items-center gap-2.5">
                              <span class="flex size-8 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                                <UIcon name="i-lucide-package" class="size-4 text-(--ui-bg)" />
                              </span>
                              <span class="text-sm text-highlighted font-medium">Created</span>
                            </div>
                            <div class="bg-(--ui-border)/70 h-1.5 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-full" />
                            </div>
                          </div>
                          <div class="flex flex-col gap-2.5">
                            <div class="flex items-center gap-2.5">
                              <span class="flex size-8 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                                <UIcon name="i-lucide-clipboard-check" class="size-4 text-(--ui-bg)" />
                              </span>
                              <span class="text-sm text-highlighted font-medium">Confirmed</span>
                            </div>
                            <div class="bg-(--ui-border)/70 h-1.5 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-full" />
                            </div>
                          </div>
                          <div class="flex flex-col gap-2.5">
                            <div class="flex items-center gap-2.5">
                              <span class="flex size-8 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                                <UIcon name="i-lucide-truck" class="size-4 text-highlighted" />
                              </span>
                              <span class="text-sm text-highlighted font-medium">Transit</span>
                            </div>
                            <div class="bg-(--ui-border)/70 h-1.5 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted) w-2/3" />
                            </div>
                          </div>
                          <div class="flex flex-col gap-2.5">
                            <div class="flex items-center gap-2.5">
                              <span class="flex size-8 items-center justify-center rounded-full border border-default bg-(--ui-bg-muted)/20 text-muted">
                                <UIcon name="i-lucide-map-pin" class="size-4 text-(--ui-text-muted)/60" />
                              </span>
                              <span class="text-sm text-muted">Delivered</span>
                            </div>
                            <div class="bg-(--ui-border)/70 h-1.5 rounded-full">
                              <div class="h-full rounded-full w-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <div class="grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-4">
                      <div class="border-(--ui-border)/70 bg-(--ui-bg)/70 rounded-xl border p-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 border-default">
                        <span class="text-muted">Carrier</span>
                        <span class="font-medium">ParcelFlow Express</span>
                      </div>
                      <div class="border-(--ui-border)/70 bg-(--ui-bg)/70 flex flex-col gap-1 rounded-xl border p-3 sm:rounded-none sm:border-0 sm:border-l sm:bg-transparent sm:p-0 sm:pl-6 border-default">
                        <span class="text-muted">Current hub</span>
                        <span class="font-medium">Salt Lake City Hub</span>
                      </div>
                      <div class="border-(--ui-border)/70 bg-(--ui-bg)/70 flex flex-col gap-1 rounded-xl border p-3 sm:rounded-none sm:border-0 sm:border-l sm:bg-transparent sm:p-0 sm:pl-6 border-default">
                        <span class="text-muted">Last scan</span>
                        <span class="font-medium">Today, 9:12 AM</span>
                      </div>
                      <div class="border-(--ui-border)/70 bg-(--ui-bg)/70 flex flex-col gap-1 rounded-xl border p-3 sm:rounded-none sm:border-0 sm:border-l sm:bg-transparent sm:p-0 sm:pl-6 border-default">
                        <span class="text-muted">ETA window</span>
                        <span class="font-medium">21 Mar 2026, 10:30 PM</span>
                      </div>
                    </div>
                    <div class="md:hidden">
                      <div class="relative h-full min-h-[300px] overflow-hidden rounded-lg border bg-[var(--ui-bg)] sm:min-h-[360px] border-default">
                        <div class="relative h-[300px] sm:h-[360px] md:h-full">
                          <div class="relative h-full w-full maplibregl-map">
                            <div class="bg-(--ui-bg)/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
                              <div class="flex gap-1">
                                <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full" />
                                <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />
                                <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
                              </div>
                            </div>
                            <div class="maplibregl-canvas-container maplibregl-interactive maplibregl-touch-drag-pan maplibregl-touch-zoom-rotate">
                              <canvas class="maplibregl-canvas" aria-label="Map" role="region" width="400" height="300" style="width: 400px; height: 300px;" />
                            </div>
                            <div class="maplibregl-control-container">
                              <div class="maplibregl-ctrl-top-left" />
                              <div class="maplibregl-ctrl-top-right" />
                              <div class="maplibregl-ctrl-bottom-left" />
                              <div class="maplibregl-ctrl-bottom-right" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section class="flex flex-col gap-4 sm:gap-5 md:min-h-0 md:flex-1">
                      <div class="flex flex-col gap-1">
                        <h2 class="text-xl font-semibold text-highlighted">Activity</h2>
                        <p class="text-muted text-sm">Shipment updates from creation through delivery.</p>
                      </div>
                      <div class="md:hidden">
                        <div class="flex flex-col gap-5 pr-0 sm:pr-1">
                          <div class="relative pl-6">
                            <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                            <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                            <div class="flex min-w-0 flex-col gap-1">
                              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <p class="text-sm font-medium">Order placed</p>
                                <p class="text-xs text-muted">Mar 18, 8:18 AM</p>
                              </div>
                              <p class="text-muted text-sm leading-6">Shipment record was generated from the customer order in the online store.</p>
                              <div class="text-muted inline-flex items-center gap-1 text-xs">
                                <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                Seattle, WA
                              </div>
                            </div>
                          </div>
                          <div class="relative pl-6">
                            <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                            <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                            <div class="flex min-w-0 flex-col gap-1">
                              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <p class="text-sm font-medium">Preparing to ship</p>
                                <p class="text-xs text-muted">Mar 18, 8:54 AM</p>
                              </div>
                              <p class="text-muted text-sm leading-6">Warehouse team packed the hero set, scanned the label, and sealed the carton.</p>
                              <div class="text-muted inline-flex items-center gap-1 text-xs">
                                <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                Mercer Fulfillment Hub
                              </div>
                            </div>
                          </div>
                          <div class="relative pl-6">
                            <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                            <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                            <div class="flex min-w-0 flex-col gap-1">
                              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <p class="text-sm font-medium">Picked up by carrier</p>
                                <p class="text-xs text-muted">Mar 18, 11:42 AM</p>
                              </div>
                              <p class="text-muted text-sm leading-6">ParcelFlow collected the shipment and moved it onto the regional linehaul route.</p>
                              <div class="text-muted inline-flex items-center gap-1 text-xs">
                                <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                Seattle, WA
                              </div>
                            </div>
                          </div>
                          <div class="relative pl-6">
                            <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-primary" />
                            <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                            <div class="flex min-w-0 flex-col gap-1">
                              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <p class="text-sm font-medium">Cross-country transfer</p>
                                <p class="text-xs text-muted">Today, 9:12 AM</p>
                              </div>
                              <p class="text-muted text-sm leading-6">Shipment is currently moving through the Salt Lake hub before the final Midwest handoff.</p>
                              <div class="text-muted inline-flex items-center gap-1 text-xs">
                                <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                Salt Lake City, UT
                              </div>
                            </div>
                          </div>
                          <div class="relative pl-6">
                            <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-muted)/35" />
                            <div class="flex min-w-0 flex-col gap-1">
                              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                <p class="text-sm text-muted font-normal">Out for delivery</p>
                                <p class="text-xs text-(--ui-text-muted)/70">Expected tomorrow</p>
                              </div>
                              <p class="text-muted text-sm leading-6">Last-mile dispatch will begin once the local sort is completed.</p>
                              <div class="text-muted inline-flex items-center gap-1 text-xs">
                                <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                Chicago, IL
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-slot="scroll-area" class="relative overflow-hidden hidden md:block md:min-h-0 md:flex-1 md:pr-4" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                        <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                          <div style="min-width:100%;display:table">
                            <div class="flex flex-col gap-5 pr-0 sm:pr-1">
                              <div class="relative pl-6">
                                <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                                <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                                <div class="flex min-w-0 flex-col gap-1">
                                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                    <p class="text-sm font-medium">Order placed</p>
                                    <p class="text-xs text-muted">Mar 18, 8:18 AM</p>
                                  </div>
                                  <p class="text-muted text-sm leading-6">Shipment record was generated from the customer order in the online store.</p>
                                  <div class="text-muted inline-flex items-center gap-1 text-xs">
                                    <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                    Seattle, WA
                                  </div>
                                </div>
                              </div>
                              <div class="relative pl-6">
                                <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                                <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                                <div class="flex min-w-0 flex-col gap-1">
                                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                    <p class="text-sm font-medium">Preparing to ship</p>
                                    <p class="text-xs text-muted">Mar 18, 8:54 AM</p>
                                  </div>
                                  <p class="text-muted text-sm leading-6">Warehouse team packed the hero set, scanned the label, and sealed the carton.</p>
                                  <div class="text-muted inline-flex items-center gap-1 text-xs">
                                    <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                    Mercer Fulfillment Hub
                                  </div>
                                </div>
                              </div>
                              <div class="relative pl-6">
                                <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                                <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                                <div class="flex min-w-0 flex-col gap-1">
                                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                    <p class="text-sm font-medium">Picked up by carrier</p>
                                    <p class="text-xs text-muted">Mar 18, 11:42 AM</p>
                                  </div>
                                  <p class="text-muted text-sm leading-6">ParcelFlow collected the shipment and moved it onto the regional linehaul route.</p>
                                  <div class="text-muted inline-flex items-center gap-1 text-xs">
                                    <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                    Seattle, WA
                                  </div>
                                </div>
                              </div>
                              <div class="relative pl-6">
                                <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-primary" />
                                <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                                <div class="flex min-w-0 flex-col gap-1">
                                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                    <p class="text-sm font-medium">Cross-country transfer</p>
                                    <p class="text-xs text-muted">Today, 9:12 AM</p>
                                  </div>
                                  <p class="text-muted text-sm leading-6">Shipment is currently moving through the Salt Lake hub before the final Midwest handoff.</p>
                                  <div class="text-muted inline-flex items-center gap-1 text-xs">
                                    <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                    Salt Lake City, UT
                                  </div>
                                </div>
                              </div>
                              <div class="relative pl-6">
                                <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-muted)/35" />
                                <div class="flex min-w-0 flex-col gap-1">
                                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                                    <p class="text-sm text-muted font-normal">Out for delivery</p>
                                    <p class="text-xs text-(--ui-text-muted)/70">Expected tomorrow</p>
                                  </div>
                                  <p class="text-muted text-sm leading-6">Last-mile dispatch will begin once the local sort is completed.</p>
                                  <div class="text-muted inline-flex items-center gap-1 text-xs">
                                    <UIcon name="i-lucide-map-pin" class="size-3.5" />
                                    Chicago, IL
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="hidden md:block md:h-full md:min-h-0">
                    <div class="relative h-full min-h-[300px] overflow-hidden rounded-lg border bg-[var(--ui-bg)] sm:min-h-[360px] border-default">
                      <div class="relative h-[300px] sm:h-[360px] md:h-full">
                        <div class="relative h-full w-full maplibregl-map">
                          <div class="bg-(--ui-bg)/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
                            <div class="flex gap-1">
                              <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full" />
                              <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />
                              <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
                            </div>
                          </div>
                          <div class="maplibregl-canvas-container maplibregl-interactive maplibregl-touch-drag-pan maplibregl-touch-zoom-rotate">
                            <canvas class="maplibregl-canvas" aria-label="Map" role="region" width="546" height="790" style="width: 546px; height: 790px;" />
                          </div>
                          <div class="maplibregl-control-container">
                            <div class="maplibregl-ctrl-top-left" />
                            <div class="maplibregl-ctrl-top-right" />
                            <div class="maplibregl-ctrl-bottom-left" />
                            <div class="maplibregl-ctrl-bottom-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
</style>
