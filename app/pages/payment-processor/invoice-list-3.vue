<!-- Page: /payment-processor/invoice-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice List 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchInvoices": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "invoice": "INV-7184Pro blocks license",
    "invoiceText8": "INV-7184",
    "invoiceText10": "Pro blocks license",
    "customer": "Northline Studio",
    "email": "billing@northline.studio",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amountDue": "$2,499.00",
    "dueDate": "12 Jul, 10:00 am"
  },
  {
    "_id": "2",
    "invoice": "INV-7183Admin kit integration",
    "invoiceText8": "INV-7183",
    "invoiceText10": "Admin kit integration",
    "customer": "Vela Design Co.",
    "email": "finance@veladesign.co",
    "status": "Paid",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "amountDue": "$0.00",
    "dueDate": "28 Jun, 4:00 pm"
  },
  {
    "_id": "3",
    "invoice": "INV-7182Template migration",
    "invoiceText8": "INV-7182",
    "invoiceText10": "Template migration",
    "customer": "Harborline Apps",
    "email": "ap@harborline.app",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "amountDue": "$3,180.00",
    "dueDate": "12 Jun, 2:30 pm"
  },
  {
    "_id": "4",
    "invoice": "INV-7181Duplicate component order",
    "invoiceText8": "INV-7181",
    "invoiceText10": "Duplicate component order",
    "customer": "Pollen Interface",
    "email": "ops@polleninterface.com",
    "status": "Void",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error",
    "amountDue": "$0.00",
    "dueDate": "8 Jun, 5:00 pm"
  },
  {
    "_id": "5",
    "invoice": "INV-7180Figma kit handoff",
    "invoiceText8": "INV-7180",
    "invoiceText10": "Figma kit handoff",
    "customer": "Argent Labs",
    "email": "billing@argentlabs.dev",
    "status": "Draft",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default",
    "amountDue": "$1,950.00",
    "dueDate": "24 Jun, 12:00 pm"
  },
  {
    "_id": "6",
    "invoice": "INV-7179Lifetime access bundle",
    "invoiceText8": "INV-7179",
    "invoiceText10": "Lifetime access bundle",
    "customer": "Cedar UI Works",
    "email": "receipts@cedarui.works",
    "status": "Paid",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "amountDue": "$0.00",
    "dueDate": "3 Jun, 9:30 am"
  },
  {
    "_id": "7",
    "invoice": "INV-7178Private block request",
    "invoiceText8": "INV-7178",
    "invoiceText10": "Private block request",
    "customer": "North Pier Digital",
    "email": "accounts@northpier.digital",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "amountDue": "$2,750.00",
    "dueDate": "25 May, 6:45 pm"
  },
  {
    "_id": "8",
    "invoice": "INV-7177Payment portal polish",
    "invoiceText8": "INV-7177",
    "invoiceText10": "Payment portal polish",
    "customer": "Rune Atelier",
    "email": "studio@runeatelier.com",
    "status": "Sent",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info",
    "amountDue": "$1,200.00",
    "dueDate": "20 Jun, 11:15 am"
  },
  {
    "_id": "9",
    "invoice": "INV-7176Audit dashboard blocks",
    "invoiceText8": "INV-7176",
    "invoiceText10": "Audit dashboard blocks",
    "customer": "Prism Labs",
    "email": "finance@prismlabs.dev",
    "status": "Paid",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "amountDue": "$0.00",
    "dueDate": "14 May, 1:30 pm"
  },
  {
    "_id": "10",
    "invoice": "INV-7175Invoice PDF templates",
    "invoiceText8": "INV-7175",
    "invoiceText10": "Invoice PDF templates",
    "customer": "Northstar Media",
    "email": "billing@northstar.media",
    "status": "Overdue",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-7 rounded-md px-2.5 text-xs font-medium shadow-none hover:bg-inherit border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning",
    "amountDue": "$2,980.00",
    "dueDate": "2 May, 10:00 am"
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
    "accessorKey": "email",
    "header": "Email"
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
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchInvoices || '').toLowerCase()
  const keys = ["invoice","customer","email","status","amountDue","dueDate"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-list-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
            <section class="min-w-0 flex-1 pt-6 pb-8">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <div>
                    <h1 class="text-base font-semibold text-highlighted">Invoices</h1>
                    <p class="text-muted text-sm">12 customer invoices across open, paid, and draft states</p>
                  </div>
                  <div class="flex flex-col gap-2 sm:min-w-[520px] sm:flex-row sm:items-center sm:justify-end">
                    <div class="relative min-w-0 flex-1 sm:max-w-72">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchInvoices" type="text" aria-label="Search invoices" placeholder="Search invoices..." name="searchInvoices" class="flex w-full rounded-md text-base md:text-sm h-9 pr-8 pl-9" :ui="{ base: 'h-full' }" />
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 justify-between gap-2" aria-label="Filters" type="button" @click="openAction(&quot;Filters&quot;)">
                      <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                      Filters
                    </UButton>
                  </div>
                </div>
                <div class="horizontal-scrollbar vertical-scrollbar overflow-auto">
                  <!-- Table 1: Invoice / Customer / Email / Status / Amount Due / Due Date -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1180px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #invoice-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Invoice" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #invoice-cell="{ row }">
                      <div class="flex min-w-max items-center gap-3">
                        <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-md border border-default">
                          <UIcon name="i-lucide-file-text" class="size-4" />
                        </span>
                        <span class="min-w-0">
                          <span class="text-highlighted block max-w-[260px] truncate text-sm font-medium">{{ row.original.invoiceText8 }}</span>
                          <span class="text-muted block max-w-[260px] truncate text-xs">{{ row.original.invoiceText10 }}</span>
                        </span>
                      </div>
                    </template>
                    <template #customer-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #customer-cell="{ row }">
                      <span class="text-highlighted font-medium whitespace-nowrap">{{ row.original.customer }}</span>
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
                      <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                    </template>
                    <template #amountDue-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Amount Due" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #amountDue-cell="{ row }">
                      <span class="text-highlighted font-medium">{{ row.original.amountDue }}</span>
                    </template>
                    <template #dueDate-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Due Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #dueDate-cell="{ row }">
                      <time class="text-highlighted whitespace-nowrap">{{ row.original.dueDate }}</time>
                    </template>
                  </UTable>
                </div>
                <div class="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <p class="text-muted text-sm">Showing 1-10 of12 invoices</p>
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
