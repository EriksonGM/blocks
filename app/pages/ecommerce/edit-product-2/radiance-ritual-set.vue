<!-- Page: /ecommerce/edit-product-2/radiance-ritual-set | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Edit Product 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "returnableProduct": true,
  "hasVariants": true,
  "productName": "Radiance Ritual Set",
  "product2Type": "Bundle product",
  "product2Category": "Wellness",
  "productSku": "SKU-SKIN-4006",
  "barcode": "0123456789001",
  "description": "A bestselling ritual bundle with cleanser, serum, and moisturizer for daily glow maintenance.",
  "product2MediaUpload": ""
})

const product2TypeOptions = [
  "Stocked product",
  "Serialized product",
  "Bundle product"
]

const product2CategoryOptions = [
  "Skincare",
  "Wellness",
  "Body Care",
  "Female Shoes",
  "Male Shoes",
  "Sportswear"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/edit-product-2/radiance-ritual-set">
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
                <span class="text-muted">Edit Product 2</span>
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
                <div class="shrink-0 border-b px-4 py-5 sm:px-6 md:px-8 border-default">
                  <div class="mx-auto flex w-full max-w-[1180px] flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div class="flex flex-col gap-2">
                      <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Edit Product</h1>
                      <p class="text-muted max-w-3xl text-sm">Refine identity, pricing, stock rules, and units without leaving the guided setup flow.</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Test data" type="button" @click="openAction(&quot;Test data&quot;)">
                        Test data
                        <UIcon name="i-lucide-chevrons-up-down" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Save changes" type="button" @click="openAction(&quot;Save changes&quot;)">
                        Save changes
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Update product" type="button" @click="openAction(&quot;Update product&quot;)">
                        Update product
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="flex min-h-0 flex-1 flex-col xl:flex-row">
                  <main class="flex min-h-0 flex-1 flex-col overflow-hidden">
                    <div class="border-b px-4 py-3 sm:px-6 md:px-8 xl:hidden border-default">
                      <div class="mx-auto w-full max-w-4xl">
                        <!-- Card 1: 100% -->
                        <UCard class="rounded-3xl xl:hidden" :ui="{ body: 'contents' }">
                          <div class="flex flex-col gap-4 p-4">
                            <div class="flex items-center justify-between gap-3">
                              <div class="flex flex-col gap-1">
                                <p class="text-sm font-medium">Product Basics</p>
                                <p class="text-muted text-sm">Step 1</p>
                              </div>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">100%</div>
                            </div>
                            <UProgress :model-value="100" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-2" />
                          </div>
                        </UCard>
                      </div>
                    </div>
                    <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6 md:px-8">
                            <div class="flex flex-col gap-6">
                              <div class="space-y-1 px-1">
                                <h2 class="text-highlighted text-2xl font-semibold tracking-tight text-highlighted">Product Basics</h2>
                                <p class="text-muted text-base">Start with the product identity and the media your catalog team will rely on every day.</p>
                              </div>
                              <!-- Card 2: Thumbnail -->
                              <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                                <div class="p-6 pt-6">
                                  <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                                    <div class="grid gap-3 md:grid-cols-2">
                                      <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px rounded-2xl border p-4 border-default">
                                        <USwitch v-model="form.returnableProduct" aria-label="Toggle setting" />
                                        <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                          <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="returnable-product">Returnable product</label>
                                          <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Keep this enabled when post-purchase returns are allowed for the SKU family.</p>
                                        </div>
                                      </div>
                                      <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px rounded-2xl border p-4 border-default">
                                        <USwitch v-model="form.hasVariants" aria-label="Toggle setting" />
                                        <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                          <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="has-variants">Has variants</label>
                                          <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Turn this on when sizes, packs, or colorways will branch off later.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <UFormField label="Product name" name="productName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                      <UInput v-model="form.productName" type="text" placeholder="Radiance Ritual Set" name="productName" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                    </UFormField>
                                    <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 md:grid md:grid-cols-2 md:gap-4">
                                      <UFormField label="Product type" name="product2Type" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                        <USelect v-model="form.product2Type" :items="product2TypeOptions" aria-label="Bundle product" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                                      </UFormField>
                                      <UFormField label="Product category" name="product2Category" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                        <USelect v-model="form.product2Category" :items="product2CategoryOptions" aria-label="Wellness" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                                      </UFormField>
                                    </div>
                                    <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 md:grid md:grid-cols-2 md:gap-4">
                                      <UFormField label="Product SKU" name="productSku" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                        <UInput v-model="form.productSku" type="text" placeholder="SKU-RITUAL-1006" name="productSku" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                      </UFormField>
                                      <UFormField label="Barcode" name="barcode" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                        <UInput v-model="form.barcode" type="text" placeholder="0123456789001" name="barcode" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                      </UFormField>
                                    </div>
                                    <UFormField label="Description" name="description" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                      <UTextarea v-model="form.description" :rows="4" placeholder="Describe the item in a way that helps catalog, merchandising, and support teams identify it quickly." name="description" class="flex w-full rounded-md text-base md:text-sm min-h-32 resize-y" :ui="{ base: 'h-full' }" />
                                    </UFormField>
                                    <div class="flex flex-col gap-3">
                                      <div class="flex flex-col gap-1">
                                        <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label">Gallery</label>
                                        <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Keep the media stack lean. The first image becomes the thumbnail throughout the catalog.</p>
                                      </div>
                                      <div class="flex flex-col gap-4">
                                        <UInput type="file" accept="image/*" multiple="" name="product2MediaUpload" id="product-2-media-upload" class="sr-only" @change="form.product2MediaUpload = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
                                        <div class="flex flex-wrap gap-3">
                                          <div class="bg-(--ui-bg-muted)/30 relative aspect-square w-[calc(50%-0.375rem)] overflow-hidden rounded-2xl border sm:w-40 md:w-44 border-primary/40 ring-primary/15 ring-1">
                                            <img alt="Product media 1" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                              <UIcon name="i-lucide-x" class="size-4" />
                                            </UButton>
                                            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 absolute bottom-2 left-2 border-default">Thumbnail</div>
                                          </div>
                                          <div class="bg-(--ui-bg-muted)/30 relative aspect-square w-[calc(50%-0.375rem)] overflow-hidden rounded-2xl border sm:w-40 md:w-44 border-default">
                                            <img alt="Product media 2" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                              <UIcon name="i-lucide-x" class="size-4" />
                                            </UButton>
                                          </div>
                                          <div class="bg-(--ui-bg-muted)/30 relative aspect-square w-[calc(50%-0.375rem)] overflow-hidden rounded-2xl border sm:w-40 md:w-44 border-default">
                                            <img alt="Product media 3" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                              <UIcon name="i-lucide-x" class="size-4" />
                                            </UButton>
                                          </div>
                                          <div class="bg-(--ui-bg-muted)/30 relative aspect-square w-[calc(50%-0.375rem)] overflow-hidden rounded-2xl border sm:w-40 md:w-44 border-default">
                                            <img alt="Product media 4" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                              <UIcon name="i-lucide-x" class="size-4" />
                                            </UButton>
                                          </div>
                                          <label for="product-2-media-upload" class="items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 border-(--ui-text-muted)/20 text-muted hover:bg-(--ui-bg-muted)/40 hover:text-highlighted flex aspect-square h-auto w-[calc(50%-0.375rem)] flex-col gap-2 rounded-2xl border border-dashed sm:w-40 md:w-44 border-default" type="button">
                                            <UIcon name="i-lucide-gallery-horizontal" class="size-4" />
                                            <span class="text-sm font-medium">Add images</span>
                                          </label>
                                        </div>
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
                    <footer class="bg-default shrink-0 border-t border-default">
                      <div class="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
                        <div class="flex items-center gap-3 text-sm">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">Step 1</div>
                          <span class="text-muted">Product Basics</span>
                        </div>
                        <div class="flex flex-wrap items-center gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Previous" type="button" disabled @click="openAction(&quot;Previous&quot;)">
                            Previous
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Next" type="button" @click="openAction(&quot;Next&quot;)">
                            Next
                          </UButton>
                        </div>
                      </div>
                    </footer>
                  </main>
                  <aside class="bg-(--ui-bg-muted)/30 hidden shrink-0 flex-col border-l xl:flex xl:w-72 border-default">
                    <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="p-6">
                            <div class="flex flex-col">
                              <div class="space-y-2">
                                <div class="flex items-center justify-between text-sm">
                                  <span class="text-muted">Progress</span>
                                  <span class="font-medium">100%</span>
                                </div>
                                <UProgress :model-value="100" color="primary" size="sm" class="bg-primary/20 relative w-full overflow-hidden rounded-full h-2" />
                                <div class="text-muted flex items-center justify-between text-xs">
                                  <span>4 of 4 steps complete</span>
                                  <span>Changes saved</span>
                                </div>
                              </div>
                              <nav aria-label="Product form steps" class="mt-6 flex flex-col gap-3">
                                <div class="flex gap-3">
                                  <div class="flex flex-col items-center">
                                    <UButton color="primary" variant="solid" class="flex size-9 items-center justify-center rounded-full border transition-colors border-primary bg-primary text-inverted" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                      <UIcon name="i-lucide-check" class="size-4" />
                                    </UButton>
                                    <div class="mt-2 h-8 w-px bg-primary/40" />
                                  </div>
                                  <UButton color="neutral" variant="ghost" class="flex min-w-0 flex-1 flex-col items-start rounded-xl px-1 py-1 text-left transition-colors hover:text-highlighted" aria-label="Step 1Product Basics" type="button" @click="openAction(&quot;Step 1Product Basics&quot;)">
                                    <span class="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">Step 1</span>
                                    <span class="text-sm font-medium text-highlighted">Product Basics</span>
                                  </UButton>
                                </div>
                                <div class="flex gap-3">
                                  <div class="flex flex-col items-center">
                                    <UButton color="neutral" variant="outline" class="flex size-9 items-center justify-center rounded-full border transition-colors border-primary/20 bg-primary/10 text-primary" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                      <UIcon name="i-lucide-check" class="size-4" />
                                    </UButton>
                                    <div class="mt-2 h-8 w-px bg-primary/40" />
                                  </div>
                                  <UButton color="neutral" variant="ghost" class="flex min-w-0 flex-1 flex-col items-start rounded-xl px-1 py-1 text-left transition-colors hover:text-highlighted" aria-label="Step 2Pricing Model" type="button" @click="openAction(&quot;Step 2Pricing Model&quot;)">
                                    <span class="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">Step 2</span>
                                    <span class="text-sm font-medium text-muted">Pricing Model</span>
                                  </UButton>
                                </div>
                                <div class="flex gap-3">
                                  <div class="flex flex-col items-center">
                                    <UButton color="neutral" variant="outline" class="flex size-9 items-center justify-center rounded-full border transition-colors border-primary/20 bg-primary/10 text-primary" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                      <UIcon name="i-lucide-check" class="size-4" />
                                    </UButton>
                                    <div class="mt-2 h-8 w-px bg-primary/40" />
                                  </div>
                                  <UButton color="neutral" variant="ghost" class="flex min-w-0 flex-1 flex-col items-start rounded-xl px-1 py-1 text-left transition-colors hover:text-highlighted" aria-label="Step 3Inventory Rules" type="button" @click="openAction(&quot;Step 3Inventory Rules&quot;)">
                                    <span class="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">Step 3</span>
                                    <span class="text-sm font-medium text-muted">Inventory Rules</span>
                                  </UButton>
                                </div>
                                <div class="flex gap-3">
                                  <div class="flex flex-col items-center">
                                    <UButton color="neutral" variant="outline" class="flex size-9 items-center justify-center rounded-full border transition-colors border-primary/20 bg-primary/10 text-primary" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                      <UIcon name="i-lucide-check" class="size-4" />
                                    </UButton>
                                  </div>
                                  <UButton color="neutral" variant="ghost" class="flex min-w-0 flex-1 flex-col items-start rounded-xl px-1 py-1 text-left transition-colors hover:text-highlighted" aria-label="Step 4Dimensions &amp; Units" type="button" @click="openAction(&quot;Step 4Dimensions & Units&quot;)">
                                    <span class="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">Step 4</span>
                                    <span class="text-sm font-medium text-muted">Dimensions &amp; Units</span>
                                  </UButton>
                                </div>
                              </nav>
                              <div class="mt-6">
                                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full" aria-label="Reset changes" type="button" @click="openAction(&quot;Reset changes&quot;)">
                                  Reset changes
                                </UButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
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
