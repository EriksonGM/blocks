<!-- Page: /payment-processor/create-invoice-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Create Invoice 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "invoiceClient": "Olivia Bennett · accounts@northstar.studio",
  "invoiceNumber": "2026-084",
  "invoiceProject": "Northstar Studio workspace rollout",
  "invoiceCurrency": "United States Dollar (USD) $",
  "items": "Admin workspace license",
  "items2": 4,
  "items3": 399,
  "items4": "Payment screens implementation",
  "items5": 8,
  "items6": 240,
  "items7": "Design handoff and QA notes",
  "items8": 3,
  "items9": 315,
  "items10": "Implementation support",
  "items11": 2,
  "items12": 380
})

const invoiceClientOptions = [
  "Olivia Bennett · accounts@northstar.studio",
  "Maya Patel · billing@northstar.studio",
  "Rohan Mehta · ops@northstar.studio"
]

const invoiceProjectOptions = [
  "Northstar Studio workspace rollout",
  "Payment screens implementation",
  "Admin kit integration"
]

const invoiceCurrencyOptions = [
  "United States Dollar (USD) $",
  "Euro (EUR) €",
  "Indian Rupee (INR) ₹"
]

const itemsOptions = [
  "Admin workspace license",
  "Payment screens implementation",
  "Design handoff and QA notes",
  "Implementation support",
  "Figma kit handoff",
  "Template implementation pack"
]

const items4Options = [
  "Admin workspace license",
  "Payment screens implementation",
  "Design handoff and QA notes",
  "Implementation support",
  "Figma kit handoff",
  "Template implementation pack"
]

const items7Options = [
  "Admin workspace license",
  "Payment screens implementation",
  "Design handoff and QA notes",
  "Implementation support",
  "Figma kit handoff",
  "Template implementation pack"
]

