<!-- Page: /ecommerce/product-detail/micro-peel-serum | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Micro Peel Serum · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "enabled": true,
  "enabled2": true
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "General Information",
    "value": "0"
  },
  {
    "label": "History",
    "value": "1"
  },
  {
    "label": "Reviews",
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-detail/micro-peel-serum">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Products</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Micro Peel Serum</span>
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
                <div class="flex flex-col gap-5 pb-8 md:hidden">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Products</span>
                    <span class="text-muted">/</span>
                    <span class="text-muted">Product detail</span>
                  </div>
                  <div class="flex justify-end">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium">Active</span>
                      <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Micro Peel Serum</h1>
                    <p class="text-muted text-sm">SKU-SERUM-4412 • Skin Care • Stocked product</p>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" to="/ecommerce/edit-product/micro-peel-serum">
                      <UIcon name="i-lucide-square-pen" class="size-4" />
                      Edit
                    </NuxtLink>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Clone" type="button" @click="openAction(&quot;Clone&quot;)">
                      <UIcon name="i-lucide-layers" class="size-4" />
                      Clone
                    </UButton>
                  </div>
                </div>
                <div class="hidden flex-col gap-6 pb-8 md:flex">
                  <div class="flex items-start justify-between gap-8">
                    <div class="flex min-w-0 flex-col gap-3 pt-1">
                      <h1 class="text-4xl font-medium tracking-tight text-highlighted">Micro Peel Serum</h1>
                      <div class="flex flex-wrap items-center gap-2 text-sm">
                        <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 rounded-md px-2.5 py-1 font-medium border-default">Active</div>
                        <span class="text-muted">•</span>
                        <span class="text-muted">SKU-SERUM-4412</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted">Skin Care</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted">Stocked product</span>
                      </div>
                    </div>
                    <div class="flex shrink-0 items-center gap-3">
                      <div class="flex items-center gap-3 rounded-full border px-3 py-2 border-default">
                        <USwitch v-model="form.enabled2" aria-label="Toggle setting" />
                        <span class="text-sm font-medium">Active</span>
                      </div>
                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-8" />
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" to="/ecommerce/edit-product/micro-peel-serum">
                        <UIcon name="i-lucide-pencil" class="size-4" />
                        Edit
                      </NuxtLink>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Clone" type="button" @click="openAction(&quot;Clone&quot;)">
                        <UIcon name="i-lucide-layers" class="size-4" />
                        Clone
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-10 rounded-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
                <div data-orientation="horizontal" class="pb-2">
                  <div class="overflow-x-auto border-b border-default">
                    <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center rounded-lg h-auto justify-start gap-5 bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                  </div>
                  <div class="grid gap-8 pt-6 xl:grid-cols-[minmax(0,1fr)_1px_340px] xl:gap-8">
                    <div class="flex flex-col gap-6">
                      <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-general-information" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-8" style="animation-duration:0s">
                        <section class="flex flex-col gap-4">
                          <div class="bg-(--ui-bg-muted)/30 relative h-[280px] overflow-hidden rounded-2xl border sm:h-[340px] xl:h-[400px] border-default">
                            <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                          </div>
                          <div class="flex flex-wrap gap-3">
                            <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 relative size-22 overflow-hidden rounded-xl border transition-all outline-none focus-visible:outline-none border-(--ui-text-highlighted) ring-(--ui-text-highlighted)/10 ring-2 border-default" aria-label="Thumbnail" type="button" @click="openAction(&quot;Thumbnail&quot;)">
                              <img alt="Micro Peel Serum gallery view" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                              <div class="bg-(--ui-bg)/90 absolute inset-x-1 bottom-1 rounded-sm px-1.5 py-1 text-[10px] font-medium">Thumbnail</div>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 relative size-22 overflow-hidden rounded-xl border transition-all outline-none focus-visible:outline-none border-(--ui-border)/70 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Micro Peel Serum gallery view" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 relative size-22 overflow-hidden rounded-xl border transition-all outline-none focus-visible:outline-none border-(--ui-border)/70 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Micro Peel Serum gallery view" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 relative size-22 overflow-hidden rounded-xl border transition-all outline-none focus-visible:outline-none border-(--ui-border)/70 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Micro Peel Serum gallery view" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                            </UButton>
                          </div>
                        </section>
                        <section class="flex flex-col gap-5">
                          <div class="flex items-center gap-2">
                            <h2 class="text-xl font-semibold tracking-tight text-highlighted">Basic information</h2>
                          </div>
                          <dl class="grid gap-x-8 gap-y-5 md:grid-cols-2">
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">SKU</dt>
                              <dd class="text-sm leading-6 font-medium">SKU-SERUM-4412</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Barcode</dt>
                              <dd class="text-sm leading-6 font-medium">0123456789013</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Category</dt>
                              <dd class="text-sm leading-6 font-medium">Skin Care</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Subcategory</dt>
                              <dd class="text-sm leading-6 font-medium">Serums</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Created by</dt>
                              <dd class="text-sm leading-6 font-medium">
                                <div class="flex items-center gap-2">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-default">
                                    <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">AR</span>
                                  </span>
                                  <span>Acme Retail</span>
                                </div>
                              </dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Description</dt>
                              <dd class="text-sm leading-6 font-medium">A resurfacing serum with gentle peel benefits for smoother texture and brighter tone.</dd>
                            </div>
                          </dl>
                        </section>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <section class="flex flex-col gap-5">
                          <div class="flex items-center gap-2">
                            <h2 class="text-xl font-semibold tracking-tight text-highlighted">Measurement</h2>
                          </div>
                          <dl class="grid gap-x-8 gap-y-5 md:grid-cols-2">
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Width</dt>
                              <dd class="text-sm leading-6 font-medium">18 cm</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Height</dt>
                              <dd class="text-sm leading-6 font-medium">22 cm</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Weight</dt>
                              <dd class="text-sm leading-6 font-medium">480 g</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Unit</dt>
                              <dd class="text-sm leading-6 font-medium">30 ml</dd>
                            </div>
                          </dl>
                        </section>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <section class="flex flex-col gap-5">
                          <div class="flex items-center gap-2">
                            <h2 class="text-xl font-semibold tracking-tight text-highlighted">Purchase information</h2>
                          </div>
                          <dl class="grid gap-x-8 gap-y-5 md:grid-cols-2">
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Vendor</dt>
                              <dd class="text-sm leading-6 font-medium">Acme Retail</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Purchase cost</dt>
                              <dd class="text-sm leading-6 font-medium">$42.00</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Currency</dt>
                              <dd class="text-sm leading-6 font-medium">USD</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Charge tax</dt>
                              <dd class="text-sm leading-6 font-medium">Enabled</dd>
                            </div>
                          </dl>
                        </section>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <section class="flex flex-col gap-5">
                          <div class="flex items-center gap-2">
                            <h2 class="text-xl font-semibold tracking-tight text-highlighted">Sales information</h2>
                          </div>
                          <dl class="grid gap-x-8 gap-y-5 md:grid-cols-2">
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Retail price</dt>
                              <dd class="text-sm leading-6 font-medium">$88.00</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Launch price</dt>
                              <dd class="text-sm leading-6 font-medium">$88.00</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Wholesale price</dt>
                              <dd class="text-sm leading-6 font-medium">$64.00</dd>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <dt class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Margin</dt>
                              <dd class="text-sm leading-6 font-medium">34%</dd>
                            </div>
                          </dl>
                        </section>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <section class="flex flex-col gap-5">
                          <div class="flex items-center gap-2">
                            <h2 class="text-xl font-semibold tracking-tight text-highlighted">Notes</h2>
                          </div>
                          <div class="flex flex-col gap-5">
                            <!-- Card 1: Merchandising note -->
                            <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                              <div class="flex flex-col space-y-1.5 p-6 gap-2">
                                <div class="font-semibold tracking-tight text-base">Merchandising note</div>
                                <div class="text-muted text-sm">Feature this product in barrier-repair bundles and recovery landing pages through the end of April.</div>
                              </div>
                            </UCard>
                            <!-- Card 2: Ops note -->
                            <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                              <div class="flex flex-col space-y-1.5 p-6 gap-2">
                                <div class="font-semibold tracking-tight text-base">Ops note</div>
                                <div class="text-muted text-sm">Austin inventory is healthy, but Miami is trending toward the reorder threshold after a strong marketplace week.</div>
                              </div>
                            </UCard>
                          </div>
                        </section>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-history" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-6" />
                      <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-reviews" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-6" />
                    </div>
                    <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 h-full w-[1px] hidden xl:block xl:h-auto" />
                    <div class="flex flex-col gap-5">
                      <!-- Card 3: Stock -->
                      <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6 gap-2">
                          <div class="leading-none font-semibold tracking-tight">Stock</div>
                          <div class="text-muted text-sm">Current stock availability by warehouse.</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-5">
                          <div class="bg-(--ui-bg-muted)/40 rounded-lg border p-5 text-center border-default">
                            <p class="text-muted text-xs font-semibold tracking-[0.16em] uppercase text-highlighted">Quantity at hand</p>
                            <p class="mt-2 text-4xl font-semibold tracking-tight text-highlighted">38</p>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 mt-4 rounded-lg" aria-label="Adjust stock" type="button" @click="openAction(&quot;Adjust stock&quot;)">
                              <UIcon name="i-lucide-package-2" class="size-4" />
                              Adjust stock
                            </UButton>
                          </div>
                          <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-4">
                              <div class="flex items-center justify-between gap-4 text-sm">
                                <div class="flex items-center gap-2">
                                  <UIcon name="i-lucide-store" class="text-muted size-4" />
                                  <span class="font-medium">Seattle</span>
                                  <span class="text-xs font-semibold uppercase text-muted">SEA</span>
                                </div>
                                <div class="text-right">
                                  <span class="font-semibold">148</span>
                                </div>
                              </div>
                              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            </div>
                            <div class="flex flex-col gap-4">
                              <div class="flex items-center justify-between gap-4 text-sm">
                                <div class="flex items-center gap-2">
                                  <UIcon name="i-lucide-store" class="text-muted size-4" />
                                  <span class="font-medium">Austin</span>
                                  <span class="text-xs font-semibold uppercase text-muted">AUS</span>
                                </div>
                                <div class="text-right">
                                  <span class="font-semibold">76</span>
                                </div>
                              </div>
                              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            </div>
                            <div class="flex flex-col gap-4">
                              <div class="flex items-center justify-between gap-4 text-sm">
                                <div class="flex items-center gap-2">
                                  <UIcon name="i-lucide-store" class="text-muted size-4" />
                                  <span class="font-medium">Chicago</span>
                                  <span class="text-xs font-semibold uppercase text-muted">CHI</span>
                                </div>
                                <div class="text-right">
                                  <span class="font-semibold">54</span>
                                </div>
                              </div>
                              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            </div>
                            <div class="flex flex-col gap-4">
                              <div class="flex items-center justify-between gap-4 text-sm">
                                <div class="flex items-center gap-2">
                                  <UIcon name="i-lucide-store" class="text-muted size-4" />
                                  <span class="font-medium">Miami</span>
                                  <span class="text-xs font-semibold uppercase text-error">MIA</span>
                                </div>
                                <div class="text-right">
                                  <span class="font-semibold">21</span>
                                  <p class="text-xs text-error">low</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 4: Reorder points -->
                      <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6 gap-2">
                          <div class="leading-none font-semibold tracking-tight">Reorder points</div>
                          <div class="text-muted text-sm">Current replenishment rules by warehouse.</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-4">
                          <div class="bg-(--ui-bg-muted)/35 flex flex-col gap-4 rounded-lg border p-4 border-default">
                            <div class="flex items-center gap-2">
                              <UIcon name="i-lucide-truck" class="text-muted size-4" />
                              <p class="font-semibold text-highlighted">
                                Seattle
                                <span class="text-muted font-medium">• SEA</span>
                              </p>
                            </div>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder method</span>
                                <span class="font-medium">Purchase order</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Vendor</span>
                                <span class="font-medium">Acme Retail</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder point</span>
                                <span class="font-medium">40</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder quantity</span>
                                <span class="font-medium">120</span>
                              </div>
                            </div>
                          </div>
                          <div class="bg-(--ui-bg-muted)/35 flex flex-col gap-4 rounded-lg border p-4 border-default">
                            <div class="flex items-center gap-2">
                              <UIcon name="i-lucide-truck" class="text-muted size-4" />
                              <p class="font-semibold text-highlighted">
                                Austin
                                <span class="text-muted font-medium">• AUS</span>
                              </p>
                            </div>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder method</span>
                                <span class="font-medium">Transfer request</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Vendor</span>
                                <span class="font-medium">Central warehouse</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder point</span>
                                <span class="font-medium">24</span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <span class="text-muted text-xs font-semibold tracking-[0.16em] uppercase">Reorder quantity</span>
                                <span class="font-medium">80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 5: Variants -->
                      <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6 gap-2">
                          <div class="leading-none font-semibold tracking-tight">Variants</div>
                          <div class="text-muted text-sm">Selling configurations carried by this product.</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-4">
                          <div class="flex flex-col gap-4">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex items-center gap-3">
                                <div class="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-md">
                                  <UIcon name="i-lucide-notebook-text" class="size-4" />
                                </div>
                                <div>
                                  <p class="font-medium">30 ml</p>
                                  <p class="text-muted text-sm">Size</p>
                                </div>
                              </div>
                              <div class="text-right">
                                <p class="font-semibold text-highlighted">$88.00</p>
                                <p class="text-muted text-sm">29 units</p>
                              </div>
                            </div>
                            <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          </div>
                          <div class="flex flex-col gap-4">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex items-center gap-3">
                                <div class="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-md">
                                  <UIcon name="i-lucide-notebook-text" class="size-4" />
                                </div>
                                <div>
                                  <p class="font-medium">Refine duo</p>
                                  <p class="text-muted text-sm">Bundle</p>
                                </div>
                              </div>
                              <div class="text-right">
                                <p class="font-semibold text-highlighted">$164.00</p>
                                <p class="text-muted text-sm">9 units</p>
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
