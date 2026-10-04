<!-- Page: /payment-processor/customer-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Customer Detail · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchInvoices": "",
  "allStatuses": "All statuses"
})

const allStatusesOptions = [
  "All statuses",
  "Paid",
  "Declined"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "paymentMethod": "G PayGoogle/Visa",
    "paymentMethodText4": "G Pay",
    "paymentMethodText6": "Google/Visa",
    "ending": "Ending 9862",
    "role": "Default",
    "roleGroup": "0",
    "dateExpired": "12/2032",
    "status": "Working",
    "actions": "",
    "actionsArialabel3": "Manage Google/Visa"
  },
  {
    "_id": "2",
    "paymentMethod": "MCMastercard",
    "paymentMethodText4": "MC",
    "paymentMethodText6": "Mastercard",
    "ending": "Ending 7299",
    "role": "Backup",
    "roleGroup": "1",
    "dateExpired": "02/2030",
    "status": "Working",
    "actions": "",
    "actionsArialabel3": "Manage Mastercard"
  },
  {
    "_id": "3",
    "paymentMethod": "PayApple/JCB",
    "paymentMethodText4": "Pay",
    "paymentMethodText6": "Apple/JCB",
    "ending": "Ending 9834",
    "role": "Backup",
    "roleGroup": "1",
    "dateExpired": "08/2033",
    "status": "Working",
    "actions": "",
    "actionsArialabel3": "Manage Apple/JCB"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "paymentMethod",
    "header": "Payment method"
  },
  {
    "accessorKey": "ending",
    "header": "Ending"
  },
  {
    "accessorKey": "role",
    "header": "Role"
  },
  {
    "accessorKey": "dateExpired",
    "header": "Date expired"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchInvoices || '').toLowerCase()
  const keys = ["paymentMethod","ending","role","dateExpired","status","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="px-6 py-12 lg:px-10">
              <div class="mx-auto flex max-w-6xl flex-col gap-10">
                <header class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-11 border border-default">
                      <img class="aspect-square h-full w-full" alt="Northstar Supply Co." src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex flex-wrap items-center gap-2">
                        <h1 class="text-2xl font-semibold tracking-normal text-balance text-highlighted">Northstar Supply Co.</h1>
                        <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                          <span class="size-1 rounded-full bg-current" />
                          Active
                        </div>
                      </div>
                      <div class="text-muted mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
                        <span>Business account</span>
                        <span class="text-(--ui-border) hidden sm:inline">/</span>
                        <span class="inline-flex min-w-0 items-center gap-1.5">
                          <UIcon name="i-lucide-mail" class="size-3.5" />
                          <span class="truncate">billing@northstarsupply.com</span>
                        </span>
                        <span class="text-(--ui-border) hidden sm:inline">/</span>
                        <span class="tabular-nums">cus_9Kx41L</span>
                      </div>
                    </div>
                  </div>
                </header>
                <!-- Card 1: Team Premium -->
                <UCard class="bg-(--ui-bg-muted)/35 dark:bg-default isolate rounded-lg border-0 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-text-highlighted)_5%,_transparent),0_0_0_1px_var(--ui-border)]" :ui="{ body: 'contents' }">
                  <div class="flex flex-col gap-5 p-5 lg:flex-row lg:items-center">
                    <div class="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                      <div>
                        <p class="text-muted text-xs font-medium">Your plan</p>
                        <p class="mt-2 text-base font-semibold tabular-nums text-highlighted">Team Premium</p>
                      </div>
                      <div>
                        <p class="text-muted text-xs font-medium">Total amount</p>
                        <p class="mt-2 text-base font-semibold tabular-nums text-highlighted">120.00 USD</p>
                      </div>
                      <div>
                        <p class="text-muted text-xs font-medium">Cycle</p>
                        <p class="mt-2 text-base font-semibold tabular-nums text-highlighted">Monthly</p>
                      </div>
                      <div>
                        <p class="text-muted text-xs font-medium">Next billing date</p>
                        <p class="mt-2 text-base font-semibold tabular-nums text-highlighted">Mon, 19 Jan 2027</p>
                      </div>
                      <div>
                        <p class="text-muted text-xs font-medium">Members</p>
                        <p class="mt-2 text-base font-semibold tabular-nums text-highlighted">12 members</p>
                      </div>
                    </div>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 w-full lg:w-auto" aria-label="Edit plan" type="button" @click="openAction(&quot;Edit plan&quot;)">
                      Edit plan
                    </UButton>
                  </div>
                </UCard>
                <section class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div class="pb-4">
                      <h2 class="text-lg font-semibold tracking-normal text-balance text-highlighted">Payment methods</h2>
                      <p class="text-muted mt-1.5 text-sm font-medium">
                        Your bills will be sent from the default card shown below.
                        <span class="text-highlighted font-semibold">Learn more.</span>
                      </p>
                    </div>
                    <div class="flex gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9" aria-label="Add new card" type="button" @click="openAction(&quot;Add new card&quot;)">
                        Add new card
                      </UButton>
                    </div>
                  </div>
                  <!-- Card 2: G Pay -->
                  <UCard class="isolate overflow-hidden rounded-lg border-0 shadow-[0_0_0_1px_var(--ui-border),0_8px_24px_color-mix(in_oklab,_var(--ui-text-highlighted)_4%,_transparent)]" :ui="{ body: 'contents' }">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Payment method / Ending / Role / Date expired / Status -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #paymentMethod-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Payment method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #paymentMethod-cell="{ row }">
                          <div class="flex items-center gap-4">
                            <span class="bg-default flex h-8 w-12 items-center justify-center rounded-md text-[11px] font-semibold shadow-[0_0_0_1px_var(--ui-border)]">{{ row.original.paymentMethodText4 }}</span>
                            <span class="font-medium">{{ row.original.paymentMethodText6 }}</span>
                          </div>
                        </template>
                        <template #ending-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Ending" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #ending-cell="{ row }">
                          {{ row.original.ending }}
                        </template>
                        <template #role-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Role" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #role-cell="{ row }">
                          <template v-if="row.original.roleGroup === '0'">
                            <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                              <span class="size-1 rounded-full bg-current" />
                              {{ row.original.role }}
                            </div>
                          </template>
                          <template v-if="row.original.roleGroup === '1'">
                            <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-default bg-muted text-muted dark:bg-(--ui-bg-muted)/50">{{ row.original.role }}</div>
                          </template>
                        </template>
                        <template #dateExpired-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Date expired" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #dateExpired-cell="{ row }">
                          {{ row.original.dateExpired }}
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                            <span class="size-1 rounded-full bg-current" />
                            {{ row.original.status }}
                          </div>
                        </template>
                        <template #actions-cell="{ row }">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Manage Google/Visa&quot;, row.original._id, 1)">
                            <UIcon name="i-lucide-settings" class="size-4" />
                          </UButton>
                        </template>
                      </UTable>
                    </div>
                  </UCard>
                </section>
                <section class="flex flex-col gap-4">
                  <div class="flex flex-col gap-3">
                    <div class="pb-4">
                      <h2 class="text-lg font-semibold tracking-normal text-balance text-highlighted">Invoices</h2>
                      <p class="text-muted mt-1.5 text-sm font-medium">
                        Invoices are generated every 30 days and sent to your default payment method.
                        <span class="text-highlighted font-semibold">Learn more.</span>
                      </p>
                    </div>
                    <div class="flex w-full items-center gap-2">
                      <div class="relative min-w-0 flex-1">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchInvoices" type="search" placeholder="Search invoices" name="searchInvoices" class="flex rounded-md md:text-sm bg-(--ui-bg-muted)/35 h-9 w-full pl-9 text-sm font-medium" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.allStatuses" :items="allStatusesOptions" aria-label="Filter invoices by status" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border px-3 py-2 whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-default bg-(--ui-bg-muted)/35 h-9 w-40 shrink-0 text-sm font-medium shadow-none" />
                    </div>
                  </div>
                  <!-- Card 3: SD862840-48Sun, 20 Dec 2026$120.00Premium MonthlyPaid -->
                  <UCard class="isolate overflow-hidden rounded-lg border-0 shadow-[0_0_0_1px_var(--ui-border),0_8px_24px_color-mix(in_oklab,_var(--ui-text-highlighted)_4%,_transparent)]" :ui="{ body: 'contents' }">
                    <div class="overflow-x-auto">
                      <div class="min-w-[820px]">
                        <div class="text-muted grid min-h-10 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px_32px] items-center gap-4 border-b px-4 text-sm font-medium border-default">
                          <span class="inline-flex items-center gap-1">
                            Invoice ID
                            <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                          </span>
                          <span class="inline-flex items-center gap-1">
                            Date sent
                            <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                          </span>
                          <span class="inline-flex items-center gap-1">
                            Amount
                            <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                          </span>
                          <span class="inline-flex items-center gap-1">
                            Plan
                            <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                          </span>
                          <span class="inline-flex items-center gap-1">
                            Status
                            <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                          </span>
                          <span class="sr-only">Expand</span>
                        </div>
                        <div data-orientation="vertical">
                          <div data-orientation="vertical" class="border-b border-default last:border-b-0">
                            <h3 data-orientation="vertical" class="flex text-highlighted">
                              <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 min-h-14 px-4 py-0 text-sm hover:no-underline active:scale-[0.995]" aria-label="SD862840-48Sun, 20 Dec 2026$120.00Premium MonthlyPaid" type="button" @click="openAction(&quot;SD862840-48Sun, 20 Dec 2026$120.00Premium MonthlyPaid&quot;)">
                                <div class="grid flex-1 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px] items-center gap-4 pr-4 text-left">
                                  <span class="text-muted font-medium tabular-nums">SD862840-48</span>
                                  <span class="text-muted font-medium tabular-nums">Sun, 20 Dec 2026</span>
                                  <span class="font-semibold tabular-nums">$120.00</span>
                                  <span class="font-medium">Premium Monthly</span>
                                  <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                                    <span class="size-1 rounded-full bg-current" />
                                    Paid
                                  </div>
                                </div>
                                <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                              </UButton>
                            </h3>
                            <div id="radix-_R_ja5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                          </div>
                          <div data-orientation="vertical" class="border-b border-default last:border-b-0">
                            <h3 data-orientation="vertical" class="flex text-highlighted">
                              <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 min-h-14 px-4 py-0 text-sm hover:no-underline active:scale-[0.995]" aria-label="SD862840-47Sat, 20 Nov 2026$120.00Premium MonthlyPaid" type="button" @click="openAction(&quot;SD862840-47Sat, 20 Nov 2026$120.00Premium MonthlyPaid&quot;)">
                                <div class="grid flex-1 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px] items-center gap-4 pr-4 text-left">
                                  <span class="text-muted font-medium tabular-nums">SD862840-47</span>
                                  <span class="text-muted font-medium tabular-nums">Sat, 20 Nov 2026</span>
                                  <span class="font-semibold tabular-nums">$120.00</span>
                                  <span class="font-medium">Premium Monthly</span>
                                  <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                                    <span class="size-1 rounded-full bg-current" />
                                    Paid
                                  </div>
                                </div>
                                <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                              </UButton>
                            </h3>
                            <div id="radix-_R_la5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                          </div>
                          <div data-orientation="vertical" class="border-b border-default last:border-b-0">
                            <h3 data-orientation="vertical" class="flex text-highlighted">
                              <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 min-h-14 px-4 py-0 text-sm hover:no-underline active:scale-[0.995]" aria-label="SD862840-46Fri, 19 Oct 2026$140.00Premium MonthlyPaid" type="button" @click="openAction(&quot;SD862840-46Fri, 19 Oct 2026$140.00Premium MonthlyPaid&quot;)">
                                <div class="grid flex-1 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px] items-center gap-4 pr-4 text-left">
                                  <span class="text-muted font-medium tabular-nums">SD862840-46</span>
                                  <span class="text-muted font-medium tabular-nums">Fri, 19 Oct 2026</span>
                                  <span class="font-semibold tabular-nums">$140.00</span>
                                  <span class="font-medium">Premium Monthly</span>
                                  <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                                    <span class="size-1 rounded-full bg-current" />
                                    Paid
                                  </div>
                                </div>
                                <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                              </UButton>
                            </h3>
                            <div id="radix-_R_na5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                          </div>
                          <div data-orientation="vertical" class="border-b border-default last:border-b-0">
                            <h3 data-orientation="vertical" class="flex text-highlighted">
                              <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 min-h-14 px-4 py-0 text-sm hover:no-underline active:scale-[0.995]" aria-label="SD862840-45-1Fri, 19 Oct 2026$140.00Premium MonthlyDeclined" type="button" @click="openAction(&quot;SD862840-45-1Fri, 19 Oct 2026$140.00Premium MonthlyDeclined&quot;)">
                                <div class="grid flex-1 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px] items-center gap-4 pr-4 text-left">
                                  <span class="text-muted font-medium tabular-nums">SD862840-45-1</span>
                                  <span class="text-muted font-medium tabular-nums">Fri, 19 Oct 2026</span>
                                  <span class="font-semibold tabular-nums">$140.00</span>
                                  <span class="font-medium">Premium Monthly</span>
                                  <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error">
                                    <span class="size-1 rounded-full bg-current" />
                                    Declined
                                  </div>
                                </div>
                                <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                              </UButton>
                            </h3>
                            <div id="radix-_R_pa5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                          </div>
                          <div data-orientation="vertical" class="border-b border-default last:border-b-0">
                            <h3 data-orientation="vertical" class="flex text-highlighted">
                              <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 min-h-14 px-4 py-0 text-sm hover:no-underline active:scale-[0.995]" aria-label="SD862840-41Mon, 20 Jun 2026$140.00Premium MonthlyPaid" type="button" @click="openAction(&quot;SD862840-41Mon, 20 Jun 2026$140.00Premium MonthlyPaid&quot;)">
                                <div class="grid flex-1 grid-cols-[minmax(150px,1.2fr)_minmax(150px,1fr)_110px_minmax(150px,1fr)_96px] items-center gap-4 pr-4 text-left">
                                  <span class="text-muted font-medium tabular-nums">SD862840-41</span>
                                  <span class="text-muted font-medium tabular-nums">Mon, 20 Jun 2026</span>
                                  <span class="font-semibold tabular-nums">$140.00</span>
                                  <span class="font-medium">Premium Monthly</span>
                                  <div class="inline-flex items-center py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-[18px] w-fit gap-1 justify-self-start rounded-md border px-1.5 text-[10px] leading-none shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                                    <span class="size-1 rounded-full bg-current" />
                                    Paid
                                  </div>
                                </div>
                                <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                              </UButton>
                            </h3>
                            <div id="radix-_R_ra5fiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </UCard>
                </section>
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
