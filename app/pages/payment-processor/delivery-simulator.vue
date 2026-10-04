<!-- Page: /payment-processor/delivery-simulator | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Delivery Simulator · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": 6,
  "field2": 5,
  "seconds": "Seconds",
  "field4": 3,
  "field5": 20,
  "field6": 8000,
  "hooksExampleCom": "hooks.northwind.dev",
  "field8": 4,
  "hooksExampleCom2": "api.halden-robotics.no",
  "field10": 12,
  "hooksExampleCom3": "billing.lumen-freight.com",
  "field12": 31
})

const secondsOptions = [
  "Seconds",
  "Minutes"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "endpoint": "hooks.northwind.dev",
    "failureRate": "4%",
    "failureRateText2": "4",
    "delivered": "> 99.99%",
    "eventsLost": "1 in 244.1M",
    "attemptSpread": "",
    "attemptSpreadStyle6": "height:99.70%",
    "attemptSpreadStyle8": "height:76.41%",
    "attemptSpreadStyle10": "height:53.11%",
    "attemptSpreadStyle12": "height:29.81%",
    "attemptSpreadStyle14": "height:8.00%",
    "attemptSpreadStyle16": "height:8.00%"
  },
  {
    "_id": "2",
    "endpoint": "api.halden-robotics.no",
    "failureRate": "12%",
    "failureRateText2": "12",
    "delivered": "> 99.99%",
    "eventsLost": "1 in 335k",
    "attemptSpread": "",
    "attemptSpreadStyle6": "height:99.07%",
    "attemptSpreadStyle8": "height:83.73%",
    "attemptSpreadStyle10": "height:68.38%",
    "attemptSpreadStyle12": "height:53.03%",
    "attemptSpreadStyle14": "height:37.69%",
    "attemptSpreadStyle16": "height:22.34%"
  },
  {
    "_id": "3",
    "endpoint": "billing.lumen-freight.com",
    "failureRate": "31%",
    "failureRateText2": "31",
    "delivered": "99.91%",
    "eventsLost": "1 in 1k",
    "attemptSpread": "",
    "attemptSpreadStyle6": "height:97.31%",
    "attemptSpreadStyle8": "height:88.84%",
    "attemptSpreadStyle10": "height:80.36%",
    "attemptSpreadStyle12": "height:71.88%",
    "attemptSpreadStyle14": "height:63.40%",
    "attemptSpreadStyle16": "height:54.93%"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "endpoint",
    "header": "Endpoint"
  },
  {
    "accessorKey": "failureRate",
    "header": "Failure rate"
  },
  {
    "accessorKey": "delivered",
    "header": "Delivered"
  },
  {
    "accessorKey": "eventsLost",
    "header": "Events lost"
  },
  {
    "accessorKey": "attemptSpread",
    "header": "Attempt spread"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["endpoint","failureRate","delivered","eventsLost","attemptSpread"] as const
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
  const rows = table1FilteredRows.value.map(row => ["endpoint","failureRate","delivered","eventsLost","attemptSpread"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "payment-processor-delivery-simulator.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/delivery-simulator">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
          <div class="px-5 py-6 lg:px-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 class="text-xl font-semibold tracking-tight text-highlighted">Run new delivery simulation</h1>
                <p class="text-muted mt-1 text-sm">Model how your retry policy behaves before you ship it to live endpoints.</p>
              </div>
              <div class="flex shrink-0 flex-wrap items-center gap-2">
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-8 rounded-md px-3 text-xs" aria-label="Run simulation" type="button" @click="openAction(&quot;Run simulation&quot;)">
                  <UIcon name="i-lucide-play" class="size-4" />
                  Run simulation
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-xs" aria-label="Export" type="button" @click="exportCsv()">
                  <UIcon name="i-lucide-upload" class="size-4" />
                  Export
                </UButton>
              </div>
            </div>
            <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
              <div class="space-y-6">
                <div>
                  <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between py-1 text-left" aria-label="Retry policy" type="button" @click="openAction(&quot;Retry policy&quot;)">
                    <span class="text-base font-semibold tracking-tight">Retry policy</span>
                    <UIcon name="i-lucide-chevron-up" class="text-muted size-4 transition-transform" />
                  </UButton>
                  <div id="radix-_R_b5fiv5uknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 407px; --radix-collapsible-content-width: 384px;">
                    <div class="bg-(--ui-bg-muted)/30 mt-3 space-y-4 rounded-xl border p-4 border-default">
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Max attempts</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Max attempts" type="button" @click="openAction(&quot;About Max attempts&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <UInput v-model.number="form.field1" type="number" data-slot="input-group-control" aria-label="Max attempts" max="10" min="1" name="field1" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                            <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">attempts</span>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Backoff base</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Backoff base" type="button" @click="openAction(&quot;About Backoff base&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div class="flex items-center gap-2">
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 flex-1">
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">
                                <UIcon name="i-lucide-timer" class="size-3.5" />
                              </span>
                            </div>
                            <UInput v-model.number="form.field2" type="number" data-slot="input-group-control" aria-label="Backoff base" min="1" name="field2" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <USelect v-model="form.seconds" :items="secondsOptions" aria-label="Backoff unit" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-32 shrink-0" />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Backoff multiplier</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Backoff multiplier" type="button" @click="openAction(&quot;About Backoff multiplier&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                            <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">×</span>
                          </div>
                          <UInput v-model.number="form.field4" type="number" data-slot="input-group-control" aria-label="Backoff multiplier" min="1" step="0.5" name="field4" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Jitter</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Jitter" type="button" @click="openAction(&quot;About Jitter&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <UInput v-model.number="form.field5" type="number" data-slot="input-group-control" aria-label="Jitter" max="100" min="0" name="field5" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                            <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">%</span>
                          </div>
                        </div>
                      </div>
                      <div class="border-t pt-3 border-default">
                        <p class="text-muted text-xs">Waits between attempts</p>
                        <p class="mt-1 text-sm tabular-nums">5s · 15s · 45s · 2m 15s · 6m 45s</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-dashed border-default" />
                <div>
                  <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between py-1 text-left" aria-label="Endpoints" type="button" @click="openAction(&quot;Endpoints&quot;)">
                    <span class="text-base font-semibold tracking-tight">Endpoints</span>
                    <UIcon name="i-lucide-chevron-up" class="text-muted size-4 transition-transform" />
                  </UButton>
                  <div id="radix-_R_r5fiv5uknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 306px; --radix-collapsible-content-width: 384px;">
                    <div class="bg-(--ui-bg-muted)/30 mt-3 space-y-4 rounded-xl border p-4 border-default">
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Request timeout</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Request timeout" type="button" @click="openAction(&quot;About Request timeout&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <UInput v-model.number="form.field6" type="number" data-slot="input-group-control" aria-label="Request timeout" min="500" step="500" name="field6" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                            <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">ms</span>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="flex items-center gap-1.5">
                          <span class="text-sm font-medium">Failure rate per attempt</span>
                          <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Failure rate per attempt" type="button" @click="openAction(&quot;About Failure rate per attempt&quot;)">
                            <UIcon name="i-lucide-info" class="size-3.5" />
                          </UButton>
                        </div>
                        <div class="flex items-center gap-2">
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0 flex-1">
                            <UInput v-model="form.hooksExampleCom" type="text" data-slot="input-group-control" aria-label="Host for hooks.northwind.dev" placeholder="hooks.example.com" name="hooksExampleCom" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-24 shrink-0">
                            <UInput v-model.number="form.field8" type="number" data-slot="input-group-control" aria-label="Failure rate for hooks.northwind.dev" max="99" min="0" name="field8" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">%</span>
                            </div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-9 shrink-0" aria-label="Remove hooks.northwind.dev" type="button" @click="openAction(&quot;Remove hooks.northwind.dev&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="flex items-center gap-2">
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0 flex-1">
                            <UInput v-model="form.hooksExampleCom2" type="text" data-slot="input-group-control" aria-label="Host for api.halden-robotics.no" placeholder="hooks.example.com" name="hooksExampleCom2" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-24 shrink-0">
                            <UInput v-model.number="form.field10" type="number" data-slot="input-group-control" aria-label="Failure rate for api.halden-robotics.no" max="99" min="0" name="field10" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">%</span>
                            </div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-9 shrink-0" aria-label="Remove api.halden-robotics.no" type="button" @click="openAction(&quot;Remove api.halden-robotics.no&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="flex items-center gap-2">
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0 flex-1">
                            <UInput v-model="form.hooksExampleCom3" type="text" data-slot="input-group-control" aria-label="Host for billing.lumen-freight.com" placeholder="hooks.example.com" name="hooksExampleCom3" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                          <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-24 shrink-0">
                            <UInput v-model.number="form.field12" type="number" data-slot="input-group-control" aria-label="Failure rate for billing.lumen-freight.com" max="99" min="0" name="field12" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                            <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                              <span class="flex items-center gap-2 text-sm text-muted [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4">%</span>
                            </div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-9 shrink-0" aria-label="Remove billing.lumen-freight.com" type="button" @click="openAction(&quot;Remove billing.lumen-freight.com&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline py-2 text-primary h-8 px-0 text-sm" aria-label="Add endpoint" type="button" @click="openAction(&quot;Add endpoint&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          Add endpoint
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="min-w-0 space-y-10">
                <section>
                  <div class="flex items-center gap-1.5">
                    <span class="text-sm font-medium">Delivery window</span>
                    <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Delivery window" type="button" @click="openAction(&quot;About Delivery window&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
                    <div class="min-w-0">
                      <p class="text-muted text-xs">First attempt</p>
                      <p class="mt-1 text-2xl font-semibold tracking-tight tabular-nums text-highlighted">8s</p>
                    </div>
                    <div class="min-w-0 sm:border-l sm:pl-6 border-default">
                      <p class="text-muted text-xs">Typical</p>
                      <p class="mt-1 text-2xl font-semibold tracking-tight tabular-nums text-highlighted">8s</p>
                    </div>
                    <div class="min-w-0 sm:border-l sm:pl-6 border-default">
                      <p class="text-muted text-xs">Give up after</p>
                      <p class="mt-1 text-2xl font-semibold tracking-tight tabular-nums text-highlighted">13m 4s</p>
                    </div>
                  </div>
                </section>
                <div class="border-t border-dashed border-default" />
                <section>
                  <div class="flex items-center gap-1.5">
                    <span class="text-sm font-medium">Eventual delivery</span>
                    <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Eventual delivery" type="button" @click="openAction(&quot;About Eventual delivery&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <div class="mt-4 overflow-x-auto">
                    <!-- Table 1: Endpoint / Failure rate / Delivered / Events lost / Attempt spread -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full min-w-150 border-collapse text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #endpoint-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Endpoint" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #endpoint-cell="{ row }">
                        <span class="truncate font-medium">{{ row.original.endpoint }}</span>
                      </template>
                      <template #failureRate-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Failure rate" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #failureRate-cell="{ row }">
                        {{ row.original.failureRateText2 }}%
                      </template>
                      <template #delivered-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Delivered" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #delivered-cell="{ row }">
                        {{ row.original.delivered }}
                      </template>
                      <template #eventsLost-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Events lost" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #eventsLost-cell="{ row }">
                        {{ row.original.eventsLost }}
                      </template>
                      <template #attemptSpread-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Attempt spread" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #attemptSpread-cell="{ row }">
                        <div aria-label="6 attempts, most deliveries land on the first" class="flex h-6 items-end gap-[3px]" role="img">
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle6" />
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle8" />
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle10" />
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle12" />
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle14" />
                          <span class="bg-primary/70 w-1.5 rounded-[2px]" :style="row.original.attemptSpreadStyle16" />
                        </div>
                      </template>
                    </UTable>
                  </div>
                </section>
                <div class="border-t border-dashed border-default" />
                <section>
                  <div class="flex items-center gap-1.5">
                    <span class="text-sm font-medium">Sensitivity grid</span>
                    <UButton color="neutral" variant="ghost" class="text-(--ui-text-muted)/70 hover:text-highlighted transition-colors" aria-label="About Sensitivity grid" type="button" @click="openAction(&quot;About Sensitivity grid&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <p class="text-muted mt-1 text-xs">Events lost after all attempts. Darker is better.</p>
                  <div class="mt-4 overflow-x-auto">
                    <div class="min-w-125">
                      <div class="flex">
                        <div class="w-14 shrink-0" />
                        <div class="grid flex-1 grid-cols-4">
                          <div class="px-1">
                            <p class="text-muted pb-1 text-center text-xs">2 attempts</p>
                          </div>
                          <div class="px-1">
                            <p class="text-muted pb-1 text-center text-xs">4 attempts</p>
                          </div>
                          <div class="px-1">
                            <p class="text-muted pb-1 text-center text-xs">6 attempts</p>
                          </div>
                          <div class="px-1">
                            <p class="text-muted pb-1 text-center text-xs">8 attempts</p>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-stretch">
                        <div class="text-muted flex w-14 shrink-0 items-center justify-end pr-3 text-xs tabular-nums">5%</div>
                        <div class="grid flex-1 grid-cols-4">
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 33%, var(--ui-bg))">
                            <span class="">1 in 400</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-inverted" style="background:color-mix(in oklch, var(--ui-primary) 65%, var(--ui-bg))">
                            <span class="">1 in 160k</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-inverted" style="background:color-mix(in oklch, var(--ui-primary) 98%, var(--ui-bg))">
                            <span class="bg-default text-highlighted rounded-full px-2 py-0.5 font-semibold shadow-sm">1 in 64.0M</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-inverted" style="background:color-mix(in oklch, var(--ui-primary) 100%, var(--ui-bg))">
                            <span class="">1 in 25.6B</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-stretch">
                        <div class="text-muted flex w-14 shrink-0 items-center justify-end pr-3 text-xs tabular-nums">12%</div>
                        <div class="grid flex-1 grid-cols-4">
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 23%, var(--ui-bg))">
                            <span class="">1 in 69</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))">
                            <span class="">1 in 5k</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-inverted" style="background:color-mix(in oklch, var(--ui-primary) 69%, var(--ui-bg))">
                            <span class="">1 in 335k</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-inverted" style="background:color-mix(in oklch, var(--ui-primary) 92%, var(--ui-bg))">
                            <span class="">1 in 23.3M</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-stretch">
                        <div class="text-muted flex w-14 shrink-0 items-center justify-end pr-3 text-xs tabular-nums">25%</div>
                        <div class="grid flex-1 grid-cols-4">
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 15%, var(--ui-bg))">
                            <span class="">1 in 16</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 30%, var(--ui-bg))">
                            <span class="">1 in 256</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 45%, var(--ui-bg))">
                            <span class="">1 in 4k</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 60%, var(--ui-bg))">
                            <span class="">1 in 66k</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-stretch">
                        <div class="text-muted flex w-14 shrink-0 items-center justify-end pr-3 text-xs tabular-nums">40%</div>
                        <div class="grid flex-1 grid-cols-4">
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 10%, var(--ui-bg))">
                            <span class="">1 in 6</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 20%, var(--ui-bg))">
                            <span class="">1 in 39</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 30%, var(--ui-bg))">
                            <span class="">1 in 244</span>
                          </div>
                          <div class="grid h-14 place-items-center text-xs font-medium tabular-nums text-highlighted" style="background:color-mix(in oklch, var(--ui-primary) 40%, var(--ui-bg))">
                            <span class="">1 in 2k</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
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
