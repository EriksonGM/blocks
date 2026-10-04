<!-- Page: /payment-processor/invoice-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice Detail · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "description": "Elite lifetime workspaceLifetime access to Shadcnblocks pro blocks and components.",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Elite lifetime workspace",
    "descriptionText5": "Lifetime access to Shadcnblocks pro blocks and components.",
    "qty": "1.0",
    "qtyGroup": "0",
    "rate": "$399.00",
    "rateGroup": "0",
    "amount": "$399.00",
    "amountGroup": "0",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "2",
    "description": "Template implementation packProduction-ready Next.js and Astro templates for launch pages.",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Template implementation pack",
    "descriptionText5": "Production-ready Next.js and Astro templates for launch pages.",
    "qty": "9.0",
    "qtyGroup": "0",
    "rate": "$79.00",
    "rateGroup": "0",
    "amount": "$711.00",
    "amountGroup": "0",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "3",
    "description": "Admin kit integrationDashboard layouts, application shells, tables, and chart blocks.",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Admin kit integration",
    "descriptionText5": "Dashboard layouts, application shells, tables, and chart blocks.",
    "qty": "1.0",
    "qtyGroup": "0",
    "rate": "$540.00",
    "rateGroup": "0",
    "amount": "$540.00",
    "amountGroup": "0",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "4",
    "description": "Figma kit handoffDesign-system assets and block references for product teams.",
    "descriptionGroup": "0",
    "descriptionClass1": "max-w-0 px-0 py-5 align-top",
    "descriptionText3": "Figma kit handoff",
    "descriptionText5": "Design-system assets and block references for product teams.",
    "qty": "1.0",
    "qtyGroup": "0",
    "rate": "$330.00",
    "rateGroup": "0",
    "amount": "$330.00",
    "amountGroup": "0",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "5",
    "description": "$1,980.00",
    "descriptionGroup": "1",
    "descriptionClass1": "text-highlighted pt-6 pr-0 pb-0 pl-8 text-right tabular-nums",
    "descriptionText3": "",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "6",
    "description": "$198.00",
    "descriptionGroup": "1",
    "descriptionClass1": "text-highlighted pt-4 pr-0 pb-0 pl-8 text-right tabular-nums",
    "descriptionText3": "",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
  },
  {
    "_id": "7",
    "description": "$2,178.00",
    "descriptionGroup": "1",
    "descriptionClass1": "text-highlighted pt-4 pr-0 pb-0 pl-8 text-right font-semibold tabular-nums",
    "descriptionText3": "",
    "descriptionText5": "",
    "qty": "",
    "qtyGroup": "1",
    "rate": "",
    "rateGroup": "1",
    "amount": "",
    "amountGroup": "1",
    "subtotal": "",
    "subtotal2": "",
    "tax": "",
    "tax2": "",
    "total": "",
    "total2": ""
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
    "accessorKey": "subtotal2",
    "header": "Subtotal"
  },
  {
    "accessorKey": "tax",
    "header": "Tax"
  },
  {
    "accessorKey": "tax2",
    "header": "Tax"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  },
  {
    "accessorKey": "total2",
    "header": "Total"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["description","qty","rate","amount","subtotal","subtotal2","tax","tax2","total","total2"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  const rows = table1FilteredRows.value.map(row => ["description","qty","rate","amount","subtotal","subtotal2","tax","tax2","total","total2"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-invoice-detail.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-detail">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted min-h-0 flex-1 overflow-y-auto">
          <div class="relative min-h-full">
            <main>
              <header class="border-default bg-default border-b">
                <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                  <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <nav class="text-muted flex items-center gap-x-2 text-sm/6">
                      <NuxtLink class="hover:text-(--ui-text-highlighted)/80 font-medium" to="#">
                        Invoices
                      </NuxtLink>
                      <span class="text-(--ui-text-highlighted)/80 font-medium">#00011</span>
                    </nav>
                    <div class="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div class="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
                        <h1 class="text-highlighted text-2xl font-semibold tracking-tight sm:text-3xl text-highlighted">Invoice #00011</h1>
                        <span class="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success ring-1 ring-success/15 ring-inset dark:bg-success/10 dark:text-success dark:ring-success/20">Paid</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
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
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 rounded-md" aria-label="Mark as Paid" type="button" @click="openAction(&quot;Mark as Paid&quot;)">
                          <UIcon name="i-lucide-check" class="size-4" />
                          Mark as Paid
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div class="lg:col-start-3 lg:row-end-1">
                    <!-- Card 1: Settlement -->
                    <UCard class="ring-default overflow-hidden rounded-lg shadow-sm ring-1" :ui="{ body: 'contents' }">
                      <div class="p-6">
                        <div class="flex items-start justify-between gap-4">
                          <div>
                            <h2 class="text-highlighted text-sm/6 font-semibold text-highlighted">Settlement</h2>
                            <p class="text-muted mt-1 text-xs/5">Paid in full through card settlement.</p>
                          </div>
                          <span class="rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success ring-1 ring-success/15 ring-inset dark:bg-success/10 dark:text-success dark:ring-success/20">Paid</span>
                        </div>
                        <dl class="mt-6 space-y-3 text-sm/6">
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Subtotal</dt>
                            <dd class="text-highlighted font-medium">$1,980.00</dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">VAT (10%)</dt>
                            <dd class="text-highlighted font-medium">$198.00</dd>
                          </div>
                          <div class="border-default flex items-center justify-between gap-4 border-t pt-4">
                            <dt class="text-highlighted font-semibold">Total</dt>
                            <dd class="text-highlighted text-xl font-semibold">$2,178.00</dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Amount paid</dt>
                            <dd class="text-highlighted font-medium">$2,178.00</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="bg-success/70 px-6 py-4 dark:bg-success/10">
                        <div class="flex items-center justify-between gap-4">
                          <span class="text-highlighted text-sm font-semibold">Amount due</span>
                          <span class="text-lg font-semibold text-success dark:text-success">$0.00</span>
                        </div>
                      </div>
                      <div class="border-default border-t p-6">
                        <h3 class="text-highlighted text-sm/6 font-semibold text-highlighted">Payment details</h3>
                        <dl class="mt-4 space-y-3 text-sm/6">
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Method</dt>
                            <dd class="text-highlighted flex items-center gap-2 font-medium">
                              <span class="relative inline-flex h-4 w-7">
                                <span class="absolute top-0 left-0 size-4 rounded-full bg-error" />
                                <span class="absolute top-0 right-0 size-4 rounded-full bg-warning mix-blend-multiply dark:mix-blend-normal" />
                              </span>
                              Mastercard 4242
                            </dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Paid on</dt>
                            <dd class="text-highlighted font-medium">Jan 23, 2023</dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Transaction ID</dt>
                            <dd class="text-highlighted font-mono text-xs font-semibold">pay_0Nc5kjuZkSNfHONs</dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Invoice ID</dt>
                            <dd class="text-highlighted font-mono text-xs font-semibold">inv_0Nc5kjurtpiq4Ak7</dd>
                          </div>
                          <div class="flex items-center justify-between gap-4">
                            <dt class="text-muted">Currency</dt>
                            <dd class="text-highlighted font-semibold">USD</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="border-default border-t p-6">
                        <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 group shadow-primary/10 h-10 w-full rounded-md font-semibold shadow-sm" to="#">
                          <span class="bg-(--ui-bg)/15 group-hover:bg-(--ui-bg)/20 grid size-5 place-items-center rounded transition">
                            <UIcon name="i-lucide-download" class="size-3.5" />
                          </span>
                          Download receipt
                        </NuxtLink>
                      </div>
                    </UCard>
                  </div>
                  <!-- Card 2: Shadcnblocks.com -->
                  <UCard class="ring-default relative -mx-4 overflow-hidden px-3 py-5 shadow-sm ring-1 sm:mx-0 sm:rounded-lg sm:px-5 sm:pb-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-8 xl:pt-8 xl:pb-10" :ui="{ body: 'contents' }">
                    <div class="bg-(--ui-text-highlighted) -mx-3 -mt-5 h-1.5 sm:-mx-5 xl:-mx-8 xl:-mt-8" />
                    <div class="mt-3 pr-16 sm:mt-5 xl:mt-8">
                      <div>
                        <h2 class="text-highlighted text-lg font-semibold tracking-tight text-highlighted">Shadcnblocks.com</h2>
                        <div class="text-muted mt-3 space-y-1.5 text-xs/5">
                          <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-map-pin" class="text-(--ui-text-muted)/70 size-3.5" />
                            Level 12, 45 Clarence Street, Sydney NSW 2000
                          </p>
                          <div class="flex flex-wrap gap-x-4 gap-y-1.5">
                            <p class="flex items-center gap-2">
                              <UIcon name="i-lucide-mail" class="text-(--ui-text-muted)/70 size-3.5" />
                              billing@shadcnblocks.com
                            </p>
                            <p class="flex items-center gap-2">
                              <UIcon name="i-lucide-phone" class="text-(--ui-text-muted)/70 size-3.5" />
                              +61 2 7908 4420
                            </p>
                          </div>
                          <p>
                            <span class="text-highlighted font-semibold">ABN:</span>
                             74 612 893 204
                            <span class="text-highlighted ml-4 font-semibold">VAT:</span>
                            AU 746 128 932
                          </p>
                        </div>
                      </div>
                      <img alt="Shadcnblocks" width="48" height="48" class="absolute top-14 right-5 hidden size-12 object-contain sm:block xl:top-16 xl:right-8 dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                      <img alt="Shadcnblocks" width="48" height="48" class="absolute top-14 right-5 hidden size-12 object-contain xl:top-16 xl:right-8 dark:sm:block" style="color:transparent" src="/reference/4cf1c7a737cc56fd.svg" loading="lazy" />
                    </div>
                    <div class="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
                      <section class="border-default border-t pt-5">
                        <div class="bg-muted text-highlighted inline-flex px-2.5 py-1 text-xs font-semibold">Billed to</div>
                        <div class="mt-5 text-xs/5">
                          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h3 class="text-highlighted text-base font-semibold text-highlighted">Olivia Bennett</h3>
                          </div>
                          <p class="text-muted mt-2 flex items-center gap-2">
                            <UIcon name="i-lucide-map-pin" class="text-(--ui-text-muted)/70 size-3.5" />
                            18 Collins Street, Melbourne VIC 3000
                          </p>
                          <div class="text-muted mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                            <p class="flex items-center gap-2">
                              <UIcon name="i-lucide-mail" class="text-(--ui-text-muted)/70 size-3.5" />
                              accounts@northstar.studio
                            </p>
                          </div>
                        </div>
                      </section>
                      <section class="border-default border-t pt-5">
                        <div class="mt-5 flex items-start justify-between gap-6">
                          <div>
                            <p class="text-highlighted text-lg font-semibold tracking-tight text-highlighted">INV-00011</p>
                          </div>
                          <p class="text-highlighted text-2xl font-semibold tracking-tight text-highlighted">$2,178.00</p>
                        </div>
                        <dl class="mt-8 grid grid-cols-1 gap-5 text-xs/5 sm:grid-cols-3">
                          <div>
                            <dt class="text-muted">Invoice date</dt>
                            <dd class="text-highlighted mt-1 font-medium">
                              <time>Jan 23, 2023</time>
                            </dd>
                          </div>
                          <div>
                            <dt class="text-muted">Due date</dt>
                            <dd class="text-highlighted mt-1 font-medium">
                              <time>Jan 31, 2023</time>
                            </dd>
                          </div>
                          <div>
                            <dt class="text-muted">PO number</dt>
                            <dd class="text-highlighted mt-1 font-medium">NS-4826</dd>
                          </div>
                        </dl>
                      </section>
                    </div>
                    <!-- Table 1: Description / Qty / Rate / Amount / Subtotal / Subtotal / Tax / Tax / Total / Total -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="mt-16 w-full text-left text-sm/6 whitespace-nowrap" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #description-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Description" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #description-cell="{ row }">
                        <template v-if="row.original.descriptionGroup === '0'">
                          <div class="text-highlighted truncate font-medium">{{ row.original.descriptionText3 }}</div>
                          <div class="text-muted truncate">{{ row.original.descriptionText5 }}</div>
                        </template>
                        <template v-if="row.original.descriptionGroup === '1'">
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
                      <template #subtotal2-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Subtotal" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #subtotal2-cell="{ row }">

                      </template>
                      <template #tax-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Tax" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #tax-cell="{ row }">

                      </template>
                      <template #tax2-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Tax" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #tax2-cell="{ row }">

                      </template>
                      <template #total-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #total-cell="{ row }">

                      </template>
                      <template #total2-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #total2-cell="{ row }">

                      </template>
                    </UTable>
                    <p class="text-muted mt-24 text-xs/5">For billing questions, license transfers, or receipt corrections, contact billing@shadcnblocks.com.</p>
                    <div class="border-default text-muted mt-6 border-t pt-6 text-xs/5">
                      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-center gap-2">
                          <img alt="Shadcnblocks" width="20" height="20" class="size-5 object-contain dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                          <span class="text-highlighted font-semibold">Shadcnblocks.com</span>
                        </div>
                        <p>© 2026 Shadcnblocks.com. All rights reserved.</p>
                      </div>
                    </div>
                  </UCard>
                  <div class="lg:col-start-3">
                    <div class="flex items-center justify-between gap-4">
                      <h2 class="text-highlighted text-sm/6 font-semibold tracking-tight text-highlighted">Activity</h2>
                      <span class="text-muted text-xs/5 font-medium">Invoice summary</span>
                    </div>
                    <ul class="mt-5 space-y-0" role="list">
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">7d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full bg-muted size-7 border border-default">
                              <img class="aspect-square h-full w-full" alt="Maya Patel" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                            </span>
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="font-semibold">Maya Patel</span>
                            <span class="text-muted">created invoice draft.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">Invoice #00011 opened for Northstar Studio.</p>
                        </div>
                      </li>
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">6d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full bg-muted size-7 border border-default">
                              <img class="aspect-square h-full w-full" alt="Rohan Mehta" src="/reference/247ac7c76922347b.png" loading="lazy" />
                            </span>
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="font-semibold">Rohan Mehta</span>
                            <span class="text-muted">added purchase order.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">Purchase order NS-4826 attached to the invoice.</p>
                        </div>
                      </li>
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">6d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full text-muted ring-default ring-1">
                            <UIcon name="i-lucide-shield-check" class="size-3.5" />
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="text-muted">sent invoice email to the billing contact.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">Delivered to accounts@northstar.studio.</p>
                        </div>
                      </li>
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">3d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full bg-muted size-7 border border-default">
                              <img class="aspect-square h-full w-full" alt="Olivia Bennett" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                            </span>
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="font-semibold">Olivia Bennett</span>
                            <span class="text-muted">viewed hosted invoice.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">Hosted invoice opened from the secure payment link.</p>
                        </div>
                      </li>
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">2d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full bg-muted size-7 border border-default">
                              <img class="aspect-square h-full w-full" alt="Olivia Bennett" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                            </span>
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="font-semibold">Olivia Bennett</span>
                            <span class="text-muted">downloaded receipt.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">Receipt PDF downloaded after settlement.</p>
                        </div>
                      </li>
                      <li class="grid grid-cols-[3.25rem_1.75rem_minmax(0,1fr)] gap-x-3">
                        <time class="text-muted pt-0.5 text-xs/5 font-medium">1d ago</time>
                        <div class="relative flex justify-center">
                          <div class="bg-default relative z-10 grid size-7 place-items-center rounded-full text-highlighted ring-(--ui-text-highlighted) ring-2">
                            <UIcon name="i-lucide-circle-check" class="size-4.5" />
                          </div>
                        </div>
                        <div class="min-w-0 pb-5">
                          <p class="text-highlighted min-w-0 text-xs/5">
                            <span class="text-muted">card payment settled.</span>
                          </p>
                          <p class="text-muted mt-1 truncate text-xs/5">$2,178.00 captured via Mastercard 4242.</p>
                          <div class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success ring-1 ring-success/15 ring-inset dark:bg-success/10 dark:text-success dark:ring-success/20">
                            <UIcon name="i-lucide-circle-check" class="size-3.5" />
                            Paid in full
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
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
