<!-- Page: /payment-processor/invoice-list-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice List 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "search": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "field": "1",
    "description": "Admin kit integrationTables, charts, shells, and processor workflowsQty 12 / $540.00 / Tax 10%",
    "descriptionText3": "Admin kit integration",
    "descriptionText5": "Tables, charts, shells, and processor workflows",
    "descriptionText8": "12",
    "descriptionText10": "$540.00",
    "qty": "12",
    "rate": "$540.00",
    "amount": "$6,480.00"
  },
  {
    "_id": "2",
    "field": "2",
    "description": "QA implementation passResponsive verification and invoice PDF tuningQty 4 / $480.00 / Tax 10%",
    "descriptionText3": "QA implementation pass",
    "descriptionText5": "Responsive verification and invoice PDF tuning",
    "descriptionText8": "4",
    "descriptionText10": "$480.00",
    "qty": "4",
    "rate": "$480.00",
    "amount": "$1,920.00"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "field",
    "header": "#"
  },
  {
    "accessorKey": "description",
    "header": "Description"
  },
  {
    "accessorKey": "qty",
    "header": "Qty"
  },
  {
    "accessorKey": "rate",
    "header": "Rate"
  },
  {
    "accessorKey": "amount",
    "header": "Amount"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.search || '').toLowerCase()
  const keys = ["field","description","qty","rate","amount"] as const
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

