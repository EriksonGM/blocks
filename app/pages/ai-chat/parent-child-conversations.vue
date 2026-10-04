<!-- Page: /ai-chat/parent-child-conversations | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 21 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "",
  "dataAnalyst": "Data analyst",
  "steerNow": "Steer now"
})

const dataAnalystOptions = [
  "Data analyst",
  "Accessibility reviewer",
  "Security reviewer"
]

const steerNowOptions = [
  "Steer now",
  "Queue follow-up"
]

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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-parent-child-conversations.csv"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/parent-child-conversations">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <header class="flex h-11 shrink-0 items-center justify-between border-b px-4 border-default">
              <h1 class="text-xs font-medium text-highlighted">Bulk import review</h1>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Open child conversation" type="button" @click="openAction(&quot;Open child conversation&quot;)">
                <UIcon name="i-lucide-panel-right-open" class="size-4" />
              </UButton>
            </header>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-2xl px-5 py-7 sm:px-7">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-6">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Review the bulk import flow before we hand it to engineering. Have specialists check data handling, accessibility, and security, then bring their findings together.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <span class="text-xs font-medium">Coordinator</span>
                        <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                          <p>I’ve split the review into three independent tasks. Open any child conversation to inspect its work or guide that agent directly.</p>
                        </div>
                      </div>
                    </div>
                    <section aria-label="Delegated tasks" class="overflow-hidden rounded-xl border border-default">
                      <div class="bg-(--ui-bg-muted)/30 flex items-center justify-between gap-2 border-b px-4 py-3 border-default">
                        <span class="flex items-center gap-2 text-xs font-medium">
                          <UIcon name="i-lucide-git-branch" class="size-3.5" />
                          Delegated work
                        </span>
                        <span class="text-muted text-[11px]">2 of 3 complete</span>
                      </div>
                      <div class="divide-y">
                        <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:outline-accented flex w-full items-start gap-3 px-4 py-4 text-left transition-colors bg-(--ui-bg-muted)/35" aria-label="Data analystWorkingInput validationReview CSV parsing, required fields, and duplicate handling. Recommend a recovery path for invalid rows." type="button" @click="exportCsv()">
                          <span class="bg-default mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-default">
                            <UIcon name="i-lucide-corner-down-right" class="size-3.5" />
                          </span>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                              <p class="text-sm font-medium">Data analyst</p>
                              <span class="inline-flex items-center gap-1.5 text-[11px] text-chart-2">
                                <span class="size-1.5 rounded-full bg-current" />
                                Working
                              </span>
                            </div>
                            <p class="text-muted mt-1 text-xs leading-5">Input validation</p>
                            <p class="text-muted mt-2 line-clamp-2 text-xs leading-5">Review CSV parsing, required fields, and duplicate handling. Recommend a recovery path for invalid rows.</p>
                          </div>
                          <UIcon name="i-lucide-arrow-up-right" class="text-muted mt-0.5 size-3.5 shrink-0" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:outline-accented flex w-full items-start gap-3 px-4 py-4 text-left transition-colors" aria-label="Accessibility reviewerCompletedKeyboard &amp; feedbackKeep the upload control keyboard-accessible. Move focus to the error summary after validation fails, link each error to its row, and announce import progress without repeatedly interrupting the reader." type="button" @click="openAction(&quot;Accessibility reviewerCompletedKeyboard & feedbackKeep the upload control keyboard-accessible. Move focus to the error summary after validation fails, link each error to its row, and announce import progress without repeatedly interrupting the reader.&quot;)">
                          <span class="bg-default mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-default">
                            <UIcon name="i-lucide-corner-down-right" class="size-3.5" />
                          </span>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                              <p class="text-sm font-medium">Accessibility reviewer</p>
                              <span class="inline-flex items-center gap-1.5 text-[11px] text-success">
                                <UIcon name="i-lucide-check" class="size-3" />
                                Completed
                              </span>
                            </div>
                            <p class="text-muted mt-1 text-xs leading-5">Keyboard &amp; feedback</p>
                            <p class="text-muted mt-2 line-clamp-2 text-xs leading-5">Keep the upload control keyboard-accessible. Move focus to the error summary after validation fails, link each error to its row, and announce import progress without repeatedly interrupting the reader.</p>
                          </div>
                          <UIcon name="i-lucide-arrow-up-right" class="text-muted mt-0.5 size-3.5 shrink-0" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:outline-accented flex w-full items-start gap-3 px-4 py-4 text-left transition-colors" aria-label="Security reviewerCompletedFile &amp; data boundariesValidate file type and size on the server. Check workspace permissions before both preview and import. Exclude sensitive fields from error exports, and treat every imported value as data rather than executable markup." type="button" @click="exportCsv()">
                          <span class="bg-default mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-default">
                            <UIcon name="i-lucide-corner-down-right" class="size-3.5" />
                          </span>
                          <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                              <p class="text-sm font-medium">Security reviewer</p>
                              <span class="inline-flex items-center gap-1.5 text-[11px] text-success">
                                <UIcon name="i-lucide-check" class="size-3" />
                                Completed
                              </span>
                            </div>
                            <p class="text-muted mt-1 text-xs leading-5">File &amp; data boundaries</p>
                            <p class="text-muted mt-2 line-clamp-2 text-xs leading-5">Validate file type and size on the server. Check workspace permissions before both preview and import. Exclude sensitive fields from error exports, and treat every imported value as data rather than executable markup.</p>
                          </div>
                          <UIcon name="i-lucide-arrow-up-right" class="text-muted mt-0.5 size-3.5 shrink-0" />
                        </UButton>
                      </div>
                      <div class="flex items-center justify-between gap-3 border-t px-4 py-3 border-default">
                        <span class="text-muted text-xs">1 agent still working</span>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Collect results" type="button" @click="openAction(&quot;Collect results&quot;)">
                          Collect results
                        </UButton>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="shrink-0 px-4 pt-3 pb-4">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Message the coordinator…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default gap-2.5 rounded-[22px] p-3.5 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented shadow-sm" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-0">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="text-muted text-[11px]">Coordinator · parent thread</span>
                      </div>
                      <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                        <UIcon name="i-lucide-arrow-up" class="size-4" />
                        <span class="sr-only">Send message</span>
                      </UButton>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
              <p class="text-muted mt-2 text-center text-[10px]">Parent and child conversations keep separate histories</p>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize child conversation" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:48%">
          <section aria-label="Delegated child conversation" class="bg-default flex min-h-0 min-w-0 flex-1 flex-col">
            <header class="flex h-11 shrink-0 items-center gap-2 border-b px-3 border-default">
              <UIcon name="i-lucide-git-branch" class="text-muted size-3.5" />
              <USelect v-model="form.dataAnalyst" :items="dataAnalystOptions" aria-label="Select delegated agent" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 flex-1 border-0 shadow-none" />
              <span class="inline-flex items-center gap-1.5 text-[11px] text-chart-2">
                <span class="size-1.5 rounded-full bg-current" />
                Working
              </span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close child conversation" type="button" @click="openAction(&quot;Close child conversation&quot;)">
                <UIcon name="i-lucide-x" class="size-4" />
              </UButton>
            </header>
            <div class="text-muted flex shrink-0 items-center gap-2 border-b px-4 py-2.5 text-[11px] border-default">
              <UIcon name="i-lucide-corner-down-right" class="size-3.5" />
              Assigned by Coordinator · Bulk import review
            </div>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-xl px-5 py-6">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-6">
                    <div>
                      <p class="text-muted mb-2 text-[10px] font-medium tracking-wide uppercase">Parent assignment</p>
                      <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                        <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                          <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                            <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Review CSV parsing, required fields, and duplicate handling. Recommend a recovery path for invalid rows.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                        <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                          <span class="text-xs font-medium">Data analyst</span>
                          <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                            <p>I’ve checked the required-field rules and the duplicate preview. I’m now tracing what happens when only part of a file is valid.</p>
                            <p>The main issue is that a single bad row currently forces the whole upload to start again.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-xl border border-default">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-auto w-full justify-between px-3 py-3" aria-label="Task activity2/3" type="button" @click="openAction(&quot;Task activity2/3&quot;)">
                        <span class="flex items-center gap-2">
                          <UIcon name="i-lucide-file-check-corner" class="size-3.5" />
                          Task activity
                        </span>
                        <span class="text-muted flex items-center gap-2 text-xs">
                          2/3
                          <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                        </span>
                      </UButton>
                      <div id="radix-_R_9bldbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 245px; --radix-collapsible-content-width: 526.3125px;">
                        <ol class="flex flex-col gap-4 border-t px-4 py-4 border-default">
                          <li class="flex gap-2.5">
                            <span class="mt-0.5 flex size-4 shrink-0 items-center justify-center text-muted">
                              <UIcon name="i-lucide-check" class="size-3.5" />
                            </span>
                            <div>
                              <p class="text-xs font-medium">Inspect file validation</p>
                              <p class="text-muted mt-1 text-xs leading-5">Checked required columns, empty values, and invalid dates against the sample import contract.</p>
                            </div>
                          </li>
                          <li class="flex gap-2.5">
                            <span class="mt-0.5 flex size-4 shrink-0 items-center justify-center text-muted">
                              <UIcon name="i-lucide-check" class="size-3.5" />
                            </span>
                            <div>
                              <p class="text-xs font-medium">Check duplicate handling</p>
                              <p class="text-muted mt-1 text-xs leading-5">Compared duplicate detection with the preview step. Matching records need an explicit skip or update choice.</p>
                            </div>
                          </li>
                          <li class="flex gap-2.5">
                            <span class="mt-0.5 flex size-4 shrink-0 items-center justify-center text-chart-2">
                              <span class="size-1.5 rounded-full bg-current" />
                            </span>
                            <div>
                              <p class="text-xs font-medium">Trace partial-failure recovery</p>
                              <p class="text-muted mt-1 text-xs leading-5">Reviewing how valid and invalid rows are separated and whether a corrected file can be retried.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="shrink-0 px-4 pt-3 pb-4">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Guide data analyst…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default gap-2.5 rounded-[22px] p-3.5 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented shadow-sm" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-0">
                      <div class="flex min-w-0 items-center gap-1">
                        <USelect v-model="form.steerNow" :items="steerNowOptions" aria-label="Child guidance delivery" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-34 border-0 shadow-none" />
                      </div>
                      <div class="flex items-center gap-1">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Stop this child task" type="button" @click="openAction(&quot;Stop this child task&quot;)">
                          <UIcon name="i-lucide-square" class="size-4" />
                        </UButton>
                        <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                          <UIcon name="i-lucide-arrow-up" class="size-4" />
                          <span class="sr-only">Send message</span>
                        </UButton>
                      </div>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
              <p class="text-muted mt-2 text-center text-[10px]">Commands apply to this child only · demo runtime</p>
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
