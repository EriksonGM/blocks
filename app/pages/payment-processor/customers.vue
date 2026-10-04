<!-- Page: /payment-processor/customers | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Customers · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchCustomerIDEmail": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "customerName": "Avery Stone",
    "customerNameAlt5": "Avery Stone",
    "customerNameSrc6": "/reference/5985a55c7498fe2e.png",
    "customerId": "cus_Q8mL2vN4aZp9XwR6tKcE1",
    "email": "avery.stone@northledger.io",
    "status": "Active",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "phoneNumber": "+1 415 782 0914",
    "createdAtUTC": "23 May, 4:18 pm"
  },
  {
    "_id": "2",
    "customerName": "Juniper Labs",
    "customerNameAlt5": "Juniper Labs",
    "customerNameSrc6": "/reference/9310a24e0d573ddb.png",
    "customerId": "cus_Z3xH7bR1qTn5MpL9sVdC0",
    "email": "billing@juniperlabs.dev",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "statusName3": "i-lucide-clock-3",
    "phoneNumber": "-",
    "createdAtUTC": "21 May, 11:02 am"
  },
  {
    "_id": "3",
    "customerName": "Maya Chen",
    "customerNameAlt5": "Maya Chen",
    "customerNameSrc6": "/reference/a99c47c2fa3dc656.png",
    "customerId": "cus_M7pQ1fC8yLw4DkS2nAaR5",
    "email": "maya.chen@solstice.co",
    "status": "Active",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "phoneNumber": "+44 20 7946 0188",
    "createdAtUTC": "17 May, 8:44 pm"
  },
  {
    "_id": "4",
    "customerName": "Drift Supply",
    "customerNameAlt5": "Drift Supply",
    "customerNameSrc6": "/reference/247ac7c76922347b.png",
    "customerId": "cus_B2rT6nY9gVq3LsE0hPwK8",
    "email": "accounts@driftsupply.com",
    "status": "Blocked",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:bg-error/30 dark:text-error dark:border-error/20",
    "statusName3": "i-lucide-circle-x",
    "phoneNumber": "-",
    "createdAtUTC": "13 May, 1:29 pm"
  },
  {
    "_id": "5",
    "customerName": "Theo Ramirez",
    "customerNameAlt5": "Theo Ramirez",
    "customerNameSrc6": "/reference/ac13c01a479a177b.png",
    "customerId": "cus_K9dW4sF2aJm8QpX7cRnL3",
    "email": "theo.ramirez@fieldnote.app",
    "status": "Active",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "phoneNumber": "+61 2 8015 4420",
    "createdAtUTC": "9 May, 6:57 am"
  },
  {
    "_id": "6",
    "customerName": "Orbit Kitchen",
    "customerNameAlt5": "Orbit Kitchen",
    "customerNameSrc6": "/reference/62828bc2a489837e.png",
    "customerId": "cus_R4cV0mN8uBd6TzQ1xLfP9",
    "email": "finance@orbitkitchen.co",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "statusName3": "i-lucide-clock-3",
    "phoneNumber": "-",
    "createdAtUTC": "4 May, 9:35 pm"
  },
  {
    "_id": "7",
    "customerName": "Priya Nair",
    "customerNameAlt5": "Priya Nair",
    "customerNameSrc6": "/reference/0a5fda67e048ade8.png",
    "customerId": "cus_Y1hL5qE7sGp2VnD8kTbM4",
    "email": "priya.nair@evermint.in",
    "status": "Active",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "phoneNumber": "+91 98765 20418",
    "createdAtUTC": "30 Apr, 2:10 pm"
  },
  {
    "_id": "8",
    "customerName": "Harbor Nine",
    "customerNameAlt5": "Harbor Nine",
    "customerNameSrc6": "/reference/c856dbf3620c8188.png",
    "customerId": "cus_D6nA3xK0pWs9JqR2vHcF5",
    "email": "receipts@harbornine.com",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "statusName3": "i-lucide-clock-3",
    "phoneNumber": "-",
    "createdAtUTC": "22 Apr, 12:07 am"
  },
  {
    "_id": "9",
    "customerName": "Nolan Pierce",
    "customerNameAlt5": "Nolan Pierce",
    "customerNameSrc6": "/reference/4759e542002c0be5.png",
    "customerId": "cus_T0vP8mC3zQr6NxL1aYdS7",
    "email": "nolan@redwoodmetrics.ai",
    "status": "Active",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "statusName3": "i-lucide-circle-check",
    "phoneNumber": "+1 646 330 8821",
    "createdAtUTC": "18 Apr, 7:41 pm"
  },
  {
    "_id": "10",
    "customerName": "Cobalt Press",
    "customerNameAlt5": "Cobalt Press",
    "customerNameSrc6": "/reference/e92f665d5ff7fc07.png",
    "customerId": "cus_L5sJ2uB9fVx4CpN8qWmE0",
    "email": "ops@cobaltpress.studio",
    "status": "Blocked",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:bg-error/30 dark:text-error dark:border-error/20",
    "statusName3": "i-lucide-circle-x",
    "phoneNumber": "-",
    "createdAtUTC": "11 Apr, 10:22 am"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "customerName",
    "header": "Customer Name"
  },
  {
    "accessorKey": "customerId",
    "header": "Customer Id"
  },
  {
    "accessorKey": "email",
    "header": "Email"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "phoneNumber",
    "header": "Phone Number"
  },
  {
    "accessorKey": "createdAtUTC",
    "header": "Created At (UTC)"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchCustomerIDEmail || '').toLowerCase()
  const keys = ["customerName","customerId","email","status","phoneNumber","createdAtUTC"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customers">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
            <div class="flex w-full min-w-0 flex-col">
              <section class="min-w-0 flex-1 pt-6 pb-8">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div>
                      <h2 class="text-base font-semibold text-highlighted">Customers</h2>
                      <p class="text-muted text-sm">12 customer records</p>
                    </div>
                    <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <div class="relative">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchCustomerIDEmail" type="search" placeholder="Search customer, ID, email..." aria-label="Search customers" name="searchCustomerIDEmail" class="flex md:text-sm bg-(--ui-bg-muted)/40 h-9 w-full rounded-md pl-10 text-sm font-medium sm:w-[260px]" :ui="{ base: 'h-full' }" />
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
                    <!-- Table 1: Customer Name / Customer Id / Email / Status / Phone Number / Created At (UTC) -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1180px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #customerName-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer Name" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customerName-cell="{ row }">
                        <div class="flex min-w-max items-center gap-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-default bg-muted size-8 border">
                            <img class="aspect-square h-full w-full" :alt="row.original.customerNameAlt5" :src="row.original.customerNameSrc6" loading="lazy" />
                          </span>
                          <span class="text-highlighted text-sm font-medium whitespace-nowrap">{{ row.original.customerName }}</span>
                        </div>
                      </template>
                      <template #customerId-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer Id" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customerId-cell="{ row }">
                        <span class="text-highlighted font-medium whitespace-nowrap">{{ row.original.customerId }}</span>
                      </template>
                      <template #email-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Email" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #email-cell="{ row }">
                        <span class="whitespace-nowrap">{{ row.original.email }}</span>
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
                      <template #phoneNumber-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Phone Number" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #phoneNumber-cell="{ row }">
                        <span class="text-highlighted">{{ row.original.phoneNumber }}</span>
                      </template>
                      <template #createdAtUTC-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Created At (UTC)" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #createdAtUTC-cell="{ row }">
                        <time class="text-highlighted whitespace-nowrap">{{ row.original.createdAtUTC }}</time>
                      </template>
                    </UTable>
                  </div>
                  <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p class="text-muted text-sm">Showing 1-10 of12 customers</p>
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
