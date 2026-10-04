<!-- Page: /ecommerce/add-shipping | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Create Shipping Label · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "carrierService": "Select carrier",
  "serviceType": "Select service",
  "shippingInsurance": "No coverage",
  "packageName": "",
  "itemWeight": "",
  "packageType": "Select package type",
  "packageWeight": "",
  "packageLength": "",
  "packageWidth": "",
  "packageHeight": "",
  "enabled": false,
  "deliveryNotes": "",
  "enabled2": false
})

const carrierServiceOptions = [
  "United States Postal Service",
  "UPS",
  "FedEx",
  "DHL Express"
]

const serviceTypeOptions = [
  "Priority Mail",
  "Ground Advantage",
  "Express Saver",
  "2-Day Air"
]

const shippingInsuranceOptions = [
  "No coverage",
  "Cover up to $100",
  "Cover up to $250",
  "Cover up to $500"
]

const packageTypeOptions = [
  "Box",
  "Mailer",
  "Tube"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/add-shipping">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Shipments</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Create Shipping Label</span>
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
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-4 sm:p-6 md:p-8">
                <div class="mx-auto flex w-full max-w-[1320px] flex-col gap-6 pb-8">
                  <header class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center gap-3 text-sm md:hidden">
                        <span class="text-highlighted font-medium">Shipments</span>
                        <span class="text-muted">/</span>
                        <span class="text-muted">Create Shipping Label</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Create Shipping Label</h1>
                        <p class="text-muted text-sm">Start a new label draft with carrier, package, and dispatch details.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Reset" type="button" @click="openAction(&quot;Reset&quot;)">
                        Reset
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                        Save draft
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" form="add-shipping-form" aria-label="Create Label" type="submit">
                        Create Label
                      </UButton>
                    </div>
                  </header>
                  <!-- Card 1: No order linked yet -->
                  <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                    <div class="flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between">
                      <div class="flex min-w-0 flex-col gap-1">
                        <p class="text-base font-medium">New shipping draft</p>
                        <p class="text-muted max-w-2xl text-sm">Start without a linked order and lock carrier, package, and dispatch details as they become available.</p>
                      </div>
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md px-3 py-1 border-default">No order linked yet</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 border-default">Choose a carrier</div>
                        <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 border-default">Set package specs</div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Form: controls and draft state are declared in this page -->
                  <UForm :state="form" @submit="saveForm" id="add-shipping-form" class="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.78fr)]">
                    <div class="flex flex-col gap-6">
                      <!-- Card 2: Delivery Setup -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Delivery Setup</div>
                          <div class="text-muted text-sm">Pick the lane, speed, and protection level for this parcel.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <div class="grid gap-4 md:grid-cols-2">
                              <UFormField label="Carrier Lane" name="carrierService" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.carrierService" :items="carrierServiceOptions" aria-label="Select carrier" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              </UFormField>
                              <UFormField label="Service Speed" name="serviceType" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.serviceType" :items="serviceTypeOptions" aria-label="Select service" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              </UFormField>
                            </div>
                            <UFormField label="Protection Plan" name="shippingInsurance" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.shippingInsurance" :items="shippingInsuranceOptions" aria-label="No coverage" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Add parcel protection only when the order needs coverage.</p>
                            </UFormField>
                          </div>
                        </div>
                      </UCard>
                      <section class="flex flex-col gap-6 py-1">
                        <div class="flex flex-col gap-4">
                          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div class="flex flex-col gap-1">
                              <h2 class="text-xl font-semibold tracking-tight text-highlighted">Package Details</h2>
                              <p class="text-muted text-sm">Set the packed weight, carton choice, and outer dimensions for this shipment.</p>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col gap-6">
                          <div class="grid gap-4 md:grid-cols-2">
                            <UFormField label="Package Name" name="packageName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.packageName" type="text" placeholder="Retail carton" name="packageName" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <UFormField label="Item Weight" name="itemWeight" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                <UInput v-model="form.itemWeight" type="text" data-slot="input-group-control" placeholder="2.5" name="itemWeight" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                                  <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">kg</span>
                                </div>
                              </div>
                            </UFormField>
                          </div>
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <div class="grid gap-4 md:grid-cols-2">
                              <UFormField label="Package Type" name="packageType" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.packageType" :items="packageTypeOptions" aria-label="Select package type" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              </UFormField>
                              <UFormField label="Total Weight" name="packageWeight" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                  <UInput v-model="form.packageWeight" type="text" data-slot="input-group-control" placeholder="0.45" name="packageWeight" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">kg</span>
                                  </div>
                                </div>
                              </UFormField>
                            </div>
                            <div class="grid gap-4 pt-1 md:grid-cols-3">
                              <UFormField label="Length" name="packageLength" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">L</span>
                                  </div>
                                  <UInput v-model="form.packageLength" type="text" data-slot="input-group-control" placeholder="45" name="packageLength" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">cm</span>
                                  </div>
                                </div>
                              </UFormField>
                              <UFormField label="Width" name="packageWidth" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">W</span>
                                  </div>
                                  <UInput v-model="form.packageWidth" type="text" data-slot="input-group-control" placeholder="35" name="packageWidth" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">cm</span>
                                  </div>
                                </div>
                              </UFormField>
                              <UFormField label="Height" name="packageHeight" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">H</span>
                                  </div>
                                  <UInput v-model="form.packageHeight" type="text" data-slot="input-group-control" placeholder="15" name="packageHeight" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                                    <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">cm</span>
                                  </div>
                                </div>
                              </UFormField>
                            </div>
                            <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                              <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px items-center">
                                <UCheckbox v-model="form.enabled" aria-label="Toggle setting" />
                                <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                                  <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label">Save this package for future use</label>
                                </div>
                              </div>
                              <div class="md:text-right">
                                <p class="text-muted text-sm">Shipping Item Price</p>
                                <p class="text-lg font-semibold text-highlighted">$0.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="flex flex-col gap-4 py-1">
                        <div class="flex flex-col gap-1">
                          <h2 class="text-xl font-semibold tracking-tight text-highlighted">Notes</h2>
                          <p class="text-muted text-sm">Optional packing or handling context.</p>
                        </div>
                        <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                          <UTextarea v-model="form.deliveryNotes" :rows="4" placeholder="Add internal notes for packing, handling, or delivery." name="deliveryNotes" id="delivery-notes" class="flex w-full rounded-md text-base md:text-sm min-h-28 resize-y" :ui="{ base: 'h-full' }" />
                        </div>
                      </section>
                    </div>
                    <div class="flex flex-col gap-6">
                      <!-- Card 3: Rate Snapshot -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Rate Snapshot</div>
                          <div class="text-muted text-sm">A quick look at how the label total is building.</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-5">
                          <div class="flex items-center justify-between text-sm">
                            <span class="text-muted">Subtotal</span>
                            <span class="font-medium">$0.00</span>
                          </div>
                          <div class="flex items-center justify-between text-sm">
                            <span class="text-muted">Insurance</span>
                            <span class="font-medium">$0.00</span>
                          </div>
                          <div class="flex items-center justify-between text-sm">
                            <span class="text-muted">Packaging</span>
                            <span class="font-medium">$0.00</span>
                          </div>
                          <div class="flex items-center justify-between text-sm">
                            <span class="text-muted">Discount</span>
                            <span class="font-medium">$0.00</span>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div class="flex items-center justify-between">
                            <span class="text-base font-medium">Label Total</span>
                            <span class="text-2xl font-semibold">$0.00</span>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 4: Dispatch Plan -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Dispatch Plan</div>
                          <div class="text-muted text-sm">Decide when this parcel leaves and how quickly the customer hears about it.</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-5">
                          <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="shipping-date">Planned handoff date</label>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-11 w-full justify-between rounded-lg px-3 text-left font-normal shadow-none text-muted" aria-label="Choose shipping date" type="button" @click="openAction(&quot;Choose shipping date&quot;)">
                              <span>Choose shipping date</span>
                              <UIcon name="i-lucide-calendar-days" class="size-4" />
                            </UButton>
                          </div>
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px items-center">
                            <UCheckbox v-model="form.enabled2" aria-label="Toggle setting" />
                            <div data-slot="field-content" class="group/field-content flex flex-1 flex-col gap-1 leading-snug">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label">Send shipping info to customer now</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Customers receive the carrier and tracking summary as soon as the label is purchased.</p>
                            </div>
                          </div>
                          <div class="bg-(--ui-bg-muted)/20 rounded-xl border border-dashed p-4 border-default">
                            <p class="text-sm font-medium">Current plan</p>
                            <p class="text-muted mt-1 text-sm leading-6">No dispatch timing has been locked yet. Once you choose a carrier and handoff date, the label total will settle here.</p>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 5: Sender Profile -->
                      <UCard class="rounded-2xl" :ui="{ body: 'contents' }">
                        <div class="space-y-1.5 p-6 flex flex-row items-start justify-between gap-4">
                          <div class="flex flex-col gap-1">
                            <div class="leading-none font-semibold tracking-tight">Sender Profile</div>
                            <div class="text-muted text-sm">This origin block will be printed directly on the label.</div>
                          </div>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9 rounded-lg" to="/original/settings/profile">
                            <UIcon name="i-lucide-pencil-line" class="size-4" />
                          </NuxtLink>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-4 text-sm">
                          <div class="flex items-start gap-3">
                            <div class="bg-muted flex size-10 items-center justify-center rounded-lg">
                              <UIcon name="i-lucide-truck" class="size-4" />
                            </div>
                            <div class="space-y-1">
                              <p class="font-medium">Mercer Fulfillment Studio</p>
                              <p class="text-muted leading-6">
                                2814 Harbor Avenue South
                                <br />
                                Seattle, Washington 98134
                                <br />
                                United States
                              </p>
                            </div>
                          </div>
                        </div>
                      </UCard>
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
