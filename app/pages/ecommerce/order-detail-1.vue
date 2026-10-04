<!-- Page: /ecommerce/order-detail-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Order Detail 1 · Blocks Admin" })

const toast = useToast()

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/order-detail-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Orders</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Order Detail 1</span>
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
          <div class="flex min-h-0 flex-1 flex-col overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-5 pb-6 md:hidden">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Orders</span>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-md border shadow-none border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-arrow-left" class="size-4" />
                  </UButton>
                  <div class="flex min-w-0 flex-1 flex-col gap-2.5">
                    <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Order details</p>
                    <h1 class="text-[1.75rem] leading-none font-semibold tracking-tight text-highlighted">ORD-34021</h1>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-success/10 font-normal text-success hover:bg-success/10 border-default">
                        <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                        Paid
                      </div>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-muted font-normal text-default hover:bg-muted border-default">
                        <UIcon name="i-lucide-circle-dashed" class="mr-1 size-3.5" />
                        Unfulfilled
                      </div>
                    </div>
                    <p class="text-muted text-sm leading-6">
                      Mar 18, 2026 · Maya Collins ·
                      <span class="capitalize">online store</span>
                    </p>
                  </div>
                </div>
                <div class="hidden items-start justify-between gap-6 pb-8 md:flex">
                  <div class="flex min-w-0 flex-col gap-3">
                    <div class="flex flex-wrap items-center gap-3">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-10 rounded-full" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-arrow-left" class="size-4" />
                      </UButton>
                      <h1 class="text-4xl font-medium tracking-tight text-highlighted">ORD-34021</h1>
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-success/10 font-normal text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-muted font-normal text-default hover:bg-muted border-default">
                          <UIcon name="i-lucide-circle-dashed" class="mr-1 size-3.5" />
                          Unfulfilled
                        </div>
                      </div>
                    </div>
                    <p class="text-muted text-sm">
                      Order date Mar 18, 2026 · Order from
                      <span class="text-highlighted font-medium">Maya Collins</span>
                      · Purchased via online store
                    </p>
                  </div>
                  <div class="flex flex-col items-end gap-3">
                    <div class="flex items-center gap-1">
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 h-auto px-2 text-sm" aria-label="Contact customer" type="button" @click="openAction(&quot;Contact customer&quot;)">
                        Contact customer
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 h-auto px-2 text-sm" aria-label="Print invoice" type="button" @click="printPage()">
                        Print invoice
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 h-auto px-2 text-sm" aria-label="Share order" type="button" @click="openAction(&quot;Share order&quot;)">
                        Share order
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="grid gap-8 xl:grid-cols-[minmax(0,1fr)_1px_340px] xl:gap-8">
                  <div class="flex flex-col gap-6">
                    <!-- Card 1: Return toAcme Store, Seattle, USEstimated arrivalMar 22 to Mar 24Current stepPreparing2 of -->
                    <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                      <div class="sm:hidden">
                        <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/30 gap-3 border-b py-4 border-default">
                          <div class="flex flex-col gap-1">
                            <p class="text-muted text-xs">
                              Return to
                              <span class="text-highlighted font-medium">Acme Store, Seattle, US</span>
                            </p>
                            <p class="text-muted text-xs">
                              Estimated arrival
                              <span class="text-highlighted font-medium">Mar 22 to Mar 24</span>
                            </p>
                          </div>
                        </div>
                        <div class="p-6 flex flex-col gap-4 pt-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="flex flex-col gap-1">
                              <p class="text-muted text-xs">Current step</p>
                              <p class="font-medium">Preparing</p>
                            </div>
                            <div class="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md font-normal border-default">2 of 4</div>
                          </div>
                          <UProgress :model-value="40" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-1.5" />
                          <div class="grid grid-cols-2 gap-2">
                            <div class="rounded-md border px-3 py-2 text-xs text-highlighted border-default">Review order</div>
                            <div class="rounded-md border px-3 py-2 text-xs bg-(--ui-bg-muted)/50 text-highlighted border-(--ui-text-highlighted)/15 border-default">Preparing</div>
                            <div class="rounded-md border px-3 py-2 text-xs text-muted bg-(--ui-bg-muted)/20 border-default">Packing</div>
                            <div class="rounded-md border px-3 py-2 text-xs text-muted bg-(--ui-bg-muted)/20 border-default">Dispatch</div>
                          </div>
                        </div>
                      </div>
                      <div class="hidden sm:block">
                        <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/30 gap-4 border-b py-4 border-default">
                          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <p class="text-muted text-sm">
                              Return to
                              <span class="text-highlighted font-medium">Acme Store, Seattle, US</span>
                            </p>
                            <p class="text-muted text-sm">
                              Estimated arrived at
                              <span class="text-highlighted font-medium">Mar 22 to Mar 24</span>
                            </p>
                          </div>
                        </div>
                        <div class="p-6 pt-5">
                          <div class="grid gap-4 sm:grid-cols-4">
                            <div class="flex flex-col gap-2.5">
                              <div class="flex items-center gap-2">
                                <span class="size-2.5 rounded-full bg-(--ui-text-highlighted)" />
                                <span class="text-sm text-muted">Review order</span>
                              </div>
                              <UProgress :model-value="100" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-1.5" />
                            </div>
                            <div class="flex flex-col gap-2.5">
                              <div class="flex items-center gap-2">
                                <span class="size-2.5 rounded-full bg-primary" />
                                <span class="text-sm text-highlighted font-medium">Preparing</span>
                              </div>
                              <UProgress :model-value="56" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-1.5" />
                            </div>
                            <div class="flex flex-col gap-2.5">
                              <div class="flex items-center gap-2">
                                <span class="size-2.5 rounded-full bg-(--ui-text-muted)/35" />
                                <span class="text-sm text-muted">Packing</span>
                              </div>
                              <UProgress :model-value="0" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-1.5" />
                            </div>
                            <div class="flex flex-col gap-2.5">
                              <div class="flex items-center gap-2">
                                <span class="size-2.5 rounded-full bg-(--ui-text-muted)/35" />
                                <span class="text-sm text-muted">Dispatch</span>
                              </div>
                              <UProgress :model-value="0" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-1.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto justify-start p-0 text-sm" aria-label="Cancel Order" type="button" @click="openAction(&quot;Cancel Order&quot;)">
                        Cancel Order
                      </UButton>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 sm:min-w-52" to="/ecommerce/add-shipping">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        Create Shipping Label
                      </NuxtLink>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                    <section class="flex flex-col gap-6">
                      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h2 class="text-xl font-semibold text-highlighted">Products</h2>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-muted font-normal text-default hover:bg-muted border-default">
                          <UIcon name="i-lucide-circle-dashed" class="mr-1 size-3.5" />
                          Unfulfilled
                        </div>
                      </div>
                      <div class="flex flex-col gap-6">
                        <div class="flex items-start gap-4">
                          <div class="bg-muted relative size-20 shrink-0 overflow-hidden rounded-xl">
                            <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div class="min-w-0">
                                <h3 class="truncate text-base font-medium text-highlighted">Radiance Ritual Set</h3>
                                <p class="text-muted mt-1 text-sm">SKU-SKIN-4006</p>
                                <p class="text-muted mt-3 text-sm">Soft beige · Quantity 1</p>
                              </div>
                              <p class="text-base font-semibold text-highlighted">$389.00</p>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      </div>
                      <div class="flex flex-col gap-6">
                        <div class="flex items-start gap-4">
                          <div class="bg-muted relative size-20 shrink-0 overflow-hidden rounded-xl">
                            <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div class="min-w-0">
                                <h3 class="truncate text-base font-medium text-highlighted">Barrier Repair Drops</h3>
                                <p class="text-muted mt-1 text-sm">SKU-TREAT-6612</p>
                                <p class="text-muted mt-3 text-sm">Amber glass · Quantity 2</p>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline mt-2 h-auto p-0 text-sm font-medium" aria-label="Reserved item" type="button" @click="openAction(&quot;Reserved item&quot;)">
                                  Reserved item
                                </UButton>
                              </div>
                              <p class="text-base font-semibold text-highlighted">$168.00</p>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      </div>
                      <div class="flex flex-col gap-6">
                        <div class="flex items-start gap-4">
                          <div class="bg-muted relative size-20 shrink-0 overflow-hidden rounded-xl">
                            <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div class="min-w-0">
                                <h3 class="truncate text-base font-medium text-highlighted">Botanical Body Polish</h3>
                                <p class="text-muted mt-1 text-sm">SKU-BODY-6118</p>
                                <p class="text-muted mt-3 text-sm">Citrus · Quantity 1</p>
                              </div>
                              <p class="text-base font-semibold text-highlighted">$52.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-col gap-6">
                        <div class="flex items-center justify-between gap-3">
                          <h2 class="text-lg font-semibold text-highlighted">Payment details</h2>
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-success/10 font-normal text-success hover:bg-success/10 border-default">
                            <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                            Paid
                          </div>
                        </div>
                        <div class="grid gap-4 text-sm">
                          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <span class="text-muted">Payment method</span>
                            <span class="text-highlighted inline-flex items-center gap-2 font-medium">
                              <UIcon name="i-lucide-credit-card" class="size-4" />
                              Visa ending in 4242
                            </span>
                          </div>
                          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <span class="text-muted">Subtotal</span>
                            <span class="font-medium">3 items ·$609.00</span>
                          </div>
                          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <span class="text-muted">Shipping type</span>
                            <span class="max-w-sm text-right font-medium">Express shipping</span>
                          </div>
                          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <span class="text-muted">Shipping fee</span>
                            <span class="font-medium">$18.00</span>
                          </div>
                          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <span class="text-muted">Tax</span>
                            <span class="font-medium">$47.52</span>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex items-center justify-between gap-3">
                          <span class="text-base font-semibold">Total</span>
                          <span class="text-xl font-semibold">$674.52</span>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 h-full w-[1px] hidden xl:block xl:h-auto" />
                  <div class="flex flex-col gap-5">
                    <!-- Card 2: Shipping address -->
                    <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                      <div class="p-6 flex flex-col gap-6 pt-5">
                        <div class="flex flex-col gap-5">
                          <div class="flex items-center justify-between gap-3">
                            <h3 class="font-medium text-highlighted">Shipping address</h3>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <UIcon name="i-lucide-pencil" class="size-4" />
                            </UButton>
                          </div>
                          <div class="relative overflow-hidden rounded-md border border-default">
                            <div class="h-40 w-full">
                              <div class="relative h-full w-full maplibregl-map">
                                <div class="bg-(--ui-bg)/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
                                  <div class="flex gap-1">
                                    <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full" />
                                    <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />
                                    <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
                                  </div>
                                </div>
                                <div class="maplibregl-canvas-container">
                                  <canvas class="maplibregl-canvas" aria-label="Map" role="region" width="288" height="160" style="width: 288px; height: 160px;" />
                                </div>
                                <div class="maplibregl-control-container">
                                  <div class="maplibregl-ctrl-top-left" />
                                  <div class="maplibregl-ctrl-top-right" />
                                  <div class="maplibregl-ctrl-bottom-left" />
                                  <div class="maplibregl-ctrl-bottom-right" />
                                </div>
                              </div>
                            </div>
                            <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
                              <div class="relative flex items-center justify-center">
                                <span class="bg-primary/20 absolute size-12 rounded-full" />
                                <div class="bg-primary text-inverted relative flex size-10 items-center justify-center rounded-full border-2 border-inverted shadow-lg">
                                  <UIcon name="i-lucide-map-pin" class="size-4" />
                                </div>
                              </div>
                            </div>
                            <div class="pointer-events-none absolute top-3 left-3">
                              <div class="bg-(--ui-bg)/95 text-highlighted rounded-sm border px-2.5 py-1 text-xs font-medium shadow-sm border-default">Chicago, IL</div>
                            </div>
                          </div>
                          <div class="flex flex-col gap-3 px-1">
                            <div class="flex flex-col gap-1">
                              <p class="font-medium">Maya Collins</p>
                              <p class="text-muted text-sm leading-6">
                                2149 W Fulton St, Apt 4B
                                <br />
                                West Loop, Building C
                                <br />
                                Chicago, IL 60612,United States
                              </p>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-5">
                          <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full size-14">
                                <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">MC</span>
                              </span>
                              <div class="flex flex-col gap-1">
                                <p class="font-medium">Maya Collins</p>
                                <p class="text-muted text-sm">Total: 4 orders</p>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 rounded-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <UIcon name="i-lucide-pencil" class="size-4" />
                            </UButton>
                          </div>
                          <div class="flex flex-wrap gap-2">
                            <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 font-normal border-default">maya.collins@acme-demo.co</div>
                            <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 font-normal border-default">+1 (206) 555-0174</div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-4">
                          <div class="flex items-center justify-between gap-3">
                            <h3 class="font-medium text-highlighted">Order note</h3>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <UIcon name="i-lucide-pencil" class="size-4" />
                            </UButton>
                          </div>
                          <div class="bg-(--ui-bg-muted)/50 rounded-md border px-4 py-3 border-default">
                            <p class="text-muted text-sm leading-6">Add a handwritten thank-you card and use the gift sleeve for the hero set.</p>
                          </div>
                        </div>
                      </div>
                    </UCard>
                    <div class="flex flex-col gap-4 px-1 pt-1">
                      <div class="flex flex-col gap-1">
                        <h3 class="font-medium text-highlighted">Order activity</h3>
                        <p class="text-muted text-xs">Fulfillment updates.</p>
                      </div>
                      <div class="flex flex-col gap-4">
                        <div class="relative pl-6">
                          <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-highlighted)/75" />
                          <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                          <div class="flex min-w-0 flex-1 flex-col gap-1">
                            <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                              <p class="text-sm font-medium">Payment captured</p>
                              <p class="text-xs text-muted">Today, 9:12 AM</p>
                            </div>
                            <p class="text-muted text-sm leading-6">Visa ending in 4242 approved for the full order amount.</p>
                          </div>
                        </div>
                        <div class="relative pl-6">
                          <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-primary" />
                          <span class="bg-(--ui-border) absolute top-5 bottom-[-1rem] left-[5px] w-px" />
                          <div class="flex min-w-0 flex-1 flex-col gap-1">
                            <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                              <p class="text-sm font-medium">Packing in progress</p>
                              <p class="text-xs text-muted">Today, 10:36 AM</p>
                            </div>
                            <p class="text-muted text-sm leading-6">Fulfillment team is preparing the hero set and gift sleeve.</p>
                          </div>
                        </div>
                        <div class="relative pl-6">
                          <span class="absolute top-1.5 left-0 size-2.5 rounded-full bg-(--ui-text-muted)/35" />
                          <div class="flex min-w-0 flex-1 flex-col gap-1">
                            <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                              <p class="text-sm text-muted font-normal">Carrier handoff next</p>
                              <p class="text-xs text-(--ui-text-muted)/70">Expected in 1-2 hours</p>
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
