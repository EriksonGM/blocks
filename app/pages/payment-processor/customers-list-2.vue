<!-- Page: /payment-processor/customers-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Customers List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchCustomerIDMethod": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All Customers",
    "value": "0"
  },
  {
    "label": "Payment Methods",
    "value": "1"
  },
  {
    "label": "Risk & KYC",
    "value": "2"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "customer": "Northstar Supply Co.billing@northstarsupply.com",
    "customerText4": "Northstar Supply Co.",
    "customerText6": "billing@northstarsupply.com",
    "account": "cus_9Kx41LBusiness account",
    "accountText3": "cus_9Kx41L",
    "accountText5": "Business account",
    "lifetimeSpend": "$128,420Visa ending 4242",
    "lifetimeSpendText3": "$128,420",
    "lifetimeSpendText5": "Visa ending 4242",
    "lastPayment": "06/12/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  },
  {
    "_id": "2",
    "customer": "Aster Labsfinance@asterlabs.io",
    "customerText4": "Aster Labs",
    "customerText6": "finance@asterlabs.io",
    "account": "cus_8Vn20PStartup account",
    "accountText3": "cus_8Vn20P",
    "accountText5": "Startup account",
    "lifetimeSpend": "$84,750ACH verified",
    "lifetimeSpendText3": "$84,750",
    "lifetimeSpendText5": "ACH verified",
    "lastPayment": "06/10/2026",
    "riskStatus": "Review",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "riskStatusName3": "i-lucide-clock-3"
  },
  {
    "_id": "3",
    "customer": "Meridian Healthap@meridianhealth.com",
    "customerText4": "Meridian Health",
    "customerText6": "ap@meridianhealth.com",
    "account": "cus_7Qs88BEnterprise account",
    "accountText3": "cus_7Qs88B",
    "accountText5": "Enterprise account",
    "lifetimeSpend": "$210,300Amex ending 3005",
    "lifetimeSpendText3": "$210,300",
    "lifetimeSpendText5": "Amex ending 3005",
    "lastPayment": "06/09/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  },
  {
    "_id": "4",
    "customer": "Rivergate Studiosops@rivergate.studio",
    "customerText4": "Rivergate Studios",
    "customerText6": "ops@rivergate.studio",
    "account": "cus_6Bd19QCreator account",
    "accountText3": "cus_6Bd19Q",
    "accountText5": "Creator account",
    "lifetimeSpend": "$32,180Mastercard ending 1881",
    "lifetimeSpendText3": "$32,180",
    "lifetimeSpendText5": "Mastercard ending 1881",
    "lastPayment": "06/07/2026",
    "riskStatus": "Blocked",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:bg-error/30 dark:text-error dark:border-error/20",
    "riskStatusName3": "i-lucide-circle-x"
  },
  {
    "_id": "5",
    "customer": "Kite Retail Grouppayments@kiteretail.com",
    "customerText4": "Kite Retail Group",
    "customerText6": "payments@kiteretail.com",
    "account": "cus_5Zp62TBusiness account",
    "accountText3": "cus_5Zp62T",
    "accountText5": "Business account",
    "lifetimeSpend": "$96,040ACH verified",
    "lifetimeSpendText3": "$96,040",
    "lifetimeSpendText5": "ACH verified",
    "lastPayment": "06/04/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  },
  {
    "_id": "6",
    "customer": "Bluebird Eventsaccounts@bluebirdevents.co",
    "customerText4": "Bluebird Events",
    "customerText6": "accounts@bluebirdevents.co",
    "account": "cus_4Ta73RSeasonal account",
    "accountText3": "cus_4Ta73R",
    "accountText5": "Seasonal account",
    "lifetimeSpend": "$58,600Visa ending 9021",
    "lifetimeSpendText3": "$58,600",
    "lifetimeSpendText5": "Visa ending 9021",
    "lastPayment": "06/01/2026",
    "riskStatus": "Review",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "riskStatusName3": "i-lucide-clock-3"
  },
  {
    "_id": "7",
    "customer": "Prairie Foodsar@prairiefoods.com",
    "customerText4": "Prairie Foods",
    "customerText6": "ar@prairiefoods.com",
    "account": "cus_3Lm44DMarketplace seller",
    "accountText3": "cus_3Lm44D",
    "accountText5": "Marketplace seller",
    "lifetimeSpend": "$141,980Mastercard ending 6409",
    "lifetimeSpendText3": "$141,980",
    "lifetimeSpendText5": "Mastercard ending 6409",
    "lastPayment": "05/29/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  },
  {
    "_id": "8",
    "customer": "Nomad Roboticsbilling@nomadrobotics.ai",
    "customerText4": "Nomad Robotics",
    "customerText6": "billing@nomadrobotics.ai",
    "account": "cus_2Er35NEnterprise account",
    "accountText3": "cus_2Er35N",
    "accountText5": "Enterprise account",
    "lifetimeSpend": "$301,220Wire enabled",
    "lifetimeSpendText3": "$301,220",
    "lifetimeSpendText5": "Wire enabled",
    "lastPayment": "05/27/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  },
  {
    "_id": "9",
    "customer": "Harbor Fleetpayables@harborfleet.com",
    "customerText4": "Harbor Fleet",
    "customerText6": "payables@harborfleet.com",
    "account": "cus_1Cb90WBusiness account",
    "accountText3": "cus_1Cb90W",
    "accountText5": "Business account",
    "lifetimeSpend": "$73,450Visa ending 1155",
    "lifetimeSpendText3": "$73,450",
    "lifetimeSpendText5": "Visa ending 1155",
    "lastPayment": "05/24/2026",
    "riskStatus": "Review",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning dark:border-warning/20",
    "riskStatusName3": "i-lucide-clock-3"
  },
  {
    "_id": "10",
    "customer": "Luma Learningadmin@lumalearning.org",
    "customerText4": "Luma Learning",
    "customerText6": "admin@lumalearning.org",
    "account": "cus_0Aj27KNonprofit account",
    "accountText3": "cus_0Aj27K",
    "accountText5": "Nonprofit account",
    "lifetimeSpend": "$45,760ACH verified",
    "lifetimeSpendText3": "$45,760",
    "lifetimeSpendText5": "ACH verified",
    "lastPayment": "05/21/2026",
    "riskStatus": "Active",
    "riskStatusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:bg-success/30 dark:text-success dark:border-success/20",
    "riskStatusName3": "i-lucide-circle-check"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "account",
    "header": "Account"
  },
  {
    "accessorKey": "lifetimeSpend",
    "header": "Lifetime Spend"
  },
  {
    "accessorKey": "lastPayment",
    "header": "Last Payment"
  },
  {
    "accessorKey": "riskStatus",
    "header": "Risk Status"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchCustomerIDMethod || '').toLowerCase()
  const keys = ["customer","account","lifetimeSpend","lastPayment","riskStatus"] as const
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
  const rows = table1FilteredRows.value.map(row => ["customer","account","lifetimeSpend","lastPayment","riskStatus"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-customers-list-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customers-list-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="bg-default">
              <div class="border-default border-b px-4 pt-8 pb-4 sm:px-6 lg:px-8">
                <div>
                  <h1 class="text-highlighted text-[22px] leading-7 font-semibold tracking-normal text-highlighted">Customers</h1>
                  <p class="text-muted mt-1.5 text-sm leading-5 font-medium">Monitor customer payment methods, processing volume, and risk status.</p>
                </div>
                <div class="mt-8 mb-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
                  <div class="flex items-center gap-3">
                    <div class="bg-muted flex size-11 shrink-0 items-center justify-center rounded-[10px] border p-[3px] border-default">
                      <div class="bg-default flex size-full items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-users" class="text-highlighted size-[18px]" />
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="text-highlighted text-lg leading-none font-semibold tracking-normal">8,214</div>
                      <div class="text-muted mt-1.5 text-sm leading-none font-medium">Active Customers</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="bg-muted flex size-11 shrink-0 items-center justify-center rounded-[10px] border p-[3px] border-default">
                      <div class="bg-default flex size-full items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-badge-dollar-sign" class="text-highlighted size-[18px]" />
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="text-highlighted text-lg leading-none font-semibold tracking-normal">$1.28M</div>
                      <div class="text-muted mt-1.5 text-sm leading-none font-medium">Processed Volume</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="bg-muted flex size-11 shrink-0 items-center justify-center rounded-[10px] border p-[3px] border-default">
                      <div class="bg-default flex size-full items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-receipt-text" class="text-highlighted size-[18px]" />
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="text-highlighted text-lg leading-none font-semibold tracking-normal">$84.2K</div>
                      <div class="text-muted mt-1.5 text-sm leading-none font-medium">Open Invoices</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="bg-muted flex size-11 shrink-0 items-center justify-center rounded-[10px] border p-[3px] border-default">
                      <div class="bg-default flex size-full items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-shield-alert" class="text-highlighted size-[18px]" />
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="text-highlighted text-lg leading-none font-semibold tracking-normal">12</div>
                      <div class="text-muted mt-1.5 text-sm leading-none font-medium">Needs Review</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-default border-b">
                <div data-orientation="horizontal">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center p-1 h-11 gap-0 rounded-none bg-transparent px-4 py-0 sm:px-6 lg:px-8" data-orientation="horizontal" style="outline:none" />
                </div>
              </div>
              <div class="p-4 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                  <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <div class="relative">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-4 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchCustomerIDMethod" type="search" placeholder="Search customer, ID, method..." aria-label="Search customer" name="searchCustomerIDMethod" class="flex md:text-sm bg-(--ui-bg-muted)/40 h-9 w-full rounded-md pl-10 text-sm font-medium sm:w-[260px]" :ui="{ base: 'h-full' }" />
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
                  <div class="flex items-center gap-4">
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Export" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      Export
                    </UButton>
                  </div>
                </div>
                <div class="border-default mt-4 overflow-hidden rounded-lg border">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Customer / Account / Lifetime Spend / Last Payment / Risk Status -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #customer-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customer-cell="{ row }">
                        <div class="flex items-start gap-3">
                          <div>
                            <div class="text-highlighted text-sm leading-5 font-semibold">{{ row.original.customerText4 }}</div>
                            <div class="text-muted text-sm leading-4 font-medium">{{ row.original.customerText6 }}</div>
                          </div>
                          <UIcon name="i-lucide-arrow-up-right" class="mt-0.5 size-3.5 shrink-0 text-error opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100" />
                        </div>
                      </template>
                      <template #account-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Account" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #account-cell="{ row }">
                        <div class="text-highlighted text-sm leading-5 font-semibold">{{ row.original.accountText3 }}</div>
                        <div class="text-muted text-sm leading-4 font-medium">{{ row.original.accountText5 }}</div>
                      </template>
                      <template #lifetimeSpend-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Lifetime Spend" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #lifetimeSpend-cell="{ row }">
                        <div class="text-highlighted text-sm leading-5 font-semibold">{{ row.original.lifetimeSpendText3 }}</div>
                        <div class="text-muted text-sm leading-4 font-medium">{{ row.original.lifetimeSpendText5 }}</div>
                      </template>
                      <template #lastPayment-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Last Payment" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #lastPayment-cell="{ row }">
                        {{ row.original.lastPayment }}
                      </template>
                      <template #riskStatus-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Risk Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #riskStatus-cell="{ row }">
                        <UBadge color="neutral" variant="subtle" :class="row.original.riskStatusClass2">
                          <UIcon :name="row.original.riskStatusName3" class="size-3.5" />
                          <span>{{ row.original.riskStatus }}</span>
                        </UBadge>
                      </template>
                    </UTable>
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
