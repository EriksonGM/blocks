<!-- Page: /payment-processor/subscription-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Subscription Detail · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "amount": "$87.00",
    "status": "Succeeded",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "paymentID": "txn_8z1fQ4",
    "paymentMethod": "Visa ending 4928",
    "date": "May 30, 2026",
    "download": "Download txn_8z1fQ4",
    "downloadText7": "txn_8z1fQ4"
  },
  {
    "_id": "2",
    "amount": "-$9.67",
    "status": "Posted",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "paymentID": "txn_7mx2Pa",
    "paymentMethod": "Balance adjustment",
    "date": "Jun 14, 2026",
    "download": "Download txn_7mx2Pa",
    "downloadText7": "txn_7mx2Pa"
  },
  {
    "_id": "3",
    "amount": "$87.00",
    "status": "Succeeded",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "paymentID": "txn_7k91Ld",
    "paymentMethod": "Visa ending 4928",
    "date": "Apr 30, 2026",
    "download": "Download txn_7k91Ld",
    "downloadText7": "txn_7k91Ld"
  },
  {
    "_id": "4",
    "amount": "$29.00",
    "status": "Succeeded",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "paymentID": "txn_6Fb8Rc",
    "paymentMethod": "Visa ending 4928",
    "date": "Jun 21, 2026",
    "download": "Download txn_6Fb8Rc",
    "downloadText7": "txn_6Fb8Rc"
  },
  {
    "_id": "5",
    "amount": "$29.00",
    "status": "Failed",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "paymentID": "txn_5An3Yk",
    "paymentMethod": "Visa ending 4928",
    "date": "Jun 20, 2026",
    "download": "Download txn_5An3Yk",
    "downloadText7": "txn_5An3Yk"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "paymentID",
    "header": "Payment ID"
  },
  {
    "accessorKey": "paymentMethod",
    "header": "Payment Method"
  },
  {
    "accessorKey": "date",
    "header": "Date"
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
  const keys = ["amount","status","paymentID","paymentMethod","date","download"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 2: edit the rows and column definitions here.

const table2Rows = ref([
  {
    "_id": "1",
    "subscriber": "Avery Stoneavery.stone@northledger.io",
    "subscriberAlt5": "Avery Stone",
    "subscriberSrc6": "/reference/5985a55c7498fe2e.png",
    "subscriberText9": "Avery Stone",
    "subscriberText11": "avery.stone@northledger.io",
    "subscriberID": "subr_9Lx4A2",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "startDate": "May 30, 2026"
  },
  {
    "_id": "2",
    "subscriber": "Mira Valdezmira.valdez@northledger.io",
    "subscriberAlt5": "Mira Valdez",
    "subscriberSrc6": "/reference/a99c47c2fa3dc656.png",
    "subscriberText9": "Mira Valdez",
    "subscriberText11": "mira.valdez@northledger.io",
    "subscriberID": "subr_7Qn8R1",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "startDate": "Jun 02, 2026"
  },
  {
    "_id": "3",
    "subscriber": "Jon Belljon.bell@northledger.io",
    "subscriberAlt5": "Jon Bell",
    "subscriberSrc6": "/reference/ac13c01a479a177b.png",
    "subscriberText9": "Jon Bell",
    "subscriberText11": "jon.bell@northledger.io",
    "subscriberID": "subr_3Kp2M9",
    "status": "Invited",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "startDate": "Jun 14, 2026"
  },
  {
    "_id": "4",
    "subscriber": "Nia Kapoornia.kapoor@northledger.io",
    "subscriberAlt5": "Nia Kapoor",
    "subscriberSrc6": "/reference/9310a24e0d573ddb.png",
    "subscriberText9": "Nia Kapoor",
    "subscriberText11": "nia.kapoor@northledger.io",
    "subscriberID": "subr_6Vt8H4",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "startDate": "Jun 18, 2026"
  }
])
type Table2Row = (typeof table2Rows.value)[number]

const table2Columns: TableColumn<Table2Row>[] = [
  {
    "accessorKey": "subscriber",
    "header": "Subscriber"
  },
  {
    "accessorKey": "subscriberID",
    "header": "Subscriber ID"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "startDate",
    "header": "Start date"
  }
]

const table2Sorting = ref<{ id: string, desc: boolean }[]>([])

const table2Selection = ref<Record<string, boolean>>({})

const table2FilteredRows = computed(() => {
  const query = ''
  const keys = ["subscriber","subscriberID","status","startDate"] as const
  return table2Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 3: edit the rows and column definitions here.

const table3Rows = ref([
  {
    "_id": "1",
    "discount": "PRO-LAUNCH-25",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "value": "25% off",
    "appliesTo": "Recurring invoice total",
    "ends": "Jul 30, 2026"
  },
  {
    "_id": "2",
    "discount": "SEAT-CREDIT-JUN",
    "status": "Redeemed",
    "statusClass2": "inline-flex items-center border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] shadow-none border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "value": "$9.67 credit",
    "appliesTo": "Seat proration",
    "ends": "Jun 14, 2026"
  }
])
type Table3Row = (typeof table3Rows.value)[number]

const table3Columns: TableColumn<Table3Row>[] = [
  {
    "accessorKey": "discount",
    "header": "Discount"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "value",
    "header": "Value"
  },
  {
    "accessorKey": "appliesTo",
    "header": "Applies to"
  },
  {
    "accessorKey": "ends",
    "header": "Ends"
  }
]

const table3Sorting = ref<{ id: string, desc: boolean }[]>([])

const table3Selection = ref<Record<string, boolean>>({})

const table3FilteredRows = computed(() => {
  const query = ''
  const keys = ["discount","status","value","appliesTo","ends"] as const
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["amount","status","paymentID","paymentMethod","date","download"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-subscription-detail.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/subscription-detail">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="mx-auto flex w-full max-w-7xl flex-col gap-7 px-6 py-7 md:px-8">
              <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex min-w-0 flex-col gap-4">
                  <div class="flex min-w-0 flex-wrap items-center gap-3">
                    <h1 class="truncate text-2xl leading-tight font-semibold tracking-tight text-highlighted">Shadcnblocks Pro Monthly</h1>
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md border-success/20 bg-success/10 px-2 text-xs font-medium text-success shadow-none dark:border-success/20 dark:bg-success/30 dark:text-success">Active</div>
                  </div>
                  <div class="text-muted flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div class="flex min-w-0 items-center gap-2">
                      <UIcon name="i-lucide-package-check" class="size-4 shrink-0" />
                      <span class="text-highlighted truncate font-medium">Product subscription</span>
                    </div>
                    <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-5 sm:block" />
                    <div class="flex min-w-0 items-center gap-2">
                      <UIcon name="i-lucide-banknote" class="size-4 shrink-0" />
                      <span>Amount:</span>
                      <span class="text-highlighted font-medium">$29.00</span>
                    </div>
                    <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-5 sm:block" />
                    <div class="flex min-w-0 items-center gap-2">
                      <UIcon name="i-lucide-refresh-ccw" class="size-4 shrink-0" />
                      <span>Cycle:</span>
                      <span class="text-highlighted font-medium">Monthly</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md text-xs h-8 gap-1.5 px-3" aria-label="Pause" type="button" @click="openAction(&quot;Pause&quot;)">
                    <UIcon name="i-lucide-pause" class="size-3.5" />
                    Pause
                  </UButton>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs h-8 gap-1.5 px-3" aria-label="Edit" type="button" @click="openAction(&quot;Edit&quot;)">
                    <UIcon name="i-lucide-pen-line" class="size-3.5" />
                    Edit
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="More subscription actions" type="button" @click="openAction(&quot;More subscription actions&quot;)">
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
              </header>
              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
              <dl class="grid gap-x-20 gap-y-4 text-sm md:grid-cols-2">
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-receipt-text" class="size-4" />
                    Subscription ID
                  </dt>
                  <dd class="min-w-0 truncate font-medium">sub_SB8qL2nV5xR0pHcK7dMzA</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-package-check" class="size-4" />
                    Product ID
                  </dt>
                  <dd class="min-w-0 truncate font-medium">prod_shadcnblocks_pro</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-banknote" class="size-4" />
                    Price ID
                  </dt>
                  <dd class="min-w-0 truncate font-medium">price_pro_monthly_29</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-badge-check" class="size-4" />
                    Status
                  </dt>
                  <dd class="min-w-0 truncate font-medium">Active</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-refresh-ccw" class="size-4" />
                    Billing cycle
                  </dt>
                  <dd class="min-w-0 truncate font-medium">Monthly</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-credit-card" class="size-4" />
                    Collection
                  </dt>
                  <dd class="min-w-0 truncate font-medium">Automatic charge</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-calendar-clock" class="size-4" />
                    Current period
                  </dt>
                  <dd class="min-w-0 truncate font-medium">Jun 30 - Jul 30, 2026</dd>
                </div>
                <div class="grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-4">
                  <dt class="text-muted flex items-center gap-3 font-medium">
                    <UIcon name="i-lucide-circle-check" class="size-4" />
                    Started
                  </dt>
                  <dd class="min-w-0 truncate font-medium">May 30, 2026</dd>
                </div>
              </dl>
              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
              <div class="grid gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start 2xl:grid-cols-[minmax(0,1fr)_320px]">
                <div class="flex flex-col gap-6">
                  <div class="text-default border bg-(--ui-bg-muted)/15 rounded-lg p-1 shadow-none border-default">
                    <div class="p-0">
                      <div class="grid gap-1 md:grid-cols-3">
                        <div class="bg-default rounded-md border px-4 py-3 border-default">
                          <div class="text-muted flex items-center gap-2 text-xs font-medium">
                            <UIcon name="i-lucide-banknote" class="size-4" />
                            Total collected
                          </div>
                          <p class="mt-5 text-2xl font-semibold tracking-tight text-highlighted">$406.00</p>
                        </div>
                        <div class="bg-default rounded-md border px-4 py-3 border-default">
                          <div class="text-muted flex items-center gap-2 text-xs font-medium">
                            <UIcon name="i-lucide-circle-check" class="size-4" />
                            Successful payments
                          </div>
                          <p class="mt-5 text-2xl font-semibold tracking-tight text-highlighted">6</p>
                        </div>
                        <div class="bg-default rounded-md border px-4 py-3 border-default">
                          <div class="text-muted flex items-center gap-2 text-xs font-medium">
                            <UIcon name="i-lucide-badge-check" class="size-4" />
                            Subscribers
                          </div>
                          <p class="mt-5 text-2xl font-semibold tracking-tight text-highlighted">8</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                      <div class="flex items-center gap-3">
                        <h2 class="text-[15px] font-semibold text-highlighted">Transactions</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <p class="text-muted text-xs">Money movement and adjustments generated by the subscription.</p>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="relative w-full overflow-auto">
                        <!-- Table 1: Amount / Status / Payment ID / Payment Method / Date / Download -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #amount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #amount-cell="{ row }">
                            {{ row.original.amount }}
                          </template>
                          <template #status-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #status-cell="{ row }">
                            <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                          </template>
                          <template #paymentID-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Payment ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #paymentID-cell="{ row }">
                            <span class="block truncate font-medium tabular-nums">{{ row.original.paymentID }}</span>
                          </template>
                          <template #paymentMethod-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Payment Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #paymentMethod-cell="{ row }">
                            {{ row.original.paymentMethod }}
                          </template>
                          <template #date-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #date-cell="{ row }">
                            {{ row.original.date }}
                          </template>
                          <template #download-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Download" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #download-cell="{ row }">
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Download txn_8z1fQ4" type="button" @click="exportCsv()">
                              <UIcon name="i-lucide-download" class="size-4" />
                              <span class="sr-only">Download {{ row.original.downloadText7 }}</span>
                            </UButton>
                          </template>
                        </UTable>
                      </div>
                      <footer class="flex h-12 items-center justify-between gap-3 border-t px-4 text-sm border-default">
                        <p class="text-muted tabular-nums">1-5 of 10</p>
                        <div class="flex items-center overflow-hidden rounded-md border border-default">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none border-default" aria-label="Previous page" type="button" disabled @click="openAction(&quot;Previous page&quot;)">
                            <UIcon name="i-lucide-chevron-left" class="size-4" />
                            <span class="sr-only">Previous page</span>
                          </UButton>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none shadow-none" aria-label="Next page" type="button" @click="openAction(&quot;Next page&quot;)">
                            <UIcon name="i-lucide-chevron-right" class="size-4" />
                            <span class="sr-only">Next page</span>
                          </UButton>
                        </div>
                      </footer>
                    </div>
                  </section>
                  <section class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                      <div class="flex items-center gap-3">
                        <h2 class="text-[15px] font-semibold text-highlighted">Subscribers</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <p class="text-muted text-xs">Seats currently attached to this subscription.</p>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="relative w-full overflow-auto">
                        <!-- Table 2: Subscriber / Subscriber ID / Status / Start date -->
                        <UTable v-model:sorting="table2Sorting" v-model:row-selection="table2Selection" :data="table2FilteredRows" :columns="table2Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #subscriber-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Subscriber" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #subscriber-cell="{ row }">
                            <div class="flex min-w-0 items-center gap-3">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                                <img class="aspect-square h-full w-full" :alt="row.original.subscriberAlt5" :src="row.original.subscriberSrc6" loading="lazy" />
                              </span>
                              <div class="min-w-0">
                                <p class="truncate font-medium">{{ row.original.subscriberText9 }}</p>
                                <p class="text-muted truncate text-xs">{{ row.original.subscriberText11 }}</p>
                              </div>
                            </div>
                          </template>
                          <template #subscriberID-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Subscriber ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #subscriberID-cell="{ row }">
                            {{ row.original.subscriberID }}
                          </template>
                          <template #status-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #status-cell="{ row }">
                            <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                          </template>
                          <template #startDate-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Start date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #startDate-cell="{ row }">
                            {{ row.original.startDate }}
                          </template>
                        </UTable>
                      </div>
                      <footer class="flex h-12 items-center justify-between gap-3 border-t px-4 text-sm border-default">
                        <p class="text-muted tabular-nums">1-4 of 8</p>
                        <div class="flex items-center overflow-hidden rounded-md border border-default">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none border-default" aria-label="Previous page" type="button" disabled @click="openAction(&quot;Previous page&quot;)">
                            <UIcon name="i-lucide-chevron-left" class="size-4" />
                            <span class="sr-only">Previous page</span>
                          </UButton>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none shadow-none" aria-label="Next page" type="button" @click="openAction(&quot;Next page&quot;)">
                            <UIcon name="i-lucide-chevron-right" class="size-4" />
                            <span class="sr-only">Next page</span>
                          </UButton>
                        </div>
                      </footer>
                    </div>
                  </section>
                  <section class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                      <div class="flex items-center gap-3">
                        <h2 class="text-[15px] font-semibold text-highlighted">Discounts</h2>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <p class="text-muted text-xs">Coupons, credits, and reductions applied to renewals.</p>
                    </div>
                    <div class="overflow-hidden rounded-md border border-default">
                      <div class="relative w-full overflow-auto">
                        <!-- Table 3: Discount / Status / Value / Applies to / Ends -->
                        <UTable v-model:sorting="table3Sorting" v-model:row-selection="table3Selection" :data="table3FilteredRows" :columns="table3Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #discount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Discount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #discount-cell="{ row }">
                            <div class="flex min-w-0 items-center gap-2">
                              <UIcon name="i-lucide-ticket-percent" class="text-muted size-4 shrink-0" />
                              <span class="truncate font-medium">{{ row.original.discount }}</span>
                            </div>
                          </template>
                          <template #status-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #status-cell="{ row }">
                            <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                          </template>
                          <template #value-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Value" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #value-cell="{ row }">
                            {{ row.original.value }}
                          </template>
                          <template #appliesTo-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Applies to" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #appliesTo-cell="{ row }">
                            {{ row.original.appliesTo }}
                          </template>
                          <template #ends-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Ends" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #ends-cell="{ row }">
                            {{ row.original.ends }}
                          </template>
                        </UTable>
                      </div>
                    </div>
                  </section>
                </div>
                <aside class="xl:flex xl:justify-end">
                  <section class="w-full max-w-[300px]">
                    <div class="border-default flex items-center justify-between gap-4 border-b border-dashed pb-3">
                      <h2 class="text-sm font-semibold text-highlighted">Activity</h2>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-muted h-7 px-1.5 text-sm font-medium" aria-label="2026" type="button" @click="openAction(&quot;2026&quot;)">
                        2026
                        <UIcon name="i-lucide-chevron-down" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-3 grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3 py-2">
                      <span />
                      <div class="grid grid-cols-7 gap-1.5">
                        <span class="text-muted text-center text-xs font-medium">S</span>
                        <span class="text-muted text-center text-xs font-medium">M</span>
                        <span class="text-muted text-center text-xs font-medium">T</span>
                        <span class="text-muted text-center text-xs font-medium">W</span>
                        <span class="text-muted text-center text-xs font-medium">T</span>
                        <span class="text-muted text-center text-xs font-medium">F</span>
                        <span class="text-muted text-center text-xs font-medium">S</span>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2.5">
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Jan</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Feb</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Mar</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Apr</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">May</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Jun</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Jul</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:var(--ui-primary);border-color:color-mix(in oklch, var(--ui-primary) 85%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 38%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 25%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Aug</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Sep</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Oct</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Nov</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                      <div class="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3">
                        <span class="text-muted text-xs">Dec</span>
                        <div class="grid grid-cols-7 gap-2">
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                          <span class="h-2.5 rounded-[3px] border shadow-[inset_0_1px_0_color-mix(in_oklab,_var(--ui-bg)_35%,_transparent)] border-default" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-border) 70%, var(--ui-bg))" />
                        </div>
                      </div>
                    </div>
                  </section>
                </aside>
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
