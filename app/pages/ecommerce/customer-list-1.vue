<!-- Page: /ecommerce/customer-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Customer List 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchCustomers": "",
  "last90Days": "Last 90 days",
  "allValues": "All values",
  "last90Days2": "Last 90 days",
  "allValues2": "All values"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All Customers",
    "value": "0"
  },
  {
    "label": "Active",
    "value": "1"
  },
  {
    "label": "VIP",
    "value": "2"
  }
]

const last90DaysOptions = [
  "Last 30 days",
  "Last 90 days",
  "This year"
]

const allValuesOptions = [
  "All values",
  "High value",
  "Mid value",
  "Entry value"
]

const last90Days2Options = [
  "Last 30 days",
  "Last 90 days",
  "This year"
]

const allValues2Options = [
  "All values",
  "High value",
  "Mid value",
  "Entry value"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "customerID": "CUS-1742",
    "name": "Theo Hammondtheo.hammond@caldwell.app",
    "nameAlt5": "Theo Hammond",
    "nameSrc6": "/reference/ac13c01a479a177b.png",
    "nameText10": "Theo Hammond",
    "nameText12": "theo.hammond@caldwell.app",
    "orders": "96",
    "totalSpend": "$18,410",
    "avgOrderValue": "$192",
    "status": "VIP",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default",
    "statusName3": "i-lucide-star",
    "lastOrder": "Mar 21, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Theo Hammond",
    "actionsId5": "radix-_R_41mav5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "customerID": "CUS-7102",
    "name": "Avery Brooksavery.brooks@northmail.co",
    "nameAlt5": "Avery Brooks",
    "nameSrc6": "/reference/5985a55c7498fe2e.png",
    "nameText10": "Avery Brooks",
    "nameText12": "avery.brooks@northmail.co",
    "orders": "42",
    "totalSpend": "$6,124",
    "avgOrderValue": "$146",
    "status": "Active",
    "statusGroup": "1",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName3": "",
    "lastOrder": "Mar 20, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Avery Brooks",
    "actionsId5": "radix-_R_42mav5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "customerID": "CUS-2465",
    "name": "Sienna Blairsienna.blair@meridianhq.co",
    "nameAlt5": "Sienna Blair",
    "nameSrc6": "/reference/01c20c8256a0754a.png",
    "nameText10": "Sienna Blair",
    "nameText12": "sienna.blair@meridianhq.co",
    "orders": "74",
    "totalSpend": "$11,130",
    "avgOrderValue": "$150",
    "status": "VIP",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default",
    "statusName3": "i-lucide-star",
    "lastOrder": "Mar 20, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Sienna Blair",
    "actionsId5": "radix-_R_43mav5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "customerID": "CUS-8431",
    "name": "Camila Hartcamila.hart@northmail.co",
    "nameAlt5": "Camila Hart",
    "nameSrc6": "/reference/9310a24e0d573ddb.png",
    "nameText10": "Camila Hart",
    "nameText12": "camila.hart@northmail.co",
    "orders": "13",
    "totalSpend": "$2,148",
    "avgOrderValue": "$165",
    "status": "Active",
    "statusGroup": "1",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName3": "",
    "lastOrder": "Mar 19, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Camila Hart",
    "actionsId5": "radix-_R_44mav5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "customerID": "CUS-2844",
    "name": "Miles Yoonmiles.yoon@brightlane.co",
    "nameAlt5": "Miles Yoon",
    "nameSrc6": "/reference/a99c47c2fa3dc656.png",
    "nameText10": "Miles Yoon",
    "nameText12": "miles.yoon@brightlane.co",
    "orders": "67",
    "totalSpend": "$12,480",
    "avgOrderValue": "$186",
    "status": "VIP",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default",
    "statusName3": "i-lucide-star",
    "lastOrder": "Mar 18, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Miles Yoon",
    "actionsId5": "radix-_R_45mav5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "customerID": "CUS-3378",
    "name": "Leila Fordeleila.forde@commoner.co",
    "nameAlt5": "Leila Forde",
    "nameSrc6": "/reference/82a5a2284fceeed0.png",
    "nameText10": "Leila Forde",
    "nameText12": "leila.forde@commoner.co",
    "orders": "58",
    "totalSpend": "$9,040",
    "avgOrderValue": "$156",
    "status": "VIP",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default",
    "statusName3": "i-lucide-star",
    "lastOrder": "Mar 17, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Leila Forde",
    "actionsId5": "radix-_R_46mav5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "customerID": "CUS-6619",
    "name": "Zara Quinnzara.quinn@caldwell.app",
    "nameAlt5": "Zara Quinn",
    "nameSrc6": "/reference/62828bc2a489837e.png",
    "nameText10": "Zara Quinn",
    "nameText12": "zara.quinn@caldwell.app",
    "orders": "21",
    "totalSpend": "$3,822",
    "avgOrderValue": "$182",
    "status": "Active",
    "statusGroup": "1",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName3": "",
    "lastOrder": "Mar 14, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Zara Quinn",
    "actionsId5": "radix-_R_47mav5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "customerID": "CUS-1287",
    "name": "Imani Rhodesimani.rhodes@waxwing.io",
    "nameAlt5": "Imani Rhodes",
    "nameSrc6": "/reference/6f77b9b90a56c3cc.png",
    "nameText10": "Imani Rhodes",
    "nameText12": "imani.rhodes@waxwing.io",
    "orders": "31",
    "totalSpend": "$5,180",
    "avgOrderValue": "$167",
    "status": "Active",
    "statusGroup": "1",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName3": "",
    "lastOrder": "Mar 08, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Imani Rhodes",
    "actionsId5": "radix-_R_48mav5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "customerID": "CUS-4926",
    "name": "Rory Bennettrory.bennett@waxwing.io",
    "nameAlt5": "Rory Bennett",
    "nameSrc6": "/reference/ada84674117f0188.png",
    "nameText10": "Rory Bennett",
    "nameText12": "rory.bennett@waxwing.io",
    "orders": "17",
    "totalSpend": "$2,895",
    "avgOrderValue": "$170",
    "status": "Active",
    "statusGroup": "1",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "statusName3": "",
    "lastOrder": "Feb 27, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Rory Bennett",
    "actionsId5": "radix-_R_49mav5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "customerID": "CUS-5290",
    "name": "Nora Castillonora.castillo@brightlane.co",
    "nameAlt5": "Nora Castillo",
    "nameSrc6": "/reference/247ac7c76922347b.png",
    "nameText10": "Nora Castillo",
    "nameText12": "nora.castillo@brightlane.co",
    "orders": "8",
    "totalSpend": "$1,386",
    "avgOrderValue": "$173",
    "status": "At Risk",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default",
    "statusName3": "i-lucide-triangle-alert",
    "lastOrder": "Jan 26, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Nora Castillo",
    "actionsId5": "radix-_R_4amav5uiv5uknmlb_"
  },
  {
    "_id": "11",
    "customerID": "CUS-7306",
    "name": "Elias Mercerelias.mercer@meridianhq.co",
    "nameAlt5": "Elias Mercer",
    "nameSrc6": "/reference/ee2ed71ab799f5e3.png",
    "nameText10": "Elias Mercer",
    "nameText12": "elias.mercer@meridianhq.co",
    "orders": "11",
    "totalSpend": "$1,742",
    "avgOrderValue": "$158",
    "status": "At Risk",
    "statusGroup": "0",
    "statusClass2": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default",
    "statusName3": "i-lucide-triangle-alert",
    "lastOrder": "Jan 14, 2026",
    "actions": "",
    "actionsArialabel3": "Open actions for Elias Mercer",
    "actionsId5": "radix-_R_4bmav5uiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "customerID",
    "header": "Customer ID"
  },
  {
    "accessorKey": "name",
    "header": "Name"
  },
  {
    "accessorKey": "orders",
    "header": "Orders"
  },
  {
    "accessorKey": "totalSpend",
    "header": "Total spend"
  },
  {
    "accessorKey": "avgOrderValue",
    "header": "Avg. order value"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "lastOrder",
    "header": "Last order"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchCustomers || '').toLowerCase()
  const keys = ["customerID","name","orders","totalSpend","avgOrderValue","status","lastOrder","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/customer-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Customers</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Customer List 1</span>
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
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-4 pb-8 md:hidden">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Customers</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Customers</h1>
                    <p class="text-muted text-sm">Track retention, value, and recent purchase activity.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-11 w-full rounded-xl px-5 shadow-none" to="/ecommerce/add-customer">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Create Customer
                  </NuxtLink>
                </div>
                <div class="hidden gap-4 pb-8 md:flex lg:flex-row lg:items-start lg:justify-between">
                  <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Customers</h1>
                    <p class="text-muted text-sm">Track retention, value, and recent purchase activity.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-md px-5 shadow-none" to="/ecommerce/add-customer">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Create Customer
                  </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-3 md:hidden">
                  <div class="rounded-2xl border p-4 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs">
                      <UIcon name="i-lucide-users" class="size-4 shrink-0" />
                      <span class="truncate whitespace-nowrap">Customers</span>
                    </div>
                    <div class="mt-3 flex items-end justify-between gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-lg font-semibold">1,864</span>
                        <span class="text-xs font-medium text-success">+4.8%</span>
                      </div>
                      <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                        <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,100 11.11111111111111,87.87878787878788 22.22222222222222,78.78787878787878 33.33333333333333,81.81818181818181 44.44444444444444,66.66666666666667 55.55555555555556,54.54545454545455 66.66666666666666,42.42424242424242 77.77777777777779,27.272727272727266 88.88888888888889,18.181818181818173 100,0" class="text-info" />
                      </svg>
                    </div>
                  </div>
                  <div class="rounded-2xl border p-4 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs">
                      <UIcon name="i-lucide-user-plus" class="size-4 shrink-0" />
                      <span class="truncate whitespace-nowrap">New customers</span>
                    </div>
                    <div class="mt-3 flex items-end justify-between gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-lg font-semibold">214</span>
                        <span class="text-xs font-medium text-success">+11.2%</span>
                      </div>
                      <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                        <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,87.5 11.11111111111111,100 22.22222222222222,100 33.33333333333333,75 44.44444444444444,75 55.55555555555556,50 66.66666666666666,37.5 77.77777777777779,37.5 88.88888888888889,12.5 100,0" class="text-info" />
                      </svg>
                    </div>
                  </div>
                  <div class="rounded-2xl border p-4 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs">
                      <UIcon name="i-lucide-refresh-ccw" class="size-4 shrink-0" />
                      <span class="truncate whitespace-nowrap">Repeat rate</span>
                    </div>
                    <div class="mt-3 flex items-end justify-between gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-lg font-semibold">63.8%</span>
                        <span class="text-xs font-medium text-success">+2.1%</span>
                      </div>
                      <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                        <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,87.5 11.11111111111111,100 22.22222222222222,75 33.33333333333333,62.5 44.44444444444444,75 55.55555555555556,37.5 66.66666666666666,50 77.77777777777779,25 88.88888888888889,12.5 100,0" class="text-info" />
                      </svg>
                    </div>
                  </div>
                  <div class="rounded-2xl border p-4 border-default">
                    <div class="text-muted flex items-center gap-2 text-xs">
                      <UIcon name="i-lucide-dollar-sign" class="size-4 shrink-0" />
                      <span class="truncate whitespace-nowrap">Lifetime value</span>
                    </div>
                    <div class="mt-3 flex items-end justify-between gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-lg font-semibold">$1,184</span>
                        <span class="text-xs font-medium text-success">+6.4%</span>
                      </div>
                      <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                        <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,100 11.11111111111111,88.23529411764706 22.22222222222222,88.23529411764706 33.33333333333333,76.47058823529412 44.44444444444444,64.70588235294117 55.55555555555556,58.82352941176471 66.66666666666666,41.17647058823529 77.77777777777779,35.294117647058826 88.88888888888889,11.764705882352942 100,0" class="text-info" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="hidden overflow-hidden rounded-lg border md:grid md:grid-cols-4 border-default">
                  <div class="flex min-h-28 items-end justify-between gap-3 p-5 border-r border-default">
                    <div class="flex min-w-0 flex-col gap-3">
                      <div class="text-muted flex items-center gap-2 text-xs lg:text-sm">
                        <UIcon name="i-lucide-users" class="size-4 shrink-0" />
                        <span class="truncate whitespace-nowrap">Customers</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-semibold">1,864</span>
                        <span class="text-sm font-medium text-success">+4.8%</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                      <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,100 11.11111111111111,87.87878787878788 22.22222222222222,78.78787878787878 33.33333333333333,81.81818181818181 44.44444444444444,66.66666666666667 55.55555555555556,54.54545454545455 66.66666666666666,42.42424242424242 77.77777777777779,27.272727272727266 88.88888888888889,18.181818181818173 100,0" class="text-info" />
                    </svg>
                  </div>
                  <div class="flex min-h-28 items-end justify-between gap-3 p-5 border-r border-default">
                    <div class="flex min-w-0 flex-col gap-3">
                      <div class="text-muted flex items-center gap-2 text-xs lg:text-sm">
                        <UIcon name="i-lucide-user-plus" class="size-4 shrink-0" />
                        <span class="truncate whitespace-nowrap">New customers</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-semibold">214</span>
                        <span class="text-sm font-medium text-success">+11.2%</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                      <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,87.5 11.11111111111111,100 22.22222222222222,100 33.33333333333333,75 44.44444444444444,75 55.55555555555556,50 66.66666666666666,37.5 77.77777777777779,37.5 88.88888888888889,12.5 100,0" class="text-info" />
                    </svg>
                  </div>
                  <div class="flex min-h-28 items-end justify-between gap-3 p-5 border-r border-default">
                    <div class="flex min-w-0 flex-col gap-3">
                      <div class="text-muted flex items-center gap-2 text-xs lg:text-sm">
                        <UIcon name="i-lucide-refresh-ccw" class="size-4 shrink-0" />
                        <span class="truncate whitespace-nowrap">Repeat rate</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-semibold">63.8%</span>
                        <span class="text-sm font-medium text-success">+2.1%</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                      <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,87.5 11.11111111111111,100 22.22222222222222,75 33.33333333333333,62.5 44.44444444444444,75 55.55555555555556,37.5 66.66666666666666,50 77.77777777777779,25 88.88888888888889,12.5 100,0" class="text-info" />
                    </svg>
                  </div>
                  <div class="flex min-h-28 items-end justify-between gap-3 p-5">
                    <div class="flex min-w-0 flex-col gap-3">
                      <div class="text-muted flex items-center gap-2 text-xs lg:text-sm">
                        <UIcon name="i-lucide-dollar-sign" class="size-4 shrink-0" />
                        <span class="truncate whitespace-nowrap">Lifetime value</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-semibold">$1,184</span>
                        <span class="text-sm font-medium text-success">+6.4%</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 100 100" class="h-9 w-20" width="100%" height="100%">
                      <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0,100 11.11111111111111,88.23529411764706 22.22222222222222,88.23529411764706 33.33333333333333,76.47058823529412 44.44444444444444,64.70588235294117 55.55555555555556,58.82352941176471 66.66666666666666,41.17647058823529 77.77777777777779,35.294117647058826 88.88888888888889,11.764705882352942 100,0" class="text-info" />
                    </svg>
                  </div>
                </div>
                <div class="flex flex-col pt-6">
                  <div data-orientation="horizontal" class="pb-1">
                    <div class="border-b border-default">
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center rounded-lg h-auto bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 pt-3 md:hidden">
                    <div class="relative">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchCustomers" type="search" placeholder="Search customers" aria-label="Search customers" name="searchCustomers" class="flex w-full text-base md:text-sm h-12 rounded-2xl pl-9" :ui="{ base: 'h-full' }" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <USelect v-model="form.last90Days" :items="last90DaysOptions" aria-label="Filter customers by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
                      <USelect v-model="form.allValues" :items="allValuesOptions" aria-label="Filter customers by value band" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
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
                        <UInput v-model="form.searchCustomers" type="search" placeholder="Search customers" aria-label="Search customers" name="searchCustomers" class="flex text-base md:text-sm h-10 w-[220px] rounded-lg pl-9" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.last90Days2" :items="last90Days2Options" aria-label="Filter customers by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[160px] rounded-lg" />
                      <USelect v-model="form.allValues2" :items="allValues2Options" aria-label="Filter customers by value band" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[160px] rounded-lg" />
                    </div>
                    <div class="flex items-center gap-3">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-lg px-4" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                        <UIcon name="i-lucide-settings-2" class="size-4" />
                        Manage Table
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4 pt-4 md:hidden">
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-1742
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Theo Hammond" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Theo Hammond
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">theo.hammond@caldwell.app</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Theo Hammond" type="button" @click="openAction(&quot;Open actions for Theo Hammond&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">
                        <UIcon name="i-lucide-star" class="mr-1 size-3.5" />
                        VIP
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">96</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$18,410</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$192</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 21, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-7102
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Avery Brooks" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Avery Brooks
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">avery.brooks@northmail.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Avery Brooks" type="button" @click="openAction(&quot;Open actions for Avery Brooks&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">42</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$6,124</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$146</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 20, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-2465
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Sienna Blair" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Sienna Blair
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">sienna.blair@meridianhq.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Sienna Blair" type="button" @click="openAction(&quot;Open actions for Sienna Blair&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">
                        <UIcon name="i-lucide-star" class="mr-1 size-3.5" />
                        VIP
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">74</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$11,130</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$150</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 20, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-8431
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Camila Hart" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Camila Hart
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">camila.hart@northmail.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Camila Hart" type="button" @click="openAction(&quot;Open actions for Camila Hart&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">13</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$2,148</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$165</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 19, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-2844
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Miles Yoon" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Miles Yoon
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">miles.yoon@brightlane.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Miles Yoon" type="button" @click="openAction(&quot;Open actions for Miles Yoon&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">
                        <UIcon name="i-lucide-star" class="mr-1 size-3.5" />
                        VIP
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">67</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$12,480</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$186</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 18, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-3378
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Leila Forde" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Leila Forde
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">leila.forde@commoner.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Leila Forde" type="button" @click="openAction(&quot;Open actions for Leila Forde&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">
                        <UIcon name="i-lucide-star" class="mr-1 size-3.5" />
                        VIP
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">58</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$9,040</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$156</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 17, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-6619
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Zara Quinn" src="/reference/62828bc2a489837e.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Zara Quinn
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">zara.quinn@caldwell.app</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Zara Quinn" type="button" @click="openAction(&quot;Open actions for Zara Quinn&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">21</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$3,822</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$182</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 14, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-1287
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Imani Rhodes" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Imani Rhodes
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">imani.rhodes@waxwing.io</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Imani Rhodes" type="button" @click="openAction(&quot;Open actions for Imani Rhodes&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">31</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$5,180</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$167</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Mar 08, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-4926
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Rory Bennett" src="/reference/ada84674117f0188.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Rory Bennett
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">rory.bennett@waxwing.io</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Rory Bennett" type="button" @click="openAction(&quot;Open actions for Rory Bennett&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">17</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$2,895</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$170</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Feb 27, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-5290
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Nora Castillo" src="/reference/247ac7c76922347b.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Nora Castillo
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">nora.castillo@brightlane.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Nora Castillo" type="button" @click="openAction(&quot;Open actions for Nora Castillo&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default">
                        <UIcon name="i-lucide-triangle-alert" class="mr-1 size-3.5" />
                        At Risk
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">8</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$1,386</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$173</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Jan 26, 2026</span>
                      </div>
                    </div>
                  </article>
                  <article class="rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <NuxtLink class="text-muted text-xs hover:underline" to="/ecommerce/customer-detail-1">
                          CUS-7306
                        </NuxtLink>
                        <div class="mt-2">
                          <div class="flex items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" alt="Elias Mercer" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                                Elias Mercer
                              </NuxtLink>
                              <p class="text-muted truncate text-xs">elias.mercer@meridianhq.co</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Elias Mercer" type="button" @click="openAction(&quot;Open actions for Elias Mercer&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default">
                        <UIcon name="i-lucide-triangle-alert" class="mr-1 size-3.5" />
                        At Risk
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Orders</span>
                        <span class="text-sm font-medium">11</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Lifetime value</span>
                        <span class="text-sm font-medium">$1,742</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Avg. order</span>
                        <span class="text-sm font-medium">$158</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Last order</span>
                        <span class="text-sm">Jan 14, 2026</span>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="hidden overflow-x-auto pt-4 md:block">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Customer ID / Name / Orders / Total spend / Avg. order value / Status / Last order -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #customerID-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Customer ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #customerID-cell="{ row }">
                        <NuxtLink class="text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                          {{ row.original.customerID }}
                        </NuxtLink>
                      </template>
                      <template #name-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Name" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #name-cell="{ row }">
                        <div class="flex items-center gap-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" :alt="row.original.nameAlt5" :src="row.original.nameSrc6" loading="lazy" />
                          </span>
                          <div class="min-w-0">
                            <NuxtLink class="block truncate text-sm font-medium hover:underline" to="/ecommerce/customer-detail-1">
                              {{ row.original.nameText10 }}
                            </NuxtLink>
                            <p class="text-muted truncate text-xs">{{ row.original.nameText12 }}</p>
                          </div>
                        </div>
                      </template>
                      <template #orders-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Orders" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #orders-cell="{ row }">
                        {{ row.original.orders }}
                      </template>
                      <template #totalSpend-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Total spend" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #totalSpend-cell="{ row }">
                        {{ row.original.totalSpend }}
                      </template>
                      <template #avgOrderValue-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Avg. order value" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #avgOrderValue-cell="{ row }">
                        {{ row.original.avgOrderValue }}
                      </template>
                      <template #status-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #status-cell="{ row }">
                        <template v-if="row.original.statusGroup === '0'">
                          <div :class="row.original.statusClass2">
                            <UIcon :name="row.original.statusName3" class="mr-1 size-3.5" />
                            {{ row.original.status }}
                          </div>
                        </template>
                        <template v-if="row.original.statusGroup === '1'">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">{{ row.original.status }}</div>
                        </template>
                      </template>
                      <template #lastOrder-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Last order" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #lastOrder-cell="{ row }">
                        {{ row.original.lastOrder }}
                      </template>
                      <template #actions-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for Theo Hammond&quot;, row.original._id, 1)">
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
