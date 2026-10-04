<!-- Page: /payment-processor/create-invoice | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Create Invoice · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": "Olivia Bennett",
  "field2": "18 Collins Street, Melbourne VIC 3000",
  "label": "Phone",
  "value": "+61 2 7908 4420"
})

const tabs1Active = ref("1")

const tabs1Items = [
  {
    "label": "Defaults",
    "value": "0"
  },
  {
    "label": "Invoice",
    "value": "1"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "description": "Product strategy sprintDiscovery, roadmap, and delivery planning",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Product strategy sprint",
    "descriptionText5": "Discovery, roadmap, and delivery planning",
    "qty": "1",
    "qtyGroup": "0",
    "rate": "$2,400.00",
    "rateGroup": "0",
    "amount": "$2,400.00",
    "amountGroup": "0",
    "subtotal": "",
    "tax10": "",
    "total": ""
  },
  {
    "_id": "2",
    "description": "Interface design systemInvoice-ready components and handoff polish",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Interface design system",
    "descriptionText5": "Invoice-ready components and handoff polish",
    "qty": "2",
    "qtyGroup": "0",
    "rate": "$850.00",
    "rateGroup": "0",
    "amount": "$1,700.00",
    "amountGroup": "0",
    "subtotal": "",
    "tax10": "",
    "total": ""
  },
  {
    "_id": "3",
    "description": "$4,100.00",
    "descriptionGroup": "1",
    "descriptionClass1": "pt-7 pl-6 text-right tabular-nums",
    "descriptionText3": "",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "tax10": "",
    "total": ""
  },
  {
    "_id": "4",
    "description": "$410.00",
    "descriptionGroup": "1",
    "descriptionClass1": "pt-4 pl-6 text-right tabular-nums",
    "descriptionText3": "",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "tax10": "",
    "total": ""
  },
  {
    "_id": "5",
    "description": "$4,510.00",
    "descriptionGroup": "2",
    "descriptionClass1": "pt-5 pl-6 text-right text-xl font-semibold tabular-nums",
    "descriptionText3": "$4,510.00",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "tax10": "",
    "total": ""
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "description",
    "header": "Description"
  },
  {
    "accessorKey": "qty",
    "header": "Qty"
  },
  {
    "accessorKey": "rate",
    "header": "Rate"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "subtotal",
    "header": "Subtotal"
  },
  {
    "accessorKey": "tax10",
    "header": "Tax (10%)"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["description","qty","rate","amount","subtotal","tax10","total"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["description","qty","rate","amount","subtotal","tax10","total"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-create-invoice.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/create-invoice">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex min-h-0 flex-1 flex-col">
          <header class="border-default bg-default border-b">
            <div class="grid gap-4 px-5 py-4 lg:grid-cols-[minmax(390px,480px)_minmax(0,1fr)] lg:items-center lg:gap-0 lg:px-0">
              <div class="min-w-0 lg:px-8">
                <nav class="text-muted flex items-center gap-x-2 text-xs/5">
                  <NuxtLink class="hover:text-(--ui-text-highlighted)/80 font-medium" to="#">
                    Invoices
                  </NuxtLink>
                  <span class="text-(--ui-text-highlighted)/80 font-medium">New</span>
                </nav>
                <h1 class="text-highlighted mt-2 text-xl font-semibold tracking-tight sm:text-2xl text-highlighted">Create invoice</h1>
              </div>
              <div class="flex flex-wrap items-center justify-start gap-3 lg:justify-end lg:px-8">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Send" type="button" @click="openAction(&quot;Send&quot;)">
                  <UIcon name="i-lucide-send" class="size-4" />
                  Send
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Download PDF" type="button" @click="exportCsv()">
                  <UIcon name="i-lucide-download" class="size-4" />
                  Download PDF
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9 rounded-md" aria-label="More actions" type="button" @click="openAction(&quot;More actions&quot;)">
                  <span class="sr-only">More actions</span>
                  <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 rounded-md" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                  <UIcon name="i-lucide-check" class="size-4" />
                  Save draft
                </UButton>
              </div>
            </div>
          </header>
          <div class="grid min-h-0 flex-1 lg:grid-cols-[minmax(390px,480px)_minmax(0,1fr)]">
            <section class="min-h-0 overflow-y-auto">
              <div data-orientation="horizontal" class="flex min-h-full flex-col">
                <div class="border-b px-5 py-3 lg:px-8 border-default">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted justify-center bg-(--ui-bg-muted)/60 grid h-10 w-full grid-cols-2 items-stretch rounded-md border p-1 border-default" data-orientation="horizontal" style="outline:none" />
                </div>
                <div data-orientation="horizontal" id="radix-_R_35fiv5uknmlb_-content-defaults" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-0" />
                <div data-orientation="horizontal" id="radix-_R_35fiv5uknmlb_-content-invoice" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-0" style="animation-duration:0s">
                  <div class="w-full divide-y border-b border-default" data-orientation="vertical">
                    <div data-orientation="vertical" class="border-b border-default">
                      <h3 data-orientation="vertical" class="flex text-highlighted">
                        <UButton color="neutral" variant="soft" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 bg-(--ui-bg-muted)/35 hover:bg-(--ui-bg-muted)/55 data-[state=open]:bg-(--ui-bg-muted)/65 data-[state=open]:text-primary data-[state=open]:[&amp;&gt;svg]:text-primary px-5 py-4 text-base font-semibold hover:no-underline lg:px-8" aria-label="Client Details" type="button" @click="openAction(&quot;Client Details&quot;)">
                          Client Details
                          <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                        </UButton>
                      </h3>
                      <div id="radix-_R_br5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 329px; --radix-collapsible-content-width: 480px;">
                        <div class="bg-default flex flex-col gap-2 border-t p-5 lg:px-8 border-default">
                          <div class="space-y-1.5">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-semibold tracking-wide uppercase">Client Name</label>
                            <UInput v-model="form.field1" type="text" name="field1" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="space-y-1.5">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-semibold tracking-wide uppercase">Client Address</label>
                            <UTextarea v-model="form.field2" :rows="4" name="field2" class="flex w-full rounded-md text-base md:text-sm min-h-24" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="space-y-1.5">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-semibold tracking-wide uppercase">Client Fields</label>
                            <div class="space-y-2">
                              <div class="grid grid-cols-[1fr_1fr_auto] gap-2">
                                <UInput v-model="form.label" type="text" placeholder="Label" name="label" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                <UInput v-model="form.value" type="text" placeholder="Value" name="value" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9" aria-label="Remove field" type="button" @click="openAction(&quot;Remove field&quot;)">
                                  <UIcon name="i-lucide-trash-2" class="size-4" />
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full border-dashed" aria-label="Add New Field" type="button" @click="openAction(&quot;Add New Field&quot;)">
                                <UIcon name="i-lucide-plus" class="size-4" />
                                Add New Field
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-orientation="vertical" class="border-b border-default">
                      <h3 data-orientation="vertical" class="flex text-highlighted">
                        <UButton color="neutral" variant="soft" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 bg-(--ui-bg-muted)/35 hover:bg-(--ui-bg-muted)/55 data-[state=open]:bg-(--ui-bg-muted)/65 data-[state=open]:text-primary data-[state=open]:[&amp;&gt;svg]:text-primary px-5 py-4 text-base font-semibold hover:no-underline lg:px-8" aria-label="Invoice Info" type="button" @click="openAction(&quot;Invoice Info&quot;)">
                          Invoice Info
                          <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                        </UButton>
                      </h3>
                      <div id="radix-_R_dr5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                    </div>
                    <div data-orientation="vertical" class="border-b border-default">
                      <h3 data-orientation="vertical" class="flex text-highlighted">
                        <UButton color="neutral" variant="soft" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 bg-(--ui-bg-muted)/35 hover:bg-(--ui-bg-muted)/55 data-[state=open]:bg-(--ui-bg-muted)/65 data-[state=open]:text-primary data-[state=open]:[&amp;&gt;svg]:text-primary px-5 py-4 text-base font-semibold hover:no-underline lg:px-8" aria-label="Invoice Items" type="button" @click="openAction(&quot;Invoice Items&quot;)">
                          Invoice Items
                          <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                        </UButton>
                      </h3>
                      <div id="radix-_R_fr5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="bg-(--ui-bg-muted)/45 relative h-full overflow-auto border-l border-default" style="background-image:radial-gradient(circle, color-mix(in oklch, var(--ui-text-muted) 24%, transparent) 1px, transparent 1px);background-size:24px 24px">
              <div class="bg-default absolute top-3 right-4 z-10 flex overflow-hidden rounded-md border shadow-sm border-default">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none" aria-label="Zoom out" type="button" @click="openAction(&quot;Zoom out&quot;)">
                  <UIcon name="i-lucide-minus" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="outline" class="border-x px-2.5 text-xs font-semibold tabular-nums border-default" aria-label="100%" type="button" @click="openAction(&quot;100%&quot;)">
                  100%
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none" aria-label="Zoom in" type="button" @click="openAction(&quot;Zoom in&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-l border-default" aria-label="Fit preview" type="button" @click="openAction(&quot;Fit preview&quot;)">
                  <UIcon name="i-lucide-maximize-2" class="size-4" />
                </UButton>
              </div>
              <div class="flex min-h-full justify-center p-6 pt-14 xl:p-10 xl:pt-16 2xl:p-16 2xl:pt-18">
                <div class="w-full max-w-[980px] transition-transform duration-200 ease-out 2xl:max-w-[860px]" style="transform:scale(1);transform-origin:top center">
                  <article class="min-h-[860px] w-full overflow-hidden rounded-lg border shadow-sm transition-colors bg-default text-highlighted border-default">
                    <div class="h-1.5" style="background-color: var(--ui-text-highlighted);" />
                    <div class="p-8 xl:p-12">
                      <header class="mb-12">
                        <div class="flex items-start justify-between gap-8">
                          <h2 class="min-w-0 text-2xl font-semibold tracking-tight xl:text-3xl text-highlighted">Invoice #0001</h2>
                          <div class="pt-1">
                            <img src="/reference/0f758e3547aad431.svg" alt="Shadcnblocks" class="max-h-14 max-w-24 object-contain" loading="lazy" />
                          </div>
                        </div>
                        <dl class="mt-7 grid gap-x-10 gap-y-5 text-xs sm:grid-cols-2 xl:grid-cols-4">
                          <div>
                            <dt class="font-semibold">Issue Date</dt>
                            <dd class="mt-1.5 tabular-nums text-muted">27/05/2026</dd>
                          </div>
                          <div>
                            <dt class="font-semibold">Currency</dt>
                            <dd class="mt-1.5 tabular-nums text-muted">USD</dd>
                          </div>
                          <div>
                            <dt class="font-semibold">Due Date</dt>
                            <dd class="mt-1.5 tabular-nums text-muted">10/06/2026</dd>
                          </div>
                          <div>
                            <dt class="font-semibold">Serial Number</dt>
                            <dd class="mt-1.5 tabular-nums text-muted">0001</dd>
                          </div>
                        </dl>
                      </header>
                      <section class="mb-14 grid gap-8 sm:grid-cols-2">
                        <div class="border-t pt-5 border-default">
                          <p class="mb-5 inline-flex px-2.5 py-1 text-xs font-semibold bg-muted text-highlighted" style="color: var(--ui-text-highlighted);">Billed By</p>
                          <p class="text-base font-semibold text-highlighted">Shadcnblocks.com</p>
                          <p class="mt-2 truncate text-xs leading-5 text-muted">Level 12, 45 Clarence Street, Sydney NSW 2000</p>
                          <dl class="mt-4 grid gap-2 text-xs text-muted">
                            <div class="flex min-w-0 items-center gap-2">
                              <dt class="sr-only">Email</dt>
                              <dd class="flex min-w-0 items-center gap-2">
                                <UIcon name="i-lucide-mail" class="size-3.5 shrink-0 opacity-70" />
                                <span class="truncate">billing@shadcnblocks.com</span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="border-t pt-5 border-default">
                          <p class="mb-5 inline-flex px-2.5 py-1 text-xs font-semibold bg-muted text-highlighted" style="color: var(--ui-text-highlighted);">Billed To</p>
                          <p class="text-base font-semibold text-highlighted">Olivia Bennett</p>
                          <p class="mt-2 truncate text-xs leading-5 text-muted">18 Collins Street, Melbourne VIC 3000</p>
                          <dl class="mt-4 grid gap-2 text-xs text-muted">
                            <div class="flex min-w-0 items-center gap-2">
                              <dt class="sr-only">Phone</dt>
                              <dd class="flex min-w-0 items-center gap-2">
                                <UIcon name="i-lucide-phone" class="size-3.5 shrink-0 opacity-70" />
                                <span class="truncate">+61 2 7908 4420</span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </section>
                      <section>
                        <!-- Table 1: Description / Qty / Rate / Amount / Subtotal / Tax (10%) / Total -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full table-fixed text-left text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #description-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Description" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #description-cell="{ row }">
                            <template v-if="row.original.descriptionGroup === '0'">
                              <p class="truncate font-medium">{{ row.original.descriptionText3 }}</p>
                              <p class="mt-1 truncate text-xs text-dimmed">{{ row.original.descriptionText5 }}</p>
                            </template>
                            <template v-if="row.original.descriptionGroup === '1'">
                              {{ row.original.description }}
                            </template>
                            <template v-if="row.original.descriptionGroup === '2'">
                              {{ row.original.description }}
                            </template>
                          </template>
                          <template #qty-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Qty" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #qty-cell="{ row }">
                            <template v-if="row.original.qtyGroup === '0'">
                              {{ row.original.qty }}
                            </template>
                            <template v-if="row.original.qtyGroup === '1'">

                            </template>
                          </template>
                          <template #rate-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Rate" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #rate-cell="{ row }">
                            <template v-if="row.original.rateGroup === '0'">
                              {{ row.original.rate }}
                            </template>
                            <template v-if="row.original.rateGroup === '1'">

                            </template>
                          </template>
                          <template #amount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #amount-cell="{ row }">
                            <template v-if="row.original.amountGroup === '0'">
                              {{ row.original.amount }}
                            </template>
                            <template v-if="row.original.amountGroup === '1'">

                            </template>
                          </template>
                          <template #subtotal-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Subtotal" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #subtotal-cell="{ row }">

                          </template>
                          <template #tax10-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Tax (10%)" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #tax10-cell="{ row }">

                          </template>
                          <template #total-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #total-cell="{ row }">

                          </template>
                        </UTable>
                      </section>
                      <footer class="mt-16 space-y-5 text-[11px]/5 text-muted">
                        <div class="grid items-start gap-x-10 gap-y-4 sm:grid-cols-[minmax(0,1fr)_auto]">
                          <div>
                            <dl class="grid grid-cols-[72px_1fr] gap-x-4 gap-y-1">
                              <dt>Bank</dt>
                              <dd class="font-medium text-default">Mercury</dd>
                              <dt>Account</dt>
                              <dd class="font-medium text-default">**** 4829</dd>
                            </dl>
                          </div>
                          <img src="data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22520%22%20height%3D%22180%22%20viewBox%3D%220%200%20520%20180%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22180%22%20fill%3D%22none%22%2F%3E%0A%20%20%3Cg%20transform%3D%22translate(30%20102)%20rotate(-5)%22%3E%0A%20%20%20%20%3Ctext%0A%20%20%20%20%20%20x%3D%220%22%0A%20%20%20%20%20%20y%3D%220%22%0A%20%20%20%20%20%20fill%3D%22none%22%0A%20%20%20%20%20%20stroke%3D%22%23171717%22%0A%20%20%20%20%20%20stroke-width%3D%221.15%22%0A%20%20%20%20%20%20stroke-linejoin%3D%22round%22%0A%20%20%20%20%20%20font-family%3D%22Snell%20Roundhand%2C%20Zapfino%2C%20Apple%20Chancery%2C%20Bickham%20Script%20Pro%2C%20cursive%22%0A%20%20%20%20%20%20font-size%3D%2274%22%0A%20%20%20%20%20%20font-style%3D%22italic%22%0A%20%20%20%20%20%20font-weight%3D%22400%22%0A%20%20%20%20%20%20letter-spacing%3D%22-5%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Robert%20Austin%0A%20%20%20%20%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%0A%20%20%20%20%20%20x%3D%220%22%0A%20%20%20%20%20%20y%3D%220%22%0A%20%20%20%20%20%20fill%3D%22%23171717%22%0A%20%20%20%20%20%20fill-opacity%3D%22.18%22%0A%20%20%20%20%20%20font-family%3D%22Snell%20Roundhand%2C%20Zapfino%2C%20Apple%20Chancery%2C%20Bickham%20Script%20Pro%2C%20cursive%22%0A%20%20%20%20%20%20font-size%3D%2274%22%0A%20%20%20%20%20%20font-style%3D%22italic%22%0A%20%20%20%20%20%20font-weight%3D%22400%22%0A%20%20%20%20%20%20letter-spacing%3D%22-5%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Robert%20Austin%0A%20%20%20%20%3C%2Ftext%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20d%3D%22M42%2028%20C120%206%2C%20216%2016%2C%20330%2019%20C395%2021%2C%20434%2012%2C%20470%2026%22%0A%20%20%20%20%20%20fill%3D%22none%22%0A%20%20%20%20%20%20stroke%3D%22%23171717%22%0A%20%20%20%20%20%20stroke-width%3D%221.2%22%0A%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20opacity%3D%22.7%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20d%3D%22M18%20-13%20C58%20-42%2C%20108%20-54%2C%20138%20-38%20C166%20-23%2C%20137%204%2C%2082%2010%22%0A%20%20%20%20%20%20fill%3D%22none%22%0A%20%20%20%20%20%20stroke%3D%22%23171717%22%0A%20%20%20%20%20%20stroke-width%3D%221%22%0A%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20opacity%3D%22.45%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A" alt="Robert Austin signature" class="max-h-14 max-w-40 justify-self-end object-contain" loading="lazy" />
                        </div>
                        <div class="border-t pt-4 border-default">
                          <div>
                            <p>Payment is due upon receipt. Late payments may be subject to a 1.5% monthly service charge.</p>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </article>
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
