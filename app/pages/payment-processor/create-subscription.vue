<!-- Page: /payment-processor/create-subscription | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Create Subscription · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "productName": "Shadcnblocks Pro",
  "brand": "Shadcnblocks",
  "taxCategory": "Saas subscription",
  "productDescription": "Production-ready admin blocks, payment views, and product updates for growing teams.",
  "subscriptionProductImage": "",
  "price": "29",
  "price2": "USD$",
  "seatsQuantity": "3",
  "trialDays": "14",
  "discount": "10",
  "tax": "10",
  "setupFee": "49",
  "collectPaymentMethod": true,
  "allowCoupons": true
})

const brandOptions = [
  "Shadcnblocks",
  "Zerostatic"
]

const taxCategoryOptions = [
  "Digital products",
  "Saas subscription",
  "Professional services"
]

const price2Options = [
  "USD $",
  "EUR €",
  "GBP £",
  "INR ₹",
  "SGD $"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/create-subscription">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-y-auto pb-28">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <section>
                <div class="grid gap-7 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_25rem]">
                  <div class="grid gap-7">
                    <header>
                      <div class="mt-1 flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <h1 class="text-xl font-semibold tracking-tight text-highlighted">New Subscription</h1>
                          <p class="text-muted text-sm">Create new subscription product</p>
                        </div>
                        <p class="text-muted text-[13px]">Saved few seconds ago</p>
                      </div>
                    </header>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Basic Details</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <div data-slot="field-group" class="group/field-group @container/field-group w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <UFormField label="Product Name" name="productName" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-4">
                          <UInput v-model="form.productName" type="text" placeholder="Eg: Growth workspace" name="productName" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <UFormField label="Brand" name="brand" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-3">
                          <USelect v-model="form.brand" :items="brandOptions" aria-label="Shadcnblocks" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 px-3 text-sm md:text-sm" />
                        </UFormField>
                        <UFormField label="Tax Category" name="taxCategory" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-3">
                          <USelect v-model="form.taxCategory" :items="taxCategoryOptions" aria-label="Saas subscription" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 px-3 text-sm md:text-sm" />
                        </UFormField>
                      </div>
                    </section>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Media &amp; Description</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <div data-slot="field-group" class="group/field-group @container/field-group w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <UFormField label="Product Description" name="productDescription" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 col-span-full">
                          <UTextarea v-model="form.productDescription" :rows="4" placeholder="Describe what subscribers receive." name="productDescription" class="flex w-full rounded-md min-h-24 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 col-span-full">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col text-muted text-[11px] font-bold tracking-wide uppercase" data-slot="field-label">Product Image</label>
                          <div class="grid gap-3">
                            <UInput type="file" accept="image/png,image/jpeg,image/webp" name="subscriptionProductImage" id="subscription-product-image" class="sr-only" @change="form.subscriptionProductImage = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
                            <label class="border-default bg-(--ui-bg-muted)/20 hover:bg-(--ui-bg-muted)/35 flex min-h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-dashed px-4 text-center transition-colors" for="subscription-product-image">
                              <span class="bg-default grid size-10 place-items-center rounded-full border border-default">
                                <UIcon name="i-lucide-image-plus" class="text-muted size-5" />
                              </span>
                              <span class="grid gap-1">
                                <span class="text-sm font-medium">Select product image</span>
                                <span class="text-muted text-xs">PNG, JPG or WEBP up to 3MB</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Pricing</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <div data-slot="field-group" class="group/field-group @container/field-group w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <div class="col-span-full grid gap-x-6 gap-y-5 sm:grid-cols-6">
                          <UFormField label="Price" name="price" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-3">
                            <div class="grid grid-cols-[minmax(0,1fr)_6.75rem]">
                              <UInput v-model="form.price" type="text" name="price" class="flex w-full rounded-md h-9 text-sm md:text-sm rounded-r-none" :ui="{ base: 'h-full' }" />
                              <USelect v-model="form.price2" :items="price2Options" aria-label="USD$" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 px-3 text-sm md:text-sm rounded-l-none border-l-0" />
                            </div>
                          </UFormField>
                          <UFormField label="Seats / Quantity" name="seatsQuantity" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-3">
                            <UInput v-model="form.seatsQuantity" type="text" name="seatsQuantity" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                        </div>
                        <div class="col-span-full grid gap-x-6 gap-y-5 sm:grid-cols-4">
                          <UFormField label="Trial Days" name="trialDays" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-2">
                            <UInput v-model="form.trialDays" type="text" name="trialDays" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Discount %" name="discount" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-2">
                            <UInput v-model="form.discount" type="text" name="discount" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Tax %" name="tax" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-2">
                            <UInput v-model="form.tax" type="text" name="tax" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Setup Fee" name="setupFee" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2 sm:col-span-2">
                            <UInput v-model="form.setupFee" type="text" name="setupFee" class="flex w-full rounded-md h-9 text-sm md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                        </div>
                      </div>
                    </section>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Billing</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        <span class="text-muted shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase">recurring</span>
                      </div>
                      <div data-slot="field-group" class="group/field-group @container/field-group w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <fieldset data-slot="field-set" class="flex flex-col has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3 col-span-full gap-3">
                          <div role="radiogroup" class="grid gap-3 sm:grid-cols-3" style="outline:none">
                            <UButton color="neutral" variant="outline" aria-checked="true" class="hover:bg-(--ui-bg-muted)/25 focus-visible:ring-accented flex min-h-16 w-full cursor-pointer items-center justify-between gap-3 rounded-md border px-4 py-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-(--ui-text-highlighted)/50 bg-(--ui-bg-muted)/30 shadow-sm border-default" aria-label="MonthlyEvery month" type="button" @click="openAction(&quot;MonthlyEvery month&quot;)">
                              <span class="min-w-0">
                                <span class="block text-sm font-semibold">Monthly</span>
                                <span class="text-muted mt-0.5 block text-xs">Every month</span>
                              </span>
                            </UButton>
                            <UButton color="neutral" variant="outline" aria-checked="false" class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/25 focus-visible:ring-accented flex min-h-16 w-full cursor-pointer items-center justify-between gap-3 rounded-md border px-4 py-3 text-left shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-default" aria-label="QuarterlyEvery 3 months" type="button" @click="openAction(&quot;QuarterlyEvery 3 months&quot;)">
                              <span class="min-w-0">
                                <span class="block text-sm font-semibold">Quarterly</span>
                                <span class="text-muted mt-0.5 block text-xs">Every 3 months</span>
                              </span>
                            </UButton>
                            <UButton color="neutral" variant="outline" aria-checked="false" class="border-(--ui-border)/70 bg-default hover:bg-(--ui-bg-muted)/25 focus-visible:ring-accented flex min-h-16 w-full cursor-pointer items-center justify-between gap-3 rounded-md border px-4 py-3 text-left shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-default" aria-label="YearlyEvery year" type="button" @click="openAction(&quot;YearlyEvery year&quot;)">
                              <span class="min-w-0">
                                <span class="block text-sm font-semibold">Yearly</span>
                                <span class="text-muted mt-0.5 block text-xs">Every year</span>
                              </span>
                            </UButton>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Entitlements</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        <span class="text-muted shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase">3 selected</span>
                      </div>
                      <div class="border-(--ui-border)/70 bg-default grid gap-4 rounded-md border p-4 border-default">
                        <div class="flex items-center justify-between gap-3">
                          <div class="flex items-center gap-3">
                            <span class="border-default bg-(--ui-bg-muted)/30 text-muted grid size-9 place-items-center rounded-md border">
                              <UIcon name="i-lucide-package-check" class="size-4" />
                            </span>
                            <p class="text-sm font-semibold text-highlighted">Access &amp; Assets</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                            <UIcon name="i-lucide-plus" class="size-4" />
                          </UButton>
                        </div>
                        <div class="flex flex-wrap gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none border-(--ui-text-highlighted)/60 bg-muted text-highlighted border-default" aria-label="Discord Access" type="button" @click="openAction(&quot;Discord Access&quot;)">
                            <UIcon name="i-lucide-shield-check" class="size-4" />
                            <span>Discord Access</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none border-(--ui-text-highlighted)/60 bg-muted text-highlighted border-default" aria-label="Github Access" type="button" @click="openAction(&quot;Github Access&quot;)">
                            <UIcon name="i-lucide-key-round" class="size-4" />
                            <span>Github Access</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none" aria-label="Telegram Access" type="button" @click="openAction(&quot;Telegram Access&quot;)">
                            <UIcon name="i-lucide-mail" class="size-4" />
                            <span>Telegram Access</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none" aria-label="License key" type="button" @click="openAction(&quot;License key&quot;)">
                            <UIcon name="i-lucide-key-round" class="size-4" />
                            <span>License key</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none border-(--ui-text-highlighted)/60 bg-muted text-highlighted border-default" aria-label="Digital Files" type="button" @click="openAction(&quot;Digital Files&quot;)">
                            <UIcon name="i-lucide-upload" class="size-4" />
                            <span>Digital Files</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none" aria-label="Notion Template" type="button" @click="openAction(&quot;Notion Template&quot;)">
                            <UIcon name="i-lucide-file-text" class="size-4" />
                            <span>Notion Template</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs justify-start gap-2 shadow-none" aria-label="Framer Template" type="button" @click="openAction(&quot;Framer Template&quot;)">
                            <UIcon name="i-lucide-sparkles" class="size-4" />
                            <span>Framer Template</span>
                          </UButton>
                        </div>
                      </div>
                    </section>
                    <section class="border-(--ui-border)/70 grid gap-6 pb-8">
                      <div class="flex min-w-0 items-center gap-3">
                        <h2 class="text-highlighted shrink-0 text-base font-semibold text-highlighted">Checkout Rules</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <div data-slot="field-group" class="group/field-group @container/field-group w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <fieldset data-slot="field-set" class="flex flex-col has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3 col-span-full gap-3 pt-1">
                          <div class="grid gap-2 sm:grid-cols-2">
                            <label class="flex cursor-pointer items-center gap-3 rounded-md py-1.5" for="collect-payment-method">
                              <UCheckbox v-model="form.collectPaymentMethod" aria-label="Toggle setting" />
                              <span class="text-sm font-medium">Collect payment method</span>
                            </label>
                            <label class="flex cursor-pointer items-center gap-3 rounded-md py-1.5" for="allow-coupons">
                              <UCheckbox v-model="form.allowCoupons" aria-label="Toggle setting" />
                              <span class="text-sm font-medium">Allow discount codes</span>
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <aside class="min-w-0 lg:sticky lg:top-12 lg:self-start">
                    <section class="border-(--ui-border)/80 rounded-lg border bg-[color-mix(in_oklch,var(--ui-bg-muted)_55%,var(--ui-bg))] p-2 border-default">
                      <!-- Card 1: Shadcnblocks Pro -->
                      <UCard class="ring-(--ui-border)/80 relative overflow-hidden rounded-md shadow-[0_14px_42px_-30px_color-mix(in_oklch,var(--ui-text-highlighted)_30%,transparent)] ring-1" :ui="{ body: 'contents' }">
                        <div class="mt-3 grid gap-4 p-4">
                          <div class="grid gap-1">
                            <div class="flex items-center">
                              <h3 class="min-w-0 text-base font-semibold tracking-tight text-highlighted">Shadcnblocks Pro</h3>
                            </div>
                            <p class="text-muted text-xs leading-5">Production-ready admin blocks, payment views, and product updates for growing teams.</p>
                          </div>
                          <div class="rounded-md bg-[color-mix(in_oklch,var(--ui-bg-muted)_52%,var(--ui-bg))] p-3 py-4">
                            <div class="flex items-baseline gap-1.5">
                              <span class="text-2xl font-semibold tracking-tight tabular-nums">$29.00</span>
                              <span class="text-muted text-xs">/ monthly</span>
                            </div>
                            <div class="text-muted mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                              <span>3 seats</span>
                              <span>Every month</span>
                              <span>14 day trial</span>
                            </div>
                          </div>
                          <div class="border-default -mx-4 border-y px-4 py-4">
                            <div class="flex items-center justify-between gap-4">
                              <p class="text-muted text-xs font-medium">Have a discount code?</p>
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-xs" aria-label="Apply discount code" type="button" @click="openAction(&quot;Apply discount code&quot;)">
                                Apply discount code
                              </UButton>
                            </div>
                          </div>
                          <div class="grid gap-3">
                            <div class="flex items-center justify-between gap-4">
                              <span class="text-muted text-xs">Subtotal</span>
                              <span class="text-right text-xs font-semibold tabular-nums">$87.00</span>
                            </div>
                            <div class="flex items-center justify-between gap-4">
                              <span class="text-muted text-xs">Discount</span>
                              <span class="text-right text-xs font-semibold tabular-nums">-$8.70</span>
                            </div>
                            <div class="flex items-center justify-between gap-4">
                              <span class="text-muted text-xs">Setup fee</span>
                              <span class="text-right text-xs font-semibold tabular-nums">$49.00</span>
                            </div>
                            <div class="flex items-center justify-between gap-4">
                              <span class="text-muted text-xs">Tax (10%)</span>
                              <span class="text-right text-xs font-semibold tabular-nums">$12.73</span>
                            </div>
                            <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            <div class="flex items-center justify-between gap-4">
                              <span class="text-muted text-xs">Due after trial</span>
                              <span class="text-right text-xs font-semibold tabular-nums">$140.03</span>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="grid gap-3 p-4 text-xs">
                          <div class="flex items-start gap-2">
                            <UIcon name="i-lucide-calendar-clock" class="text-muted mt-0.5 size-3.5" />
                            <p class="text-muted leading-5">Trial for 14 days, then renews monthly.</p>
                          </div>
                          <div class="flex items-start gap-2">
                            <UIcon name="i-lucide-credit-card" class="text-muted mt-0.5 size-3.5" />
                            <p class="text-muted leading-5">Payment method required at checkout.</p>
                          </div>
                        </div>
                      </UCard>
                    </section>
                  </aside>
                </div>
              </section>
            </div>
          </div>
          <footer class="bg-default before:from-(--ui-bg) after:border-(--ui-border)/70 absolute inset-x-0 bottom-0 z-10 shrink-0 before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-8 before:bg-linear-to-t before:to-transparent before:opacity-[var(--footer-veil-opacity)] before:transition-opacity after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:border-t after:opacity-[var(--footer-veil-opacity)] after:transition-opacity border-default" style="--footer-veil-opacity: 1;">
            <div class="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 xl:grid-cols-[minmax(0,1fr)_25rem]">
              <div class="flex flex-wrap items-center gap-2 sm:justify-end lg:col-start-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                  <UIcon name="i-lucide-check" class="size-4" />
                  Save draft
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-9 rounded-md px-5" aria-label="Create subscription" type="button" @click="openAction(&quot;Create subscription&quot;)">
                  Create subscription
                </UButton>
              </div>
            </div>
          </footer>
        </main>
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
