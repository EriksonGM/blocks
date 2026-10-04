<!-- Page: /ecommerce/product-list-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Product List 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProducts": "",
  "alphabeticalAZ": "Alphabetical: A-Z",
  "allStock": "All stock",
  "allCategories": "All categories",
  "minimumPrice": "",
  "maximumPrice": ""
})

const alphabeticalAZOptions = [
  "Alphabetical: A-Z",
  "Alphabetical: Z-A",
  "Price: low to high",
  "Price: high to low",
  "Stock: low to high",
  "Stock: high to low"
]

const allStockOptions = [
  "All stock",
  "High stock",
  "Low stock"
]

const allCategoriesOptions = [
  "All categories",
  "Set",
  "Cream",
  "Serum",
  "Soap",
  "Treatment",
  "Essence",
  "Cleanser",
  "Mask",
  "Toner",
  "Body Care"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-list-4">
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
                <span class="text-muted">Product List 4</span>
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
              <main class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
                  <section class="border-(--ui-border)/70 border-b border-dashed pb-4 border-default">
                    <div class="flex flex-col gap-4 md:hidden">
                      <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-xl border border-default">
                        <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                      </div>
                      <div class="flex flex-col gap-1.5">
                        <h1 class="text-xl font-semibold tracking-tight text-highlighted">Product List 4</h1>
                        <p class="text-muted max-w-[18rem] text-sm leading-6">Sidebar-driven catalog filtering with dense merchandiser rows.</p>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 w-full rounded-lg shadow-none" to="/ecommerce/add-product">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        New Products
                      </NuxtLink>
                    </div>
                    <div class="hidden gap-4 md:flex md:flex-row md:items-start md:justify-between xl:items-center">
                      <div class="flex items-start gap-3">
                        <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-xl border border-default">
                          <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                        </div>
                        <div class="flex flex-col gap-1">
                          <h1 class="text-lg font-semibold tracking-tight md:text-xl text-highlighted">Product List 4</h1>
                          <p class="text-muted text-sm">Sidebar-driven catalog filtering with dense merchandiser rows.</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 self-start">
                        <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-lg px-4 shadow-none" to="/ecommerce/add-product">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          New Products
                        </NuxtLink>
                      </div>
                    </div>
                  </section>
                  <section class="grid gap-6 xl:min-h-0 xl:flex-1 xl:grid-cols-[284px_minmax(0,1fr)] xl:overflow-hidden">
                    <aside class="xl:border-(--ui-border)/60 flex min-h-0 flex-col gap-5 xl:h-full xl:border-r xl:border-dotted xl:pr-3 border-default">
                      <div class="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-1 pb-4 xl:pr-2">
                        <div class="relative">
                          <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                          <UInput v-model="form.searchProducts" type="search" placeholder="Search products..." name="searchProducts" class="flex w-full text-base md:text-sm h-11 rounded-lg pr-4 pl-11" :ui="{ base: 'h-full' }" />
                        </div>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Product status</h2>
                          <div class="grid grid-cols-2 gap-2">
                            <UButton color="neutral" variant="outline" class="flex min-h-11 items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-colors text-highlighted border-primary/40 bg-primary/8" aria-label="All12" type="button" @click="openAction(&quot;All12&quot;)">
                              <span class="text-sm font-medium">All</span>
                              <span class="rounded-md px-2 py-0.5 text-xs font-medium bg-primary/12 text-primary">12</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-colors border-(--ui-border)/50 text-muted hover:text-highlighted bg-transparent border-default" aria-label="Active8" type="button" @click="openAction(&quot;Active8&quot;)">
                              <span class="text-sm font-medium">Active</span>
                              <span class="rounded-md px-2 py-0.5 text-xs font-medium bg-muted text-muted">8</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-colors border-(--ui-border)/50 text-muted hover:text-highlighted bg-transparent border-default" aria-label="Inactive0" type="button" @click="openAction(&quot;Inactive0&quot;)">
                              <span class="text-sm font-medium">Inactive</span>
                              <span class="rounded-md px-2 py-0.5 text-xs font-medium bg-muted text-muted">0</span>
                            </UButton>
                            <UButton color="neutral" variant="outline" class="flex min-h-11 items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-colors border-(--ui-border)/50 text-muted hover:text-highlighted bg-transparent border-default" aria-label="Draft4" type="button" @click="openAction(&quot;Draft4&quot;)">
                              <span class="text-sm font-medium">Draft</span>
                              <span class="rounded-md px-2 py-0.5 text-xs font-medium bg-muted text-muted">4</span>
                            </UButton>
                          </div>
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Product type</h2>
                          <div class="grid grid-cols-2 gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default py-2 border-(--ui-border)/60 h-11 rounded-lg bg-transparent px-4 shadow-none border-default" aria-label="Retail" type="button" @click="openAction(&quot;Retail&quot;)">
                              Retail
                            </UButton>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default py-2 border-(--ui-border)/60 h-11 rounded-lg bg-transparent px-4 shadow-none border-default" aria-label="Wholesale" type="button" @click="openAction(&quot;Wholesale&quot;)">
                              Wholesale
                            </UButton>
                          </div>
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Sort by</h2>
                          <USelect v-model="form.alphabeticalAZ" :items="alphabeticalAZOptions" aria-label="Alphabetical: A-Z" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/60 h-11 rounded-lg bg-transparent px-4 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Stock alert</h2>
                          <USelect v-model="form.allStock" :items="allStockOptions" aria-label="All stock" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/60 h-11 rounded-lg bg-transparent px-4 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Category</h2>
                          <USelect v-model="form.allCategories" :items="allCategoriesOptions" aria-label="All categories" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/60 h-11 rounded-lg bg-transparent px-4 shadow-none border-default" />
                        </section>
                        <section class="border-(--ui-border)/60 flex flex-col gap-3 border-b border-dotted pb-5 last:border-none last:pb-0 border-default">
                          <h2 class="text-(--ui-text-highlighted)/85 text-[14px] font-medium tracking-normal text-highlighted">Price</h2>
                          <div class="flex flex-col gap-2">
                            <div class="relative">
                              <UIcon name="i-lucide-dollar-sign" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                              <UInput v-model="form.minimumPrice" type="text" placeholder="Minimum price" name="minimumPrice" class="flex w-full text-base md:text-sm h-11 rounded-lg pr-4 pl-11" :ui="{ base: 'h-full' }" />
                            </div>
                            <div class="relative">
                              <UIcon name="i-lucide-dollar-sign" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                              <UInput v-model="form.maximumPrice" type="text" placeholder="Maximum price" name="maximumPrice" class="flex w-full text-base md:text-sm h-11 rounded-lg pr-4 pl-11" :ui="{ base: 'h-full' }" />
                            </div>
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
                            <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2.5 py-1 border-default">12 products</div>
                          </div>
                          <p class="text-muted text-sm">Reusing the inventory catalog with a filter sidebar and compact row layout.</p>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated border-(--ui-border)/60 text-muted hover:text-highlighted size-10 shrink-0 rounded-xl p-0 shadow-none lg:mr-1 lg:justify-self-end border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="min-h-0 flex-1 overflow-y-auto xl:pr-3">
                        <div class="flex flex-col">
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Barrier Repair Drops" class="absolute inset-0" to="/ecommerce/product-detail/barrier-repair-drops">
                                    <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/barrier-repair-drops">
                                    Barrier Repair Drops
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">5 variants</div>
                                    <span>Treatment</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>96 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$84.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$52.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Barrier Repair Drops" type="button" @click="openAction(&quot;Open actions for Barrier Repair Drops&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Botanical Body Polish" class="absolute inset-0" to="/ecommerce/product-detail/botanical-body-polish">
                                    <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/botanical-body-polish">
                                    Botanical Body Polish
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">4 variants</div>
                                    <span>Body Care</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>47 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$52.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$31.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Botanical Body Polish" type="button" @click="openAction(&quot;Open actions for Botanical Body Polish&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Cloud Silk Toner" class="absolute inset-0" to="/ecommerce/product-detail/cloud-silk-toner">
                                    <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/cloud-silk-toner">
                                    Cloud Silk Toner
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">5 variants</div>
                                    <span>Toner</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>64 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$46.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$28.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Cloud Silk Toner" type="button" @click="openAction(&quot;Open actions for Cloud Silk Toner&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Dew Reset Essence" class="absolute inset-0" to="/ecommerce/product-detail/dew-reset-essence">
                                    <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/dew-reset-essence">
                                    Dew Reset Essence
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">4 variants</div>
                                    <span>Essence</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>55 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$74.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$44.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Dew Reset Essence" type="button" @click="openAction(&quot;Open actions for Dew Reset Essence&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View HydraBloom Night Cream" class="absolute inset-0" to="/ecommerce/product-detail/hydrabloom-night-cream">
                                    <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/hydrabloom-night-cream">
                                    HydraBloom Night Cream
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">9 variants</div>
                                    <span>Cream</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>341 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$180.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$100.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for HydraBloom Night Cream" type="button" @click="openAction(&quot;Open actions for HydraBloom Night Cream&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Micro Peel Serum" class="absolute inset-0" to="/ecommerce/product-detail/micro-peel-serum">
                                    <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/micro-peel-serum">
                                    Micro Peel Serum
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">3 variants</div>
                                    <span>Serum</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>
                                      29 in stock
                                      <span class="ml-2 text-error">low</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$88.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$54.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Micro Peel Serum" type="button" @click="openAction(&quot;Open actions for Micro Peel Serum&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Overnight Recovery Mask" class="absolute inset-0" to="/ecommerce/product-detail/overnight-recovery-mask">
                                    <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/overnight-recovery-mask">
                                    Overnight Recovery Mask
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">3 variants</div>
                                    <span>Mask</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>
                                      21 in stock
                                      <span class="ml-2 text-error">low</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$112.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$72.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Overnight Recovery Mask" type="button" @click="openAction(&quot;Open actions for Overnight Recovery Mask&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View PureEssence Soap Trio" class="absolute inset-0" to="/ecommerce/product-detail/pureessence-soap-trio">
                                    <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/pureessence-soap-trio">
                                    PureEssence Soap Trio
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">2 variants</div>
                                    <span>Soap</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>
                                      28 in stock
                                      <span class="ml-2 text-error">low</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$59.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$36.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for PureEssence Soap Trio" type="button" @click="openAction(&quot;Open actions for PureEssence Soap Trio&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Radiance Ritual Set" class="absolute inset-0" to="/ecommerce/product-detail/radiance-ritual-set">
                                    <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/radiance-ritual-set">
                                    Radiance Ritual Set
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">6 variants</div>
                                    <span>Set</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>210 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$180.00-$220.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$100.00-$170.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Radiance Ritual Set" type="button" @click="openAction(&quot;Open actions for Radiance Ritual Set&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Radiant Lock Mist" class="absolute inset-0" to="/ecommerce/product-detail/radiant-lock-mist">
                                    <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/radiant-lock-mist">
                                    Radiant Lock Mist
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">4 variants</div>
                                    <span>Serum</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>67 in stock</span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$69.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$39.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Radiant Lock Mist" type="button" @click="openAction(&quot;Open actions for Radiant Lock Mist&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Timeless Renewal Cream" class="absolute inset-0" to="/ecommerce/product-detail/timeless-renewal-cream">
                                    <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/timeless-renewal-cream">
                                    Timeless Renewal Cream
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">3 variants</div>
                                    <span>Cream</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Retail catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>
                                      12 in stock
                                      <span class="ml-2 text-error">low</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$120.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$80.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Timeless Renewal Cream" type="button" @click="openAction(&quot;Open actions for Timeless Renewal Cream&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
                              </div>
                            </div>
                          </article>
                          <article class="border-(--ui-border)/60 border-b border-dotted py-5 last:border-b-0 border-default">
                            <div class="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.7fr)_1px_150px_1px_170px_auto] lg:items-center lg:gap-x-5 lg:gap-y-0">
                              <div class="flex min-w-0 items-center gap-4">
                                <div class="bg-(--ui-bg-muted)/30 relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                                  <NuxtLink aria-label="View Velvet Cleanse Balm" class="absolute inset-0" to="/ecommerce/product-detail/velvet-cleanse-balm">
                                    <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                  </NuxtLink>
                                </div>
                                <div class="min-w-0 flex-1">
                                  <NuxtLink class="line-clamp-2 text-lg font-semibold tracking-tight hover:underline" to="/ecommerce/product-detail/velvet-cleanse-balm">
                                    Velvet Cleanse Balm
                                  </NuxtLink>
                                  <div class="text-muted mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm rounded-md bg-info/12 px-2 py-0.5 text-info hover:bg-info/12 border-default">2 variants</div>
                                    <span>Cleanser</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>Wholesale catalog</span>
                                    <span class="text-(--ui-border)">•</span>
                                    <span>
                                      38 in stock
                                      <span class="ml-2 text-error">low</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[140px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Retail Price</span>
                                <span class="text-base font-semibold">$64.00</span>
                              </div>
                              <div class="border-(--ui-border)/60 hidden h-14 border-l border-dotted lg:block border-default" />
                              <div class="flex min-w-[170px] flex-col gap-1">
                                <span class="text-muted text-[11px] font-semibold tracking-[0.16em] uppercase">Wholesale Price</span>
                                <span class="text-base font-semibold">$36.00</span>
                              </div>
                              <div class="self-start lg:justify-self-end">
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-10 rounded-lg" aria-label="Open actions for Velvet Cleanse Balm" type="button" @click="openAction(&quot;Open actions for Velvet Cleanse Balm&quot;)">
                                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                                </UButton>
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
