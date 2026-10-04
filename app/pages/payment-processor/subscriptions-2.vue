<!-- Page: /payment-processor/subscriptions-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Subscriptions 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSubscribers": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "plan": "Pro Monthly$29 / monthly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-success",
    "planText7": "Pro Monthly",
    "planText9": "$29",
    "planText11": "monthly",
    "subscribers": "842",
    "mRR": "$24,418",
    "growth": "+12.8%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,21.64608076009501 20.57142857142857,19.72209026128266 30.857142857142854,17.679334916864608 41.14285714285714,15.114014251781473 51.42857142857143,12.311163895486937 61.71428571428571,9.294536817102138 72,5",
    "open": "",
    "openClass3": "size-4 transition-transform text-highlighted translate-x-0.5"
  },
  {
    "_id": "2",
    "plan": "Team Yearly$348 / yearly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-info opacity-45",
    "planText7": "Team Yearly",
    "planText9": "$348",
    "planText11": "yearly",
    "subscribers": "316",
    "mRR": "$9,164",
    "growth": "+8.6%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,20.66871165644172 20.57142857142857,18.644171779141104 30.857142857142854,16.558282208588956 41.14285714285714,14.042944785276074 51.42857142857143,11.404907975460123 61.71428571428571,7.969325153374234 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "3",
    "plan": "Studio Monthly$79 / monthly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-secondary opacity-45",
    "planText7": "Studio Monthly",
    "planText9": "$79",
    "planText11": "monthly",
    "subscribers": "184",
    "mRR": "$14,536",
    "growth": "+5.2%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,20.08955223880597 20.57142857142857,18.01865671641791 30.857142857142854,14.828358208955224 41.14285714285714,12.813432835820896 51.42857142857143,9.567164179104477 61.71428571428571,7.496268656716419 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "4",
    "plan": "Starter Monthly$12 / monthly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-warning opacity-45",
    "planText7": "Starter Monthly",
    "planText9": "$12",
    "planText11": "monthly",
    "subscribers": "1,264",
    "mRR": "$15,168",
    "growth": "+18.4%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,21.108907960935188 20.57142857142857,18.39212784847588 30.857142857142854,16.47440071026931 41.14285714285714,13.491269606392423 51.42857142857143,10.934300088783665 61.71428571428571,7.89789878662326 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "5",
    "plan": "Agency Yearly$1,188 / yearly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-error opacity-45",
    "planText7": "Agency Yearly",
    "planText9": "$1,188",
    "planText11": "yearly",
    "subscribers": "92",
    "mRR": "$9,108",
    "growth": "+3.1%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,21.468586387434556 20.57142857142857,17.81675392670157 30.857142857142854,14.989528795811518 41.14285714285714,13.104712041884817 51.42857142857143,9.924083769633508 61.71428571428571,7.80366492146597 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "6",
    "plan": "Components Monthly$19 / monthly · Archived",
    "planGroup": "1",
    "planClass4": "h-8 w-1 rounded-full bg-accented opacity-45",
    "planText7": "Components Monthly",
    "planText9": "$19",
    "planText11": "monthly",
    "subscribers": "48",
    "mRR": "$912",
    "growth": "-6.7%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-error dark:text-error border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-error border-default",
    "trendPoints9": "0,5 10.285714285714285,6.771653543307089 20.57142857142857,9.606299212598426 30.857142857142854,11.377952755905513 41.14285714285714,13.503937007874017 51.42857142857143,16.69291338582677 61.71428571428571,20.590551181102363 72,23",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "7",
    "plan": "Scale Monthly$149 / monthly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-info opacity-45",
    "planText7": "Scale Monthly",
    "planText9": "$149",
    "planText11": "monthly",
    "subscribers": "138",
    "mRR": "$20,562",
    "growth": "+9.9%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,20.725752508361204 20.57142857142857,18.11705685618729 30.857142857142854,15.307692307692308 41.14285714285714,12.498327759197325 51.42857142857143,9.521739130434783 61.71428571428571,7.414715719063544 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  },
  {
    "_id": "8",
    "plan": "Starter Yearly$120 / yearly",
    "planGroup": "0",
    "planClass4": "h-8 w-1 rounded-full bg-success opacity-45",
    "planText7": "Starter Yearly",
    "planText9": "$120",
    "planText11": "yearly",
    "subscribers": "428",
    "mRR": "$4,280",
    "growth": "+6.4%",
    "growthClass1": "border-b px-4 text-sm font-medium tabular-nums text-success dark:text-success border-default",
    "trend": "",
    "trendClass1": "border-b px-4 text-success border-default",
    "trendPoints9": "0,23 10.285714285714285,20.48 20.57142857142857,17.06 30.857142857142854,14 41.14285714285714,11.66 51.42857142857143,9.14 61.71428571428571,7.16 72,5",
    "open": "",
    "openClass3": "text-muted size-4 transition-transform"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "plan",
    "header": "Plan"
  },
  {
    "accessorKey": "subscribers",
    "header": "Subscribers"
  },
  {
    "accessorKey": "mRR",
    "header": "MRR"
  },
  {
    "accessorKey": "growth",
    "header": "Growth"
  },
  {
    "accessorKey": "trend",
    "header": "Trend"
  },
  {
    "accessorKey": "open",
    "header": "Open"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchSubscribers || '').toLowerCase()
  const keys = ["plan","subscribers","mRR","growth","trend","open"] as const
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
    "plan": "Pro Monthly",
    "planClass3": "size-1.5 rounded-full bg-success",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amount": "$29.00",
    "paymentMethod": "Visa •••• 4928",
    "signedUp": "Today, 9:24 am",
    "actions": "",
    "actionsArialabel3": "Actions for Avery Stone"
  },
  {
    "_id": "2",
    "subscriber": "Juniper Labsbilling@juniperlabs.dev",
    "subscriberAlt5": "Juniper Labs",
    "subscriberSrc6": "/reference/9310a24e0d573ddb.png",
    "subscriberText9": "Juniper Labs",
    "subscriberText11": "billing@juniperlabs.dev",
    "plan": "Team Yearly",
    "planClass3": "size-1.5 rounded-full bg-info",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amount": "$348.00",
    "paymentMethod": "ACH debit",
    "signedUp": "Today, 8:11 am",
    "actions": "",
    "actionsArialabel3": "Actions for Juniper Labs"
  },
  {
    "_id": "3",
    "subscriber": "Maya Chenmaya.chen@solstice.co",
    "subscriberAlt5": "Maya Chen",
    "subscriberSrc6": "/reference/a99c47c2fa3dc656.png",
    "subscriberText9": "Maya Chen",
    "subscriberText11": "maya.chen@solstice.co",
    "plan": "Studio Monthly",
    "planClass3": "size-1.5 rounded-full bg-secondary",
    "status": "Past due",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:text-warning",
    "statusName3": "i-lucide-circle-alert",
    "amount": "$79.00",
    "paymentMethod": "Mastercard •••• 1882",
    "signedUp": "Yesterday, 6:48 pm",
    "actions": "",
    "actionsArialabel3": "Actions for Maya Chen"
  },
  {
    "_id": "4",
    "subscriber": "Drift Supplyaccounts@driftsupply.com",
    "subscriberAlt5": "Drift Supply",
    "subscriberSrc6": "/reference/247ac7c76922347b.png",
    "subscriberText9": "Drift Supply",
    "subscriberText11": "accounts@driftsupply.com",
    "plan": "Starter Monthly",
    "planClass3": "size-1.5 rounded-full bg-warning",
    "status": "Trialing",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:text-info",
    "statusName3": "i-lucide-clock-3",
    "amount": "$12.00",
    "paymentMethod": "Amex •••• 3007",
    "signedUp": "Yesterday, 8:05 am",
    "actions": "",
    "actionsArialabel3": "Actions for Drift Supply"
  },
  {
    "_id": "5",
    "subscriber": "Theo Ramireztheo.ramirez@fieldnote.app",
    "subscriberAlt5": "Theo Ramirez",
    "subscriberSrc6": "/reference/ac13c01a479a177b.png",
    "subscriberText9": "Theo Ramirez",
    "subscriberText11": "theo.ramirez@fieldnote.app",
    "plan": "Agency Yearly",
    "planClass3": "size-1.5 rounded-full bg-error",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amount": "$1,188.00",
    "paymentMethod": "Bank transfer",
    "signedUp": "9 Jun, 11:36 am",
    "actions": "",
    "actionsArialabel3": "Actions for Theo Ramirez"
  },
  {
    "_id": "6",
    "subscriber": "Orbit Kitchenfinance@orbitkitchen.co",
    "subscriberAlt5": "Orbit Kitchen",
    "subscriberSrc6": "/reference/62828bc2a489837e.png",
    "subscriberText9": "Orbit Kitchen",
    "subscriberText11": "finance@orbitkitchen.co",
    "plan": "Components Monthly",
    "planClass3": "size-1.5 rounded-full bg-accented",
    "status": "Paused",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-default bg-muted text-muted",
    "statusName3": "i-lucide-pause",
    "amount": "$19.00",
    "paymentMethod": "Visa •••• 7712",
    "signedUp": "8 Jun, 4:52 pm",
    "actions": "",
    "actionsArialabel3": "Actions for Orbit Kitchen"
  },
  {
    "_id": "7",
    "subscriber": "Priya Nairpriya.nair@evermint.in",
    "subscriberAlt5": "Priya Nair",
    "subscriberSrc6": "/reference/0a5fda67e048ade8.png",
    "subscriberText9": "Priya Nair",
    "subscriberText11": "priya.nair@evermint.in",
    "plan": "Pro Monthly",
    "planClass3": "size-1.5 rounded-full bg-success",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amount": "$29.00",
    "paymentMethod": "UPI mandate",
    "signedUp": "8 Jun, 7:17 pm",
    "actions": "",
    "actionsArialabel3": "Actions for Priya Nair"
  },
  {
    "_id": "8",
    "subscriber": "Harbor Ninereceipts@harbornine.com",
    "subscriberAlt5": "Harbor Nine",
    "subscriberSrc6": "/reference/c856dbf3620c8188.png",
    "subscriberText9": "Harbor Nine",
    "subscriberText11": "receipts@harbornine.com",
    "plan": "Pro Monthly",
    "planClass3": "size-1.5 rounded-full bg-success",
    "status": "Active",
    "statusClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "statusName3": "i-lucide-check",
    "amount": "$29.00",
    "paymentMethod": "Apple Pay",
    "signedUp": "7 Jun, 12:40 pm",
    "actions": "",
    "actionsArialabel3": "Actions for Harbor Nine"
  }
])
type Table2Row = (typeof table2Rows.value)[number]

