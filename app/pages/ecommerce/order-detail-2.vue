<!-- Page: /ecommerce/order-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Order Detail 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "orderNotes": ""
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/order-detail-2">
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
                <span class="text-muted">Order detail 2</span>
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
            <main class="flex min-h-0 flex-1 flex-col overflow-auto">
              <div class="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
                <section class="border-(--ui-border)/70 border-b border-dashed pb-4 border-default">
                  <div class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div class="flex items-start gap-3">
                      <NuxtLink aria-label="Back to sales orders" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-xl" to="/ecommerce/order-list-3">
                        <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
                      </NuxtLink>
                      <div class="space-y-2">
                        <div class="flex flex-wrap items-center gap-2">
                          <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Order Number: SO-654</h1>
                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-error/12 text-error hover:bg-error/12 border-default">Unpaid</div>
                        </div>
                        <p class="text-muted max-w-2xl text-sm leading-6">Sales-order detail view for the new pipeline flow, with invoice, customer, and shipment context in one place.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-xl" aria-label="Quote" type="button" @click="openAction(&quot;Quote&quot;)">
                        Quote
                      </UButton>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-xl pointer-events-none opacity-50" to="#">
                        <UIcon name="i-lucide-chevron-left" class="h-4 w-4" />
                      </NuxtLink>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-xl" to="/ecommerce/order-detail-2?code=so-653">
                        <UIcon name="i-lucide-chevron-right" class="h-4 w-4" />
                      </NuxtLink>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 rounded-xl" to="/ecommerce/edit-order/so-654">
                        <UIcon name="i-lucide-pencil" class="h-4 w-4" />
                        Edit
                      </NuxtLink>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-xl" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                      </UButton>
                    </div>
                  </div>
                </section>
                <section class="grid gap-8 xl:grid-cols-[minmax(0,1.52fr)_360px] xl:gap-12 2xl:grid-cols-[minmax(0,1.46fr)_380px] 2xl:gap-14">
                  <div class="flex min-w-0 flex-col gap-6">
                    <div class="text-default border bg-(--ui-bg-muted)/20 rounded-xl shadow-none border-default">
                      <div class="grid gap-4 p-5">
                        <div>
                          <p class="text-sm font-semibold text-highlighted">New quote</p>
                          <p class="text-muted text-sm">New quote waiting for approval</p>
                        </div>
                        <div class="grid w-full gap-2.5 sm:gap-3">
                          <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 md:hidden">
                            <div class="flex items-center gap-1.5">
                              <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-(--ui-text-highlighted) text-highlighted border-default">
                                <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5" />
                              </div>
                              <div class="bg-(--ui-border)/70 h-1 flex-1 rounded-full">
                                <div class="h-full rounded-full bg-(--ui-text-highlighted)" style="width:100%" />
                              </div>
                            </div>
                            <div class="flex items-center gap-1.5">
                              <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                                <UIcon name="i-lucide-package" class="h-2.5 w-2.5" />
                              </div>
                              <div class="bg-(--ui-border)/70 h-1 flex-1 rounded-full">
                                <div class="h-full rounded-full" style="width:0%" />
                              </div>
                            </div>
                            <div class="flex items-center gap-1.5">
                              <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                                <UIcon name="i-lucide-truck" class="h-2.5 w-2.5" />
                              </div>
                              <div class="bg-(--ui-border)/70 h-1 flex-1 rounded-full">
                                <div class="h-full rounded-full" style="width:0%" />
                              </div>
                            </div>
                            <div class="flex items-center gap-1.5">
                              <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                                <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5" />
                              </div>
                            </div>
                          </div>
                          <div class="hidden md:grid md:grid-cols-[auto_minmax(48px,1fr)_auto_minmax(48px,1fr)_auto_minmax(48px,1fr)_auto] md:items-center md:gap-x-4">
                            <div class="bg-default flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-(--ui-text-highlighted) text-highlighted border-default">
                              <UIcon name="i-lucide-file-text" class="h-3.5 w-3.5" />
                            </div>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full bg-(--ui-text-highlighted)" style="width:100%" />
                            </div>
                            <div class="bg-default flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                              <UIcon name="i-lucide-package" class="h-3.5 w-3.5" />
                            </div>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full" style="width:0%" />
                            </div>
                            <div class="bg-default flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                              <UIcon name="i-lucide-truck" class="h-3.5 w-3.5" />
                            </div>
                            <div class="bg-(--ui-border)/70 h-1 rounded-full">
                              <div class="h-full rounded-full" style="width:0%" />
                            </div>
                            <div class="bg-default flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-(--ui-border)/70 text-muted border-default">
                              <UIcon name="i-lucide-circle-check" class="h-3.5 w-3.5" />
                            </div>
                          </div>
                          <div class="text-muted hidden md:grid md:grid-cols-[auto_minmax(48px,1fr)_auto_minmax(48px,1fr)_auto_minmax(48px,1fr)_auto] md:gap-x-4 md:text-[11px] md:font-medium">
                            <span>Quote</span>
                            <span>Pack</span>
                            <span>Ship</span>
                            <span>Done</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section class="bg-default rounded-2xl px-5 py-6 shadow-none md:px-6">
                      <div class="grid gap-10">
                        <div class="grid gap-6">
                          <div class="space-y-1">
                            <h2 class="text-2xl font-semibold tracking-tight text-highlighted">Order details</h2>
                            <p class="text-muted text-sm">Core assignment, source, and settlement details for this order.</p>
                          </div>
                          <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Source</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <UIcon name="i-lucide-store" class="h-4 w-4" />
                                <span>Marketplace</span>
                              </div>
                            </div>
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Order date</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>Mar 28, 2026</span>
                              </div>
                            </div>
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Due date</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>Apr 10, 2026</span>
                              </div>
                            </div>
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Assign to</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">AV</span>
                                </span>
                                <span>Avery Hall</span>
                              </div>
                            </div>
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Payment term</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>Due on receipt</span>
                              </div>
                            </div>
                            <div class="grid gap-1.5">
                              <span class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Location</span>
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>Brooklyn, NY</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="grid gap-6">
                          <div class="space-y-1">
                            <h2 class="text-2xl font-semibold tracking-tight text-highlighted">Product ordered</h2>
                            <p class="text-muted text-sm">Line-item summary and totals for the current sales order.</p>
                          </div>
                          <div class="border-(--ui-border)/70 grid gap-4 border-b border-dashed pb-5 lg:grid-cols-[minmax(0,1.8fr)_80px_90px_80px_110px] lg:items-start border-default">
                            <div class="flex items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 overflow-hidden rounded-xl border border-default">
                                <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                              </div>
                              <div>
                                <p class="font-medium">Radiance Ritual Set / Ocean Blue / S</p>
                                <p class="text-muted text-sm">SKU SKU-SKIN-4006</p>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Qty</p>
                              <p class="mt-1 font-medium">1 pcs</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Rate</p>
                              <p class="mt-1 font-medium">$210</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Tax</p>
                              <p class="mt-1 font-medium">10%</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Subtotal</p>
                              <p class="mt-1 font-medium">$210</p>
                            </div>
                          </div>
                          <div class="ml-auto grid w-full max-w-sm gap-4">
                            <div class="flex items-center justify-between text-sm">
                              <span class="text-muted">Subtotal</span>
                              <span class="font-medium">$189</span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                              <span class="text-muted">Tax</span>
                              <span class="font-medium">$21</span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                              <span class="text-muted">Discount</span>
                              <span class="font-medium">-</span>
                            </div>
                            <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            <div class="flex items-center justify-between text-2xl font-semibold">
                              <span>Total</span>
                              <span>$210</span>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="grid gap-8">
                          <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 rounded-2xl border p-5 border-default">
                            <div class="max-w-3xl space-y-2">
                              <h2 class="text-2xl font-semibold tracking-tight text-highlighted">Order term</h2>
                              <p class="text-muted text-sm leading-7">Orders for the sales pipeline require final confirmation before carrier handoff. Packaging, tax review, and invoice issuance are coordinated between merchandising and operations before closeout.</p>
                            </div>
                          </div>
                          <div class="grid gap-4">
                            <div class="space-y-1">
                              <h2 class="text-2xl font-semibold tracking-tight text-highlighted">Notes</h2>
                              <p class="text-muted text-sm">Internal coordination and customer context.</p>
                            </div>
                            <UTextarea v-model="form.orderNotes" :rows="4" placeholder="Order notes" name="orderNotes" class="flex w-full text-base md:text-sm min-h-24 resize-none rounded-xl" :ui="{ base: 'h-full' }" />
                            <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/10 rounded-2xl border border-default">
                              <div class="px-5 py-4 border-(--ui-border)/60 border-b border-default">
                                <div class="flex items-start gap-3">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                    <img class="aspect-square h-full w-full" src="/reference/5f647f69e3d942dc.png" loading="lazy" />
                                  </span>
                                  <div class="min-w-0 flex-1">
                                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                                      <p class="font-medium">Emily John Stones</p>
                                      <p class="text-muted text-sm">17hrs ago</p>
                                    </div>
                                    <p class="text-muted mt-2 text-sm leading-7">Customer asked to keep the invoice attached but delay outreach until packaging clears quality review.</p>
                                  </div>
                                </div>
                              </div>
                              <div class="px-5 py-4">
                                <div class="flex items-start gap-3">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                    <img class="aspect-square h-full w-full" src="/reference/6a0d8fc9a31279a5.png" loading="lazy" />
                                  </span>
                                  <div class="min-w-0 flex-1">
                                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                                      <p class="font-medium">Johnson Corn</p>
                                      <p class="text-muted text-sm">2 days ago</p>
                                    </div>
                                    <p class="text-muted mt-2 text-sm leading-7">Confirmed that the marketplace address matches the shipping location and the export label is ready.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <aside class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 flex min-w-0 flex-col gap-6 rounded-[28px] border p-5 shadow-none xl:sticky xl:top-4 xl:self-start xl:p-6 border-default">
                    <div class="text-default border-(--ui-border)/60 bg-(--ui-bg)/85 rounded-2xl border shadow-none backdrop-blur-sm border-default">
                      <div class="flex flex-col space-y-1.5 p-6 pb-4">
                        <div class="font-semibold text-xl tracking-tight">Invoices</div>
                      </div>
                      <div class="p-6 pt-0">
                        <div class="grid gap-5">
                          <div class="flex items-start justify-between gap-3">
                            <div class="space-y-1">
                              <p class="text-muted text-[11px] font-medium tracking-[0.12em] uppercase">Invoice</p>
                              <span class="text-xl font-semibold tracking-tight">#INV-00654</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline text-muted h-auto p-0 text-sm font-medium" aria-label="View invoice" type="button" @click="openAction(&quot;View invoice&quot;)">
                              View invoice
                            </UButton>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full border-dashed" />
                          <div class="grid gap-4 text-sm">
                            <div class="flex items-center justify-between">
                              <span class="text-muted">Received</span>
                              <span class="text-base font-semibold">$0</span>
                            </div>
                            <div class="flex items-center justify-between">
                              <span class="text-muted">Total payment</span>
                              <span class="text-base font-semibold">$210</span>
                            </div>
                          </div>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default px-4 py-2 bg-(--ui-bg)/80 h-11 w-full rounded-lg shadow-none" aria-label="Record payment" type="button" @click="openAction(&quot;Record payment&quot;)">
                            Record payment
                          </UButton>
                        </div>
                      </div>
                    </div>
                    <div class="text-default border-(--ui-border)/60 bg-(--ui-bg)/85 rounded-2xl border shadow-none backdrop-blur-sm border-default">
                      <div class="flex flex-col space-y-1.5 p-6 pb-4">
                        <div class="font-semibold text-xl tracking-tight">Customer</div>
                      </div>
                      <div class="p-6 pt-0">
                        <div class="grid gap-5">
                          <div class="grid gap-5">
                            <div class="flex items-center gap-3">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-14 w-14">
                                <img class="aspect-square h-full w-full" src="/reference/4502b813c24d39d6.png" loading="lazy" />
                              </span>
                              <div>
                                <p class="font-medium">Brooklyn Simmons</p>
                                <p class="text-muted text-sm">Marketplace</p>
                              </div>
                            </div>
                            <div class="grid gap-3 text-sm">
                              <div class="flex items-start gap-2">
                                <UIcon name="i-lucide-phone" class="text-muted mt-0.5 h-4 w-4" />
                                <span>+1 (718) 555-0136</span>
                              </div>
                              <div class="flex items-start gap-2">
                                <UIcon name="i-lucide-mail" class="text-muted mt-0.5 h-4 w-4" />
                                <span>brooklyn.simmons@acme-demo.co</span>
                              </div>
                              <div class="flex items-start gap-2">
                                <UIcon name="i-lucide-globe" class="text-muted mt-0.5 h-4 w-4" />
                                <span>acme-demo.co</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-default border-(--ui-border)/60 bg-(--ui-bg)/85 rounded-2xl border shadow-none backdrop-blur-sm border-default">
                      <div class="flex flex-col space-y-1.5 p-6 pb-4">
                        <div class="font-semibold text-xl tracking-tight">Address</div>
                      </div>
                      <div class="p-6 pt-0">
                        <div>
                          <div class="py-4 first:pt-0 last:pb-0 border-(--ui-border)/60 border-b border-default">
                            <p class="text-sm font-medium">Billing address</p>
                            <div class="text-muted mt-2 grid gap-1 text-sm leading-6">
                              <span>Brooklyn Simmons</span>
                              <span>2149 W Fulton St, Apt 4B</span>
                              <span>Brooklyn, NY</span>
                              <span>United States</span>
                            </div>
                          </div>
                          <div class="py-4 first:pt-0 last:pb-0">
                            <p class="text-sm font-medium">Shipping address</p>
                            <div class="text-muted mt-2 grid gap-1 text-sm leading-6">
                              <span>Brooklyn Simmons</span>
                              <span>4539 Conowingo Rd</span>
                              <span>Brooklyn, NY</span>
                              <span>United States</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </section>
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
</style>
