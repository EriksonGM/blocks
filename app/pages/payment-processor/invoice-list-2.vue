<!-- Page: /payment-processor/invoice-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "search": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "invoice": "INV-7184Pro blocks license",
    "invoiceText2": "INV-7184",
    "invoiceText4": "Pro blocks license",
    "customer": "Northline Studiobilling@northline.studio",
    "customerText2": "Northline Studio",
    "customerText4": "billing@northline.studio",
    "total": "$2,499",
    "status": "Sent",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-info/20 bg-default text-info dark:text-info",
    "statusName3": "i-lucide-send",
    "amountDue": "$2,499",
    "dueDate": "Jul 12, 2026",
    "actions": "Actions for INV-7184",
    "actionsText6": "INV-7184"
  },
  {
    "_id": "2",
    "invoice": "INV-7172Subscription recovery flow",
    "invoiceText2": "INV-7172",
    "invoiceText4": "Subscription recovery flow",
    "customer": "Verdant Systemsreceipts@verdant.systems",
    "customerText2": "Verdant Systems",
    "customerText4": "receipts@verdant.systems",
    "total": "$11,240",
    "status": "Sent",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-info/20 bg-default text-info dark:text-info",
    "statusName3": "i-lucide-send",
    "amountDue": "$11,240",
    "dueDate": "Jun 30, 2026",
    "actions": "Actions for INV-7172",
    "actionsText6": "INV-7172"
  },
  {
    "_id": "3",
    "invoice": "INV-7183Admin kit integration",
    "invoiceText2": "INV-7183",
    "invoiceText4": "Admin kit integration",
    "customer": "Vela Design Co.finance@veladesign.co",
    "customerText2": "Vela Design Co.",
    "customerText4": "finance@veladesign.co",
    "total": "$8,400",
    "status": "Paid",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-success/20 bg-default text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amountDue": "$0",
    "dueDate": "Jun 28, 2026",
    "actions": "Actions for INV-7183",
    "actionsText6": "INV-7183"
  },
  {
    "_id": "4",
    "invoice": "INV-7180Figma kit handoff",
    "invoiceText2": "INV-7180",
    "invoiceText4": "Figma kit handoff",
    "customer": "Argent Labsbilling@argentlabs.dev",
    "customerText2": "Argent Labs",
    "customerText4": "billing@argentlabs.dev",
    "total": "$1,950",
    "status": "Draft",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-(--ui-border-accented)/30 bg-default text-default dark:text-default",
    "statusName3": "i-lucide-clock-3",
    "amountDue": "$1,950",
    "dueDate": "Jun 24, 2026",
    "actions": "Actions for INV-7180",
    "actionsText6": "INV-7180"
  },
  {
    "_id": "5",
    "invoice": "INV-7177Payment portal polish",
    "invoiceText2": "INV-7177",
    "invoiceText4": "Payment portal polish",
    "customer": "Rune Atelierstudio@runeatelier.com",
    "customerText2": "Rune Atelier",
    "customerText4": "studio@runeatelier.com",
    "total": "$4,120",
    "status": "Sent",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-info/20 bg-default text-info dark:text-info",
    "statusName3": "i-lucide-send",
    "amountDue": "$1,200",
    "dueDate": "Jun 20, 2026",
    "actions": "Actions for INV-7177",
    "actionsText6": "INV-7177"
  },
  {
    "_id": "6",
    "invoice": "INV-7182Template migration",
    "invoiceText2": "INV-7182",
    "invoiceText4": "Template migration",
    "customer": "Harborline Appsap@harborline.app",
    "customerText2": "Harborline Apps",
    "customerText4": "ap@harborline.app",
    "total": "$3,180",
    "status": "Overdue",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-error/20 bg-default text-error dark:text-error",
    "statusName3": "i-lucide-triangle-alert",
    "amountDue": "$3,180",
    "dueDate": "Jun 12, 2026",
    "actions": "Actions for INV-7182",
    "actionsText6": "INV-7182"
  },
  {
    "_id": "7",
    "invoice": "INV-7181Duplicate component order",
    "invoiceText2": "INV-7181",
    "invoiceText4": "Duplicate component order",
    "customer": "Pollen Interfaceops@polleninterface.com",
    "customerText2": "Pollen Interface",
    "customerText4": "ops@polleninterface.com",
    "total": "$899",
    "status": "Void",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-(--ui-text-muted)/20 bg-default text-muted border-default",
    "statusName3": "i-lucide-circle-x",
    "amountDue": "$0",
    "dueDate": "Jun 8, 2026",
    "actions": "Actions for INV-7181",
    "actionsText6": "INV-7181"
  },
  {
    "_id": "8",
    "invoice": "INV-7179Lifetime access bundle",
    "invoiceText2": "INV-7179",
    "invoiceText4": "Lifetime access bundle",
    "customer": "Cedar UI Worksreceipts@cedarui.works",
    "customerText2": "Cedar UI Works",
    "customerText4": "receipts@cedarui.works",
    "total": "$6,800",
    "status": "Paid",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-success/20 bg-default text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amountDue": "$0",
    "dueDate": "Jun 3, 2026",
    "actions": "Actions for INV-7179",
    "actionsText6": "INV-7179"
  },
  {
    "_id": "9",
    "invoice": "INV-7178Private block request",
    "invoiceText2": "INV-7178",
    "invoiceText4": "Private block request",
    "customer": "North Pier Digitalaccounts@northpier.digital",
    "customerText2": "North Pier Digital",
    "customerText4": "accounts@northpier.digital",
    "total": "$2,750",
    "status": "Overdue",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-error/20 bg-default text-error dark:text-error",
    "statusName3": "i-lucide-triangle-alert",
    "amountDue": "$2,750",
    "dueDate": "May 25, 2026",
    "actions": "Actions for INV-7178",
    "actionsText6": "INV-7178"
  },
  {
    "_id": "10",
    "invoice": "INV-7176Audit dashboard blocks",
    "invoiceText2": "INV-7176",
    "invoiceText4": "Audit dashboard blocks",
    "customer": "Prism Labsfinance@prismlabs.dev",
    "customerText2": "Prism Labs",
    "customerText4": "finance@prismlabs.dev",
    "total": "$5,400",
    "status": "Paid",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-xs font-medium border-success/20 bg-default text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amountDue": "$0",
    "dueDate": "May 14, 2026",
    "actions": "Actions for INV-7176",
    "actionsText6": "INV-7176"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "invoice",
    "header": "Invoice"
  },
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "amountDue",
    "header": "Amount Due"
  },
  {
    "accessorKey": "dueDate",
    "header": "Due Date"
  },
  {
    "accessorKey": "actions",
    "header": "Actions"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.search || '').toLowerCase()
  const keys = ["invoice","customer","total","status","amountDue","dueDate","actions"] as const
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
  const rows = table1FilteredRows.value.map(row => ["invoice","customer","total","status","amountDue","dueDate","actions"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-invoice-list-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-list-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="bg-default">
              <div class="border-default border-b">
                <div class="mx-auto w-full max-w-[1500px] px-5 sm:px-8 xl:px-10 flex flex-col items-center py-8 text-center">
                  <div class="text-muted text-[11px] font-bold tracking-[0.16em] uppercase">
                    Payment Processor 
                    <span class="mx-3">/</span>
                    <span class="text-highlighted">Invoices</span>
                  </div>
                  <h1 class="text-highlighted mt-5 text-xl leading-7 font-semibold tracking-tight text-highlighted">Invoices</h1>
                  <div class="text-muted mt-2 inline-flex items-center gap-2 text-[13px] font-medium">
                    Updated few seconds ago
                    <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
                  </div>
                  <div class="mt-5 flex flex-col gap-2 sm:flex-row">
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 rounded-md h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Create Invoice" type="button" @click="navigateTo(&quot;/payment-processor/create-invoice&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      Create Invoice
                    </UButton>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 py-2 rounded-md shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Export CSV" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      Export CSV
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="border-default border-b">
                <div class="mx-auto w-full max-w-[1500px] sm:px-8 xl:px-10 grid grid-cols-2 divide-x-0 divide-y px-0 md:grid-cols-4 md:divide-x md:divide-y-0">
                  <div class="px-4 py-5 text-center xl:py-6">
                    <div class="text-muted text-[13px] font-medium">Past-due balance</div>
                    <div class="text-highlighted mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">$11.6K</div>
                  </div>
                  <div class="px-4 py-5 text-center xl:py-6">
                    <div class="text-muted text-[13px] font-medium">Due in next 30 days</div>
                    <div class="text-highlighted mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">$16.9K</div>
                  </div>
                  <div class="px-4 py-5 text-center xl:py-6">
                    <div class="text-muted text-[13px] font-medium">Average time to pay</div>
                    <div class="text-highlighted mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      10
                      <span class="text-muted text-base font-medium"> days</span>
                    </div>
                  </div>
                  <div class="px-4 py-5 text-center xl:py-6">
                    <div class="text-muted text-[13px] font-medium">Settled invoice volume</div>
                    <div class="text-highlighted mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">$27.2K</div>
                  </div>
                </div>
              </div>
              <div class="mx-auto w-full max-w-[1500px] px-5 sm:px-8 xl:px-10 py-6">
                <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 justify-between rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                      <UIcon name="i-lucide-list-filter" class="size-4" />
                      Filter
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 justify-between rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Newest due date" type="button" @click="openAction(&quot;Newest due date&quot;)">
                      Newest due date
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 justify-between rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Total" type="button" @click="openAction(&quot;Total&quot;)">
                      Total
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 justify-between rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Date" type="button" @click="openAction(&quot;Date&quot;)">
                      Date
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                  </div>
                  <div class="relative">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.search" type="search" placeholder="Search" aria-label="Search invoices" name="search" class="flex md:text-sm bg-default h-8 w-full rounded-md pr-2.5 pl-9 text-[13px] font-medium sm:w-[240px]" :ui="{ base: 'h-full' }" />
                  </div>
                </div>
                <div class="mt-4 overflow-x-auto">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Invoice / Customer / Total / Status / Amount Due / Due Date / Actions -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[1120px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #invoice-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Invoice" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #invoice-cell="{ row }">
                        {{ row.original.invoiceText2 }}
                        <div class="text-muted text-xs font-normal">{{ row.original.invoiceText4 }}</div>
                      </template>
                      <template #customer-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customer-cell="{ row }">
                        {{ row.original.customerText2 }}
                        <div class="text-muted text-xs font-normal">{{ row.original.customerText4 }}</div>
                      </template>
                      <template #total-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #total-cell="{ row }">
                        {{ row.original.total }}
                      </template>
                      <template #status-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #status-cell="{ row }">
                        <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                          <UIcon :name="row.original.statusName3" class="size-3.5" />
                          <span>{{ row.original.status }}</span>
                        </UBadge>
                      </template>
                      <template #amountDue-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Amount Due" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #amountDue-cell="{ row }">
                        {{ row.original.amountDue }}
                      </template>
                      <template #dueDate-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Due Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #dueDate-cell="{ row }">
                        {{ row.original.dueDate }}
                      </template>
                      <template #actions-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Actions" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #actions-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-highlighted hover:bg-muted size-8 rounded-md" aria-label="Actions for INV-7184" type="button" @click="openAction(&quot;Actions for INV-7184&quot;, row.original._id, 1)">
                          <span class="sr-only">Actions for {{ row.original.actionsText6 }}</span>
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </template>
                    </UTable>
                  </div>
                </div>
                <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div class="text-highlighted text-[13px] font-medium">Showing 1 to10 of 15 results</div>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="10 per page" type="button" @click="openAction(&quot;10 per page&quot;)">
                      10 per page
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Previous" type="button" disabled @click="openAction(&quot;Previous&quot;)">
                      Previous
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 rounded-md font-medium shadow-none h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="Next" type="button" @click="openAction(&quot;Next&quot;)">
                      Next
                    </UButton>
                  </div>
                </div>
              </div>
            </section>
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
