<!-- Page: /payment-processor/transactions-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Transactions List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchTransactionIDEmail": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "amount": "$2,840.00",
    "status": "Successful",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "paymentID": "pay_ONfo2IcWuYXSl1Zu4DLj4",
    "paymentMethod": "Visa**** 4928",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Visa",
    "paymentMethodText6": "**** 4928",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "mara@northline.co",
    "dateUTC": "12 minutes ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "2",
    "amount": "$8,120.50",
    "status": "Pending",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "statusName3": "i-lucide-clock-3",
    "paymentID": "pay_ONfo13LR30lnWj5e1r6z4",
    "paymentMethod": "ACH debit",
    "paymentMethodGroup": "1",
    "paymentMethodText4": "ACH debit",
    "paymentMethodText6": "",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "billing@helio.supply",
    "dateUTC": "34 minutes ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "3",
    "amount": "-$429.18",
    "status": "Refunded",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:bg-info/30 dark:text-info dark:border-info/20",
    "statusName3": "i-lucide-refresh-ccw",
    "paymentID": "pay_ONfg1nfxqqgDQjMF5AH4A",
    "paymentMethod": "Mastercard**** 1882",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Mastercard",
    "paymentMethodText6": "**** 1882",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "ops@runeatelier.com",
    "dateUTC": "1 hour ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "4",
    "amount": "$1,204.90",
    "status": "Upcoming",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:bg-secondary/30 dark:text-secondary dark:border-secondary/20",
    "statusName3": "i-lucide-clock-3",
    "paymentID": "pay_ONffQWSDb7NSB5maNgwNa",
    "paymentMethod": "Apple Pay",
    "paymentMethodGroup": "1",
    "paymentMethodText4": "Apple Pay",
    "paymentMethodText6": "",
    "pricingType": "Subscription",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-primary/25 bg-primary/10 text-primary",
    "pricingTypeName3": "i-lucide-repeat-2",
    "customerEmail": "finance@atlas.coffee",
    "dateUTC": "Tomorrow",
    "refund": "Initiate Refund"
  },
  {
    "_id": "5",
    "amount": "$642.00",
    "status": "Failed",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:bg-error/30 dark:text-error dark:border-error/20",
    "statusName3": "i-lucide-circle-x",
    "paymentID": "pay_ONff4XaC6KNQ1ihjUB4Zp",
    "paymentMethod": "Amex**** 3007",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Amex",
    "paymentMethodText6": "**** 3007",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "ap@cedarlabs.dev",
    "dateUTC": "3 hours ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "6",
    "amount": "$5,980.00",
    "status": "Successful",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "paymentID": "pay_ONfeuGoggVDl8o3X5mR4N",
    "paymentMethod": "Bank transfer",
    "paymentMethodGroup": "1",
    "paymentMethodText4": "Bank transfer",
    "paymentMethodText6": "",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "billing@northstar.media",
    "dateUTC": "4 hours ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "7",
    "amount": "$319.40",
    "status": "Pending",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "statusName3": "i-lucide-clock-3",
    "paymentID": "pay_ONfcVjlgA0p4SUeUypZTu",
    "paymentMethod": "Google Pay",
    "paymentMethodGroup": "1",
    "paymentMethodText4": "Google Pay",
    "paymentMethodText6": "",
    "pricingType": "One-time",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "pricingTypeName3": "i-lucide-credit-card",
    "customerEmail": "pay@sable.market",
    "dateUTC": "5 hours ago",
    "refund": "Initiate Refund"
  },
  {
    "_id": "8",
    "amount": "$11,240.00",
    "status": "Upcoming",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:bg-secondary/30 dark:text-secondary dark:border-secondary/20",
    "statusName3": "i-lucide-clock-3",
    "paymentID": "pay_ONfcOVCpuLkOzXWzL5nSK",
    "paymentMethod": "Visa**** 7712",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Visa",
    "paymentMethodText6": "**** 7712",
    "pricingType": "Subscription",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-primary/25 bg-primary/10 text-primary",
    "pricingTypeName3": "i-lucide-repeat-2",
    "customerEmail": "receipts@verdant.systems",
    "dateUTC": "Jun 18",
    "refund": "Initiate Refund"
  },
  {
    "_id": "9",
    "amount": "$67.21",
    "status": "Successful",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "paymentID": "pay_ONfc7eMhOEoiY19Kgv6oq",
    "paymentMethod": "Card**** 1148",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Card",
    "paymentMethodText6": "**** 1148",
    "pricingType": "Subscription",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-primary/25 bg-primary/10 text-primary",
    "pricingTypeName3": "i-lucide-repeat-2",
    "customerEmail": "billing@lumastudio.co",
    "dateUTC": "Yesterday",
    "refund": "Initiate Refund"
  },
  {
    "_id": "10",
    "amount": "$6.72",
    "status": "Successful",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "paymentID": "pay_ONfc2dAHKfMQng8Vyg3L8",
    "paymentMethod": "Card**** 6031",
    "paymentMethodGroup": "0",
    "paymentMethodText4": "Card",
    "paymentMethodText6": "**** 6031",
    "pricingType": "Subscription",
    "pricingTypeClass2": "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold border-primary/25 bg-primary/10 text-primary",
    "pricingTypeName3": "i-lucide-repeat-2",
    "customerEmail": "accounts@orbit.works",
    "dateUTC": "Yesterday",
    "refund": "Initiate Refund"
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
    "accessorKey": "pricingType",
    "header": "Pricing Type"
  },
  {
    "accessorKey": "customerEmail",
    "header": "Customer Email"
  },
  {
    "accessorKey": "dateUTC",
    "header": "Date (UTC)"
  },
  {
    "accessorKey": "refund",
    "header": "Refund"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchTransactionIDEmail || '').toLowerCase()
  const keys = ["amount","status","paymentID","paymentMethod","pricingType","customerEmail","dateUTC","refund"] as const
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/transactions-list-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
            <div class="flex w-full min-w-0 flex-col">
              <section class="min-w-0 flex-1 pt-6 pb-8">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div>
                      <h2 class="text-base font-semibold text-highlighted">Transactions</h2>
                      <p class="text-muted text-sm">12 transaction records</p>
                    </div>
                    <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <div class="relative">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchTransactionIDEmail" type="search" placeholder="Search transaction, ID, email..." aria-label="Search transactions" name="searchTransactionIDEmail" class="flex md:text-sm bg-(--ui-bg-muted)/40 h-9 w-full rounded-md pl-10 text-sm font-medium sm:w-[260px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-9 justify-between rounded-md px-3 text-sm font-medium shadow-none" aria-label="Status" type="button" @click="openAction(&quot;Status&quot;)">
                        Status
                        <UIcon name="i-lucide-list-filter" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-9 rounded-md px-3 text-sm font-medium shadow-none" aria-label="Date Range" type="button" @click="openAction(&quot;Date Range&quot;)">
                        <UIcon name="i-lucide-calendar-days" class="size-4" />
                        <span class="max-w-[220px] truncate">Date Range</span>
                      </UButton>
                    </div>
                  </div>
                  <div class="horizontal-scrollbar vertical-scrollbar overflow-auto">
                    <!-- Table 1: Amount / Status / Payment ID / Payment Method / Pricing Type / Customer Email / Date (UTC) / Refund -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1340px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
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
                        <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                          <UIcon :name="row.original.statusName3" class="size-3.5" />
                          <span>{{ row.original.status }}</span>
                        </UBadge>
                      </template>
                      <template #paymentID-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Payment ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #paymentID-cell="{ row }">
                        <code class="bg-muted text-highlighted rounded-md border px-2 py-1 font-mono text-[12px] font-medium border-default">{{ row.original.paymentID }}</code>
                      </template>
                      <template #paymentMethod-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Payment Method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #paymentMethod-cell="{ row }">
                        <template v-if="row.original.paymentMethodGroup === '0'">
                          <div class="flex min-w-max items-baseline gap-2 whitespace-nowrap">
                            <span class="text-highlighted text-sm font-semibold uppercase">{{ row.original.paymentMethodText4 }}</span>
                            <span class="text-muted text-xs capitalize">{{ row.original.paymentMethodText6 }}</span>
                          </div>
                        </template>
                        <template v-if="row.original.paymentMethodGroup === '1'">
                          <div class="flex min-w-max items-baseline gap-2 whitespace-nowrap">
                            <span class="text-highlighted text-sm font-semibold">{{ row.original.paymentMethod }}</span>
                          </div>
                        </template>
                      </template>
                      <template #pricingType-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Pricing Type" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #pricingType-cell="{ row }">
                        <UBadge color="neutral" variant="subtle" :class="row.original.pricingTypeClass2">
                          <UIcon :name="row.original.pricingTypeName3" class="size-3.5" />
                          {{ row.original.pricingType }}
                        </UBadge>
                      </template>
                      <template #customerEmail-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer Email" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customerEmail-cell="{ row }">
                        <span class="decoration-muted-foreground/40 underline decoration-dotted underline-offset-4">{{ row.original.customerEmail }}</span>
                      </template>
                      <template #dateUTC-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Date (UTC)" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #dateUTC-cell="{ row }">
                        <time>{{ row.original.dateUTC }}</time>
                      </template>
                      <template #refund-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Refund" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #refund-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 py-2 h-7 rounded-md px-2.5 text-[12px] font-medium shadow-none" aria-label="Initiate Refund" type="button" @click="openAction(&quot;Initiate Refund&quot;, row.original._id, 1)">
                          {{ row.original.refund }}
                        </UButton>
                      </template>
                    </UTable>
                  </div>
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p class="text-muted text-sm">Showing 1-10 of12 transactions</p>
                    <div class="flex items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1" aria-label="Previous" type="button" disabled @click="openAction(&quot;Previous&quot;)">
                        <UIcon name="i-lucide-chevron-left" class="size-4" />
                        Previous
                      </UButton>
                      <span class="text-muted min-w-16 text-center text-sm">1 / 2</span>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-1" aria-label="Next" type="button" @click="openAction(&quot;Next&quot;)">
                        Next
                        <UIcon name="i-lucide-chevron-right" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
              </section>
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
