<!-- Page: /ai-chat/model-benchmarks | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Model benchmarks · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchModelsOrHarness": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "model": "GPT-6 Astraxhighopenai/gpt-6-astra",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-6 Astra",
    "modelText8": "xhigh",
    "modelText10": "openai/gpt-6-astra",
    "score": "37.79",
    "recall": "32.8%",
    "precision": "97.9%",
    "falsePositives": "2",
    "cost": "$63.70",
    "totalTime": "49m 47s",
    "tokens": "1,683.9k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-6 Astra xhigh"
  },
  {
    "_id": "2",
    "model": "GPT-5.6 Solxhighopenai/gpt-5.6-sol",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-5.6 Sol",
    "modelText8": "xhigh",
    "modelText10": "openai/gpt-5.6-sol",
    "score": "35.44",
    "recall": "30.6%",
    "precision": "96.3%",
    "falsePositives": "3",
    "cost": "$55.98",
    "totalTime": "3h 39m",
    "tokens": "2,274.9k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-5.6 Sol xhigh"
  },
  {
    "_id": "3",
    "model": "Claude Opus 5maxanthropic/claude-opus-5",
    "modelStyle5": "background:var(--ui-warning)",
    "modelText6": "Claude Opus 5",
    "modelText8": "max",
    "modelText10": "anthropic/claude-opus-5",
    "score": "32.44",
    "recall": "28.0%",
    "precision": "88.0%",
    "falsePositives": "10",
    "cost": "$127.93",
    "totalTime": "2h 34m",
    "tokens": "4,453.7k",
    "harness": "Claude Code",
    "actions": "",
    "actionsArialabel3": "Inspect Claude Opus 5 max"
  },
  {
    "_id": "4",
    "model": "GPT-6 Astramediumopenai/gpt-6-astra",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-6 Astra",
    "modelText8": "medium",
    "modelText10": "openai/gpt-6-astra",
    "score": "29.33",
    "recall": "25.0%",
    "precision": "95.5%",
    "falsePositives": "3",
    "cost": "$35.20",
    "totalTime": "21m 49s",
    "tokens": "973k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-6 Astra medium"
  },
  {
    "_id": "5",
    "model": "Claude Opus 5mediumanthropic/claude-opus-5",
    "modelStyle5": "background:var(--ui-warning)",
    "modelText6": "Claude Opus 5",
    "modelText8": "medium",
    "modelText10": "anthropic/claude-opus-5",
    "score": "28.25",
    "recall": "24.6%",
    "precision": "70.5%",
    "falsePositives": "26",
    "cost": "$31.96",
    "totalTime": "47m 1s",
    "tokens": "999.7k",
    "harness": "Claude Code",
    "actions": "",
    "actionsArialabel3": "Inspect Claude Opus 5 medium"
  },
  {
    "_id": "6",
    "model": "GPT-5.6 Lunaxhighopenai/gpt-5.6-luna",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-5.6 Luna",
    "modelText8": "xhigh",
    "modelText10": "openai/gpt-5.6-luna",
    "score": "26.68",
    "recall": "22.8%",
    "precision": "81.2%",
    "falsePositives": "13",
    "cost": "$24.59",
    "totalTime": "3h 1m",
    "tokens": "3,343.4k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-5.6 Luna xhigh"
  },
  {
    "_id": "7",
    "model": "GPT-5.6 Solmediumopenai/gpt-5.6-sol",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-5.6 Sol",
    "modelText8": "medium",
    "modelText10": "openai/gpt-5.6-sol",
    "score": "25.00",
    "recall": "21.1%",
    "precision": "94.3%",
    "falsePositives": "3",
    "cost": "$17.95",
    "totalTime": "30m 52s",
    "tokens": "703k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-5.6 Sol medium"
  },
  {
    "_id": "8",
    "model": "GLM-5.3highzai/glm-5.3",
    "modelStyle5": "background:var(--ui-error)",
    "modelText6": "GLM-5.3",
    "modelText8": "high",
    "modelText10": "zai/glm-5.3",
    "score": "21.91",
    "recall": "18.5%",
    "precision": "80.7%",
    "falsePositives": "11",
    "cost": "$16.22",
    "totalTime": "2h 5m",
    "tokens": "1,232.1k",
    "harness": "Pi",
    "actions": "",
    "actionsArialabel3": "Inspect GLM-5.3 high"
  },
  {
    "_id": "9",
    "model": "GPT-5.5xhighopenai/gpt-5.5",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-5.5",
    "modelText8": "xhigh",
    "modelText10": "openai/gpt-5.5",
    "score": "21.11",
    "recall": "17.7%",
    "precision": "95.5%",
    "falsePositives": "2",
    "cost": "$43.42",
    "totalTime": "2h 22m",
    "tokens": "2,158.8k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-5.5 xhigh"
  },
  {
    "_id": "10",
    "model": "GLM-5.3maxzai/glm-5.3",
    "modelStyle5": "background:var(--ui-error)",
    "modelText6": "GLM-5.3",
    "modelText8": "max",
    "modelText10": "zai/glm-5.3",
    "score": "20.39",
    "recall": "17.2%",
    "precision": "75.9%",
    "falsePositives": "13",
    "cost": "$14.60",
    "totalTime": "1h 29m",
    "tokens": "1,241.8k",
    "harness": "Pi",
    "actions": "",
    "actionsArialabel3": "Inspect GLM-5.3 max"
  },
  {
    "_id": "11",
    "model": "GPT-5.6 Terraxhighopenai/gpt-5.6-terra",
    "modelStyle5": "background:var(--ui-success)",
    "modelText6": "GPT-5.6 Terra",
    "modelText8": "xhigh",
    "modelText10": "openai/gpt-5.6-terra",
    "score": "19.14",
    "recall": "15.9%",
    "precision": "95.3%",
    "falsePositives": "2",
    "cost": "$27.81",
    "totalTime": "1h 45m",
    "tokens": "2,108.7k",
    "harness": "Codex",
    "actions": "",
    "actionsArialabel3": "Inspect GPT-5.6 Terra xhigh"
  },
  {
    "_id": "12",
    "model": "Kimi K3xhighmoonshotai/kimi-k3",
    "modelStyle5": "background:var(--ui-info)",
    "modelText6": "Kimi K3",
    "modelText8": "xhigh",
    "modelText10": "moonshotai/kimi-k3",
    "score": "17.49",
    "recall": "14.7%",
    "precision": "77.1%",
    "falsePositives": "11",
    "cost": "$12.38",
    "totalTime": "1h 59m",
    "tokens": "731.9k",
    "harness": "Pi",
    "actions": "",
    "actionsArialabel3": "Inspect Kimi K3 xhigh"
  },
  {
    "_id": "13",
    "model": "Claude Sonnet 5maxanthropic/claude-sonnet-5",
    "modelStyle5": "background:var(--ui-warning)",
    "modelText6": "Claude Sonnet 5",
    "modelText8": "max",
    "modelText10": "anthropic/claude-sonnet-5",
    "score": "16.99",
    "recall": "14.2%",
    "precision": "76.1%",
    "falsePositives": "11",
    "cost": "$45.17",
    "totalTime": "3h 8m",
    "tokens": "4,601.8k",
    "harness": "Claude Code",
    "actions": "",
    "actionsArialabel3": "Inspect Claude Sonnet 5 max"
  },
  {
    "_id": "14",
    "model": "Deepseek V4 Flashxhighdeepseek/deepseek-v4-flash",
    "modelStyle5": "background:var(--ui-info)",
    "modelText6": "Deepseek V4 Flash",
    "modelText8": "xhigh",
    "modelText10": "deepseek/deepseek-v4-flash",
    "score": "16.47",
    "recall": "13.8%",
    "precision": "74.0%",
    "falsePositives": "13",
    "cost": "$5.94",
    "totalTime": "1h 18m",
    "tokens": "1,481k",
    "harness": "Pi",
    "actions": "",
    "actionsArialabel3": "Inspect Deepseek V4 Flash xhigh"
  },
  {
    "_id": "15",
    "model": "Qwen3.8 Maxxhighalibaba/qwen3.8-max",
    "modelStyle5": "background:var(--ui-warning)",
    "modelText6": "Qwen3.8 Max",
    "modelText8": "xhigh",
    "modelText10": "alibaba/qwen3.8-max",
    "score": "16.47",
    "recall": "13.8%",
    "precision": "73.9%",
    "falsePositives": "12",
    "cost": "$6.33",
    "totalTime": "1h 52m",
    "tokens": "342.6k",
    "harness": "Pi",
    "actions": "",
    "actionsArialabel3": "Inspect Qwen3.8 Max xhigh"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "model",
    "header": "Model"
  },
  {
    "accessorKey": "score",
    "header": "Score"
  },
  {
    "accessorKey": "recall",
    "header": "Recall"
  },
  {
    "accessorKey": "precision",
    "header": "Precision"
  },
  {
    "accessorKey": "falsePositives",
    "header": "False positives"
  },
  {
    "accessorKey": "cost",
    "header": "Cost"
  },
  {
    "accessorKey": "totalTime",
    "header": "Total time"
  },
  {
    "accessorKey": "tokens",
    "header": "Tokens"
  },
  {
    "accessorKey": "harness",
    "header": "Harness"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchModelsOrHarness || '').toLowerCase()
  const keys = ["model","score","recall","precision","falsePositives","cost","totalTime","tokens","harness","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/model-benchmarks">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto w-full max-w-[1560px] px-5 py-7 sm:px-8 lg:px-10">
          <header class="mb-8">
            <h1 class="text-2xl font-semibold tracking-tight text-highlighted">ShadcnBench</h1>
            <p class="text-muted mt-2 max-w-2xl text-sm leading-6">Model performance on code vulnerability detection, measured by quality, cost, and runtime.</p>
          </header>
          <div class="grid gap-x-10 gap-y-7 lg:grid-cols-2">
            <section class="min-w-0" aria-label="Score vs. cost">
              <h3 class="mb-1 text-sm font-medium text-highlighted">Score vs. cost</h3>
              <p class="text-muted mb-5 text-xs">Total model cost for the benchmark run</p>
              <div class="h-[350px] w-full xl:h-[380px]">
                <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                <div class="chart-responsive-container" style="width:100%;height:380px;min-width:0" role="img" aria-label="Analytics chart">
                  <div style="width:0;height:0;overflow:visible">
                    <div width="320" height="350" class="chart-wrapper" style="position:relative;cursor:default;width:320px;height:350px" />
                  </div>
                </div>
              </div>
            </section>
            <section class="min-w-0" aria-label="Score vs. total time">
              <h3 class="mb-1 text-sm font-medium text-highlighted">Score vs. total time</h3>
              <p class="text-muted mb-5 text-xs">Time to complete the benchmark run</p>
              <div class="h-[350px] w-full xl:h-[380px]">
                <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                <div class="chart-responsive-container" style="width:100%;height:380px;min-width:0" role="img" aria-label="Analytics chart">
                  <div style="width:0;height:0;overflow:visible">
                    <div width="320" height="350" class="chart-wrapper" style="position:relative;cursor:default;width:320px;height:350px" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="mt-2 mb-6 flex flex-wrap items-center justify-center gap-3 border-b pb-5 border-default">
            <div class="flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Filter charts by developer">
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="OpenAI" type="button" @click="openAction(&quot;OpenAI&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-success)" class="chart-symbols" transform="translate(8, 8)" d="M4.37,0A4.37,4.37,0,1,1,-4.37,0A4.37,4.37,0,1,1,4.37,0" />
                </svg>
                OpenAI
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Anthropic" type="button" @click="openAction(&quot;Anthropic&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-warning)" class="chart-symbols" transform="translate(8, 8)" d="M0,-6.796L5.886,3.398L-5.886,3.398Z" />
                </svg>
                Anthropic
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Google" type="button" @click="openAction(&quot;Google&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-info)" class="chart-symbols" transform="translate(8, 8)" d="M0,-7.208L4.162,0L0,7.208L-4.162,0Z" />
                </svg>
                Google
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Z.ai" type="button" @click="openAction(&quot;Z.ai&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-error)" class="chart-symbols" transform="translate(8, 8)" d="M-3.873,-3.873h7.746v7.746h-7.746Z" />
                </svg>
                Z.ai
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Moonshot AI" type="button" @click="openAction(&quot;Moonshot AI&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-info)" class="chart-symbols" transform="translate(8, 8)" d="M0,-7.208L4.162,0L0,7.208L-4.162,0Z" />
                </svg>
                Moonshot AI
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="DeepSeek" type="button" @click="openAction(&quot;DeepSeek&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-info)" class="chart-symbols" transform="translate(8, 8)" d="M-5.196,-1.732L-1.732,-1.732L-1.732,-5.196L1.732,-5.196L1.732,-1.732L5.196,-1.732L5.196,1.732L1.732,1.732L1.732,5.196L-1.732,5.196L-1.732,1.732L-5.196,1.732Z" />
                </svg>
                DeepSeek
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Alibaba" type="button" @click="openAction(&quot;Alibaba&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-warning)" class="chart-symbols" transform="translate(8, 8)" d="M2.09,1.207L2.09,5.387L-2.09,5.387L-2.09,1.207L-5.711,-0.883L-3.62,-4.504L0,-2.414L3.62,-4.504L5.711,-0.883Z" />
                </svg>
                Alibaba
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="xAI" type="button" @click="openAction(&quot;xAI&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-text-muted)" class="chart-symbols" transform="translate(8, 8)" d="M0,-6.796L5.886,3.398L-5.886,3.398Z" />
                </svg>
                xAI
              </UButton>
              <UButton color="neutral" variant="ghost" class="focus-visible:outline-accented flex items-center gap-1.5 rounded-sm py-1 text-xs focus-visible:outline-2" style="opacity:1" aria-label="Thinking Machines" type="button" @click="openAction(&quot;Thinking Machines&quot;)">
                <svg width="100%" height="100%" viewBox="0 0 16 16">
                  <path cx="8" cy="8" fill="var(--ui-info)" class="chart-symbols" transform="translate(8, 8)" d="M2.09,1.207L2.09,5.387L-2.09,5.387L-2.09,1.207L-5.711,-0.883L-3.62,-4.504L0,-2.414L3.62,-4.504L5.711,-0.883Z" />
                </svg>
                Thinking Machines
              </UButton>
            </div>
          </div>
          <section aria-label="Benchmark results">
            <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <h2 class="text-base font-medium text-highlighted">Results</h2>
                <span class="text-muted text-xs">38 configurations</span>
              </div>
              <div class="relative">
                <UIcon name="i-lucide-search" class="text-muted absolute top-2.5 left-3 size-4" />
                <UInput v-model="form.searchModelsOrHarness" type="text" aria-label="Search models" placeholder="Search models or harness…" name="searchModelsOrHarness" class="flex rounded-md text-base md:text-sm h-9 w-64 pl-9" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <div class="overflow-hidden rounded-lg border border-default">
              <div class="relative w-full overflow-auto">
                <!-- Table 1: Model / Score / Recall / Precision / False positives / Cost / Total time / Tokens / Harness -->
                <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #model-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Model" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #model-cell="{ row }">
                    <UButton color="neutral" variant="ghost" class="text-left" aria-label="GPT-6 Astraxhighopenai/gpt-6-astra" type="button" @click="openAction(&quot;GPT-6 Astraxhighopenai/gpt-6-astra&quot;, row.original._id, 1)">
                      <span class="flex items-center gap-2 font-medium">
                        <span class="size-1.5 shrink-0 rounded-full" :style="row.original.modelStyle5" />
                        {{ row.original.modelText6 }}
                        <span class="text-muted text-xs font-normal">{{ row.original.modelText8 }}</span>
                      </span>
                      <span class="text-muted mt-1 block pl-3.5 text-xs">{{ row.original.modelText10 }}</span>
                    </UButton>
                  </template>
                  <template #score-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Score" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #score-cell="{ row }">
                    <span class="font-semibold tabular-nums">{{ row.original.score }}</span>
                  </template>
                  <template #recall-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Recall" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #recall-cell="{ row }">
                    {{ row.original.recall }}
                  </template>
                  <template #precision-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Precision" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #precision-cell="{ row }">
                    {{ row.original.precision }}
                  </template>
                  <template #falsePositives-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="False positives" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #falsePositives-cell="{ row }">
                    {{ row.original.falsePositives }}
                  </template>
                  <template #cost-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Cost" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #cost-cell="{ row }">
                    {{ row.original.cost }}
                  </template>
                  <template #totalTime-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Total time" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #totalTime-cell="{ row }">
                    {{ row.original.totalTime }}
                  </template>
                  <template #tokens-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Tokens" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #tokens-cell="{ row }">
                    {{ row.original.tokens }}
                  </template>
                  <template #harness-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Harness" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #harness-cell="{ row }">
                    <span class="text-muted">{{ row.original.harness }}</span>
                  </template>
                  <template #actions-cell="{ row }">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Inspect GPT-6 Astra xhigh&quot;, row.original._id, 1)">
                      <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                    </UButton>
                  </template>
                </UTable>
              </div>
            </div>
            <div class="text-muted mt-4 flex items-center justify-between text-xs">
              <span>1–15of 38 results</span>
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-6" aria-label="Previous results" type="button" disabled @click="openAction(&quot;Previous results&quot;)">
                  <UIcon name="i-lucide-chevron-left" class="size-4" />
                </UButton>
                <span>Page 1 of3</span>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-6" aria-label="Next results" type="button" @click="openAction(&quot;Next results&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </UButton>
              </div>
            </div>
          </section>
          <p class="text-muted mt-7 text-xs leading-5">
            Source:
            <NuxtLink class="underline underline-offset-2" to="https://vercel.com/ai-gateway/leaderboards/deepsecbench" external>
              Vercel AI Gateway · DeepsecBench
            </NuxtLink>
            , using the deepsec cyber harness. Scores apply to this security benchmark; they are not a general model quality rating.
          </p>
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
