<!-- Page: /original/dashboard-11 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 11 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "year": "Year",
  "period": "Period"
})

const yearOptions = [
  "2024",
  "2025",
  "2026"
]

const periodOptions = [
  "Last 24h",
  "Last Week",
  "Last Month"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "user": "RoRodrigorodrigo65@hotmail.com",
    "userText5": "Ro",
    "userText8": "Rodrigo",
    "userText10": "rodrigo65@hotmail.com",
    "status": "New",
    "statusClass2": "inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-[4px] text-[11px] leading-none bg-info/10 border-info/20 text-info dark:bg-info/10 dark:text-info",
    "iD": "#329341",
    "date": "21 min ago",
    "dateText2": "21 ",
    "amount": "$241.75",
    "amountText3": "241.75"
  },
  {
    "_id": "2",
    "user": "JeJedediahjedediah73@gmail.com",
    "userText5": "Je",
    "userText8": "Jedediah",
    "userText10": "jedediah73@gmail.com",
    "status": "Delete",
    "statusClass2": "inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-[4px] text-[11px] leading-none bg-(--ui-error)/10 border-(--ui-error)/30 text-error dark:bg-(--ui-error)/50 dark:text-highlighted dark:border-(--ui-error) border-default",
    "iD": "#329341",
    "date": "57 min ago",
    "dateText2": "57 ",
    "amount": "$587.12",
    "amountText3": "587.12"
  },
  {
    "_id": "3",
    "user": "IvIvanivan.beer@gmail.com",
    "userText5": "Iv",
    "userText8": "Ivan",
    "userText10": "ivan.beer@gmail.com",
    "status": "Invited",
    "statusClass2": "inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted dark:bg-opacity-5 rounded-full px-2 py-[4px] text-[11px] leading-none border-default",
    "iD": "#329341",
    "date": "12 min ago",
    "dateText2": "12 ",
    "amount": "$95.29",
    "amountText3": "95.29"
  },
  {
    "_id": "4",
    "user": "OmOmaromar6@gmail.com",
    "userText5": "Om",
    "userText8": "Omar",
    "userText10": "omar6@gmail.com",
    "status": "Invited",
    "statusClass2": "inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted dark:bg-opacity-5 rounded-full px-2 py-[4px] text-[11px] leading-none border-default",
    "iD": "#329341",
    "date": "50 min ago",
    "dateText2": "50 ",
    "amount": "$391.44",
    "amountText3": "391.44"
  },
  {
    "_id": "5",
    "user": "FrFrederickfrederick20@gmail.com",
    "userText5": "Fr",
    "userText8": "Frederick",
    "userText10": "frederick20@gmail.com",
    "status": "Suspended",
    "statusClass2": "inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 rounded-full px-2 py-[4px] text-[11px] leading-none bg-warning/10 border-warning/20 text-warning dark:bg-warning/10 dark:text-warning",
    "iD": "#329341",
    "date": "36 min ago",
    "dateText2": "36 ",
    "amount": "$583.79",
    "amountText3": "583.79"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "user",
    "header": "User"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "iD",
    "header": "ID"
  },
  {
    "accessorKey": "date",
    "header": "Date"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["user","status","iD","date","amount"] as const
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
  const rows = table1FilteredRows.value.map(row => ["user","status","iD","date","amount"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "original-dashboard-11.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/dashboard-11">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col gap-4 p-4">
              <div class="flex flex-col items-start justify-between gap-2 md:flex-row">
                <div>
                  <h2 class="text-2xl font-bold tracking-tight text-highlighted">Dashboard</h2>
                  <p class="text-muted">Here're the details of your analysis.</p>
                </div>
                <div class="flex items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Filter By" type="button" @click="openAction(&quot;Filter By&quot;)">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-filter">
                      <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
                    </svg>
                     Filter By
                  </UButton>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Export" type="button" @click="exportCsv()">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-file-description">
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                      <path d="M9 17h6" />
                      <path d="M9 13h6" />
                    </svg>
                    Export
                  </UButton>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-5 lg:grid-cols-12">
                <div class="col-span-6 grid grid-cols-6 gap-4">
                  <div class="col-span-3">
                    <!-- Card 1: Total Sales$4,523,18910.2%+1,454.89 todayView Report -->
                    <UCard class="rounded-lg h-full w-full" :ui="{ body: 'contents' }">
                      <div class="flex flex-row items-center justify-between space-y-0 p-4">
                        <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                          <div class="bg-opacity-25 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-report-money text-secondary">
                              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                              <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                              <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                              <path d="M12 17v1m0 -8v1" />
                            </svg>
                          </div>
                          <span>Total Sales</span>
                        </div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots cursor-pointer opacity-60">
                          <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <div class="p-6 space-y-[10px] px-4 pt-0 pb-4">
                        <p class="text-2xl font-bold text-highlighted">$4,523,189</p>
                        <div class="flex flex-wrap items-center gap-2">
                          <div class="flex items-center gap-1 text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                            <p class="text-xs font-bold text-highlighted">10.2%</p>
                          </div>
                          <p class="text-muted text-xs font-normal">+1,454.89 today</p>
                        </div>
                        <div class="bg-(--ui-text-muted) h-[0.04px] w-full opacity-50" />
                        <div class="flex items-center gap-2">
                          <p class="text-xs font-medium">View Report</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-narrow-right">
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                          </svg>
                        </div>
                      </div>
                    </UCard>
                  </div>
                  <div class="col-span-3">
                    <!-- Card 2: Total Orders12,54520.2%+1,589 todayView Report -->
                    <UCard class="rounded-lg h-full w-full" :ui="{ body: 'contents' }">
                      <div class="flex flex-row items-center justify-between space-y-0 p-4">
                        <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                          <div class="bg-opacity-25 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-clipboard-check text-secondary">
                              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                              <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                              <path d="M9 14l2 2l4 -4" />
                            </svg>
                          </div>
                          <span>Total Orders</span>
                        </div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots cursor-pointer opacity-60">
                          <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <div class="p-6 space-y-[10px] px-4 pt-0 pb-4">
                        <p class="text-2xl font-bold text-highlighted">12,545</p>
                        <div class="flex flex-wrap items-center gap-2">
                          <div class="flex items-center gap-1 text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                            <p class="text-xs font-bold text-highlighted">20.2%</p>
                          </div>
                          <p class="text-muted text-xs font-normal">+1,589 today</p>
                        </div>
                        <div class="bg-(--ui-text-muted) h-[0.04px] w-full opacity-50" />
                        <div class="flex items-center gap-2">
                          <p class="text-xs font-medium">View Report</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-narrow-right">
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                          </svg>
                        </div>
                      </div>
                    </UCard>
                  </div>
                  <div class="col-span-3">
                    <!-- Card 3: Total Visitors8,34414.2%-89 todayView Report -->
                    <UCard class="rounded-lg h-full w-full" :ui="{ body: 'contents' }">
                      <div class="flex flex-row items-center justify-between space-y-0 p-4">
                        <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                          <div class="bg-opacity-25 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="tabler-icon tabler-icon-user-filled text-secondary">
                              <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                              <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                            </svg>
                          </div>
                          <span>Total Visitors</span>
                        </div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots cursor-pointer opacity-60">
                          <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <div class="p-6 space-y-[10px] px-4 pt-0 pb-4">
                        <p class="text-2xl font-bold text-highlighted">8,344</p>
                        <div class="flex flex-wrap items-center gap-2">
                          <div class="flex items-center gap-1 text-error">
                            <UIcon name="i-lucide-arrow-down-right" class="size-4" />
                            <p class="text-xs font-bold text-highlighted">14.2%</p>
                          </div>
                          <p class="text-muted text-xs font-normal">-89 today</p>
                        </div>
                        <div class="bg-(--ui-text-muted) h-[0.04px] w-full opacity-50" />
                        <div class="flex items-center gap-2">
                          <p class="text-xs font-medium">View Report</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-narrow-right">
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                          </svg>
                        </div>
                      </div>
                    </UCard>
                  </div>
                  <div class="col-span-3">
                    <!-- Card 4: Refunded3,14812.6%+48 todayView Report -->
                    <UCard class="rounded-lg h-full w-full" :ui="{ body: 'contents' }">
                      <div class="flex flex-row items-center justify-between space-y-0 p-4">
                        <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                          <div class="bg-opacity-25 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="tabler-icon tabler-icon-receipt-filled text-secondary">
                              <path d="M17 2a3 3 0 0 1 3 3v16a1 1 0 0 1 -1.555 .832l-2.318 -1.545l-1.42 1.42a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.421 -1.42l-2.317 1.545l-.019 .012l-.054 .03l-.028 .017l-.054 .023l-.05 .023l-.049 .015l-.06 .019l-.052 .009l-.057 .011l-.084 .006l-.026 .003h-.022l-.049 -.003h-.039l-.013 -.003h-.016l-.041 -.008l-.038 -.005l-.015 -.005l-.018 -.002l-.034 -.011l-.04 -.01l-.019 -.007l-.015 -.004l-.029 -.013l-.04 -.015l-.021 -.011l-.013 -.005l-.028 -.016l-.036 -.018l-.014 -.01l-.018 -.01l-.038 -.027l-.022 -.014l-.01 -.009l-.02 -.014l-.045 -.041l-.012 -.008l-.024 -.024l-.035 -.039l-.02 -.02l-.007 -.011l-.011 -.012l-.032 -.045l-.02 -.025l-.012 -.019l-.03 -.054l-.017 -.028l-.023 -.054l-.023 -.05a1 1 0 0 1 -.034 -.108l-.01 -.057l-.01 -.053l-.009 -.132v-16a3 3 0 0 1 3 -3zm-2 12h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 0 -2" />
                            </svg>
                          </div>
                          <span>Refunded</span>
                        </div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots cursor-pointer opacity-60">
                          <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <div class="p-6 space-y-[10px] px-4 pt-0 pb-4">
                        <p class="text-2xl font-bold text-highlighted">3,148</p>
                        <div class="flex flex-wrap items-center gap-2">
                          <div class="flex items-center gap-1 text-success">
                            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                            <p class="text-xs font-bold text-highlighted">12.6%</p>
                          </div>
                          <p class="text-muted text-xs font-normal">+48 today</p>
                        </div>
                        <div class="bg-(--ui-text-muted) h-[0.04px] w-full opacity-50" />
                        <div class="flex items-center gap-2">
                          <p class="text-xs font-medium">View Report</p>
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-narrow-right">
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                          </svg>
                        </div>
                      </div>
                    </UCard>
                  </div>
                </div>
                <div class="col-span-6">
                  <!-- Card 5: Revenue -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-4">
                      <div class="flex items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Revenue</div>
                        <USelect v-model="form.year" :items="yearOptions" aria-label="Year" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-[100px]" />
                      </div>
                      <div class="text-muted text-sm">
                        <div class="flex items-center gap-2">
                          <p class="text-2xl font-semibold text-highlighted dark:text-inverted text-highlighted">$14,324</p>
                          <div class="inline-flex items-center border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent text-default hover:bg-(--ui-bg-elevated)/80 rounded-xl bg-success px-[5px] py-[2px] text-[10px] leading-none border-default">
                            <div class="flex items-center gap-[2px] text-success">
                              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                              <p class="text-[8px]">+10%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 px-4">
                      <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[250px] w-full" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-desktop:var(--ui-text-dimmed);--color-mobile:var(--ui-text-muted);width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="532" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 532px; height: 250px;">
                              <div class="chart-legend-wrapper" style="position: absolute; width: 522px; height: auto; left: 5px; bottom: 5px;">
                                <div class="flex items-center justify-center gap-4 pt-3">
                                  <div class="[&amp;&gt;svg]:text-muted flex items-center gap-1.5 [&amp;&gt;svg]:h-3 [&amp;&gt;svg]:w-3">
                                    <div class="h-2 w-2 shrink-0 rounded-[2px]" style="background-color: var(--color-desktop);" />
                                    Desktop
                                  </div>
                                  <div class="[&amp;&gt;svg]:text-muted flex items-center gap-1.5 [&amp;&gt;svg]:h-3 [&amp;&gt;svg]:w-3">
                                    <div class="h-2 w-2 shrink-0 rounded-[2px]" style="background-color: var(--color-mobile);" />
                                    Mobile
                                  </div>
                                </div>
                              </div>
                              <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 532 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100">
                                  <g class="chart-cartesian-grid">
                                    <g class="chart-cartesian-grid-horizontal">
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="522" height="182" x1="5" y1="187" x2="527" y2="187" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="522" height="182" x1="5" y1="141.5" x2="527" y2="141.5" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="522" height="182" x1="5" y1="96" x2="527" y2="96" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="522" height="182" x1="5" y1="50.5" x2="527" y2="50.5" />
                                      <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="522" height="182" x1="5" y1="5" x2="527" y2="5" />
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts1-clip">
                                    <rect x="5" y="5" height="182" width="522" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100" />
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300">
                                  <g class="chart-layer chart-bar" id="recharts-bar-_r_0_">
                                    <g class="chart-layer chart-bar-rectangles">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="26" y="81.2125" width="20" height="105.7875" class="chart-rectangle" d="M 26,85.2125
            A 4,4,0,0,1,30,81.2125
            L 42,81.2125
            A 4,4,0,0,1,46,85.2125
            L 46,183
            A 4,4,0,0,1,42,187
            L 30,187
            A 4,4,0,0,1,26,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="113" y="13.5313" width="20" height="173.4688" class="chart-rectangle" d="M 113,17.5313
            A 4,4,0,0,1,117,13.5313
            L 129,13.5313
            A 4,4,0,0,1,133,17.5313
            L 133,183
            A 4,4,0,0,1,129,187
            L 117,187
            A 4,4,0,0,1,113,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="200" y="52.2063" width="20" height="134.7938" class="chart-rectangle" d="M 200,56.2063
            A 4,4,0,0,1,204,52.2063
            L 216,52.2063
            A 4,4,0,0,1,220,56.2063
            L 220,183
            A 4,4,0,0,1,216,187
            L 204,187
            A 4,4,0,0,1,200,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="287" y="145.4813" width="20" height="41.5188" class="chart-rectangle" d="M 287,149.4813
            A 4,4,0,0,1,291,145.4813
            L 303,145.4813
            A 4,4,0,0,1,307,149.4813
            L 307,183
            A 4,4,0,0,1,303,187
            L 291,187
            A 4,4,0,0,1,287,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="374" y="68.1313" width="20" height="118.8688" class="chart-rectangle" d="M 374,72.1313
            A 4,4,0,0,1,378,68.1313
            L 390,68.1313
            A 4,4,0,0,1,394,72.1313
            L 394,183
            A 4,4,0,0,1,390,187
            L 378,187
            A 4,4,0,0,1,374,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-desktop)" name="undefined" x="461" y="65.2875" width="20" height="121.7125" class="chart-rectangle" d="M 461,69.2875
            A 4,4,0,0,1,465,65.2875
            L 477,65.2875
            A 4,4,0,0,1,481,69.2875
            L 481,183
            A 4,4,0,0,1,477,187
            L 465,187
            A 4,4,0,0,1,461,183 Z" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar" id="recharts-bar-_r_1_">
                                    <g class="chart-layer chart-bar-rectangles">
                                      <g class="chart-layer">
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="50" y="141.5" width="20" height="45.5" class="chart-rectangle" d="M 50,145.5
            A 4,4,0,0,1,54,141.5
            L 66,141.5
            A 4,4,0,0,1,70,145.5
            L 70,183
            A 4,4,0,0,1,66,187
            L 54,187
            A 4,4,0,0,1,50,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="137" y="73.25" width="20" height="113.75" class="chart-rectangle" d="M 137,77.25
            A 4,4,0,0,1,141,73.25
            L 153,73.25
            A 4,4,0,0,1,157,77.25
            L 157,183
            A 4,4,0,0,1,153,187
            L 141,187
            A 4,4,0,0,1,137,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="224" y="118.75" width="20" height="68.25" class="chart-rectangle" d="M 224,122.75
            A 4,4,0,0,1,228,118.75
            L 240,118.75
            A 4,4,0,0,1,244,122.75
            L 244,183
            A 4,4,0,0,1,240,187
            L 228,187
            A 4,4,0,0,1,224,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="311" y="78.9375" width="20" height="108.0625" class="chart-rectangle" d="M 311,82.9375
            A 4,4,0,0,1,315,78.9375
            L 327,78.9375
            A 4,4,0,0,1,331,82.9375
            L 331,183
            A 4,4,0,0,1,327,187
            L 315,187
            A 4,4,0,0,1,311,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="398" y="113.0625" width="20" height="73.9375" class="chart-rectangle" d="M 398,117.0625
            A 4,4,0,0,1,402,113.0625
            L 414,113.0625
            A 4,4,0,0,1,418,117.0625
            L 418,183
            A 4,4,0,0,1,414,187
            L 402,187
            A 4,4,0,0,1,398,183 Z" />
                                          </g>
                                        </g>
                                        <g class="chart-layer chart-bar-rectangle">
                                          <g class="chart-layer chart-inactive-bar">
                                            <path fill="var(--color-mobile)" name="undefined" x="485" y="107.375" width="20" height="79.625" class="chart-rectangle" d="M 485,111.375
            A 4,4,0,0,1,489,107.375
            L 501,107.375
            A 4,4,0,0,1,505,111.375
            L 505,183
            A 4,4,0,0,1,501,187
            L 489,187
            A 4,4,0,0,1,485,183 Z" />
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_400" />
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
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_600" />
                                <g class="chart-zIndex-layer_1000" />
                                <g class="chart-zIndex-layer_1100" />
                                <g class="chart-zIndex-layer_1200" />
                                <g class="chart-zIndex-layer_2000">
                                  <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="48.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="48.5">Jan</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="135.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="135.5">Feb</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="222.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="222.5">Mar</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="309.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="309.5">Apr</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="396.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="396.5">May</tspan>
                                      </text>
                                    </g>
                                    <g class="chart-layer chart-cartesian-axis-tick-label">
                                      <text height="30" width="522" stroke="none" x="483.5" y="203" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                        <tspan x="483.5">Jun</tspan>
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
                  </UCard>
                </div>
                <div class="col-span-6 lg:col-span-8">
                  <!-- Card 6: Recent Activity -->
                  <UCard class="rounded-lg h-full" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-4">
                      <div class="flex items-center justify-between">
                        <div class="leading-none font-semibold tracking-tight">Recent Activity</div>
                        <USelect v-model="form.period" :items="periodOptions" aria-label="Period" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-min" />
                      </div>
                    </div>
                    <div class="p-6 h-[calc(100%_-_68px)] px-2 pt-0">
                      <div class="relative w-full overflow-auto">
                        <!-- Table 1: User / Status / ID / Date / Amount -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #user-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="User" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #user-cell="{ row }">
                            <div class="flex items-center gap-2">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                                <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">{{ row.original.userText5 }}</span>
                              </span>
                              <div class="flex flex-col items-start">
                                <p class="font-bold text-highlighted">{{ row.original.userText8 }}</p>
                                <p class="text-xs opacity-70">{{ row.original.userText10 }}</p>
                              </div>
                            </div>
                          </template>
                          <template #status-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #status-cell="{ row }">
                            <div :class="row.original.statusClass2">{{ row.original.status }}</div>
                          </template>
                          <template #iD-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #iD-cell="{ row }">
                            {{ row.original.iD }}
                          </template>
                          <template #date-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #date-cell="{ row }">
                            {{ row.original.dateText2 }}min ago
                          </template>
                          <template #amount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #amount-cell="{ row }">
                            ${{ row.original.amountText3 }}
                          </template>
                        </UTable>
                      </div>
                    </div>
                  </UCard>
                </div>
                <div class="col-span-6 lg:col-span-4">
                  <!-- Card 7: Total Visitor - Chart -->
                  <UCard class="rounded-lg flex h-full flex-col" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 p-6 items-center pb-0">
                      <div class="leading-none font-semibold tracking-tight">Total Visitor - Chart</div>
                      <div class="text-muted text-sm">January - June 2024</div>
                    </div>
                    <div class="p-6 pt-0 flex-1 pb-0">
                      <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                      <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mx-auto h-[250px] w-full max-w-[250px]" style=";--chart-1:var(--ui-text-dimmed);--chart-2:var(--ui-text-muted);--chart-3:var(--ui-text-muted);--chart-4:var(--ui-text-muted);--chart-5:var(--ui-text-muted)" role="img" aria-label="Analytics chart">
                        <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                        <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;;width:100%;height:250px;min-width:0" role="img" aria-label="Analytics chart">
                          <div style="width:0;height:0;overflow:visible">
                            <div width="250" height="250" class="chart-wrapper" style="position: relative; cursor: default; width: 250px; height: 250px;">
                              <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 250 250" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                <title />
                                <desc />
                                <g class="chart-zIndex-layer_-100" />
                                <g class="chart-zIndex-layer_-50" />
                                <defs>
                                  <clipPath id="recharts2-clip">
                                    <rect x="5" y="5" height="240" width="240" />
                                  </clipPath>
                                </defs>
                                <g class="chart-zIndex-layer_100">
                                  <g class="chart-layer chart-pie">
                                    <g class="chart-layer" />
                                    <text x="125" y="125" text-anchor="middle" dominant-baseline="middle">
                                      <tspan x="125" y="125" class="fill-(--ui-text-highlighted) text-3xl font-bold">1,125</tspan>
                                      <tspan x="125" y="149" class="fill-(--ui-text-muted)">Visitors</tspan>
                                    </text>
                                  </g>
                                </g>
                                <g class="chart-zIndex-layer_200" />
                                <g class="chart-zIndex-layer_300" />
                                <g class="chart-zIndex-layer_400" />
                                <g class="chart-zIndex-layer_500" />
                                <g class="chart-zIndex-layer_600" />
                                <g class="chart-zIndex-layer_1000" />
                                <g class="chart-zIndex-layer_1100" />
                                <g class="chart-zIndex-layer_1200" />
                                <g class="chart-zIndex-layer_2000" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center p-6 pt-0 flex-col gap-2 text-sm">
                      <div class="flex items-center gap-2 leading-none font-medium">
                        Trending up by 5.2% this month 
                        <UIcon name="i-lucide-trending-up" class="h-4 w-4" />
                      </div>
                      <div class="text-muted leading-none">Showing total visitors for the last 6 months</div>
                    </div>
                  </UCard>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
