<!-- Page: /ecommerce/edit-product/radiant-lock-mist | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Edit Product · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "productThumbnailUpload": "",
  "name": "Radiant Lock Mist",
  "sku": "SKU-SERUM-7811",
  "barcode": "0123456789003",
  "description": "A lightweight finishing mist that locks hydration in and keeps makeup fresh through the day.",
  "productMediaUpload": "",
  "variantOption0": "Size",
  "variants0Value": "100 ml",
  "variants0Price": "69.00",
  "variants0Quantity": "67",
  "variantOption1": "Bundle",
  "variants1Value": "Twin pack",
  "variants1Price": "129.00",
  "variants1Quantity": "20",
  "basePrice": "69.00",
  "discountedPrice": "59.00",
  "currency": "USD",
  "chargeTax": true,
  "inStock": true,
  "productStatus": "Active",
  "vendor": "Acme Retail",
  "productCategory": "Skin care",
  "productSubcategory": "Serums",
  "tags": "mist, daily care, hydration"
})

const variantOption0Options = [
  "Size"
]

const variantOption1Options = [
  "Bundle"
]

const currencyOptions = [
  "USD",
  "EUR",
  "GBP"
]

const productStatusOptions = [
  "Draft",
  "Active",
  "Scheduled"
]

const productCategoryOptions = [
  "Skin care",
  "Body care",
  "Wellness"
]

