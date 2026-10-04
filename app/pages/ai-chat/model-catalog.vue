<!-- Page: /ai-chat/model-catalog | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Model catalog · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchModelsOrProviders": "",
  "field25": "25"
})

const field25Options = [
  "25",
  "50",
  "100"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "model": "glm-5.3-flashxZ.ai·Text",
    "modelTitle5": "zai/glm-5.3-flashx",
    "modelText6": "glm-5.3-flashx",
    "modelText8": "Z.ai",
    "modelText11": "Text",
    "modelArialabel13": "Copy zai/glm-5.3-flashx",
    "input": "$0.37/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.37/M",
    "output": "$1.25/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$1.25/M",
    "latency": "3.0 s",
    "providers": "Z.ai",
    "providersGroup": "0",
    "providersText5": "Z.ai",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "—",
    "noTrainingGroup": "0",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, Reasoning+2",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "2",
    "released": "09/18/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "2",
    "model": "qwen3.8-omni-flashAlibaba·Text",
    "modelTitle5": "alibaba/qwen3.8-omni-flash",
    "modelText6": "qwen3.8-omni-flash",
    "modelText8": "Alibaba",
    "modelText11": "Text",
    "modelArialabel13": "Copy alibaba/qwen3.8-omni-flash",
    "input": "$0.15/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.15/M",
    "output": "$0.47/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$0.47/M",
    "latency": "3.7 s",
    "providers": "Alibaba",
    "providersGroup": "0",
    "providersText5": "Alibaba",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Vision, Reasoning+2",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "2",
    "released": "09/17/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "3",
    "model": "gemini-3.8-liveGoogle·Audio",
    "modelTitle5": "google/gemini-3.8-live",
    "modelText6": "gemini-3.8-live",
    "modelText8": "Google",
    "modelText11": "Audio",
    "modelArialabel13": "Copy google/gemini-3.8-live",
    "input": "$0.75/M+2 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$0.75/M",
    "output": "$4.50/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$4.50/M",
    "latency": "—",
    "providers": "Google",
    "providersGroup": "0",
    "providersText5": "Google",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Audio",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Audio",
    "capabilitiesText8": "",
    "released": "09/15/2026",
    "inputText7": "2 more",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "4",
    "model": "gemini-3.8-live-extended-thinkingGoogle·Audio",
    "modelTitle5": "google/gemini-3.8-live-extended-thinking",
    "modelText6": "gemini-3.8-live-extended-thinking",
    "modelText8": "Google",
    "modelText11": "Audio",
    "modelArialabel13": "Copy google/gemini-3.8-live-extended-thinking",
    "input": "$0.75/M+2 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$0.75/M",
    "output": "$4.50/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$4.50/M",
    "latency": "—",
    "providers": "Google",
    "providersGroup": "0",
    "providersText5": "Google",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Audio",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Audio",
    "capabilitiesText8": "",
    "released": "09/15/2026",
    "inputText7": "2 more",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "5",
    "model": "jevTypesafe-ai·Evaluation",
    "modelTitle5": "typesafe-ai/jev",
    "modelText6": "jev",
    "modelText8": "Typesafe-ai",
    "modelText11": "Evaluation",
    "modelArialabel13": "Copy typesafe-ai/jev",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "—",
    "providers": "Typesafe-ai",
    "providersGroup": "0",
    "providersText5": "Typesafe-ai",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Evaluation",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Evaluation",
    "capabilitiesText8": "",
    "released": "09/15/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "6",
    "model": "fugu-ultra-v2Sakana·Text",
    "modelTitle5": "sakana/fugu-ultra-v2",
    "modelText6": "fugu-ultra-v2",
    "modelText8": "Sakana",
    "modelText11": "Text",
    "modelArialabel13": "Copy sakana/fugu-ultra-v2",
    "input": "$5/M+1 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$5/M",
    "output": "$30/M+1 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$30/M",
    "latency": "4.4 s",
    "providers": "Sakana",
    "providersGroup": "0",
    "providersText5": "Sakana",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, Reasoning+2",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "2",
    "released": "09/10/2026",
    "inputText7": "1 more",
    "outputText7": "1 more",
    "providersText8": ""
  },
  {
    "_id": "7",
    "model": "fugu-maxSakana·Text",
    "modelTitle5": "sakana/fugu-max",
    "modelText6": "fugu-max",
    "modelText8": "Sakana",
    "modelText11": "Text",
    "modelArialabel13": "Copy sakana/fugu-max",
    "input": "$2/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$2/M",
    "output": "$6/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$6/M",
    "latency": "3.8 s",
    "providers": "Sakana",
    "providersGroup": "0",
    "providersText5": "Sakana",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, Reasoning+2",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "2",
    "released": "09/10/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "8",
    "model": "gpt-live-1OpenAI·Audio",
    "modelTitle5": "openai/gpt-live-1",
    "modelText6": "gpt-live-1",
    "modelText8": "OpenAI",
    "modelText11": "Audio",
    "modelArialabel13": "Copy openai/gpt-live-1",
    "input": "$3.00/hr",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$3.00/hr",
    "output": "$10/K",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$10/K",
    "latency": "—",
    "providers": "OpenAI",
    "providersGroup": "0",
    "providersText5": "OpenAI",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Audio",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Audio",
    "capabilitiesText8": "",
    "released": "09/10/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "9",
    "model": "ling-3.0-flash-vlInclusionai·Text",
    "modelTitle5": "inclusionai/ling-3.0-flash-vl",
    "modelText6": "ling-3.0-flash-vl",
    "modelText8": "Inclusionai",
    "modelText11": "Text",
    "modelArialabel13": "Copy inclusionai/ling-3.0-flash-vl",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "0.7 s",
    "providers": "Novita",
    "providersGroup": "0",
    "providersText5": "Novita",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Vision, Reasoning+1",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "1",
    "released": "09/08/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "10",
    "model": "ling-3.0-flash-vl-freeInclusionai·Text",
    "modelTitle5": "inclusionai/ling-3.0-flash-vl-free",
    "modelText6": "ling-3.0-flash-vl-free",
    "modelText8": "Inclusionai",
    "modelText11": "Text",
    "modelArialabel13": "Copy inclusionai/ling-3.0-flash-vl-free",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "0.7 s",
    "providers": "Novita",
    "providersGroup": "0",
    "providersText5": "Novita",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Vision, Reasoning+1",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "1",
    "released": "09/08/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "11",
    "model": "mercury-2.5Inception·Text",
    "modelTitle5": "inception/mercury-2.5",
    "modelText6": "mercury-2.5",
    "modelText8": "Inception",
    "modelText11": "Text",
    "modelArialabel13": "Copy inception/mercury-2.5",
    "input": "$0.04/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.04/M",
    "output": "$0.15/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$0.15/M",
    "latency": "1.7 s",
    "providers": "Inception",
    "providersGroup": "0",
    "providersText5": "Inception",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Reasoning, Tool Use+1",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "1",
    "released": "09/08/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "12",
    "model": "deepseek-v4.1-flashDeepSeek·Text",
    "modelTitle5": "deepseek/deepseek-v4.1-flash",
    "modelText6": "deepseek-v4.1-flash",
    "modelText8": "DeepSeek",
    "modelText11": "Text",
    "modelArialabel13": "Copy deepseek/deepseek-v4.1-flash",
    "input": "$0.15/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.15/M",
    "output": "$0.60/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$0.60/M",
    "latency": "0.4 s",
    "providers": "Alibaba+15",
    "providersGroup": "1",
    "providersText5": "Alibaba",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, Reasoning+2",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, Reasoning",
    "capabilitiesText8": "2",
    "released": "09/08/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": "15"
  },
  {
    "_id": "13",
    "model": "gpt-image-2.5-sunburstOpenAI·Image",
    "modelTitle5": "openai/gpt-image-2.5-sunburst",
    "modelText6": "gpt-image-2.5-sunburst",
    "modelText8": "OpenAI",
    "modelText11": "Image",
    "modelArialabel13": "Copy openai/gpt-image-2.5-sunburst",
    "input": "$5/M+1 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$5/M",
    "output": "$30/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$30/M",
    "latency": "—",
    "providers": "OpenAI",
    "providersGroup": "0",
    "providersText5": "OpenAI",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Image generation, Implicit Caching",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Image generation, Implicit Caching",
    "capabilitiesText8": "",
    "released": "09/08/2026",
    "inputText7": "1 more",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "14",
    "model": "gpt-image-2.5-flareOpenAI·Image",
    "modelTitle5": "openai/gpt-image-2.5-flare",
    "modelText6": "gpt-image-2.5-flare",
    "modelText8": "OpenAI",
    "modelText11": "Image",
    "modelArialabel13": "Copy openai/gpt-image-2.5-flare",
    "input": "$5/M+1 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$5/M",
    "output": "$30/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$30/M",
    "latency": "—",
    "providers": "OpenAI",
    "providersGroup": "0",
    "providersText5": "OpenAI",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Image generation, Implicit Caching",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Image generation, Implicit Caching",
    "capabilitiesText8": "",
    "released": "09/08/2026",
    "inputText7": "1 more",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "15",
    "model": "ling-3.0-flash-santeInclusionai·Text",
    "modelTitle5": "inclusionai/ling-3.0-flash-sante",
    "modelText6": "ling-3.0-flash-sante",
    "modelText8": "Inclusionai",
    "modelText11": "Text",
    "modelArialabel13": "Copy inclusionai/ling-3.0-flash-sante",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "0.8 s",
    "providers": "Novita",
    "providersGroup": "0",
    "providersText5": "Novita",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Reasoning, Tool Use",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "",
    "released": "09/04/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "16",
    "model": "ling-3.0-flash-sante-freeInclusionai·Text",
    "modelTitle5": "inclusionai/ling-3.0-flash-sante-free",
    "modelText6": "ling-3.0-flash-sante-free",
    "modelText8": "Inclusionai",
    "modelText11": "Text",
    "modelArialabel13": "Copy inclusionai/ling-3.0-flash-sante-free",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "0.8 s",
    "providers": "Novita",
    "providersGroup": "0",
    "providersText5": "Novita",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Reasoning, Tool Use",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "",
    "released": "09/04/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "17",
    "model": "gpt-6-astraOpenAI·Text",
    "modelTitle5": "openai/gpt-6-astra",
    "modelText6": "gpt-6-astra",
    "modelText8": "OpenAI",
    "modelText11": "Text",
    "modelArialabel13": "Copy openai/gpt-6-astra",
    "input": "$10/M+2 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$10/M",
    "output": "$50/M+3 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$50/M",
    "latency": "2.6 s",
    "providers": "Azure+1",
    "providersGroup": "1",
    "providersText5": "Azure",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, File Input+6",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, File Input",
    "capabilitiesText8": "6",
    "released": "09/04/2026",
    "inputText7": "2 more",
    "outputText7": "3 more",
    "providersText8": "1"
  },
  {
    "_id": "18",
    "model": "gpt-6-astra-fastOpenAI·Text",
    "modelTitle5": "openai/gpt-6-astra-fast",
    "modelText6": "gpt-6-astra-fast",
    "modelText8": "OpenAI",
    "modelText11": "Text",
    "modelArialabel13": "Copy openai/gpt-6-astra-fast",
    "input": "$20/M+1 more",
    "inputGroup": "1",
    "inputClass3": "",
    "inputText4": "$20/M",
    "output": "$100/M+2 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$100/M",
    "latency": "2.0 s",
    "providers": "OpenAI",
    "providersGroup": "0",
    "providersText5": "OpenAI",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, File Input+6",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, File Input",
    "capabilitiesText8": "6",
    "released": "09/04/2026",
    "inputText7": "1 more",
    "outputText7": "2 more",
    "providersText8": ""
  },
  {
    "_id": "19",
    "model": "gemini-3.8-flashGoogle·Text",
    "modelTitle5": "google/gemini-3.8-flash",
    "modelText6": "gemini-3.8-flash",
    "modelText8": "Google",
    "modelText11": "Text",
    "modelArialabel13": "Copy google/gemini-3.8-flash",
    "input": "$0.75/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.75/M",
    "output": "$3.75/M+2 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$3.75/M",
    "latency": "1.5 s",
    "providers": "Google+1",
    "providersGroup": "1",
    "providersText5": "Google",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, File Input+4",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, File Input",
    "capabilitiesText8": "4",
    "released": "09/02/2026",
    "inputText7": "",
    "outputText7": "2 more",
    "providersText8": "1"
  },
  {
    "_id": "20",
    "model": "glm-5.3-fastZ.ai·Text",
    "modelTitle5": "zai/glm-5.3-fast",
    "modelText6": "glm-5.3-fast",
    "modelText8": "Z.ai",
    "modelText11": "Text",
    "modelArialabel13": "Copy zai/glm-5.3-fast",
    "input": "$2.10/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$2.10/M",
    "output": "$6.60/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$6.60/M",
    "latency": "0.3 s",
    "providers": "Baseten",
    "providersGroup": "0",
    "providersText5": "Baseten",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Reasoning, Tool Use+1",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "1",
    "released": "09/02/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "21",
    "model": "qwen3.8-max-0902Alibaba·Text",
    "modelTitle5": "alibaba/qwen3.8-max-0902",
    "modelText6": "qwen3.8-max-0902",
    "modelText8": "Alibaba",
    "modelText11": "Text",
    "modelArialabel13": "Copy alibaba/qwen3.8-max-0902",
    "input": "$2/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$2/M",
    "output": "$6/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$6/M",
    "latency": "1.2 s",
    "providers": "Alibaba",
    "providersGroup": "0",
    "providersText5": "Alibaba",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, File Input+4",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, File Input",
    "capabilitiesText8": "4",
    "released": "09/01/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "22",
    "model": "claude-fable-5.1Anthropic·Text",
    "modelTitle5": "anthropic/claude-fable-5.1",
    "modelText6": "claude-fable-5.1",
    "modelText8": "Anthropic",
    "modelText11": "Text",
    "modelArialabel13": "Copy anthropic/claude-fable-5.1",
    "input": "$10/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$10/M",
    "output": "$50/M+1 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$50/M",
    "latency": "1.2 s",
    "providers": "Anthropic+2",
    "providersGroup": "1",
    "providersText5": "Anthropic",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Vision, File Input+3",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Vision, File Input",
    "capabilitiesText8": "3",
    "released": "08/31/2026",
    "inputText7": "",
    "outputText7": "1 more",
    "providersText8": "2"
  },
  {
    "_id": "23",
    "model": "hy4-previewTencent·Text",
    "modelTitle5": "tencent/hy4-preview",
    "modelText6": "hy4-preview",
    "modelText8": "Tencent",
    "modelText11": "Text",
    "modelArialabel13": "Copy tencent/hy4-preview",
    "input": "$0.83/M",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "$0.83/M",
    "output": "$2.50/M",
    "outputGroup": "0",
    "outputClass3": "",
    "outputText4": "$2.50/M",
    "latency": "3.2 s",
    "providers": "Tencent",
    "providersGroup": "0",
    "providersText5": "Tencent",
    "zDR": "—",
    "zDRGroup": "0",
    "noTraining": "—",
    "noTrainingGroup": "0",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Reasoning, Tool Use+1",
    "capabilitiesGroup": "0",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "1",
    "released": "08/28/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": ""
  },
  {
    "_id": "24",
    "model": "wan-v3.0-video-primeAlibaba·Video",
    "modelTitle5": "alibaba/wan-v3.0-video-prime",
    "modelText6": "wan-v3.0-video-prime",
    "modelText8": "Alibaba",
    "modelText11": "Video",
    "modelArialabel13": "Copy alibaba/wan-v3.0-video-prime",
    "input": "—",
    "inputGroup": "0",
    "inputClass3": "",
    "inputText4": "—",
    "output": "$0.07/sec+3 more",
    "outputGroup": "1",
    "outputClass3": "",
    "outputText4": "$0.07/sec",
    "latency": "—",
    "providers": "Alibaba",
    "providersGroup": "0",
    "providersText5": "Alibaba",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "—",
    "freeTierGroup": "0",
    "capabilities": "Video generation, Vision",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Video generation, Vision",
    "capabilitiesText8": "",
    "released": "08/28/2026",
    "inputText7": "",
    "outputText7": "3 more",
    "providersText8": ""
  },
  {
    "_id": "25",
    "model": "ling-3.0-flash-finInclusionai·Text",
    "modelTitle5": "inclusionai/ling-3.0-flash-fin",
    "modelText6": "ling-3.0-flash-fin",
    "modelText8": "Inclusionai",
    "modelText11": "Text",
    "modelArialabel13": "Copy inclusionai/ling-3.0-flash-fin",
    "input": "Free",
    "inputGroup": "0",
    "inputClass3": "text-success dark:text-success",
    "inputText4": "Free",
    "output": "Free",
    "outputGroup": "0",
    "outputClass3": "text-success dark:text-success",
    "outputText4": "Free",
    "latency": "0.3 s",
    "providers": "DeepInfra+1",
    "providersGroup": "1",
    "providersText5": "DeepInfra",
    "zDR": "",
    "zDRGroup": "1",
    "noTraining": "",
    "noTrainingGroup": "1",
    "freeTier": "",
    "freeTierGroup": "1",
    "capabilities": "Reasoning, Tool Use",
    "capabilitiesGroup": "1",
    "capabilitiesText5": "Reasoning, Tool Use",
    "capabilitiesText8": "",
    "released": "08/27/2026",
    "inputText7": "",
    "outputText7": "",
    "providersText8": "1"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "model",
    "header": "Model"
  },
  {
    "accessorKey": "input",
    "header": "Input"
  },
  {
    "accessorKey": "output",
    "header": "Output"
  },
  {
    "accessorKey": "latency",
    "header": "Latency"
  },
  {
    "accessorKey": "providers",
    "header": "Providers"
  },
  {
    "accessorKey": "zDR",
    "header": "ZDR"
  },
  {
    "accessorKey": "noTraining",
    "header": "No training"
  },
  {
    "accessorKey": "freeTier",
    "header": "Free tier"
  },
  {
    "accessorKey": "capabilities",
    "header": "Capabilities"
  },
  {
    "accessorKey": "released",
    "header": "Released"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchModelsOrProviders || '').toLowerCase()
  const keys = ["model","input","output","latency","providers","zDR","noTraining","freeTier","capabilities","released"] as const
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["model","input","output","latency","providers","zDR","noTraining","freeTier","capabilities","released"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-model-catalog.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/model-catalog">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex w-full max-w-[1700px] flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <header class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Model catalog</h1>
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 tabular-nums border-default">376</div>
              </div>
              <p class="text-muted mt-1.5 text-sm">Find the right model for your next conversation, workflow, or agent.</p>
            </div>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export catalog" type="button" @click="exportCsv()">
              <UIcon name="i-lucide-download" class="size-3.5" />
              Export catalog
            </UButton>
          </header>
          <section aria-label="Model catalog" class="min-w-0">
            <nav aria-label="Model category" class="flex gap-5 overflow-x-auto border-b border-default">
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors border-(--ui-text-highlighted) font-medium" aria-label="All376" type="button" @click="openAction(&quot;All376&quot;)">
                All
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">376</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Text250" type="button" @click="openAction(&quot;Text250&quot;)">
                Text
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">250</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Image36" type="button" @click="openAction(&quot;Image36&quot;)">
                Image
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">36</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Video34" type="button" @click="openAction(&quot;Video34&quot;)">
                Video
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">34</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Audio22" type="button" @click="openAction(&quot;Audio22&quot;)">
                Audio
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">22</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Retrieval29" type="button" @click="openAction(&quot;Retrieval29&quot;)">
                Retrieval
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">29</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Evaluation1" type="button" @click="openAction(&quot;Evaluation1&quot;)">
                Evaluation
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">1</span>
              </UButton>
              <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 px-0.5 pt-1 pb-3 text-sm transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Tools4" type="button" @click="openAction(&quot;Tools4&quot;)">
                Tools
                <span class="text-muted ml-1.5 text-[11px] tabular-nums">4</span>
              </UButton>
            </nav>
            <div class="flex flex-wrap items-center gap-2 py-4">
              <div class="relative w-full sm:w-64">
                <UIcon name="i-lucide-search" class="text-muted absolute top-2.5 left-2.5 size-3.5" />
                <UInput v-model="form.searchModelsOrProviders" type="text" placeholder="Search models or providers…" aria-label="Search models" name="searchModelsOrProviders" class="flex w-full rounded-md md:text-sm h-9 pl-8 text-sm" :ui="{ base: 'h-full' }" />
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Developers" type="button" @click="openAction(&quot;Developers&quot;)">
                Developers
                <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5" />
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Capabilities" type="button" @click="openAction(&quot;Capabilities&quot;)">
                Capabilities
                <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5" />
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Privacy &amp; access" type="button" @click="openAction(&quot;Privacy & access&quot;)">
                Privacy &amp; access
                <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5" />
              </UButton>
              <div class="ml-auto">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Columns" type="button" @click="openAction(&quot;Columns&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Columns
                </UButton>
              </div>
            </div>
            <div class="overflow-hidden rounded-lg border [&amp;&gt;div]:max-h-[calc(100svh-330px)] [&amp;&gt;div]:min-h-64 border-default">
              <div class="relative w-full overflow-auto">
                <!-- Table 1: Model / Input / Output / Latency / Providers / ZDR / No training / Free tier / Capabilities / Released -->
                <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm table-fixed" style="min-width:1393px" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #model-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Model" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #model-cell="{ row }">
                    <div class="group/model flex items-center gap-2.5">
                      <UButton color="neutral" variant="ghost" class="min-w-0 flex-1 text-left focus-visible:underline focus-visible:outline-none" aria-label="glm-5.3-flashxZ.ai·Text" type="button" @click="openAction(&quot;glm-5.3-flashxZ.ai·Text&quot;, row.original._id, 1)">
                        <span class="block truncate font-medium" :title="row.original.modelTitle5">{{ row.original.modelText6 }}</span>
                        <span class="text-muted mt-0.5 block text-[11px]">
                          {{ row.original.modelText8 }}
                          <span class="px-1.5">·</span>
                          {{ row.original.modelText11 }}
                        </span>
                      </UButton>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 shrink-0 opacity-0 group-hover/model:opacity-100 focus-visible:opacity-100" :aria-label="row.original.modelArialabel13" type="button" @click="copyValue(&quot;Copy zai/glm-5.3-flashx&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3" />
                      </UButton>
                    </div>
                  </template>
                  <template #input-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Input" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #input-cell="{ row }">
                    <template v-if="row.original.inputGroup === '0'">
                      <div class="text-right tabular-nums">
                        <span :class="row.original.inputClass3">{{ row.original.input }}</span>
                      </div>
                    </template>
                    <template v-if="row.original.inputGroup === '1'">
                      <div class="text-right tabular-nums">
                        <span class="">{{ row.original.inputText4 }}</span>
                        <span class="text-muted mt-0.5 block text-[10px]">+{{ row.original.inputText7 }}</span>
                      </div>
                    </template>
                  </template>
                  <template #output-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Output" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #output-cell="{ row }">
                    <template v-if="row.original.outputGroup === '0'">
                      <div class="text-right tabular-nums">
                        <span :class="row.original.outputClass3">{{ row.original.output }}</span>
                      </div>
                    </template>
                    <template v-if="row.original.outputGroup === '1'">
                      <div class="text-right tabular-nums">
                        <span class="">{{ row.original.outputText4 }}</span>
                        <span class="text-muted mt-0.5 block text-[10px]">+{{ row.original.outputText7 }}</span>
                      </div>
                    </template>
                  </template>
                  <template #latency-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Latency" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #latency-cell="{ row }">
                    <span class="block text-right tabular-nums">{{ row.original.latency }}</span>
                  </template>
                  <template #providers-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Providers" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #providers-cell="{ row }">
                    <template v-if="row.original.providersGroup === '0'">
                      <span class="flex items-center gap-1.5">
                        <span class="truncate">{{ row.original.providers }}</span>
                      </span>
                    </template>
                    <template v-if="row.original.providersGroup === '1'">
                      <span class="flex items-center gap-1.5">
                        <span class="truncate">{{ row.original.providersText5 }}</span>
                        <span class="text-muted bg-muted rounded px-1 text-[10px]">+{{ row.original.providersText8 }}</span>
                      </span>
                    </template>
                  </template>
                  <template #zDR-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="ZDR" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #zDR-cell="{ row }">
                    <template v-if="row.original.zDRGroup === '0'">
                      <span class="inline-flex p-1" aria-label="Zero data retention eligible: No">
                        <span class="text-(--ui-text-muted)/60">{{ row.original.zDR }}</span>
                      </span>
                    </template>
                    <template v-if="row.original.zDRGroup === '1'">
                      <span class="inline-flex p-1" aria-label="Zero data retention eligible: Yes">
                        <UIcon name="i-lucide-check" class="size-3.5 text-success dark:text-success" />
                      </span>
                    </template>
                  </template>
                  <template #noTraining-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="No training" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #noTraining-cell="{ row }">
                    <template v-if="row.original.noTrainingGroup === '0'">
                      <span class="inline-flex p-1" aria-label="No prompt training eligible: No">
                        <span class="text-(--ui-text-muted)/60">{{ row.original.noTraining }}</span>
                      </span>
                    </template>
                    <template v-if="row.original.noTrainingGroup === '1'">
                      <span class="inline-flex p-1" aria-label="No prompt training eligible: Yes">
                        <UIcon name="i-lucide-check" class="size-3.5 text-success dark:text-success" />
                      </span>
                    </template>
                  </template>
                  <template #freeTier-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Free tier" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #freeTier-cell="{ row }">
                    <template v-if="row.original.freeTierGroup === '0'">
                      <span class="inline-flex p-1" aria-label="Free tier eligible: No">
                        <span class="text-(--ui-text-muted)/60">{{ row.original.freeTier }}</span>
                      </span>
                    </template>
                    <template v-if="row.original.freeTierGroup === '1'">
                      <span class="inline-flex p-1" aria-label="Free tier eligible: Yes">
                        <UIcon name="i-lucide-check" class="size-3.5 text-success dark:text-success" />
                      </span>
                    </template>
                  </template>
                  <template #capabilities-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Capabilities" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #capabilities-cell="{ row }">
                    <template v-if="row.original.capabilitiesGroup === '0'">
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center gap-1.5 text-left" aria-label="Vision, Reasoning+2" type="button" @click="openAction(&quot;Vision, Reasoning+2&quot;, row.original._id, 1)">
                        <span class="text-muted truncate text-xs">{{ row.original.capabilitiesText5 }}</span>
                        <span class="text-muted shrink-0 text-[10px]">+{{ row.original.capabilitiesText8 }}</span>
                      </UButton>
                    </template>
                    <template v-if="row.original.capabilitiesGroup === '1'">
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center gap-1.5 text-left" aria-label="Audio" type="button" @click="openAction(&quot;Audio&quot;, row.original._id, 1)">
                        <span class="text-muted truncate text-xs">{{ row.original.capabilities }}</span>
                      </UButton>
                    </template>
                  </template>
                  <template #released-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Released" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #released-cell="{ row }">
                    <span class="text-muted text-xs tabular-nums">{{ row.original.released }}</span>
                  </template>
                </UTable>
              </div>
            </div>
            <footer class="flex flex-wrap items-center justify-between gap-3 py-3 text-xs">
              <p class="text-muted tabular-nums">1–25of 376 models</p>
              <div class="flex items-center gap-4">
                <div class="hidden items-center gap-2 sm:flex">
                  <span class="text-muted">Rows per page</span>
                  <USelect v-model="form.field25" :items="field25Options" aria-label="Rows per page" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-17 text-xs" />
                </div>
                <span class="tabular-nums">Page 1 of16</span>
                <div class="flex gap-1">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="First page" type="button" disabled @click="openAction(&quot;First page&quot;)">
                    <UIcon name="i-lucide-chevrons-left" class="size-3.5" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Previous page" type="button" disabled @click="openAction(&quot;Previous page&quot;)">
                    <UIcon name="i-lucide-chevron-left" class="size-3.5" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Next page" type="button" @click="openAction(&quot;Next page&quot;)">
                    <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-7" aria-label="Last page" type="button" @click="openAction(&quot;Last page&quot;)">
                    <UIcon name="i-lucide-chevrons-right" class="size-3.5" />
                  </UButton>
                </div>
              </div>
            </footer>
            <div class="text-muted flex flex-wrap justify-between gap-2 border-t pt-4 text-[11px] leading-5 border-default">
              <p>Prices retain their billing units. ZDR and no-training eligibility depend on the routing provider.</p>
              <NuxtLink class="decoration-muted-foreground/40 underline underline-offset-4" to="https://vercel.com/ai-gateway/models" external>
                Vercel AI Gateway · Snapshot 19 Sep 2026
              </NuxtLink>
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
