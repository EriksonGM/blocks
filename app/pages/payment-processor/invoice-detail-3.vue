<!-- Page: /payment-processor/invoice-detail-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Invoice Detail 3 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "description": "Admin workspace license",
    "qty": "4",
    "rate": "$399.00",
    "total": "$1,596.00"
  },
  {
    "_id": "2",
    "description": "Payment screens implementation",
    "qty": "8",
    "rate": "$240.00",
    "total": "$1,920.00"
  },
  {
    "_id": "3",
    "description": "Design handoff and QA notes",
    "qty": "3",
    "rate": "$315.00",
    "total": "$945.00"
  },
  {
    "_id": "4",
    "description": "Implementation support",
    "qty": "2",
    "rate": "$380.00",
    "total": "$760.00"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
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
    "accessorKey": "total",
    "header": "Total"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["description","qty","rate","total"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/invoice-detail-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted h-full min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated py-2 text-muted hover:text-highlighted h-8 px-0" aria-label="Back" type="button" @click="navigateTo(&quot;/payment-processor/transactions&quot;)">
                  <UIcon name="i-lucide-arrow-left" class="size-4" />
                  Back
                </UButton>
                <span class="text-muted font-medium">Invoice advance</span>
                <span class="font-semibold">SB-2026-084</span>
                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border border-success/20 bg-success/10 px-2 text-[11px] font-medium text-success dark:border-success/20 dark:bg-success/30 dark:text-success">
                  <UIcon name="i-lucide-circle-check" class="size-3.5" />
                  Ready to request
                </UBadge>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Edit" type="button" @click="openAction(&quot;Edit&quot;)">
                  <UIcon name="i-lucide-pencil" class="size-4" />
                  Edit
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Request advance" type="button" @click="openAction(&quot;Request advance&quot;)">
                  <UIcon name="i-lucide-send" class="size-4" />
                  Request advance
                </UButton>
              </div>
            </div>
            <div class="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
              <section class="border-(--ui-border)/80 rounded-xl border bg-[color-mix(in_oklch,var(--ui-bg-muted)_55%,var(--ui-bg))] p-4 sm:p-6 border-default">
                <div class="mb-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p class="text-highlighted text-sm font-semibold text-highlighted">Invoice SB-2026-084</p>
                    <p class="text-muted mt-1 text-sm">Northstar Studio, due Jun 26, 2026</p>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated h-8 px-3 text-xs text-primary hover:text-primary rounded-md" aria-label="DDoowwnnllooaaddIInnvvooiiccee" type="button" @click="openAction(&quot;DDoowwnnllooaaddIInnvvooiiccee&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    <span aria-label="Download Invoice" class="slot-text">
                      <span class="char-slot">
                        <span class="char-sizer">D</span>
                        <span class="char-face">D</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">o</span>
                        <span class="char-face">o</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">w</span>
                        <span class="char-face">w</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">n</span>
                        <span class="char-face">n</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">l</span>
                        <span class="char-face">l</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">o</span>
                        <span class="char-face">o</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">a</span>
                        <span class="char-face">a</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">d</span>
                        <span class="char-face">d</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer" />
                        <span class="char-face" />
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">I</span>
                        <span class="char-face">I</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">n</span>
                        <span class="char-face">n</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">v</span>
                        <span class="char-face">v</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">o</span>
                        <span class="char-face">o</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">i</span>
                        <span class="char-face">i</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">c</span>
                        <span class="char-face">c</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">e</span>
                        <span class="char-face">e</span>
                      </span>
                    </span>
                  </UButton>
                </div>
                <!-- Card 1: Invoice -->
                <UCard class="ring-(--ui-border)/80 min-h-[42rem] rounded-xl p-5 shadow-[0_14px_42px_-30px_color-mix(in_oklch,var(--ui-text-highlighted)_30%,transparent)] ring-1 sm:p-6 lg:p-7" :ui="{ body: 'contents' }">
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h3 class="text-3xl font-semibold tracking-tight sm:text-4xl text-highlighted">Invoice</h3>
                      <div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <span class="text-muted font-medium">Invoice no.</span>
                        <span class="font-semibold">SB-2026-084</span>
                      </div>
                    </div>
                    <div class="bg-primary text-inverted grid size-9 shrink-0 place-items-center rounded-full">
                      <img alt="Shadcnblocks" width="20" height="20" class="size-5 object-contain brightness-0 invert dark:invert-0" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                    </div>
                  </div>
                  <div class="border-default mt-8 overflow-hidden rounded-lg border">
                    <div class="grid md:grid-cols-2">
                      <div class="p-5">
                        <p class="text-muted font-medium">Customer</p>
                        <div class="mt-2 space-y-1 text-sm font-semibold">
                          <p>Northstar Studio</p>
                          <p>accounts@northstar.studio</p>
                        </div>
                      </div>
                      <div class="p-5 border-default border-t md:border-t-0 md:border-l">
                        <p class="text-muted font-medium">Payment due</p>
                        <div class="mt-2 space-y-1 text-sm font-semibold">
                          <p>Jun 26, 2026</p>
                        </div>
                      </div>
                    </div>
                    <div class="p-5 border-default border-t">
                      <p class="text-muted font-medium">Address</p>
                      <div class="mt-2 space-y-1 text-sm font-semibold">
                        <p>18 Collins Street, Melbourne VIC 3000, Australia</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-default mt-7 overflow-hidden rounded-lg border">
                    <div class="overflow-x-auto">
                      <!-- Table 1: Description / Qty / Rate / Total -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full min-w-[34rem] text-left text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #description-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Description" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #description-cell="{ row }">
                          {{ row.original.description }}
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
                        <template #total-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Total" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #total-cell="{ row }">
                          {{ row.original.total }}
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="mt-6 flex justify-end">
                    <dl class="w-full max-w-xs space-y-3 px-1 py-2 text-sm">
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Eligible subtotal</dt>
                        <dd class="font-semibold tabular-nums">$5,221.00</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Service fee</dt>
                        <dd class="font-semibold tabular-nums">$156.63</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Held in reserve</dt>
                        <dd class="font-semibold tabular-nums">$939.78</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4 text-highlighted pt-1 text-base font-semibold">
                        <dt class="text-muted">Available today</dt>
                        <dd class="font-semibold tabular-nums">$4,124.59</dd>
                      </div>
                    </dl>
                  </div>
                </UCard>
              </section>
              <aside class="space-y-7 xl:self-start">
                <section class="space-y-4">
                  <div class="flex items-center gap-3">
                    <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Documents</span>
                    <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                    <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">2 files</span>
                  </div>
                  <div>
                    <div class="flex items-center justify-between gap-3 py-3 text-sm">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-paperclip" class="text-muted size-4 shrink-0" />
                        <div class="min-w-0">
                          <p class="truncate text-[13px] font-medium">Signed invoice - Northstar Studio.pdf</p>
                          <p class="text-muted mt-1 text-xs">3.29 MB</p>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-9 w-9 text-[color-mix(in_oklch,var(--destructive)_82%,var(--ui-text-highlighted))] hover:text-[color-mix(in_oklch,var(--destructive)_90%,var(--ui-text-highlighted))]" aria-label="Remove Signed invoice - Northstar Studio.pdf" type="button" @click="openAction(&quot;Remove Signed invoice - Northstar Studio.pdf&quot;)">
                        <UIcon name="i-lucide-trash-2" class="size-4" />
                        <span class="sr-only">Remove Signed invoice - Northstar Studio.pdf</span>
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-3 py-3 text-sm">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-paperclip" class="text-muted size-4 shrink-0" />
                        <div class="min-w-0">
                          <p class="truncate text-[13px] font-medium">Purchase order - NS-4826.pdf</p>
                          <p class="text-muted mt-1 text-xs">1.84 MB</p>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-9 w-9 text-[color-mix(in_oklch,var(--destructive)_82%,var(--ui-text-highlighted))] hover:text-[color-mix(in_oklch,var(--destructive)_90%,var(--ui-text-highlighted))]" aria-label="Remove Purchase order - NS-4826.pdf" type="button" @click="openAction(&quot;Remove Purchase order - NS-4826.pdf&quot;)">
                        <UIcon name="i-lucide-trash-2" class="size-4" />
                        <span class="sr-only">Remove Purchase order - NS-4826.pdf</span>
                      </UButton>
                    </div>
                  </div>
                </section>
                <section>
                  <dl class="space-y-4">
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Advance goes to</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="">Shadcnblocks Treasury</p>
                        <p class="">Account ending 7740</p>
                      </dd>
                    </div>
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Payment terms</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="text-(--ui-text-highlighted)/70 tabular-nums">Due 30 days after issue</p>
                      </dd>
                    </div>
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Advance offer</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="text-(--ui-text-highlighted)/70 tabular-nums">82% of eligible invoice value</p>
                      </dd>
                    </div>
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Fees begin</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="text-(--ui-text-highlighted)/70 tabular-nums">Jun 18, 2026</p>
                      </dd>
                    </div>
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Customer ref</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="text-(--ui-text-highlighted)/70 tabular-nums">NS-4826-PRO</p>
                      </dd>
                    </div>
                    <div class="space-y-3 py-3">
                      <dt>
                        <div class="flex items-center gap-3">
                          <span class="text-highlighted shrink-0 text-[11px] font-semibold tracking-[0.18em] uppercase">Note</span>
                          <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                        </div>
                      </dt>
                      <dd class="text-muted space-y-1.5 text-[13px] leading-6 font-medium tracking-[0.01em]">
                        <p class="">Advance against the signed Northstar Studio invoice.</p>
                      </dd>
                    </div>
                  </dl>
                </section>
              </aside>
            </div>
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
