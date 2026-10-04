<!-- Page: /ai-chat/deliverable-file-cabinet | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Document 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "",
  "allConversations": "All conversations",
  "searchFiles": "",
  "allTypes": "All types"
})

const allConversationsOptions = [
  "All conversations",
  "Prepare the onboarding pilot",
  "Hand off the research findings"
]

const allTypesOptions = [
  "All types",
  "Documents",
  "Data"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "file": "onboarding-pilot.mdPrepare the onboarding pilot",
    "fileName5": "i-lucide-file-text",
    "fileText9": "onboarding-pilot.md",
    "fileText11": "Prepare the onboarding pilot",
    "created": "10:42 AM",
    "size": "1.1 KB",
    "download": "",
    "downloadArialabel3": "Download onboarding-pilot.md"
  },
  {
    "_id": "2",
    "file": "pilot-invitation.mdPrepare the onboarding pilot",
    "fileName5": "i-lucide-file-text",
    "fileText9": "pilot-invitation.md",
    "fileText11": "Prepare the onboarding pilot",
    "created": "10:40 AM",
    "size": "624 B",
    "download": "",
    "downloadArialabel3": "Download pilot-invitation.md"
  },
  {
    "_id": "3",
    "file": "cohort-tracker.csvPrepare the onboarding pilot",
    "fileName5": "i-lucide-table-2",
    "fileText9": "cohort-tracker.csv",
    "fileText11": "Prepare the onboarding pilot",
    "created": "10:38 AM",
    "size": "213 B",
    "download": "",
    "downloadArialabel3": "Download cohort-tracker.csv"
  },
  {
    "_id": "4",
    "file": "first-week-findings.mdHand off the research findings",
    "fileName5": "i-lucide-file-text",
    "fileText9": "first-week-findings.md",
    "fileText11": "Hand off the research findings",
    "created": "9:55 AM",
    "size": "755 B",
    "download": "",
    "downloadArialabel3": "Download first-week-findings.md"
  },
  {
    "_id": "5",
    "file": "pilot-checklist.jsonHand off the research findings",
    "fileName5": "i-lucide-file-braces",
    "fileText9": "pilot-checklist.json",
    "fileText11": "Hand off the research findings",
    "created": "9:52 AM",
    "size": "500 B",
    "download": "",
    "downloadArialabel3": "Download pilot-checklist.json"
  },
  {
    "_id": "6",
    "file": "open-questions.txtHand off the research findings",
    "fileName5": "i-lucide-file-text",
    "fileText9": "open-questions.txt",
    "fileText11": "Hand off the research findings",
    "created": "9:48 AM",
    "size": "455 B",
    "download": "",
    "downloadArialabel3": "Download open-questions.txt"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "file",
    "header": "File"
  },
  {
    "accessorKey": "created",
    "header": "Created"
  },
  {
    "accessorKey": "size",
    "header": "Size"
  },
  {
    "accessorKey": "download",
    "header": "Download"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchFiles || '').toLowerCase()
  const keys = ["file","created","size","download"] as const
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  const rows = table1FilteredRows.value.map(row => ["file","created","size","download"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-deliverable-file-cabinet.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}

const messages = ref<{ id: string, role: 'user' | 'assistant', text: string }[]>([])
function sendMessage(field: keyof typeof form) {
  const message = String(form[field]).trim()
  if (!message) return
  messages.value.push({ id: 'user-' + messages.value.length, role: 'user', text: message })
  messages.value.push({ id: 'assistant-' + messages.value.length, role: 'assistant', text: 'Your message has been added to this demo conversation. Connect sendMessage to your AI API for real responses.' })
  Object.assign(form, { [field]: '' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/deliverable-file-cabinet">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <header class="flex h-14 shrink-0 items-center border-b px-5 border-default">
              <h2 class="truncate text-sm font-medium text-highlighted">Prepare the onboarding pilot</h2>
            </header>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-2xl px-5 py-7">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Put together the files we need to run the onboarding pilot: a plan, a customer invitation, and a cohort tracker.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_cljdbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_cljdbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.26 32.00 C 55.26 34.93 55.22 38.75 55.16 40.78 C 55.10 42.80 55.00 43.18 54.88 44.16 C 54.75 45.14 54.59 45.90 54.40 46.65 C 54.20 47.39 53.98 48.03 53.72 48.64 C 53.46 49.24 53.16 49.77 52.83 50.27 C 52.50 50.77 52.13 51.21 51.72 51.62 C 51.31 52.03 50.86 52.40 50.36 52.73 C 49.86 53.06 49.33 53.35 48.72 53.61 C 48.11 53.87 47.47 54.10 46.72 54.29 C 45.97 54.48 45.20 54.64 44.22 54.76 C 43.24 54.89 42.86 54.99 40.82 55.05 C 38.78 55.11 34.94 55.14 32.00 55.14 C 29.06 55.14 25.22 55.11 23.18 55.05 C 21.14 54.99 20.76 54.89 19.78 54.76 C 18.80 54.64 18.03 54.48 17.28 54.29 C 16.53 54.10 15.89 53.87 15.28 53.61 C 14.67 53.35 14.14 53.06 13.64 52.73 C 13.14 52.40 12.69 52.03 12.28 51.62 C 11.87 51.21 11.50 50.77 11.17 50.27 C 10.84 49.77 10.54 49.24 10.28 48.64 C 10.02 48.03 9.80 47.39 9.60 46.65 C 9.41 45.90 9.25 45.14 9.12 44.16 C 9.00 43.18 8.90 42.80 8.84 40.78 C 8.78 38.75 8.74 34.93 8.74 32.00 C 8.74 29.07 8.78 25.25 8.84 23.22 C 8.90 21.20 9.00 20.82 9.12 19.84 C 9.25 18.86 9.41 18.10 9.60 17.35 C 9.80 16.61 10.02 15.97 10.28 15.36 C 10.54 14.76 10.84 14.23 11.17 13.73 C 11.50 13.23 11.87 12.79 12.28 12.38 C 12.69 11.97 13.14 11.60 13.64 11.27 C 14.14 10.94 14.67 10.65 15.28 10.39 C 15.89 10.13 16.53 9.90 17.28 9.71 C 18.03 9.52 18.80 9.36 19.78 9.24 C 20.76 9.11 21.14 9.01 23.18 8.95 C 25.22 8.89 29.06 8.86 32.00 8.86 C 34.94 8.86 38.78 8.89 40.82 8.95 C 42.86 9.01 43.24 9.11 44.22 9.24 C 45.20 9.36 45.97 9.52 46.72 9.71 C 47.47 9.90 48.11 10.13 48.72 10.39 C 49.33 10.65 49.86 10.94 50.36 11.27 C 50.86 11.60 51.31 11.97 51.72 12.38 C 52.13 12.79 52.50 13.23 52.83 13.73 C 53.16 14.23 53.46 14.76 53.72 15.36 C 53.98 15.97 54.20 16.61 54.40 17.35 C 54.59 18.10 54.75 18.86 54.88 19.84 C 55.00 20.82 55.10 21.20 55.16 23.22 C 55.22 25.25 55.26 29.07 55.26 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.46 0.55) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.46 0.55) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_cljdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <span class="text-xs font-medium">Shadcnblocks AI</span>
                        <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                          <p>The pilot kit is ready: a plan with the decision gate, an invitation explaining the two-week commitment, and a tracker for the two cohorts.</p>
                          <p>Each file is ready to review and download.</p>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="View 3 deliverables" type="button" @click="openAction(&quot;View 3 deliverables&quot;)">
                          <UIcon name="i-lucide-files" class="size-4" />
                          View 3 deliverables
                          <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-auto flex w-full max-w-2xl shrink-0 flex-col gap-3 px-4 pt-3 pb-4">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl" aria-label="Ask about deliverables">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask about the deliverables…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="text-muted max-w-52 truncate text-[11px]">3 files in this conversation</span>
                      </div>
                      <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                        <UIcon name="i-lucide-arrow-up" class="size-4" />
                        <span class="sr-only">Send message</span>
                      </UButton>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
              <p class="text-muted text-center text-[10px]">Prepared demo files and streamed replies</p>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize deliverable file cabinet" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:62%">
          <section class="@container/cabinet flex min-h-0 min-w-0 flex-1 flex-col">
            <header class="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-3 border-default">
              <div class="flex items-center gap-2 px-1">
                <UIcon name="i-lucide-files" class="text-muted size-4" />
                <h2 class="text-sm font-medium text-highlighted">Files</h2>
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">6</div>
              </div>
              <div class="flex shrink-0 items-center gap-1">
                <USelect v-model="form.allConversations" :items="allConversationsOptions" aria-label="Filter by conversation" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-44 border-0 bg-transparent shadow-none" />
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close file cabinet" type="button" @click="openAction(&quot;Close file cabinet&quot;)">
                  <UIcon name="i-lucide-panel-right-close" class="size-4" />
                </UButton>
              </div>
            </header>
            <div class="flex shrink-0 items-center gap-2 border-b px-4 py-3 border-default">
              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 min-w-0 flex-1">
                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                  <UIcon name="i-lucide-search" class="size-4" />
                </div>
                <UInput v-model="form.searchFiles" type="text" data-slot="input-group-control" aria-label="Search deliverables" placeholder="Search files…" name="searchFiles" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
              </div>
              <USelect v-model="form.allTypes" :items="allTypesOptions" aria-label="Filter file type" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-32" />
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Sort files" type="button" @click="openAction(&quot;Sort files&quot;)">
                <UIcon name="i-lucide-arrow-up-down" class="size-4" />
              </UButton>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 min-w-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="px-4 py-4">
                    <p class="text-muted mb-3 text-xs">6files ·Newest first</p>
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: File / Created / Size / Download -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #file-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="File" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #file-cell="{ row }">
                          <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex w-full min-w-0 items-center gap-3 rounded-sm text-left outline-none focus-visible:ring-2" aria-label="onboarding-pilot.mdPrepare the onboarding pilot" type="button" @click="openAction(&quot;onboarding-pilot.mdPrepare the onboarding pilot&quot;, row.original._id, 1)">
                            <span class="bg-(--ui-bg-muted)/60 text-muted flex size-9 shrink-0 items-center justify-center rounded-lg border border-default">
                              <UIcon :name="row.original.fileName5" class="size-4" />
                            </span>
                            <span class="flex min-w-0 flex-col gap-1">
                              <span class="truncate text-[13px] font-medium">{{ row.original.fileText9 }}</span>
                              <span class="text-muted truncate text-[11px]">{{ row.original.fileText11 }}</span>
                            </span>
                          </UButton>
                        </template>
                        <template #created-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Created" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #created-cell="{ row }">
                          {{ row.original.created }}
                        </template>
                        <template #size-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Size" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #size-cell="{ row }">
                          {{ row.original.size }}
                        </template>
                        <template #download-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Download" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #download-cell="{ row }">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.downloadArialabel3" type="button" @click="exportCsv()">
                            <UIcon name="i-lucide-download" class="size-4" />
                          </UButton>
                        </template>
                      </UTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-muted shrink-0 border-t px-4 py-3 text-xs border-default">Files generated in 2 conversations · Local demo</div>
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
