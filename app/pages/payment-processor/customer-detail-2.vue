<!-- Page: /payment-processor/customer-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Customer Detail 2 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "invoice": "INV-20486",
    "status": "Open",
    "method": "Visa ending 4242",
    "amount": "$18,420.00",
    "due": "Jul 19, 2026",
    "download": ""
  },
  {
    "_id": "2",
    "invoice": "INV-20041",
    "status": "Paid",
    "method": "ACH ending 7781",
    "amount": "$24,000.00",
    "due": "Jun 19, 2026",
    "download": ""
  },
  {
    "_id": "3",
    "invoice": "INV-19890",
    "status": "Paid",
    "method": "Mastercard ending 1881",
    "amount": "$7,600.00",
    "due": "May 19, 2026",
    "download": ""
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "invoice",
    "header": "Invoice"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "method",
    "header": "Method"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "due",
    "header": "Due"
  },
  {
    "accessorKey": "download",
    "header": "Download"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["invoice","status","method","amount","due","download"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 2: edit the rows and column definitions here.

const table2Rows = ref([
  {
    "_id": "1",
    "invoice": "INV-20342",
    "status": "Open",
    "statusClass2": "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "method": "ACH ending 7781",
    "amount": "$12,900.00",
    "due": "Jul 12, 2026",
    "download": ""
  },
  {
    "_id": "2",
    "invoice": "INV-20198",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "method": "Visa ending 4242",
    "amount": "$9,480.00",
    "due": "Jun 28, 2026",
    "download": ""
  }
])
type Table2Row = (typeof table2Rows.value)[number]

const table2Columns: TableColumn<Table2Row>[] = [
  {
    "accessorKey": "invoice",
    "header": "Invoice"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "method",
    "header": "Method"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "due",
    "header": "Due"
  },
  {
    "accessorKey": "download",
    "header": "Download"
  }
]

const table2Sorting = ref<{ id: string, desc: boolean }[]>([])

const table2Selection = ref<Record<string, boolean>>({})

const table2FilteredRows = computed(() => {
  const query = ''
  const keys = ["invoice","status","method","amount","due","download"] as const
  return table2Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 3: edit the rows and column definitions here.

const table3Rows = ref([
  {
    "_id": "1",
    "invoice": "INV-19972",
    "status": "Paid",
    "method": "Mastercard ending 1881",
    "amount": "$190.00",
    "due": "Jun 18, 2026",
    "download": ""
  },
  {
    "_id": "2",
    "invoice": "INV-19726",
    "status": "Paid",
    "method": "Mastercard ending 1881",
    "amount": "$190.00",
    "due": "May 18, 2026",
    "download": ""
  }
])
type Table3Row = (typeof table3Rows.value)[number]

const table3Columns: TableColumn<Table3Row>[] = [
  {
    "accessorKey": "invoice",
    "header": "Invoice"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "method",
    "header": "Method"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "due",
    "header": "Due"
  },
  {
    "accessorKey": "download",
    "header": "Download"
  }
]

const table3Sorting = ref<{ id: string, desc: boolean }[]>([])

const table3Selection = ref<Record<string, boolean>>({})

const table3FilteredRows = computed(() => {
  const query = ''
  const keys = ["invoice","status","method","amount","due","download"] as const
  return table3Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
    if (actionDialog.table === 2) table2Rows.value = table2Rows.value.filter(row => row._id !== actionDialog.recordId)
    if (actionDialog.table === 3) table3Rows.value = table3Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <div class="mx-auto flex w-full max-w-7xl flex-col px-6 py-7 md:px-8">
              <section class="flex flex-col gap-6 border-b pb-7 border-default">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div class="flex min-w-0 items-center gap-4">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-12 border border-default">
                      <img class="aspect-square h-full w-full" alt="Northstar Supply Co." src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 flex-wrap items-center gap-2">
                        <h1 class="truncate text-2xl font-semibold tracking-tight text-highlighted">Northstar Supply Co.</h1>
                        <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Active</div>
                      </div>
                      <div class="text-muted mt-2 flex flex-wrap items-center gap-2 text-sm">
                        <span>3 active subscriptions</span>
                        <span>·</span>
                        <span>$30.8K open balance</span>
                        <span>·</span>
                        <span>Next renewal Jul 06</span>
                        <span>·</span>
                        <span>Risk clear</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3" aria-label="Edit" type="button" @click="openAction(&quot;Edit&quot;)">
                      <UIcon name="i-lucide-pencil" class="size-4" />
                      Edit
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </section>
              <div class="grid gap-10 pt-7 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start 2xl:grid-cols-[minmax(0,1fr)_360px]">
                <section class="flex min-w-0 flex-col gap-9">
                  <section class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div class="min-w-0">
                        <div class="flex min-w-0 flex-wrap items-center gap-2">
                          <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Monthly retainer</h2>
                          <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Active</div>
                        </div>
                        <p class="text-muted mt-1 truncate text-sm">Monthly · $2,400.00</p>
                      </div>
                      <span class="text-muted shrink-0 text-sm">Renews Jul 06</span>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="overflow-x-auto">
                        <div class="relative w-full overflow-auto">
                          <!-- Table 1: Invoice / Status / Method / Amount / Due / Download -->
                          <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #invoice-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Invoice" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #invoice-cell="{ row }">
                              <div class="flex items-center gap-3">
                                <UIcon name="i-lucide-file-text" class="text-muted size-4 shrink-0" />
                                <span class="font-medium tabular-nums">{{ row.original.invoice }}</span>
                              </div>
                            </template>
                            <template #status-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #status-cell="{ row }">
                              <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info">{{ row.original.status }}</div>
                            </template>
                            <template #method-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #method-cell="{ row }">
                              {{ row.original.method }}
                            </template>
                            <template #amount-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #amount-cell="{ row }">
                              {{ row.original.amount }}
                            </template>
                            <template #due-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Due" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #due-cell="{ row }">
                              {{ row.original.due }}
                            </template>
                            <template #download-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Download" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #download-cell="{ row }">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 1)">
                                <UIcon name="i-lucide-download" class="size-4" />
                              </UButton>
                            </template>
                          </UTable>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="flex flex-col gap-4">
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full mt-2 mb-5" />
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div class="min-w-0">
                        <div class="flex min-w-0 flex-wrap items-center gap-2">
                          <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Product design sprint</h2>
                          <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Active</div>
                        </div>
                        <p class="text-muted mt-1 truncate text-sm">Monthly · $480.00</p>
                      </div>
                      <span class="text-muted shrink-0 text-sm">Renews Jul 12</span>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="overflow-x-auto">
                        <div class="relative w-full overflow-auto">
                          <!-- Table 2: Invoice / Status / Method / Amount / Due / Download -->
                          <UTable v-model:sorting="table2Sorting" v-model:row-selection="table2Selection" :data="table2FilteredRows" :columns="table2Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #invoice-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Invoice" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #invoice-cell="{ row }">
                              <div class="flex items-center gap-3">
                                <UIcon name="i-lucide-file-text" class="text-muted size-4 shrink-0" />
                                <span class="font-medium tabular-nums">{{ row.original.invoice }}</span>
                              </div>
                            </template>
                            <template #status-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #status-cell="{ row }">
                              <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                            </template>
                            <template #method-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #method-cell="{ row }">
                              {{ row.original.method }}
                            </template>
                            <template #amount-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #amount-cell="{ row }">
                              {{ row.original.amount }}
                            </template>
                            <template #due-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Due" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #due-cell="{ row }">
                              {{ row.original.due }}
                            </template>
                            <template #download-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Download" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #download-cell="{ row }">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 2)">
                                <UIcon name="i-lucide-download" class="size-4" />
                              </UButton>
                            </template>
                          </UTable>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="flex flex-col gap-4">
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full mt-2 mb-5" />
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div class="min-w-0">
                        <div class="flex min-w-0 flex-wrap items-center gap-2">
                          <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Brand identity system</h2>
                          <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Active</div>
                        </div>
                        <p class="text-muted mt-1 truncate text-sm">Monthly · $190.00</p>
                      </div>
                      <span class="text-muted shrink-0 text-sm">Renews Jul 18</span>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="overflow-x-auto">
                        <div class="relative w-full overflow-auto">
                          <!-- Table 3: Invoice / Status / Method / Amount / Due / Download -->
                          <UTable v-model:sorting="table3Sorting" v-model:row-selection="table3Selection" :data="table3FilteredRows" :columns="table3Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #invoice-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Invoice" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #invoice-cell="{ row }">
                              <div class="flex items-center gap-3">
                                <UIcon name="i-lucide-file-text" class="text-muted size-4 shrink-0" />
                                <span class="font-medium tabular-nums">{{ row.original.invoice }}</span>
                              </div>
                            </template>
                            <template #status-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #status-cell="{ row }">
                              <div class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-md border shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info">{{ row.original.status }}</div>
                            </template>
                            <template #method-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #method-cell="{ row }">
                              {{ row.original.method }}
                            </template>
                            <template #amount-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #amount-cell="{ row }">
                              {{ row.original.amount }}
                            </template>
                            <template #due-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Due" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #due-cell="{ row }">
                              {{ row.original.due }}
                            </template>
                            <template #download-header="{ column }">
                              <UButton color="neutral" variant="ghost" size="xs" label="Download" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                            </template>
                            <template #download-cell="{ row }">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 3)">
                                <UIcon name="i-lucide-download" class="size-4" />
                              </UButton>
                            </template>
                          </UTable>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <aside class="hidden min-h-[calc(100vh-8rem)] flex-col gap-7 xl:flex">
                  <div class="flex flex-col gap-7">
                    <section class="flex flex-col gap-5">
                      <h3 class="text-[14px] font-semibold tracking-normal text-highlighted">Customer profile</h3>
                      <dl class="flex flex-col gap-3.5">
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Identifier</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-receipt-text" class="text-muted size-4 shrink-0" />
                            <span class="truncate">cus_9Kx41L</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Status</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-badge-check" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Active customer</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Risk</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-calendar-clock" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Clear</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Owner</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-user-round" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Priya Menon</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Created</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-calendar-clock" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Jun 02, 2026</span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                    <section class="flex flex-col gap-5">
                      <h3 class="text-[14px] font-semibold tracking-normal text-highlighted">Payment methods</h3>
                      <dl class="flex flex-col gap-3.5">
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Default</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Visa ending 4242</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Backup</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-landmark" class="text-muted size-4 shrink-0" />
                            <span class="truncate">ACH ending 7781</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Review</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Mastercard ending 1881</span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                    <section class="flex flex-col gap-5">
                      <h3 class="text-[14px] font-semibold tracking-normal text-highlighted">Billing contacts</h3>
                      <dl class="flex flex-col gap-3.5">
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Finance</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-mail" class="text-muted size-4 shrink-0" />
                            <span class="truncate">billing@northstarsupply.com</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Reminders</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-user-round" class="text-muted size-4 shrink-0" />
                            <span class="truncate">+1 (312) 847-1928</span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                    <section class="flex flex-col gap-5">
                      <h3 class="text-[14px] font-semibold tracking-normal text-highlighted">Company</h3>
                      <dl class="flex flex-col gap-3.5">
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Name</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-landmark" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Northstar Supply Co.</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Location</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-calendar-clock" class="text-muted size-4 shrink-0" />
                            <span class="truncate">Chicago, IL</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-4 text-[13px] leading-6">
                          <dt class="text-muted font-medium">Tax ID</dt>
                          <dd class="text-(--ui-text-highlighted)/90 flex min-w-0 items-center gap-3 font-medium">
                            <UIcon name="i-lucide-receipt-text" class="text-muted size-4 shrink-0" />
                            <span class="truncate">US 84-3927710</span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                  </div>
                </aside>
              </div>
            </div>
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
