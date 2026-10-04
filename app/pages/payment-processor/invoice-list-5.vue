<!-- Page: /payment-processor/invoice-list-5 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice List 5 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "customer": "Northline Studiobilling@northline.studio",
    "customerText3": "Northline Studio",
    "customerText5": "billing@northline.studio",
    "description": "Agency plan renewalRecurring invoice",
    "descriptionGroup": "0",
    "descriptionText6": "Agency plan renewal",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "amount": "$4,800.00",
    "dueDate": "May 1238d ago",
    "dueDateGroup": "0",
    "dueDateText3": "May 12",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "38d ago",
    "invoiceNo": "INV-0041",
    "invoiceDate": "Apr 12"
  },
  {
    "_id": "2",
    "selection": "",
    "customer": "Solberg & Reissaccounts@solbergreiss.com",
    "customerText3": "Solberg & Reiss",
    "customerText5": "accounts@solbergreiss.com",
    "description": "Template implementation pack",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "amount": "$3,150.00",
    "dueDate": "May 2030d ago",
    "dueDateGroup": "0",
    "dueDateText3": "May 20",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "30d ago",
    "invoiceNo": "INV-0038",
    "invoiceDate": "Apr 20"
  },
  {
    "_id": "3",
    "selection": "",
    "customer": "Veld & Cofinance@veldco.com",
    "customerText3": "Veld & Co",
    "customerText5": "finance@veldco.com",
    "description": "Admin dashboard kit",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "amount": "$1,890.00",
    "dueDate": "May 2525d ago",
    "dueDateGroup": "0",
    "dueDateText3": "May 25",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "25d ago",
    "invoiceNo": "INV-0039",
    "invoiceDate": "Apr 25"
  },
  {
    "_id": "4",
    "selection": "",
    "customer": "Fernpath Collectivebilling@fernpath.co",
    "customerText3": "Fernpath Collective",
    "customerText5": "billing@fernpath.co",
    "description": "Marketing blocks license",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "amount": "$1,450.00",
    "dueDate": "May 644d ago",
    "dueDateGroup": "0",
    "dueDateText3": "May 6",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "44d ago",
    "invoiceNo": "INV-0034",
    "invoiceDate": "Apr 6"
  },
  {
    "_id": "5",
    "selection": "",
    "customer": "Archway Infrastructureap@archwaygroup.com",
    "customerText3": "Archway Infrastructure",
    "customerText5": "ap@archwaygroup.com",
    "description": "Team seat expansion · 10 seatsRecurring invoice",
    "descriptionGroup": "0",
    "descriptionText6": "Team seat expansion · 10 seats",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amount": "$2,400.00",
    "dueDate": "Jun 154d ago",
    "dueDateGroup": "0",
    "dueDateText3": "Jun 15",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "4d ago",
    "invoiceNo": "INV-0043",
    "invoiceDate": "May 15"
  },
  {
    "_id": "6",
    "selection": "",
    "customer": "Ember Digitalbilling@emberdigital.co",
    "customerText3": "Ember Digital",
    "customerText5": "billing@emberdigital.co",
    "description": "Marketing blocks license",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amount": "$1,160.00",
    "dueDate": "Jun 172d ago",
    "dueDateGroup": "0",
    "dueDateText3": "Jun 17",
    "dueDateClass4": "text-xs tabular-nums text-error dark:text-error",
    "dueDateText5": "2d ago",
    "invoiceNo": "INV-0044",
    "invoiceDate": "May 18"
  },
  {
    "_id": "7",
    "selection": "",
    "customer": "Crest Advisoryap@crestadvisory.co",
    "customerText3": "Crest Advisory",
    "customerText5": "ap@crestadvisory.co",
    "description": "Lifetime access bundle",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amount": "$3,400.00",
    "dueDate": "Jun 21In 2d",
    "dueDateGroup": "0",
    "dueDateText3": "Jun 21",
    "dueDateClass4": "text-xs tabular-nums text-warning dark:text-warning",
    "dueDateText5": "In 2d",
    "invoiceNo": "INV-0045",
    "invoiceDate": "May 22"
  },
  {
    "_id": "8",
    "selection": "",
    "customer": "Sablewood Interactiveap@sablewood.io",
    "customerText3": "Sablewood Interactive",
    "customerText5": "ap@sablewood.io",
    "description": "Team seat expansion · 6 seats",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amount": "$1,440.00",
    "dueDate": "Jul 10",
    "dueDateGroup": "1",
    "dueDateText3": "Jul 10",
    "dueDateClass4": "",
    "dueDateText5": "",
    "invoiceNo": "INV-0051",
    "invoiceDate": "Jun 12"
  },
  {
    "_id": "9",
    "selection": "",
    "customer": "Peregrine Systemsfinance@peregrinesys.com",
    "customerText3": "Peregrine Systems",
    "customerText5": "finance@peregrinesys.com",
    "description": "Pro blocks license · 12 seats",
    "descriptionGroup": "1",
    "descriptionText6": "",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amount": "$3,260.00",
    "dueDate": "Jul 13",
    "dueDateGroup": "1",
    "dueDateText3": "Jul 13",
    "dueDateClass4": "",
    "dueDateText5": "",
    "invoiceNo": "INV-0052",
    "invoiceDate": "Jun 13"
  },
  {
    "_id": "10",
    "selection": "",
    "customer": "Kairos Venturesbilling@kairosvs.com",
    "customerText3": "Kairos Ventures",
    "customerText5": "billing@kairosvs.com",
    "description": "Priority support retainerRecurring invoice",
    "descriptionGroup": "0",
    "descriptionText6": "Priority support retainer",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "amount": "$1,800.00",
    "dueDate": "Jun 24In 5d",
    "dueDateGroup": "0",
    "dueDateText3": "Jun 24",
    "dueDateClass4": "text-xs tabular-nums text-warning dark:text-warning",
    "dueDateText5": "In 5d",
    "invoiceNo": "INV-0046",
    "invoiceDate": "Jun 1"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "selection",
    "header": "",
    "enableSorting": false
  },
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "description",
    "header": "Description"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "dueDate",
    "header": "Due date"
  },
  {
    "accessorKey": "invoiceNo",
    "header": "Invoice no."
  },
  {
    "accessorKey": "invoiceDate",
    "header": "Invoice date"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["customer","description","status","amount","dueDate","invoiceNo","invoiceDate"] as const
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
  const rows = table1FilteredRows.value.map(row => ["selection","customer","description","status","amount","dueDate","invoiceNo","invoiceDate"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-invoice-list-5.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-list-5">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
            <div class="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-10">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Invoicing</h1>
                  <p class="text-muted mt-1 text-sm">Track licenses, seat expansions, and kit purchases across customers.</p>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 shrink-0 rounded-full" aria-label="New invoice" type="button" @click="openAction(&quot;New invoice&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                  New invoice
                </UButton>
              </div>
              <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-xl border p-4 sm:p-5 border-default">
                  <p class="text-muted text-sm font-medium">Outstanding</p>
                  <p class="mt-3 text-3xl font-semibold tracking-tight tabular-nums text-highlighted">$39.5K</p>
                  <p class="text-muted mt-2 text-xs">15 invoices · 3 drafts</p>
                </div>
                <div class="rounded-xl border p-4 sm:p-5 border-default">
                  <p class="text-muted text-sm font-medium">Overdue</p>
                  <p class="mt-3 text-3xl font-semibold tracking-tight tabular-nums text-error dark:text-error text-highlighted">$11.9K</p>
                  <p class="text-muted mt-2 text-xs">5 invoices</p>
                </div>
                <div class="rounded-xl border p-4 sm:p-5 border-default">
                  <p class="text-muted text-sm font-medium">Paid</p>
                  <p class="mt-3 text-3xl font-semibold tracking-tight tabular-nums text-highlighted">$14.8K</p>
                  <p class="text-muted mt-2 text-xs">6 invoices</p>
                </div>
              </div>
              <div class="mt-6 flex flex-wrap items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-8 shrink-0 rounded-md text-[13px] font-medium shadow-none" aria-label="Filters1" type="button" @click="openAction(&quot;Filters1&quot;)">
                  <UIcon name="i-lucide-list-filter" class="size-4" />
                  Filters
                  <span class="bg-muted text-highlighted ml-1 grid size-5 place-items-center rounded text-[11px] font-semibold tabular-nums">1</span>
                </UButton>
                <UBadge color="neutral" variant="subtle" class="bg-default inline-flex h-8 shrink-0 items-center gap-2 rounded-md border pr-1 pl-3 text-[13px] font-medium border-default">
                  Amount ≥ $1,000
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-6 rounded-sm" aria-label="Clear filter" type="button" @click="openAction(&quot;Clear filter&quot;)">
                    <UIcon name="i-lucide-x" class="size-3.5" />
                    <span class="sr-only">Clear filter</span>
                  </UButton>
                </UBadge>
                <div class="ml-auto flex shrink-0 items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default size-8 rounded-md shadow-none" aria-label="Search invoices" type="button" @click="openAction(&quot;Search invoices&quot;)">
                    <UIcon name="i-lucide-search" class="size-4" />
                    <span class="sr-only">Search invoices</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-8 rounded-md text-[13px] font-medium shadow-none" aria-label="Export all" type="button" @click="exportCsv()">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Export all
                  </UButton>
                </div>
              </div>
              <div class="mt-4 overflow-x-auto rounded-xl border border-default">
                <div class="relative w-full overflow-auto">
                  <!-- Table 1: Customer / Description / Status / Amount / Due date / Invoice no. / Invoice date -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[1080px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                      <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                    </template>
                    <template #selection-cell="{ row }">
                      <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                    </template>
                    <template #customer-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #customer-cell="{ row }">
                      <p class="truncate text-sm font-medium">{{ row.original.customerText3 }}</p>
                      <p class="text-muted truncate text-xs">{{ row.original.customerText5 }}</p>
                    </template>
                    <template #description-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Description" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #description-cell="{ row }">
                      <template v-if="row.original.descriptionGroup === '0'">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-repeat" class="text-muted size-3.5 shrink-0" />
                          <span class="truncate text-sm">{{ row.original.descriptionText6 }}</span>
                          <span class="sr-only">Recurring invoice</span>
                        </div>
                      </template>
                      <template v-if="row.original.descriptionGroup === '1'">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="truncate text-sm">{{ row.original.description }}</span>
                        </div>
                      </template>
                    </template>
                    <template #status-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #status-cell="{ row }">
                      <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                    </template>
                    <template #amount-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #amount-cell="{ row }">
                      {{ row.original.amount }}
                    </template>
                    <template #dueDate-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Due date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #dueDate-cell="{ row }">
                      <template v-if="row.original.dueDateGroup === '0'">
                        <p class="text-sm tabular-nums">{{ row.original.dueDateText3 }}</p>
                        <p :class="row.original.dueDateClass4">{{ row.original.dueDateText5 }}</p>
                      </template>
                      <template v-if="row.original.dueDateGroup === '1'">
                        <p class="text-sm tabular-nums">{{ row.original.dueDate }}</p>
                      </template>
                    </template>
                    <template #invoiceNo-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Invoice no." :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #invoiceNo-cell="{ row }">
                      {{ row.original.invoiceNo }}
                    </template>
                    <template #invoiceDate-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Invoice date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #invoiceDate-cell="{ row }">
                      {{ row.original.invoiceDate }}
                    </template>
                  </UTable>
                </div>
              </div>
              <div class="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-muted text-sm tabular-nums">Showing 10 of 20 invoices</p>
                <nav role="navigation" aria-label="pagination" class="flex mx-0 w-auto justify-start sm:justify-end">
                  <ul class="flex flex-row items-center gap-1">
                    <li class="">
                      <NuxtLink class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default px-4 py-2 gap-1 pl-2.5 h-8 text-[13px] text-muted pointer-events-none opacity-50" aria-label="Go to previous page" to="#">
                        <UIcon name="i-lucide-chevron-left" class="h-4 w-4" />
                        <span>Previous</span>
                      </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8 text-[13px] tabular-nums" to="#">
                        1
                      </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 text-[13px] tabular-nums" to="#">
                        2
                      </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default px-4 py-2 gap-1 pr-2.5 h-8 text-[13px]" aria-label="Go to next page" to="#">
                        <span>Next</span>
                        <UIcon name="i-lucide-chevron-right" class="h-4 w-4" />
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
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
