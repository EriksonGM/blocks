<!-- Page: /payment-processor/subscriptions-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Subscriptions 4 · Blocks Admin" })

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSubscriptions": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All products",
    "value": "0"
  },
  {
    "label": "Subscriptions",
    "value": "1"
  },
  {
    "label": "One-time",
    "value": "2"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "subscription": "PMPro Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-success text-inverted",
    "subscriptionText4": "PM",
    "subscriptionText6": "Pro Monthly",
    "type": "subscriptions",
    "price": "$29",
    "billingInterval": "Monthly",
    "customers": "842",
    "revenue": "$24,418",
    "growth": "+12.8%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "2",
    "subscription": "TYTeam Yearly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-info text-inverted",
    "subscriptionText4": "TY",
    "subscriptionText6": "Team Yearly",
    "type": "subscriptions",
    "price": "$348",
    "billingInterval": "Yearly",
    "customers": "316",
    "revenue": "$9,164",
    "growth": "+8.6%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "3",
    "subscription": "SMStudio Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-secondary text-inverted",
    "subscriptionText4": "SM",
    "subscriptionText6": "Studio Monthly",
    "type": "subscriptions",
    "price": "$79",
    "billingInterval": "Monthly",
    "customers": "184",
    "revenue": "$14,536",
    "growth": "+5.2%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Watch",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning dark:text-warning"
  },
  {
    "_id": "4",
    "subscription": "STStarter Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-warning text-inverted",
    "subscriptionText4": "ST",
    "subscriptionText6": "Starter Monthly",
    "type": "subscriptions",
    "price": "$12",
    "billingInterval": "Monthly",
    "customers": "1,264",
    "revenue": "$15,168",
    "growth": "+18.4%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "5",
    "subscription": "AYAgency Yearly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-error text-inverted",
    "subscriptionText4": "AY",
    "subscriptionText6": "Agency Yearly",
    "type": "subscriptions",
    "price": "$1,188",
    "billingInterval": "Yearly",
    "customers": "92",
    "revenue": "$9,108",
    "growth": "+3.1%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Watch",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning dark:text-warning"
  },
  {
    "_id": "6",
    "subscription": "CMComponents Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-inverted text-inverted",
    "subscriptionText4": "CM",
    "subscriptionText6": "Components Monthly",
    "type": "subscriptions",
    "price": "$19",
    "billingInterval": "Monthly",
    "customers": "48",
    "revenue": "$912",
    "growth": "-6.7%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-error border-default",
    "health": "Critical",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error dark:bg-error dark:text-error"
  },
  {
    "_id": "7",
    "subscription": "SCScale Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-info text-inverted",
    "subscriptionText4": "SC",
    "subscriptionText6": "Scale Monthly",
    "type": "subscriptions",
    "price": "$149",
    "billingInterval": "Monthly",
    "customers": "138",
    "revenue": "$20,562",
    "growth": "+9.9%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "8",
    "subscription": "SYStarter Yearly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-success text-inverted",
    "subscriptionText4": "SY",
    "subscriptionText6": "Starter Yearly",
    "type": "subscriptions",
    "price": "$120",
    "billingInterval": "Yearly",
    "customers": "428",
    "revenue": "$4,280",
    "growth": "+6.4%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "9",
    "subscription": "PYPro Yearly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-secondary text-inverted",
    "subscriptionText4": "PY",
    "subscriptionText6": "Pro Yearly",
    "type": "subscriptions",
    "price": "$290",
    "billingInterval": "Yearly",
    "customers": "256",
    "revenue": "$6,187",
    "growth": "+10.3%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Healthy",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success"
  },
  {
    "_id": "10",
    "subscription": "EMEnterprise Monthly",
    "subscriptionClass3": "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-secondary text-inverted",
    "subscriptionText4": "EM",
    "subscriptionText6": "Enterprise Monthly",
    "type": "subscriptions",
    "price": "$399",
    "billingInterval": "Monthly",
    "customers": "36",
    "revenue": "$14,364",
    "growth": "+4.7%",
    "growthClass1": "border-r border-b px-4 font-medium tabular-nums text-success border-default",
    "health": "Watch",
    "healthClass2": "inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2.5 text-xs font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning dark:text-warning"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "subscription",
    "header": "Subscription"
  },
  {
    "accessorKey": "type",
    "header": "Type"
  },
  {
    "accessorKey": "price",
    "header": "Price"
  },
  {
    "accessorKey": "billingInterval",
    "header": "Billing interval"
  },
  {
    "accessorKey": "customers",
    "header": "Customers"
  },
  {
    "accessorKey": "revenue",
    "header": "Revenue"
  },
  {
    "accessorKey": "growth",
    "header": "Growth"
  },
  {
    "accessorKey": "health",
    "header": "Health"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchSubscriptions || '').toLowerCase()
  const keys = ["subscription","type","price","billingInterval","customers","revenue","growth","health"] as const
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/subscriptions-4">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted min-h-0 flex-1 overflow-auto">
          <div class="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
            <header class="flex flex-col gap-4">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" aria-label="Product type" class="bg-(--ui-bg-muted)/70 inline-flex h-10 w-fit items-center rounded-lg border p-1 border-default" />
                <div class="text-muted flex items-center gap-2 text-sm">
                  <UIcon name="i-lucide-calendar-days" class="size-4" />
                  <time>Mon, Jun 15, 2026 · 10:00 AM IST</time>
                </div>
              </div>
            </header>
            <section class="overflow-hidden rounded-lg border border-default">
              <div class="bg-(--ui-bg-muted)/45 flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between border-default">
                <div>
                  <h1 class="text-base font-semibold text-highlighted">Subscription health</h1>
                  <p class="text-muted mt-0.5 text-xs">Portfolio performance across recurring products</p>
                </div>
                <div aria-label="Health status legend" class="flex flex-wrap items-center gap-4 text-sm">
                  <span class="flex items-center gap-2">
                    <span class="text-success">Healthy</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <span class="text-warning">Watch</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <span class="text-error">Critical</span>
                  </span>
                </div>
              </div>
              <div class="grid md:grid-cols-3">
                <article class="bg-default min-w-0 border-b p-4 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                  <div class="flex items-center justify-between gap-3 border-b pb-3 border-default">
                    <h3 class="truncate text-sm font-semibold sm:text-base text-highlighted">Active subscriptions</h3>
                    <UIcon name="i-lucide-circle-question-mark" class="text-muted size-4 shrink-0" />
                  </div>
                  <dl class="space-y-1.5 border-b py-3 text-sm border-default">
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">Active</dt>
                      <dd class="shrink-0 font-medium tabular-nums">2,698</dd>
                    </div>
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">MRR</dt>
                      <dd class="shrink-0 font-medium tabular-nums">$73,306</dd>
                    </div>
                  </dl>
                  <div class="pt-3">
                    <div class="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span class="text-muted truncate">Retention rate</span>
                      <span class="shrink-0 font-medium tabular-nums">96.8%</span>
                    </div>
                    <div aria-label="92% health score" class="flex h-4 items-center gap-1 overflow-hidden" role="img">
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-success" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                    </div>
                    <div class="mt-3 flex items-center justify-between gap-3 text-sm">
                      <span class="font-medium tabular-nums text-success">+4.2%</span>
                      <span class="text-muted truncate">vs last month</span>
                    </div>
                  </div>
                </article>
                <article class="bg-default min-w-0 border-b p-4 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                  <div class="flex items-center justify-between gap-3 border-b pb-3 border-default">
                    <h3 class="truncate text-sm font-semibold sm:text-base text-highlighted">Upcoming renewals</h3>
                    <UIcon name="i-lucide-circle-question-mark" class="text-muted size-4 shrink-0" />
                  </div>
                  <dl class="space-y-1.5 border-b py-3 text-sm border-default">
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">Due in 7 days</dt>
                      <dd class="shrink-0 font-medium tabular-nums">384</dd>
                    </div>
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">Renewal value</dt>
                      <dd class="shrink-0 font-medium tabular-nums">$28,640</dd>
                    </div>
                  </dl>
                  <div class="pt-3">
                    <div class="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span class="text-muted truncate">Expected success rate</span>
                      <span class="shrink-0 font-medium tabular-nums">91.4%</span>
                    </div>
                    <div aria-label="78% health score" class="flex h-4 items-center gap-1 overflow-hidden" role="img">
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-warning" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                    </div>
                    <div class="mt-3 flex items-center justify-between gap-3 text-sm">
                      <span class="font-medium tabular-nums text-warning">-1.8%</span>
                      <span class="text-muted truncate">vs last period</span>
                    </div>
                  </div>
                </article>
                <article class="bg-default min-w-0 border-b p-4 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                  <div class="flex items-center justify-between gap-3 border-b pb-3 border-default">
                    <h3 class="truncate text-sm font-semibold sm:text-base text-highlighted">At-risk revenue</h3>
                    <UIcon name="i-lucide-circle-question-mark" class="text-muted size-4 shrink-0" />
                  </div>
                  <dl class="space-y-1.5 border-b py-3 text-sm border-default">
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">At-risk subscriptions</dt>
                      <dd class="shrink-0 font-medium tabular-nums">67</dd>
                    </div>
                    <div class="flex items-center justify-between gap-4">
                      <dt class="text-muted truncate">Revenue exposed</dt>
                      <dd class="shrink-0 font-medium tabular-nums">$8,920</dd>
                    </div>
                  </dl>
                  <div class="pt-3">
                    <div class="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span class="text-muted truncate">Recovery probability</span>
                      <span class="shrink-0 font-medium tabular-nums">42%</span>
                    </div>
                    <div aria-label="42% health score" class="flex h-4 items-center gap-1 overflow-hidden" role="img">
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-error" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                      <span class="h-4 w-0.5 shrink-0 rounded-full sm:w-1 bg-(--ui-text-muted)/15" />
                    </div>
                    <div class="mt-3 flex items-center justify-between gap-3 text-sm">
                      <span class="font-medium tabular-nums text-error">+12.6%</span>
                      <span class="text-muted truncate">vs last period</span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <section class="overflow-hidden rounded-lg border border-default">
              <div class="bg-(--ui-bg-muted)/45 flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between border-default">
                <div class="flex items-center gap-2">
                  <h2 class="text-base font-semibold text-highlighted">Subscriptions</h2>
                  <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 size-6 justify-center rounded-full p-0 text-xs tabular-nums border-default">10</div>
                </div>
                <div class="relative w-full sm:w-56">
                  <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
                  <UInput v-model="form.searchSubscriptions" type="text" aria-label="Search subscriptions" placeholder="Search subscriptions…" name="searchSubscriptions" class="flex w-full rounded-md md:text-sm h-8 pl-8 text-sm" :ui="{ base: 'h-full' }" />
                </div>
              </div>
              <div class="horizontal-scrollbar overflow-x-auto">
                <!-- Table 1: Subscription / Type / Price / Billing interval / Customers / Revenue / Growth / Health -->
                <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full min-w-[1120px] border-separate border-spacing-0 text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #subscription-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Subscription" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #subscription-cell="{ row }">
                    <div class="flex items-center gap-3">
                      <span :class="row.original.subscriptionClass3">{{ row.original.subscriptionText4 }}</span>
                      <span class="font-medium">{{ row.original.subscriptionText6 }}</span>
                    </div>
                  </template>
                  <template #type-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Type" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #type-cell="{ row }">
                    {{ row.original.type }}
                  </template>
                  <template #price-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Price" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #price-cell="{ row }">
                    {{ row.original.price }}
                  </template>
                  <template #billingInterval-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Billing interval" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #billingInterval-cell="{ row }">
                    {{ row.original.billingInterval }}
                  </template>
                  <template #customers-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Customers" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #customers-cell="{ row }">
                    {{ row.original.customers }}
                  </template>
                  <template #revenue-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Revenue" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #revenue-cell="{ row }">
                    {{ row.original.revenue }}
                  </template>
                  <template #growth-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Growth" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #growth-cell="{ row }">
                    {{ row.original.growth }}
                  </template>
                  <template #health-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Health" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #health-cell="{ row }">
                    <div :class="row.original.healthClass2">{{ row.original.health }}</div>
                  </template>
                </UTable>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
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
