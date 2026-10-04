<!-- Page: /ecommerce/add-order | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Add New Order · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchAvailableProductsOrSKU": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/add-order">
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
                <span class="text-muted">Add Order</span>
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
            <div class="flex h-full min-h-0 flex-1 overflow-hidden">
              <div class="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
                <section class="border-(--ui-border)/70 shrink-0 border-b px-4 py-4 md:px-6 border-default">
                  <div class="mx-auto w-full max-w-[1240px]">
                    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div class="flex items-start gap-3">
                        <NuxtLink aria-label="Back to orders" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-xl" to="/ecommerce/order-list-3">
                          <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
                        </NuxtLink>
                        <div class="space-y-1.5">
                          <div class="flex flex-wrap items-center gap-2">
                            <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Add New Order</h1>
                            <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 border-default">Draft</div>
                          </div>
                          <p class="text-muted max-w-3xl text-sm leading-6">Build a replenishment request for low-stock SKUs, then hand off one clear purchase brief to procurement.</p>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Reset order" type="button" @click="openAction(&quot;Reset order&quot;)">
                          Reset order
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                          Save draft
                        </UButton>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="bg-(--ui-bg-muted)/15 shrink-0 border-b px-4 py-3 md:px-6 border-default">
                  <div class="mx-auto w-full max-w-[1240px]">
                    <div class="flex gap-2 overflow-x-auto pb-1 md:hidden">
                      <UButton color="neutral" variant="outline" class="flex min-w-[140px] shrink-0 items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors border-(--ui-text-highlighted)/20 bg-default shadow-sm border-default" aria-label="1Select product" type="button" @click="openAction(&quot;1Select product&quot;)">
                        <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold border-(--ui-text-highlighted)/20 bg-(--ui-text-highlighted) text-(--ui-bg) border-default">1</div>
                        <div class="min-w-0">
                          <p class="truncate text-sm font-semibold tracking-tight text-highlighted">Select product</p>
                        </div>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="flex min-w-[140px] shrink-0 items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors border-(--ui-border)/50 bg-(--ui-bg)/70 border-default" aria-label="2Order details" type="button" @click="openAction(&quot;2Order details&quot;)">
                        <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold border-(--ui-border)/70 text-muted border-default">2</div>
                        <div class="min-w-0">
                          <p class="truncate text-sm font-semibold tracking-tight text-highlighted">Order details</p>
                        </div>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="flex min-w-[140px] shrink-0 items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors border-(--ui-border)/50 bg-(--ui-bg)/70 border-default" aria-label="3Review" type="button" @click="openAction(&quot;3Review&quot;)">
                        <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold border-(--ui-border)/70 text-muted border-default">3</div>
                        <div class="min-w-0">
                          <p class="truncate text-sm font-semibold tracking-tight text-highlighted">Review</p>
                        </div>
                      </UButton>
                    </div>
                    <div class="hidden gap-3 md:grid lg:grid-cols-3">
                      <UButton color="neutral" variant="outline" class="rounded-xl border px-4 py-3 text-left transition-colors border-(--ui-text-highlighted)/20 bg-default shadow-sm border-default" aria-label="1Select productLow-stock inventory to replenish" type="button" @click="openAction(&quot;1Select productLow-stock inventory to replenish&quot;)">
                        <div class="flex items-start gap-3">
                          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold border-(--ui-text-highlighted)/20 bg-(--ui-text-highlighted) text-(--ui-bg) border-default">1</div>
                          <div class="min-w-0">
                            <p class="text-sm font-semibold tracking-tight text-highlighted">Select product</p>
                            <p class="text-muted mt-0.5 text-xs leading-5">Low-stock inventory to replenish</p>
                          </div>
                        </div>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="rounded-xl border px-4 py-3 text-left transition-colors border-(--ui-border)/50 bg-(--ui-bg)/60 hover:border-(--ui-border)/80 hover:bg-default border-default" aria-label="2Order detailsRouting, source, and receiving" type="button" @click="openAction(&quot;2Order detailsRouting, source, and receiving&quot;)">
                        <div class="flex items-start gap-3">
                          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold border-(--ui-border)/70 text-muted border-default">2</div>
                          <div class="min-w-0">
                            <p class="text-sm font-semibold tracking-tight text-highlighted">Order details</p>
                            <p class="text-muted mt-0.5 text-xs leading-5">Routing, source, and receiving</p>
                          </div>
                        </div>
                      </UButton>
                      <UButton color="neutral" variant="outline" class="rounded-xl border px-4 py-3 text-left transition-colors border-(--ui-border)/50 bg-(--ui-bg)/60 hover:border-(--ui-border)/80 hover:bg-default border-default" aria-label="3ReviewCost, lead time, and submit" type="button" @click="openAction(&quot;3ReviewCost, lead time, and submit&quot;)">
                        <div class="flex items-start gap-3">
                          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold border-(--ui-border)/70 text-muted border-default">3</div>
                          <div class="min-w-0">
                            <p class="text-sm font-semibold tracking-tight text-highlighted">Review</p>
                            <p class="text-muted mt-0.5 text-xs leading-5">Cost, lead time, and submit</p>
                          </div>
                        </div>
                      </UButton>
                    </div>
                  </div>
                </section>
                <div class="flex min-h-0 flex-1 flex-col">
                  <main class="flex min-h-0 flex-1 flex-col overflow-auto">
                    <div class="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-4 pb-6 md:min-h-0 md:px-6 md:py-6 md:pb-24">
                      <!-- Card 1: 1 selected -->
                      <UCard class="border-(--ui-border)/60 flex flex-col rounded-2xl shadow-none md:min-h-0 md:flex-1 md:overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="p-4 sm:p-5 md:p-6 flex flex-col gap-4 md:grid md:min-h-0 md:flex-1 md:grid-rows-[auto_minmax(0,1fr)] md:overflow-hidden">
                          <div class="flex flex-col gap-4 md:min-h-0 md:flex-1 md:overflow-hidden">
                            <div class="shrink-0">
                              <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div class="min-w-0">
                                  <p class="text-sm font-medium">Selected products</p>
                                  <p class="text-muted mt-0.5 text-xs">Keep the current order visible while you browse for more items.</p>
                                </div>
                                <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 border-default">1 selected</div>
                              </div>
                              <div class="mt-3 grid gap-3 md:hidden">
                                <div class="border-(--ui-border)/60 bg-default flex items-center justify-between gap-3 rounded-xl border px-3 py-2 border-default">
                                  <div class="flex min-w-0 items-center gap-3">
                                    <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-default">
                                      <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                    </div>
                                    <div class="min-w-0">
                                      <p class="truncate text-sm font-medium">Timeless Renewal Cream</p>
                                      <p class="text-muted text-xs">Stock 12-&gt; +120 units</p>
                                    </div>
                                  </div>
                                  <span class="shrink-0 text-sm font-semibold">$9,600</span>
                                </div>
                              </div>
                              <div class="mt-2 hidden overflow-x-auto px-1 pt-1.5 pr-2 pb-0 md:block">
                                <div class="flex min-w-max gap-2">
                                  <div class="border-(--ui-border)/50 bg-(--ui-bg)/80 relative flex w-[300px] shrink-0 items-center gap-3 rounded-xl border px-3 py-2 border-default">
                                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default border-(--ui-border)/60 bg-default text-muted hover:bg-default absolute top-0 right-0 z-10 h-6 w-6 translate-x-1/2 -translate-y-1/2 rounded-full border shadow-none border-default" aria-label="Remove Timeless Renewal Cream" type="button" @click="openAction(&quot;Remove Timeless Renewal Cream&quot;)">
                                      <UIcon name="i-lucide-x" class="h-3 w-3" />
                                    </UButton>
                                    <div class="bg-(--ui-bg-muted)/30 relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                                      <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                    </div>
                                    <div class="min-w-0 flex-1">
                                      <p class="truncate text-sm font-medium">Timeless Renewal Cream</p>
                                      <p class="text-muted mt-1 text-xs">120 units selected</p>
                                    </div>
                                    <div class="bg-(--ui-bg-muted)/40 flex shrink-0 items-center gap-1 rounded-lg px-1 py-1">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-7 w-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                        <UIcon name="i-lucide-minus" class="h-3.5 w-3.5" />
                                      </UButton>
                                      <span class="w-8 text-center text-xs font-medium">120</span>
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-7 w-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                        <UIcon name="i-lucide-plus" class="h-3.5 w-3.5" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-4 border-(--ui-border)/60 border-t pt-4 md:min-h-0 md:flex-1 border-default">
                              <div class="shrink-0">
                                <div class="flex flex-col gap-3 md:grid md:grid-cols-[minmax(0,1fr)_340px] md:items-center lg:grid-cols-[minmax(0,1fr)_360px]">
                                  <div class="min-w-0 space-y-1">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <p class="text-sm font-medium">Available products</p>
                                      <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 sm:shrink-0 border-default">11 available</div>
                                    </div>
                                    <p class="text-muted text-xs leading-5">Search the remaining low-stock products and add more lines.</p>
                                  </div>
                                  <div class="relative w-full">
                                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
                                    <UInput v-model="form.searchAvailableProductsOrSKU" type="text" placeholder="Search available products or SKU..." name="searchAvailableProductsOrSKU" class="flex w-full text-base md:text-sm bg-default h-11 rounded-xl pl-11" :ui="{ base: 'h-full' }" />
                                  </div>
                                </div>
                              </div>
                              <div class="grid gap-3 md:hidden">
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Overnight Recovery Mask</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Mask</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-MASK-5501 · 21 in stock · wholesale$72.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">PureEssence Soap Trio</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Soap</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-SOAP-5214 · 28 in stock · wholesale$36.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Micro Peel Serum</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Serum</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-SERUM-4412 · 29 in stock · wholesale$54.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Velvet Cleanse Balm</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Cleanser</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-CLEAN-1148 · 38 in stock · wholesale$36.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Botanical Body Polish</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Body Care</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-BODY-6118 · 47 in stock · wholesale$31.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Dew Reset Essence</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Essence</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-ESSN-2084 · 55 in stock · wholesale$44.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Cloud Silk Toner</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Toner</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-TONER-7723 · 64 in stock · wholesale$28.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Radiant Lock Mist</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Serum</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-SERUM-7811 · 67 in stock · wholesale$39.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Barrier Repair Drops</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Treatment</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-TREAT-6612 · 96 in stock · wholesale$52.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Radiance Ritual Set</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Set</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-SKIN-4006 · 210 in stock · wholesale$100.00-$170.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                  <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                        <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                      </div>
                                      <div class="min-w-0">
                                        <div class="flex flex-wrap items-center gap-2">
                                          <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">HydraBloom Night Cream</p>
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Cream</div>
                                        </div>
                                        <p class="text-muted mt-0.5 text-sm">SKU-BALM-8928 · 341 in stock · wholesale$100.00</p>
                                        <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                          <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                        Add
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-slot="scroll-area" class="relative overflow-hidden hidden min-h-0 flex-1 pr-2 md:block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow-x:hidden;overflow-y:hidden">
                                  <div style="min-width:100%;display:table">
                                    <div class="grid gap-3">
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Overnight Recovery Mask</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Mask</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-MASK-5501 · 21 in stock · wholesale$72.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">PureEssence Soap Trio</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Soap</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-SOAP-5214 · 28 in stock · wholesale$36.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Micro Peel Serum</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Serum</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-SERUM-4412 · 29 in stock · wholesale$54.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 80 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Velvet Cleanse Balm</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Cleanser</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-CLEAN-1148 · 38 in stock · wholesale$36.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-error/12 text-error hover:bg-error/12 border-default">Low stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Botanical Body Polish</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Body Care</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-BODY-6118 · 47 in stock · wholesale$31.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Dew Reset Essence</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Essence</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-ESSN-2084 · 55 in stock · wholesale$44.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 48 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Cloud Silk Toner</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Toner</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-TONER-7723 · 64 in stock · wholesale$28.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Radiant Lock Mist</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Serum</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-SERUM-7811 · 67 in stock · wholesale$39.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Barrier Repair Drops</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Treatment</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-TREAT-6612 · 96 in stock · wholesale$52.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">Radiance Ritual Set</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Set</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-SKIN-4006 · 210 in stock · wholesale$100.00-$170.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="button" class="rounded-2xl border px-4 py-2.5 text-left transition-colors outline-none focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-2 border-(--ui-border)/60 bg-(--ui-bg)/60 hover:border-default hover:bg-default">
                                        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                                          <div class="flex min-w-0 items-center gap-3">
                                            <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-default">
                                              <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                            </div>
                                            <div class="min-w-0">
                                              <div class="flex flex-wrap items-center gap-2">
                                                <p class="truncate text-[15px] font-semibold tracking-tight text-highlighted">HydraBloom Night Cream</p>
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2 py-0.5 text-[11px] border-default">Cream</div>
                                              </div>
                                              <p class="text-muted mt-0.5 text-sm">SKU-BALM-8928 · 341 in stock · wholesale$100.00</p>
                                              <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                                                <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-[11px] bg-success/12 text-success hover:bg-success/12 border-default">Healthy stock</div>
                                                <span class="text-muted text-xs">Suggested reorder: 24 units</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="flex items-center justify-between gap-3 lg:min-w-[180px] lg:justify-end">
                                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Add" type="button" @click="openAction(&quot;Add&quot;)">
                                              Add
                                            </UButton>
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
                      </UCard>
                    </div>
                    <footer class="bg-default shrink-0 border-t md:sticky md:bottom-0 md:z-20 border-default">
                      <div class="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
                        <div class="hidden flex-wrap items-center gap-2 text-sm sm:flex">
                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 border-default">Step 1 of 3</div>
                          <span class="text-muted">Select product</span>
                        </div>
                        <div class="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:items-center">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full rounded-lg sm:w-auto" aria-label="Back" type="button" disabled @click="navigateTo(&quot;/ecommerce/product-list-1&quot;)">
                            Back
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 py-2 w-full rounded-lg px-5 sm:w-auto" aria-label="Continue" type="button" @click="openAction(&quot;Continue&quot;)">
                            Continue
                            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
                          </UButton>
                        </div>
                      </div>
                    </footer>
                  </main>
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
