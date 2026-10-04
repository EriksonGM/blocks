<!-- Page: /ecommerce/product-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Product List 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProducts": "",
  "allTime": "All time",
  "allTime2": "All time",
  "newest": "Newest"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Sales",
    "value": "0"
  },
  {
    "label": "Views",
    "value": "1"
  },
  {
    "label": "Stock",
    "value": "2"
  }
]

const allTimeOptions = [
  "All time",
  "Last 7 days",
  "Last 30 days",
  "Last quarter"
]

const allTime2Options = [
  "All time",
  "Last 7 days",
  "Last 30 days",
  "Last quarter"
]

const newestOptions = [
  "Newest",
  "Best selling",
  "Low stock"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-list-3">
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
                <span class="text-muted">Product List 3</span>
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
              <div class="flex flex-col gap-6 p-4 md:p-6">
                <section class="border-(--ui-border)/70 border-b border-dashed pb-4 border-default">
                  <div class="flex flex-col gap-4 md:hidden">
                    <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-2xl border border-default">
                      <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                    </div>
                    <div class="space-y-1.5">
                      <h1 class="text-xl font-semibold tracking-tight text-highlighted">My Products</h1>
                      <p class="text-muted max-w-[18rem] text-sm leading-6">Manage and collaborate on your product listings.</p>
                    </div>
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 w-full rounded-xl shadow-none" to="/ecommerce/add-product">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      New Products
                    </NuxtLink>
                  </div>
                  <div class="hidden gap-3 md:flex xl:flex-row xl:items-center xl:justify-between">
                    <div class="flex items-start gap-3">
                      <div class="border-(--ui-border)/70 bg-default flex size-10 shrink-0 items-center justify-center rounded-2xl border border-default">
                        <UIcon name="i-lucide-package" class="text-muted size-4.5" />
                      </div>
                      <div class="space-y-1">
                        <h1 class="text-lg font-semibold tracking-tight md:text-xl text-highlighted">My Products</h1>
                        <p class="text-muted text-sm">Manage and collaborate on your product listings.</p>
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
                <section class="border-(--ui-border)/70 hidden border-b border-dashed py-2 pb-6 md:block border-default">
                  <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:gap-0">
                    <section class="space-y-2 py-2 sm:py-1 xl:pr-8">
                      <div class="flex items-center justify-between gap-2">
                        <p class="text-muted text-sm">Total Products</p>
                      </div>
                      <div class="space-y-1.5">
                        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <p class="text-3xl leading-none font-semibold tracking-tight tabular-nums text-highlighted">248</p>
                          <span class="text-sm text-success">+12.4%</span>
                        </div>
                        <span class="text-muted block text-sm">vs last month</span>
                      </div>
                    </section>
                    <section class="space-y-2 py-2 sm:py-1 xl:border-(--ui-border)/70 xl:border-l xl:px-8 border-default">
                      <div class="flex items-center justify-between gap-2">
                        <p class="text-muted text-sm">Active Listings</p>
                      </div>
                      <div class="space-y-1.5">
                        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <p class="text-3xl leading-none font-semibold tracking-tight tabular-nums text-highlighted">186</p>
                          <span class="text-sm text-success">+4.8%</span>
                        </div>
                        <span class="text-muted block text-sm">vs last month</span>
                      </div>
                    </section>
                    <section class="space-y-2 py-2 sm:py-1 xl:border-(--ui-border)/70 xl:border-l xl:px-8 border-default">
                      <div class="flex items-center justify-between gap-2">
                        <p class="text-muted text-sm">Low Stock Items</p>
                      </div>
                      <div class="space-y-1.5">
                        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <p class="text-3xl leading-none font-semibold tracking-tight tabular-nums text-highlighted">19</p>
                          <span class="text-sm text-error">-6.1%</span>
                        </div>
                        <span class="text-muted block text-sm">vs last month</span>
                      </div>
                    </section>
                    <section class="space-y-2 py-2 sm:py-1 xl:border-(--ui-border)/70 xl:border-l xl:pl-8 border-default">
                      <div class="flex items-center justify-between gap-2">
                        <p class="text-muted text-sm">Monthly Revenue</p>
                      </div>
                      <div class="space-y-1.5">
                        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <p class="text-3xl leading-none font-semibold tracking-tight tabular-nums text-highlighted">$89,440</p>
                          <span class="text-sm text-success">+8.2%</span>
                        </div>
                        <span class="text-muted block text-sm">vs last month</span>
                      </div>
                    </section>
                  </div>
                </section>
                <section class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3 md:hidden">
                    <div class="relative min-w-0">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchProducts" type="search" placeholder="Search products..." name="searchProducts" class="flex w-full md:text-sm bg-default h-12 rounded-2xl pl-11 text-sm" :ui="{ base: 'h-full' }" />
                    </div>
                    <div class="flex min-w-0 items-center gap-2">
                      <USelect v-model="form.allTime" :items="allTimeOptions" aria-label="All time" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/70 bg-default h-10 min-w-0 flex-1 rounded-2xl px-3 shadow-none border-default" />
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default py-2 border-(--ui-border)/70 h-10 shrink-0 rounded-2xl px-3 shadow-none border-default" aria-label="All stock" type="button" @click="openAction(&quot;All stock&quot;)">
                        <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                        All stock
                      </UButton>
                    </div>
                  </div>
                  <div class="hidden gap-3 md:grid md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_auto_auto] xl:items-center">
                    <div class="relative min-w-0 md:col-span-2 xl:col-span-1">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchProducts" type="search" placeholder="Search products..." name="searchProducts" class="flex w-full md:text-sm bg-default h-12 rounded-2xl pl-11 text-sm" :ui="{ base: 'h-full' }" />
                    </div>
                    <USelect v-model="form.allTime2" :items="allTime2Options" aria-label="All time" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/70 bg-default h-12 w-full min-w-[156px] rounded-2xl shadow-none border-default" />
                    <USelect v-model="form.newest" :items="newestOptions" aria-label="Newest" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-(--ui-border)/70 bg-default h-12 w-full min-w-[132px] rounded-2xl shadow-none border-default" />
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default hover:bg-elevated hover:text-default py-2 border-(--ui-border)/70 h-12 rounded-2xl px-4 shadow-none md:w-fit border-default" aria-label="All stock" type="button" @click="openAction(&quot;All stock&quot;)">
                      <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                      All stock
                    </UButton>
                  </div>
                  <div class="columns-1 [column-gap:1rem] sm:columns-2 xl:columns-4">
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Radiance Ritual Set" type="button" @click="openAction(&quot;More options for Radiance Ritual Set&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 1: Radiance Ritual SetSkincare Set -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Radiance Ritual SetSkincare Set" type="button" @click="openAction(&quot;Radiance Ritual SetSkincare Set&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Radiance Ritual Set</h2>
                                <p class="text-muted mt-1 text-sm">Skincare Set</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1gvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 257px; --radix-collapsible-content-width: 270px;">
                            <div class="overscroll-auto px-4 pt-0 pb-4">
                              <div class="border-(--ui-border)/70 grid grid-cols-2 gap-3 border-t border-dashed pt-4 border-default">
                                <div class="space-y-1">
                                  <p class="text-muted text-xs">Price</p>
                                  <p class="text-sm font-medium">$389.00</p>
                                </div>
                                <div class="space-y-1">
                                  <p class="text-muted text-xs">Stock</p>
                                  <p class="text-sm font-medium">
                                    48 units
                                    <span class="ml-1 text-success">↗</span>
                                  </p>
                                </div>
                              </div>
                              <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="mt-4" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                                <template #content="{ item }">
                                  <template v-if="item.value === '0'">
                                    <div data-orientation="horizontal" id="radix-_R_1bgvav5uiv5uknmlb_-content-sales" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 focus-visible:ring-0" style="animation-duration:0s">
                                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-20 w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                          <div style="width:0;height:0;overflow:visible">
                                            <div width="238" height="80" class="chart-wrapper" style="position: relative; cursor: default; width: 238px; height: 80px;">
                                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 238 80" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                                <title />
                                                <desc />
                                                <g class="chart-zIndex-layer_-100">
                                                  <g class="chart-cartesian-grid">
                                                    <g class="chart-cartesian-grid-horizontal">
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="42" x2="238" y2="42" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="4" x2="238" y2="4" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="80" x2="238" y2="80" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_-50" />
                                                <defs>
                                                  <clipPath id="recharts1-clip">
                                                    <rect x="0" y="4" height="76" width="238" />
                                                  </clipPath>
                                                </defs>
                                                <g class="chart-zIndex-layer_100" />
                                                <g class="chart-zIndex-layer_200" />
                                                <g class="chart-zIndex-layer_300" />
                                                <g class="chart-zIndex-layer_400">
                                                  <g class="chart-layer chart-line">
                                                    <g class="chart-layer chart-shape">
                                                      <path stroke="var(--color-value)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="76" width="238" class="chart-curve chart-line-curve" stroke-dasharray="686.5146px 737.8849487304688px" d="M0,42C5.667,46.222,11.333,50.444,17,50.444C22.667,50.444,28.333,16.667,34,16.667C39.667,16.667,45.333,37.778,51,37.778C56.667,37.778,62.333,4,68,4C73.667,4,79.333,46.222,85,46.222C90.667,46.222,96.333,25.111,102,25.111C107.667,25.111,113.333,31.444,119,31.444C124.667,31.444,130.333,18.778,136,18.778C141.667,18.778,147.333,28.278,153,31.444C158.667,34.611,164.333,37.778,170,37.778C175.667,37.778,181.333,18.778,187,18.778C192.667,18.778,198.333,42,204,42C209.667,42,215.333,20.889,221,20.889C226.667,20.889,232.333,25.111,238,29.333" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_500" />
                                                <g class="chart-zIndex-layer_600" />
                                                <g class="chart-zIndex-layer_1000" />
                                                <g class="chart-zIndex-layer_1100" />
                                                <g class="chart-zIndex-layer_1200" />
                                                <g class="chart-zIndex-layer_2000" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                  <template v-if="item.value === '1'">
                                    <div data-orientation="horizontal" id="radix-_R_1bgvav5uiv5uknmlb_-content-sales" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 focus-visible:ring-0" style="animation-duration:0s">
                                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-20 w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                          <div style="width:0;height:0;overflow:visible">
                                            <div width="238" height="80" class="chart-wrapper" style="position: relative; cursor: default; width: 238px; height: 80px;">
                                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 238 80" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                                <title />
                                                <desc />
                                                <g class="chart-zIndex-layer_-100">
                                                  <g class="chart-cartesian-grid">
                                                    <g class="chart-cartesian-grid-horizontal">
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="42" x2="238" y2="42" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="4" x2="238" y2="4" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="80" x2="238" y2="80" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_-50" />
                                                <defs>
                                                  <clipPath id="recharts1-clip">
                                                    <rect x="0" y="4" height="76" width="238" />
                                                  </clipPath>
                                                </defs>
                                                <g class="chart-zIndex-layer_100" />
                                                <g class="chart-zIndex-layer_200" />
                                                <g class="chart-zIndex-layer_300" />
                                                <g class="chart-zIndex-layer_400">
                                                  <g class="chart-layer chart-line">
                                                    <g class="chart-layer chart-shape">
                                                      <path stroke="var(--color-value)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="76" width="238" class="chart-curve chart-line-curve" stroke-dasharray="686.5146px 737.8849487304688px" d="M0,42C5.667,46.222,11.333,50.444,17,50.444C22.667,50.444,28.333,16.667,34,16.667C39.667,16.667,45.333,37.778,51,37.778C56.667,37.778,62.333,4,68,4C73.667,4,79.333,46.222,85,46.222C90.667,46.222,96.333,25.111,102,25.111C107.667,25.111,113.333,31.444,119,31.444C124.667,31.444,130.333,18.778,136,18.778C141.667,18.778,147.333,28.278,153,31.444C158.667,34.611,164.333,37.778,170,37.778C175.667,37.778,181.333,18.778,187,18.778C192.667,18.778,198.333,42,204,42C209.667,42,215.333,20.889,221,20.889C226.667,20.889,232.333,25.111,238,29.333" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_500" />
                                                <g class="chart-zIndex-layer_600" />
                                                <g class="chart-zIndex-layer_1000" />
                                                <g class="chart-zIndex-layer_1100" />
                                                <g class="chart-zIndex-layer_1200" />
                                                <g class="chart-zIndex-layer_2000" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                  <template v-if="item.value === '2'">
                                    <div data-orientation="horizontal" id="radix-_R_1bgvav5uiv5uknmlb_-content-sales" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 focus-visible:ring-0" style="animation-duration:0s">
                                      <!-- Chart 5: SVG geometry and theme tokens are local to this page -->
                                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-20 w-full" style=";--color-value:var(--ui-primary)" role="img" aria-label="Analytics chart">
                                        <!-- Chart 6: SVG geometry and theme tokens are local to this page -->
                                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-value:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                          <div style="width:0;height:0;overflow:visible">
                                            <div width="238" height="80" class="chart-wrapper" style="position: relative; cursor: default; width: 238px; height: 80px;">
                                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 238 80" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                                <title />
                                                <desc />
                                                <g class="chart-zIndex-layer_-100">
                                                  <g class="chart-cartesian-grid">
                                                    <g class="chart-cartesian-grid-horizontal">
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="42" x2="238" y2="42" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="4" x2="238" y2="4" />
                                                      <line stroke-dasharray="3 3" stroke="var(--ui-text-dimmed)" fill="none" x="0" y="4" width="238" height="76" x1="0" y1="80" x2="238" y2="80" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_-50" />
                                                <defs>
                                                  <clipPath id="recharts1-clip">
                                                    <rect x="0" y="4" height="76" width="238" />
                                                  </clipPath>
                                                </defs>
                                                <g class="chart-zIndex-layer_100" />
                                                <g class="chart-zIndex-layer_200" />
                                                <g class="chart-zIndex-layer_300" />
                                                <g class="chart-zIndex-layer_400">
                                                  <g class="chart-layer chart-line">
                                                    <g class="chart-layer chart-shape">
                                                      <path stroke="var(--color-value)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="76" width="238" class="chart-curve chart-line-curve" stroke-dasharray="382.6445px 382.6445007324219px" d="M0,42C5.667,46.222,11.333,50.444,17,50.444C22.667,50.444,28.333,16.667,34,16.667C39.667,16.667,45.333,37.778,51,37.778C56.667,37.778,62.333,4,68,4C73.667,4,79.333,46.222,85,46.222C90.667,46.222,96.333,25.111,102,25.111C107.667,25.111,113.333,31.444,119,31.444C124.667,31.444,130.333,18.778,136,18.778C141.667,18.778,147.333,28.278,153,31.444C158.667,34.611,164.333,37.778,170,37.778C175.667,37.778,181.333,18.778,187,18.778C192.667,18.778,198.333,42,204,42C209.667,42,215.333,20.889,221,20.889C226.667,20.889,232.333,25.111,238,29.333" />
                                                    </g>
                                                  </g>
                                                </g>
                                                <g class="chart-zIndex-layer_500" />
                                                <g class="chart-zIndex-layer_600" />
                                                <g class="chart-zIndex-layer_1000" />
                                                <g class="chart-zIndex-layer_1100" />
                                                <g class="chart-zIndex-layer_1200" />
                                                <g class="chart-zIndex-layer_2000" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                </template>
                              </UTabs>
                              <div class="mt-2 flex items-center gap-2">
                                <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default text-xs h-9 rounded-lg px-4 shadow-none" to="/ecommerce/product-detail/radiance-ritual-set">
                                  View
                                </NuxtLink>
                                <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 flex-1 rounded-lg" to="/ecommerce/edit-product/radiance-ritual-set">
                                  Edit Product
                                </NuxtLink>
                              </div>
                            </div>
                          </div>
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Radiance Boost Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Radiance Boost Serum" type="button" @click="openAction(&quot;More options for Radiance Boost Serum&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 2: Radiance Boost SerumSerum -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Radiance Boost SerumSerum" type="button" @click="openAction(&quot;Radiance Boost SerumSerum&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Radiance Boost Serum</h2>
                                <p class="text-muted mt-1 text-sm">Serum</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1hfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Daily Barrier Lotion" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Daily Barrier Lotion" type="button" @click="openAction(&quot;More options for Daily Barrier Lotion&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 3: Daily Barrier LotionMoisturizer -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Daily Barrier LotionMoisturizer" type="button" @click="openAction(&quot;Daily Barrier LotionMoisturizer&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Daily Barrier Lotion</h2>
                                <p class="text-muted mt-1 text-sm">Moisturizer</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1hvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Timeless Renewal Cream" type="button" @click="openAction(&quot;More options for Timeless Renewal Cream&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 4: Timeless Renewal CreamCream -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Timeless Renewal CreamCream" type="button" @click="openAction(&quot;Timeless Renewal CreamCream&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Timeless Renewal Cream</h2>
                                <p class="text-muted mt-1 text-sm">Cream</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1ifav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Barrier Repair Drops" type="button" @click="openAction(&quot;More options for Barrier Repair Drops&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 5: Barrier Repair DropsTreatment -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Barrier Repair DropsTreatment" type="button" @click="openAction(&quot;Barrier Repair DropsTreatment&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Barrier Repair Drops</h2>
                                <p class="text-muted mt-1 text-sm">Treatment</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1ivav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Radiant Lock Mist" type="button" @click="openAction(&quot;More options for Radiant Lock Mist&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 6: Radiant Lock MistSerum -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Radiant Lock MistSerum" type="button" @click="openAction(&quot;Radiant Lock MistSerum&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Radiant Lock Mist</h2>
                                <p class="text-muted mt-1 text-sm">Serum</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1jfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Cloud Silk Toner" type="button" @click="openAction(&quot;More options for Cloud Silk Toner&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 7: Cloud Silk TonerToner -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Cloud Silk TonerToner" type="button" @click="openAction(&quot;Cloud Silk TonerToner&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Cloud Silk Toner</h2>
                                <p class="text-muted mt-1 text-sm">Toner</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1jvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Dew Reset Essence" type="button" @click="openAction(&quot;More options for Dew Reset Essence&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 8: Dew Reset EssenceEssence -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Dew Reset EssenceEssence" type="button" @click="openAction(&quot;Dew Reset EssenceEssence&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Dew Reset Essence</h2>
                                <p class="text-muted mt-1 text-sm">Essence</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1kfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Micro Peel Serum" type="button" @click="openAction(&quot;More options for Micro Peel Serum&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 9: Micro Peel SerumSerum -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Micro Peel SerumSerum" type="button" @click="openAction(&quot;Micro Peel SerumSerum&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Micro Peel Serum</h2>
                                <p class="text-muted mt-1 text-sm">Serum</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1kvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Velvet Cleanse Balm" type="button" @click="openAction(&quot;More options for Velvet Cleanse Balm&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 10: Velvet Cleanse BalmCleanser -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Velvet Cleanse BalmCleanser" type="button" @click="openAction(&quot;Velvet Cleanse BalmCleanser&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Velvet Cleanse Balm</h2>
                                <p class="text-muted mt-1 text-sm">Cleanser</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1lfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for HydraBloom Night Cream" type="button" @click="openAction(&quot;More options for HydraBloom Night Cream&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 11: HydraBloom Night CreamCream -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="HydraBloom Night CreamCream" type="button" @click="openAction(&quot;HydraBloom Night CreamCream&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">HydraBloom Night Cream</h2>
                                <p class="text-muted mt-1 text-sm">Cream</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1lvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Overnight Recovery Mask" type="button" @click="openAction(&quot;More options for Overnight Recovery Mask&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 12: Overnight Recovery MaskMask -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Overnight Recovery MaskMask" type="button" @click="openAction(&quot;Overnight Recovery MaskMask&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Overnight Recovery Mask</h2>
                                <p class="text-muted mt-1 text-sm">Mask</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1mfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for Botanical Body Polish" type="button" @click="openAction(&quot;More options for Botanical Body Polish&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 13: Botanical Body PolishBody Care -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="Botanical Body PolishBody Care" type="button" @click="openAction(&quot;Botanical Body PolishBody Care&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">Botanical Body Polish</h2>
                                <p class="text-muted mt-1 text-sm">Body Care</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1mvav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                    <article class="mb-4 inline-block w-full break-inside-avoid rounded-xl">
                      <div class="bg-(--ui-bg-muted)/20 relative aspect-[0.9] overflow-hidden overscroll-auto rounded-t-xl">
                        <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute top-3 right-3 size-8 rounded-full bg-(--ui-bg-inverted)/20 text-inverted hover:bg-(--ui-bg-inverted)/30 hover:text-inverted" aria-label="More options for PureEssence Soap Trio" type="button" @click="openAction(&quot;More options for PureEssence Soap Trio&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="-mt-px" data-orientation="vertical">
                        <!-- Card 14: PureEssence Soap TrioSoap -->
                        <UCard data-orientation="vertical" class="group/accordion border-(--ui-border)/60 overflow-hidden overscroll-auto rounded-b-xl border-t-0" :ui="{ body: 'contents' }">
                          <h3 data-orientation="vertical" class="flex text-highlighted">
                            <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 items-start gap-3 px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:outline-hidden [&amp;&gt;svg]:hidden" aria-label="PureEssence Soap TrioSoap" type="button" @click="openAction(&quot;PureEssence Soap TrioSoap&quot;)">
                              <div class="min-w-0 flex-1 text-left">
                                <h2 class="truncate text-[1rem] font-medium tracking-tight text-highlighted">PureEssence Soap Trio</h2>
                                <p class="text-muted mt-1 text-sm">Soap</p>
                              </div>
                              <div class="text-muted mt-1 shrink-0">
                                <UIcon name="i-lucide-chevron-up" class="size-4 transition-transform duration-200 group-data-[state=closed]/accordion:rotate-180" />
                              </div>
                              <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                            </UButton>
                          </h3>
                          <div id="radix-_R_1nfav5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                        </UCard>
                      </div>
                    </article>
                  </div>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
