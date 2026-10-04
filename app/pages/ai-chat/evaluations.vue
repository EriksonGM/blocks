<!-- Page: /ai-chat/evaluations | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Evaluations · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchEvaluations": "",
  "allStatuses": "All statuses",
  "allExamples": "All examples"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Evaluations",
    "value": "0"
  },
  {
    "label": "Datasets",
    "value": "1"
  },
  {
    "label": "Providers",
    "value": "2"
  }
]

const allStatusesOptions = [
  "All statuses",
  "Completed",
  "Running",
  "Cancelled"
]

const allExamplesOptions = [
  "All examples",
  "Passed only",
  "Failed only"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "evaluation": "Support baselineeval_092",
    "evaluationText3": "Support baseline",
    "evaluationText5": "eval_092",
    "dataset": "Support answer qualityVersion 3 · 5examples",
    "datasetText2": "Support answer quality",
    "datasetText5": "3",
    "datasetText7": "5",
    "model": "OpenAI / GPT-4.1",
    "status": "Completed",
    "passRate": "80%",
    "created": "Sep 11, 10:42 AM"
  },
  {
    "_id": "2",
    "evaluation": "Intent routereval_091",
    "evaluationText3": "Intent router",
    "evaluationText5": "eval_091",
    "dataset": "Intent classificationVersion 1 · 3examples",
    "datasetText2": "Intent classification",
    "datasetText5": "1",
    "datasetText7": "3",
    "model": "OpenAI / GPT-4.1 mini",
    "status": "Completed",
    "passRate": "67%",
    "created": "Sep 10, 4:18 PM"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "evaluation",
    "header": "Evaluation"
  },
  {
    "accessorKey": "dataset",
    "header": "Dataset"
  },
  {
    "accessorKey": "model",
    "header": "Model"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "passRate",
    "header": "Pass rate"
  },
  {
    "accessorKey": "created",
    "header": "Created"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchEvaluations || '').toLowerCase()
  const keys = ["evaluation","dataset","model","status","passRate","created"] as const
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
  const rows = table1FilteredRows.value.map(row => ["evaluation","dataset","model","status","passRate","created"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-evaluations.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/evaluations">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 min-h-full gap-8 pt-12 pb-6 sm:pt-16 sm:pb-8 lg:px-10 max-w-7xl">
          <div class="flex flex-wrap gap-4 mx-auto max-w-2xl flex-col items-center text-center">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight sm:text-3xl text-highlighted">Evaluations</h1>
              <p class="text-muted max-w-2xl text-sm mt-2 leading-6 sm:text-base">Build datasets, grade candidate answers, and compare quality across runs.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2 mt-1">
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Create evaluation" type="button" @click="openAction(&quot;Create evaluation&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
                Create evaluation
              </UButton>
            </div>
          </div>
          <div data-orientation="horizontal">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="overflow-x-auto">
                <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" data-orientation="horizontal" style="outline:none" />
              </div>
              <div class="flex flex-wrap gap-2">
                <div class="relative">
                  <UIcon name="i-lucide-search" class="text-muted absolute top-2.5 left-3 size-4" />
                  <UInput v-model="form.searchEvaluations" type="text" aria-label="Search evaluations or datasets" placeholder="Search evaluations…" name="searchEvaluations" class="flex h-9 rounded-md text-base md:text-sm w-full pl-9 sm:w-56" :ui="{ base: 'h-full' }" />
                </div>
                <USelect v-model="form.allStatuses" :items="allStatusesOptions" aria-label="Evaluation status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
              </div>
            </div>
            <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-evaluations" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5" style="animation-duration:0s">
              <div class="overflow-hidden rounded-lg border border-default">
                <div class="relative w-full overflow-auto">
                  <!-- Table 1: Evaluation / Dataset / Model / Status / Pass rate / Created -->
                  <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #evaluation-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Evaluation" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #evaluation-cell="{ row }">
                      <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline text-highlighted h-auto p-0" aria-label="Support baseline" type="button" @click="openAction(&quot;Support baseline&quot;, row.original._id, 1)">
                        {{ row.original.evaluationText3 }}
                      </UButton>
                      <p class="text-muted mt-1 font-mono text-[10px]">{{ row.original.evaluationText5 }}</p>
                    </template>
                    <template #dataset-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Dataset" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #dataset-cell="{ row }">
                      <p>{{ row.original.datasetText2 }}</p>
                      <p class="text-muted mt-1 text-xs">Version {{ row.original.datasetText5 }} · {{ row.original.datasetText7 }}examples</p>
                    </template>
                    <template #model-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Model" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #model-cell="{ row }">
                      {{ row.original.model }}
                    </template>
                    <template #status-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #status-cell="{ row }">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">
                        <span class="mr-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                        {{ row.original.status }}
                      </div>
                    </template>
                    <template #passRate-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Pass rate" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #passRate-cell="{ row }">
                      {{ row.original.passRate }}
                    </template>
                    <template #created-header="{ column }">
                      <UButton color="neutral" variant="ghost" size="xs" label="Created" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                    </template>
                    <template #created-cell="{ row }">
                      {{ row.original.created }}
                    </template>
                  </UTable>
                </div>
              </div>
              <p class="text-muted mt-3 text-xs">Runs grade the candidate outputs stored in your dataset. No model request is made.</p>
            </div>
            <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-datasets" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5" />
            <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-providers" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5" />
          </div>
          <section aria-label="Selected evaluation results" class="overflow-hidden rounded-lg border border-default">
            <div class="bg-(--ui-bg-muted)/20 flex flex-wrap items-start justify-between gap-3 border-b px-5 py-4 border-default">
              <div>
                <p class="text-sm font-medium">Support baseline</p>
                <p class="text-muted mt-1 text-xs">Support answer quality · v3 · OpenAI / GPT-4.1</p>
              </div>
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">
                <span class="mr-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                Completed
              </div>
            </div>
            <div class="space-y-5 p-5">
              <div class="flex flex-wrap items-center justify-end gap-3">
                <span class="text-muted text-xs">Contains expected phrase· case insensitive</span>
              </div>
              <div class="grid grid-cols-3 gap-3 rounded-lg border p-5 border-default">
                <div>
                  <p class="text-muted text-xs">Pass rate</p>
                  <p class="mt-2 text-2xl font-semibold tabular-nums text-highlighted">80%</p>
                </div>
                <div>
                  <p class="text-muted text-xs">Passed</p>
                  <p class="mt-2 text-2xl font-semibold tabular-nums text-highlighted">4</p>
                </div>
                <div>
                  <p class="text-muted text-xs">Failed</p>
                  <p class="mt-2 text-2xl font-semibold tabular-nums text-highlighted">1</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-between gap-2">
                <USelect v-model="form.allExamples" :items="allExamplesOptions" aria-label="Evaluation result filter" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export results" type="button" @click="exportCsv()">
                  Export results
                </UButton>
              </div>
              <div class="space-y-3">
                <div class="rounded-lg border p-4 border-default">
                  <div class="flex items-start justify-between gap-3">
                    <p class="text-sm font-medium">How long do refunds take?</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-success border-default">Passed</div>
                  </div>
                  <p class="text-muted mt-3 text-[11px]">Expectedphrase</p>
                  <p class="mt-1 text-xs leading-5">5–10 business days</p>
                  <p class="text-muted mt-3 text-[11px]">Candidate output</p>
                  <p class="mt-1 text-sm leading-6">Refunds arrive within 5–10 business days after approval.</p>
                </div>
                <div class="rounded-lg border p-4 border-default">
                  <div class="flex items-start justify-between gap-3">
                    <p class="text-sm font-medium">Can I change my delivery address?</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-success border-default">Passed</div>
                  </div>
                  <p class="text-muted mt-3 text-[11px]">Expectedphrase</p>
                  <p class="mt-1 text-xs leading-5">before dispatch</p>
                  <p class="text-muted mt-3 text-[11px]">Candidate output</p>
                  <p class="mt-1 text-sm leading-6">You can update your address before dispatch in your order details.</p>
                </div>
                <div class="rounded-lg border p-4 border-default">
                  <div class="flex items-start justify-between gap-3">
                    <p class="text-sm font-medium">My package is missing.</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-success border-default">Passed</div>
                  </div>
                  <p class="text-muted mt-3 text-[11px]">Expectedphrase</p>
                  <p class="mt-1 text-xs leading-5">tracking</p>
                  <p class="text-muted mt-3 text-[11px]">Candidate output</p>
                  <p class="mt-1 text-sm leading-6">Please share your tracking number so we can investigate.</p>
                </div>
                <div class="rounded-lg border p-4 border-default">
                  <div class="flex items-start justify-between gap-3">
                    <p class="text-sm font-medium">How do I cancel my subscription?</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-error border-default">Failed</div>
                  </div>
                  <p class="text-muted mt-3 text-[11px]">Expectedphrase</p>
                  <p class="mt-1 text-xs leading-5">billing settings</p>
                  <p class="text-muted mt-3 text-[11px]">Candidate output</p>
                  <p class="mt-1 text-sm leading-6">Contact support to cancel your subscription.</p>
                </div>
                <div class="rounded-lg border p-4 border-default">
                  <div class="flex items-start justify-between gap-3">
                    <p class="text-sm font-medium">Can I export my data?</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-success border-default">Passed</div>
                  </div>
                  <p class="text-muted mt-3 text-[11px]">Expectedphrase</p>
                  <p class="mt-1 text-xs leading-5">settings</p>
                  <p class="text-muted mt-3 text-[11px]">Candidate output</p>
                  <p class="mt-1 text-sm leading-6">Open Settings, then Data controls, and choose Export.</p>
                </div>
              </div>
            </div>
          </section>
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
