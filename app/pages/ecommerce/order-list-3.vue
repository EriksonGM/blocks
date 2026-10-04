<!-- Page: /ecommerce/order-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Order List 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSalesOrders": "",
  "allSources": "All sources",
  "allDates": "All dates",
  "allLocations": "All locations",
  "minimumAmount": "",
  "maximumAmount": "",
  "enabled": false,
  "mostRecent": "Most recent"
})

const allSourcesOptions = [
  "All sources",
  "Marketplace",
  "Online store",
  "Wholesale",
  "Retail partner"
]

const allDatesOptions = [
  "All dates",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days"
]

const allLocationsOptions = [
  "All locations",
  "Brooklyn, NY",
  "Austin, TX",
  "Chicago, IL",
  "Seattle, WA"
]

const mostRecentOptions = [
  "Most recent",
  "Oldest first",
  "Amount: high to low",
  "Amount: low to high",
  "Progress: high to low",
  "Progress: low to high"
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/order-list-3">
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
                <span class="text-muted">Order List 3</span>
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
            <div class="flex h-full min-h-0 min-w-0 flex-1 overflow-hidden">
              <main class="flex min-h-0 flex-1 flex-col overflow-auto xl:overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
                  <section class="border-(--ui-border)/70 border-b border-dashed pb-4 border-default">
                    <div class="flex flex-col gap-4 md:hidden">
                      <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-xl border border-default">
                        <UIcon name="i-lucide-shopping-cart" class="text-muted size-4.5" />
                      </div>
                      <div class="flex flex-col gap-1.5">
                        <h1 class="text-xl font-semibold tracking-tight text-highlighted">Sales Orders</h1>
                        <p class="text-muted max-w-[18rem] text-sm leading-6">A denser sales-order list with sidebar filters and progress-aware rows.</p>
                      </div>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 w-full rounded-lg shadow-none" aria-label="New sales order" type="button" @click="openAction(&quot;New sales order&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        New sales order
                      </UButton>
                    </div>
                    <div class="hidden gap-4 md:flex md:flex-row md:items-start md:justify-between xl:items-center">
                      <div class="flex items-start gap-3">
                        <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-xl border border-default">
                          <UIcon name="i-lucide-shopping-cart" class="text-muted size-4.5" />
                        </div>
                        <div class="flex flex-col gap-1">
                          <h1 class="text-lg font-semibold tracking-tight md:text-xl text-highlighted">Sales Orders</h1>
                          <p class="text-muted text-sm">Sidebar-driven sales pipeline filtering with dense order rows.</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 self-start">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-lg px-4 shadow-none" aria-label="New sales order" type="button" @click="openAction(&quot;New sales order&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          New sales order
                        </UButton>
                      </div>
                    </div>
                  </section>
                  <section class="grid gap-6 xl:min-h-0 xl:flex-1 xl:grid-cols-[284px_minmax(0,1fr)] xl:overflow-hidden">
                    <aside class="xl:border-(--ui-border)/60 flex min-h-0 flex-col gap-5 xl:h-full xl:border-r xl:border-dotted xl:pr-3 border-default">
                      <div class="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-1 pb-4 xl:pr-2">
                        <div class="relative">
                          <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                          <UInput v-model="form.searchSalesOrders" type="search" placeholder="Search sales orders..." name="searchSalesOrders" class="flex w-full text-base md:text-sm h-11 rounded-lg pr-4 pl-11" :ui="{ base: 'h-full' }" />
                        </div>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Order status</h2>
                          <div class="border-(--ui-border)/60 bg-(--ui-bg)/70 overflow-hidden rounded-xl border border-default">
                            <UButton color="primary" variant="solid" class="flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors border-(--ui-border)/60 border-b bg-(--ui-text-highlighted)/[0.045] text-highlighted border-default" aria-label="All7" type="button" @click="openAction(&quot;All7&quot;)">
                              <div class="flex items-center gap-2.5">
                                <span class="h-2 w-2 rounded-full border border-(--ui-text-highlighted)/70 bg-(--ui-text-highlighted)/70 border-default" />
                                <span class="text-[13px] font-medium">All</span>
                              </div>
                              <span class="text-[13px] font-medium text-highlighted">7</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors border-(--ui-border)/60 border-b text-(--ui-text-highlighted)/80 hover:bg-(--ui-bg-muted)/20 hover:text-highlighted border-default" aria-label="Quote2" type="button" @click="openAction(&quot;Quote2&quot;)">
                              <div class="flex items-center gap-2.5">
                                <span class="border-(--ui-border)/80 bg-default h-2 w-2 rounded-full border border-default" />
                                <span class="text-[13px] font-medium">Quote</span>
                              </div>
                              <span class="text-(--ui-text-highlighted)/65 text-[13px] font-medium">2</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors border-(--ui-border)/60 border-b text-(--ui-text-highlighted)/80 hover:bg-(--ui-bg-muted)/20 hover:text-highlighted border-default" aria-label="Started2" type="button" @click="openAction(&quot;Started2&quot;)">
                              <div class="flex items-center gap-2.5">
                                <span class="border-(--ui-border)/80 bg-default h-2 w-2 rounded-full border border-default" />
                                <span class="text-[13px] font-medium">Started</span>
                              </div>
                              <span class="text-(--ui-text-highlighted)/65 text-[13px] font-medium">2</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors border-(--ui-border)/60 border-b text-(--ui-text-highlighted)/80 hover:bg-(--ui-bg-muted)/20 hover:text-highlighted border-default" aria-label="Shipment2" type="button" @click="openAction(&quot;Shipment2&quot;)">
                              <div class="flex items-center gap-2.5">
                                <span class="border-(--ui-border)/80 bg-default h-2 w-2 rounded-full border border-default" />
                                <span class="text-[13px] font-medium">Shipment</span>
                              </div>
                              <span class="text-(--ui-text-highlighted)/65 text-[13px] font-medium">2</span>
                            </UButton>
                            <UButton color="neutral" variant="soft" class="flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors text-(--ui-text-highlighted)/80 hover:bg-(--ui-bg-muted)/20 hover:text-highlighted" aria-label="Fulfilled1" type="button" @click="openAction(&quot;Fulfilled1&quot;)">
                              <div class="flex items-center gap-2.5">
                                <span class="border-(--ui-border)/80 bg-default h-2 w-2 rounded-full border border-default" />
                                <span class="text-[13px] font-medium">Fulfilled</span>
                              </div>
                              <span class="text-(--ui-text-highlighted)/65 text-[13px] font-medium">1</span>
                            </UButton>
                          </div>
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Order source</h2>
                          <USelect v-model="form.allSources" :items="allSourcesOptions" aria-label="All sources" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/50 h-10 rounded-md bg-transparent px-3.5 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Order date</h2>
                          <USelect v-model="form.allDates" :items="allDatesOptions" aria-label="All dates" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/50 h-10 rounded-md bg-transparent px-3.5 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Location</h2>
                          <USelect v-model="form.allLocations" :items="allLocationsOptions" aria-label="All locations" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/50 h-10 rounded-md bg-transparent px-3.5 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Amount</h2>
                          <div class="flex flex-col gap-2">
                            <div class="relative">
                              <UIcon name="i-lucide-dollar-sign" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                              <UInput v-model="form.minimumAmount" type="text" placeholder="Minimum amount" name="minimumAmount" class="flex w-full text-base md:text-sm h-10 rounded-md pr-3.5 pl-10" :ui="{ base: 'h-full' }" />
                            </div>
                            <div class="relative">
                              <UIcon name="i-lucide-dollar-sign" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                              <UInput v-model="form.maximumAmount" type="text" placeholder="Maximum amount" name="maximumAmount" class="flex w-full text-base md:text-sm h-10 rounded-md pr-3.5 pl-10" :ui="{ base: 'h-full' }" />
                            </div>
                          </div>
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[13px] font-medium tracking-normal text-highlighted">Invoice</h2>
                          <div class="border-(--ui-border)/50 flex items-center justify-between rounded-md border px-3.5 py-3 border-default">
                            <div class="flex flex-col gap-1">
                              <span class="text-sm font-medium">Invoice attached</span>
                              <span class="text-muted text-xs">Only show orders with invoices</span>
                            </div>
                            <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                          </div>
                        </section>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 text-muted hover:text-highlighted hover:bg-(--ui-bg-muted)/40 h-10 w-full justify-start gap-2 rounded-md px-3 shadow-none" aria-label="Reset filters" type="button" @click="openAction(&quot;Reset filters&quot;)">
                          <UIcon name="i-lucide-rotate-ccw" class="size-4" />
                          <span class="text-sm font-medium">Reset filters</span>
                        </UButton>
                      </div>
                    </aside>
                    <div class="flex min-h-0 min-w-0 flex-col gap-4 xl:pl-2">
                      <div class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted py-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-6 border-default">
                        <div class="flex max-w-2xl flex-col gap-1.5">
                          <div class="flex flex-wrap items-center gap-2">
                            <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2.5 py-1 border-default">7 orders</div>
                            <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-2.5 py-1 border-default">$3,366 total</div>
                          </div>
                          <p class="text-muted text-sm">Sales-order rows tuned to match the tighter `product-list-4` composition and interaction density.</p>
                        </div>
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
                          <USelect v-model="form.mostRecent" :items="mostRecentOptions" aria-label="Most recent" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/60 text-highlighted h-10 w-full min-w-0 rounded-xl bg-transparent px-4 shadow-none sm:min-w-[220px] border-default" />
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated border-(--ui-border)/60 text-muted hover:text-highlighted h-10 w-full rounded-xl p-0 shadow-none sm:size-10 sm:w-10 sm:shrink-0 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                      </div>
                      <div class="min-h-0 flex-1 overflow-y-auto xl:pr-3">
                        <div class="flex flex-col gap-4">
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-654</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-error/12 text-error hover:bg-error/12 border-default">Unpaid</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-654" type="button" @click="openAction(&quot;Open actions for SO-654&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-654">
                                    Radiance Ritual Set / Ocean Blue / S x1
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Brooklyn, NY</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Brooklyn Simmons</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Marketplace</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Avery Hall</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$210</p>
                                      <p class="text-muted mt-1 text-sm">Mar 28, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-654" type="button" @click="openAction(&quot;Open actions for SO-654&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">New quote</p>
                                    <p class="text-muted text-sm">New quote waiting for approval</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:18%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-654">
                                      Review quote
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-653</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-success/12 text-success hover:bg-success/12 border-default">Paid</div>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-xs border-default">Invoice</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-653" type="button" @click="openAction(&quot;Open actions for SO-653&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-653">
                                    Timeless Renewal Cream / Army / L x2
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Austin, TX</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Cameron Ford</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Online store</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Riley Chen</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$680</p>
                                      <p class="text-muted mt-1 text-sm">Mar 27, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-653" type="button" @click="openAction(&quot;Open actions for SO-653&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">Order is on shipping</p>
                                    <p class="text-muted text-sm">Packed and waiting for carrier pickup</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:22%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-653">
                                      Track shipment
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-652</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-warning/12 text-warning hover:bg-warning/12 border-default">Partial</div>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-xs border-default">Invoice</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-652" type="button" @click="openAction(&quot;Open actions for SO-652&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-652">
                                    Cloud Silk Toner / Army / XL x1
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Chicago, IL</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Savannah Nguyen</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Jordan Lee</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$480</p>
                                      <p class="text-muted mt-1 text-sm">Mar 24, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-652" type="button" @click="openAction(&quot;Open actions for SO-652&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">Product in packaging</p>
                                    <p class="text-muted text-sm">Items are in packaging with QA review</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:21%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-652">
                                      View packing
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-651</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-success/12 text-success hover:bg-success/12 border-default">Paid</div>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-xs border-default">Invoice</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-651" type="button" @click="openAction(&quot;Open actions for SO-651&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-651">
                                    Barrier Repair Drops / Core / M x1
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Seattle, WA</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Aliyah Carter</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail partner</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Mina Patel</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$320</p>
                                      <p class="text-muted mt-1 text-sm">Mar 21, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-651" type="button" @click="openAction(&quot;Open actions for SO-651&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">Order delivered</p>
                                    <p class="text-muted text-sm">Delivered and marked complete</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-651">
                                      Open proof
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-650</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-success/12 text-success hover:bg-success/12 border-default">Paid</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-650" type="button" @click="openAction(&quot;Open actions for SO-650&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-650">
                                    Micro Peel Serum / Night / Standard x3
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Austin, TX</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Noah Bennett</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Marketplace</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Avery Hall</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$540</p>
                                      <p class="text-muted mt-1 text-sm">Mar 19, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-650" type="button" @click="openAction(&quot;Open actions for SO-650&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">Product in packaging</p>
                                    <p class="text-muted text-sm">Order accepted and picking has started</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:18%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-650">
                                      View packing
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-649</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-warning/12 text-warning hover:bg-warning/12 border-default">Partial</div>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-xs border-default">Invoice</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-649" type="button" @click="openAction(&quot;Open actions for SO-649&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-649">
                                    HydraBloom Night Cream / Export / Bulk x4
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Chicago, IL</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Maya Collins</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Riley Chen</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$1,040</p>
                                      <p class="text-muted mt-1 text-sm">Mar 15, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-649" type="button" @click="openAction(&quot;Open actions for SO-649&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">Order is on shipping</p>
                                    <p class="text-muted text-sm">Carrier booked, documents are attached</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:100%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:31%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-649">
                                      Track shipment
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/10 rounded-xl border p-3.5 transition-colors sm:p-4 border-default">
                            <div class="grid gap-4">
                              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-start justify-between gap-3">
                                    <div class="flex flex-wrap items-center gap-2">
                                      <span class="text-sm font-semibold tracking-[0.02em]">SO-648</span>
                                      <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md px-2 py-0.5 text-xs bg-error/12 text-error hover:bg-error/12 border-default">Unpaid</div>
                                    </div>
                                    <div class="shrink-0 md:hidden">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-648" type="button" @click="openAction(&quot;Open actions for SO-648&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                  <NuxtLink class="mt-2 block min-w-0 text-[1.15rem] font-semibold tracking-tight hover:underline" to="/ecommerce/order-detail-2?code=so-648">
                                    Dew Reset Essence / Starter / XS x1
                                  </NuxtLink>
                                  <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span>Brooklyn, NY</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Priya Menon</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Online store</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Jordan Lee</span>
                                  </div>
                                </div>
                                <div class="flex items-end justify-between gap-3 md:shrink-0 md:items-start md:justify-end">
                                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 hidden h-11 w-11 overflow-hidden rounded-full border md:block border-default">
                                    <div class="relative h-full w-full">
                                      <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                    </div>
                                  </div>
                                  <div class="flex flex-col items-start gap-2 md:items-end">
                                    <div class="text-left md:text-right">
                                      <p class="text-xl leading-none font-semibold text-highlighted">$96</p>
                                      <p class="text-muted mt-1 text-sm">Mar 12, 2026</p>
                                    </div>
                                    <div class="hidden md:block">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for SO-648" type="button" @click="openAction(&quot;Open actions for SO-648&quot;)">
                                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-(--ui-bg-muted)/20 border-(--ui-border)/60 rounded-xl border px-4 py-3 border-default">
                                <div class="flex flex-col gap-3">
                                  <div class="min-w-0">
                                    <p class="text-sm font-semibold text-highlighted">New quote</p>
                                    <p class="text-muted text-sm">Waiting on customer confirmation</p>
                                  </div>
                                  <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                                    <div class="grid gap-2.5 sm:gap-3">
                                      <div class="grid grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-text-highlighted) text-highlighted border-default">
                                            <UIcon name="i-lucide-file-text" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-(--ui-text-highlighted)" style="width:18%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-package" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-truck" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                          <div class="bg-(--ui-border)/70 h-1 flex-1 overflow-hidden rounded-full">
                                            <div class="h-full rounded-full transition-[width] bg-transparent" style="width:0%" />
                                          </div>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                          <div class="bg-default flex h-5 w-5 shrink-0 items-center justify-center rounded-md border sm:h-6 sm:w-6 border-(--ui-border)/70 text-muted border-default">
                                            <UIcon name="i-lucide-circle-check" class="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="text-muted hidden grid-cols-4 gap-3 text-[10px] font-medium sm:grid">
                                        <span class="text-center">Quote</span>
                                        <span class="text-center">Pack</span>
                                        <span class="text-center">Ship</span>
                                        <span class="text-center">Done</span>
                                      </div>
                                    </div>
                                    <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-full justify-center rounded-md px-3 text-sm md:h-8 md:w-auto md:justify-self-end md:px-2.5" to="/ecommerce/order-detail-2?code=so-648">
                                      Review quote
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
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
