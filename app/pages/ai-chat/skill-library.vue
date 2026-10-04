<!-- Page: /ai-chat/skill-library | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Skill 1 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "topic": "Getting started",
    "docsURL": "Quick start",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/getting-started/quick-start/",
    "useFor": "First agent, project setup",
    "useForGroup": "0",
    "useForText2": "First agent, project setup",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "2",
    "topic": "Adding to existing project",
    "docsURL": "Add to existing project",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/getting-started/add-to-existing-project/",
    "useFor": "Install into existing Workers app",
    "useForGroup": "0",
    "useForText2": "Install into existing Workers app",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "3",
    "topic": "Configuration",
    "docsURL": "Configuration",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/configuration/",
    "useFor": "wrangler.jsonc, bindings, assets, deployment",
    "useForGroup": "1",
    "useForText2": "wrangler.jsonc",
    "useForText3": ", bindings, assets, deployment",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "4",
    "topic": "Agent class",
    "docsURL": "Agents API",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/agents-api/",
    "useFor": "Agent lifecycle, patterns, pitfalls",
    "useForGroup": "0",
    "useForText2": "Agent lifecycle, patterns, pitfalls",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "5",
    "topic": "State",
    "docsURL": "Store and sync state",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/store-and-sync-state/",
    "useFor": "setState, validateStateChange, persistence",
    "useForGroup": "2",
    "useForText2": "setState",
    "useForText3": ", ",
    "useForText4": "validateStateChange",
    "useForText5": ", persistence"
  },
  {
    "_id": "6",
    "topic": "Routing",
    "docsURL": "Routing",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/routing/",
    "useFor": "URL patterns, routeAgentRequest",
    "useForGroup": "3",
    "useForText2": "URL patterns, ",
    "useForText3": "routeAgentRequest",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "7",
    "topic": "Callable methods",
    "docsURL": "Callable methods",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/callable-methods/",
    "useFor": "@callable, RPC, streaming, timeouts",
    "useForGroup": "1",
    "useForText2": "@callable",
    "useForText3": ", RPC, streaming, timeouts",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "8",
    "topic": "Scheduling",
    "docsURL": "Schedule tasks",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/schedule-tasks/",
    "useFor": "schedule(), scheduleEvery(), cron",
    "useForGroup": "2",
    "useForText2": "schedule()",
    "useForText3": ", ",
    "useForText4": "scheduleEvery()",
    "useForText5": ", cron"
  },
  {
    "_id": "9",
    "topic": "Workflows",
    "docsURL": "Run workflows",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/run-workflows/",
    "useFor": "AgentWorkflow, durable multi-step tasks",
    "useForGroup": "1",
    "useForText2": "AgentWorkflow",
    "useForText3": ", durable multi-step tasks",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "10",
    "topic": "HTTP/WebSockets",
    "docsURL": "WebSockets",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/websockets/",
    "useFor": "Lifecycle hooks, hibernation",
    "useForGroup": "0",
    "useForText2": "Lifecycle hooks, hibernation",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "11",
    "topic": "Chat agents",
    "docsURL": "Chat agents",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/chat/chat-agents/",
    "useFor": "AIChatAgent, streaming, tools, persistence",
    "useForGroup": "1",
    "useForText2": "AIChatAgent",
    "useForText3": ", streaming, tools, persistence",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "12",
    "topic": "Client SDK",
    "docsURL": "Client SDK",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/chat/client-sdk/",
    "useFor": "useAgent, AgentClient, state, RPC, HTTP",
    "useForGroup": "2",
    "useForText2": "useAgent",
    "useForText3": ", ",
    "useForText4": "AgentClient",
    "useForText5": ", state, RPC, HTTP"
  },
  {
    "_id": "13",
    "topic": "Client tools",
    "docsURL": "Client tools",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/harnesses/think/client-tools/",
    "useFor": "Client-side tools, autoContinueAfterToolResult",
    "useForGroup": "3",
    "useForText2": "Client-side tools, ",
    "useForText3": "autoContinueAfterToolResult",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "14",
    "topic": "Server-driven messages",
    "docsURL": "Autonomous responses",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/chat/autonomous-responses/",
    "useFor": "saveMessages, waitUntilStable, server-initiated turns",
    "useForGroup": "2",
    "useForText2": "saveMessages",
    "useForText3": ", ",
    "useForText4": "waitUntilStable",
    "useForText5": ", server-initiated turns"
  },
  {
    "_id": "15",
    "topic": "Resumable streaming",
    "docsURL": "Chat agents",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/chat/chat-agents/#resumable-streaming",
    "useFor": "Stream recovery on disconnect",
    "useForGroup": "0",
    "useForText2": "Stream recovery on disconnect",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "16",
    "topic": "Email",
    "docsURL": "Email",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/email/",
    "useFor": "Email routing, secure reply resolver",
    "useForGroup": "0",
    "useForText2": "Email routing, secure reply resolver",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "17",
    "topic": "MCP client",
    "docsURL": "MCP client",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/model-context-protocol/apis/client-api/",
    "useFor": "Connecting to MCP servers",
    "useForGroup": "0",
    "useForText2": "Connecting to MCP servers",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "18",
    "topic": "MCP server",
    "docsURL": "MCP server",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/model-context-protocol/apis/handler-api/",
    "useFor": "Building MCP servers with createMcpHandler",
    "useForGroup": "3",
    "useForText2": "Building MCP servers with ",
    "useForText3": "createMcpHandler",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "19",
    "topic": "MCP transports",
    "docsURL": "MCP transports",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/model-context-protocol/protocol/transport/",
    "useFor": "Streamable HTTP, SSE, RPC transport options",
    "useForGroup": "0",
    "useForText2": "Streamable HTTP, SSE, RPC transport options",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "20",
    "topic": "Securing MCP servers",
    "docsURL": "Securing MCP",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/model-context-protocol/guides/securing-mcp-server/",
    "useFor": "OAuth, proxy MCP, hardening",
    "useForGroup": "0",
    "useForText2": "OAuth, proxy MCP, hardening",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "21",
    "topic": "Human-in-the-loop",
    "docsURL": "Human-in-the-loop",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/concepts/agentic-patterns/human-in-the-loop/",
    "useFor": "Workflow approvals, elicitation, timeout handling",
    "useForGroup": "0",
    "useForText2": "Workflow approvals, elicitation, timeout handling",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "22",
    "topic": "Durable execution",
    "docsURL": "Durable execution",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/durable-execution/",
    "useFor": "runFiber(), stash(), surviving DO eviction",
    "useForGroup": "2",
    "useForText2": "runFiber()",
    "useForText3": ", ",
    "useForText4": "stash()",
    "useForText5": ", surviving DO eviction"
  },
  {
    "_id": "23",
    "topic": "Queue",
    "docsURL": "Queue",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/queue-tasks/",
    "useFor": "Built-in FIFO queue, queue()",
    "useForGroup": "3",
    "useForText2": "Built-in FIFO queue, ",
    "useForText3": "queue()",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "24",
    "topic": "Retries",
    "docsURL": "Retries",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/retries/",
    "useFor": "this.retry(), backoff/jitter",
    "useForGroup": "1",
    "useForText2": "this.retry()",
    "useForText3": ", backoff/jitter",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "25",
    "topic": "Observability",
    "docsURL": "Observability",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/observability/",
    "useFor": "Diagnostics-channel events",
    "useForGroup": "0",
    "useForText2": "Diagnostics-channel events",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "26",
    "topic": "Push notifications",
    "docsURL": "Push notifications",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/webhooks/push-notifications/",
    "useFor": "Web Push + VAPID from agents",
    "useForGroup": "0",
    "useForText2": "Web Push + VAPID from agents",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "27",
    "topic": "Webhooks",
    "docsURL": "Webhooks",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/communication-channels/webhooks/",
    "useFor": "Receiving external webhooks",
    "useForGroup": "0",
    "useForText2": "Receiving external webhooks",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "28",
    "topic": "Cross-domain auth",
    "docsURL": "Cross-domain auth",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/runtime/operations/cross-domain-authentication/",
    "useFor": "WebSocket auth, tokens, CORS",
    "useForGroup": "0",
    "useForText2": "WebSocket auth, tokens, CORS",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "29",
    "topic": "Readonly connections",
    "docsURL": "Readonly",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/readonly-connections/",
    "useFor": "shouldConnectionBeReadonly",
    "useForGroup": "4",
    "useForText2": "shouldConnectionBeReadonly",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "30",
    "topic": "Voice",
    "docsURL": "Voice",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/voice/",
    "useFor": "Experimental STT/TTS, withVoice",
    "useForGroup": "3",
    "useForText2": "Experimental STT/TTS, ",
    "useForText3": "withVoice",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "31",
    "topic": "Browse the web",
    "docsURL": "Browser tools",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/browse-the-web/",
    "useFor": "Experimental CDP browser automation",
    "useForGroup": "0",
    "useForText2": "Experimental CDP browser automation",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "32",
    "topic": "Think",
    "docsURL": "Think",
    "docsURLGroup": "0",
    "docsURLHref2": "https://developers.cloudflare.com/agents/api-reference/think/",
    "useFor": "Experimental higher-level chat agent class",
    "useForGroup": "0",
    "useForText2": "Experimental higher-level chat agent class",
    "useForText3": "",
    "useForText4": "",
    "useForText5": ""
  },
  {
    "_id": "33",
    "topic": "Migrations",
    "docsURL": "AI SDK v5, AI SDK v6",
    "docsURLGroup": "1",
    "docsURLHref2": "https://github.com/cloudflare/agents/blob/main/docs/agents/migration-to-ai-sdk-v5.md",
    "useFor": "Upgrading @cloudflare/ai-chat",
    "useForGroup": "3",
    "useForText2": "Upgrading ",
    "useForText3": "@cloudflare/ai-chat",
    "useForText4": "",
    "useForText5": ""
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "topic",
    "header": "Topic"
  },
  {
    "accessorKey": "docsURL",
    "header": "Docs URL"
  },
  {
    "accessorKey": "useFor",
    "header": "Use for"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["topic","docsURL","useFor"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 2: edit the rows and column definitions here.

const table2Rows = ref([
  {
    "_id": "1",
    "class": "Counter",
    "uRL": "/agents/counter/user-123"
  },
  {
    "_id": "2",
    "class": "ChatRoom",
    "uRL": "/agents/chat-room/lobby"
  }
])
type Table2Row = (typeof table2Rows.value)[number]

const table2Columns: TableColumn<Table2Row>[] = [
  {
    "accessorKey": "class",
    "header": "Class"
  },
  {
    "accessorKey": "uRL",
    "header": "URL"
  }
]

const table2Sorting = ref<{ id: string, desc: boolean }[]>([])

const table2Selection = ref<Record<string, boolean>>({})

const table2FilteredRows = computed(() => {
  const query = ''
  const keys = ["class","uRL"] as const
  return table2Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Table 3: edit the rows and column definitions here.

const table3Rows = ref([
  {
    "_id": "1",
    "task": "Read state",
    "aPI": "this.state.count"
  },
  {
    "_id": "2",
    "task": "Write state",
    "aPI": "this.setState({ count: 1 })"
  },
  {
    "_id": "3",
    "task": "SQL query",
    "aPI": "this.sql`SELECT * FROM users WHERE id = ${id}`"
  },
  {
    "_id": "4",
    "task": "Schedule (delay)",
    "aPI": "await this.schedule(60, \"task\", payload)"
  },
  {
    "_id": "5",
    "task": "Schedule (cron)",
    "aPI": "await this.schedule(\"0 * * * *\", \"task\", payload)"
  },
  {
    "_id": "6",
    "task": "Schedule (interval)",
    "aPI": "await this.scheduleEvery(30, \"poll\")"
  },
  {
    "_id": "7",
    "task": "RPC method",
    "aPI": "@callable() myMethod() { ... }"
  },
  {
    "_id": "8",
    "task": "Streaming RPC",
    "aPI": "@callable({ streaming: true }) stream(res) { ... }"
  },
  {
    "_id": "9",
    "task": "Start workflow",
    "aPI": "await this.runWorkflow(\"ProcessingWorkflow\", params)"
  },
  {
    "_id": "10",
    "task": "Durable fiber",
    "aPI": "await this.runFiber(\"name\", async (ctx) => { ... })"
  },
  {
    "_id": "11",
    "task": "Enqueue work",
    "aPI": "this.queue(\"handler\", payload)"
  },
  {
    "_id": "12",
    "task": "Retry with backoff",
    "aPI": "await this.retry(fn, { maxAttempts: 5 })"
  },
  {
    "_id": "13",
    "task": "Broadcast to clients",
    "aPI": "this.broadcast(message)"
  },
  {
    "_id": "14",
    "task": "Get connections",
    "aPI": "this.getConnections(tag?)"
  }
])
type Table3Row = (typeof table3Rows.value)[number]

const table3Columns: TableColumn<Table3Row>[] = [
  {
    "accessorKey": "task",
    "header": "Task"
  },
  {
    "accessorKey": "aPI",
    "header": "API"
  }
]

const table3Sorting = ref<{ id: string, desc: boolean }[]>([])

const table3Selection = ref<Record<string, boolean>>({})

const table3FilteredRows = computed(() => {
  const query = ''
  const keys = ["task","aPI"] as const
  return table3Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
    if (actionDialog.table === 2) table2Rows.value = table2Rows.value.filter(row => row._id !== actionDialog.recordId)
    if (actionDialog.table === 3) table3Rows.value = table3Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/skill-library">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="bg-default flex min-h-0 flex-1">
        <aside aria-label="Skill list" class="bg-default flex w-full shrink-0 flex-col overflow-hidden md:w-[280px] md:border-r lg:w-[310px] border-default">
          <header class="relative flex h-12 shrink-0 items-center border-b px-5 border-default">
            <h1 class="text-sm font-semibold text-highlighted">All Skills</h1>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9 absolute right-2" aria-label="Add skill" type="button" @click="openAction(&quot;Add skill&quot;)">
              <UIcon name="i-lucide-plus" class="size-4" />
            </UButton>
          </header>
          <div class="border-b px-4 py-3 border-default">
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs w-full" aria-label="Upload skill" type="button" @click="openAction(&quot;Upload skill&quot;)">
              <UIcon name="i-lucide-upload" class="size-4" />
              Upload skill
            </UButton>
          </div>
          <div class="min-h-0 flex-1 overflow-y-auto pt-1 pb-3">
            <div class="relative px-2">
              <span class="bg-primary absolute inset-y-0 left-0 w-0.5" />
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px] bg-(--ui-bg-muted)/70" aria-label="agents-sdkBuild, debug, or review Cloudflare Agents SDK applications using the agents package." type="button" @click="openAction(&quot;agents-sdkBuild, debug, or review Cloudflare Agents SDK applications using the agents package.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">agents-sdk</span>
                  <span class="text-muted truncate text-xs leading-5">Build, debug, or review Cloudflare Agents SDK applications using the agents package.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="cloudflareDiscover and choose Cloudflare products for apps, APIs, AI agents, storage, networking, and security. Use for architecture and product selection, including when the user describes a need without naming a Cloudflare product; then find the relevant skill or documentation." type="button" @click="openAction(&quot;cloudflareDiscover and choose Cloudflare products for apps, APIs, AI agents, storage, networking, and security. Use for architecture and product selection, including when the user describes a need without naming a Cloudflare product; then find the relevant skill or documentation.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">cloudflare</span>
                  <span class="text-muted truncate text-xs leading-5">Discover and choose Cloudflare products for apps, APIs, AI agents, storage, networking, and security. Use for architecture and product selection, including when the user describes a need without naming a Cloudflare product; then find the relevant skill or documentation.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="cloudflare-email-serviceImplement or troubleshoot Cloudflare Email Sending and Email Routing integrations and their delivery configuration." type="button" @click="openAction(&quot;cloudflare-email-serviceImplement or troubleshoot Cloudflare Email Sending and Email Routing integrations and their delivery configuration.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">cloudflare-email-service</span>
                  <span class="text-muted truncate text-xs leading-5">Implement or troubleshoot Cloudflare Email Sending and Email Routing integrations and their delivery configuration.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="cloudflare-oneDesign, configure, troubleshoot, or review Cloudflare One Zero Trust and SASE deployments. Use cloudflare-one-migrations for migration planning from other vendors." type="button" @click="openAction(&quot;cloudflare-oneDesign, configure, troubleshoot, or review Cloudflare One Zero Trust and SASE deployments. Use cloudflare-one-migrations for migration planning from other vendors.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">cloudflare-one</span>
                  <span class="text-muted truncate text-xs leading-5">Design, configure, troubleshoot, or review Cloudflare One Zero Trust and SASE deployments. Use cloudflare-one-migrations for migration planning from other vendors.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="cloudflare-one-migrationsAssess and plan migrations from existing VPN, SWG, or SASE platforms to Cloudflare One, including policy mapping, parity gaps, and rollout." type="button" @click="openAction(&quot;cloudflare-one-migrationsAssess and plan migrations from existing VPN, SWG, or SASE platforms to Cloudflare One, including policy mapping, parity gaps, and rollout.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">cloudflare-one-migrations</span>
                  <span class="text-muted truncate text-xs leading-5">Assess and plan migrations from existing VPN, SWG, or SASE platforms to Cloudflare One, including policy mapping, parity gaps, and rollout.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="durable-objectsBuild, debug, or review Cloudflare Durable Objects code for persistent state and coordination." type="button" @click="openAction(&quot;durable-objectsBuild, debug, or review Cloudflare Durable Objects code for persistent state and coordination.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">durable-objects</span>
                  <span class="text-muted truncate text-xs leading-5">Build, debug, or review Cloudflare Durable Objects code for persistent state and coordination.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="nextjs-on-cloudflareBuild, migrate, and deploy Next.js apps on Cloudflare Workers with vinext. Use when starting a Next.js project on Cloudflare, moving an existing app to Workers, choosing between vinext and OpenNext, or setting up vinext for Workers. For setup, migration, or deployment, install vinext's upstream skills with `npx skills add cloudflare/vinext` if missing, then read and follow the applicable skill and docs." type="button" @click="openAction(&quot;nextjs-on-cloudflareBuild, migrate, and deploy Next.js apps on Cloudflare Workers with vinext. Use when starting a Next.js project on Cloudflare, moving an existing app to Workers, choosing between vinext and OpenNext, or setting up vinext for Workers. For setup, migration, or deployment, install vinext's upstream skills with `npx skills add cloudflare/vinext` if missing, then read and follow the applicable skill and docs.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">nextjs-on-cloudflare</span>
                  <span class="text-muted truncate text-xs leading-5">Build, migrate, and deploy Next.js apps on Cloudflare Workers with vinext. Use when starting a Next.js project on Cloudflare, moving an existing app to Workers, choosing between vinext and OpenNext, or setting up vinext for Workers. For setup, migration, or deployment, install vinext's upstream skills with `npx skills add cloudflare/vinext` if missing, then read and follow the applicable skill and docs.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="sandbox-stableBuild or maintain Cloudflare Sandbox apps on the stable @cloudflare/sandbox package. Use sandbox-next for preview apps and sandbox-migrate-to-next for stable-to-preview migrations." type="button" @click="openAction(&quot;sandbox-stableBuild or maintain Cloudflare Sandbox apps on the stable @cloudflare/sandbox package. Use sandbox-next for preview apps and sandbox-migrate-to-next for stable-to-preview migrations.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">sandbox-stable</span>
                  <span class="text-muted truncate text-xs leading-5">Build or maintain Cloudflare Sandbox apps on the stable @cloudflare/sandbox package. Use sandbox-next for preview apps and sandbox-migrate-to-next for stable-to-preview migrations.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="turnstile-spinSet up, repair, or migrate to Cloudflare Turnstile bot verification in an existing frontend and backend, including server-side Siteverify." type="button" @click="openAction(&quot;turnstile-spinSet up, repair, or migrate to Cloudflare Turnstile bot verification in an existing frontend and backend, including server-side Siteverify.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">turnstile-spin</span>
                  <span class="text-muted truncate text-xs leading-5">Set up, repair, or migrate to Cloudflare Turnstile bot verification in an existing frontend and backend, including server-side Siteverify.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="web-perfAudit, diagnose, or optimize website loading and interaction performance, Core Web Vitals, and Lighthouse performance scores." type="button" @click="openAction(&quot;web-perfAudit, diagnose, or optimize website loading and interaction performance, Core Web Vitals, and Lighthouse performance scores.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">web-perf</span>
                  <span class="text-muted truncate text-xs leading-5">Audit, diagnose, or optimize website loading and interaction performance, Core Web Vitals, and Lighthouse performance scores.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="workers-best-practicesCloudflare Workers best practices for production applications. Use when writing, reviewing, or configuring Workers." type="button" @click="openAction(&quot;workers-best-practicesCloudflare Workers best practices for production applications. Use when writing, reviewing, or configuring Workers.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">workers-best-practices</span>
                  <span class="text-muted truncate text-xs leading-5">Cloudflare Workers best practices for production applications. Use when writing, reviewing, or configuring Workers.</span>
                </span>
              </UButton>
              <div class="border-(--ui-border)/40 mx-5 ml-10 border-b border-default" />
            </div>
            <div class="relative px-2">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-4 text-left outline-offset-[-2px]" aria-label="wranglerRun or troubleshoot Wrangler CLI commands and configure Worker projects for local development, deployment, and Cloudflare resource management." type="button" @click="openAction(&quot;wranglerRun or troubleshoot Wrangler CLI commands and configure Worker projects for local development, deployment, and Cloudflare resource management.&quot;)">
                <UIcon name="i-lucide-file-text" class="text-(--ui-text-muted)/60 mt-1 size-3.5 shrink-0" />
                <span class="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span class="truncate text-sm font-medium">wrangler</span>
                  <span class="text-muted truncate text-xs leading-5">Run or troubleshoot Wrangler CLI commands and configure Worker projects for local development, deployment, and Cloudflare resource management.</span>
                </span>
              </UButton>
            </div>
          </div>
        </aside>
        <section class="bg-default min-w-0 flex-1 flex-col overflow-hidden hidden md:flex">
          <header class="relative flex h-12 shrink-0 items-center justify-center border-b border-default">
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9 absolute left-2 md:hidden" aria-label="Back to skills" type="button" @click="openAction(&quot;Back to skills&quot;)">
              <UIcon name="i-lucide-arrow-left" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="agents-sdk" type="button" @click="openAction(&quot;agents-sdk&quot;)">
              agents-sdk
              <UIcon name="i-lucide-chevron-down" class="size-4" />
            </UButton>
          </header>
          <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="mx-auto flex max-w-[1100px] flex-col gap-8 px-5 pt-7 pb-10 lg:px-10">
              <div class="flex items-start gap-3">
                <div class="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md">
                  <UIcon name="i-lucide-file-text" class="text-muted size-7" />
                </div>
                <div class="min-w-0">
                  <h2 class="text-base font-semibold text-highlighted">agents-sdk</h2>
                  <p class="text-muted mt-0.5 truncate text-sm">Build, debug, or review Cloudflare Agents SDK applications using the agents package.</p>
                </div>
              </div>
              <section class="flex flex-col gap-3">
                <div class="flex items-center justify-between pl-1">
                  <h3 class="text-base font-semibold text-highlighted">Metadata</h3>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit" type="button" @click="openAction(&quot;Edit&quot;)">
                    Edit
                  </UButton>
                </div>
                <dl class="divide-(--ui-border)/30 bg-default divide-y rounded-lg border py-2 border-default">
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Slug</dt>
                    <dd class="min-w-0 flex-1 leading-6 break-words">agents-sdk</dd>
                  </div>
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Version</dt>
                    <dd class="min-w-0 flex-1 leading-6 break-words">v1</dd>
                  </div>
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Name</dt>
                    <dd class="min-w-0 flex-1 leading-6 break-words">agents-sdk</dd>
                  </div>
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Description</dt>
                    <dd class="min-w-0 flex-1 leading-6 break-words">Build, debug, or review Cloudflare Agents SDK applications using the agents package.</dd>
                  </div>
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Source</dt>
                    <dd class="min-w-0 flex-1 leading-6 break-words">Cloudflare skills · repository</dd>
                  </div>
                  <div class="flex gap-3 px-4 py-3 text-sm">
                    <dt class="text-muted w-24 shrink-0 lg:w-[120px]">Location</dt>
                    <dd class="min-w-0 break-all">
                      <NuxtLink class="hover:underline" to="/reference/2817712496444899.md" external>
                        skills/agents-sdk/SKILL.md
                      </NuxtLink>
                    </dd>
                  </div>
                </dl>
              </section>
              <section class="flex flex-col gap-3">
                <div class="flex items-center justify-between pl-1">
                  <h3 class="text-base font-semibold text-highlighted">Instructions</h3>
                  <div class="flex gap-2">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Expand instructions" type="button" @click="openAction(&quot;Expand instructions&quot;)">
                      <UIcon name="i-lucide-maximize-2" class="size-4" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit" type="button" @click="openAction(&quot;Edit&quot;)">
                      Edit
                    </UButton>
                  </div>
                </div>
                <div class="bg-default max-h-[540px] overflow-auto rounded-lg border p-6 border-default">
                  <div class="[&amp;_pre]:bg-muted [&amp;_code]:bg-muted [&amp;_blockquote]:text-muted text-sm leading-7 break-words [&amp;_blockquote]:border-l-2 [&amp;_blockquote]:pl-4 [&amp;_code]:rounded [&amp;_code]:px-1 [&amp;_code]:font-mono [&amp;_code]:text-xs [&amp;_h1]:mb-4 [&amp;_h1]:text-xl [&amp;_h1]:font-semibold [&amp;_h2]:mt-6 [&amp;_h2]:mb-3 [&amp;_h2]:text-lg [&amp;_h2]:font-semibold [&amp;_h3]:mt-5 [&amp;_h3]:mb-2 [&amp;_h3]:font-semibold [&amp;_ol]:mb-4 [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_p]:mb-4 [&amp;_pre]:my-4 [&amp;_pre]:overflow-auto [&amp;_pre]:rounded-lg [&amp;_pre]:p-4 [&amp;_ul]:mb-4 [&amp;_ul]:list-disc [&amp;_ul]:pl-5">
                    <h1>Cloudflare Agents SDK</h1>
                    <p>
                      Your knowledge of the Agents SDK may be outdated. 
                      <strong>Prefer retrieval over pre-training</strong>
                       for any Agents SDK task.
                    </p>
                    <h2>Retrieval Sources</h2>
                    <p>
                      Cloudflare docs: 
                      <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://developers.cloudflare.com/agents/" external>
                        https://developers.cloudflare.com/agents/
                      </NuxtLink>
                    </p>
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Topic / Docs URL / Use for -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #topic-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Topic" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #topic-cell="{ row }">
                          {{ row.original.topic }}
                        </template>
                        <template #docsURL-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Docs URL" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #docsURL-cell="{ row }">
                          <template v-if="row.original.docsURLGroup === '0'">
                            <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" :to="row.original.docsURLHref2" external>
                              {{ row.original.docsURL }}
                            </NuxtLink>
                          </template>
                          <template v-if="row.original.docsURLGroup === '1'">
                            <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/agents/blob/main/docs/agents/migration-to-ai-sdk-v5.md" external>
                              AI SDK v5
                            </NuxtLink>
                            , 
                            <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/agents/blob/main/docs/agents/migration-to-ai-sdk-v6.md" external>
                              AI SDK v6
                            </NuxtLink>
                          </template>
                        </template>
                        <template #useFor-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Use for" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #useFor-cell="{ row }">
                          <template v-if="row.original.useForGroup === '0'">
                            {{ row.original.useFor }}
                          </template>
                          <template v-if="row.original.useForGroup === '1'">
                            <code>{{ row.original.useForText2 }}</code>
                            {{ row.original.useForText3 }}
                          </template>
                          <template v-if="row.original.useForGroup === '2'">
                            <code>{{ row.original.useForText2 }}</code>
                            , 
                            <code>{{ row.original.useForText4 }}</code>
                            {{ row.original.useForText5 }}
                          </template>
                          <template v-if="row.original.useForGroup === '3'">
                            {{ row.original.useForText2 }}
                            <code>{{ row.original.useForText3 }}</code>
                          </template>
                          <template v-if="row.original.useForGroup === '4'">
                            <code>{{ row.original.useFor }}</code>
                          </template>
                        </template>
                      </UTable>
                    </div>
                    <h2>Capabilities</h2>
                    <p>The Agents SDK provides:</p>
                    <ul>
                      <li>
                        <strong>Persistent state</strong>
                         — SQLite-backed, auto-synced to clients via 
                        <code>setState</code>
                      </li>
                      <li>
                        <strong>Callable RPC</strong>
                         — 
                        <code>@callable()</code>
                         methods invoked over WebSocket
                      </li>
                      <li>
                        <strong>Scheduling</strong>
                         — One-time, recurring (
                        <code>scheduleEvery</code>
                        ), and cron tasks
                      </li>
                      <li>
                        <strong>Workflows</strong>
                         — Durable multi-step background processing via 
                        <code>AgentWorkflow</code>
                      </li>
                      <li>
                        <strong>Durable execution</strong>
                         — 
                        <code>runFiber()</code>
                         / 
                        <code>stash()</code>
                         for work that survives DO eviction
                      </li>
                      <li>
                        <strong>Queue</strong>
                         — Built-in FIFO queue with retries via 
                        <code>queue()</code>
                      </li>
                      <li>
                        <strong>Retries</strong>
                         — 
                        <code>this.retry()</code>
                         with exponential backoff and jitter
                      </li>
                      <li>
                        <strong>MCP integration</strong>
                         — Connect to MCP servers or build your own with 
                        <code>createMcpHandler</code>
                      </li>
                      <li>
                        <strong>Email handling</strong>
                         — Receive and reply to emails with secure routing
                      </li>
                      <li>
                        <strong>Streaming chat</strong>
                         — 
                        <code>AIChatAgent</code>
                         with resumable streams, message persistence, tools
                      </li>
                      <li>
                        <strong>Server-driven messages</strong>
                         — 
                        <code>saveMessages</code>
                        , 
                        <code>waitUntilStable</code>
                         for proactive agent turns
                      </li>
                      <li>
                        <strong>React hooks</strong>
                         — 
                        <code>useAgent</code>
                        , 
                        <code>useAgentChat</code>
                         for client apps
                      </li>
                      <li>
                        <strong>Observability</strong>
                         — 
                        <code>diagnostics_channel</code>
                         events for state, RPC, schedule, lifecycle
                      </li>
                      <li>
                        <strong>Push notifications</strong>
                         — Web Push + VAPID delivery from agents
                      </li>
                      <li>
                        <strong>Webhooks</strong>
                         — Receive and verify external webhooks
                      </li>
                      <li>
                        <strong>Voice</strong>
                         (experimental) — STT/TTS via 
                        <code>@cloudflare/voice</code>
                      </li>
                      <li>
                        <strong>Browser tools</strong>
                         (experimental) — CDP-powered browsing via 
                        <code>agents/browser</code>
                      </li>
                      <li>
                        <strong>Think</strong>
                         (experimental) — Higher-level chat agent via 
                        <code>@cloudflare/think</code>
                      </li>
                    </ul>
                    <h2>FIRST: Verify Installation</h2>
                    <pre>
                      <code class="language-bash">npm ls agents  # Should show agents package
</code>
                    </pre>
                    <p>If not installed:</p>
                    <pre>
                      <code class="language-bash">npm install agents
</code>
                    </pre>
                    <p>For chat agents:</p>
                    <pre>
                      <code class="language-bash">npm install agents @cloudflare/ai-chat ai @ai-sdk/react
</code>
                    </pre>
                    <h2>Wrangler Configuration</h2>
                    <pre>
                      <code class="language-jsonc">&#123;
  &quot;compatibility_flags&quot;: [&quot;nodejs_compat&quot;],
  &quot;durable_objects&quot;: &#123;
    &quot;bindings&quot;: [&#123; &quot;name&quot;: &quot;MyAgent&quot;, &quot;class_name&quot;: &quot;MyAgent&quot; &#125;]
  &#125;,
  &quot;migrations&quot;: [&#123; &quot;tag&quot;: &quot;v1&quot;, &quot;new_sqlite_classes&quot;: [&quot;MyAgent&quot;] &#125;]
&#125;
</code>
                    </pre>
                    <p>
                      <strong>Gotchas:</strong>
                    </p>
                    <ul>
                      <li>
                        Do NOT enable 
                        <code>experimentalDecorators</code>
                         in tsconfig (breaks 
                        <code>@callable</code>
                        )
                      </li>
                      <li>Never edit old migrations — always add new tags</li>
                      <li>Each agent class needs its own DO binding + migration entry</li>
                      <li>
                        Add 
                        <code>&quot;ai&quot;: &#123; &quot;binding&quot;: &quot;AI&quot; &#125;</code>
                         for Workers AI
                      </li>
                    </ul>
                    <h2>Agent Class</h2>
                    <pre>
                      <code class="language-typescript">import &#123; Agent, routeAgentRequest, callable &#125; from &quot;agents&quot;;

type State = &#123; count: number &#125;;

export class Counter extends Agent&lt;Env, State&gt; &#123;
  initialState = &#123; count: 0 &#125;;

  validateStateChange(nextState: State, source: Connection | &quot;server&quot;) &#123;
    if (nextState.count &lt; 0) throw new Error(&quot;Count cannot be negative&quot;);
  &#125;

  onStateUpdate(state: State, source: Connection | &quot;server&quot;) &#123;
    console.log(&quot;State updated:&quot;, state);
  &#125;

  @callable()
  increment() &#123;
    this.setState(&#123; count: this.state.count + 1 &#125;);
    return this.state.count;
  &#125;
&#125;

export default &#123;
  fetch: (req, env) =&gt; routeAgentRequest(req, env) ?? new Response(&quot;Not found&quot;, &#123; status: 404 &#125;)
&#125;;
</code>
                    </pre>
                    <h2>Routing</h2>
                    <p>
                      Requests route to 
                      <code>/agents/&#123;agent-name&#125;/&#123;instance-name&#125;</code>
                      :
                    </p>
                    <div class="relative w-full overflow-auto">
                      <!-- Table 2: Class / URL -->
                      <UTable v-model:sorting="table2Sorting" v-model:row-selection="table2Selection" :data="table2FilteredRows" :columns="table2Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #class-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Class" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #class-cell="{ row }">
                          <code>{{ row.original.class }}</code>
                        </template>
                        <template #uRL-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="URL" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #uRL-cell="{ row }">
                          <code>{{ row.original.uRL }}</code>
                        </template>
                      </UTable>
                    </div>
                    <p>
                      Client: 
                      <code>useAgent(&#123; agent: &quot;Counter&quot;, name: &quot;user-123&quot; &#125;)</code>
                    </p>
                    <p>
                      Custom routing: use 
                      <code>getAgentByName(env.MyAgent, &quot;instance-id&quot;)</code>
                       then 
                      <code>agent.fetch(request)</code>
                      .
                    </p>
                    <h2>Core APIs</h2>
                    <div class="relative w-full overflow-auto">
                      <!-- Table 3: Task / API -->
                      <UTable v-model:sorting="table3Sorting" v-model:row-selection="table3Selection" :data="table3FilteredRows" :columns="table3Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #task-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Task" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #task-cell="{ row }">
                          {{ row.original.task }}
                        </template>
                        <template #aPI-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="API" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #aPI-cell="{ row }">
                          <code>{{ row.original.aPI }}</code>
                        </template>
                      </UTable>
                    </div>
                    <h2>React Client</h2>
                    <p>
                      Read 
                      <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/client-sdk.md" external>
                        client-sdk.md
                      </NuxtLink>
                       for client selection and current connection examples. For chat UI and tools, also read 
                      <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/streaming-chat.md" external>
                        streaming-chat.md
                      </NuxtLink>
                      .
                    </p>
                    <h2>References</h2>
                    <h3>Core</h3>
                    <ul>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/state-scheduling.md" external>
                            references/state-scheduling.md
                          </NuxtLink>
                        </strong>
                         — State persistence, scheduling, SQL
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/callable.md" external>
                            references/callable.md
                          </NuxtLink>
                        </strong>
                         — RPC methods, streaming, timeouts
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/routing.md" external>
                            references/routing.md
                          </NuxtLink>
                        </strong>
                         — URL patterns, custom routing, 
                        <code>getAgentByName</code>
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/configuration.md" external>
                            references/configuration.md
                          </NuxtLink>
                        </strong>
                         — Wrangler config, bindings, Vite setup
                      </li>
                    </ul>
                    <h3>Chat &amp; Streaming</h3>
                    <ul>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/streaming-chat.md" external>
                            references/streaming-chat.md
                          </NuxtLink>
                        </strong>
                         — AIChatAgent, resumable streams, tools
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/client-sdk.md" external>
                            references/client-sdk.md
                          </NuxtLink>
                        </strong>
                         — 
                        <code>useAgent</code>
                        , 
                        <code>useAgentChat</code>
                        , 
                        <code>AgentClient</code>
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/server-driven-messages.md" external>
                            references/server-driven-messages.md
                          </NuxtLink>
                        </strong>
                         — Trigger patterns, 
                        <code>saveMessages</code>
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/human-in-the-loop.md" external>
                            references/human-in-the-loop.md
                          </NuxtLink>
                        </strong>
                         — Approval flows, 
                        <code>needsApproval</code>
                      </li>
                    </ul>
                    <h3>Background Processing</h3>
                    <ul>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/workflows.md" external>
                            references/workflows.md
                          </NuxtLink>
                        </strong>
                         — Durable Workflows integration
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/durable-execution.md" external>
                            references/durable-execution.md
                          </NuxtLink>
                        </strong>
                         — 
                        <code>runFiber</code>
                        , 
                        <code>stash</code>
                        , surviving eviction
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/queue-retries.md" external>
                            references/queue-retries.md
                          </NuxtLink>
                        </strong>
                         — Built-in queue, retry with backoff
                      </li>
                    </ul>
                    <h3>Integrations</h3>
                    <ul>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/mcp.md" external>
                            references/mcp.md
                          </NuxtLink>
                        </strong>
                         — MCP client and server, transports, securing
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/email.md" external>
                            references/email.md
                          </NuxtLink>
                        </strong>
                         — Email routing and handling
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/webhooks-push.md" external>
                            references/webhooks-push.md
                          </NuxtLink>
                        </strong>
                         — Webhooks, push notifications
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/observability.md" external>
                            references/observability.md
                          </NuxtLink>
                        </strong>
                         — Diagnostics-channel events
                      </li>
                    </ul>
                    <h3>Experimental</h3>
                    <ul>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/think.md" external>
                            references/think.md
                          </NuxtLink>
                        </strong>
                         — 
                        <code>@cloudflare/think</code>
                         higher-level chat agent
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/voice.md" external>
                            references/voice.md
                          </NuxtLink>
                        </strong>
                         — 
                        <code>@cloudflare/voice</code>
                         STT/TTS
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/codemode.md" external>
                            references/codemode.md
                          </NuxtLink>
                        </strong>
                         — Code Mode for tool orchestration
                      </li>
                      <li>
                        <strong>
                          <NuxtLink class="text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4" to="https://github.com/cloudflare/skills/blob/d924cd8f59e75e08fd3dd52843bb2776de35c77e/skills/agents-sdk/references/browse-the-web.md" external>
                            references/browse-the-web.md
                          </NuxtLink>
                        </strong>
                         — CDP browser tools
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
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
