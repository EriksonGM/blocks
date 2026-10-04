<!-- Page: /ecommerce/order-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Order List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchOrders": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/order-list-2">
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
                <span class="text-muted">Order List 2</span>
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
              <div class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
                <div class="shrink-0 border-b px-6 py-4 border-default">
                  <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Order List</h1>
                    <div class="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                      <div class="relative w-full min-w-0 sm:w-72">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <UInput v-model="form.searchOrders" type="search" placeholder="Search orders..." name="searchOrders" class="flex w-full rounded-md md:text-sm h-10 pl-9 text-sm" :ui="{ base: 'h-full' }" />
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md text-xs h-10 px-3" aria-label="Display" type="button" @click="openAction(&quot;Display&quot;)">
                        <UIcon name="i-lucide-sliders-horizontal" class="mr-2 h-4 w-4" />
                        Display
                        <UIcon name="i-lucide-chevron-down" class="ml-2 h-4 w-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="flex h-12 min-w-0 shrink-0 items-center justify-between border-b px-6 border-default">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs relative h-9 px-2.5" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                    <UIcon name="i-lucide-list-filter" class="mr-1 h-4 w-4" />
                    Filter
                  </UButton>
                  <div class="text-muted text-sm">10 orders</div>
                </div>
                <div class="min-h-0 min-w-0 flex-1 overflow-hidden">
                  <div class="h-full w-full overflow-x-auto overflow-y-hidden overscroll-x-contain">
                    <div class="flex h-full min-w-max gap-3 px-2 py-2">
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="1.4 1.74" />
                                <circle cx="7" cy="7" r="2" fill="none" stroke="var(--ui-text-muted)" stroke-width="4" stroke-dasharray="0 100" transform="rotate(-90 7 7)" />
                              </svg>
                              <span class="text-sm font-medium">Arrived</span>
                              <span class="text-muted text-sm">2</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Arrived" type="button" @click="openAction(&quot;Add order to Arrived&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$414</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#235325</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$188</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Barrier Repair Drops</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Online store</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Maya Collins</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Apr 02</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">MC</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#646344</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$226</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Overnight Recovery Mask, Timeless Renewal Cream</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Retail partner</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Lena Hart</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 22</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">LH</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="3.14 0" />
                                <circle cx="7" cy="7" r="2" fill="none" stroke="var(--ui-text-muted)" stroke-width="4" stroke-dasharray="2.0839231268812295 100" transform="rotate(-90 7 7)" />
                              </svg>
                              <span class="text-sm font-medium">Ready for pickup</span>
                              <span class="text-muted text-sm">2</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Ready for pickup" type="button" @click="openAction(&quot;Add order to Ready for pickup&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$580</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#823904</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$452</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Radiance Ritual Set, Cloud Silk Toner</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Wholesale</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Jordan Reyes</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Apr 01</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">JR</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#624363</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$128</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Micro Peel Serum</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Subscription</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Tobias Green</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 23</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">TG</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="3.14 0" />
                                <circle cx="7" cy="7" r="2" fill="none" stroke="var(--ui-text-muted)" stroke-width="4" stroke-dasharray="4.167846253762459 100" transform="rotate(-90 7 7)" />
                              </svg>
                              <span class="text-sm font-medium">Order sent</span>
                              <span class="text-muted text-sm">1</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Order sent" type="button" @click="openAction(&quot;Add order to Order sent&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$268</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#32543</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$268</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">PureEssence Soap Trio, Timeless Renewal Cream, Cloud Silk Toner</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Marketplace</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Nina Park</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 31</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">NP</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="3.14 0" />
                                <path d="M4.5 7L6.5 9L9.5 5" stroke="var(--ui-text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <span class="text-sm font-medium">Packaging</span>
                              <span class="text-muted text-sm">1</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Packaging" type="button" @click="openAction(&quot;Add order to Packaging&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$612</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#37646</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$612</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Timeless Renewal Cream, HydraBloom Night Cream, Botanical Body Polish</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Retail partner</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Priya Menon</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 29</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">PM</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="3.14 0" />
                                <circle cx="7" cy="7" r="2" fill="none" stroke="var(--ui-text-muted)" stroke-width="4" stroke-dasharray="6.2517693806436885 100" transform="rotate(-90 7 7)" />
                              </svg>
                              <span class="text-sm font-medium">Fulfilled</span>
                              <span class="text-muted text-sm">2</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Fulfilled" type="button" @click="openAction(&quot;Add order to Fulfilled&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$563</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#190931</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$389</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Radiance Ritual Set</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Online store</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Elaine Wu</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 27</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">EW</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#465383</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$174</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">HydraBloom Night Cream, Barrier Repair Drops</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Subscription</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Caleb Moore</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 26</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">CM</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
                      <section class="bg-container flex h-full min-h-0 w-[348px] shrink-0 flex-col overflow-hidden rounded-md">
                        <div class="bg-(--ui-bg-muted)/40 sticky top-0 z-10 h-[50px] rounded-t-md">
                          <div class="flex h-full items-center justify-between px-3">
                            <div class="flex items-center gap-2">
                              <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="6" fill="none" stroke="var(--ui-text-muted)" stroke-width="2" stroke-dasharray="1.4 1.74" />
                                <circle cx="7" cy="7" r="2" fill="none" stroke="var(--ui-text-muted)" stroke-width="4" stroke-dasharray="0 100" transform="rotate(-90 7 7)" />
                              </svg>
                              <span class="text-sm font-medium">Unfulfilled</span>
                              <span class="text-muted text-sm">2</span>
                            </div>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted grid size-6 place-items-center rounded-md text-lg transition-colors" aria-label="Add order to Unfulfilled" type="button" @click="openAction(&quot;Add order to Unfulfilled&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-(--ui-bg)/50 p-2 transition-colors dark:bg-(--ui-bg)/50">
                          <div class="mb-2 flex items-center justify-between px-1">
                            <span class="text-muted text-xs">Lane total</span>
                            <span class="text-xs font-medium">$285</span>
                          </div>
                          <div class="space-y-2">
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#856744</span>
                                    <span class="rounded-full bg-warning/10 px-1.5 py-0.5 text-[10px] font-medium text-warning">Risk</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$59</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">PureEssence Soap Trio</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Online store</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Harper James</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 25</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">HJ</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <NuxtLink class="bg-default border-(--ui-border)/60 hover:bg-(--ui-bg-elevated)/30 block cursor-default rounded-md border p-3 shadow-xs transition-colors border-default" style="opacity:1;cursor:grab" to="/ecommerce/order-detail-1">
                              <div class="mb-2 flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <div class="text-muted text-xs">Order:</div>
                                  <div class="mt-0.5 flex items-center gap-2">
                                    <span class="truncate text-lg leading-none font-semibold tracking-tight">#547432</span>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-muted text-xs">Total</div>
                                  <div class="text-sm font-semibold">$226</div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <div class="text-muted text-xs">Purchased:</div>
                                <div class="mt-0.5 line-clamp-2 text-sm font-medium">Overnight Recovery Mask, Cloud Silk Toner</div>
                              </div>
                              <div class="mb-3 flex flex-wrap gap-1.5">
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Marketplace</span>
                                <span class="bg-muted text-muted rounded-full px-2 py-1 text-[11px]">Sofia Alvarez</span>
                              </div>
                              <div class="mb-3 flex items-center gap-1.5">
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                </div>
                                <div class="bg-muted relative size-18 overflow-hidden rounded-md">
                                  <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                </div>
                              </div>
                              <div class="flex items-center justify-between pt-1">
                                <span class="text-muted text-xs">Mar 24</span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px] font-semibold">SA</span>
                                </span>
                              </div>
                            </NuxtLink>
                            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex items-center gap-1 px-2 py-2 text-sm transition-colors" aria-label="New" type="button" @click="openAction(&quot;New&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              New
                            </UButton>
                          </div>
                        </div>
                      </section>
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