function printPage() { window.print() }
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-list-4">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <section class="grid min-h-0 w-full flex-1 grid-cols-1 lg:grid-cols-[minmax(28rem,0.52fr)_minmax(0,1fr)] xl:grid-cols-[minmax(34rem,1fr)_minmax(0,50rem)] 2xl:grid-cols-[minmax(40rem,1fr)_minmax(0,52rem)]">
            <div class="flex min-h-[28rem] flex-col overflow-hidden">
              <header class="border-b px-4 py-4 sm:px-5 border-default">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 class="text-lg font-semibold tracking-tight text-highlighted">Invoices</h1>
                    <p class="text-muted text-sm">Review, collect, and reconcile customer invoices.</p>
                  </div>
                </div>
                <div class="mt-4 flex flex-col gap-2 sm:flex-row">
                  <div class="relative min-w-0 flex-1">
                    <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.search" type="text" placeholder="Search" name="search" class="flex w-full text-base md:text-sm h-9 rounded-md pr-9 pl-9" :ui="{ base: 'h-full' }" />
                  </div>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 rounded-md" aria-label="New invoice" type="button" @click="openAction(&quot;New invoice&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    New invoice
                  </UButton>
                </div>
              </header>
              <div class="border-b px-4 sm:px-5 border-default">
                <div class="flex gap-6 overflow-x-auto">
                  <UButton color="neutral" variant="outline" class="relative h-11 shrink-0 border-b-2 px-1 text-sm font-medium transition-colors border-(--ui-text-highlighted) text-highlighted" aria-label="All invoices" type="button" @click="openAction(&quot;All invoices&quot;)">
                    All invoices
                  </UButton>
                  <UButton color="neutral" variant="outline" class="relative h-11 shrink-0 border-b-2 px-1 text-sm font-medium transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Open" type="button" @click="openAction(&quot;Open&quot;)">
                    Open
                  </UButton>
                  <UButton color="neutral" variant="outline" class="relative h-11 shrink-0 border-b-2 px-1 text-sm font-medium transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Paid" type="button" @click="openAction(&quot;Paid&quot;)">
                    Paid
                  </UButton>
                  <UButton color="neutral" variant="outline" class="relative h-11 shrink-0 border-b-2 px-1 text-sm font-medium transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Needs attention" type="button" @click="openAction(&quot;Needs attention&quot;)">
                    Needs attention
                  </UButton>
                </div>
              </div>
              <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto pb-3 [&amp;&gt;button:last-of-type]:border-b-0" style="mask-image: linear-gradient(var(--ui-text-highlighted) 0%, var(--ui-text-highlighted) 15%, var(--ui-text-highlighted) 85%, color-mix(in oklab, var(--ui-text-highlighted) 0%, transparent) 100%);">
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Northline StudioINV-7184Pro blocks licenseJun 14, 2026$2,499.00SentDue Jul 12, 2026" type="button" @click="openAction(&quot;Northline StudioINV-7184Pro blocks licenseJun 14, 2026$2,499.00SentDue Jul 12, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Northline Studio</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7184</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Pro blocks license</span>
                      <span>Jun 14, 2026</span>
                      <span class="font-medium tabular-nums">$2,499.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info">
                      <span class="size-1.5 rounded-full bg-info" />
                      Sent
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jul 12, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 bg-[linear-gradient(90deg,color-mix(in_oklch,var(--ui-text-highlighted)_5%,transparent),transparent_72%)] border-default" aria-label="Vela Design Co.INV-7183Admin kit integrationJun 11, 2026$8,400.00PaidDue Jun 28, 2026" type="button" @click="openAction(&quot;Vela Design Co.INV-7183Admin kit integrationJun 11, 2026$8,400.00PaidDue Jun 28, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Vela Design Co.</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7183</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Admin kit integration</span>
                      <span>Jun 11, 2026</span>
                      <span class="font-medium tabular-nums">$8,400.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                      <span class="size-1.5 rounded-full bg-success" />
                      Paid
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 28, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Harborline AppsINV-7182Template migrationJun 1, 2026$3,180.00OverdueDue Jun 12, 2026" type="button" @click="openAction(&quot;Harborline AppsINV-7182Template migrationJun 1, 2026$3,180.00OverdueDue Jun 12, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Harborline Apps</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7182</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Template migration</span>
                      <span>Jun 1, 2026</span>
                      <span class="font-medium tabular-nums">$3,180.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning">
                      <span class="size-1.5 rounded-full bg-warning" />
                      Overdue
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 12, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Pollen InterfaceINV-7181Duplicate component orderMay 29, 2026$899.00VoidDue Jun 8, 2026" type="button" @click="openAction(&quot;Pollen InterfaceINV-7181Duplicate component orderMay 29, 2026$899.00VoidDue Jun 8, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Pollen Interface</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7181</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Duplicate component order</span>
                      <span>May 29, 2026</span>
                      <span class="font-medium tabular-nums">$899.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error">
                      <span class="size-1.5 rounded-full bg-error" />
                      Void
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 8, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Argent LabsINV-7180Figma kit handoffMay 27, 2026$1,950.00DraftDue Jun 24, 2026" type="button" @click="openAction(&quot;Argent LabsINV-7180Figma kit handoffMay 27, 2026$1,950.00DraftDue Jun 24, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Argent Labs</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7180</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Figma kit handoff</span>
                      <span>May 27, 2026</span>
                      <span class="font-medium tabular-nums">$1,950.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-accented bg-default text-default dark:border-default dark:bg-(--ui-bg)/60 dark:text-default">
                      <span class="size-1.5 rounded-full bg-accented" />
                      Draft
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 24, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Cedar UI WorksINV-7179Lifetime access bundleMay 16, 2026$6,800.00PaidDue Jun 3, 2026" type="button" @click="openAction(&quot;Cedar UI WorksINV-7179Lifetime access bundleMay 16, 2026$6,800.00PaidDue Jun 3, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Cedar UI Works</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7179</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Lifetime access bundle</span>
                      <span>May 16, 2026</span>
                      <span class="font-medium tabular-nums">$6,800.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                      <span class="size-1.5 rounded-full bg-success" />
                      Paid
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 3, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="North Pier DigitalINV-7178Private block requestMay 8, 2026$2,750.00OverdueDue May 25, 2026" type="button" @click="openAction(&quot;North Pier DigitalINV-7178Private block requestMay 8, 2026$2,750.00OverdueDue May 25, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">North Pier Digital</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7178</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Private block request</span>
                      <span>May 8, 2026</span>
                      <span class="font-medium tabular-nums">$2,750.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning">
                      <span class="size-1.5 rounded-full bg-warning" />
                      Overdue
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due May 25, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Rune AtelierINV-7177Payment portal polishMay 3, 2026$4,120.00SentDue Jun 20, 2026" type="button" @click="openAction(&quot;Rune AtelierINV-7177Payment portal polishMay 3, 2026$4,120.00SentDue Jun 20, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Rune Atelier</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7177</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Payment portal polish</span>
                      <span>May 3, 2026</span>
                      <span class="font-medium tabular-nums">$4,120.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info">
                      <span class="size-1.5 rounded-full bg-info" />
                      Sent
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due Jun 20, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Prism LabsINV-7176Audit dashboard blocksApr 22, 2026$5,400.00PaidDue May 14, 2026" type="button" @click="openAction(&quot;Prism LabsINV-7176Audit dashboard blocksApr 22, 2026$5,400.00PaidDue May 14, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Prism Labs</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7176</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Audit dashboard blocks</span>
                      <span>Apr 22, 2026</span>
                      <span class="font-medium tabular-nums">$5,400.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                      <span class="size-1.5 rounded-full bg-success" />
                      Paid
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due May 14, 2026</p>
                  </div>
                </UButton>
                <UButton color="neutral" variant="outline" class="group relative grid min-h-[4.75rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 py-3 text-left transition-colors sm:px-5 hover:bg-(--ui-bg-muted)/25 border-default" aria-label="Northstar MediaINV-7175Invoice PDF templatesApr 18, 2026$2,980.00OverdueDue May 2, 2026" type="button" @click="openAction(&quot;Northstar MediaINV-7175Invoice PDF templatesApr 18, 2026$2,980.00OverdueDue May 2, 2026&quot;)">
                  <div class="min-w-0">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate text-sm font-semibold tracking-[-0.01em] text-highlighted">Northstar Media</p>
                      <span class="text-muted hidden text-xs sm:inline">INV-7175</span>
                    </div>
                    <div class="text-muted mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5">
                      <span class="truncate">Invoice PDF templates</span>
                      <span>Apr 18, 2026</span>
                      <span class="font-medium tabular-nums">$2,980.00</span>
                    </div>
                  </div>
                  <div class="flex min-w-28 flex-col items-end gap-2">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 gap-1.5 rounded-md px-2 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning">
                      <span class="size-1.5 rounded-full bg-warning" />
                      Overdue
                    </div>
                    <p class="text-muted text-xs tabular-nums">Due May 2, 2026</p>
                  </div>
                </UButton>
              </div>
              <footer class="grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t px-4 text-sm sm:px-5 border-default">
                <p class="text-muted truncate text-sm tabular-nums">1-10 of 10</p>
                <div class="flex min-w-0 items-center gap-2">
                  <div class="flex items-center overflow-hidden rounded-md border border-default">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none border-default" aria-label="Previous page" type="button" disabled @click="openAction(&quot;Previous page&quot;)">
                      <UIcon name="i-lucide-chevron-left" class="size-4" />
                      <span class="sr-only">Previous page</span>
                    </UButton>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none shadow-none" aria-label="Next page" type="button" disabled @click="openAction(&quot;Next page&quot;)">
                      <UIcon name="i-lucide-chevron-right" class="size-4" />
                      <span class="sr-only">Next page</span>
                    </UButton>
                  </div>
                </div>
              </footer>
            </div>
            <aside class="bg-default flex min-h-0 flex-col overflow-hidden border-t lg:border-t-0 lg:border-l border-default">
              <div class="flex items-center justify-between gap-4 border-b px-4 py-3 sm:px-5 border-default">
                <div class="min-w-0">
                  <p class="text-sm font-semibold text-highlighted">Invoice Details</p>
                  <p class="text-muted truncate text-xs">INV-7183 for Vela Design Co.</p>
                </div>
                <div class="flex items-center rounded-md border border-default">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none first:rounded-l-md last:rounded-r-md last:border-r-0 border-default" aria-label="Send invoice" type="button" @click="openAction(&quot;Send invoice&quot;)">
                    <UIcon name="i-lucide-send" class="size-4" />
                    <span class="sr-only">Send invoice</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none first:rounded-l-md last:rounded-r-md last:border-r-0 border-default" aria-label="Print invoice" type="button" @click="printPage()">
                    <UIcon name="i-lucide-printer" class="size-4" />
                    <span class="sr-only">Print invoice</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none first:rounded-l-md last:rounded-r-md last:border-r-0 border-default" aria-label="Email customer" type="button" @click="openAction(&quot;Email customer&quot;)">
                    <UIcon name="i-lucide-mail" class="size-4" />
                    <span class="sr-only">Email customer</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-none border-r shadow-none first:rounded-l-md last:rounded-r-md last:border-r-0 text-[color-mix(in_oklch,var(--destructive)_82%,var(--ui-text-highlighted))] border-default" aria-label="Delete invoice" type="button" @click="openAction(&quot;Delete invoice&quot;)">
                    <UIcon name="i-lucide-trash-2" class="size-4" />
                    <span class="sr-only">Delete invoice</span>
                  </UButton>
                </div>
              </div>
              <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
                <section class="bg-[color-mix(in_oklch,var(--ui-bg-muted)_55%,var(--ui-bg))] p-4 sm:p-5 xl:p-6">
                  <!-- Card 1: Invoice -->
                  <UCard class="ring-(--ui-border)/80 relative mx-auto max-w-[44rem] overflow-hidden rounded-xl p-5 shadow-[0_18px_45px_-26px_color-mix(in_oklch,var(--ui-text-highlighted)_30%,transparent)] ring-1 sm:p-6 lg:p-7" :ui="{ body: 'contents' }">
                    <div class="pointer-events-none absolute top-24 right-6 hidden rotate-[-10deg] rounded-sm border-2 px-3 py-1 text-base font-black tracking-[0.18em] uppercase opacity-70 shadow-[0_8px_24px_-20px_currentColor] md:block border-success/70 text-success bg-success/70 dark:bg-success/40 dark:text-success dark:border-success/60">Paid</div>
                    <div class="flex items-start justify-between gap-6">
                      <div class="min-w-0">
                        <p class="text-muted text-xs font-semibold tracking-[0.18em] uppercase text-highlighted">Invoice</p>
                        <h3 class="mt-2 text-2xl font-semibold tracking-tight text-highlighted">INV-7183</h3>
                        <p class="text-muted mt-2 text-xs">Issued Jun 11, 2026 / Due Jun 28, 2026</p>
                      </div>
                      <div class="bg-primary text-inverted grid size-10 shrink-0 place-items-center rounded-full">
                        <img alt="Shadcnblocks" width="20" height="20" class="size-5 object-contain brightness-0 invert dark:invert-0" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                      </div>
                    </div>
                    <div class="mt-8 grid gap-5 border-y py-5 sm:grid-cols-2 border-default">
                      <div class="min-w-0">
                        <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">From</p>
                        <div class="mt-2 space-y-1 text-xs leading-5 font-medium">
                          <p class="break-words">Shadcnblocks.com</p>
                          <p class="break-words">Level 12, 45 Clarence Street</p>
                          <p class="break-words">Sydney NSW 2000</p>
                        </div>
                      </div>
                      <div class="min-w-0">
                        <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Bill to</p>
                        <div class="mt-2 space-y-1 text-xs leading-5 font-medium">
                          <p class="break-words">Vela Design Co.</p>
                          <p class="break-words">finance@veladesign.co</p>
                          <p class="break-words">88 Minna Street, San Francisco, CA 94105</p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 grid gap-3 sm:grid-cols-3">
                      <div class="rounded-lg border p-3 border-default">
                        <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Method</p>
                        <p class="mt-2 truncate text-sm font-semibold text-highlighted">Visa ending 4928</p>
                      </div>
                      <div class="rounded-lg border p-3 border-default">
                        <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Reference</p>
                        <p class="mt-2 text-sm font-semibold tabular-nums text-highlighted">VD-2026-118</p>
                      </div>
                      <div class="rounded-lg border p-3 border-default">
                        <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Due</p>
                        <p class="mt-2 text-sm font-semibold tabular-nums text-highlighted">$0.00</p>
                      </div>
                    </div>
                    <div class="mt-7">
                      <div class="flex items-center gap-3">
                        <p class="shrink-0 text-sm font-semibold text-highlighted">Work order VD-2026-118</p>
                        <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      </div>
                      <div class="mt-3 overflow-hidden rounded-lg border border-default">
                        <!-- Table 1: # / Description / Qty / Rate / Amount -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full text-left text-xs" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #field-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="#" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #field-cell="{ row }">
                            {{ row.original.field }}
                          </template>
                          <template #description-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Description" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #description-cell="{ row }">
                            <p class="truncate font-semibold text-highlighted">{{ row.original.descriptionText3 }}</p>
                            <p class="text-muted mt-1 line-clamp-2 leading-4">{{ row.original.descriptionText5 }}</p>
                            <p class="text-muted mt-1 text-[11px] tabular-nums sm:hidden">Qty {{ row.original.descriptionText8 }} / {{ row.original.descriptionText10 }} / Tax 10%</p>
                          </template>
                          <template #qty-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Qty" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #qty-cell="{ row }">
                            {{ row.original.qty }}
                          </template>
                          <template #rate-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Rate" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #rate-cell="{ row }">
                            {{ row.original.rate }}
                          </template>
                          <template #amount-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #amount-cell="{ row }">
                            {{ row.original.amount }}
                          </template>
                        </UTable>
                      </div>
                    </div>
                    <dl class="mt-5 ml-auto w-full max-w-xs space-y-2 text-sm">
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Subtotal</dt>
                        <dd class="font-semibold tabular-nums">$7,636.36</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Tax</dt>
                        <dd class="font-semibold tabular-nums">$763.64</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4 text-highlighted border-t pt-3 border-default">
                        <dt class="text-muted">Total</dt>
                        <dd class="font-semibold tabular-nums">$8,400.00</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Paid</dt>
                        <dd class="font-semibold tabular-nums">$8,400.00</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4 text-primary">
                        <dt class="text-muted">Amount due</dt>
                        <dd class="font-semibold tabular-nums">$0.00</dd>
                      </div>
                    </dl>
                    <p class="text-muted mt-8 border-t pt-5 text-xs leading-5 border-default">For payment questions, receipt corrections, or remittance advice, contact billing@shadcnblocks.com.</p>
                  </UCard>
                </section>
              </div>
            </aside>
          </section>
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