const productSubcategoryOptions = [
  "Serums",
  "Creams",
  "Cleansers"
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/edit-product/radiant-lock-mist">
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
                <span class="text-muted">Edit Product</span>
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
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
              <div class="flex min-h-0 flex-1 flex-col overflow-auto p-4 sm:p-6 md:p-8">
                <div class="mx-auto flex w-full max-w-[1240px] flex-col gap-6 pb-8">
                  <header class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center gap-3 text-sm md:hidden">
                        <span class="text-highlighted font-medium">Products</span>
                        <span class="text-muted">/</span>
                        <span class="text-muted">Edit Product</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Edit Product</h1>
                        <p class="text-muted text-sm">Update pricing, media, availability, and variant data without leaving the catalog flow.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Reset" type="button" @click="openAction(&quot;Reset&quot;)">
                        Reset
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                        Save draft
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" form="add-product-form" aria-label="Update product" type="submit">
                        Update product
                      </UButton>
                    </div>
                  </header>
                  <!-- Form: controls and draft state are declared in this page -->
                  <UForm :state="form" @submit="saveForm" id="add-product-form" class="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.78fr)]">
                    <div class="flex flex-col gap-6">
                      <!-- Card 1: Product Info -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Product Info</div>
                          <div class="text-muted text-sm">Set the essentials customers need to identify and trust this item.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <fieldset data-slot="field-set" class="flex flex-col has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3 gap-4">
                              <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base">Thumbnail</legend>
                              <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px items-start">
                                <div class="relative">
                                  <UInput type="file" accept="image/*" name="productThumbnailUpload" id="product-thumbnail-upload" class="sr-only" @change="form.productThumbnailUpload = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
                                  <div class="bg-(--ui-bg-muted)/30 relative size-20 overflow-hidden rounded-2xl border border-default">
                                    <img alt="Radiant Lock Mist thumbnail" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                  </div>
                                  <label for="product-thumbnail-upload" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-default hover:bg-(--ui-bg-elevated)/80 bg-default absolute right-1 bottom-1 size-7 rounded-full border shadow-sm border-default" type="button">
                                    <UIcon name="i-lucide-camera" class="size-4" />
                                  </label>
                                </div>
                                <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                  <div class="flex flex-col gap-1">
                                    <p class="text-sm font-medium">Product thumbnail</p>
                                    <p class="text-muted text-xs">JPG or PNG. Keep it square and at least 1000 by 1000 pixels.</p>
                                  </div>
                                  <div class="flex flex-wrap gap-2 pt-2">
                                    <label for="product-thumbnail-upload" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2" type="button">Replace image</label>
                                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Remove" type="button" @click="openAction(&quot;Remove&quot;)">
                                      Remove
                                    </UButton>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <UFormField label="Name" name="name" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.name" type="text" placeholder="Shirt, t-shirts, etc." name="name" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 md:grid md:grid-cols-2 md:gap-4">
                              <UFormField label="SKU" name="sku" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <UInput v-model="form.sku" type="text" placeholder="eg. 348121032" name="sku" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              </UFormField>
                              <UFormField label="Barcode" name="barcode" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <UInput v-model="form.barcode" type="text" placeholder="0123456789012" name="barcode" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              </UFormField>
                            </div>
                            <UFormField label="Description" name="description" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UTextarea v-model="form.description" :rows="4" placeholder="Set a description to the product for better visibility." name="description" class="flex w-full rounded-md text-base md:text-sm min-h-32 resize-y" :ui="{ base: 'h-full' }" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">A concise summary helps merchants and customers scan the catalog faster.</p>
                            </UFormField>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 2: Media -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="space-y-1.5 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div class="flex flex-col gap-1">
                            <div class="leading-none font-semibold tracking-tight">Media</div>
                            <div class="text-muted text-sm">Showcase the product from multiple angles before publishing.</div>
                          </div>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="flex flex-col gap-4">
                            <UInput type="file" accept="image/*" multiple="" name="productMediaUpload" id="product-media-upload" class="sr-only" @change="form.productMediaUpload = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
                            <div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                              <div class="bg-(--ui-bg-muted)/30 relative aspect-square overflow-hidden rounded-2xl border md:col-span-2 md:row-span-2 md:aspect-auto border-default">
                                <img alt="Product media 1" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                  <UIcon name="i-lucide-x" class="size-4" />
                                </UButton>
                              </div>
                              <div class="bg-(--ui-bg-muted)/30 relative aspect-square overflow-hidden rounded-2xl border border-default">
                                <img alt="Product media 2" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                  <UIcon name="i-lucide-x" class="size-4" />
                                </UButton>
                              </div>
                              <div class="bg-(--ui-bg-muted)/30 relative aspect-square overflow-hidden rounded-2xl border border-default">
                                <img alt="Product media 3" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8860774233f09616.jpg" loading="lazy" />
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                  <UIcon name="i-lucide-x" class="size-4" />
                                </UButton>
                              </div>
                              <div class="bg-(--ui-bg-muted)/30 relative aspect-square overflow-hidden rounded-2xl border border-default">
                                <img alt="Product media 4" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 absolute top-2 right-2 size-7 rounded-full shadow-sm" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                  <UIcon name="i-lucide-x" class="size-4" />
                                </UButton>
                              </div>
                              <label for="product-media-upload" class="items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 border-(--ui-text-muted)/20 text-muted hover:text-highlighted hover:bg-(--ui-bg-muted)/40 flex aspect-square h-auto flex-col gap-2 rounded-2xl border border-dashed border-default" type="button">
                                <UIcon name="i-lucide-image-plus" class="size-4" />
                                <span class="text-sm font-medium">Add images</span>
                              </label>
                            </div>
                            <div class="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between border-default">
                              <p class="text-muted text-sm">4 of 5 media assets selected.</p>
                              <div class="flex flex-wrap gap-2">
                                <label for="product-media-upload" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" type="button">
                                  <UIcon name="i-lucide-upload" class="size-4" />
                                  Add more images
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 3: Variants -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Variants</div>
                          <div class="text-muted text-sm">Configure alternate sizes, bundles, or colors with their own inventory.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <fieldset data-slot="field-set" class="flex flex-col has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3 gap-4">
                            <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-4">
                              <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 rounded-2xl border p-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_120px_120px_auto] lg:items-end lg:gap-3 border-default">
                                <UFormField label="Option" name="variantOption0" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <USelect v-model="form.variantOption0" :items="variantOption0Options" aria-label="Size" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                                </UFormField>
                                <UFormField label="Value" name="variants0Value" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <UInput v-model="form.variants0Value" type="text" placeholder="50 ml" name="variants0Value" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                </UFormField>
                                <UFormField label="Price" name="variants0Price" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                    <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                      <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">USD</span>
                                    </div>
                                    <UInput v-model="form.variants0Price" type="text" data-slot="input-group-control" placeholder="45.00" name="variants0Price" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  </div>
                                </UFormField>
                                <UFormField label="Quantity" name="variants0Quantity" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <UInput v-model="form.variants0Quantity" type="text" placeholder="0" name="variants0Quantity" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                </UFormField>
                                <div class="flex items-end justify-end">
                                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9" aria-label="Remove variant row 1" type="button" @click="openAction(&quot;Remove variant row 1&quot;)">
                                    <UIcon name="i-lucide-x" class="size-4" />
                                  </UButton>
                                </div>
                              </div>
                              <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 rounded-2xl border p-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_120px_120px_auto] lg:items-end lg:gap-3 border-default">
                                <UFormField label="Option" name="variantOption1" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <USelect v-model="form.variantOption1" :items="variantOption1Options" aria-label="Bundle" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                                </UFormField>
                                <UFormField label="Value" name="variants1Value" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <UInput v-model="form.variants1Value" type="text" placeholder="50 ml" name="variants1Value" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                </UFormField>
                                <UFormField label="Price" name="variants1Price" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                    <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                      <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">USD</span>
                                    </div>
                                    <UInput v-model="form.variants1Price" type="text" data-slot="input-group-control" placeholder="45.00" name="variants1Price" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  </div>
                                </UFormField>
                                <UFormField label="Quantity" name="variants1Quantity" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <UInput v-model="form.variants1Quantity" type="text" placeholder="0" name="variants1Quantity" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                </UFormField>
                                <div class="flex items-end justify-end">
                                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9" aria-label="Remove variant row 2" type="button" @click="openAction(&quot;Remove variant row 2&quot;)">
                                    <UIcon name="i-lucide-x" class="size-4" />
                                  </UButton>
                                </div>
                              </div>
                            </div>
                            <div class="flex justify-start">
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Add variant" type="button" @click="openAction(&quot;Add variant&quot;)">
                                <UIcon name="i-lucide-circle-plus" class="size-4" />
                                Add variant
                              </UButton>
                            </div>
                          </fieldset>
                        </div>
                      </UCard>
                    </div>
                    <div class="bg-(--ui-bg-muted)/35 flex flex-col gap-4 rounded-[28px] border border-dashed p-3 xl:self-start border-default">
                      <div class="text-default border bg-(--ui-bg)/95 border-(--ui-border)/80 rounded-2xl shadow-sm border-default">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Pricing</div>
                          <div class="text-muted text-sm">Set pricing, taxes, and live availability for this listing.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Base price" name="basePrice" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                  <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">USD</span>
                                </div>
                                <UInput v-model="form.basePrice" type="text" data-slot="input-group-control" placeholder="45.00" name="basePrice" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                              </div>
                            </UFormField>
                            <UFormField label="Discounted price" name="discountedPrice" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                  <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">USD</span>
                                </div>
                                <UInput v-model="form.discountedPrice" type="text" data-slot="input-group-control" placeholder="39.00" name="discountedPrice" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                              </div>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Leave empty to sell at the base price.</p>
                            </UFormField>
                            <UFormField label="Currency" name="currency" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.currency" :items="currencyOptions" aria-label="USD" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                            </UFormField>
                            <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px items-start">
                              <UCheckbox v-model="form.chargeTax" aria-label="Toggle setting" />
                              <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="charge-tax">Charge tax on this product</label>
                                <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Apply the default checkout tax rules automatically.</p>
                              </div>
                            </div>
                            <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                              <USwitch v-model="form.inStock" aria-label="Toggle setting" />
                              <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="in-stock">In stock</label>
                                <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Turn this off to keep the product visible but unavailable.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-default border bg-(--ui-bg)/95 border-(--ui-border)/80 rounded-2xl shadow-sm border-default">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Status</div>
                          <div class="text-muted text-sm">Choose when the new product should appear in the storefront.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Status" name="productStatus" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.productStatus" :items="productStatusOptions" aria-label="Active" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Draft keeps the product private until your review is done.</p>
                            </UFormField>
                          </div>
                        </div>
                      </div>
                      <div class="text-default border bg-(--ui-bg)/95 border-(--ui-border)/80 rounded-2xl shadow-sm border-default">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Organization</div>
                          <div class="text-muted text-sm">Group the product so your catalog stays searchable and tidy.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Vendor" name="vendor" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.vendor" type="text" placeholder="eg. Nike" name="vendor" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <UFormField label="Category" name="productCategory" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.productCategory" :items="productCategoryOptions" aria-label="Skin care" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                            </UFormField>
                            <UFormField label="Sub category" name="productSubcategory" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.productSubcategory" :items="productSubcategoryOptions" aria-label="Serums" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                            </UFormField>
                            <UFormField label="Tags" name="tags" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.tags" type="text" placeholder="hero launch, new arrival" name="tags" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Separate tags with commas to improve internal discovery.</p>
                            </UFormField>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UForm>
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
