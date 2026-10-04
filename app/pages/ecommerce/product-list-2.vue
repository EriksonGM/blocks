<!-- Page: /ecommerce/product-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Product List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProducts": "",
  "allProducts": "All products",
  "allProducts2": "All products"
})

const allProductsOptions = [
  "All products",
  "Active only",
  "Draft only"
]

const allProducts2Options = [
  "All products",
  "Active only",
  "Draft only"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-list-2">
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
                <span class="text-muted">Product List 2</span>
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
            <div class="flex flex-col gap-6 p-4 md:p-6">
              <section class="border-(--ui-border)/70 border-b border-dashed pb-4 border-default">
                <div class="flex flex-col gap-4 md:hidden">
                  <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-2xl border border-default">
                    <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                  </div>
                  <div class="space-y-1.5">
                    <h1 class="text-xl font-semibold tracking-tight text-highlighted">Product List 2</h1>
                    <p class="text-muted max-w-[18rem] text-sm leading-6">Inventory-first product cards with pricing, stock, and channel tags.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 w-full rounded-xl shadow-none" to="/ecommerce/add-product">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    New Products
                  </NuxtLink>
                </div>
                <div class="hidden gap-4 md:flex md:flex-row md:items-start md:justify-between xl:items-center">
                  <div class="flex items-start gap-3">
                    <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-2xl border border-default">
                      <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                    </div>
                    <div class="space-y-1">
                      <h1 class="text-lg font-semibold tracking-tight md:text-xl text-highlighted">Product List 2</h1>
                      <p class="text-muted text-sm">Inventory-first product cards with pricing, stock, and channel tags.</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 self-start">
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-xl px-4 shadow-none" to="/ecommerce/add-product">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      New Products
                    </NuxtLink>
                  </div>
                </div>
              </section>
              <section class="flex flex-col gap-4">
                <div class="flex flex-col gap-3 md:hidden">
                  <div class="relative min-w-0">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchProducts" type="search" placeholder="Search products..." name="searchProducts" class="flex w-full md:text-sm bg-default h-12 rounded-2xl pl-11 text-sm" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="flex min-w-0 items-center gap-2">
                    <USelect v-model="form.allProducts" :items="allProductsOptions" aria-label="All products" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/70 bg-default h-10 min-w-0 flex-1 rounded-2xl px-3 shadow-none border-default" />
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default py-2 border-(--ui-border)/70 h-10 shrink-0 rounded-2xl px-3 shadow-none border-default" aria-label="All stock" type="button" @click="openAction(&quot;All stock&quot;)">
                      <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                      All stock
                    </UButton>
                  </div>
                </div>
                <div class="hidden gap-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center">
                  <div class="relative min-w-0">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchProducts" type="search" placeholder="Search products..." name="searchProducts" class="flex w-full md:text-sm bg-default h-12 rounded-2xl pl-11 text-sm" :ui="{ base: 'h-full' }" />
                  </div>
                  <USelect v-model="form.allProducts2" :items="allProducts2Options" aria-label="All products" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/70 bg-default h-12 min-w-[150px] rounded-2xl shadow-none border-default" />
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default py-2 border-(--ui-border)/70 h-12 rounded-2xl px-4 shadow-none border-default" aria-label="All stock" type="button" @click="openAction(&quot;All stock&quot;)">
                    <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                    All stock
                  </UButton>
                </div>
                <div class="grid gap-4 xl:grid-cols-3">
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/radiance-ritual-set">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Radiance Ritual Set</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-SKIN-4006</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Set</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+2</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Dropship</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Radiance Ritual Set" type="button" @click="openAction(&quot;More options for Radiance Ritual Set&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$180.00-$220.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$100.00-$170.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">210 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (6)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:76%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Radiance Ritual Set" to="/ecommerce/edit-product/radiance-ritual-set">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/timeless-renewal-cream">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Timeless Renewal Cream</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-CREAM-9902</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Cream</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Premium</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Inventory</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Timeless Renewal Cream" type="button" @click="openAction(&quot;More options for Timeless Renewal Cream&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$120.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$80.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">12 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>Low</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (3)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-error" style="width:12%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Timeless Renewal Cream" to="/ecommerce/edit-product/timeless-renewal-cream">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/hydrabloom-night-cream">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">HydraBloom Night Cream</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-BALM-8928</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-default bg-muted text-toned">Draft</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Cream</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+2</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Dropship</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for HydraBloom Night Cream" type="button" @click="openAction(&quot;More options for HydraBloom Night Cream&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$180.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$100.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">341 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (9)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:92%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit HydraBloom Night Cream" to="/ecommerce/edit-product/hydrabloom-night-cream">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/radiant-lock-mist">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Radiant Lock Mist</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-SERUM-7811</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Serum</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Inventory</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Radiant Lock Mist" type="button" @click="openAction(&quot;More options for Radiant Lock Mist&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$69.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$39.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">67 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (4)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:54%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Radiant Lock Mist" to="/ecommerce/edit-product/radiant-lock-mist">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/pureessence-soap-trio">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">PureEssence Soap Trio</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-SOAP-5214</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-default bg-muted text-toned">Draft</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Soap</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Bundles</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+1</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for PureEssence Soap Trio" type="button" @click="openAction(&quot;More options for PureEssence Soap Trio&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$59.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$36.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">28 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>Low</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (2)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-error" style="width:22%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit PureEssence Soap Trio" to="/ecommerce/edit-product/pureessence-soap-trio">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/barrier-repair-drops">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Barrier Repair Drops</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-TREAT-6612</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Treatment</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Subscription</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Barrier Repair Drops" type="button" @click="openAction(&quot;More options for Barrier Repair Drops&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$84.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$52.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">96 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (5)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:61%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Barrier Repair Drops" to="/ecommerce/edit-product/barrier-repair-drops">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/dew-reset-essence">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Dew Reset Essence</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-ESSN-2084</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Essence</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Subscription</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Dew Reset Essence" type="button" @click="openAction(&quot;More options for Dew Reset Essence&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$74.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$44.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">55 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (4)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:48%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Dew Reset Essence" to="/ecommerce/edit-product/dew-reset-essence">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/velvet-cleanse-balm">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Velvet Cleanse Balm</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-CLEAN-1148</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-default bg-muted text-toned">Draft</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Cleanser</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Bundle</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+1</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Velvet Cleanse Balm" type="button" @click="openAction(&quot;More options for Velvet Cleanse Balm&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$64.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$36.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">38 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>Low</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (2)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-error" style="width:30%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Velvet Cleanse Balm" to="/ecommerce/edit-product/velvet-cleanse-balm">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/overnight-recovery-mask">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Overnight Recovery Mask</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-MASK-5501</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Mask</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Premium</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Inventory</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Overnight Recovery Mask" type="button" @click="openAction(&quot;More options for Overnight Recovery Mask&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$112.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$72.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">21 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>Low</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (3)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-error" style="width:18%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Overnight Recovery Mask" to="/ecommerce/edit-product/overnight-recovery-mask">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/cloud-silk-toner">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Cloud Silk Toner</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-TONER-7723</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Toner</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+2</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Dropship</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Cloud Silk Toner" type="button" @click="openAction(&quot;More options for Cloud Silk Toner&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$46.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$28.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">64 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (5)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:58%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Cloud Silk Toner" to="/ecommerce/edit-product/cloud-silk-toner">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/micro-peel-serum">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Micro Peel Serum</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-SERUM-4412</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-success/20 bg-success/10 text-success">Active</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Serum</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Premium</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Inventory</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Micro Peel Serum" type="button" @click="openAction(&quot;More options for Micro Peel Serum&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$88.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$54.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">29 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>Low</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (3)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-error" style="width:26%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Micro Peel Serum" to="/ecommerce/edit-product/micro-peel-serum">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-3 shadow-none border-default">
                    <div class="flex items-start gap-3">
                      <NuxtLink class="group/header flex min-w-0 flex-1 items-start gap-3 rounded-xl" to="/ecommerce/product-detail/botanical-body-polish">
                        <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 relative size-12 shrink-0 overflow-hidden rounded-xl border border-default">
                          <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="min-w-0">
                            <h2 class="text-highlighted group-hover/header:text-(--ui-text-highlighted)/80 truncate text-sm font-medium transition-colors text-highlighted">Botanical Body Polish</h2>
                            <div class="text-muted mt-1 flex flex-wrap items-center gap-2 text-xs">
                              <span>SKU-BODY-6118</span>
                              <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-0.5 text-[11px] border-default bg-muted text-toned">Draft</div>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Body Care</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">Retail</div>
                            <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-2 py-0.5 text-[11px] font-normal border-default">+1</div>
                          </div>
                        </div>
                      </NuxtLink>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-full" aria-label="More options for Botanical Body Polish" type="button" @click="openAction(&quot;More options for Botanical Body Polish&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-6">
                      <div>
                        <p class="text-muted text-[11px]">Retail</p>
                        <p class="mt-1 text-sm font-medium">$52.00</p>
                      </div>
                      <div>
                        <p class="text-muted text-[11px]">Wholesale</p>
                        <p class="mt-1 text-sm font-medium">$31.00</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/60 mt-4 flex items-center justify-between gap-4 border-t pt-3 border-default">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3 text-xs">
                          <p class="text-muted truncate">
                            <span class="text-highlighted font-medium">47 stock</span>
                            <span class="text-(--ui-border) mx-1.5">.</span>
                            <span>High</span>
                          </p>
                          <p class="text-muted shrink-0">Variants (4)</p>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full bg-success" style="width:43%" />
                        </div>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default text-xs border-(--ui-border)/70 h-9 shrink-0 rounded-md px-4 shadow-none border-default" aria-label="Edit Botanical Body Polish" to="/ecommerce/edit-product/botanical-body-polish">
                        Edit
                      </NuxtLink>
                    </div>
                  </article>
                </div>
              </section>
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
