<!-- Page: /ai-chat/model-pricing | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Model pricing · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchModelsOrProviders": "",
  "allProviders": "All providers",
  "recommended": "Recommended"
})

const allProvidersOptions = [
  "All providers",
  "OpenAI",
  "Anthropic",
  "Google",
  "Mistral"
]

const recommendedOptions = [
  "Recommended",
  "Lowest input",
  "Lowest output",
  "Model name"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "model": "openai/gpt-4.1DefaultFeaturedBalanced model for complex instructions and tool-driven work.Input$2.00Output$8.00",
    "modelGroup": "0",
    "modelText6": "openai/gpt-4.1",
    "modelClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 gap-1 text-[10px] border-default",
    "modelText10": "Default",
    "modelText12": "Featured",
    "modelText14": "Balanced model for complex instructions and tool-driven work.",
    "modelText16": "Input",
    "modelText19": "Output",
    "input1M": "$2.00",
    "input1MGroup": "0",
    "input1MText3": "$2.00",
    "output1M": "$8.00",
    "output1MGroup": "0",
    "output1MText3": "$8.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Close GPT-4.1 details",
    "detailsClass5": "text-muted transition-transform rotate-180",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "",
    "modelText15": "",
    "modelText17": "",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "2",
    "model": "Input$2.00 / 1MOutput$8.00 / 1MCached read$0.50 / 1MContext1M tokensAvailabilityAvailable to all projectsCapabilitiesCurrent default",
    "modelGroup": "1",
    "modelText6": "Input",
    "modelClass7": "mt-1 text-sm font-medium tabular-nums",
    "modelText10": "",
    "modelText12": "",
    "modelText14": " / 1M",
    "modelText16": "Cached read",
    "modelText19": "",
    "input1M": "",
    "input1MGroup": "1",
    "input1MText3": "",
    "output1M": "",
    "output1MGroup": "1",
    "output1MText3": "",
    "details": "",
    "detailsGroup": "1",
    "detailsArialabel3": "",
    "detailsClass5": "",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "$2.00",
    "modelText15": "",
    "modelText17": "",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "3",
    "model": "openai/o3FeaturedDeep reasoning for difficult analysis and agent planning.Input$2.00Output$8.00",
    "modelGroup": "2",
    "modelText6": "openai/o3",
    "modelClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] border-default",
    "modelText10": "Deep reasoning for difficult analysis and agent planning.",
    "modelText12": "Input",
    "modelText14": "$2.00",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$2.00",
    "input1MGroup": "0",
    "input1MText3": "$2.00",
    "output1M": "$8.00",
    "output1MGroup": "0",
    "output1MText3": "$8.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open o3 details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Featured",
    "modelText15": "Output",
    "modelText17": "$8.00",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "4",
    "model": "openai/gpt-4.1-mini−20%Fast, efficient model for high-volume product workloads.Input$0.40Output$1.60",
    "modelGroup": "3",
    "modelText6": "openai/gpt-4.1-mini",
    "modelClass7": "inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-warning/12 text-[10px] text-warning shadow-none dark:text-warning",
    "modelText10": "%",
    "modelText12": "Fast, efficient model for high-volume product workloads.",
    "modelText14": "Input",
    "modelText16": "$0.40",
    "modelText19": "$1.60",
    "input1M": "$0.40$0.50",
    "input1MGroup": "2",
    "input1MText3": "$0.40",
    "output1M": "$1.60$2.00",
    "output1MGroup": "2",
    "output1MText3": "$1.60",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open GPT-4.1 mini details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "−",
    "modelText15": "",
    "modelText17": "Output",
    "input1MText6": "0.50",
    "output1MText6": "2.00"
  },
  {
    "_id": "5",
    "model": "openai/o4-miniCompact reasoning model optimized for throughput.Input$1.10Output$4.40",
    "modelGroup": "4",
    "modelText6": "openai/o4-mini",
    "modelClass7": "text-muted mt-1 block truncate text-xs",
    "modelText10": "Input",
    "modelText12": "$1.10",
    "modelText14": "",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$1.10",
    "input1MGroup": "0",
    "input1MText3": "$1.10",
    "output1M": "$4.40",
    "output1MGroup": "0",
    "output1MText3": "$4.40",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open o4-mini details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Compact reasoning model optimized for throughput.",
    "modelText15": "$4.40",
    "modelText17": "",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "6",
    "model": "anthropic/claude-sonnet-4FeaturedStrong coding and long-running agent performance.Input$3.00Output$15.00",
    "modelGroup": "2",
    "modelText6": "anthropic/claude-sonnet-4",
    "modelClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] border-default",
    "modelText10": "Strong coding and long-running agent performance.",
    "modelText12": "Input",
    "modelText14": "$3.00",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$3.00",
    "input1MGroup": "0",
    "input1MText3": "$3.00",
    "output1M": "$15.00",
    "output1MGroup": "0",
    "output1MText3": "$15.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Claude Sonnet 4 details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Featured",
    "modelText15": "Output",
    "modelText17": "$15.00",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "7",
    "model": "anthropic/claude-3.7-sonnet−20%Hybrid reasoning for engineering and knowledge work.Input$2.40Output$12.00",
    "modelGroup": "3",
    "modelText6": "anthropic/claude-3.7-sonnet",
    "modelClass7": "inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-warning/12 text-[10px] text-warning shadow-none dark:text-warning",
    "modelText10": "%",
    "modelText12": "Hybrid reasoning for engineering and knowledge work.",
    "modelText14": "Input",
    "modelText16": "$2.40",
    "modelText19": "$12.00",
    "input1M": "$2.40$3.00",
    "input1MGroup": "2",
    "input1MText3": "$2.40",
    "output1M": "$12.00$15.00",
    "output1MGroup": "2",
    "output1MText3": "$12.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Claude 3.7 Sonnet details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "−",
    "modelText15": "",
    "modelText17": "Output",
    "input1MText6": "3.00",
    "output1MText6": "15.00"
  },
  {
    "_id": "8",
    "model": "anthropic/claude-3.5-haikuLow-latency model for routing and short-form generation.Input$0.80Output$4.00",
    "modelGroup": "4",
    "modelText6": "anthropic/claude-3.5-haiku",
    "modelClass7": "text-muted mt-1 block truncate text-xs",
    "modelText10": "Input",
    "modelText12": "$0.80",
    "modelText14": "",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$0.80",
    "input1MGroup": "0",
    "input1MText3": "$0.80",
    "output1M": "$4.00",
    "output1MGroup": "0",
    "output1MText3": "$4.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Claude 3.5 Haiku details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Low-latency model for routing and short-form generation.",
    "modelText15": "$4.00",
    "modelText17": "",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "9",
    "model": "google/gemini-2.5-proFeaturedMultimodal reasoning for research and large contexts.Input$1.25Output$10.00",
    "modelGroup": "2",
    "modelText6": "google/gemini-2.5-pro",
    "modelClass7": "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] border-default",
    "modelText10": "Multimodal reasoning for research and large contexts.",
    "modelText12": "Input",
    "modelText14": "$1.25",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$1.25",
    "input1MGroup": "0",
    "input1MText3": "$1.25",
    "output1M": "$10.00",
    "output1MGroup": "0",
    "output1MText3": "$10.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Gemini 2.5 Pro details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Featured",
    "modelText15": "Output",
    "modelText17": "$10.00",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "10",
    "model": "google/gemini-2.5-flash−20%Responsive multimodal model for real-time experiences.Input$0.24Output$2.00",
    "modelGroup": "3",
    "modelText6": "google/gemini-2.5-flash",
    "modelClass7": "inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-warning/12 text-[10px] text-warning shadow-none dark:text-warning",
    "modelText10": "%",
    "modelText12": "Responsive multimodal model for real-time experiences.",
    "modelText14": "Input",
    "modelText16": "$0.24",
    "modelText19": "$2.00",
    "input1M": "$0.24$0.30",
    "input1MGroup": "2",
    "input1MText3": "$0.24",
    "output1M": "$2.00$2.50",
    "output1MGroup": "2",
    "output1MText3": "$2.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Gemini 2.5 Flash details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "−",
    "modelText15": "",
    "modelText17": "Output",
    "input1MText6": "0.30",
    "output1MText6": "2.50"
  },
  {
    "_id": "11",
    "model": "mistral/mistral-largeGeneral-purpose multilingual model with tool support.Input$2.00Output$6.00",
    "modelGroup": "4",
    "modelText6": "mistral/mistral-large",
    "modelClass7": "text-muted mt-1 block truncate text-xs",
    "modelText10": "Input",
    "modelText12": "$2.00",
    "modelText14": "",
    "modelText16": "",
    "modelText19": "",
    "input1M": "$2.00",
    "input1MGroup": "0",
    "input1MText3": "$2.00",
    "output1M": "$6.00",
    "output1MGroup": "0",
    "output1MText3": "$6.00",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Mistral Large details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "General-purpose multilingual model with tool support.",
    "modelText15": "$6.00",
    "modelText17": "",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "12",
    "model": "mistral/codestralFreeCode generation and completion across modern languages.InputFreeOutputFree",
    "modelGroup": "2",
    "modelText6": "mistral/codestral",
    "modelClass7": "inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-success/12 text-[10px] text-success shadow-none dark:text-success",
    "modelText10": "Code generation and completion across modern languages.",
    "modelText12": "Input",
    "modelText14": "Free",
    "modelText16": "",
    "modelText19": "",
    "input1M": "Free",
    "input1MGroup": "0",
    "input1MText3": "Free",
    "output1M": "Free",
    "output1MGroup": "0",
    "output1MText3": "Free",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Codestral details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Free",
    "modelText15": "Output",
    "modelText17": "Free",
    "input1MText6": "",
    "output1MText6": ""
  },
  {
    "_id": "13",
    "model": "mistral/mistral-smallFreeEfficient model for extraction, classification, and chat.InputFreeOutputFree",
    "modelGroup": "2",
    "modelText6": "mistral/mistral-small",
    "modelClass7": "inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-success/12 text-[10px] text-success shadow-none dark:text-success",
    "modelText10": "Efficient model for extraction, classification, and chat.",
    "modelText12": "Input",
    "modelText14": "Free",
    "modelText16": "",
    "modelText19": "",
    "input1M": "Free",
    "input1MGroup": "0",
    "input1MText3": "Free",
    "output1M": "Free",
    "output1MGroup": "0",
    "output1MText3": "Free",
    "details": "",
    "detailsGroup": "0",
    "detailsArialabel3": "Open Mistral Small details",
    "detailsClass5": "text-muted transition-transform",
    "openAI4Models": "",
    "anthropic3Models": "",
    "google2Models": "",
    "mistral3Models": "",
    "modelText8": "Free",
    "modelText15": "Output",
    "modelText17": "Free",
    "input1MText6": "",
    "output1MText6": ""
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "model",
    "header": "Model"
  },
  {
    "accessorKey": "input1M",
    "header": "Input / 1M"
  },
  {
    "accessorKey": "output1M",
    "header": "Output / 1M"
  },
  {
    "accessorKey": "details",
    "header": "Details"
  },
  {
    "accessorKey": "openAI4Models",
    "header": "OpenAI4 models"
  },
  {
    "accessorKey": "anthropic3Models",
    "header": "Anthropic3 models"
  },
  {
    "accessorKey": "google2Models",
    "header": "Google2 models"
  },
  {
    "accessorKey": "mistral3Models",
    "header": "Mistral3 models"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchModelsOrProviders || '').toLowerCase()
  const keys = ["model","input1M","output1M","details","openAI4Models","anthropic3Models","google2Models","mistral3Models"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/model-pricing">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Model pricing</h1>
              <p class="text-muted max-w-2xl text-sm">Compare model capabilities and token pricing before choosing a workspace default.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" to="/ai-chat/billing">
                Manage billing
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Refresh prices" type="button" @click="openAction(&quot;Refresh prices&quot;)">
                <UIcon name="i-lucide-refresh-cw" class="size-4" />
                Refresh prices
              </UButton>
            </div>
          </div>
          <section class="bg-(--ui-bg-muted)/25 border-y px-5 py-5 sm:px-6 border-default">
            <div class="min-w-0">
              <div class="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p class="text-sm font-medium">Developer plan</p>
                  <p class="text-muted mt-0.5 text-xs">Credits shared by 3 active projects</p>
                </div>
                <p class="text-sm font-semibold tabular-nums text-highlighted">
                  $156.86
                  <span class="text-muted font-normal">available</span>
                </p>
              </div>
              <div class="bg-muted mt-4 h-1.5 overflow-hidden rounded-full">
                <div class="bg-primary h-full w-[72%] rounded-full" />
              </div>
              <div class="text-muted mt-2 flex justify-between text-[11px] tabular-nums">
                <span>$403.14 used this cycle</span>
                <span>$560.00 limit</span>
              </div>
            </div>
          </section>
          <section aria-label="Catalog controls" class="space-y-4">
            <div class="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div class="relative min-w-0 flex-1">
                <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <UInput v-model="form.searchModelsOrProviders" type="text" placeholder="Search models or providers" aria-label="Search model pricing" name="searchModelsOrProviders" class="flex h-9 w-full rounded-md text-base md:text-sm pl-9" :ui="{ base: 'h-full' }" />
              </div>
              <div class="flex min-w-0 gap-2">
                <USelect v-model="form.allProviders" :items="allProvidersOptions" aria-label="Provider" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 flex-1" />
                <USelect v-model="form.recommended" :items="recommendedOptions" aria-label="Sort models" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 flex-1" />
              </div>
            </div>
            <div class="bg-(--ui-bg-muted)/60 flex w-full gap-1 overflow-x-auto rounded-lg p-1 sm:w-fit">
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors bg-default text-highlighted shadow-sm" aria-label="All" type="button" @click="openAction(&quot;All&quot;)">
                All
              </UButton>
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Featured" type="button" @click="openAction(&quot;Featured&quot;)">
                Featured
              </UButton>
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Free" type="button" @click="openAction(&quot;Free&quot;)">
                Free
              </UButton>
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="On sale" type="button" @click="openAction(&quot;On sale&quot;)">
                On sale
              </UButton>
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Reasoning" type="button" @click="openAction(&quot;Reasoning&quot;)">
                Reasoning
              </UButton>
              <UButton color="neutral" variant="ghost" class="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Fast" type="button" @click="openAction(&quot;Fast&quot;)">
                Fast
              </UButton>
            </div>
          </section>
          <section aria-label="Models">
            <div class="overflow-x-auto">
              <!-- Table 1: Model / Input / 1M / Output / 1M / Details / OpenAI4 models / Anthropic3 models / Google2 models / Mistral3 models -->
              <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full text-left text-sm whitespace-nowrap" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #model-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Model" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #model-cell="{ row }">
                  <template v-if="row.original.modelGroup === '0'">
                    <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented block w-full min-w-0 rounded-sm text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="openai/gpt-4.1DefaultFeaturedBalanced model for complex instructions and tool-driven work.Input$2.00Output$8.00" type="button" @click="openAction(&quot;openai/gpt-4.1DefaultFeaturedBalanced model for complex instructions and tool-driven work.Input$2.00Output$8.00&quot;, row.original._id, 1)">
                      <span class="flex min-w-0 flex-wrap items-center gap-2">
                        <span class="truncate font-mono text-[13px] font-medium">openai/gpt-4.1</span>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 gap-1 text-[10px] border-default">
                          <UIcon name="i-lucide-check" class="size-3" />
                          Default
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] border-default">Featured</div>
                      </span>
                      <span class="text-muted mt-1 block truncate text-xs">Balanced model for complex instructions and tool-driven work.</span>
                      <span class="text-muted mt-3 grid max-w-64 grid-cols-2 gap-5 text-xs tabular-nums md:hidden">
                        <span>
                          Input
                          <strong class="text-highlighted font-medium">$2.00</strong>
                        </span>
                        <span>
                          Output
                          <strong class="text-highlighted font-medium">$8.00</strong>
                        </span>
                      </span>
                    </UButton>
                  </template>
                  <template v-if="row.original.modelGroup === '1'">
                    <div class="grid gap-6 px-5 py-5 whitespace-normal sm:px-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                      <dl class="grid gap-x-6 gap-y-5 sm:grid-cols-3 xl:grid-cols-[repeat(4,minmax(0,1fr))_minmax(140px,1.5fr)_auto]">
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Input</dt>
                          <dd class="mt-1 text-sm font-medium tabular-nums">$2.00 / 1M</dd>
                        </div>
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Output</dt>
                          <dd class="mt-1 text-sm font-medium tabular-nums">$8.00 / 1M</dd>
                        </div>
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Cached read</dt>
                          <dd class="mt-1 text-sm font-medium tabular-nums">$0.50 / 1M</dd>
                        </div>
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Context</dt>
                          <dd class="mt-1 text-sm font-medium">1M tokens</dd>
                        </div>
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Availability</dt>
                          <dd class="mt-1 text-sm font-medium">Available to all projects</dd>
                        </div>
                        <div>
                          <dt class="text-muted text-[11px] font-medium tracking-wide uppercase">Capabilities</dt>
                          <dd class="mt-1 flex items-center gap-3">
                            <span aria-label="Reasoning" class="text-muted hover:text-highlighted focus-visible:ring-accented inline-flex rounded-sm py-1 focus-visible:ring-2 focus-visible:outline-none">
                              <UIcon name="i-lucide-brain-circuit" class="size-4" />
                            </span>
                            <span aria-label="Vision" class="text-muted hover:text-highlighted focus-visible:ring-accented inline-flex rounded-sm py-1 focus-visible:ring-2 focus-visible:outline-none">
                              <UIcon name="i-lucide-eye" class="size-4" />
                            </span>
                            <span aria-label="Tools" class="text-muted hover:text-highlighted focus-visible:ring-accented inline-flex rounded-sm py-1 focus-visible:ring-2 focus-visible:outline-none">
                              <UIcon name="i-lucide-wrench" class="size-4" />
                            </span>
                          </dd>
                        </div>
                      </dl>
                      <div class="flex items-center xl:border-l xl:pl-6 border-default">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Current default" type="button" disabled @click="openAction(&quot;Current default&quot;, row.original._id, 1)">
                          Current default
                        </UButton>
                      </div>
                    </div>
                  </template>
                  <template v-if="row.original.modelGroup === '2'">
                    <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented block w-full min-w-0 rounded-sm text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="openai/o3FeaturedDeep reasoning for difficult analysis and agent planning.Input$2.00Output$8.00" type="button" @click="openAction(&quot;openai/o3FeaturedDeep reasoning for difficult analysis and agent planning.Input$2.00Output$8.00&quot;, row.original._id, 1)">
                      <span class="flex min-w-0 flex-wrap items-center gap-2">
                        <span class="truncate font-mono text-[13px] font-medium">{{ row.original.modelText6 }}</span>
                        <div :class="row.original.modelClass7">{{ row.original.modelText8 }}</div>
                      </span>
                      <span class="text-muted mt-1 block truncate text-xs">{{ row.original.modelText10 }}</span>
                      <span class="text-muted mt-3 grid max-w-64 grid-cols-2 gap-5 text-xs tabular-nums md:hidden">
                        <span>
                          Input
                          <strong class="text-highlighted font-medium">{{ row.original.modelText14 }}</strong>
                        </span>
                        <span>
                          Output
                          <strong class="text-highlighted font-medium">{{ row.original.modelText17 }}</strong>
                        </span>
                      </span>
                    </UButton>
                  </template>
                  <template v-if="row.original.modelGroup === '3'">
                    <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented block w-full min-w-0 rounded-sm text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="openai/gpt-4.1-mini−20%Fast, efficient model for high-volume product workloads.Input$0.40Output$1.60" type="button" @click="openAction(&quot;openai/gpt-4.1-mini−20%Fast, efficient model for high-volume product workloads.Input$0.40Output$1.60&quot;, row.original._id, 1)">
                      <span class="flex min-w-0 flex-wrap items-center gap-2">
                        <span class="truncate font-mono text-[13px] font-medium">{{ row.original.modelText6 }}</span>
                        <div class="inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-primary/80 border-0 bg-warning/12 text-[10px] text-warning shadow-none dark:text-warning">−20%</div>
                      </span>
                      <span class="text-muted mt-1 block truncate text-xs">{{ row.original.modelText12 }}</span>
                      <span class="text-muted mt-3 grid max-w-64 grid-cols-2 gap-5 text-xs tabular-nums md:hidden">
                        <span>
                          Input
                          <strong class="text-highlighted font-medium">{{ row.original.modelText16 }}</strong>
                        </span>
                        <span>
                          Output
                          <strong class="text-highlighted font-medium">{{ row.original.modelText19 }}</strong>
                        </span>
                      </span>
                    </UButton>
                  </template>
                  <template v-if="row.original.modelGroup === '4'">
                    <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented block w-full min-w-0 rounded-sm text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="openai/o4-miniCompact reasoning model optimized for throughput.Input$1.10Output$4.40" type="button" @click="openAction(&quot;openai/o4-miniCompact reasoning model optimized for throughput.Input$1.10Output$4.40&quot;, row.original._id, 1)">
                      <span class="flex min-w-0 flex-wrap items-center gap-2">
                        <span class="truncate font-mono text-[13px] font-medium">{{ row.original.modelText6 }}</span>
                      </span>
                      <span class="text-muted mt-1 block truncate text-xs">{{ row.original.modelText8 }}</span>
                      <span class="text-muted mt-3 grid max-w-64 grid-cols-2 gap-5 text-xs tabular-nums md:hidden">
                        <span>
                          Input
                          <strong class="text-highlighted font-medium">{{ row.original.modelText12 }}</strong>
                        </span>
                        <span>
                          Output
                          <strong class="text-highlighted font-medium">{{ row.original.modelText15 }}</strong>
                        </span>
                      </span>
                    </UButton>
                  </template>
                </template>
                <template #input1M-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Input / 1M" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #input1M-cell="{ row }">
                  <template v-if="row.original.input1MGroup === '0'">
                    <span class="flex flex-col items-end gap-0.5">
                      <span>{{ row.original.input1M }}</span>
                    </span>
                  </template>
                  <template v-if="row.original.input1MGroup === '1'">

                  </template>
                  <template v-if="row.original.input1MGroup === '2'">
                    <span class="flex flex-col items-end gap-0.5">
                      <span>{{ row.original.input1MText3 }}</span>
                      <span class="text-muted text-[10px] line-through">${{ row.original.input1MText6 }}</span>
                    </span>
                  </template>
                </template>
                <template #output1M-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Output / 1M" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #output1M-cell="{ row }">
                  <template v-if="row.original.output1MGroup === '0'">
                    <span class="flex flex-col items-end gap-0.5">
                      <span>{{ row.original.output1M }}</span>
                    </span>
                  </template>
                  <template v-if="row.original.output1MGroup === '1'">

                  </template>
                  <template v-if="row.original.output1MGroup === '2'">
                    <span class="flex flex-col items-end gap-0.5">
                      <span>{{ row.original.output1MText3 }}</span>
                      <span class="text-muted text-[10px] line-through">${{ row.original.output1MText6 }}</span>
                    </span>
                  </template>
                </template>
                <template #details-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Details" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #details-cell="{ row }">
                  <template v-if="row.original.detailsGroup === '0'">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.detailsArialabel3" type="button" @click="openAction(&quot;Close GPT-4.1 details&quot;, row.original._id, 1)">
                      <UIcon name="i-lucide-chevron-down" :class="row.original.detailsClass5 || 'size-4'" />
                    </UButton>
                  </template>
                  <template v-if="row.original.detailsGroup === '1'">

                  </template>
                </template>
                <template #openAI4Models-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="OpenAI4 models" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #openAI4Models-cell="{ row }">

                </template>
                <template #anthropic3Models-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Anthropic3 models" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #anthropic3Models-cell="{ row }">

                </template>
                <template #google2Models-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Google2 models" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #google2Models-cell="{ row }">

                </template>
                <template #mistral3Models-header="{ column }">
                  <UButton color="neutral" variant="ghost" size="xs" label="Mistral3 models" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                </template>
                <template #mistral3Models-cell="{ row }">

                </template>
              </UTable>
            </div>
          </section>
          <p class="text-muted pb-2 text-center text-[11px]">Illustrative demo catalog. Prices and availability are not live provider data.</p>
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