const table2Columns: TableColumn<Table2Row>[] = [
  {
    "accessorKey": "subscriber",
    "header": "Subscriber"
  },
  {
    "accessorKey": "plan",
    "header": "Plan"
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
    "accessorKey": "paymentMethod",
    "header": "Payment method"
  },
  {
    "accessorKey": "signedUp",
    "header": "Signed up"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table2Sorting = ref<{ id: string, desc: boolean }[]>([])

const table2Selection = ref<Record<string, boolean>>({})

const table2FilteredRows = computed(() => {
  const query = String(form.searchSubscribers || '').toLowerCase()
  const keys = ["subscriber","plan","status","amount","paymentMethod","signedUp","actions"] as const
  return table2Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
    if (actionDialog.table === 2) table2Rows.value = table2Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["plan","subscribers","mRR","growth","trend","open"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-subscriptions-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/subscriptions-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="vertical-scrollbar min-h-0 w-full overflow-y-auto">
            <header class="flex flex-col gap-4 border-b px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 border-default">
              <div>
                <div class="flex items-center gap-2">
                  <h1 class="text-xl font-semibold tracking-tight text-highlighted">Subscriptions</h1>
                  <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[10px] font-medium border-default">24 plans</div>
                </div>
                <p class="text-muted mt-1 text-sm">Monitor recurring revenue, renewals, and subscriber health.</p>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 gap-2" aria-label="Export" type="button" @click="exportCsv()">
                  <UIcon name="i-lucide-download" class="size-4" />
                  Export
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-9 gap-2" aria-label="New subscription" type="button" @click="openAction(&quot;New subscription&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                  New subscription
                </UButton>
              </div>
            </header>
            <section class="grid min-h-[490px] border-b xl:min-h-[680px] xl:grid-cols-[minmax(520px,1.35fr)_minmax(390px,0.65fr)] 2xl:min-h-[740px] border-default">
              <div class="flex min-w-0 flex-col border-b xl:border-r xl:border-b-0 border-default">
                <div class="horizontal-scrollbar overflow-x-auto">
                  <!-- Table 1: Plan / Subscribers / MRR / Growth / Trend / Open -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full min-w-[700px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #plan-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Plan" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #plan-cell="{ row }">
                      <template v-if="row.original.planGroup === '0'">
                        <UButton color="neutral" variant="ghost" class="flex w-full items-center gap-3 text-left focus-visible:outline-none" aria-label="Pro Monthly$29 / monthly" type="button" @click="openAction(&quot;Pro Monthly$29 / monthly&quot;, row.original._id, 1)">
                          <span :class="row.original.planClass4" />
                          <span class="min-w-0">
                            <span class="block truncate text-sm font-medium">{{ row.original.planText7 }}</span>
                            <span class="text-muted mt-0.5 block text-xs">{{ row.original.planText9 }} / {{ row.original.planText11 }}</span>
                          </span>
                        </UButton>
                      </template>
                      <template v-if="row.original.planGroup === '1'">
                        <UButton color="neutral" variant="ghost" class="flex w-full items-center gap-3 text-left focus-visible:outline-none" aria-label="Components Monthly$19 / monthly · Archived" type="button" @click="openAction(&quot;Components Monthly$19 / monthly · Archived&quot;, row.original._id, 1)">
                          <span class="h-8 w-1 rounded-full bg-accented opacity-45" />
                          <span class="min-w-0">
                            <span class="block truncate text-sm font-medium">Components Monthly</span>
                            <span class="text-muted mt-0.5 block text-xs">$19 / monthly · Archived</span>
                          </span>
                        </UButton>
                      </template>
                    </template>
                    <template #subscribers-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Subscribers" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #subscribers-cell="{ row }">
                      {{ row.original.subscribers }}
                    </template>
                    <template #mRR-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="MRR" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #mRR-cell="{ row }">
                      {{ row.original.mRR }}
                    </template>
                    <template #growth-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Growth" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #growth-cell="{ row }">
                      {{ row.original.growth }}
                    </template>
                    <template #trend-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Trend" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #trend-cell="{ row }">
                      <svg class="h-7 w-[72px]" viewBox="0 0 72 28" role="img" aria-label="Revenue trend" width="100%" height="100%">
                        <polyline fill="none" :points="row.original.trendPoints9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                      </svg>
                    </template>
                    <template #open-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Open" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #open-cell="{ row }">
                      <UIcon name="i-lucide-chevron-right" :class="row.original.openClass3 || 'size-4'" />
                    </template>
                  </UTable>
                </div>
                <div class="mt-auto flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 border-default">
                  <p class="text-muted text-xs">Showing 1-8 of 24 subscription plans</p>
                  <nav role="navigation" aria-label="pagination" class="flex mx-0 w-auto justify-start sm:justify-end">
                    <ul class="flex flex-row items-center gap-1">
                      <li class="">
                        <NuxtLink class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 gap-1 h-8 px-2.5 pointer-events-none opacity-50" aria-label="Go to previous page" to="#">
                          <UIcon name="i-lucide-chevron-left" class="h-4 w-4" />
                          <span>Previous</span>
                        </NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" to="#">
                          1
                        </NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" to="#">
                          2
                        </NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" to="#">
                          3
                        </NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 gap-1 h-8 px-2.5" aria-label="Go to next page" to="#">
                          <span>Next</span>
                          <UIcon name="i-lucide-chevron-right" class="h-4 w-4" />
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <aside class="flex min-w-0 flex-col">
                <div class="flex items-center justify-between gap-3 border-b px-5 py-3 border-default">
                  <div class="flex items-center gap-3">
                    <span class="h-8 w-1 rounded-full bg-success" />
                    <div>
                      <h2 class="text-lg font-semibold text-highlighted">Pro Monthly</h2>
                      <p class="text-muted mt-0.5 text-[11px]">$29 billedmonthly</p>
                    </div>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Subscription plan actions" type="button" @click="openAction(&quot;Subscription plan actions&quot;)">
                    <UIcon name="i-lucide-ellipsis" class="size-3.5" />
                    <span class="sr-only">Subscription plan actions</span>
                  </UButton>
                </div>
                <div class="grid grid-cols-2 border-b [&amp;&gt;*]:border-dotted [&amp;&gt;*:nth-child(-n+2)]:border-b [&amp;&gt;*:nth-child(odd)]:border-r border-default">
                  <div class="min-w-0 px-4 py-3">
                    <p class="text-muted text-xs">Monthly recurring revenue</p>
                    <div class="mt-1.5 flex items-end gap-2">
                      <span class="text-xl font-semibold tracking-tight tabular-nums">$24,418</span>
                      <span class="mb-0.5 flex items-center text-[11px] font-medium text-success dark:text-success">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                        +12.8%
                      </span>
                    </div>
                  </div>
                  <div class="min-w-0 px-4 py-3">
                    <p class="text-muted text-xs">Active subscribers</p>
                    <div class="mt-1.5 flex items-end gap-2">
                      <span class="text-xl font-semibold tracking-tight tabular-nums">842</span>
                      <span class="mb-0.5 flex items-center text-[11px] font-medium text-success dark:text-success">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                        +38
                      </span>
                    </div>
                  </div>
                  <div class="min-w-0 px-4 py-3">
                    <p class="text-muted text-xs">Monthly churn</p>
                    <div class="mt-1.5 flex items-end gap-2">
                      <span class="text-xl font-semibold tracking-tight tabular-nums">2.4%</span>
                    </div>
                  </div>
                  <div class="min-w-0 px-4 py-3">
                    <p class="text-muted text-xs">Trial conversion</p>
                    <div class="mt-1.5 flex items-end gap-2">
                      <span class="text-xl font-semibold tracking-tight tabular-nums">68.2%</span>
                      <span class="mb-0.5 flex items-center text-[11px] font-medium text-success dark:text-success">
                        <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                        +2.6%
                      </span>
                    </div>
                  </div>
                </div>
                <div class="px-5 pt-4 pb-2">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-medium text-highlighted">Revenue performance</h3>
                      <p class="text-muted mt-0.5 text-[11px]">Monthly recurring revenue, last 8 months</p>
                    </div>
                    <span class="text-muted text-[11px]">
                      Target
                      <span class="text-highlighted font-medium">$25,639</span>
                    </span>
                  </div>
                  <div class="mt-3 h-[195px] min-h-0 min-w-0">
                    <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                    <div class="chart-responsive-container" style="width:100%;height:195px;min-width:0" role="img" aria-label="Analytics chart">
                      <div style="width:0;height:0;overflow:visible">
                        <div width="350" height="195" class="chart-wrapper" style="position: relative; cursor: default; width: 350px; height: 195px;">
                          <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 350 195" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                            <title />
                            <desc />
                            <g class="chart-zIndex-layer_-100">
                              <g class="chart-cartesian-grid">
                                <g class="chart-cartesian-grid-horizontal">
                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="30" y="8" width="312" height="157" x1="30" y1="165" x2="342" y2="165" />
                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="30" y="8" width="312" height="157" x1="30" y1="125.75" x2="342" y2="125.75" />
                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="30" y="8" width="312" height="157" x1="30" y1="86.5" x2="342" y2="86.5" />
                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="30" y="8" width="312" height="157" x1="30" y1="47.25" x2="342" y2="47.25" />
                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="30" y="8" width="312" height="157" x1="30" y1="8" x2="342" y2="8" />
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_-50" />
                            <defs>
                              <clipPath id="recharts1-clip">
                                <rect x="30" y="8" height="157" width="312" />
                              </clipPath>
                            </defs>
                            <defs>
                              <linearGradient id="subscriptionRevenue" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stop-color="var(--ui-text-highlighted)" stop-opacity="0.14" />
                                <stop offset="100%" stop-color="var(--ui-text-highlighted)" stop-opacity="0" />
                              </linearGradient>
                            </defs>
                            <g class="chart-zIndex-layer_100">
                              <g class="chart-layer chart-area">
                                <g class="chart-layer">
                                  <defs>
                                    <clipPath id="animationClipPath-recharts-area-_r_1_">
                                      <rect x="30" y="0" width="0" height="167" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-layer">
                                    <g class="chart-layer">
                                      <path stroke-width="2" fill="url(#subscriptionRevenue)" fill-opacity="0.6" height="157" stroke="none" width="312" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M30,63.312C44.857,62.286,59.714,61.259,74.571,59.87C89.429,58.482,104.286,56.66,119.143,54.979C134,53.299,148.857,51.739,163.714,49.786C178.571,47.834,193.429,45.539,208.286,43.265C223.143,40.99,238,38.605,252.857,36.139C267.714,33.674,282.571,31.568,297.429,28.47C312.286,25.373,327.143,21.463,342,17.553L342,165C327.143,165,312.286,165,297.429,165C282.571,165,267.714,165,252.857,165C238,165,223.143,165,208.286,165C193.429,165,178.571,165,163.714,165C148.857,165,134,165,119.143,165C104.286,165,89.429,165,74.571,165C59.714,165,44.857,165,30,165Z" />
                                      <path stroke-width="2" fill="none" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" class="chart-curve chart-area-curve" d="M30,63.312C44.857,62.286,59.714,61.259,74.571,59.87C89.429,58.482,104.286,56.66,119.143,54.979C134,53.299,148.857,51.739,163.714,49.786C178.571,47.834,193.429,45.539,208.286,43.265C223.143,40.99,238,38.605,252.857,36.139C267.714,33.674,282.571,31.568,297.429,28.47C312.286,25.373,327.143,21.463,342,17.553" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_200" />
                            <g class="chart-zIndex-layer_300" />
                            <g class="chart-zIndex-layer_400">
                              <g class="chart-layer chart-line">
                                <g class="chart-layer chart-shape">
                                  <path stroke="var(--ui-text-muted)" stroke-dasharray="0px, 315.7425231933594px" stroke-width="1.2" fill="none" id="recharts-line-_r_0_" height="157" width="312" class="chart-curve chart-line-curve" d="M30,55.179L74.571,51.459L119.143,46.175L163.714,40.571L208.286,37.178L252.857,29.696L297.429,21.641L342,10.18" />
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_500">
                              <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                                <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                  <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                  </g>
                                </g>
                              </g>
                              <g class="chart-layer chart-cartesian-axis chart-yAxis yAxis">
                                <g class="chart-cartesian-axis-ticks chart-yAxis-ticks">
                                  <g class="chart-cartesian-axis-tick-lines chart-yAxis-tick-lines">
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_600">
                              <g class="chart-layer chart-area-dots">
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="30" cy="63.31230769230769" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="74.57142857142857" cy="59.870384615384616" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="119.14285714285714" cy="54.97923076923076" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="163.71428571428572" cy="49.78615384615385" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="208.28571428571428" cy="43.26461538461539" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="252.85714285714283" cy="36.139230769230764" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="297.42857142857144" cy="28.47038461538462" class="chart-dot chart-area-dot" />
                                <circle r="2.5" stroke-width="1.8" fill="var(--ui-bg)" fill-opacity="0.6" height="157" stroke="var(--ui-text-highlighted)" width="312" cx="342" cy="17.55284615384616" class="chart-dot chart-area-dot" />
                              </g>
                            </g>
                            <g class="chart-zIndex-layer_1000" />
                            <g class="chart-zIndex-layer_1100" />
                            <g class="chart-zIndex-layer_1200" />
                            <g class="chart-zIndex-layer_2000">
                              <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="30" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="30">Nov</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="74.57142857142857" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="74.57142857142857">Dec</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="119.14285714285714" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="119.14285714285714">Jan</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="163.71428571428572" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="163.71428571428572">Feb</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="208.28571428571428" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="208.28571428571428">Mar</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="252.85714285714283" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="252.85714285714283">Apr</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="297.42857142857144" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="297.42857142857144">May</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text height="30" width="312" stroke="none" x="341.234375" y="179" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                    <tspan x="341.234375">Jun</tspan>
                                  </text>
                                </g>
                              </g>
                              <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="48" height="157" stroke="none" x="22" y="165" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="22">$0k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="48" height="157" stroke="none" x="22" y="125.75" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="22">$7k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="48" height="157" stroke="none" x="22" y="86.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="22">$13k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="48" height="157" stroke="none" x="22" y="47.25" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="22">$20k</tspan>
                                  </text>
                                </g>
                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                  <text width="48" height="157" stroke="none" x="22" y="8" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                    <tspan x="22">$26k</tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-auto border-t px-5 py-4 border-default">
                  <div class="mb-4 flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-medium text-highlighted">Billing health</h3>
                      <p class="text-muted mt-0.5 text-[11px]">Payment outcomes for the current billing cycle</p>
                    </div>
                    <span class="text-xs font-medium text-success dark:text-success">96.8% healthy</span>
                  </div>
                  <div class="space-y-3.5">
                    <div>
                      <div class="mb-1.5 flex items-center justify-between gap-4 text-xs">
                        <span class="text-muted">Successful renewals</span>
                        <span class="font-medium tabular-nums">97.6%</span>
                      </div>
                      <UProgress :model-value="97.6" color="primary" size="sm" class="relative w-full overflow-hidden bg-muted h-1.5 rounded-none [&amp;&gt;div]:bg-success" />
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between gap-4 text-xs">
                        <span class="text-muted">Card coverage</span>
                        <span class="font-medium tabular-nums">94.2%</span>
                      </div>
                      <UProgress :model-value="94.2" color="primary" size="sm" class="relative w-full overflow-hidden bg-muted h-1.5 rounded-none [&amp;&gt;div]:bg-success" />
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between gap-4 text-xs">
                        <span class="text-muted">Dunning recovery</span>
                        <span class="font-medium tabular-nums text-warning dark:text-warning">21 recovering</span>
                      </div>
                      <UProgress :model-value="72" color="primary" size="sm" class="relative w-full overflow-hidden bg-muted h-1.5 rounded-none [&amp;&gt;div]:bg-warning" />
                    </div>
                  </div>
                </div>
              </aside>
            </section>
            <section class="min-w-0">
              <div class="flex flex-col gap-3 border-b px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 border-default">
                <div class="flex items-center gap-5">
                  <UButton color="neutral" variant="ghost" class="relative py-2 text-sm font-medium transition-colors text-highlighted" aria-label="New subscribers" type="button" @click="openAction(&quot;New subscribers&quot;)">
                    New subscribers
                    <span class="bg-(--ui-text-highlighted) absolute right-0 -bottom-3 left-0 h-0.5" />
                  </UButton>
                  <UButton color="neutral" variant="ghost" class="relative py-2 text-sm font-medium transition-colors text-muted hover:text-highlighted" aria-label="Renewals due" type="button" @click="openAction(&quot;Renewals due&quot;)">
                    Renewals due
                  </UButton>
                </div>
                <div class="flex items-center gap-2">
                  <div class="relative min-w-0 flex-1 sm:w-64">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchSubscribers" type="text" aria-label="Search subscribers" placeholder="Search subscribers..." name="searchSubscribers" class="flex w-full rounded-md md:text-sm h-8 pl-9 text-sm" :ui="{ base: 'h-full' }" />
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                    <UIcon name="i-lucide-funnel" class="size-3.5" />
                    Filter
                  </UButton>
                </div>
              </div>
              <div class="horizontal-scrollbar overflow-x-auto">
                <!-- Table 2: Subscriber / Plan / Status / Amount / Payment method / Signed up -->
                <UTable v-model:sorting="table2Sorting" v-model:row-selection="table2Selection" :data="table2FilteredRows" :columns="table2Columns" class="w-full min-w-[1020px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #subscriber-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Subscriber" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #subscriber-cell="{ row }">
                    <div class="flex items-center gap-3">
                      <span class="relative flex shrink-0 overflow-hidden size-8 rounded-md border border-default">
                        <img class="aspect-square h-full w-full" :alt="row.original.subscriberAlt5" :src="row.original.subscriberSrc6" loading="lazy" />
                      </span>
                      <div class="min-w-0">
                        <p class="truncate text-sm font-medium">{{ row.original.subscriberText9 }}</p>
                        <p class="text-muted mt-0.5 truncate text-xs">{{ row.original.subscriberText11 }}</p>
                      </div>
                    </div>
                  </template>
                  <template #plan-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Plan" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #plan-cell="{ row }">
                    <div class="flex items-center gap-2 text-sm">
                      <span :class="row.original.planClass3" />
                      {{ row.original.plan }}
                    </div>
                  </template>
                  <template #status-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #status-cell="{ row }">
                    <div :class="row.original.statusClass2">
                      <UIcon :name="row.original.statusName3" class="size-3" />
                      {{ row.original.status }}
                    </div>
                  </template>
                  <template #amount-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #amount-cell="{ row }">
                    {{ row.original.amount }}
                  </template>
                  <template #paymentMethod-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Payment method" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #paymentMethod-cell="{ row }">
                    <span class="flex items-center gap-2">
                      <UIcon name="i-lucide-credit-card" class="size-3.5" />
                      {{ row.original.paymentMethod }}
                    </span>
                  </template>
                  <template #signedUp-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Signed up" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #signedUp-cell="{ row }">
                    <time class="text-sm">{{ row.original.signedUp }}</time>
                  </template>
                  <template #actions-cell="{ row }">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Actions for Avery Stone&quot;, row.original._id, 2)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </template>
                </UTable>
              </div>
              <footer class="text-muted flex flex-col gap-2 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <span>Showing 8 of 8subscription records</span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-lucide-calendar-clock" class="size-3.5" />
                  All dates shown in your local timezone
                </span>
              </footer>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
