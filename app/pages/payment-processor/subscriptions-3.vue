<!-- Page: /payment-processor/subscriptions-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Subscriptions 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "customerEmailID": "",
  "aLLPLANS": "ALL PLANS",
  "aLLSTATES": "ALL STATES"
})

const aLLPLANSOptions = [
  "ALL PLANS",
  "PRO",
  "TEAM",
  "STUDIO",
  "STARTER",
  "AGENCY"
]

const aLLSTATESOptions = [
  "ALL STATES",
  "ACTIVE",
  "TRIAL",
  "PAST DUE",
  "PAUSED"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "hEALTH": "100/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "100",
    "cUSTOMER": "Avery Stoneavery.stone@northledger.io",
    "cUSTOMERText3": "Avery Stone",
    "cUSTOMERText5": "avery.stone@northledger.io",
    "pLAN": "PROMONTHLY",
    "pLANText2": "PRO",
    "pLANText4": "MONTHLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$29.00",
    "nEXTBILLING": "JUN 30 09:24",
    "mETHOD": "VISA •4928"
  },
  {
    "_id": "2",
    "hEALTH": "100/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "100",
    "cUSTOMER": "Juniper Labsbilling@juniperlabs.dev",
    "cUSTOMERText3": "Juniper Labs",
    "cUSTOMERText5": "billing@juniperlabs.dev",
    "pLAN": "TEAMYEARLY",
    "pLANText2": "TEAM",
    "pLANText4": "YEARLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$348.00",
    "nEXTBILLING": "MAY 18 14:11",
    "mETHOD": "ACH •7710"
  },
  {
    "_id": "3",
    "hEALTH": "42/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/25 dark:text-error",
    "hEALTHText3": "42",
    "cUSTOMER": "Maya Chenmaya.chen@solstice.co",
    "cUSTOMERText3": "Maya Chen",
    "cUSTOMERText5": "maya.chen@solstice.co",
    "pLAN": "STUDIOMONTHLY",
    "pLANText2": "STUDIO",
    "pLANText4": "MONTHLY",
    "sTATE": "PAST DUE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/25 dark:text-error",
    "aMOUNT": "$79.00",
    "nEXTBILLING": "RETRY 16:48",
    "mETHOD": "MC •1882"
  },
  {
    "_id": "4",
    "hEALTH": "82/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "82",
    "cUSTOMER": "Drift Supplyaccounts@driftsupply.com",
    "cUSTOMERText3": "Drift Supply",
    "cUSTOMERText5": "accounts@driftsupply.com",
    "pLAN": "STARTERMONTHLY",
    "pLANText2": "STARTER",
    "pLANText4": "MONTHLY",
    "sTATE": "TRIAL",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/25 dark:text-info",
    "aMOUNT": "$12.00",
    "nEXTBILLING": "TODAY 18:05",
    "mETHOD": "AMEX •3007"
  },
  {
    "_id": "5",
    "hEALTH": "96/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "96",
    "cUSTOMER": "Theo Ramireztheo.ramirez@fieldnote.app",
    "cUSTOMERText3": "Theo Ramirez",
    "cUSTOMERText5": "theo.ramirez@fieldnote.app",
    "pLAN": "AGENCYYEARLY",
    "pLANText2": "AGENCY",
    "pLANText4": "YEARLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$1,188.00",
    "nEXTBILLING": "APR 04 11:36",
    "mETHOD": "WIRE •8841"
  },
  {
    "_id": "6",
    "hEALTH": "66/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/25 dark:text-error",
    "hEALTHText3": "66",
    "cUSTOMER": "Orbit Kitchenfinance@orbitkitchen.co",
    "cUSTOMERText3": "Orbit Kitchen",
    "cUSTOMERText5": "finance@orbitkitchen.co",
    "pLAN": "COMPONENTSMONTHLY",
    "pLANText2": "COMPONENTS",
    "pLANText4": "MONTHLY",
    "sTATE": "PAUSED",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-default bg-(--ui-bg-muted)/40 text-muted",
    "aMOUNT": "$19.00",
    "nEXTBILLING": "PAUSED",
    "mETHOD": "VISA •7712"
  },
  {
    "_id": "7",
    "hEALTH": "100/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "100",
    "cUSTOMER": "Priya Nairpriya.nair@evermint.in",
    "cUSTOMERText3": "Priya Nair",
    "cUSTOMERText5": "priya.nair@evermint.in",
    "pLAN": "PROMONTHLY",
    "pLANText2": "PRO",
    "pLANText4": "MONTHLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$29.00",
    "nEXTBILLING": "JUN 22 19:17",
    "mETHOD": "UPI •0418"
  },
  {
    "_id": "8",
    "hEALTH": "92/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "92",
    "cUSTOMER": "Harbor Ninereceipts@harbornine.com",
    "cUSTOMERText3": "Harbor Nine",
    "cUSTOMERText5": "receipts@harbornine.com",
    "pLAN": "PROMONTHLY",
    "pLANText2": "PRO",
    "pLANText4": "MONTHLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$29.00",
    "nEXTBILLING": "JUN 14 12:40",
    "mETHOD": "APPLE PAY"
  },
  {
    "_id": "9",
    "hEALTH": "88/100",
    "hEALTHClass2": "inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "hEALTHText3": "88",
    "cUSTOMER": "Nolan Piercenolan@redwoodmetrics.ai",
    "cUSTOMERText3": "Nolan Pierce",
    "cUSTOMERText5": "nolan@redwoodmetrics.ai",
    "pLAN": "TEAMYEARLY",
    "pLANText2": "TEAM",
    "pLANText4": "YEARLY",
    "sTATE": "ACTIVE",
    "sTATEClass2": "inline-flex border px-2 py-1 text-[10px] border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "aMOUNT": "$348.00",
    "nEXTBILLING": "MAR 02 05:08",
    "mETHOD": "VISA •2250"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "hEALTH",
    "header": "HEALTH"
  },
  {
    "accessorKey": "cUSTOMER",
    "header": "CUSTOMER"
  },
  {
    "accessorKey": "pLAN",
    "header": "PLAN"
  },
  {
    "accessorKey": "sTATE",
    "header": "STATE"
  },
  {
    "accessorKey": "aMOUNT",
    "header": "AMOUNT"
  },
  {
    "accessorKey": "nEXTBILLING",
    "header": "NEXT BILLING"
  },
  {
    "accessorKey": "mETHOD",
    "header": "METHOD"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["hEALTH","cUSTOMER","pLAN","sTATE","aMOUNT","nEXTBILLING","mETHOD"] as const
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
  const rows = table1FilteredRows.value.map(row => ["hEALTH","cUSTOMER","pLAN","sTATE","aMOUNT","nEXTBILLING","mETHOD"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-subscriptions-3.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/subscriptions-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted min-h-0 flex-1 overflow-auto">
          <div class="min-w-[1080px] font-mono">
            <section class="border-b border-default">
              <nav class="bg-default border-b border-default">
                <div class="flex min-w-full items-center gap-6 overflow-x-auto px-6">
                  <UButton color="neutral" variant="outline" class="text-muted inline-flex h-12 shrink-0 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" aria-label="Overview" type="button" @click="openAction(&quot;Overview&quot;)">
                    Overview
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted inline-flex h-12 shrink-0 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" aria-label="Plans" type="button" @click="openAction(&quot;Plans&quot;)">
                    Plans
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex h-12 shrink-0 items-center border-b-2 text-sm font-semibold transition-colors border-(--ui-text-highlighted) text-highlighted" aria-label="Subscribers" type="button" @click="openAction(&quot;Subscribers&quot;)">
                    Subscribers
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted inline-flex h-12 shrink-0 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" aria-label="Recovery" type="button" @click="openAction(&quot;Recovery&quot;)">
                    Recovery
                  </UButton>
                </div>
              </nav>
              <header class="bg-(--ui-bg-muted)/20 flex items-center justify-between px-6 py-5">
                <div>
                  <h1 class="text-highlighted text-lg font-semibold tracking-tight text-highlighted">Subscriptions</h1>
                  <p class="text-muted mt-1 text-sm">Monitor subscriber status, renewals, and billing recovery.</p>
                </div>
                <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-2 text-xs" aria-label="LIVE" type="button" @click="openAction(&quot;LIVE&quot;)">
                  <span class="size-2 bg-success" />
                  LIVE
                </UButton>
              </header>
            </section>
            <section class="grid grid-cols-5 gap-3 px-6 pt-5">
              <article class="border-default bg-(--ui-bg-muted)/10 flex min-h-28 items-center justify-between border px-5">
                <div>
                  <div class="text-(--ui-text-highlighted)/85 flex items-center gap-2 text-xs">
                    <span class="size-2 bg-success" />
                    MRR
                  </div>
                  <p class="text-highlighted mt-4 text-2xl tracking-tight tabular-nums">$73,306</p>
                </div>
              </article>
              <article class="border-default bg-(--ui-bg-muted)/10 flex min-h-28 items-center justify-between border px-5">
                <div>
                  <div class="text-(--ui-text-highlighted)/85 flex items-center gap-2 text-xs">
                    <span class="size-2 bg-info" />
                    ACTIVE SUBSCRIPTIONS
                  </div>
                  <p class="text-highlighted mt-4 text-2xl tracking-tight tabular-nums">2,698</p>
                </div>
              </article>
              <article class="border-default bg-(--ui-bg-muted)/10 flex min-h-28 items-center justify-between border px-5">
                <div>
                  <div class="text-(--ui-text-highlighted)/85 flex items-center gap-2 text-xs">
                    <span class="size-2 bg-secondary" />
                    RENEWALS / HOUR
                  </div>
                  <p class="text-highlighted mt-4 text-2xl tracking-tight tabular-nums">84</p>
                </div>
              </article>
              <article class="border-default bg-(--ui-bg-muted)/10 flex min-h-28 items-center justify-between border px-5">
                <div>
                  <div class="text-(--ui-text-highlighted)/85 flex items-center gap-2 text-xs">
                    <span class="size-2 bg-warning" />
                    RECOVERED REVENUE
                  </div>
                  <p class="text-highlighted mt-4 text-2xl tracking-tight tabular-nums">$18,940</p>
                </div>
              </article>
              <article class="border-default bg-(--ui-bg-muted)/10 flex min-h-28 items-center justify-between border px-5">
                <div>
                  <div class="text-(--ui-text-highlighted)/85 flex items-center gap-2 text-xs">
                    <span class="size-2 bg-error" />
                    TRIAL CONVERSION
                  </div>
                  <p class="text-highlighted mt-4 text-2xl tracking-tight tabular-nums">68.2%</p>
                </div>
              </article>
            </section>
            <div class="grid grid-cols-[minmax(0,1fr)_360px] gap-4 px-6 py-5">
              <section class="min-w-0">
                <div class="mb-4 flex items-center justify-between">
                  <h1 class="text-highlighted text-base font-semibold text-highlighted">SUBSCRIBER ACCOUNTS</h1>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="outline" class="border-default text-muted hover:border-(--ui-text-muted)/50 hover:text-highlighted flex h-9 items-center gap-2 border px-4 text-xs" aria-label="EXPORT" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      EXPORT
                    </UButton>
                    <UButton color="neutral" variant="outline" class="flex h-9 items-center gap-2 border px-4 text-xs border-success/20 text-success" aria-label="LIVE FEED" type="button" @click="openAction(&quot;LIVE FEED&quot;)">
                      <UIcon name="i-lucide-radio" class="size-4" />
                      LIVE FEED
                    </UButton>
                  </div>
                </div>
                <div class="border-default bg-(--ui-bg-muted)/15 mb-4 flex flex-wrap items-end gap-3 border px-3 py-3">
                  <label class="min-w-72 flex-1">
                    <span class="text-muted mb-1.5 block text-[10px]">SEARCH</span>
                    <div class="relative min-w-0">
                      <UIcon name="i-lucide-search" class="text-(--ui-text-muted)/70 absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <UInput v-model="form.customerEmailID" type="text" placeholder="Customer, email, ID..." name="customerEmailID" class="flex h-9 w-full md:text-sm rounded-none pl-9 text-xs" :ui="{ base: 'h-full' }" />
                    </div>
                  </label>
                  <label class="w-40 min-w-0">
                    <span class="text-muted mb-1.5 block text-[10px]">PLAN</span>
                    <USelect v-model="form.aLLPLANS" :items="aLLPLANSOptions" aria-label="ALL PLANS" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between border bg-transparent px-3 py-2 whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 rounded-none text-xs shadow-none" />
                  </label>
                  <label class="w-40 min-w-0">
                    <span class="text-muted mb-1.5 block text-[10px]">STATUS</span>
                    <USelect v-model="form.aLLSTATES" :items="aLLSTATESOptions" aria-label="ALL STATES" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between border bg-transparent px-3 py-2 whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 rounded-none text-xs shadow-none" />
                  </label>
                </div>
                <div class="border-default mt-4 overflow-hidden border">
                  <!-- Table 1: HEALTH / CUSTOMER / PLAN / STATE / AMOUNT / NEXT BILLING / METHOD -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full table-fixed text-left text-xs" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #hEALTH-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="HEALTH" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #hEALTH-cell="{ row }">
                      <span :class="row.original.hEALTHClass2">{{ row.original.hEALTHText3 }}/100</span>
                    </template>
                    <template #cUSTOMER-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="CUSTOMER" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #cUSTOMER-cell="{ row }">
                      <p class="text-highlighted truncate text-sm">{{ row.original.cUSTOMERText3 }}</p>
                      <p class="text-(--ui-text-muted)/70 mt-1 truncate text-[10px]">{{ row.original.cUSTOMERText5 }}</p>
                    </template>
                    <template #pLAN-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="PLAN" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #pLAN-cell="{ row }">
                      {{ row.original.pLANText2 }}
                      <span class="text-(--ui-text-muted)/70 mt-1 block text-[10px]">{{ row.original.pLANText4 }}</span>
                    </template>
                    <template #sTATE-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="STATE" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #sTATE-cell="{ row }">
                      <span :class="row.original.sTATEClass2">{{ row.original.sTATE }}</span>
                    </template>
                    <template #aMOUNT-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="AMOUNT" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #aMOUNT-cell="{ row }">
                      {{ row.original.aMOUNT }}
                    </template>
                    <template #nEXTBILLING-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="NEXT BILLING" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #nEXTBILLING-cell="{ row }">
                      {{ row.original.nEXTBILLING }}
                    </template>
                    <template #mETHOD-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="METHOD" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #mETHOD-cell="{ row }">
                      {{ row.original.mETHOD }}
                    </template>
                  </UTable>
                </div>
                <footer class="text-(--ui-text-muted)/70 mt-4 flex items-center justify-between text-xs">
                  <span>SHOWING 1-9 OF 2,746 SUBSCRIPTIONS</span>
                  <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1">
                      <UButton color="neutral" variant="outline" class="border-default grid size-8 place-items-center border" aria-label="Previous page" type="button" @click="openAction(&quot;Previous page&quot;)">
                        <UIcon name="i-lucide-chevron-left" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="size-8 border border-(--ui-text-highlighted)/50 text-highlighted border-default" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                        1
                      </UButton>
                      <UButton color="neutral" variant="outline" class="size-8 border border-default" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                        2
                      </UButton>
                      <UButton color="neutral" variant="outline" class="size-8 border border-default" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                        3
                      </UButton>
                      <UButton color="neutral" variant="outline" class="size-8 border border-default" aria-label="4" type="button" @click="openAction(&quot;4&quot;)">
                        4
                      </UButton>
                      <UButton color="neutral" variant="outline" class="size-8 border border-default" aria-label="5" type="button" @click="openAction(&quot;5&quot;)">
                        5
                      </UButton>
                      <UButton color="neutral" variant="outline" class="border-default grid size-8 place-items-center border" aria-label="Next page" type="button" @click="openAction(&quot;Next page&quot;)">
                        <UIcon name="i-lucide-chevron-right" class="size-4" />
                      </UButton>
                    </div>
                    <span class="border-default border-l pl-3">PAGE 1 / 230</span>
                  </div>
                </footer>
              </section>
              <aside class="border-default bg-(--ui-bg-muted)/15 border">
                <div class="border-default flex h-14 items-center justify-between border-b px-4">
                  <div class="text-muted flex items-center gap-2 text-xs">
                    <span class="size-2 bg-success dark:bg-success" />
                    LIVE BILLING EVENTS
                  </div>
                  <UIcon name="i-lucide-activity" class="text-(--ui-text-muted)/70 size-4" />
                </div>
                <div class="space-y-3 p-3">
                  <article class="border-default bg-default border p-3">
                    <div class="flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3">
                        <span class="inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">100/100</span>
                        <span class="text-muted text-xs">PRO</span>
                      </div>
                      <div class="text-(--ui-text-muted)/70 flex items-center gap-3 text-[10px]">
                        JUST NOW
                        <UIcon name="i-lucide-x" class="size-3" />
                      </div>
                    </div>
                    <p class="text-highlighted mt-5 truncate text-sm">Harbor Nine</p>
                    <p class="text-muted mt-2 text-xs">$29.00 captured · Visa •7712</p>
                    <div class="text-(--ui-text-muted)/70 mt-3 flex items-center gap-4 text-[10px]">
                      <span class="flex items-center gap-1">
                        <UIcon name="i-lucide-clock-3" class="size-3" />
                        824ms
                      </span>
                      <span># ch_8z1f</span>
                    </div>
                    <UButton color="neutral" variant="outline" class="border-default text-muted hover:border-(--ui-text-muted)/50 hover:text-highlighted mt-4 h-9 w-full border text-xs" aria-label="VIEW EVENT DETAILS" type="button" @click="openAction(&quot;VIEW EVENT DETAILS&quot;)">
                      VIEW EVENT DETAILS
                    </UButton>
                  </article>
                  <article class="border-default bg-default border p-3">
                    <div class="flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3">
                        <span class="inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">100/100</span>
                        <span class="text-muted text-xs">TEAM</span>
                      </div>
                      <div class="text-(--ui-text-muted)/70 flex items-center gap-3 text-[10px]">
                        12 SEC
                        <UIcon name="i-lucide-x" class="size-3" />
                      </div>
                    </div>
                    <p class="text-highlighted mt-5 truncate text-sm">Juniper Labs</p>
                    <p class="text-muted mt-2 text-xs">$348.00 invoice paid · ACH</p>
                    <div class="text-(--ui-text-muted)/70 mt-3 flex items-center gap-4 text-[10px]">
                      <span class="flex items-center gap-1">
                        <UIcon name="i-lucide-clock-3" class="size-3" />
                        1.4s
                      </span>
                      <span># in_4px2</span>
                    </div>
                    <UButton color="neutral" variant="outline" class="border-default text-muted hover:border-(--ui-text-muted)/50 hover:text-highlighted mt-4 h-9 w-full border text-xs" aria-label="VIEW EVENT DETAILS" type="button" @click="openAction(&quot;VIEW EVENT DETAILS&quot;)">
                      VIEW EVENT DETAILS
                    </UButton>
                  </article>
                  <article class="border-default bg-default border p-3">
                    <div class="flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3">
                        <span class="inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/25 dark:text-error">42/100</span>
                        <span class="text-muted text-xs">STUDIO</span>
                      </div>
                      <div class="text-(--ui-text-muted)/70 flex items-center gap-3 text-[10px]">
                        31 SEC
                        <UIcon name="i-lucide-x" class="size-3" />
                      </div>
                    </div>
                    <p class="text-highlighted mt-5 truncate text-sm">Maya Chen</p>
                    <p class="text-muted mt-2 text-xs">$79.00 failed · retry scheduled</p>
                    <div class="text-(--ui-text-muted)/70 mt-3 flex items-center gap-4 text-[10px]">
                      <span class="flex items-center gap-1">
                        <UIcon name="i-lucide-clock-3" class="size-3" />
                        692ms
                      </span>
                      <span># pi_9dm4</span>
                    </div>
                    <UButton color="neutral" variant="outline" class="border-default text-muted hover:border-(--ui-text-muted)/50 hover:text-highlighted mt-4 h-9 w-full border text-xs" aria-label="VIEW EVENT DETAILS" type="button" @click="openAction(&quot;VIEW EVENT DETAILS&quot;)">
                      VIEW EVENT DETAILS
                    </UButton>
                  </article>
                  <article class="border-default bg-default border p-3">
                    <div class="flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3">
                        <span class="inline-flex min-w-16 justify-center border px-2 py-1 text-xs font-semibold tabular-nums border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">100/100</span>
                        <span class="text-muted text-xs">PRO</span>
                      </div>
                      <div class="text-(--ui-text-muted)/70 flex items-center gap-3 text-[10px]">
                        1 MIN
                        <UIcon name="i-lucide-x" class="size-3" />
                      </div>
                    </div>
                    <p class="text-highlighted mt-5 truncate text-sm">Priya Nair</p>
                    <p class="text-muted mt-2 text-xs">$29.00 mandate confirmed · UPI</p>
                    <div class="text-(--ui-text-muted)/70 mt-3 flex items-center gap-4 text-[10px]">
                      <span class="flex items-center gap-1">
                        <UIcon name="i-lucide-clock-3" class="size-3" />
                        1.1s
                      </span>
                      <span># ch_2mj6</span>
                    </div>
                    <UButton color="neutral" variant="outline" class="border-default text-muted hover:border-(--ui-text-muted)/50 hover:text-highlighted mt-4 h-9 w-full border text-xs" aria-label="VIEW EVENT DETAILS" type="button" @click="openAction(&quot;VIEW EVENT DETAILS&quot;)">
                      VIEW EVENT DETAILS
                    </UButton>
                  </article>
                </div>
              </aside>
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
