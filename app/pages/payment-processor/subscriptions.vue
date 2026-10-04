<!-- Page: /payment-processor/subscriptions | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Subscriptions · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSubscriptions": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "productName": "Shadcnblocks Pro Monthly",
    "customerEmail": "avery.stone@northledger.io",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "nextBillingAmountExclTax": "$29.00",
    "subscriptionID": "sub_SB8qL2nV5xR0pHcK7dMzA",
    "nextBillingDate": "30 Jun, 9:24 am",
    "nextBillingDateGroup": "0",
    "quantity": "3",
    "startDate": "30 May, 9:24 am"
  },
  {
    "_id": "2",
    "productName": "Shadcnblocks Team Yearly",
    "customerEmail": "billing@juniperlabs.dev",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "nextBillingAmountExclTax": "$348.00",
    "subscriptionID": "sub_SB3vC9aT1mQ6rYpE4wJnL",
    "nextBillingDate": "18 May, 2:11 pm",
    "nextBillingDateGroup": "0",
    "quantity": "8",
    "startDate": "18 May, 2:11 pm"
  },
  {
    "_id": "3",
    "productName": "Shadcnblocks Studio Monthly",
    "customerEmail": "maya.chen@solstice.co",
    "status": "Past due",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "nextBillingAmountExclTax": "$79.00",
    "subscriptionID": "sub_SB9dN4kX7pB2tUaR5cFqV",
    "nextBillingDate": "-",
    "nextBillingDateGroup": "1",
    "quantity": "5",
    "startDate": "12 May, 6:48 pm"
  },
  {
    "_id": "4",
    "productName": "Shadcnblocks Starter Monthly",
    "customerEmail": "accounts@driftsupply.com",
    "status": "Trialing",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "nextBillingAmountExclTax": "$12.00",
    "subscriptionID": "sub_SB1pG8wL0zK5nVdC2eHsM",
    "nextBillingDate": "11 Jun, 8:05 am",
    "nextBillingDateGroup": "0",
    "quantity": "1",
    "startDate": "28 May, 8:05 am"
  },
  {
    "_id": "5",
    "productName": "Shadcnblocks Agency Yearly",
    "customerEmail": "theo.ramirez@fieldnote.app",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "nextBillingAmountExclTax": "$1,188.00",
    "subscriptionID": "sub_SB6hW2sA9qT4mNfP7yDxK",
    "nextBillingDate": "4 Apr, 11:36 am",
    "nextBillingDateGroup": "0",
    "quantity": "12",
    "startDate": "4 Apr, 11:36 am"
  },
  {
    "_id": "6",
    "productName": "Shadcnblocks Components Monthly",
    "customerEmail": "finance@orbitkitchen.co",
    "status": "Paused",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "nextBillingAmountExclTax": "$19.00",
    "subscriptionID": "sub_SB5kR0pD8vL3xQnC6aMzY",
    "nextBillingDate": "-",
    "nextBillingDateGroup": "1",
    "quantity": "2",
    "startDate": "27 Mar, 4:52 pm"
  },
  {
    "_id": "7",
    "productName": "Shadcnblocks Admin Kit Monthly",
    "customerEmail": "priya.nair@evermint.in",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "nextBillingAmountExclTax": "$49.00",
    "subscriptionID": "sub_SB2mJ6cV9nW1qLpT8eAhF",
    "nextBillingDate": "22 Jun, 7:17 pm",
    "nextBillingDateGroup": "0",
    "quantity": "4",
    "startDate": "22 May, 7:17 pm"
  },
  {
    "_id": "8",
    "productName": "Shadcnblocks Enterprise Monthly",
    "customerEmail": "receipts@harbornine.com",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "nextBillingAmountExclTax": "$249.00",
    "subscriptionID": "sub_SB7tE1qK4xY9rCpN0dLsB",
    "nextBillingDate": "14 Jun, 12:40 pm",
    "nextBillingDateGroup": "0",
    "quantity": "15",
    "startDate": "14 May, 12:40 pm"
  },
  {
    "_id": "9",
    "productName": "Shadcnblocks Templates Yearly",
    "customerEmail": "nolan@redwoodmetrics.ai",
    "status": "Cancelled",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "nextBillingAmountExclTax": "$228.00",
    "subscriptionID": "sub_SB0aF3yM8dV6hRwP2nQxJ",
    "nextBillingDate": "-",
    "nextBillingDateGroup": "1",
    "quantity": "6",
    "startDate": "2 Mar, 5:08 am"
  },
  {
    "_id": "10",
    "productName": "Shadcnblocks Blocks Monthly",
    "customerEmail": "ops@cobaltpress.studio",
    "status": "Past due",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "nextBillingAmountExclTax": "$39.00",
    "subscriptionID": "sub_SB4nZ7xC1qH8pTdL5sVwR",
    "nextBillingDate": "-",
    "nextBillingDateGroup": "1",
    "quantity": "3",
    "startDate": "17 Feb, 10:33 pm"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "productName",
    "header": "Product Name"
  },
  {
    "accessorKey": "customerEmail",
    "header": "Customer Email"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "nextBillingAmountExclTax",
    "header": "Next Billing Amount (excl. tax)"
  },
  {
    "accessorKey": "subscriptionID",
    "header": "Subscription ID"
  },
  {
    "accessorKey": "nextBillingDate",
    "header": "Next Billing Date"
  },
  {
    "accessorKey": "quantity",
    "header": "Quantity"
  },
  {
    "accessorKey": "startDate",
    "header": "Start Date"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchSubscriptions || '').toLowerCase()
  const keys = ["productName","customerEmail","status","nextBillingAmountExclTax","subscriptionID","nextBillingDate","quantity","startDate"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/subscriptions">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
            <div class="flex w-full min-w-0 flex-col">
              <section class="min-w-0 flex-1 pt-6 pb-8">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div>
                      <h2 class="text-base font-semibold text-highlighted">Subscriptions</h2>
                      <p class="text-muted text-sm">12 customer subscriptions for shadcnblocks.com products</p>
                    </div>
                    <div class="flex flex-col gap-2 sm:min-w-[520px] sm:flex-row sm:items-center sm:justify-end">
                      <div class="relative min-w-0 flex-1 sm:max-w-72">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchSubscriptions" type="text" aria-label="Search subscriptions" placeholder="Search subscriptions..." name="searchSubscriptions" class="flex w-full rounded-md text-base md:text-sm h-9 pr-8 pl-9" :ui="{ base: 'h-full' }" />
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 justify-between gap-2" aria-label="Filters" type="button" @click="openAction(&quot;Filters&quot;)">
                        <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                        Filters
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 gap-2" aria-label="Columns" type="button" @click="openAction(&quot;Columns&quot;)">
                        <UIcon name="i-lucide-columns-3" class="size-4" />
                        Columns
                      </UButton>
                    </div>
                  </div>
                  <div class="horizontal-scrollbar vertical-scrollbar overflow-auto">
                    <!-- Table 1: Product Name / Customer Email / Status / Next Billing Amount (excl. tax) / Subscription ID / Next Billing Date / Quantity / Start Date -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1660px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #productName-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Product Name" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #productName-cell="{ row }">
                        <span class="text-highlighted block max-w-[280px] truncate font-medium">{{ row.original.productName }}</span>
                      </template>
                      <template #customerEmail-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer Email" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customerEmail-cell="{ row }">
                        <span class="decoration-muted-foreground/40 whitespace-nowrap underline decoration-dotted underline-offset-4">{{ row.original.customerEmail }}</span>
                      </template>
                      <template #status-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #status-cell="{ row }">
                        <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                      </template>
                      <template #nextBillingAmountExclTax-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Next Billing Amount (excl. tax)" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #nextBillingAmountExclTax-cell="{ row }">
                        <span class="text-highlighted font-medium whitespace-nowrap">{{ row.original.nextBillingAmountExclTax }}</span>
                      </template>
                      <template #subscriptionID-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Subscription ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #subscriptionID-cell="{ row }">
                        <span class="text-highlighted font-medium whitespace-nowrap">{{ row.original.subscriptionID }}</span>
                      </template>
                      <template #nextBillingDate-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Next Billing Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #nextBillingDate-cell="{ row }">
                        <template v-if="row.original.nextBillingDateGroup === '0'">
                          <time class="text-highlighted whitespace-nowrap">{{ row.original.nextBillingDate }}</time>
                        </template>
                        <template v-if="row.original.nextBillingDateGroup === '1'">
                          <span class="text-highlighted">{{ row.original.nextBillingDate }}</span>
                        </template>
                      </template>
                      <template #quantity-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Quantity" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #quantity-cell="{ row }">
                        <span class="text-highlighted">{{ row.original.quantity }}</span>
                      </template>
                      <template #startDate-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Start Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #startDate-cell="{ row }">
                        <time class="text-highlighted whitespace-nowrap">{{ row.original.startDate }}</time>
                      </template>
                    </UTable>
                  </div>
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p class="text-muted text-sm">Showing 1-10 of12 subscriptions</p>
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
