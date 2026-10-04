<!-- Page: /ecommerce/order-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Order List 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchOrders": "",
  "allTime": "All time",
  "paymentStatus": "Payment Status",
  "fulfillment": "Fulfillment",
  "allTime2": "All time",
  "paymentStatus2": "Payment Status",
  "fulfillment2": "Fulfillment"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All Orders",
    "value": "0"
  },
  {
    "label": "Unfulfilled",
    "value": "1"
  },
  {
    "label": "Paid",
    "value": "2"
  }
]

const allTimeOptions = [
  "All time",
  "Last 3 days",
  "Last 7 days"
]

const paymentStatusOptions = [
  "Payment Status",
  "Paid",
  "Pending",
  "Canceled"
]

const fulfillmentOptions = [
  "Fulfillment",
  "Fulfilled",
  "Unfulfilled"
]

const allTime2Options = [
  "All time",
  "Last 3 days",
  "Last 7 days"
]

const paymentStatus2Options = [
  "Payment Status",
  "Paid",
  "Pending",
  "Canceled"
]

const fulfillment2Options = [
  "Fulfillment",
  "Fulfilled",
  "Unfulfilled"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "orderID": "ORD-34021",
    "orderIDGroup": "0",
    "total": "$1,248.50",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Maya CollinsCUS-812",
    "customerText4": "Maya Collins",
    "customerText6": "CUS-812",
    "orderDate": "Tue 18 Mar, 2026",
    "channels": "Online Store",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34021",
    "actionsId5": "radix-_R_3hlav5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "orderID": "ORD-34020",
    "orderIDGroup": "0",
    "total": "$486.75",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Jordan ReyesCUS-447",
    "customerText4": "Jordan Reyes",
    "customerText6": "CUS-447",
    "orderDate": "Tue 18 Mar, 2026",
    "channels": "Subscription",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34020",
    "actionsId5": "radix-_R_3ilav5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "orderID": "ORD-34019",
    "orderIDGroup": "1",
    "total": "$0.00",
    "status": "CanceledUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default",
    "statusName4": "i-lucide-circle-x",
    "statusText6": "Canceled",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Elaine WuCUS-229",
    "customerText4": "Elaine Wu",
    "customerText6": "CUS-229",
    "orderDate": "Mon 17 Mar, 2026",
    "channels": "Retail Partner",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34019",
    "actionsId5": "radix-_R_3jlav5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "orderID": "ORD-34018",
    "orderIDGroup": "1",
    "total": "$932.40",
    "status": "PaidFulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "statusText8": "Fulfilled",
    "customer": "Noah BennettCUS-590",
    "customerText4": "Noah Bennett",
    "customerText6": "CUS-590",
    "orderDate": "Sun 16 Mar, 2026",
    "channels": "Online Store",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34018",
    "actionsId5": "radix-_R_3klav5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "orderID": "ORD-34017",
    "orderIDGroup": "0",
    "total": "$211.30",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Priya MenonCUS-731",
    "customerText4": "Priya Menon",
    "customerText6": "CUS-731",
    "orderDate": "Sun 16 Mar, 2026",
    "channels": "Marketplace",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34017",
    "actionsId5": "radix-_R_3llav5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "orderID": "ORD-34016",
    "orderIDGroup": "0",
    "total": "$3,150.20",
    "status": "PendingUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Pending",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Omar HaddadCUS-144",
    "customerText4": "Omar Haddad",
    "customerText6": "CUS-144",
    "orderDate": "Sat 15 Mar, 2026",
    "channels": "Wholesale",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34016",
    "actionsId5": "radix-_R_3mlav5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "orderID": "ORD-34015",
    "orderIDGroup": "0",
    "total": "$128.90",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Lena HartCUS-963",
    "customerText4": "Lena Hart",
    "customerText6": "CUS-963",
    "orderDate": "Sat 15 Mar, 2026",
    "channels": "Online Store",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34015",
    "actionsId5": "radix-_R_3nlav5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "orderID": "ORD-34014",
    "orderIDGroup": "1",
    "total": "$764.20",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Tobias GreenCUS-308",
    "customerText4": "Tobias Green",
    "customerText6": "CUS-308",
    "orderDate": "Fri 14 Mar, 2026",
    "channels": "Retail POS",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34014",
    "actionsId5": "radix-_R_3olav5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "orderID": "ORD-34013",
    "orderIDGroup": "0",
    "total": "$542.10",
    "status": "PaidUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Sofia AlvarezCUS-625",
    "customerText4": "Sofia Alvarez",
    "customerText6": "CUS-625",
    "orderDate": "Fri 14 Mar, 2026",
    "channels": "Marketplace",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34013",
    "actionsId5": "radix-_R_3plav5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "orderID": "ORD-34012",
    "orderIDGroup": "1",
    "total": "$97.50",
    "status": "PaidFulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "statusText8": "Fulfilled",
    "customer": "Nina ParkCUS-518",
    "customerText4": "Nina Park",
    "customerText6": "CUS-518",
    "orderDate": "Thu 13 Mar, 2026",
    "channels": "Subscription",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34012",
    "actionsId5": "radix-_R_3qlav5uiv5uknmlb_"
  },
  {
    "_id": "11",
    "orderID": "ORD-34011",
    "orderIDGroup": "1",
    "total": "$166.40",
    "status": "PaidFulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName4": "i-lucide-circle-check",
    "statusText6": "Paid",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "statusText8": "Fulfilled",
    "customer": "Caleb MooreCUS-277",
    "customerText4": "Caleb Moore",
    "customerText6": "CUS-277",
    "orderDate": "Thu 13 Mar, 2026",
    "channels": "Wholesale",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34011",
    "actionsId5": "radix-_R_3rlav5uiv5uknmlb_"
  },
  {
    "_id": "12",
    "orderID": "ORD-34010",
    "orderIDGroup": "1",
    "total": "$0.00",
    "status": "CanceledUnfulfilled",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default",
    "statusName4": "i-lucide-circle-x",
    "statusText6": "Canceled",
    "statusClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "statusText8": "Unfulfilled",
    "customer": "Harper JamesCUS-804",
    "customerText4": "Harper James",
    "customerText6": "CUS-804",
    "orderDate": "Wed 12 Mar, 2026",
    "channels": "Retail Partner",
    "actions": "",
    "actionsArialabel3": "Open actions for ORD-34010",
    "actionsId5": "radix-_R_3slav5uiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "orderID",
    "header": "Order ID"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "customer",
    "header": "Customer"
  },
  {
    "accessorKey": "orderDate",
    "header": "Order Date"
  },
  {
    "accessorKey": "channels",
    "header": "Channels"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchOrders || '').toLowerCase()
  const keys = ["orderID","total","status","customer","orderDate","channels","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/order-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Orders</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Order List 1</span>
              </div>
              <div class="relative xl:mx-auto xl:w-full xl:max-w-md">
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default py-2 bg-(--ui-bg-muted)/70 text-muted hover:bg-(--ui-bg-muted)/90 hover:text-highlighted h-10 w-full justify-start rounded-full border-none px-3 font-normal shadow-none" aria-label="Search pages or run commands⌘K" type="button" @click="openAction(&quot;Search pages or run commands⌘K&quot;)">
                  <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                  <span class="min-w-0 flex-1 truncate text-left">Search pages or run commands</span>
                  <UKbd class="bg-default pointer-events-none hidden h-6 shrink-0 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex border-default">⌘K</UKbd>
                </UButton>
              </div>
            </div>
          </header>
          <div class="flex min-h-0 flex-1 flex-col overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-4 pb-8 md:hidden">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Orders</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Orders List</h1>
                    <p class="text-muted text-sm">Track payments, fulfillment, and customer activity.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-11 w-full rounded-xl px-5 shadow-none" to="/ecommerce/add-order">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Create Order
                  </NuxtLink>
                </div>
                <div class="hidden gap-4 pb-8 md:flex lg:flex-row lg:items-start lg:justify-between">
                  <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Orders List</h1>
                    <p class="text-muted text-sm">Track payments, fulfillment, and customer activity.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-md px-5 shadow-none" to="/ecommerce/add-order">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Create Order
                  </NuxtLink>
                </div>
                <div class="flex flex-col">
                  <div data-orientation="horizontal" class="pt-2 pb-1">
                    <div class="border-b border-default">
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center rounded-lg h-auto bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 pt-3 md:hidden">
                    <div class="relative">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchOrders" type="search" placeholder="Search orders" aria-label="Search orders" name="searchOrders" class="flex w-full text-base md:text-sm h-12 rounded-2xl pl-9" :ui="{ base: 'h-full' }" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <USelect v-model="form.allTime" :items="allTimeOptions" aria-label="Filter orders by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
                      <USelect v-model="form.paymentStatus" :items="paymentStatusOptions" aria-label="Filter orders by payment status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
                      <USelect v-model="form.fulfillment" :items="fulfillmentOptions" aria-label="Filter orders by fulfillment status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-11 w-full rounded-2xl" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                      <UIcon name="i-lucide-settings-2" class="size-4" />
                      Manage Table
                    </UButton>
                  </div>
                  <div class="hidden gap-4 pt-2 md:flex md:flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div class="flex flex-wrap items-center gap-3">
                      <div class="relative">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchOrders" type="search" placeholder="Search orders" aria-label="Search orders" name="searchOrders" class="flex text-base md:text-sm h-10 w-[220px] rounded-lg pl-9" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.allTime2" :items="allTime2Options" aria-label="Filter orders by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[150px] rounded-lg" />
                      <USelect v-model="form.paymentStatus2" :items="paymentStatus2Options" aria-label="Filter orders by payment status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[160px] rounded-lg" />
                      <USelect v-model="form.fulfillment2" :items="fulfillment2Options" aria-label="Filter orders by fulfillment status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[150px] rounded-lg" />
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-lg px-4" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                      <UIcon name="i-lucide-settings-2" class="size-4" />
                      Manage Table
                    </UButton>
                  </div>
                </div>
                <div class="flex flex-col gap-4 pt-3 md:hidden">
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34021
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Maya Collins</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34021" type="button" @click="openAction(&quot;Open actions for ORD-34021&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$1,248.50</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-812</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Tue 18 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Online Store</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34020
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Jordan Reyes</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34020" type="button" @click="openAction(&quot;Open actions for ORD-34020&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$486.75</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-447</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Tue 18 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Subscription</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34019
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Elaine Wu</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34019" type="button" @click="openAction(&quot;Open actions for ORD-34019&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default">
                          <UIcon name="i-lucide-circle-x" class="mr-1 size-3.5" />
                          Canceled
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$0.00</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-229</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Mon 17 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Retail Partner</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34018
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Noah Bennett</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34018" type="button" @click="openAction(&quot;Open actions for ORD-34018&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Fulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$932.40</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-590</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Sun 16 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Online Store</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34017
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Priya Menon</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34017" type="button" @click="openAction(&quot;Open actions for ORD-34017&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$211.30</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-731</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Sun 16 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Marketplace</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34016
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Omar Haddad</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34016" type="button" @click="openAction(&quot;Open actions for ORD-34016&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Pending
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$3,150.20</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-144</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Sat 15 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Wholesale</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34015
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Lena Hart</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34015" type="button" @click="openAction(&quot;Open actions for ORD-34015&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$128.90</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-963</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Sat 15 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Online Store</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34014
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Tobias Green</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34014" type="button" @click="openAction(&quot;Open actions for ORD-34014&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$764.20</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-308</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Fri 14 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Retail POS</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34013
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Sofia Alvarez</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34013" type="button" @click="openAction(&quot;Open actions for ORD-34013&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$542.10</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-625</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Fri 14 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Marketplace</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34012
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Nina Park</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34012" type="button" @click="openAction(&quot;Open actions for ORD-34012&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Fulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$97.50</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-518</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Thu 13 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Subscription</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34011
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Caleb Moore</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34011" type="button" @click="openAction(&quot;Open actions for ORD-34011&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">
                          <UIcon name="i-lucide-circle-check" class="mr-1 size-3.5" />
                          Paid
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Fulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$166.40</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-277</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Thu 13 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Wholesale</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/order-detail-1">
                            ORD-34010
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">Harper James</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for ORD-34010" type="button" @click="openAction(&quot;Open actions for ORD-34010&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default">
                          <UIcon name="i-lucide-circle-x" class="mr-1 size-3.5" />
                          Canceled
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Unfulfilled</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Total</span>
                        <span class="text-sm font-medium">$0.00</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Customer</span>
                        <span class="text-sm font-medium">CUS-804</span>
                      </div>
                      <div class="col-span-2 flex flex-col gap-1">
                        <span class="text-muted text-xs">Order date</span>
                        <span class="text-sm">Wed 12 Mar, 2026</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <UIcon name="i-lucide-store" class="size-3.5" />
                        <span class="truncate">Retail Partner</span>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="hidden overflow-x-auto pt-3 md:block">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Order ID / Total / Status / Customer / Order Date / Channels -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[1040px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #orderID-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Order ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #orderID-cell="{ row }">
                        <template v-if="row.original.orderIDGroup === '0'">
                          <div class="flex items-center gap-3">
                            <span class="size-2 rounded-full bg-error" />
                            <NuxtLink class="text-sm font-medium hover:underline" to="/ecommerce/order-detail-1">
                              {{ row.original.orderID }}
                            </NuxtLink>
                          </div>
                        </template>
                        <template v-if="row.original.orderIDGroup === '1'">
                          <div class="flex items-center gap-3">
                            <NuxtLink class="text-sm font-medium hover:underline" to="/ecommerce/order-detail-1">
                              {{ row.original.orderID }}
                            </NuxtLink>
                          </div>
                        </template>
                      </template>
                      <template #total-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #total-cell="{ row }">
                        {{ row.original.total }}
                      </template>
                      <template #status-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #status-cell="{ row }">
                        <div class="flex flex-wrap items-center gap-2">
                          <div :class="row.original.statusClass3">
                            <UIcon :name="row.original.statusName4" class="mr-1 size-3.5" />
                            {{ row.original.statusText6 }}
                          </div>
                          <div :class="row.original.statusClass7">{{ row.original.statusText8 }}</div>
                        </div>
                      </template>
                      <template #customer-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customer-cell="{ row }">
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="text-sm font-medium">{{ row.original.customerText4 }}</span>
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted font-normal border-default">{{ row.original.customerText6 }}</div>
                        </div>
                      </template>
                      <template #orderDate-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Order Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #orderDate-cell="{ row }">
                        {{ row.original.orderDate }}
                      </template>
                      <template #channels-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Channels" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #channels-cell="{ row }">
                        <div class="border-(--ui-border)/70 text-muted inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                          <UIcon name="i-lucide-store" class="size-3.5" />
                          <span class="truncate">{{ row.original.channels }}</span>
                        </div>
                      </template>
                      <template #actions-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for ORD-34021&quot;, row.original._id, 1)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </template>
                    </UTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
