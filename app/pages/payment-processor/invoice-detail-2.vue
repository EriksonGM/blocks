<!-- Page: /payment-processor/invoice-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice Detail 2 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "workstream": "Elite lifetime workspaceLifetime access to Shadcnblocks pro blocks and components",
    "workstreamText3": "Elite lifetime workspace",
    "workstreamText5": "Lifetime access to Shadcnblocks pro blocks and components",
    "seats": "2",
    "rate": "$399.00",
    "tax": "10%",
    "credit": "0%",
    "total": "$798.00"
  },
  {
    "_id": "2",
    "workstream": "Admin kit implementationDashboard shells, tables, charts, and payment processor views",
    "workstreamText3": "Admin kit implementation",
    "workstreamText5": "Dashboard shells, tables, charts, and payment processor views",
    "seats": "4",
    "rate": "$540.00",
    "tax": "10%",
    "credit": "5%",
    "total": "$2,052.00"
  },
  {
    "_id": "3",
    "workstream": "Figma kit handoffDesign-system files, block references, and product team notes",
    "workstreamText3": "Figma kit handoff",
    "workstreamText5": "Design-system files, block references, and product team notes",
    "seats": "3",
    "rate": "$330.00",
    "tax": "10%",
    "credit": "0%",
    "total": "$990.00"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "workstream",
    "header": "Workstream"
  },
  {
    "accessorKey": "seats",
    "header": "Seats"
  },
  {
    "accessorKey": "rate",
    "header": "Rate"
  },
  {
    "accessorKey": "tax",
    "header": "Tax"
  },
  {
    "accessorKey": "credit",
    "header": "Credit"
  },
  {
    "accessorKey": "total",
    "header": "Total"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["workstream","seats","rate","tax","credit","total"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-detail-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted h-full min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <header class="border-(--ui-border)/80 bg-default border-b px-4 py-6 sm:px-6 lg:px-8 border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div class="flex min-w-0 items-start gap-4">
                <div class="min-w-0">
                  <nav class="text-muted flex items-center gap-2 text-xs/6">
                    <span class="font-medium">Invoices</span>
                    <span class="text-(--ui-text-highlighted)/80 font-medium">#SB-2026-084</span>
                  </nav>
                  <div class="mt-1 flex min-w-0 flex-wrap items-center gap-3">
                    <h1 class="truncate text-xl font-semibold tracking-tight text-highlighted">Invoice #SB-2026-084</h1>
                    <span class="rounded-full bg-[color-mix(in_oklch,var(--destructive)_10%,var(--ui-bg))] px-2.5 py-0.5 text-xs font-semibold text-[color-mix(in_oklch,var(--destructive)_82%,var(--ui-text-highlighted))] ring-1 ring-[color-mix(in_oklch,var(--destructive)_20%,transparent)] ring-inset">Overdue</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Mark as Paid" type="button" @click="openAction(&quot;Mark as Paid&quot;)">
                  <UIcon name="i-lucide-square-check" class="size-4" />
                  Mark as Paid
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 text-muted h-9 rounded-md" aria-label="Edit" type="button" disabled @click="openAction(&quot;Edit&quot;)">
                  <UIcon name="i-lucide-pen-line" class="size-4" />
                  Edit
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm py-2 bg-primary text-inverted hover:bg-primary/90 h-9 rounded-md px-5" aria-label="Send" type="button" @click="openAction(&quot;Send&quot;)">
                  <UIcon name="i-lucide-send" class="size-4" />
                  Send
                </UButton>
              </div>
            </div>
          </header>
          <div class="grid min-h-[calc(100dvh-5rem)] grid-cols-1 xl:grid-cols-[minmax(26rem,0.82fr)_minmax(34rem,1fr)] xl:gap-10 2xl:gap-14">
            <section class="bg-default min-w-0 px-4 py-5 sm:px-6 xl:px-7">
              <div class="border-default flex gap-7 border-b">
                <UButton color="neutral" variant="outline" class="flex h-9 items-center gap-2 border-b-2 px-1 text-xs font-semibold transition-colors border-primary text-highlighted" aria-label="Summary" type="button" @click="openAction(&quot;Summary&quot;)">
                  <UIcon name="i-lucide-file-text" class="size-4 sm:hidden" />
                  Summary
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-9 items-center gap-2 border-b-2 px-1 text-xs font-semibold transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Timeline" type="button" @click="openAction(&quot;Timeline&quot;)">
                  <UIcon name="i-lucide-history" class="size-4 sm:hidden" />
                  Timeline
                </UButton>
                <UButton color="neutral" variant="outline" class="flex h-9 items-center gap-2 border-b-2 px-1 text-xs font-semibold transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Notes" type="button" @click="openAction(&quot;Notes&quot;)">
                  <UIcon name="i-lucide-message-square-text" class="size-4 sm:hidden" />
                  Notes
                </UButton>
              </div>
              <div class="mt-6">
                <dl class="mt-4 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3">
                  <div>
                    <dt class="text-muted text-xs">Contract value</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums text-primary">$4,116.64</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Balance to collect</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums">$1,438.64</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Tax reserved</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums">$374.24</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Collection target</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums">06/10/2026</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Last receipt</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums">05/31/2026</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Aging window</dt>
                    <dd class="mt-2 text-[15px] font-semibold tracking-tight tabular-nums">7 days</dd>
                  </div>
                </dl>
              </div>
              <section class="mt-10">
                <div class="mb-3 flex items-center justify-between gap-4">
                  <h2 class="text-base font-semibold tracking-tight text-highlighted">Collections</h2>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default shadow-xs hover:bg-elevated border-primary/45 text-primary hover:text-primary h-8 rounded-sm px-3 text-xs" aria-label="Link receipt" type="button" @click="openAction(&quot;Link receipt&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Link receipt
                  </UButton>
                </div>
                <div class="divide-default border-default divide-y border-t">
                  <div class="grid grid-cols-[6.25rem_1px_minmax(0,1fr)] gap-4 py-4">
                    <div>
                      <p class="text-[13px] font-semibold tabular-nums text-highlighted">$1,490.00</p>
                      <p class="text-muted mt-1 text-xs">Paid on 27 May</p>
                    </div>
                    <div class="bg-(--ui-border) my-1" />
                    <div class="min-w-0">
                      <p class="text-[13px] font-semibold text-[color-mix(in_oklch,var(--ui-primary)_78%,var(--ui-text-highlighted))] text-highlighted">Processor match</p>
                      <p class="text-muted mt-1 text-[11px]">Stripe settlement SB-4826</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-[6.25rem_1px_minmax(0,1fr)] gap-4 py-4">
                    <div>
                      <p class="text-[13px] font-semibold tabular-nums text-highlighted">$1,188.00</p>
                      <p class="text-muted mt-1 text-xs">Paid on 31 May</p>
                    </div>
                    <div class="bg-(--ui-border) my-1" />
                    <div class="min-w-0">
                      <p class="text-[13px] font-semibold text-highlighted">Ops reconciliation</p>
                      <p class="text-muted mt-1 text-[11px]">Bank transfer memo NS-4826</p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="mt-10">
                <div class="mb-3 flex items-center justify-between gap-4">
                  <h2 class="text-base font-semibold tracking-tight text-highlighted">Balance adjustments</h2>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-default shadow-xs hover:bg-elevated border-primary/45 text-primary hover:text-primary h-8 rounded-sm px-3 text-xs" aria-label="Add adjustment" type="button" @click="openAction(&quot;Add adjustment&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add adjustment
                  </UButton>
                </div>
                <div class="border-default grid grid-cols-[minmax(0,1fr)_auto] gap-5 border-t py-4">
                  <div>
                    <p class="text-[13px] font-semibold text-highlighted">CM-SB-2026-014</p>
                    <p class="text-muted mt-1 text-xs">Issued on : 04/06/2026</p>
                  </div>
                  <p class="text-[13px] font-semibold tabular-nums text-highlighted">$97.60</p>
                </div>
              </section>
            </section>
            <aside class="mt-14 bg-[color-mix(in_oklch,var(--ui-bg-muted)_55%,var(--ui-bg))] px-4 pt-8 pb-6 sm:px-6 lg:px-8">
              <!-- Card 1: Invoice -->
              <UCard class="ring-(--ui-border)/80 mx-auto max-w-[45rem] rounded-lg p-6 shadow-[0_18px_45px_-22px_color-mix(in_oklch,var(--ui-text-highlighted)_28%,transparent)] ring-1" :ui="{ body: 'contents' }">
                <div class="flex items-start justify-between gap-4">
                  <div class="bg-primary text-inverted grid size-9 place-items-center rounded-full">
                    <img alt="Shadcnblocks" width="20" height="20" class="size-5 object-contain brightness-0 invert dark:invert-0" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                  </div>
                  <div class="text-right">
                    <h2 class="text-muted text-xl font-semibold text-highlighted">Invoice</h2>
                    <p class="mt-2 text-xs font-bold text-highlighted">Invoice No: SB-2026-084</p>
                    <p class="text-muted text-[11px]">Date Issued : 27/05/2026</p>
                    <p class="text-muted text-[11px]">Due Date : 27/06/2026</p>
                    <p class="text-muted text-[11px]">Ref : NS-4826</p>
                  </div>
                </div>
                <div class="mt-5">
                  <h3 class="text-base font-semibold text-highlighted">Shadcnblocks.com</h3>
                  <p class="mt-2 text-[11px] leading-4 font-semibold uppercase text-highlighted">
                    Level 12, 45 Clarence Street
                    <br />
                    Sydney NSW 2000
                  </p>
                </div>
                <div class="mt-6 grid grid-cols-2 gap-8 text-[11px] leading-4">
                  <div class="min-w-0">
                    <p class="text-primary font-semibold text-highlighted">Customer</p>
                    <p class="mt-2 font-bold uppercase text-highlighted">NORTHSTAR STUDIO</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">VAT :AU 746128932</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">18 Collins Street</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">Melbourne VIC 3000</p>
                  </div>
                  <div class="min-w-0">
                    <p class="text-primary font-semibold text-highlighted">Deliver To</p>
                    <p class="mt-2 font-bold uppercase text-highlighted">OLIVIA BENNETT</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">Product Operations</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">18 Collins Street</p>
                    <p class="text-muted font-semibold break-words uppercase text-highlighted">Melbourne VIC 3000</p>
                  </div>
                </div>
                <div class="border-default mt-7 overflow-hidden rounded-sm border">
                  <!-- Table 1: Workstream / Seats / Rate / Tax / Credit / Total -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full table-fixed text-left text-[10px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #workstream-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Workstream" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #workstream-cell="{ row }">
                      <p class="font-bold tracking-wide text-highlighted">{{ row.original.workstreamText3 }}</p>
                      <p class="text-muted mt-1 leading-[1.25] font-medium">{{ row.original.workstreamText5 }}</p>
                    </template>
                    <template #seats-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Seats" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #seats-cell="{ row }">
                      {{ row.original.seats }}
                    </template>
                    <template #rate-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Rate" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #rate-cell="{ row }">
                      {{ row.original.rate }}
                    </template>
                    <template #tax-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Tax" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #tax-cell="{ row }">
                      {{ row.original.tax }}
                    </template>
                    <template #credit-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Credit" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #credit-cell="{ row }">
                      {{ row.original.credit }}
                    </template>
                    <template #total-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #total-cell="{ row }">
                      {{ row.original.total }}
                    </template>
                  </UTable>
                </div>
                <dl class="mt-4 ml-auto w-52 space-y-1 text-right text-[11px] font-semibold">
                  <div class="flex justify-between gap-3">
                    <dt>Subtotal :</dt>
                    <dd>$3,840.00</dd>
                  </div>
                  <div class="flex justify-between gap-3">
                    <dt>Courtesy credit :</dt>
                    <dd>-$97.60</dd>
                  </div>
                  <div class="flex justify-between gap-3">
                    <dt>Total VAT :</dt>
                    <dd>$374.24</dd>
                  </div>
                  <div class="flex justify-between gap-3">
                    <dt>Total :</dt>
                    <dd>$4,116.64</dd>
                  </div>
                  <div class="flex justify-between gap-3">
                    <dt>Paid :</dt>
                    <dd>$2,678.00</dd>
                  </div>
                  <div class="flex justify-between gap-3 text-primary">
                    <dt>Open Due :</dt>
                    <dd>$1,438.64</dd>
                  </div>
                </dl>
                <div class="text-muted mt-14 flex items-start gap-2 text-[10px] leading-4">
                  <p>
                    Shadcnblocks.com, ABN : 74 612 893 204
                    <br />
                    VAT: AU 746 128 932, Activity Type: digital design systems
                    <br />
                    billing@shadcnblocks.com
                  </p>
                </div>
              </UCard>
            </aside>
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
