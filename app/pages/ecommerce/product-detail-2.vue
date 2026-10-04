<!-- Page: /ecommerce/product-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Product Detail 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "enabled": true,
  "enabled2": true
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Overview",
    "value": "0"
  },
  {
    "label": "Variants",
    "value": "1"
  },
  {
    "label": "Inventory",
    "value": "2"
  },
  {
    "label": "Activity",
    "value": "3"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-detail-2">
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
                <span class="text-muted">Product Detail 2</span>
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
            <div class="min-w-0 overflow-x-hidden">
              <div class="flex min-w-0 flex-col p-4 sm:p-6 md:p-8">
                <div class="flex flex-col gap-5 pb-8 md:hidden">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Products</span>
                    <span class="text-muted">/</span>
                    <span class="text-muted">Variant detail</span>
                  </div>
                  <div class="flex justify-end">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium">Active</span>
                      <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Radiance Ritual Set</h1>
                    <p class="text-muted text-sm">6 variants • Wellness •Stocked Product</p>
                  </div>
                  <div class="grid gap-3 sm:grid-cols-2">
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 rounded-lg" aria-label="Add Variant" type="button" @click="openAction(&quot;Add Variant&quot;)">
                      <UIcon name="i-lucide-plus" class="h-4 w-4" />
                      Add Variant
                    </UButton>
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" to="/ecommerce/edit-product-2/radiance-ritual-set">
                      <UIcon name="i-lucide-pencil" class="h-4 w-4" />
                      Edit
                    </NuxtLink>
                  </div>
                </div>
                <div class="hidden flex-col gap-6 pb-8 md:flex">
                  <div class="flex items-start justify-between gap-8">
                    <div class="flex min-w-0 flex-col gap-3 pt-1">
                      <h1 class="text-4xl font-medium tracking-tight text-highlighted">Radiance Ritual Set</h1>
                      <div class="flex flex-wrap items-center gap-2 text-sm">
                        <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 rounded-md px-2.5 py-1 font-medium border-default">Active</div>
                        <span class="text-muted">•</span>
                        <span class="text-muted">6 variants</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted">Wellness</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted">Stocked Product</span>
                      </div>
                    </div>
                    <div class="flex shrink-0 items-center gap-3">
                      <div class="flex items-center gap-3 rounded-full border px-3 py-2 border-default">
                        <USwitch v-model="form.enabled2" aria-label="Toggle setting" />
                        <span class="text-sm font-medium">Active</span>
                      </div>
                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-8" />
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 rounded-lg" aria-label="Add Variant" type="button" @click="openAction(&quot;Add Variant&quot;)">
                        <UIcon name="i-lucide-plus" class="h-4 w-4" />
                        Add Variant
                      </UButton>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" to="/ecommerce/edit-product-2/radiance-ritual-set">
                        <UIcon name="i-lucide-pencil" class="h-4 w-4" />
                        Edit
                      </NuxtLink>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Clone" type="button" @click="openAction(&quot;Clone&quot;)">
                        <UIcon name="i-lucide-layers" class="h-4 w-4" />
                        Clone
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
                <div data-orientation="horizontal" class="min-w-0 pb-2">
                  <div class="overflow-x-auto border-b border-default">
                    <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center rounded-lg h-auto justify-start gap-5 bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                  </div>
                  <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-overview" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 pt-6" style="animation-duration:0s">
                    <div class="grid min-w-0 gap-8 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start">
                      <div class="flex min-w-0 flex-col gap-5">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 rounded-3xl border p-4 border-default">
                          <div class="bg-default border-(--ui-border)/60 relative h-[300px] overflow-hidden rounded-2xl border md:h-[360px] border-default">
                            <img alt="Ocean / 3-piece set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                            <div class="bg-(--ui-bg)/95 absolute top-3 left-3 rounded-md px-2 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">Primary</div>
                          </div>
                          <div class="mt-4 flex min-w-0 gap-3 overflow-x-auto pb-1">
                            <UButton color="neutral" variant="outline" class="bg-default relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border transition-all border-(--ui-text-highlighted) ring-(--ui-text-highlighted)/10 ring-2 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Radiance Ritual Set gallery" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-default relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border transition-all border-(--ui-border)/60 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Radiance Ritual Set gallery" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-default relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border transition-all border-(--ui-border)/60 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Radiance Ritual Set gallery" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-default relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border transition-all border-(--ui-border)/60 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Radiance Ritual Set gallery" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                            </UButton>
                            <UButton color="neutral" variant="outline" class="bg-default relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border transition-all border-(--ui-border)/60 opacity-80 hover:opacity-100 border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              <img alt="Radiance Ritual Set gallery" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                            </UButton>
                          </div>
                        </div>
                        <!-- Card 1: Product family profile -->
                        <UCard class="rounded-2xl shadow-none" :ui="{ body: 'contents' }">
                          <div class="flex flex-col space-y-1.5 p-6 gap-2">
                            <div class="font-semibold tracking-tight text-base">Product family profile</div>
                            <div class="text-muted text-sm">A compact read on the assortment behind this variant-led product.</div>
                          </div>
                          <div class="p-6 pt-0 grid gap-4 sm:grid-cols-2">
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Primary variant</p>
                              <p class="mt-2 font-medium">Ocean / 3-piece set</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail price band</p>
                              <p class="mt-2 font-medium">$179 -$429</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Material</p>
                              <p class="mt-2 font-medium">Gift-boxed skin-care kit</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Vendor</p>
                              <p class="mt-2 font-medium">Acme Retail</p>
                            </div>
                          </div>
                        </UCard>
                      </div>
                      <div class="grid min-w-0 gap-4">
                        <div class="grid gap-3 sm:grid-cols-3">
                          <!-- Card 2: Total stock -->
                          <UCard class="rounded-2xl shadow-none" :ui="{ body: 'contents' }">
                            <div class="p-5">
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Total stock</p>
                              <p class="mt-3 text-3xl font-semibold tracking-tight text-highlighted">120</p>
                              <p class="text-muted mt-1 text-sm">Across 6 active variants</p>
                            </div>
                          </UCard>
                          <!-- Card 3: Low stock -->
                          <UCard class="rounded-2xl shadow-none" :ui="{ body: 'contents' }">
                            <div class="p-5">
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Low stock</p>
                              <p class="mt-3 text-3xl font-semibold tracking-tight text-highlighted">4</p>
                              <p class="text-muted mt-1 text-sm">Variants below the 20-unit threshold</p>
                            </div>
                          </UCard>
                          <!-- Card 4: Average stock -->
                          <UCard class="rounded-2xl shadow-none" :ui="{ body: 'contents' }">
                            <div class="p-5">
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Average stock</p>
                              <p class="mt-3 text-3xl font-semibold tracking-tight text-highlighted">20</p>
                              <p class="text-muted mt-1 text-sm">Average units held per variant</p>
                            </div>
                          </UCard>
                        </div>
                        <div class="flex min-w-0 items-center justify-between gap-3">
                          <div class="min-w-0">
                            <p class="font-medium">Variant lineup</p>
                            <p class="text-muted text-sm">Click any row to update the media focus and selected context.</p>
                          </div>
                        </div>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-text-highlighted)/20 bg-default shadow-sm border-default" aria-label="Ocean / 3-piece setPrimarySKU-SKIN-4006-OCN•Stock: 48Retail$389Wholesale$249" type="button" @click="openAction(&quot;Ocean / 3-piece setPrimarySKU-SKIN-4006-OCN•Stock: 48Retail$389Wholesale$249&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Ocean / 3-piece set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Ocean / 3-piece set</p>
                                  <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] border-default">Primary</div>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-OCN</span>
                                  <span>•</span>
                                  <span class="">Stock: 48</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$389</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$249</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-border)/60 bg-(--ui-bg)/70 hover:border-default hover:bg-default" aria-label="Sand / 3-piece setSKU-SKIN-4006-SND•Stock: 22Retail$389Wholesale$249" type="button" @click="openAction(&quot;Sand / 3-piece setSKU-SKIN-4006-SND•Stock: 22Retail$389Wholesale$249&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Sand / 3-piece set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Sand / 3-piece set</p>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-SND</span>
                                  <span>•</span>
                                  <span class="">Stock: 22</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$389</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$249</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-border)/60 bg-(--ui-bg)/70 hover:border-default hover:bg-default" aria-label="Stone / Travel trioSKU-SKIN-4006-STN•Stock: 18lowRetail$179Wholesale$116" type="button" @click="openAction(&quot;Stone / Travel trioSKU-SKIN-4006-STN•Stock: 18lowRetail$179Wholesale$116&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Stone / Travel trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Stone / Travel trio</p>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-STN</span>
                                  <span>•</span>
                                  <span class="text-error">Stock: 18</span>
                                  <span class="text-error">low</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$179</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$116</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-border)/60 bg-(--ui-bg)/70 hover:border-default hover:bg-default" aria-label="Rose / Travel trioSKU-SKIN-4006-RSE•Stock: 10lowRetail$179Wholesale$116" type="button" @click="openAction(&quot;Rose / Travel trioSKU-SKIN-4006-RSE•Stock: 10lowRetail$179Wholesale$116&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Rose / Travel trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Rose / Travel trio</p>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-RSE</span>
                                  <span>•</span>
                                  <span class="text-error">Stock: 10</span>
                                  <span class="text-error">low</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$179</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$116</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-border)/60 bg-(--ui-bg)/70 hover:border-default hover:bg-default" aria-label="Slate / Duo setSKU-SKIN-4006-SLT•Stock: 14lowRetail$259Wholesale$168" type="button" @click="openAction(&quot;Slate / Duo setSKU-SKIN-4006-SLT•Stock: 14lowRetail$259Wholesale$168&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Slate / Duo set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Slate / Duo set</p>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-SLT</span>
                                  <span>•</span>
                                  <span class="text-error">Stock: 14</span>
                                  <span class="text-error">low</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$259</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$168</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="w-full rounded-2xl border p-3 text-left transition-colors border-(--ui-border)/60 bg-(--ui-bg)/70 hover:border-default hover:bg-default" aria-label="Cloud / Gift setSKU-SKIN-4006-CLD•Stock: 8lowRetail$429Wholesale$278" type="button" @click="openAction(&quot;Cloud / Gift setSKU-SKIN-4006-CLD•Stock: 8lowRetail$429Wholesale$278&quot;)">
                          <div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_100px_100px_auto] lg:items-center">
                            <div class="flex min-w-0 items-center gap-3">
                              <div class="bg-(--ui-bg-muted)/30 border-(--ui-border)/60 relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-default">
                                <img alt="Cloud / Gift set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                              </div>
                              <div class="min-w-0">
                                <div class="flex flex-wrap items-center gap-2">
                                  <p class="truncate font-medium">Cloud / Gift set</p>
                                </div>
                                <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-sm">
                                  <span>SKU-SKIN-4006-CLD</span>
                                  <span>•</span>
                                  <span class="text-error">Stock: 8</span>
                                  <span class="text-error">low</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Retail</p>
                              <p class="mt-1 font-medium">$429</p>
                            </div>
                            <div>
                              <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Wholesale</p>
                              <p class="mt-1 font-medium">$278</p>
                            </div>
                            <div class="flex items-center justify-end">
                              <span class="text-muted inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-variants" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 pt-6" />
                  <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-inventory" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 pt-6" />
                  <div data-orientation="horizontal" id="radix-_R_1lfiv5uiv5uknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 pt-6" />
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