const items10Options = [
  "Admin workspace license",
  "Payment screens implementation",
  "Design handoff and QA notes",
  "Implementation support",
  "Figma kit handoff",
  "Template implementation pack"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "service": "Admin workspace licenseSeats for the Shadcnblocks admin workspace",
    "serviceText3": "Admin workspace license",
    "serviceText5": "Seats for the Shadcnblocks admin workspace",
    "qty": "4",
    "rate": "$399.00",
    "amount": "$1,596.00"
  },
  {
    "_id": "2",
    "service": "Payment screens implementationInvoice, subscription, and payment processor UI screens",
    "serviceText3": "Payment screens implementation",
    "serviceText5": "Invoice, subscription, and payment processor UI screens",
    "qty": "8",
    "rate": "$240.00",
    "amount": "$1,920.00"
  },
  {
    "_id": "3",
    "service": "Design handoff and QA notesDesign-system files, implementation notes, and QA pass",
    "serviceText3": "Design handoff and QA notes",
    "serviceText5": "Design-system files, implementation notes, and QA pass",
    "qty": "3",
    "rate": "$315.00",
    "amount": "$945.00"
  },
  {
    "_id": "4",
    "service": "Implementation supportPost-handoff engineering support and billing workflow polish",
    "serviceText3": "Implementation support",
    "serviceText5": "Post-handoff engineering support and billing workflow polish",
    "qty": "2",
    "rate": "$380.00",
    "amount": "$760.00"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "service",
    "header": "Service"
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
  const query = ''
  const keys = ["service","qty","rate","amount"] as const
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
  const rows = table1FilteredRows.value.map(row => ["service","qty","rate","amount"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-create-invoice-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/create-invoice-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="grid min-h-0 flex-1 lg:grid-cols-2">
            <section class="bg-default min-h-0 overflow-y-auto pb-28 sm:pb-24">
              <div class="border-b border-default">
                <div class="flex items-center justify-between gap-3 px-5 lg:px-8">
                  <nav aria-label="Invoice editor sections" class="flex min-w-0 items-center gap-6 overflow-x-auto">
                    <UButton color="neutral" variant="outline" class="inline-flex h-12 shrink-0 items-center border-b-2 text-sm font-semibold transition-colors border-(--ui-text-highlighted) text-highlighted" aria-label="Invoice Details" type="button" @click="openAction(&quot;Invoice Details&quot;)">
                      Invoice Details
                    </UButton>
                    <UButton color="neutral" variant="outline" class="text-muted inline-flex h-12 shrink-0 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-highlighted" aria-label="Setup" type="button" @click="openAction(&quot;Setup&quot;)">
                      Setup
                    </UButton>
                  </nav>
                </div>
              </div>
              <div class="flex flex-col gap-7 px-5 py-6 lg:px-8">
                <section class="flex flex-col gap-4">
                  <h2 class="text-xl font-semibold tracking-tight text-highlighted">Invoice details</h2>
                  <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-4">
                    <UFormField label="Bill to (Client)" name="invoiceClient" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                      <USelect v-model="form.invoiceClient" :items="invoiceClientOptions" aria-label="Olivia Bennett · accounts@northstar.studio" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11" />
                    </UFormField>
                    <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-4 md:grid md:grid-cols-3">
                      <UFormField label="Invoice number" name="invoiceNumber" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                            <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">SB-</span>
                          </div>
                          <UInput v-model="form.invoiceNumber" type="text" data-slot="input-group-control" name="invoiceNumber" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                        </div>
                      </UFormField>
                      <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="invoice-issued-date">Issued date</label>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-10 w-full justify-start gap-2 text-left font-normal" aria-label="May 27, 2026" type="button" @click="openAction(&quot;May 27, 2026&quot;)">
                          <UIcon name="i-lucide-calendar" class="size-4" />
                          May 27, 2026
                        </UButton>
                      </div>
                      <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="invoice-due-date">Due date</label>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-10 w-full justify-start gap-2 text-left font-normal" aria-label="June 26, 2026" type="button" @click="openAction(&quot;June 26, 2026&quot;)">
                          <UIcon name="i-lucide-calendar" class="size-4" />
                          June 26, 2026
                        </UButton>
                      </div>
                    </div>
                    <UFormField label="Project" name="invoiceProject" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                      <USelect v-model="form.invoiceProject" :items="invoiceProjectOptions" aria-label="Northstar Studio workspace rollout" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                    </UFormField>
                  </div>
                </section>
                <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                <section class="flex flex-col gap-4">
                  <h2 class="text-xl font-semibold tracking-tight text-highlighted">Invoice Items</h2>
                  <UFormField label="Currency" name="invoiceCurrency" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                    <USelect v-model="form.invoiceCurrency" :items="invoiceCurrencyOptions" aria-label="United States Dollar (USD) $" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" />
                  </UFormField>
                  <UFormField label="Items" name="items" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                    <div class="overflow-hidden rounded-xl border border-default">
                      <div class="text-muted grid grid-cols-[32px_minmax(120px,1.4fr)_56px_88px_84px_36px] items-center gap-2 border-b px-3 py-2.5 text-sm font-semibold border-default">
                        <div />
                        <div>Item Name</div>
                        <div class="text-center">Qty</div>
                        <div>Rate</div>
                        <div class="text-right">Total</div>
                        <div />
                      </div>
                      <div class="divide-y">
                        <div class="grid grid-cols-[32px_minmax(120px,1.4fr)_56px_88px_84px_36px] items-center gap-2 px-3 py-2.5">
                          <UButton color="neutral" variant="soft" class="text-muted hover:bg-muted grid size-8 cursor-grab place-items-center rounded-md active:cursor-grabbing" aria-label="Reorder item" type="button" @click="openAction(&quot;Reorder item&quot;)">
                            <UIcon name="i-lucide-grip-vertical" class="size-4" />
                          </UButton>
                          <USelect v-model="form.items" :items="itemsOptions" aria-label="Item name" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-0" />
                          <UInput v-model.number="form.items2" type="number" aria-label="Quantity" min="0" name="items2" class="flex h-9 w-full rounded-md text-base md:text-sm text-center" :ui="{ base: 'h-full' }" />
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0">
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">$</span>
                            </div>
                            <UInput v-model.number="form.items3" type="number" data-slot="input-group-control" aria-label="Rate" min="0" name="items3" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="min-w-0 text-right text-sm font-semibold tabular-nums">$1,596.00</div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 justify-self-end" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid grid-cols-[32px_minmax(120px,1.4fr)_56px_88px_84px_36px] items-center gap-2 px-3 py-2.5">
                          <UButton color="neutral" variant="soft" class="text-muted hover:bg-muted grid size-8 cursor-grab place-items-center rounded-md active:cursor-grabbing" aria-label="Reorder item" type="button" @click="openAction(&quot;Reorder item&quot;)">
                            <UIcon name="i-lucide-grip-vertical" class="size-4" />
                          </UButton>
                          <USelect v-model="form.items4" :items="items4Options" aria-label="Item name" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-0" />
                          <UInput v-model.number="form.items5" type="number" aria-label="Quantity" min="0" name="items5" class="flex h-9 w-full rounded-md text-base md:text-sm text-center" :ui="{ base: 'h-full' }" />
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0">
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">$</span>
                            </div>
                            <UInput v-model.number="form.items6" type="number" data-slot="input-group-control" aria-label="Rate" min="0" name="items6" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="min-w-0 text-right text-sm font-semibold tabular-nums">$1,920.00</div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 justify-self-end" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid grid-cols-[32px_minmax(120px,1.4fr)_56px_88px_84px_36px] items-center gap-2 px-3 py-2.5">
                          <UButton color="neutral" variant="soft" class="text-muted hover:bg-muted grid size-8 cursor-grab place-items-center rounded-md active:cursor-grabbing" aria-label="Reorder item" type="button" @click="openAction(&quot;Reorder item&quot;)">
                            <UIcon name="i-lucide-grip-vertical" class="size-4" />
                          </UButton>
                          <USelect v-model="form.items7" :items="items7Options" aria-label="Item name" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-0" />
                          <UInput v-model.number="form.items8" type="number" aria-label="Quantity" min="0" name="items8" class="flex h-9 w-full rounded-md text-base md:text-sm text-center" :ui="{ base: 'h-full' }" />
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0">
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">$</span>
                            </div>
                            <UInput v-model.number="form.items9" type="number" data-slot="input-group-control" aria-label="Rate" min="0" name="items9" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="min-w-0 text-right text-sm font-semibold tabular-nums">$945.00</div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 justify-self-end" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid grid-cols-[32px_minmax(120px,1.4fr)_56px_88px_84px_36px] items-center gap-2 px-3 py-2.5">
                          <UButton color="neutral" variant="soft" class="text-muted hover:bg-muted grid size-8 cursor-grab place-items-center rounded-md active:cursor-grabbing" aria-label="Reorder item" type="button" @click="openAction(&quot;Reorder item&quot;)">
                            <UIcon name="i-lucide-grip-vertical" class="size-4" />
                          </UButton>
                          <USelect v-model="form.items10" :items="items10Options" aria-label="Item name" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-0" />
                          <UInput v-model.number="form.items11" type="number" aria-label="Quantity" min="0" name="items11" class="flex h-9 w-full rounded-md text-base md:text-sm text-center" :ui="{ base: 'h-full' }" />
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0">
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">$</span>
                            </div>
                            <UInput v-model.number="form.items12" type="number" data-slot="input-group-control" aria-label="Rate" min="0" name="items12" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="min-w-0 text-right text-sm font-semibold tabular-nums">$760.00</div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 justify-self-end" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                      </div>
                      <div id="create-invoice-2-items" style="display: none;">
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  </div>
                      <div id="DndLiveRegion-0" role="status" style="position: fixed; top: 0px; left: 0px; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;" />
                      <div class="border-t p-3 border-default">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 text-primary h-10 w-full border-dashed font-semibold" aria-label="Add a New Item" type="button" @click="openAction(&quot;Add a New Item&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          Add a New Item
                        </UButton>
                      </div>
                    </div>
                  </UFormField>
                  <div class="text-muted flex justify-end text-sm">
                    Draft total:
                    <span class="text-highlighted ml-2 font-semibold tabular-nums">$5,221.00</span>
                  </div>
                </section>
              </div>
            </section>
            <aside class="bg-(--ui-bg-muted)/35 min-h-0 overflow-y-auto border-l pb-28 sm:pb-24 border-default">
              <article class="mx-auto flex min-h-full max-w-[900px] flex-col px-8 py-9">
                <header class="pb-7">
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h2 class="text-3xl font-semibold tracking-tight text-highlighted">Invoice</h2>
                      <div class="mt-4 grid gap-1 text-sm">
                        <p>
                          <span class="text-muted font-medium">Invoice no.</span>
                          <span class="font-semibold">SB-2026-084</span>
                        </p>
                        <p class="text-muted">
                          Ref:
                          <span class="text-highlighted font-medium">NS-4826-PRO</span>
                        </p>
                      </div>
                    </div>
                    <div class="bg-primary text-inverted grid size-12 shrink-0 place-items-center rounded-full">
                      <img alt="Shadcnblocks" width="24" height="24" class="size-6 object-contain brightness-0 invert dark:invert-0" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                    </div>
                  </div>
                </header>
                <section class="grid gap-8 py-7 md:grid-cols-2">
                  <div>
                    <p class="text-muted mb-2 text-sm font-semibold text-highlighted">Billed by:</p>
                    <h3 class="text-base font-semibold text-highlighted">Shadcnblocks.com</h3>
                    <p class="text-muted mt-1.5 text-sm">billing@shadcnblocks.com</p>
                    <p class="text-muted mt-3 max-w-52 text-sm leading-6">Level 12, 45 Clarence Street, Sydney NSW 2000</p>
                  </div>
                  <div>
                    <p class="text-muted mb-2 text-sm font-semibold text-highlighted">Billed to:</p>
                    <h3 class="text-base font-semibold text-highlighted">Northstar Studio</h3>
                    <p class="text-muted mt-1.5 text-sm">Olivia Bennett · accounts@northstar.studio</p>
                    <p class="text-muted mt-3 max-w-60 text-sm leading-6">18 Collins Street, Melbourne VIC 3000, Australia</p>
                  </div>
                </section>
                <section class="py-6">
                  <div class="bg-default overflow-hidden rounded-lg border border-default">
                    <!-- Table 1: Service / Qty / Rate / Amount -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full table-fixed text-left text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #service-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Service" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #service-cell="{ row }">
                        <p class="font-semibold text-highlighted">{{ row.original.serviceText3 }}</p>
                        <p class="text-muted mt-1.5 line-clamp-2 text-xs leading-5">{{ row.original.serviceText5 }}</p>
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
                  <div class="mt-5 flex justify-end">
                    <dl class="w-full max-w-xs space-y-3 rounded-lg px-4 py-4 text-sm">
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Subtotal</dt>
                        <dd class="font-semibold tabular-nums">$5,221</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <dt class="text-muted">Tax reserved</dt>
                        <dd class="font-semibold tabular-nums">$0.00</dd>
                      </div>
                      <div class="flex items-center justify-between gap-4 border-t pt-3 text-base font-semibold border-default">
                        <dt class="text-muted">Total due</dt>
                        <dd class="font-semibold tabular-nums">$5,221</dd>
                      </div>
                    </dl>
                  </div>
                </section>
                <footer class="mt-auto pt-16">
                  <h3 class="text-muted mb-3 font-semibold text-highlighted">Payment terms</h3>
                  <p class="text-muted mb-6 text-sm leading-6">Payment is due 30 days after issue.</p>
                  <h3 class="text-muted mb-3 font-semibold text-highlighted">Notes</h3>
                  <ul class="text-muted list-disc space-y-2 pl-5 text-sm">
                    <li>Include the payment reference with the payment memo.</li>
                  </ul>
                </footer>
              </article>
            </aside>
          </div>
          <div class="pointer-events-none fixed inset-x-0 bottom-4 z-20 flex justify-center px-3 sm:bottom-5">
            <div class="bg-(--ui-bg)/95 pointer-events-auto flex w-full max-w-[min(100%,46rem)] items-center justify-between gap-2 rounded-full border p-1.5 shadow-[0_18px_45px_-24px_color-mix(in_oklab,_var(--ui-info)_45%,_transparent)] backdrop-blur-md sm:w-auto sm:justify-center border-default">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 h-10 flex-1 rounded-full px-3 text-sm sm:flex-none sm:px-4" aria-label="Back Back" type="button" @click="openAction(&quot;Back Back&quot;)">
                <UIcon name="i-lucide-chevron-left" class="size-4" />
                <span class="hidden sm:inline">Back </span>
                <span class="sm:hidden">Back</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-10 shrink-0 rounded-full" aria-label="Send invoice" type="button" @click="openAction(&quot;Send invoice&quot;)">
                <UIcon name="i-lucide-send" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-10 shrink-0 rounded-full" aria-label="Download invoice PDF" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-download" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-10 shrink-0 rounded-full" aria-label="More invoice actions" type="button" @click="openAction(&quot;More invoice actions&quot;)">
                <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
              </UButton>
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-10 flex-1 rounded-full px-4 text-sm font-semibold sm:flex-none" aria-label="Submit" type="button" @click="openAction(&quot;Submit&quot;)">
                <UIcon name="i-lucide-check" class="size-4" />
                Submit
              </UButton>
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
