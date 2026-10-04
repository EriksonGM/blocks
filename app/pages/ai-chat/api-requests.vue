<!-- Page: /ai-chat/api-requests | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "API Requests · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "enabled": false,
  "enabled2": false,
  "enabled3": false,
  "searchDataTable": "",
  "allSources": "All sources"
})

const allSourcesOptions = [
  "All sources",
  "Responses",
  "Agents",
  "SDK traces",
  "Realtime",
  "Completions",
  "Conversations",
  "ChatKit"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:30:00",
    "dateArialabel2": "Date details for req_a14e7690-eaf0-4a91",
    "dateText10": "14:30:00",
    "dateArialabel12": "Copy Date for req_a14e7690-eaf0-4a91",
    "requestId": "req_a14e7690-eaf0-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e7690-eaf0-4a91",
    "requestIdArialabel7": "Inspect req_a14e7690-eaf0-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e7690-eaf0-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e7690-eaf0-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e7690-eaf0-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e7690-eaf0-4a91",
    "modelArialabel9": "Copy Model for req_a14e7690-eaf0-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e7690-eaf0-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e7690-eaf0-4a91",
    "latency": "381ms",
    "latencyArialabel2": "Latency details for req_a14e7690-eaf0-4a91",
    "latencyStyle8": "width:4.646341463414634%",
    "latencyText10": "381",
    "latencyArialabel13": "Copy Latency for req_a14e7690-eaf0-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e7690-eaf0-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 357 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.299212598425196%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.7007874015748%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e7690-eaf0-4a91"
  },
  {
    "_id": "2",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:28:55",
    "dateArialabel2": "Date details for req_a14e75e3-eaef-4a91",
    "dateText10": "14:28:55",
    "dateArialabel12": "Copy Date for req_a14e75e3-eaef-4a91",
    "requestId": "req_a14e75e3-eaef-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e75e3-eaef-4a91",
    "requestIdArialabel7": "Inspect req_a14e75e3-eaef-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e75e3-eaef-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e75e3-eaef-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e75e3-eaef-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e75e3-eaef-4a91",
    "modelArialabel9": "Copy Model for req_a14e75e3-eaef-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e75e3-eaef-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e75e3-eaef-4a91",
    "latency": "4,477ms",
    "latencyArialabel2": "Latency details for req_a14e75e3-eaef-4a91",
    "latencyStyle8": "width:54.59756097560976%",
    "latencyText10": "4,477",
    "latencyArialabel13": "Copy Latency for req_a14e75e3-eaef-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e75e3-eaef-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1834 ms, generation 2619 ms",
    "timingPhasesStyle8": "width:0.5360732633459906%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:40.96493187402278%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e75e3-eaef-4a91"
  },
  {
    "_id": "3",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:28:19",
    "dateArialabel2": "Date details for req_a14e7536-eaee-4a91",
    "dateText10": "14:28:19",
    "dateArialabel12": "Copy Date for req_a14e7536-eaee-4a91",
    "requestId": "req_a14e7536-eaee-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e7536-eaee-4a91",
    "requestIdArialabel7": "Inspect req_a14e7536-eaee-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e7536-eaee-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e7536-eaee-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e7536-eaee-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e7536-eaee-4a91",
    "modelArialabel9": "Copy Model for req_a14e7536-eaee-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e7536-eaee-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e7536-eaee-4a91",
    "latency": "4,182ms",
    "latencyArialabel2": "Latency details for req_a14e7536-eaee-4a91",
    "latencyStyle8": "width:51%",
    "latencyText10": "4,182",
    "latencyArialabel13": "Copy Latency for req_a14e7536-eaee-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e7536-eaee-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1758 ms, generation 2400 ms",
    "timingPhasesStyle8": "width:0.5738880918220948%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:42.03730272596843%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e7536-eaee-4a91"
  },
  {
    "_id": "4",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:27:41",
    "dateArialabel2": "Date details for req_a14e7489-eaed-4a91",
    "dateText10": "14:27:41",
    "dateArialabel12": "Copy Date for req_a14e7489-eaed-4a91",
    "requestId": "req_a14e7489-eaed-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e7489-eaed-4a91",
    "requestIdArialabel7": "Inspect req_a14e7489-eaed-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e7489-eaed-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e7489-eaed-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e7489-eaed-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e7489-eaed-4a91",
    "modelArialabel9": "Copy Model for req_a14e7489-eaed-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e7489-eaed-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e7489-eaed-4a91",
    "latency": "3,887ms",
    "latencyArialabel2": "Latency details for req_a14e7489-eaed-4a91",
    "latencyStyle8": "width:47.40243902439024%",
    "latencyText10": "3,887",
    "latencyArialabel13": "Copy Latency for req_a14e7489-eaed-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e7489-eaed-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1682 ms, generation 2181 ms",
    "timingPhasesStyle8": "width:0.6174427579109854%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:43.27244661692822%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e7489-eaed-4a91"
  },
  {
    "_id": "5",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:25:10",
    "dateArialabel2": "Date details for req_a14e73dc-eaec-4a91",
    "dateText10": "14:25:10",
    "dateArialabel12": "Copy Date for req_a14e73dc-eaec-4a91",
    "requestId": "req_a14e73dc-eaec-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e73dc-eaec-4a91",
    "requestIdArialabel7": "Inspect req_a14e73dc-eaec-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e73dc-eaec-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e73dc-eaec-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e73dc-eaec-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e73dc-eaec-4a91",
    "modelArialabel9": "Copy Model for req_a14e73dc-eaec-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e73dc-eaec-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e73dc-eaec-4a91",
    "latency": "317ms",
    "latencyArialabel2": "Latency details for req_a14e73dc-eaec-4a91",
    "latencyStyle8": "width:3.8658536585365852%",
    "latencyText10": "317",
    "latencyArialabel13": "Copy Latency for req_a14e73dc-eaec-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e73dc-eaec-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 293 ms, generation 0 ms",
    "timingPhasesStyle8": "width:7.570977917981073%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:92.42902208201893%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e73dc-eaec-4a91"
  },
  {
    "_id": "6",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:21:16",
    "dateArialabel2": "Date details for req_a14e732f-eaeb-4a91",
    "dateText10": "14:21:16",
    "dateArialabel12": "Copy Date for req_a14e732f-eaeb-4a91",
    "requestId": "req_a14e732f-eaeb-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e732f-eaeb-4a91",
    "requestIdArialabel7": "Inspect req_a14e732f-eaeb-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e732f-eaeb-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e732f-eaeb-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e732f-eaeb-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e732f-eaeb-4a91",
    "modelArialabel9": "Copy Model for req_a14e732f-eaeb-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e732f-eaeb-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e732f-eaeb-4a91",
    "latency": "3,297ms",
    "latencyArialabel2": "Latency details for req_a14e732f-eaeb-4a91",
    "latencyStyle8": "width:40.207317073170735%",
    "latencyText10": "3,297",
    "latencyArialabel13": "Copy Latency for req_a14e732f-eaeb-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e732f-eaeb-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1531 ms, generation 1742 ms",
    "timingPhasesStyle8": "width:0.7279344858962694%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:46.43615407946618%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e732f-eaeb-4a91"
  },
  {
    "_id": "7",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:18:07",
    "dateArialabel2": "Date details for req_a14e7282-eaea-4a91",
    "dateText10": "14:18:07",
    "dateArialabel12": "Copy Date for req_a14e7282-eaea-4a91",
    "requestId": "req_a14e7282-eaea-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e7282-eaea-4a91",
    "requestIdArialabel7": "Inspect req_a14e7282-eaea-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e7282-eaea-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e7282-eaea-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e7282-eaea-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e7282-eaea-4a91",
    "modelArialabel9": "Copy Model for req_a14e7282-eaea-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e7282-eaea-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e7282-eaea-4a91",
    "latency": "3,002ms",
    "latencyArialabel2": "Latency details for req_a14e7282-eaea-4a91",
    "latencyStyle8": "width:36.609756097560975%",
    "latencyText10": "3,002",
    "latencyArialabel13": "Copy Latency for req_a14e7282-eaea-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e7282-eaea-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1455 ms, generation 1523 ms",
    "timingPhasesStyle8": "width:0.7994670219853431%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:48.46768820786143%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e7282-eaea-4a91"
  },
  {
    "_id": "8",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:16:51",
    "dateArialabel2": "Date details for req_a14e71d5-eae9-4a91",
    "dateText10": "14:16:51",
    "dateArialabel12": "Copy Date for req_a14e71d5-eae9-4a91",
    "requestId": "req_a14e71d5-eae9-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e71d5-eae9-4a91",
    "requestIdArialabel7": "Inspect req_a14e71d5-eae9-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e71d5-eae9-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e71d5-eae9-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e71d5-eae9-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e71d5-eae9-4a91",
    "modelArialabel9": "Copy Model for req_a14e71d5-eae9-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e71d5-eae9-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e71d5-eae9-4a91",
    "latency": "2,707ms",
    "latencyArialabel2": "Latency details for req_a14e71d5-eae9-4a91",
    "latencyStyle8": "width:33.01219512195122%",
    "latencyText10": "2,707",
    "latencyArialabel13": "Copy Latency for req_a14e71d5-eae9-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e71d5-eae9-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1379 ms, generation 1304 ms",
    "timingPhasesStyle8": "width:0.8865903213889916%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:50.9420022164758%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e71d5-eae9-4a91"
  },
  {
    "_id": "9",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:10:26",
    "dateArialabel2": "Date details for req_a14e7128-eae8-4a91",
    "dateText10": "14:10:26",
    "dateArialabel12": "Copy Date for req_a14e7128-eae8-4a91",
    "requestId": "req_a14e7128-eae8-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e7128-eae8-4a91",
    "requestIdArialabel7": "Inspect req_a14e7128-eae8-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e7128-eae8-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e7128-eae8-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e7128-eae8-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e7128-eae8-4a91",
    "modelArialabel9": "Copy Model for req_a14e7128-eae8-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e7128-eae8-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e7128-eae8-4a91",
    "latency": "253ms",
    "latencyArialabel2": "Latency details for req_a14e7128-eae8-4a91",
    "latencyStyle8": "width:3.0853658536585367%",
    "latencyText10": "253",
    "latencyArialabel13": "Copy Latency for req_a14e7128-eae8-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e7128-eae8-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 229 ms, generation 0 ms",
    "timingPhasesStyle8": "width:9.486166007905137%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:90.51383399209486%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e7128-eae8-4a91"
  },
  {
    "_id": "10",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:10:07",
    "dateArialabel2": "Date details for req_a14e707b-eae7-4a91",
    "dateText10": "14:10:07",
    "dateArialabel12": "Copy Date for req_a14e707b-eae7-4a91",
    "requestId": "req_a14e707b-eae7-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e707b-eae7-4a91",
    "requestIdArialabel7": "Inspect req_a14e707b-eae7-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e707b-eae7-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e707b-eae7-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e707b-eae7-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e707b-eae7-4a91",
    "modelArialabel9": "Copy Model for req_a14e707b-eae7-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e707b-eae7-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e707b-eae7-4a91",
    "latency": "2,117ms",
    "latencyArialabel2": "Latency details for req_a14e707b-eae7-4a91",
    "latencyStyle8": "width:25.817073170731707%",
    "latencyText10": "2,117",
    "latencyArialabel13": "Copy Latency for req_a14e707b-eae7-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e707b-eae7-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1228 ms, generation 865 ms",
    "timingPhasesStyle8": "width:1.1336797354747286%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:58.006613131790274%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e707b-eae7-4a91"
  },
  {
    "_id": "11",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:05:59",
    "dateArialabel2": "Date details for req_a14e6fce-eae6-4a91",
    "dateText10": "14:05:59",
    "dateArialabel12": "Copy Date for req_a14e6fce-eae6-4a91",
    "requestId": "req_a14e6fce-eae6-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6fce-eae6-4a91",
    "requestIdArialabel7": "Inspect req_a14e6fce-eae6-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6fce-eae6-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6fce-eae6-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6fce-eae6-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e6fce-eae6-4a91",
    "modelArialabel9": "Copy Model for req_a14e6fce-eae6-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e6fce-eae6-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6fce-eae6-4a91",
    "latency": "1,822ms",
    "latencyArialabel2": "Latency details for req_a14e6fce-eae6-4a91",
    "latencyStyle8": "width:22.21951219512195%",
    "latencyText10": "1,822",
    "latencyArialabel13": "Copy Latency for req_a14e6fce-eae6-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6fce-eae6-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1152 ms, generation 646 ms",
    "timingPhasesStyle8": "width:1.3172338090010975%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:63.22722283205269%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6fce-eae6-4a91"
  },
  {
    "_id": "12",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:04:31",
    "dateArialabel2": "Date details for req_a14e6f21-eae5-4a91",
    "dateText10": "14:04:31",
    "dateArialabel12": "Copy Date for req_a14e6f21-eae5-4a91",
    "requestId": "req_a14e6f21-eae5-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6f21-eae5-4a91",
    "requestIdArialabel7": "Inspect req_a14e6f21-eae5-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6f21-eae5-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6f21-eae5-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6f21-eae5-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e6f21-eae5-4a91",
    "modelArialabel9": "Copy Model for req_a14e6f21-eae5-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e6f21-eae5-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6f21-eae5-4a91",
    "latency": "1,527ms",
    "latencyArialabel2": "Latency details for req_a14e6f21-eae5-4a91",
    "latencyStyle8": "width:18.621951219512194%",
    "latencyText10": "1,527",
    "latencyArialabel13": "Copy Latency for req_a14e6f21-eae5-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6f21-eae5-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1076 ms, generation 427 ms",
    "timingPhasesStyle8": "width:1.5717092337917484%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:70.4649639816634%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6f21-eae5-4a91"
  },
  {
    "_id": "13",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:02:51",
    "dateArialabel2": "Date details for req_a14e6e74-eae4-4a91",
    "dateText10": "14:02:51",
    "dateArialabel12": "Copy Date for req_a14e6e74-eae4-4a91",
    "requestId": "req_a14e6e74-eae4-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6e74-eae4-4a91",
    "requestIdArialabel7": "Inspect req_a14e6e74-eae4-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6e74-eae4-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6e74-eae4-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6e74-eae4-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e6e74-eae4-4a91",
    "modelArialabel9": "Copy Model for req_a14e6e74-eae4-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e6e74-eae4-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6e74-eae4-4a91",
    "latency": "189ms",
    "latencyArialabel2": "Latency details for req_a14e6e74-eae4-4a91",
    "latencyStyle8": "width:2.3048780487804876%",
    "latencyText10": "189",
    "latencyArialabel13": "Copy Latency for req_a14e6e74-eae4-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6e74-eae4-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 165 ms, generation 0 ms",
    "timingPhasesStyle8": "width:12.698412698412698%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:87.3015873015873%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6e74-eae4-4a91"
  },
  {
    "_id": "14",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:02:17",
    "dateArialabel2": "Date details for req_a14e6dc7-eae3-4a91",
    "dateText10": "14:02:17",
    "dateArialabel12": "Copy Date for req_a14e6dc7-eae3-4a91",
    "requestId": "req_a14e6dc7-eae3-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6dc7-eae3-4a91",
    "requestIdArialabel7": "Inspect req_a14e6dc7-eae3-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6dc7-eae3-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6dc7-eae3-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6dc7-eae3-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e6dc7-eae3-4a91",
    "modelArialabel9": "Copy Model for req_a14e6dc7-eae3-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e6dc7-eae3-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6dc7-eae3-4a91",
    "latency": "937ms",
    "latencyArialabel2": "Latency details for req_a14e6dc7-eae3-4a91",
    "latencyStyle8": "width:11.426829268292684%",
    "latencyText10": "937",
    "latencyArialabel13": "Copy Latency for req_a14e6dc7-eae3-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6dc7-eae3-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 913 ms, generation 0 ms",
    "timingPhasesStyle8": "width:2.5613660618996796%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:97.43863393810031%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6dc7-eae3-4a91"
  },
  {
    "_id": "15",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202614:01:39",
    "dateArialabel2": "Date details for req_a14e6d1a-eae2-4a91",
    "dateText10": "14:01:39",
    "dateArialabel12": "Copy Date for req_a14e6d1a-eae2-4a91",
    "requestId": "req_a14e6d1a-eae2-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6d1a-eae2-4a91",
    "requestIdArialabel7": "Inspect req_a14e6d1a-eae2-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6d1a-eae2-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6d1a-eae2-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6d1a-eae2-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e6d1a-eae2-4a91",
    "modelArialabel9": "Copy Model for req_a14e6d1a-eae2-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e6d1a-eae2-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6d1a-eae2-4a91",
    "latency": "8,042ms",
    "latencyArialabel2": "Latency details for req_a14e6d1a-eae2-4a91",
    "latencyStyle8": "width:98.07317073170732%",
    "latencyText10": "8,042",
    "latencyArialabel13": "Copy Latency for req_a14e6d1a-eae2-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6d1a-eae2-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 849 ms, generation 7169 ms",
    "timingPhasesStyle8": "width:0.29843322556577967%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:10.557075354389456%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6d1a-eae2-4a91"
  },
  {
    "_id": "16",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:57:54",
    "dateArialabel2": "Date details for req_a14e6c6d-eae1-4a91",
    "dateText10": "13:57:54",
    "dateArialabel12": "Copy Date for req_a14e6c6d-eae1-4a91",
    "requestId": "req_a14e6c6d-eae1-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6c6d-eae1-4a91",
    "requestIdArialabel7": "Inspect req_a14e6c6d-eae1-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6c6d-eae1-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e6c6d-eae1-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e6c6d-eae1-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e6c6d-eae1-4a91",
    "modelArialabel9": "Copy Model for req_a14e6c6d-eae1-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e6c6d-eae1-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6c6d-eae1-4a91",
    "latency": "368ms",
    "latencyArialabel2": "Latency details for req_a14e6c6d-eae1-4a91",
    "latencyStyle8": "width:4.48780487804878%",
    "latencyText10": "368",
    "latencyArialabel13": "Copy Latency for req_a14e6c6d-eae1-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6c6d-eae1-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 344 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.521739130434782%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.47826086956522%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6c6d-eae1-4a91"
  },
  {
    "_id": "17",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:57:52",
    "dateArialabel2": "Date details for req_a14e6bc0-eae0-4a91",
    "dateText10": "13:57:52",
    "dateArialabel12": "Copy Date for req_a14e6bc0-eae0-4a91",
    "requestId": "req_a14e6bc0-eae0-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6bc0-eae0-4a91",
    "requestIdArialabel7": "Inspect req_a14e6bc0-eae0-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6bc0-eae0-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6bc0-eae0-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6bc0-eae0-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e6bc0-eae0-4a91",
    "modelArialabel9": "Copy Model for req_a14e6bc0-eae0-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e6bc0-eae0-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6bc0-eae0-4a91",
    "latency": "526ms",
    "latencyArialabel2": "Latency details for req_a14e6bc0-eae0-4a91",
    "latencyStyle8": "width:6.414634146341464%",
    "latencyText10": "526",
    "latencyArialabel13": "Copy Latency for req_a14e6bc0-eae0-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6bc0-eae0-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 502 ms, generation 0 ms",
    "timingPhasesStyle8": "width:4.562737642585551%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:95.43726235741445%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6bc0-eae0-4a91"
  },
  {
    "_id": "18",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Error",
    "actionsClass3": "bg-(--ui-error) inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:57:47",
    "dateArialabel2": "Date details for req_a14e6b13-eadf-4a91",
    "dateText10": "13:57:47",
    "dateArialabel12": "Copy Date for req_a14e6b13-eadf-4a91",
    "requestId": "req_a14e6b13-eadf-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6b13-eadf-4a91",
    "requestIdArialabel7": "Inspect req_a14e6b13-eadf-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6b13-eadf-4a91",
    "status": "503",
    "statusArialabel2": "Status details for req_a14e6b13-eadf-4a91",
    "statusClass6": "text-error bg-(--ui-error)/10 border-(--ui-error)/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs border-default",
    "statusTitle7": "Unavailable",
    "statusArialabel10": "Copy Status for req_a14e6b13-eadf-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e6b13-eadf-4a91",
    "modelArialabel9": "Copy Model for req_a14e6b13-eadf-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e6b13-eadf-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6b13-eadf-4a91",
    "latency": "7,157ms",
    "latencyArialabel2": "Latency details for req_a14e6b13-eadf-4a91",
    "latencyStyle8": "width:87.28048780487805%",
    "latencyText10": "7,157",
    "latencyArialabel13": "Copy Latency for req_a14e6b13-eadf-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6b13-eadf-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 7133 ms, generation 0 ms",
    "timingPhasesStyle8": "width:0.3353360346513902%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:99.66466396534861%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6b13-eadf-4a91"
  },
  {
    "_id": "19",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:57:36",
    "dateArialabel2": "Date details for req_a14e6a66-eade-4a91",
    "dateText10": "13:57:36",
    "dateArialabel12": "Copy Date for req_a14e6a66-eade-4a91",
    "requestId": "req_a14e6a66-eade-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6a66-eade-4a91",
    "requestIdArialabel7": "Inspect req_a14e6a66-eade-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6a66-eade-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e6a66-eade-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e6a66-eade-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e6a66-eade-4a91",
    "modelArialabel9": "Copy Model for req_a14e6a66-eade-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e6a66-eade-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6a66-eade-4a91",
    "latency": "338ms",
    "latencyArialabel2": "Latency details for req_a14e6a66-eade-4a91",
    "latencyStyle8": "width:4.121951219512195%",
    "latencyText10": "338",
    "latencyArialabel13": "Copy Latency for req_a14e6a66-eade-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6a66-eade-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 314 ms, generation 0 ms",
    "timingPhasesStyle8": "width:7.100591715976331%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:92.89940828402366%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6a66-eade-4a91"
  },
  {
    "_id": "20",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:57:17",
    "dateArialabel2": "Date details for req_a14e69b9-eadd-4a91",
    "dateText10": "13:57:17",
    "dateArialabel12": "Copy Date for req_a14e69b9-eadd-4a91",
    "requestId": "req_a14e69b9-eadd-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e69b9-eadd-4a91",
    "requestIdArialabel7": "Inspect req_a14e69b9-eadd-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e69b9-eadd-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e69b9-eadd-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e69b9-eadd-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e69b9-eadd-4a91",
    "modelArialabel9": "Copy Model for req_a14e69b9-eadd-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e69b9-eadd-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e69b9-eadd-4a91",
    "latency": "6,566ms",
    "latencyArialabel2": "Latency details for req_a14e69b9-eadd-4a91",
    "latencyStyle8": "width:80.07317073170732%",
    "latencyText10": "6,566",
    "latencyArialabel13": "Copy Latency for req_a14e69b9-eadd-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e69b9-eadd-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 470 ms, generation 6072 ms",
    "timingPhasesStyle8": "width:0.36551934206518427%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:7.158087115443192%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e69b9-eadd-4a91"
  },
  {
    "_id": "21",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:56:29",
    "dateArialabel2": "Date details for req_a14e690c-eadc-4a91",
    "dateText10": "13:56:29",
    "dateArialabel12": "Copy Date for req_a14e690c-eadc-4a91",
    "requestId": "req_a14e690c-eadc-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e690c-eadc-4a91",
    "requestIdArialabel7": "Inspect req_a14e690c-eadc-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e690c-eadc-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e690c-eadc-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e690c-eadc-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e690c-eadc-4a91",
    "modelArialabel9": "Copy Model for req_a14e690c-eadc-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e690c-eadc-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e690c-eadc-4a91",
    "latency": "462ms",
    "latencyArialabel2": "Latency details for req_a14e690c-eadc-4a91",
    "latencyStyle8": "width:5.634146341463415%",
    "latencyText10": "462",
    "latencyArialabel13": "Copy Latency for req_a14e690c-eadc-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e690c-eadc-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 394 ms, generation 44 ms",
    "timingPhasesStyle8": "width:5.194805194805195%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:85.28138528138528%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e690c-eadc-4a91"
  },
  {
    "_id": "22",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:54:29",
    "dateArialabel2": "Date details for req_a14e685f-eadb-4a91",
    "dateText10": "13:54:29",
    "dateArialabel12": "Copy Date for req_a14e685f-eadb-4a91",
    "requestId": "req_a14e685f-eadb-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e685f-eadb-4a91",
    "requestIdArialabel7": "Inspect req_a14e685f-eadb-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e685f-eadb-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e685f-eadb-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e685f-eadb-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e685f-eadb-4a91",
    "modelArialabel9": "Copy Model for req_a14e685f-eadb-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e685f-eadb-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e685f-eadb-4a91",
    "latency": "308ms",
    "latencyArialabel2": "Latency details for req_a14e685f-eadb-4a91",
    "latencyStyle8": "width:3.7560975609756095%",
    "latencyText10": "308",
    "latencyArialabel13": "Copy Latency for req_a14e685f-eadb-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e685f-eadb-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 284 ms, generation 0 ms",
    "timingPhasesStyle8": "width:7.792207792207792%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:92.20779220779221%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e685f-eadb-4a91"
  },
  {
    "_id": "23",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:53:47",
    "dateArialabel2": "Date details for req_a14e67b2-eada-4a91",
    "dateText10": "13:53:47",
    "dateArialabel12": "Copy Date for req_a14e67b2-eada-4a91",
    "requestId": "req_a14e67b2-eada-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e67b2-eada-4a91",
    "requestIdArialabel7": "Inspect req_a14e67b2-eada-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e67b2-eada-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e67b2-eada-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e67b2-eada-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e67b2-eada-4a91",
    "modelArialabel9": "Copy Model for req_a14e67b2-eada-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e67b2-eada-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e67b2-eada-4a91",
    "latency": "5,681ms",
    "latencyArialabel2": "Latency details for req_a14e67b2-eada-4a91",
    "latencyStyle8": "width:69.28048780487805%",
    "latencyText10": "5,681",
    "latencyArialabel13": "Copy Latency for req_a14e67b2-eada-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e67b2-eada-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 243 ms, generation 5414 ms",
    "timingPhasesStyle8": "width:0.4224608343601478%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:4.277415947896497%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e67b2-eada-4a91"
  },
  {
    "_id": "24",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:53:33",
    "dateArialabel2": "Date details for req_a14e6705-ead9-4a91",
    "dateText10": "13:53:33",
    "dateArialabel12": "Copy Date for req_a14e6705-ead9-4a91",
    "requestId": "req_a14e6705-ead9-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6705-ead9-4a91",
    "requestIdArialabel7": "Inspect req_a14e6705-ead9-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6705-ead9-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e6705-ead9-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e6705-ead9-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e6705-ead9-4a91",
    "modelArialabel9": "Copy Model for req_a14e6705-ead9-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e6705-ead9-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6705-ead9-4a91",
    "latency": "5,386ms",
    "latencyArialabel2": "Latency details for req_a14e6705-ead9-4a91",
    "latencyStyle8": "width:65.6829268292683%",
    "latencyText10": "5,386",
    "latencyArialabel13": "Copy Latency for req_a14e6705-ead9-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6705-ead9-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 167 ms, generation 5195 ms",
    "timingPhasesStyle8": "width:0.44559970293353135%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:3.1006312662458226%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6705-ead9-4a91"
  },
  {
    "_id": "25",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:51:54",
    "dateArialabel2": "Date details for req_a14e6658-ead8-4a91",
    "dateText10": "13:51:54",
    "dateArialabel12": "Copy Date for req_a14e6658-ead8-4a91",
    "requestId": "req_a14e6658-ead8-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6658-ead8-4a91",
    "requestIdArialabel7": "Inspect req_a14e6658-ead8-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6658-ead8-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e6658-ead8-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e6658-ead8-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e6658-ead8-4a91",
    "modelArialabel9": "Copy Model for req_a14e6658-ead8-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e6658-ead8-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6658-ead8-4a91",
    "latency": "279ms",
    "latencyArialabel2": "Latency details for req_a14e6658-ead8-4a91",
    "latencyStyle8": "width:3.4024390243902443%",
    "latencyText10": "279",
    "latencyArialabel13": "Copy Latency for req_a14e6658-ead8-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6658-ead8-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 255 ms, generation 0 ms",
    "timingPhasesStyle8": "width:8.60215053763441%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:91.39784946236558%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6658-ead8-4a91"
  },
  {
    "_id": "26",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:45:53",
    "dateArialabel2": "Date details for req_a14e65ab-ead7-4a91",
    "dateText10": "13:45:53",
    "dateArialabel12": "Copy Date for req_a14e65ab-ead7-4a91",
    "requestId": "req_a14e65ab-ead7-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e65ab-ead7-4a91",
    "requestIdArialabel7": "Inspect req_a14e65ab-ead7-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e65ab-ead7-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e65ab-ead7-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e65ab-ead7-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e65ab-ead7-4a91",
    "modelArialabel9": "Copy Model for req_a14e65ab-ead7-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e65ab-ead7-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e65ab-ead7-4a91",
    "latency": "4,796ms",
    "latencyArialabel2": "Latency details for req_a14e65ab-ead7-4a91",
    "latencyStyle8": "width:58.48780487804878%",
    "latencyText10": "4,796",
    "latencyArialabel13": "Copy Latency for req_a14e65ab-ead7-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e65ab-ead7-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1916 ms, generation 2856 ms",
    "timingPhasesStyle8": "width:0.5004170141784821%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:39.94995829858215%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e65ab-ead7-4a91"
  },
  {
    "_id": "27",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:45:48",
    "dateArialabel2": "Date details for req_a14e64fe-ead6-4a91",
    "dateText10": "13:45:48",
    "dateArialabel12": "Copy Date for req_a14e64fe-ead6-4a91",
    "requestId": "req_a14e64fe-ead6-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e64fe-ead6-4a91",
    "requestIdArialabel7": "Inspect req_a14e64fe-ead6-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e64fe-ead6-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e64fe-ead6-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e64fe-ead6-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e64fe-ead6-4a91",
    "modelArialabel9": "Copy Model for req_a14e64fe-ead6-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e64fe-ead6-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e64fe-ead6-4a91",
    "latency": "4,501ms",
    "latencyArialabel2": "Latency details for req_a14e64fe-ead6-4a91",
    "latencyStyle8": "width:54.89024390243903%",
    "latencyText10": "4,501",
    "latencyArialabel13": "Copy Latency for req_a14e64fe-ead6-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e64fe-ead6-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1840 ms, generation 2637 ms",
    "timingPhasesStyle8": "width:0.5332148411464119%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:40.87980448789158%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e64fe-ead6-4a91"
  },
  {
    "_id": "28",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:45:27",
    "dateArialabel2": "Date details for req_a14e6451-ead5-4a91",
    "dateText10": "13:45:27",
    "dateArialabel12": "Copy Date for req_a14e6451-ead5-4a91",
    "requestId": "req_a14e6451-ead5-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6451-ead5-4a91",
    "requestIdArialabel7": "Inspect req_a14e6451-ead5-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6451-ead5-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e6451-ead5-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e6451-ead5-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e6451-ead5-4a91",
    "modelArialabel9": "Copy Model for req_a14e6451-ead5-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e6451-ead5-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6451-ead5-4a91",
    "latency": "249ms",
    "latencyArialabel2": "Latency details for req_a14e6451-ead5-4a91",
    "latencyStyle8": "width:3.0365853658536586%",
    "latencyText10": "249",
    "latencyArialabel13": "Copy Latency for req_a14e6451-ead5-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6451-ead5-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 225 ms, generation 0 ms",
    "timingPhasesStyle8": "width:9.63855421686747%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:90.36144578313254%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6451-ead5-4a91"
  },
  {
    "_id": "29",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:43:01",
    "dateArialabel2": "Date details for req_a14e63a4-ead4-4a91",
    "dateText10": "13:43:01",
    "dateArialabel12": "Copy Date for req_a14e63a4-ead4-4a91",
    "requestId": "req_a14e63a4-ead4-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e63a4-ead4-4a91",
    "requestIdArialabel7": "Inspect req_a14e63a4-ead4-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e63a4-ead4-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e63a4-ead4-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e63a4-ead4-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e63a4-ead4-4a91",
    "modelArialabel9": "Copy Model for req_a14e63a4-ead4-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e63a4-ead4-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e63a4-ead4-4a91",
    "latency": "334ms",
    "latencyArialabel2": "Latency details for req_a14e63a4-ead4-4a91",
    "latencyStyle8": "width:4.073170731707317%",
    "latencyText10": "334",
    "latencyArialabel13": "Copy Latency for req_a14e63a4-ead4-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e63a4-ead4-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 310 ms, generation 0 ms",
    "timingPhasesStyle8": "width:7.18562874251497%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:92.81437125748504%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e63a4-ead4-4a91"
  },
  {
    "_id": "30",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:41:00",
    "dateArialabel2": "Date details for req_a14e62f7-ead3-4a91",
    "dateText10": "13:41:00",
    "dateArialabel12": "Copy Date for req_a14e62f7-ead3-4a91",
    "requestId": "req_a14e62f7-ead3-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e62f7-ead3-4a91",
    "requestIdArialabel7": "Inspect req_a14e62f7-ead3-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e62f7-ead3-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e62f7-ead3-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e62f7-ead3-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e62f7-ead3-4a91",
    "modelArialabel9": "Copy Model for req_a14e62f7-ead3-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e62f7-ead3-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e62f7-ead3-4a91",
    "latency": "3,616ms",
    "latencyArialabel2": "Latency details for req_a14e62f7-ead3-4a91",
    "latencyStyle8": "width:44.09756097560976%",
    "latencyText10": "3,616",
    "latencyArialabel13": "Copy Latency for req_a14e62f7-ead3-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e62f7-ead3-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1612 ms, generation 1980 ms",
    "timingPhasesStyle8": "width:0.6637168141592921%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:44.57964601769911%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e62f7-ead3-4a91"
  },
  {
    "_id": "31",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:38:38",
    "dateArialabel2": "Date details for req_a14e624a-ead2-4a91",
    "dateText10": "13:38:38",
    "dateArialabel12": "Copy Date for req_a14e624a-ead2-4a91",
    "requestId": "req_a14e624a-ead2-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e624a-ead2-4a91",
    "requestIdArialabel7": "Inspect req_a14e624a-ead2-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e624a-ead2-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e624a-ead2-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e624a-ead2-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e624a-ead2-4a91",
    "modelArialabel9": "Copy Model for req_a14e624a-ead2-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e624a-ead2-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e624a-ead2-4a91",
    "latency": "219ms",
    "latencyArialabel2": "Latency details for req_a14e624a-ead2-4a91",
    "latencyStyle8": "width:2.6707317073170733%",
    "latencyText10": "219",
    "latencyArialabel13": "Copy Latency for req_a14e624a-ead2-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e624a-ead2-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 195 ms, generation 0 ms",
    "timingPhasesStyle8": "width:10.95890410958904%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:89.04109589041096%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e624a-ead2-4a91"
  },
  {
    "_id": "32",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Error",
    "actionsClass3": "bg-(--ui-error) inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:35:45",
    "dateArialabel2": "Date details for req_a14e619d-ead1-4a91",
    "dateText10": "13:35:45",
    "dateArialabel12": "Copy Date for req_a14e619d-ead1-4a91",
    "requestId": "req_a14e619d-ead1-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e619d-ead1-4a91",
    "requestIdArialabel7": "Inspect req_a14e619d-ead1-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e619d-ead1-4a91",
    "status": "500",
    "statusArialabel2": "Status details for req_a14e619d-ead1-4a91",
    "statusClass6": "text-error bg-(--ui-error)/10 border-(--ui-error)/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs border-default",
    "statusTitle7": "Server error",
    "statusArialabel10": "Copy Status for req_a14e619d-ead1-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e619d-ead1-4a91",
    "modelArialabel9": "Copy Model for req_a14e619d-ead1-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e619d-ead1-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e619d-ead1-4a91",
    "latency": "3,026ms",
    "latencyArialabel2": "Latency details for req_a14e619d-ead1-4a91",
    "latencyStyle8": "width:36.90243902439024%",
    "latencyText10": "3,026",
    "latencyArialabel13": "Copy Latency for req_a14e619d-ead1-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e619d-ead1-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 3002 ms, generation 0 ms",
    "timingPhasesStyle8": "width:0.7931262392597489%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:99.20687376074025%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e619d-ead1-4a91"
  },
  {
    "_id": "33",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:35:28",
    "dateArialabel2": "Date details for req_a14e60f0-ead0-4a91",
    "dateText10": "13:35:28",
    "dateArialabel12": "Copy Date for req_a14e60f0-ead0-4a91",
    "requestId": "req_a14e60f0-ead0-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e60f0-ead0-4a91",
    "requestIdArialabel7": "Inspect req_a14e60f0-ead0-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e60f0-ead0-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e60f0-ead0-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e60f0-ead0-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e60f0-ead0-4a91",
    "modelArialabel9": "Copy Model for req_a14e60f0-ead0-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e60f0-ead0-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e60f0-ead0-4a91",
    "latency": "270ms",
    "latencyArialabel2": "Latency details for req_a14e60f0-ead0-4a91",
    "latencyStyle8": "width:3.2926829268292686%",
    "latencyText10": "270",
    "latencyArialabel13": "Copy Latency for req_a14e60f0-ead0-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e60f0-ead0-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 246 ms, generation 0 ms",
    "timingPhasesStyle8": "width:8.88888888888889%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:91.11111111111111%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e60f0-ead0-4a91"
  },
  {
    "_id": "34",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:34:50",
    "dateArialabel2": "Date details for req_a14e6043-eacf-4a91",
    "dateText10": "13:34:50",
    "dateArialabel12": "Copy Date for req_a14e6043-eacf-4a91",
    "requestId": "req_a14e6043-eacf-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e6043-eacf-4a91",
    "requestIdArialabel7": "Inspect req_a14e6043-eacf-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e6043-eacf-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e6043-eacf-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e6043-eacf-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e6043-eacf-4a91",
    "modelArialabel9": "Copy Model for req_a14e6043-eacf-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e6043-eacf-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e6043-eacf-4a91",
    "latency": "189ms",
    "latencyArialabel2": "Latency details for req_a14e6043-eacf-4a91",
    "latencyStyle8": "width:2.3048780487804876%",
    "latencyText10": "189",
    "latencyArialabel13": "Copy Latency for req_a14e6043-eacf-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e6043-eacf-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 165 ms, generation 0 ms",
    "timingPhasesStyle8": "width:12.698412698412698%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:87.3015873015873%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e6043-eacf-4a91"
  },
  {
    "_id": "35",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:33:06",
    "dateArialabel2": "Date details for req_a14e5f96-eace-4a91",
    "dateText10": "13:33:06",
    "dateArialabel12": "Copy Date for req_a14e5f96-eace-4a91",
    "requestId": "req_a14e5f96-eace-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5f96-eace-4a91",
    "requestIdArialabel7": "Inspect req_a14e5f96-eace-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5f96-eace-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5f96-eace-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5f96-eace-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e5f96-eace-4a91",
    "modelArialabel9": "Copy Model for req_a14e5f96-eace-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e5f96-eace-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5f96-eace-4a91",
    "latency": "2,141ms",
    "latencyArialabel2": "Latency details for req_a14e5f96-eace-4a91",
    "latencyStyle8": "width:26.109756097560975%",
    "latencyText10": "2,141",
    "latencyArialabel13": "Copy Latency for req_a14e5f96-eace-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5f96-eace-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1234 ms, generation 883 ms",
    "timingPhasesStyle8": "width:1.120971508640822%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:57.6366184026156%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5f96-eace-4a91"
  },
  {
    "_id": "36",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:30:55",
    "dateArialabel2": "Date details for req_a14e5ee9-eacd-4a91",
    "dateText10": "13:30:55",
    "dateArialabel12": "Copy Date for req_a14e5ee9-eacd-4a91",
    "requestId": "req_a14e5ee9-eacd-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5ee9-eacd-4a91",
    "requestIdArialabel7": "Inspect req_a14e5ee9-eacd-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5ee9-eacd-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5ee9-eacd-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5ee9-eacd-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e5ee9-eacd-4a91",
    "modelArialabel9": "Copy Model for req_a14e5ee9-eacd-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e5ee9-eacd-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5ee9-eacd-4a91",
    "latency": "1,846ms",
    "latencyArialabel2": "Latency details for req_a14e5ee9-eacd-4a91",
    "latencyStyle8": "width:22.51219512195122%",
    "latencyText10": "1,846",
    "latencyArialabel13": "Copy Latency for req_a14e5ee9-eacd-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5ee9-eacd-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1158 ms, generation 664 ms",
    "timingPhasesStyle8": "width:1.3001083423618636%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:62.730227518959914%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5ee9-eacd-4a91"
  },
  {
    "_id": "37",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:30:23",
    "dateArialabel2": "Date details for req_a14e5e3c-eacc-4a91",
    "dateText10": "13:30:23",
    "dateArialabel12": "Copy Date for req_a14e5e3c-eacc-4a91",
    "requestId": "req_a14e5e3c-eacc-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5e3c-eacc-4a91",
    "requestIdArialabel7": "Inspect req_a14e5e3c-eacc-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5e3c-eacc-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5e3c-eacc-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5e3c-eacc-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e5e3c-eacc-4a91",
    "modelArialabel9": "Copy Model for req_a14e5e3c-eacc-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e5e3c-eacc-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5e3c-eacc-4a91",
    "latency": "159ms",
    "latencyArialabel2": "Latency details for req_a14e5e3c-eacc-4a91",
    "latencyStyle8": "width:1.9390243902439024%",
    "latencyText10": "159",
    "latencyArialabel13": "Copy Latency for req_a14e5e3c-eacc-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5e3c-eacc-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 135 ms, generation 0 ms",
    "timingPhasesStyle8": "width:15.09433962264151%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:84.90566037735849%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5e3c-eacc-4a91"
  },
  {
    "_id": "38",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:29:24",
    "dateArialabel2": "Date details for req_a14e5d8f-eacb-4a91",
    "dateText10": "13:29:24",
    "dateArialabel12": "Copy Date for req_a14e5d8f-eacb-4a91",
    "requestId": "req_a14e5d8f-eacb-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5d8f-eacb-4a91",
    "requestIdArialabel7": "Inspect req_a14e5d8f-eacb-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5d8f-eacb-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5d8f-eacb-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5d8f-eacb-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e5d8f-eacb-4a91",
    "modelArialabel9": "Copy Model for req_a14e5d8f-eacb-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e5d8f-eacb-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5d8f-eacb-4a91",
    "latency": "1,256ms",
    "latencyArialabel2": "Latency details for req_a14e5d8f-eacb-4a91",
    "latencyStyle8": "width:15.317073170731707%",
    "latencyText10": "1,256",
    "latencyArialabel13": "Copy Latency for req_a14e5d8f-eacb-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5d8f-eacb-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1006 ms, generation 226 ms",
    "timingPhasesStyle8": "width:1.910828025477707%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:80.09554140127389%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5d8f-eacb-4a91"
  },
  {
    "_id": "39",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:26:13",
    "dateArialabel2": "Date details for req_a14e5ce2-eaca-4a91",
    "dateText10": "13:26:13",
    "dateArialabel12": "Copy Date for req_a14e5ce2-eaca-4a91",
    "requestId": "req_a14e5ce2-eaca-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5ce2-eaca-4a91",
    "requestIdArialabel7": "Inspect req_a14e5ce2-eaca-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5ce2-eaca-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5ce2-eaca-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5ce2-eaca-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e5ce2-eaca-4a91",
    "modelArialabel9": "Copy Model for req_a14e5ce2-eaca-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e5ce2-eaca-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5ce2-eaca-4a91",
    "latency": "961ms",
    "latencyArialabel2": "Latency details for req_a14e5ce2-eaca-4a91",
    "latencyStyle8": "width:11.71951219512195%",
    "latencyText10": "961",
    "latencyArialabel13": "Copy Latency for req_a14e5ce2-eaca-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5ce2-eaca-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 931 ms, generation 6 ms",
    "timingPhasesStyle8": "width:2.497398543184183%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:96.87825182101977%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5ce2-eaca-4a91"
  },
  {
    "_id": "40",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:24:34",
    "dateArialabel2": "Date details for req_a14e5c35-eac9-4a91",
    "dateText10": "13:24:34",
    "dateArialabel12": "Copy Date for req_a14e5c35-eac9-4a91",
    "requestId": "req_a14e5c35-eac9-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5c35-eac9-4a91",
    "requestIdArialabel7": "Inspect req_a14e5c35-eac9-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5c35-eac9-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5c35-eac9-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5c35-eac9-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e5c35-eac9-4a91",
    "modelArialabel9": "Copy Model for req_a14e5c35-eac9-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e5c35-eac9-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5c35-eac9-4a91",
    "latency": "379ms",
    "latencyArialabel2": "Latency details for req_a14e5c35-eac9-4a91",
    "latencyStyle8": "width:4.621951219512195%",
    "latencyText10": "379",
    "latencyArialabel13": "Copy Latency for req_a14e5c35-eac9-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5c35-eac9-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 355 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.33245382585752%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.66754617414247%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5c35-eac9-4a91"
  },
  {
    "_id": "41",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:24:26",
    "dateArialabel2": "Date details for req_a14e5b88-eac8-4a91",
    "dateText10": "13:24:26",
    "dateArialabel12": "Copy Date for req_a14e5b88-eac8-4a91",
    "requestId": "req_a14e5b88-eac8-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5b88-eac8-4a91",
    "requestIdArialabel7": "Inspect req_a14e5b88-eac8-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5b88-eac8-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5b88-eac8-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5b88-eac8-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e5b88-eac8-4a91",
    "modelArialabel9": "Copy Model for req_a14e5b88-eac8-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e5b88-eac8-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5b88-eac8-4a91",
    "latency": "543ms",
    "latencyArialabel2": "Latency details for req_a14e5b88-eac8-4a91",
    "latencyStyle8": "width:6.621951219512195%",
    "latencyText10": "543",
    "latencyArialabel13": "Copy Latency for req_a14e5b88-eac8-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5b88-eac8-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 519 ms, generation 0 ms",
    "timingPhasesStyle8": "width:4.41988950276243%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:95.58011049723757%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5b88-eac8-4a91"
  },
  {
    "_id": "42",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:23:59",
    "dateArialabel2": "Date details for req_a14e5adb-eac7-4a91",
    "dateText10": "13:23:59",
    "dateArialabel12": "Copy Date for req_a14e5adb-eac7-4a91",
    "requestId": "req_a14e5adb-eac7-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5adb-eac7-4a91",
    "requestIdArialabel7": "Inspect req_a14e5adb-eac7-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5adb-eac7-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5adb-eac7-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5adb-eac7-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e5adb-eac7-4a91",
    "modelArialabel9": "Copy Model for req_a14e5adb-eac7-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e5adb-eac7-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5adb-eac7-4a91",
    "latency": "7,476ms",
    "latencyArialabel2": "Latency details for req_a14e5adb-eac7-4a91",
    "latencyStyle8": "width:91.17073170731707%",
    "latencyText10": "7,476",
    "latencyArialabel13": "Copy Latency for req_a14e5adb-eac7-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5adb-eac7-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 703 ms, generation 6749 ms",
    "timingPhasesStyle8": "width:0.32102728731942215%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:9.403424291064741%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5adb-eac7-4a91"
  },
  {
    "_id": "43",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:19:20",
    "dateArialabel2": "Date details for req_a14e5a2e-eac6-4a91",
    "dateText10": "13:19:20",
    "dateArialabel12": "Copy Date for req_a14e5a2e-eac6-4a91",
    "requestId": "req_a14e5a2e-eac6-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5a2e-eac6-4a91",
    "requestIdArialabel7": "Inspect req_a14e5a2e-eac6-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5a2e-eac6-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5a2e-eac6-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5a2e-eac6-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e5a2e-eac6-4a91",
    "modelArialabel9": "Copy Model for req_a14e5a2e-eac6-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e5a2e-eac6-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5a2e-eac6-4a91",
    "latency": "349ms",
    "latencyArialabel2": "Latency details for req_a14e5a2e-eac6-4a91",
    "latencyStyle8": "width:4.25609756097561%",
    "latencyText10": "349",
    "latencyArialabel13": "Copy Latency for req_a14e5a2e-eac6-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5a2e-eac6-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 325 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.876790830945559%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.12320916905445%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5a2e-eac6-4a91"
  },
  {
    "_id": "44",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:19:15",
    "dateArialabel2": "Date details for req_a14e5981-eac5-4a91",
    "dateText10": "13:19:15",
    "dateArialabel12": "Copy Date for req_a14e5981-eac5-4a91",
    "requestId": "req_a14e5981-eac5-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5981-eac5-4a91",
    "requestIdArialabel7": "Inspect req_a14e5981-eac5-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5981-eac5-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5981-eac5-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5981-eac5-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e5981-eac5-4a91",
    "modelArialabel9": "Copy Model for req_a14e5981-eac5-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e5981-eac5-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5981-eac5-4a91",
    "latency": "6,885ms",
    "latencyArialabel2": "Latency details for req_a14e5981-eac5-4a91",
    "latencyStyle8": "width:83.96341463414633%",
    "latencyText10": "6,885",
    "latencyArialabel13": "Copy Latency for req_a14e5981-eac5-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5981-eac5-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 552 ms, generation 6309 ms",
    "timingPhasesStyle8": "width:0.34858387799564267%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:8.017429193899781%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5981-eac5-4a91"
  },
  {
    "_id": "45",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:15:54",
    "dateArialabel2": "Date details for req_a14e58d4-eac4-4a91",
    "dateText10": "13:15:54",
    "dateArialabel12": "Copy Date for req_a14e58d4-eac4-4a91",
    "requestId": "req_a14e58d4-eac4-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e58d4-eac4-4a91",
    "requestIdArialabel7": "Inspect req_a14e58d4-eac4-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e58d4-eac4-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e58d4-eac4-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e58d4-eac4-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e58d4-eac4-4a91",
    "modelArialabel9": "Copy Model for req_a14e58d4-eac4-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e58d4-eac4-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e58d4-eac4-4a91",
    "latency": "479ms",
    "latencyArialabel2": "Latency details for req_a14e58d4-eac4-4a91",
    "latencyStyle8": "width:5.841463414634147%",
    "latencyText10": "479",
    "latencyArialabel13": "Copy Latency for req_a14e58d4-eac4-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e58d4-eac4-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 455 ms, generation 0 ms",
    "timingPhasesStyle8": "width:5.010438413361169%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:94.98956158663883%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e58d4-eac4-4a91"
  },
  {
    "_id": "46",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:13:42",
    "dateArialabel2": "Date details for req_a14e5827-eac3-4a91",
    "dateText10": "13:13:42",
    "dateArialabel12": "Copy Date for req_a14e5827-eac3-4a91",
    "requestId": "req_a14e5827-eac3-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5827-eac3-4a91",
    "requestIdArialabel7": "Inspect req_a14e5827-eac3-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5827-eac3-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5827-eac3-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5827-eac3-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e5827-eac3-4a91",
    "modelArialabel9": "Copy Model for req_a14e5827-eac3-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e5827-eac3-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5827-eac3-4a91",
    "latency": "319ms",
    "latencyArialabel2": "Latency details for req_a14e5827-eac3-4a91",
    "latencyStyle8": "width:3.8902439024390243%",
    "latencyText10": "319",
    "latencyArialabel13": "Copy Latency for req_a14e5827-eac3-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5827-eac3-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 295 ms, generation 0 ms",
    "timingPhasesStyle8": "width:7.523510971786834%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:92.47648902821317%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5827-eac3-4a91"
  },
  {
    "_id": "47",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:11:58",
    "dateArialabel2": "Date details for req_a14e577a-eac2-4a91",
    "dateText10": "13:11:58",
    "dateArialabel12": "Copy Date for req_a14e577a-eac2-4a91",
    "requestId": "req_a14e577a-eac2-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e577a-eac2-4a91",
    "requestIdArialabel7": "Inspect req_a14e577a-eac2-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e577a-eac2-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e577a-eac2-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e577a-eac2-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e577a-eac2-4a91",
    "modelArialabel9": "Copy Model for req_a14e577a-eac2-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e577a-eac2-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e577a-eac2-4a91",
    "latency": "6,000ms",
    "latencyArialabel2": "Latency details for req_a14e577a-eac2-4a91",
    "latencyStyle8": "width:73.17073170731707%",
    "latencyText10": "6,000",
    "latencyArialabel13": "Copy Latency for req_a14e577a-eac2-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e577a-eac2-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 325 ms, generation 5651 ms",
    "timingPhasesStyle8": "width:0.4%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:5.416666666666667%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e577a-eac2-4a91"
  },
  {
    "_id": "48",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:11:38",
    "dateArialabel2": "Date details for req_a14e56cd-eac1-4a91",
    "dateText10": "13:11:38",
    "dateArialabel12": "Copy Date for req_a14e56cd-eac1-4a91",
    "requestId": "req_a14e56cd-eac1-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e56cd-eac1-4a91",
    "requestIdArialabel7": "Inspect req_a14e56cd-eac1-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e56cd-eac1-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e56cd-eac1-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e56cd-eac1-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e56cd-eac1-4a91",
    "modelArialabel9": "Copy Model for req_a14e56cd-eac1-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e56cd-eac1-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e56cd-eac1-4a91",
    "latency": "5,705ms",
    "latencyArialabel2": "Latency details for req_a14e56cd-eac1-4a91",
    "latencyStyle8": "width:69.57317073170731%",
    "latencyText10": "5,705",
    "latencyArialabel13": "Copy Latency for req_a14e56cd-eac1-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e56cd-eac1-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 249 ms, generation 5432 ms",
    "timingPhasesStyle8": "width:0.42068361086765993%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:4.364592462751972%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e56cd-eac1-4a91"
  },
  {
    "_id": "49",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:10:39",
    "dateArialabel2": "Date details for req_a14e5620-eac0-4a91",
    "dateText10": "13:10:39",
    "dateArialabel12": "Copy Date for req_a14e5620-eac0-4a91",
    "requestId": "req_a14e5620-eac0-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5620-eac0-4a91",
    "requestIdArialabel7": "Inspect req_a14e5620-eac0-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5620-eac0-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5620-eac0-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5620-eac0-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e5620-eac0-4a91",
    "modelArialabel9": "Copy Model for req_a14e5620-eac0-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e5620-eac0-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5620-eac0-4a91",
    "latency": "289ms",
    "latencyArialabel2": "Latency details for req_a14e5620-eac0-4a91",
    "latencyStyle8": "width:3.5243902439024386%",
    "latencyText10": "289",
    "latencyArialabel13": "Copy Latency for req_a14e5620-eac0-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5620-eac0-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 265 ms, generation 0 ms",
    "timingPhasesStyle8": "width:8.304498269896193%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:91.6955017301038%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5620-eac0-4a91"
  },
  {
    "_id": "50",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:06:35",
    "dateArialabel2": "Date details for req_a14e5573-eabf-4a91",
    "dateText10": "13:06:35",
    "dateArialabel12": "Copy Date for req_a14e5573-eabf-4a91",
    "requestId": "req_a14e5573-eabf-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5573-eabf-4a91",
    "requestIdArialabel7": "Inspect req_a14e5573-eabf-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5573-eabf-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5573-eabf-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5573-eabf-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e5573-eabf-4a91",
    "modelArialabel9": "Copy Model for req_a14e5573-eabf-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e5573-eabf-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5573-eabf-4a91",
    "latency": "5,115ms",
    "latencyArialabel2": "Latency details for req_a14e5573-eabf-4a91",
    "latencyStyle8": "width:62.3780487804878%",
    "latencyText10": "5,115",
    "latencyArialabel13": "Copy Latency for req_a14e5573-eabf-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5573-eabf-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 97 ms, generation 4994 ms",
    "timingPhasesStyle8": "width:0.46920821114369504%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:1.8963831867057672%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5573-eabf-4a91"
  },
  {
    "_id": "51",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:04:20",
    "dateArialabel2": "Date details for req_a14e54c6-eabe-4a91",
    "dateText10": "13:04:20",
    "dateArialabel12": "Copy Date for req_a14e54c6-eabe-4a91",
    "requestId": "req_a14e54c6-eabe-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e54c6-eabe-4a91",
    "requestIdArialabel7": "Inspect req_a14e54c6-eabe-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e54c6-eabe-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e54c6-eabe-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e54c6-eabe-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e54c6-eabe-4a91",
    "modelArialabel9": "Copy Model for req_a14e54c6-eabe-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e54c6-eabe-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e54c6-eabe-4a91",
    "latency": "4,820ms",
    "latencyArialabel2": "Latency details for req_a14e54c6-eabe-4a91",
    "latencyStyle8": "width:58.78048780487804%",
    "latencyText10": "4,820",
    "latencyArialabel13": "Copy Latency for req_a14e54c6-eabe-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e54c6-eabe-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1922 ms, generation 2874 ms",
    "timingPhasesStyle8": "width:0.49792531120331945%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:39.87551867219917%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e54c6-eabe-4a91"
  },
  {
    "_id": "52",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:03:36",
    "dateArialabel2": "Date details for req_a14e5419-eabd-4a91",
    "dateText10": "13:03:36",
    "dateArialabel12": "Copy Date for req_a14e5419-eabd-4a91",
    "requestId": "req_a14e5419-eabd-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5419-eabd-4a91",
    "requestIdArialabel7": "Inspect req_a14e5419-eabd-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5419-eabd-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5419-eabd-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5419-eabd-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e5419-eabd-4a91",
    "modelArialabel9": "Copy Model for req_a14e5419-eabd-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e5419-eabd-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5419-eabd-4a91",
    "latency": "259ms",
    "latencyArialabel2": "Latency details for req_a14e5419-eabd-4a91",
    "latencyStyle8": "width:3.158536585365854%",
    "latencyText10": "259",
    "latencyArialabel13": "Copy Latency for req_a14e5419-eabd-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5419-eabd-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 235 ms, generation 0 ms",
    "timingPhasesStyle8": "width:9.266409266409266%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:90.73359073359073%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5419-eabd-4a91"
  },
  {
    "_id": "53",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:03:26",
    "dateArialabel2": "Date details for req_a14e536c-eabc-4a91",
    "dateText10": "13:03:26",
    "dateArialabel12": "Copy Date for req_a14e536c-eabc-4a91",
    "requestId": "req_a14e536c-eabc-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e536c-eabc-4a91",
    "requestIdArialabel7": "Inspect req_a14e536c-eabc-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e536c-eabc-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e536c-eabc-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e536c-eabc-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e536c-eabc-4a91",
    "modelArialabel9": "Copy Model for req_a14e536c-eabc-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e536c-eabc-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e536c-eabc-4a91",
    "latency": "351ms",
    "latencyArialabel2": "Latency details for req_a14e536c-eabc-4a91",
    "latencyStyle8": "width:4.2804878048780495%",
    "latencyText10": "351",
    "latencyArialabel13": "Copy Latency for req_a14e536c-eabc-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e536c-eabc-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 327 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.837606837606838%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.16239316239316%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e536c-eabc-4a91"
  },
  {
    "_id": "54",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:03:01",
    "dateArialabel2": "Date details for req_a14e52bf-eabb-4a91",
    "dateText10": "13:03:01",
    "dateArialabel12": "Copy Date for req_a14e52bf-eabb-4a91",
    "requestId": "req_a14e52bf-eabb-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e52bf-eabb-4a91",
    "requestIdArialabel7": "Inspect req_a14e52bf-eabb-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e52bf-eabb-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e52bf-eabb-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e52bf-eabb-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e52bf-eabb-4a91",
    "modelArialabel9": "Copy Model for req_a14e52bf-eabb-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e52bf-eabb-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e52bf-eabb-4a91",
    "latency": "3,935ms",
    "latencyArialabel2": "Latency details for req_a14e52bf-eabb-4a91",
    "latencyStyle8": "width:47.98780487804878%",
    "latencyText10": "3,935",
    "latencyArialabel13": "Copy Latency for req_a14e52bf-eabb-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e52bf-eabb-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1694 ms, generation 2217 ms",
    "timingPhasesStyle8": "width:0.6099110546378653%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:43.04955527318933%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e52bf-eabb-4a91"
  },
  {
    "_id": "55",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Warning",
    "actionsClass3": "bg-warning inline-block size-3.5 rounded-[4px]",
    "date": "Sep 11, 202613:02:52",
    "dateArialabel2": "Date details for req_a14e5212-eaba-4a91",
    "dateText10": "13:02:52",
    "dateArialabel12": "Copy Date for req_a14e5212-eaba-4a91",
    "requestId": "req_a14e5212-eaba-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5212-eaba-4a91",
    "requestIdArialabel7": "Inspect req_a14e5212-eaba-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5212-eaba-4a91",
    "status": "429",
    "statusArialabel2": "Status details for req_a14e5212-eaba-4a91",
    "statusClass6": "text-warning bg-warning/10 border-warning/20 inline-flex rounded border px-1.5 py-0.5 font-mono text-xs",
    "statusTitle7": "Rate limited",
    "statusArialabel10": "Copy Status for req_a14e5212-eaba-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e5212-eaba-4a91",
    "modelArialabel9": "Copy Model for req_a14e5212-eaba-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e5212-eaba-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5212-eaba-4a91",
    "latency": "230ms",
    "latencyArialabel2": "Latency details for req_a14e5212-eaba-4a91",
    "latencyStyle8": "width:2.804878048780488%",
    "latencyText10": "230",
    "latencyArialabel13": "Copy Latency for req_a14e5212-eaba-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5212-eaba-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 206 ms, generation 0 ms",
    "timingPhasesStyle8": "width:10.434782608695652%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:89.56521739130436%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5212-eaba-4a91"
  },
  {
    "_id": "56",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:01:09",
    "dateArialabel2": "Date details for req_a14e5165-eab9-4a91",
    "dateText10": "13:01:09",
    "dateArialabel12": "Copy Date for req_a14e5165-eab9-4a91",
    "requestId": "req_a14e5165-eab9-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e5165-eab9-4a91",
    "requestIdArialabel7": "Inspect req_a14e5165-eab9-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e5165-eab9-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e5165-eab9-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e5165-eab9-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e5165-eab9-4a91",
    "modelArialabel9": "Copy Model for req_a14e5165-eab9-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e5165-eab9-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e5165-eab9-4a91",
    "latency": "3,345ms",
    "latencyArialabel2": "Latency details for req_a14e5165-eab9-4a91",
    "latencyStyle8": "width:40.792682926829265%",
    "latencyText10": "3,345",
    "latencyArialabel13": "Copy Latency for req_a14e5165-eab9-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e5165-eab9-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1543 ms, generation 1778 ms",
    "timingPhasesStyle8": "width:0.7174887892376681%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:46.12855007473841%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e5165-eab9-4a91"
  },
  {
    "_id": "57",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202613:00:55",
    "dateArialabel2": "Date details for req_a14e50b8-eab8-4a91",
    "dateText10": "13:00:55",
    "dateArialabel12": "Copy Date for req_a14e50b8-eab8-4a91",
    "requestId": "req_a14e50b8-eab8-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e50b8-eab8-4a91",
    "requestIdArialabel7": "Inspect req_a14e50b8-eab8-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e50b8-eab8-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e50b8-eab8-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e50b8-eab8-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e50b8-eab8-4a91",
    "modelArialabel9": "Copy Model for req_a14e50b8-eab8-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e50b8-eab8-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e50b8-eab8-4a91",
    "latency": "288ms",
    "latencyArialabel2": "Latency details for req_a14e50b8-eab8-4a91",
    "latencyStyle8": "width:3.51219512195122%",
    "latencyText10": "288",
    "latencyArialabel13": "Copy Latency for req_a14e50b8-eab8-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e50b8-eab8-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 264 ms, generation 0 ms",
    "timingPhasesStyle8": "width:8.333333333333332%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:91.66666666666666%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e50b8-eab8-4a91"
  },
  {
    "_id": "58",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:58:54",
    "dateArialabel2": "Date details for req_a14e500b-eab7-4a91",
    "dateText10": "12:58:54",
    "dateArialabel12": "Copy Date for req_a14e500b-eab7-4a91",
    "requestId": "req_a14e500b-eab7-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e500b-eab7-4a91",
    "requestIdArialabel7": "Inspect req_a14e500b-eab7-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e500b-eab7-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e500b-eab7-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e500b-eab7-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e500b-eab7-4a91",
    "modelArialabel9": "Copy Model for req_a14e500b-eab7-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e500b-eab7-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e500b-eab7-4a91",
    "latency": "2,755ms",
    "latencyArialabel2": "Latency details for req_a14e500b-eab7-4a91",
    "latencyStyle8": "width:33.59756097560976%",
    "latencyText10": "2,755",
    "latencyArialabel13": "Copy Latency for req_a14e500b-eab7-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e500b-eab7-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1391 ms, generation 1340 ms",
    "timingPhasesStyle8": "width:0.8711433756805809%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:50.490018148820326%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e500b-eab7-4a91"
  },
  {
    "_id": "59",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:58:34",
    "dateArialabel2": "Date details for req_a14e4f5e-eab6-4a91",
    "dateText10": "12:58:34",
    "dateArialabel12": "Copy Date for req_a14e4f5e-eab6-4a91",
    "requestId": "req_a14e4f5e-eab6-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4f5e-eab6-4a91",
    "requestIdArialabel7": "Inspect req_a14e4f5e-eab6-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4f5e-eab6-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4f5e-eab6-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4f5e-eab6-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e4f5e-eab6-4a91",
    "modelArialabel9": "Copy Model for req_a14e4f5e-eab6-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e4f5e-eab6-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4f5e-eab6-4a91",
    "latency": "2,460ms",
    "latencyArialabel2": "Latency details for req_a14e4f5e-eab6-4a91",
    "latencyStyle8": "width:30%",
    "latencyText10": "2,460",
    "latencyArialabel13": "Copy Latency for req_a14e4f5e-eab6-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4f5e-eab6-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1316 ms, generation 1120 ms",
    "timingPhasesStyle8": "width:0.975609756097561%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:53.49593495934959%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4f5e-eab6-4a91"
  },
  {
    "_id": "60",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:57:41",
    "dateArialabel2": "Date details for req_a14e4eb1-eab5-4a91",
    "dateText10": "12:57:41",
    "dateArialabel12": "Copy Date for req_a14e4eb1-eab5-4a91",
    "requestId": "req_a14e4eb1-eab5-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4eb1-eab5-4a91",
    "requestIdArialabel7": "Inspect req_a14e4eb1-eab5-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4eb1-eab5-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4eb1-eab5-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4eb1-eab5-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e4eb1-eab5-4a91",
    "modelArialabel9": "Copy Model for req_a14e4eb1-eab5-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e4eb1-eab5-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4eb1-eab5-4a91",
    "latency": "2,165ms",
    "latencyArialabel2": "Latency details for req_a14e4eb1-eab5-4a91",
    "latencyStyle8": "width:26.402439024390244%",
    "latencyText10": "2,165",
    "latencyArialabel13": "Copy Latency for req_a14e4eb1-eab5-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4eb1-eab5-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1240 ms, generation 901 ms",
    "timingPhasesStyle8": "width:1.1085450346420322%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:57.27482678983834%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4eb1-eab5-4a91"
  },
  {
    "_id": "61",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:56:08",
    "dateArialabel2": "Date details for req_a14e4e04-eab4-4a91",
    "dateText10": "12:56:08",
    "dateArialabel12": "Copy Date for req_a14e4e04-eab4-4a91",
    "requestId": "req_a14e4e04-eab4-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4e04-eab4-4a91",
    "requestIdArialabel7": "Inspect req_a14e4e04-eab4-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4e04-eab4-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4e04-eab4-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4e04-eab4-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e4e04-eab4-4a91",
    "modelArialabel9": "Copy Model for req_a14e4e04-eab4-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e4e04-eab4-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4e04-eab4-4a91",
    "latency": "224ms",
    "latencyArialabel2": "Latency details for req_a14e4e04-eab4-4a91",
    "latencyStyle8": "width:2.731707317073171%",
    "latencyText10": "224",
    "latencyArialabel13": "Copy Latency for req_a14e4e04-eab4-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4e04-eab4-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 200 ms, generation 0 ms",
    "timingPhasesStyle8": "width:10.714285714285714%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:89.28571428571429%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4e04-eab4-4a91"
  },
  {
    "_id": "62",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:56:02",
    "dateArialabel2": "Date details for req_a14e4d57-eab3-4a91",
    "dateText10": "12:56:02",
    "dateArialabel12": "Copy Date for req_a14e4d57-eab3-4a91",
    "requestId": "req_a14e4d57-eab3-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4d57-eab3-4a91",
    "requestIdArialabel7": "Inspect req_a14e4d57-eab3-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4d57-eab3-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4d57-eab3-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4d57-eab3-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e4d57-eab3-4a91",
    "modelArialabel9": "Copy Model for req_a14e4d57-eab3-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e4d57-eab3-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4d57-eab3-4a91",
    "latency": "1,575ms",
    "latencyArialabel2": "Latency details for req_a14e4d57-eab3-4a91",
    "latencyStyle8": "width:19.20731707317073%",
    "latencyText10": "1,575",
    "latencyArialabel13": "Copy Latency for req_a14e4d57-eab3-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4d57-eab3-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1088 ms, generation 463 ms",
    "timingPhasesStyle8": "width:1.5238095238095237%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:69.07936507936509%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4d57-eab3-4a91"
  },
  {
    "_id": "63",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:55:37",
    "dateArialabel2": "Date details for req_a14e4caa-eab2-4a91",
    "dateText10": "12:55:37",
    "dateArialabel12": "Copy Date for req_a14e4caa-eab2-4a91",
    "requestId": "req_a14e4caa-eab2-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4caa-eab2-4a91",
    "requestIdArialabel7": "Inspect req_a14e4caa-eab2-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4caa-eab2-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4caa-eab2-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4caa-eab2-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e4caa-eab2-4a91",
    "modelArialabel9": "Copy Model for req_a14e4caa-eab2-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e4caa-eab2-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4caa-eab2-4a91",
    "latency": "1,280ms",
    "latencyArialabel2": "Latency details for req_a14e4caa-eab2-4a91",
    "latencyStyle8": "width:15.609756097560975%",
    "latencyText10": "1,280",
    "latencyArialabel13": "Copy Latency for req_a14e4caa-eab2-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4caa-eab2-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1013 ms, generation 243 ms",
    "timingPhasesStyle8": "width:1.875%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:79.140625%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4caa-eab2-4a91"
  },
  {
    "_id": "64",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:55:26",
    "dateArialabel2": "Date details for req_a14e4bfd-eab1-4a91",
    "dateText10": "12:55:26",
    "dateArialabel12": "Copy Date for req_a14e4bfd-eab1-4a91",
    "requestId": "req_a14e4bfd-eab1-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4bfd-eab1-4a91",
    "requestIdArialabel7": "Inspect req_a14e4bfd-eab1-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4bfd-eab1-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4bfd-eab1-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4bfd-eab1-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e4bfd-eab1-4a91",
    "modelArialabel9": "Copy Model for req_a14e4bfd-eab1-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e4bfd-eab1-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4bfd-eab1-4a91",
    "latency": "985ms",
    "latencyArialabel2": "Latency details for req_a14e4bfd-eab1-4a91",
    "latencyStyle8": "width:12.012195121951219%",
    "latencyText10": "985",
    "latencyArialabel13": "Copy Latency for req_a14e4bfd-eab1-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4bfd-eab1-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 937 ms, generation 24 ms",
    "timingPhasesStyle8": "width:2.4365482233502536%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:95.12690355329948%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4bfd-eab1-4a91"
  },
  {
    "_id": "65",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:55:14",
    "dateArialabel2": "Date details for req_a14e4b50-eab0-4a91",
    "dateText10": "12:55:14",
    "dateArialabel12": "Copy Date for req_a14e4b50-eab0-4a91",
    "requestId": "req_a14e4b50-eab0-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4b50-eab0-4a91",
    "requestIdArialabel7": "Inspect req_a14e4b50-eab0-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4b50-eab0-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4b50-eab0-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4b50-eab0-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e4b50-eab0-4a91",
    "modelArialabel9": "Copy Model for req_a14e4b50-eab0-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e4b50-eab0-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4b50-eab0-4a91",
    "latency": "160ms",
    "latencyArialabel2": "Latency details for req_a14e4b50-eab0-4a91",
    "latencyStyle8": "width:1.951219512195122%",
    "latencyText10": "160",
    "latencyArialabel13": "Copy Latency for req_a14e4b50-eab0-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4b50-eab0-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 136 ms, generation 0 ms",
    "timingPhasesStyle8": "width:15%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:85%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4b50-eab0-4a91"
  },
  {
    "_id": "66",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:51:29",
    "dateArialabel2": "Date details for req_a14e4aa3-eaaf-4a91",
    "dateText10": "12:51:29",
    "dateArialabel12": "Copy Date for req_a14e4aa3-eaaf-4a91",
    "requestId": "req_a14e4aa3-eaaf-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4aa3-eaaf-4a91",
    "requestIdArialabel7": "Inspect req_a14e4aa3-eaaf-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4aa3-eaaf-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4aa3-eaaf-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4aa3-eaaf-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e4aa3-eaaf-4a91",
    "modelArialabel9": "Copy Model for req_a14e4aa3-eaaf-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e4aa3-eaaf-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4aa3-eaaf-4a91",
    "latency": "7,795ms",
    "latencyArialabel2": "Latency details for req_a14e4aa3-eaaf-4a91",
    "latencyStyle8": "width:95.0609756097561%",
    "latencyText10": "7,795",
    "latencyArialabel13": "Copy Latency for req_a14e4aa3-eaaf-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4aa3-eaaf-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 785 ms, generation 6986 ms",
    "timingPhasesStyle8": "width:0.3078896728672226%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:10.070558050032071%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4aa3-eaaf-4a91"
  },
  {
    "_id": "67",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:51:08",
    "dateArialabel2": "Date details for req_a14e49f6-eaae-4a91",
    "dateText10": "12:51:08",
    "dateArialabel12": "Copy Date for req_a14e49f6-eaae-4a91",
    "requestId": "req_a14e49f6-eaae-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e49f6-eaae-4a91",
    "requestIdArialabel7": "Inspect req_a14e49f6-eaae-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e49f6-eaae-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e49f6-eaae-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e49f6-eaae-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e49f6-eaae-4a91",
    "modelArialabel9": "Copy Model for req_a14e49f6-eaae-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e49f6-eaae-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e49f6-eaae-4a91",
    "latency": "7,499ms",
    "latencyArialabel2": "Latency details for req_a14e49f6-eaae-4a91",
    "latencyStyle8": "width:91.45121951219512%",
    "latencyText10": "7,499",
    "latencyArialabel13": "Copy Latency for req_a14e49f6-eaae-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e49f6-eaae-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 710 ms, generation 6765 ms",
    "timingPhasesStyle8": "width:0.3200426723563142%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:9.467929057207627%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e49f6-eaae-4a91"
  },
  {
    "_id": "68",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:50:04",
    "dateArialabel2": "Date details for req_a14e4949-eaad-4a91",
    "dateText10": "12:50:04",
    "dateArialabel12": "Copy Date for req_a14e4949-eaad-4a91",
    "requestId": "req_a14e4949-eaad-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4949-eaad-4a91",
    "requestIdArialabel7": "Inspect req_a14e4949-eaad-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4949-eaad-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4949-eaad-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4949-eaad-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e4949-eaad-4a91",
    "modelArialabel9": "Copy Model for req_a14e4949-eaad-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e4949-eaad-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4949-eaad-4a91",
    "latency": "7,204ms",
    "latencyArialabel2": "Latency details for req_a14e4949-eaad-4a91",
    "latencyStyle8": "width:87.85365853658537%",
    "latencyText10": "7,204",
    "latencyArialabel13": "Copy Latency for req_a14e4949-eaad-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4949-eaad-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 634 ms, generation 6546 ms",
    "timingPhasesStyle8": "width:0.3331482509716824%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:8.800666296501944%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4949-eaad-4a91"
  },
  {
    "_id": "69",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:49:03",
    "dateArialabel2": "Date details for req_a14e489c-eaac-4a91",
    "dateText10": "12:49:03",
    "dateArialabel12": "Copy Date for req_a14e489c-eaac-4a91",
    "requestId": "req_a14e489c-eaac-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e489c-eaac-4a91",
    "requestIdArialabel7": "Inspect req_a14e489c-eaac-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e489c-eaac-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e489c-eaac-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e489c-eaac-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e489c-eaac-4a91",
    "modelArialabel9": "Copy Model for req_a14e489c-eaac-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e489c-eaac-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e489c-eaac-4a91",
    "latency": "496ms",
    "latencyArialabel2": "Latency details for req_a14e489c-eaac-4a91",
    "latencyStyle8": "width:6.048780487804878%",
    "latencyText10": "496",
    "latencyArialabel13": "Copy Latency for req_a14e489c-eaac-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e489c-eaac-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 472 ms, generation 0 ms",
    "timingPhasesStyle8": "width:4.838709677419355%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:95.16129032258065%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e489c-eaac-4a91"
  },
  {
    "_id": "70",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:47:14",
    "dateArialabel2": "Date details for req_a14e47ef-eaab-4a91",
    "dateText10": "12:47:14",
    "dateArialabel12": "Copy Date for req_a14e47ef-eaab-4a91",
    "requestId": "req_a14e47ef-eaab-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e47ef-eaab-4a91",
    "requestIdArialabel7": "Inspect req_a14e47ef-eaab-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e47ef-eaab-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e47ef-eaab-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e47ef-eaab-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e47ef-eaab-4a91",
    "modelArialabel9": "Copy Model for req_a14e47ef-eaab-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e47ef-eaab-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e47ef-eaab-4a91",
    "latency": "6,614ms",
    "latencyArialabel2": "Latency details for req_a14e47ef-eaab-4a91",
    "latencyStyle8": "width:80.65853658536585%",
    "latencyText10": "6,614",
    "latencyArialabel13": "Copy Latency for req_a14e47ef-eaab-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e47ef-eaab-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 482 ms, generation 6108 ms",
    "timingPhasesStyle8": "width:0.3628666465074085%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:7.287571817357122%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e47ef-eaab-4a91"
  },
  {
    "_id": "71",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:41:08",
    "dateArialabel2": "Date details for req_a14e4742-eaaa-4a91",
    "dateText10": "12:41:08",
    "dateArialabel12": "Copy Date for req_a14e4742-eaaa-4a91",
    "requestId": "req_a14e4742-eaaa-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4742-eaaa-4a91",
    "requestIdArialabel7": "Inspect req_a14e4742-eaaa-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4742-eaaa-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4742-eaaa-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4742-eaaa-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e4742-eaaa-4a91",
    "modelArialabel9": "Copy Model for req_a14e4742-eaaa-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e4742-eaaa-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4742-eaaa-4a91",
    "latency": "6,319ms",
    "latencyArialabel2": "Latency details for req_a14e4742-eaaa-4a91",
    "latencyStyle8": "width:77.0609756097561%",
    "latencyText10": "6,319",
    "latencyArialabel13": "Copy Latency for req_a14e4742-eaaa-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4742-eaaa-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 407 ms, generation 5888 ms",
    "timingPhasesStyle8": "width:0.3798069314764994%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:6.44089254628897%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4742-eaaa-4a91"
  },
  {
    "_id": "72",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:34:12",
    "dateArialabel2": "Date details for req_a14e4695-eaa9-4a91",
    "dateText10": "12:34:12",
    "dateArialabel12": "Copy Date for req_a14e4695-eaa9-4a91",
    "requestId": "req_a14e4695-eaa9-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4695-eaa9-4a91",
    "requestIdArialabel7": "Inspect req_a14e4695-eaa9-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4695-eaa9-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4695-eaa9-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4695-eaa9-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e4695-eaa9-4a91",
    "modelArialabel9": "Copy Model for req_a14e4695-eaa9-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e4695-eaa9-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4695-eaa9-4a91",
    "latency": "6,024ms",
    "latencyArialabel2": "Latency details for req_a14e4695-eaa9-4a91",
    "latencyStyle8": "width:73.46341463414635%",
    "latencyText10": "6,024",
    "latencyArialabel13": "Copy Latency for req_a14e4695-eaa9-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4695-eaa9-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 331 ms, generation 5669 ms",
    "timingPhasesStyle8": "width:0.398406374501992%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:5.49468791500664%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4695-eaa9-4a91"
  },
  {
    "_id": "73",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:33:20",
    "dateArialabel2": "Date details for req_a14e45e8-eaa8-4a91",
    "dateText10": "12:33:20",
    "dateArialabel12": "Copy Date for req_a14e45e8-eaa8-4a91",
    "requestId": "req_a14e45e8-eaa8-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e45e8-eaa8-4a91",
    "requestIdArialabel7": "Inspect req_a14e45e8-eaa8-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e45e8-eaa8-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e45e8-eaa8-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e45e8-eaa8-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e45e8-eaa8-4a91",
    "modelArialabel9": "Copy Model for req_a14e45e8-eaa8-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e45e8-eaa8-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e45e8-eaa8-4a91",
    "latency": "432ms",
    "latencyArialabel2": "Latency details for req_a14e45e8-eaa8-4a91",
    "latencyStyle8": "width:5.2682926829268295%",
    "latencyText10": "432",
    "latencyArialabel13": "Copy Latency for req_a14e45e8-eaa8-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e45e8-eaa8-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 255 ms, generation 153 ms",
    "timingPhasesStyle8": "width:5.555555555555555%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:59.02777777777778%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e45e8-eaa8-4a91"
  },
  {
    "_id": "74",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:32:59",
    "dateArialabel2": "Date details for req_a14e453b-eaa7-4a91",
    "dateText10": "12:32:59",
    "dateArialabel12": "Copy Date for req_a14e453b-eaa7-4a91",
    "requestId": "req_a14e453b-eaa7-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e453b-eaa7-4a91",
    "requestIdArialabel7": "Inspect req_a14e453b-eaa7-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e453b-eaa7-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e453b-eaa7-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e453b-eaa7-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e453b-eaa7-4a91",
    "modelArialabel9": "Copy Model for req_a14e453b-eaa7-4a91",
    "endpoint": "/v1/realtime/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e453b-eaa7-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e453b-eaa7-4a91",
    "latency": "5,434ms",
    "latencyArialabel2": "Latency details for req_a14e453b-eaa7-4a91",
    "latencyStyle8": "width:66.26829268292683%",
    "latencyText10": "5,434",
    "latencyArialabel13": "Copy Latency for req_a14e453b-eaa7-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e453b-eaa7-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 179 ms, generation 5231 ms",
    "timingPhasesStyle8": "width:0.44166359955833645%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:3.2940743467059255%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e453b-eaa7-4a91"
  },
  {
    "_id": "75",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:32:52",
    "dateArialabel2": "Date details for req_a14e448e-eaa6-4a91",
    "dateText10": "12:32:52",
    "dateArialabel12": "Copy Date for req_a14e448e-eaa6-4a91",
    "requestId": "req_a14e448e-eaa6-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e448e-eaa6-4a91",
    "requestIdArialabel7": "Inspect req_a14e448e-eaa6-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e448e-eaa6-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e448e-eaa6-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e448e-eaa6-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e448e-eaa6-4a91",
    "modelArialabel9": "Copy Model for req_a14e448e-eaa6-4a91",
    "endpoint": "/v1/traces",
    "endpointArialabel2": "Endpoint details for req_a14e448e-eaa6-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e448e-eaa6-4a91",
    "latency": "5,139ms",
    "latencyArialabel2": "Latency details for req_a14e448e-eaa6-4a91",
    "latencyStyle8": "width:62.670731707317074%",
    "latencyText10": "5,139",
    "latencyArialabel13": "Copy Latency for req_a14e448e-eaa6-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e448e-eaa6-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 104 ms, generation 5011 ms",
    "timingPhasesStyle8": "width:0.46701692936368944%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:2.0237400272426544%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e448e-eaa6-4a91"
  },
  {
    "_id": "76",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:32:36",
    "dateArialabel2": "Date details for req_a14e43e1-eaa5-4a91",
    "dateText10": "12:32:36",
    "dateArialabel12": "Copy Date for req_a14e43e1-eaa5-4a91",
    "requestId": "req_a14e43e1-eaa5-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e43e1-eaa5-4a91",
    "requestIdArialabel7": "Inspect req_a14e43e1-eaa5-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e43e1-eaa5-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e43e1-eaa5-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e43e1-eaa5-4a91",
    "model": "gpt-4.1",
    "modelArialabel2": "Model details for req_a14e43e1-eaa5-4a91",
    "modelArialabel9": "Copy Model for req_a14e43e1-eaa5-4a91",
    "endpoint": "/v1/agents/runs",
    "endpointArialabel2": "Endpoint details for req_a14e43e1-eaa5-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e43e1-eaa5-4a91",
    "latency": "4,844ms",
    "latencyArialabel2": "Latency details for req_a14e43e1-eaa5-4a91",
    "latencyStyle8": "width:59.073170731707314%",
    "latencyText10": "4,844",
    "latencyArialabel13": "Copy Latency for req_a14e43e1-eaa5-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e43e1-eaa5-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1928 ms, generation 2892 ms",
    "timingPhasesStyle8": "width:0.495458298926507%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:39.8018166804294%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e43e1-eaa5-4a91"
  },
  {
    "_id": "77",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:31:56",
    "dateArialabel2": "Date details for req_a14e4334-eaa4-4a91",
    "dateText10": "12:31:56",
    "dateArialabel12": "Copy Date for req_a14e4334-eaa4-4a91",
    "requestId": "req_a14e4334-eaa4-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4334-eaa4-4a91",
    "requestIdArialabel7": "Inspect req_a14e4334-eaa4-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4334-eaa4-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4334-eaa4-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4334-eaa4-4a91",
    "model": "claude-opus-4",
    "modelArialabel2": "Model details for req_a14e4334-eaa4-4a91",
    "modelArialabel9": "Copy Model for req_a14e4334-eaa4-4a91",
    "endpoint": "/v1/responses",
    "endpointArialabel2": "Endpoint details for req_a14e4334-eaa4-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4334-eaa4-4a91",
    "latency": "369ms",
    "latencyArialabel2": "Latency details for req_a14e4334-eaa4-4a91",
    "latencyStyle8": "width:4.5%",
    "latencyText10": "369",
    "latencyArialabel13": "Copy Latency for req_a14e4334-eaa4-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4334-eaa4-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 345 ms, generation 0 ms",
    "timingPhasesStyle8": "width:6.504065040650407%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:93.4959349593496%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4334-eaa4-4a91"
  },
  {
    "_id": "78",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:31:40",
    "dateArialabel2": "Date details for req_a14e4287-eaa3-4a91",
    "dateText10": "12:31:40",
    "dateArialabel12": "Copy Date for req_a14e4287-eaa3-4a91",
    "requestId": "req_a14e4287-eaa3-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e4287-eaa3-4a91",
    "requestIdArialabel7": "Inspect req_a14e4287-eaa3-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e4287-eaa3-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e4287-eaa3-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e4287-eaa3-4a91",
    "model": "gemini-2.5-flash",
    "modelArialabel2": "Model details for req_a14e4287-eaa3-4a91",
    "modelArialabel9": "Copy Model for req_a14e4287-eaa3-4a91",
    "endpoint": "/v1/chatkit/sessions",
    "endpointArialabel2": "Endpoint details for req_a14e4287-eaa3-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e4287-eaa3-4a91",
    "latency": "4,254ms",
    "latencyArialabel2": "Latency details for req_a14e4287-eaa3-4a91",
    "latencyStyle8": "width:51.87804878048781%",
    "latencyText10": "4,254",
    "latencyArialabel13": "Copy Latency for req_a14e4287-eaa3-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e4287-eaa3-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1776 ms, generation 2454 ms",
    "timingPhasesStyle8": "width:0.5641748942172073%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:41.74894217207334%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e4287-eaa3-4a91"
  },
  {
    "_id": "79",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:29:04",
    "dateArialabel2": "Date details for req_a14e41da-eaa2-4a91",
    "dateText10": "12:29:04",
    "dateArialabel12": "Copy Date for req_a14e41da-eaa2-4a91",
    "requestId": "req_a14e41da-eaa2-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e41da-eaa2-4a91",
    "requestIdArialabel7": "Inspect req_a14e41da-eaa2-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e41da-eaa2-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e41da-eaa2-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e41da-eaa2-4a91",
    "model": "gpt-4.1-mini",
    "modelArialabel2": "Model details for req_a14e41da-eaa2-4a91",
    "modelArialabel9": "Copy Model for req_a14e41da-eaa2-4a91",
    "endpoint": "/v1/conversations",
    "endpointArialabel2": "Endpoint details for req_a14e41da-eaa2-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e41da-eaa2-4a91",
    "latency": "3,959ms",
    "latencyArialabel2": "Latency details for req_a14e41da-eaa2-4a91",
    "latencyStyle8": "width:48.28048780487805%",
    "latencyText10": "3,959",
    "latencyArialabel13": "Copy Latency for req_a14e41da-eaa2-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e41da-eaa2-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1701 ms, generation 2234 ms",
    "timingPhasesStyle8": "width:0.6062136903258398%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:42.9653953018439%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e41da-eaa2-4a91"
  },
  {
    "_id": "80",
    "selection": "",
    "actions": "",
    "actionsArialabel2": "Success",
    "actionsClass3": "inline-block size-3.5 rounded-[4px] bg-success",
    "date": "Sep 11, 202612:25:51",
    "dateArialabel2": "Date details for req_a14e412d-eaa1-4a91",
    "dateText10": "12:25:51",
    "dateArialabel12": "Copy Date for req_a14e412d-eaa1-4a91",
    "requestId": "req_a14e412d-eaa1-4a91",
    "requestIdArialabel2": "Request Id details for req_a14e412d-eaa1-4a91",
    "requestIdArialabel7": "Inspect req_a14e412d-eaa1-4a91",
    "requestIdArialabel10": "Copy Request Id for req_a14e412d-eaa1-4a91",
    "status": "200",
    "statusArialabel2": "Status details for req_a14e412d-eaa1-4a91",
    "statusClass6": "inline-flex rounded border border-success/20 bg-success/10 px-1.5 py-0.5 font-mono text-xs text-success dark:border-success/20 dark:bg-success/30 dark:text-success",
    "statusTitle7": "OK",
    "statusArialabel10": "Copy Status for req_a14e412d-eaa1-4a91",
    "model": "claude-sonnet-4",
    "modelArialabel2": "Model details for req_a14e412d-eaa1-4a91",
    "modelArialabel9": "Copy Model for req_a14e412d-eaa1-4a91",
    "endpoint": "/v1/chat/completions",
    "endpointArialabel2": "Endpoint details for req_a14e412d-eaa1-4a91",
    "endpointArialabel9": "Copy Endpoint for req_a14e412d-eaa1-4a91",
    "latency": "3,664ms",
    "latencyArialabel2": "Latency details for req_a14e412d-eaa1-4a91",
    "latencyStyle8": "width:44.6829268292683%",
    "latencyText10": "3,664",
    "latencyArialabel13": "Copy Latency for req_a14e412d-eaa1-4a91",
    "timingPhases": "",
    "timingPhasesArialabel2": "Timing Phases details for req_a14e412d-eaa1-4a91",
    "timingPhasesArialabel7": "Gateway 24 ms, first response 1625 ms, generation 2015 ms",
    "timingPhasesStyle8": "width:0.6550218340611353%;min-width:5px;background:color-mix(in oklch, var(--ui-primary) 46%, var(--ui-bg))",
    "timingPhasesStyle9": "width:44.3504366812227%;background:color-mix(in oklch, var(--ui-primary) 70%, var(--ui-bg))",
    "timingPhasesArialabel12": "Copy Timing Phases for req_a14e412d-eaa1-4a91"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "selection",
    "header": "",
    "enableSorting": false
  },
  {
    "accessorKey": "actions",
    "header": ""
  },
  {
    "accessorKey": "date",
    "header": "Date"
  },
  {
    "accessorKey": "requestId",
    "header": "Request Id"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "model",
    "header": "Model"
  },
  {
    "accessorKey": "endpoint",
    "header": "Endpoint"
  },
  {
    "accessorKey": "latency",
    "header": "Latency"
  },
  {
    "accessorKey": "timingPhases",
    "header": "Timing Phases"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchDataTable || '').toLowerCase()
  const keys = ["actions","date","requestId","status","model","endpoint","latency","timingPhases"] as const
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/api-requests">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1">
        <h1 class="sr-only text-highlighted">API requests</h1>
        <aside aria-label="Request filters" class="w-[236px] shrink-0 border-r hidden lg:block border-default">
          <div class="flex h-full flex-col">
            <div class="flex h-[58px] shrink-0 items-center border-b px-3 border-default">
              <h1 class="text-base font-medium text-highlighted">Filters</h1>
            </div>
            <div class="min-h-0 flex-1 overflow-y-auto overscroll-none">
              <div data-orientation="vertical">
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 px-3 py-3 hover:no-underline" aria-label="Level" type="button" @click="openAction(&quot;Level&quot;)">
                      Level
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_9m6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 129.75px; --radix-collapsible-content-width: 235px;">
                    <div class="pt-0 px-2 pb-5">
                      <fieldset data-slot="field-set" class="flex flex-col has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3 gap-0 overflow-hidden rounded-lg border border-default">
                        <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base sr-only">Response level</legend>
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-0">
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px gap-2 border-b px-2 py-2 last:border-b-0 border-default">
                            <UCheckbox v-model="form.enabled" aria-label="Toggle setting" />
                            <label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col min-w-0 flex-1 items-center gap-2 font-mono font-normal" data-slot="field-label" for="_R_26tbsnpfknmlb_-Success">
                              <span class="w-[7ch] shrink-0">Success</span>
                              <span class="bg-success size-2.5 shrink-0 rounded-[2px]" />
                              <span class="text-muted text-xs">2xx</span>
                            </label>
                            <span class="text-muted font-mono text-xs">675</span>
                          </div>
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px gap-2 border-b px-2 py-2 last:border-b-0 border-default">
                            <UCheckbox v-model="form.enabled2" aria-label="Toggle setting" />
                            <label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col min-w-0 flex-1 items-center gap-2 font-mono font-normal" data-slot="field-label" for="_R_26tbsnpfknmlb_-Warning">
                              <span class="w-[7ch] shrink-0">Warning</span>
                              <span class="bg-warning size-2.5 shrink-0 rounded-[2px]" />
                              <span class="text-muted text-xs">4xx</span>
                            </label>
                            <span class="text-muted font-mono text-xs">14</span>
                          </div>
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px gap-2 border-b px-2 py-2 last:border-b-0 border-default">
                            <UCheckbox v-model="form.enabled3" aria-label="Toggle setting" />
                            <label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col min-w-0 flex-1 items-center gap-2 font-mono font-normal" data-slot="field-label" for="_R_26tbsnpfknmlb_-Error">
                              <span class="w-[7ch] shrink-0">Error</span>
                              <span class="bg-(--ui-error) size-2.5 shrink-0 rounded-[2px]" />
                              <span class="text-muted text-xs">5xx</span>
                            </label>
                            <span class="text-muted font-mono text-xs">31</span>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 px-3 py-3 hover:no-underline" aria-label="Date" type="button" @click="openAction(&quot;Date&quot;)">
                      Date
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_am6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 56px; --radix-collapsible-content-width: 235px;">
                    <div class="pt-0 px-2 pb-5">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 bg-(--ui-bg-muted)/30 h-9 w-full justify-start" aria-label="Pick a date" type="button" @click="openAction(&quot;Pick a date&quot;)">
                        <UIcon name="i-lucide-calendar-days" class="size-4" />
                        <span class="text-muted">Pick a date</span>
                      </UButton>
                    </div>
                  </div>
                </div>
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-muted px-3 py-2.5 hover:no-underline" aria-label="Log source" type="button" @click="openAction(&quot;Log source&quot;)">
                      <span>Log source</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_1bm6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                </div>
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-muted px-3 py-2.5 hover:no-underline" aria-label="Provider" type="button" @click="openAction(&quot;Provider&quot;)">
                      <span>Provider</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_1jm6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                </div>
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-muted px-3 py-2.5 hover:no-underline" aria-label="Model" type="button" @click="openAction(&quot;Model&quot;)">
                      <span>Model</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_1rm6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                </div>
                <div data-orientation="vertical" class="border-b border-default">
                  <h3 data-orientation="vertical" class="flex text-highlighted">
                    <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex flex-1 items-center justify-between text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-muted px-3 py-2.5 hover:no-underline" aria-label="Latency" type="button" @click="openAction(&quot;Latency&quot;)">
                      Latency
                      <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                    </UButton>
                  </h3>
                  <div id="radix-_R_cm6tbsnpfknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div class="flex min-w-0 flex-1 flex-col">
          <div class="shrink-0 px-2 pt-1">
            <div data-slot="input-group" role="group" class="group/input-group relative flex w-full min-w-0 items-center border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-[46px] rounded-lg">
              <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                <UIcon name="i-lucide-search" class="size-4" />
              </div>
              <UInput v-model="form.searchDataTable" type="text" data-slot="input-group-control" aria-label="Search requests" placeholder="Search data table..." name="searchDataTable" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
              <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                <UButton color="neutral" variant="soft" class="bg-muted text-muted rounded px-1.5 py-0.5 font-mono text-xs" aria-label="⌘ K" type="button" @click="openAction(&quot;⌘ K&quot;)">
                  ⌘ K
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex h-[62px] shrink-0 items-center justify-between gap-2 px-3">
            <div class="flex min-w-0 items-center gap-4">
              <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 hidden lg:inline-flex" aria-label="Hide controls" type="button" @click="openAction(&quot;Hide controls&quot;)">
                <UIcon name="i-lucide-panel-left-close" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 lg:hidden" aria-label="Open request filters" type="button" @click="openAction(&quot;Open request filters&quot;)">
                <UIcon name="i-lucide-panel-left-open" class="size-4" />
              </UButton>
              <span class="text-muted truncate text-sm">
                <span class="font-mono">720</span>
                of
                <span class="font-mono">720</span>
                <span class="hidden sm:inline">row(s) filtered</span>
              </span>
            </div>
            <div class="flex shrink-0 items-center gap-2">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9" aria-label="Reset all filters and traffic" type="button" @click="openAction(&quot;Reset all filters and traffic&quot;)">
                <UIcon name="i-lucide-rotate-ccw" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 gap-3" aria-label="Live" type="button" @click="openAction(&quot;Live&quot;)">
                <UIcon name="i-lucide-play" class="size-4" />
                Live
              </UButton>
              <div class="flex items-center">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 w-9" aria-label="Table settings" type="button" @click="openAction(&quot;Table settings&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-3 border-b px-3 pb-3 border-default">
            <span class="text-muted text-xs">Log source</span>
            <USelect v-model="form.allSources" :items="allSourcesOptions" aria-label="Log source" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
          </div>
          <section aria-label="Request timeline" class="h-[74px] shrink-0 border-b px-2 pt-1 pb-3 border-default">
            <div>
              <div class="relative flex h-[32px] touch-none items-end gap-[6px] select-none">
                <UButton color="neutral" variant="ghost" title="14:30:00 UTC · 12 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 14:30:00 to 15:00:00 UTC, 12 requests, 0 errors" type="button" @click="openAction(&quot;Filter 14:30:00 to 15:00:00 UTC, 12 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="15:00:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 15:00:00 to 15:30:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 15:00:00 to 15:30:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="15:30:00 UTC · 16 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 15:30:00 to 16:00:00 UTC, 16 requests, 1 errors" type="button" @click="openAction(&quot;Filter 15:30:00 to 16:00:00 UTC, 16 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="16:00:00 UTC · 15 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 16:00:00 to 16:30:00 UTC, 15 requests, 1 errors" type="button" @click="openAction(&quot;Filter 16:00:00 to 16:30:00 UTC, 15 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="16:30:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 16:30:00 to 17:00:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 16:30:00 to 17:00:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="17:00:00 UTC · 9 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 17:00:00 to 17:30:00 UTC, 9 requests, 1 errors" type="button" @click="openAction(&quot;Filter 17:00:00 to 17:30:00 UTC, 9 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:32.72727272727273%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="17:30:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 17:30:00 to 18:00:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 17:30:00 to 18:00:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="18:00:00 UTC · 15 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 18:00:00 to 18:30:00 UTC, 15 requests, 2 errors" type="button" @click="openAction(&quot;Filter 18:00:00 to 18:30:00 UTC, 15 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="18:30:00 UTC · 13 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 18:30:00 to 19:00:00 UTC, 13 requests, 0 errors" type="button" @click="openAction(&quot;Filter 18:30:00 to 19:00:00 UTC, 13 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="19:00:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 19:00:00 to 19:30:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 19:00:00 to 19:30:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="19:30:00 UTC · 13 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 19:30:00 to 20:00:00 UTC, 13 requests, 1 errors" type="button" @click="openAction(&quot;Filter 19:30:00 to 20:00:00 UTC, 13 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="20:00:00 UTC · 15 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 20:00:00 to 20:30:00 UTC, 15 requests, 1 errors" type="button" @click="openAction(&quot;Filter 20:00:00 to 20:30:00 UTC, 15 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="20:30:00 UTC · 10 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 20:30:00 to 21:00:00 UTC, 10 requests, 0 errors" type="button" @click="openAction(&quot;Filter 20:30:00 to 21:00:00 UTC, 10 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:40.90909090909091%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="21:00:00 UTC · 13 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 21:00:00 to 21:30:00 UTC, 13 requests, 1 errors" type="button" @click="openAction(&quot;Filter 21:00:00 to 21:30:00 UTC, 13 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="21:30:00 UTC · 16 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 21:30:00 to 22:00:00 UTC, 16 requests, 0 errors" type="button" @click="openAction(&quot;Filter 21:30:00 to 22:00:00 UTC, 16 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:65.45454545454545%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="22:00:00 UTC · 16 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 22:00:00 to 22:30:00 UTC, 16 requests, 2 errors" type="button" @click="openAction(&quot;Filter 22:00:00 to 22:30:00 UTC, 16 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="22:30:00 UTC · 13 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 22:30:00 to 23:00:00 UTC, 13 requests, 0 errors" type="button" @click="openAction(&quot;Filter 22:30:00 to 23:00:00 UTC, 13 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="23:00:00 UTC · 19 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 23:00:00 to 23:30:00 UTC, 19 requests, 0 errors" type="button" @click="openAction(&quot;Filter 23:00:00 to 23:30:00 UTC, 19 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:77.72727272727273%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="23:30:00 UTC · 17 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 23:30:00 to 00:00:00 UTC, 17 requests, 2 errors" type="button" @click="openAction(&quot;Filter 23:30:00 to 00:00:00 UTC, 17 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="00:00:00 UTC · 13 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 00:00:00 to 00:30:00 UTC, 13 requests, 0 errors" type="button" @click="openAction(&quot;Filter 00:00:00 to 00:30:00 UTC, 13 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="00:30:00 UTC · 20 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 00:30:00 to 01:00:00 UTC, 20 requests, 1 errors" type="button" @click="openAction(&quot;Filter 00:30:00 to 01:00:00 UTC, 20 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:77.72727272727273%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="01:00:00 UTC · 13 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 01:00:00 to 01:30:00 UTC, 13 requests, 1 errors" type="button" @click="openAction(&quot;Filter 01:00:00 to 01:30:00 UTC, 13 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="01:30:00 UTC · 13 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 01:30:00 to 02:00:00 UTC, 13 requests, 0 errors" type="button" @click="openAction(&quot;Filter 01:30:00 to 02:00:00 UTC, 13 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="02:00:00 UTC · 19 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 02:00:00 to 02:30:00 UTC, 19 requests, 1 errors" type="button" @click="openAction(&quot;Filter 02:00:00 to 02:30:00 UTC, 19 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:73.63636363636364%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="02:30:00 UTC · 12 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 02:30:00 to 03:00:00 UTC, 12 requests, 0 errors" type="button" @click="openAction(&quot;Filter 02:30:00 to 03:00:00 UTC, 12 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="03:00:00 UTC · 16 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 03:00:00 to 03:30:00 UTC, 16 requests, 2 errors" type="button" @click="openAction(&quot;Filter 03:00:00 to 03:30:00 UTC, 16 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="03:30:00 UTC · 13 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 03:30:00 to 04:00:00 UTC, 13 requests, 0 errors" type="button" @click="openAction(&quot;Filter 03:30:00 to 04:00:00 UTC, 13 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="04:00:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 04:00:00 to 04:30:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 04:00:00 to 04:30:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="04:30:00 UTC · 14 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 04:30:00 to 05:00:00 UTC, 14 requests, 1 errors" type="button" @click="openAction(&quot;Filter 04:30:00 to 05:00:00 UTC, 14 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="05:00:00 UTC · 15 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 05:00:00 to 05:30:00 UTC, 15 requests, 1 errors" type="button" @click="openAction(&quot;Filter 05:00:00 to 05:30:00 UTC, 15 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="05:30:00 UTC · 15 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 05:30:00 to 06:00:00 UTC, 15 requests, 1 errors" type="button" @click="openAction(&quot;Filter 05:30:00 to 06:00:00 UTC, 15 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="06:00:00 UTC · 18 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 06:00:00 to 06:30:00 UTC, 18 requests, 0 errors" type="button" @click="openAction(&quot;Filter 06:00:00 to 06:30:00 UTC, 18 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:73.63636363636364%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="06:30:00 UTC · 18 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 06:30:00 to 07:00:00 UTC, 18 requests, 2 errors" type="button" @click="openAction(&quot;Filter 06:30:00 to 07:00:00 UTC, 18 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:65.45454545454545%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="07:00:00 UTC · 20 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 07:00:00 to 07:30:00 UTC, 20 requests, 0 errors" type="button" @click="openAction(&quot;Filter 07:00:00 to 07:30:00 UTC, 20 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:81.81818181818181%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="07:30:00 UTC · 17 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 07:30:00 to 08:00:00 UTC, 17 requests, 1 errors" type="button" @click="openAction(&quot;Filter 07:30:00 to 08:00:00 UTC, 17 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:65.45454545454545%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="08:00:00 UTC · 14 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 08:00:00 to 08:30:00 UTC, 14 requests, 1 errors" type="button" @click="openAction(&quot;Filter 08:00:00 to 08:30:00 UTC, 14 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="08:30:00 UTC · 17 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 08:30:00 to 09:00:00 UTC, 17 requests, 0 errors" type="button" @click="openAction(&quot;Filter 08:30:00 to 09:00:00 UTC, 17 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:69.54545454545455%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="09:00:00 UTC · 8 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 09:00:00 to 09:30:00 UTC, 8 requests, 1 errors" type="button" @click="openAction(&quot;Filter 09:00:00 to 09:30:00 UTC, 8 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:28.636363636363637%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="09:30:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 09:30:00 to 10:00:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 09:30:00 to 10:00:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="10:00:00 UTC · 12 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 10:00:00 to 10:30:00 UTC, 12 requests, 1 errors" type="button" @click="openAction(&quot;Filter 10:00:00 to 10:30:00 UTC, 12 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:45%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="10:30:00 UTC · 17 requests · 1 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 10:30:00 to 11:00:00 UTC, 17 requests, 1 errors" type="button" @click="openAction(&quot;Filter 10:30:00 to 11:00:00 UTC, 17 requests, 1 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:4.090909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:65.45454545454545%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="11:00:00 UTC · 12 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 11:00:00 to 11:30:00 UTC, 12 requests, 0 errors" type="button" @click="openAction(&quot;Filter 11:00:00 to 11:30:00 UTC, 12 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="11:30:00 UTC · 9 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 11:30:00 to 12:00:00 UTC, 9 requests, 0 errors" type="button" @click="openAction(&quot;Filter 11:30:00 to 12:00:00 UTC, 9 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:36.81818181818182%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="12:00:00 UTC · 15 requests · 2 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 12:00:00 to 12:30:00 UTC, 15 requests, 2 errors" type="button" @click="openAction(&quot;Filter 12:00:00 to 12:30:00 UTC, 15 requests, 2 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:8.181818181818182%" />
                  <span class="bg-primary/20 block w-full" style="height:53.18181818181819%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="12:30:00 UTC · 21 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 12:30:00 to 13:00:00 UTC, 21 requests, 0 errors" type="button" @click="openAction(&quot;Filter 12:30:00 to 13:00:00 UTC, 21 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:85.9090909090909%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="13:00:00 UTC · 20 requests · 6 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 13:00:00 to 13:30:00 UTC, 20 requests, 6 errors" type="button" @click="openAction(&quot;Filter 13:00:00 to 13:30:00 UTC, 20 requests, 6 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:24.545454545454543%" />
                  <span class="bg-primary/20 block w-full" style="height:57.27272727272727%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="13:30:00 UTC · 22 requests · 10 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 13:30:00 to 14:00:00 UTC, 22 requests, 10 errors" type="button" @click="openAction(&quot;Filter 13:30:00 to 14:00:00 UTC, 22 requests, 10 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:40.90909090909091%" />
                  <span class="bg-primary/20 block w-full" style="height:49.090909090909086%;min-height:2px" />
                </UButton>
                <UButton color="neutral" variant="ghost" title="14:00:00 UTC · 15 requests · 0 errors" class="focus-visible:outline-accented relative flex h-full min-w-0 flex-1 flex-col-reverse justify-start outline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2" aria-label="Filter 14:00:00 to 14:30:00 UTC, 15 requests, 0 errors" type="button" @click="openAction(&quot;Filter 14:00:00 to 14:30:00 UTC, 15 requests, 0 errors&quot;)">
                  <span class="bg-primary block w-full" style="height:0%" />
                  <span class="bg-primary/20 block w-full" style="height:61.36363636363636%;min-height:2px" />
                </UButton>
              </div>
              <div class="text-muted mt-1 flex justify-around text-xs">
                <span>14:30</span>
                <span>20:30</span>
                <span>02:30</span>
                <span>08:30</span>
                <span>14:30</span>
              </div>
            </div>
          </section>
          <section aria-label="API request results" class="flex min-h-0 flex-1 flex-col">
            <div class="min-h-0 flex-1 overflow-hidden [&amp;&gt;div]:h-full [&amp;&gt;div]:overscroll-none">
              <div class="relative w-full overflow-auto">
                <!-- Table 1: Date / Request Id / Status / Model / Endpoint / Latency / Timing Phases -->
                <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom table-fixed border-collapse text-sm whitespace-nowrap" style="min-width:1006px;width:100%" aria-label="API requests" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                    <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                  </template>
                  <template #selection-cell="{ row }">
                    <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                  </template>
                  <template #actions-cell="{ row }">
                    <span :aria-label="row.original.actionsArialabel2" :class="row.original.actionsClass3" />
                  </template>
                  <template #date-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #date-cell="{ row }">
                    <div :aria-label="row.original.dateArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <span class="font-mono text-sm">Sep 11, 2026{{ row.original.dateText10 }}</span>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.dateArialabel12" type="button" @click="copyValue(&quot;Copy Date for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #requestId-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Request Id" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #requestId-cell="{ row }">
                    <div :aria-label="row.original.requestIdArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0 pr-6">
                        <UButton color="neutral" variant="ghost" class="block w-full truncate text-left hover:underline" :aria-label="row.original.requestIdArialabel7" type="button" @click="openAction(&quot;req_a14e7690-eaf0-4a91&quot;, row.original._id, 1)">
                          {{ row.original.requestId }}
                        </UButton>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm" title="Copy value" :aria-label="row.original.requestIdArialabel10" type="button" @click="copyValue(&quot;Copy Request Id for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #status-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #status-cell="{ row }">
                    <div :aria-label="row.original.statusArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <span :class="row.original.statusClass6" :title="row.original.statusTitle7">{{ row.original.status }}</span>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.statusArialabel10" type="button" @click="copyValue(&quot;Copy Status for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #model-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Model" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #model-cell="{ row }">
                    <div :aria-label="row.original.modelArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <span class="block truncate">{{ row.original.model }}</span>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.modelArialabel9" type="button" @click="copyValue(&quot;Copy Model for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #endpoint-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Endpoint" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #endpoint-cell="{ row }">
                    <div :aria-label="row.original.endpointArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <span class="block truncate">{{ row.original.endpoint }}</span>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.endpointArialabel9" type="button" @click="copyValue(&quot;Copy Endpoint for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #latency-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Latency" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #latency-cell="{ row }">
                    <div :aria-label="row.original.latencyArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <div class="relative -mx-2 -my-2 px-2 py-2">
                          <span class="bg-primary/5 absolute inset-y-0 left-0" :style="row.original.latencyStyle8" />
                          <span class="relative font-mono">{{ row.original.latencyText10 }}ms</span>
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.latencyArialabel13" type="button" @click="copyValue(&quot;Copy Latency for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                  <template #timingPhases-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Timing Phases" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #timingPhases-cell="{ row }">
                    <div :aria-label="row.original.timingPhasesArialabel2" class="group/cell focus-visible:ring-accented relative min-w-0 outline-none focus-visible:ring-1">
                      <div class="min-w-0">
                        <div class="flex h-4 w-full" :aria-label="row.original.timingPhasesArialabel7">
                          <span :style="row.original.timingPhasesStyle8" />
                          <span :style="row.original.timingPhasesStyle9" />
                          <span class="bg-primary flex-1" />
                        </div>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 bg-default absolute top-1/2 right-0 -translate-y-1/2 shadow-sm opacity-0 group-focus-within/cell:opacity-100 group-hover/cell:opacity-100" title="Copy value" :aria-label="row.original.timingPhasesArialabel12" type="button" @click="copyValue(&quot;Copy Timing Phases for req_a14e7690-eaf0-4a91&quot;)">
                        <UIcon name="i-lucide-copy" class="size-4" />
                      </UButton>
                    </div>
                  </template>
                </UTable>
              </div>
            </div>
            <div class="text-muted flex h-10 shrink-0 items-center justify-between gap-2 border-t px-4 text-[10px] md:px-5 border-default">
              <span>
                Showing 80 of 720 requests
                <span class="hidden sm:inline">· All times UTC</span>
              </span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Load 60 more" type="button" @click="openAction(&quot;Load 60 more&quot;)">
                Load 60 more
              </UButton>
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
