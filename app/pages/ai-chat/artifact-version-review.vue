<!-- Page: /ai-chat/artifact-version-review | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Document 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "",
  "v3Latest": "v3 · latest",
  "v2": "v2",
  "changesOnly": true
})

const tabs1Active = ref("1")

const tabs1Items = [
  {
    "label": "Preview",
    "value": "0"
  },
  {
    "label": "Compare",
    "value": "1"
  }
]

const v3LatestOptions = [
  "v3 · Expanded launch",
  "v2 · Pilot plan",
  "v1 · First draft"
]

const v2Options = [
  "v1 · First draft",
  "v2 · Pilot plan",
  "v3 · Expanded launch"
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-artifact-version-review.csv"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/artifact-version-review">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <div class="flex h-14 shrink-0 items-center justify-between border-b px-5 border-default">
              <h2 class="text-sm font-medium text-highlighted">Conversation</h2>
              <span class="text-muted text-xs">Artifact review</span>
            </div>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-2xl px-5 py-7">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Help me review onboarding-rollout.md before we share it. What changed, and is there anything we should bring back?</div>
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
                              <path d="M 55.36 32.00 C 55.36 34.91 55.33 38.72 55.26 40.74 C 55.20 42.76 55.10 43.13 54.98 44.11 C 54.85 45.08 54.69 45.84 54.49 46.58 C 54.30 47.33 54.07 47.96 53.81 48.56 C 53.55 49.17 53.25 49.70 52.92 50.19 C 52.59 50.69 52.22 51.13 51.80 51.54 C 51.39 51.94 50.94 52.31 50.44 52.64 C 49.94 52.97 49.40 53.26 48.79 53.52 C 48.18 53.78 47.54 54.00 46.78 54.19 C 46.03 54.38 45.26 54.54 44.27 54.66 C 43.28 54.79 42.90 54.89 40.86 54.95 C 38.81 55.01 34.95 55.04 32.00 55.04 C 29.05 55.04 25.19 55.01 23.14 54.95 C 21.10 54.89 20.72 54.79 19.73 54.66 C 18.74 54.54 17.97 54.38 17.22 54.19 C 16.46 54.00 15.82 53.78 15.21 53.52 C 14.60 53.26 14.06 52.97 13.56 52.64 C 13.06 52.31 12.61 51.94 12.20 51.54 C 11.78 51.13 11.41 50.69 11.08 50.19 C 10.75 49.70 10.45 49.17 10.19 48.56 C 9.93 47.96 9.70 47.33 9.51 46.58 C 9.31 45.84 9.15 45.08 9.02 44.11 C 8.90 43.13 8.80 42.76 8.74 40.74 C 8.67 38.72 8.64 34.91 8.64 32.00 C 8.64 29.09 8.67 25.28 8.74 23.26 C 8.80 21.24 8.90 20.87 9.02 19.89 C 9.15 18.92 9.31 18.16 9.51 17.42 C 9.70 16.67 9.93 16.04 10.19 15.44 C 10.45 14.83 10.75 14.30 11.08 13.81 C 11.41 13.31 11.78 12.87 12.20 12.46 C 12.61 12.06 13.06 11.69 13.56 11.36 C 14.06 11.03 14.60 10.74 15.21 10.48 C 15.82 10.22 16.46 10.00 17.22 9.81 C 17.97 9.62 18.74 9.46 19.73 9.34 C 20.72 9.21 21.10 9.11 23.14 9.05 C 25.19 8.99 29.05 8.96 32.00 8.96 C 34.95 8.96 38.81 8.99 40.86 9.05 C 42.90 9.11 43.28 9.21 44.27 9.34 C 45.26 9.46 46.03 9.62 46.78 9.81 C 47.54 10.00 48.18 10.22 48.79 10.48 C 49.40 10.74 49.94 11.03 50.44 11.36 C 50.94 11.69 51.39 12.06 51.80 12.46 C 52.22 12.87 52.59 13.31 52.92 13.81 C 53.25 14.30 53.55 14.83 53.81 15.44 C 54.07 16.04 54.30 16.67 54.49 17.42 C 54.69 18.16 54.85 18.92 54.98 19.89 C 55.10 20.87 55.20 21.24 55.26 23.26 C 55.33 25.28 55.36 29.09 55.36 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.97 0.48) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.97 0.48) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_cljdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <span class="text-xs font-medium">Shadcnblocks AI</span>
                        <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                          <p>I’ve opened the artifact and its saved versions. We can review the differences before deciding which version to keep.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="mx-auto w-full max-w-2xl shrink-0 px-4 pt-3 pb-4">
              <div class="mb-3 flex flex-wrap gap-1.5">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Explain changes" type="button" @click="openAction(&quot;Explain changes&quot;)">
                  Explain changes
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Restore impact" type="button" @click="openAction(&quot;Restore impact&quot;)">
                  Restore impact
                </UButton>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl" aria-label="Ask about artifact versions">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask about these changes…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="text-muted flex items-center gap-1.5 text-[11px]">
                          <UIcon name="i-lucide-file-text" class="size-3.5" />
                          v2 → v3
                        </span>
                      </div>
                      <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                        <UIcon name="i-lucide-arrow-up" class="size-4" />
                        <span class="sr-only">Send message</span>
                      </UButton>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
              <p class="text-muted mt-2 text-center text-[10px]">Demo answers from saved versions · no live model</p>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize artifact review" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:60%">
          <div data-orientation="horizontal" class="@container/versions flex min-h-0 min-w-0 flex-1 flex-col gap-0">
            <header class="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b px-3 py-2 border-default">
              <USelect v-model="form.v3Latest" :items="v3LatestOptions" aria-label="Version history" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-28 border-0 bg-transparent shadow-none" />
              <div class="flex items-center gap-1">
                <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Artifact view" data-orientation="horizontal" style="outline:none" />
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy version 3" type="button" @click="copyValue(&quot;Copy version 3&quot;)">
                  <UIcon name="i-lucide-copy" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Download version 3" type="button" @click="exportCsv()">
                  <UIcon name="i-lucide-download" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close artifact" type="button" @click="openAction(&quot;Close artifact&quot;)">
                  <UIcon name="i-lucide-panel-right-close" class="size-4" />
                </UButton>
              </div>
            </header>
            <div data-orientation="horizontal" id="radix-_R_ldbsnpfknmlb_-content-preview" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex min-h-0 flex-1 flex-col data-[state=inactive]:hidden" />
            <div data-orientation="horizontal" id="radix-_R_ldbsnpfknmlb_-content-compare" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex min-h-0 flex-1 flex-col data-[state=inactive]:hidden" style="animation-duration:0s">
              <div data-slot="scroll-area" class="relative overflow-hidden bg-(--ui-bg-muted)/30 min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <div class="px-4 py-6 sm:px-8 sm:py-8">
                      <div class="bg-default @container/comparison mx-auto max-w-3xl overflow-hidden rounded-xl border border-default">
                        <div class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-4 py-3 border-default">
                          <div class="flex items-center gap-2">
                            <span class="text-muted text-xs">Compare</span>
                            <USelect v-model="form.v2" :items="v2Options" aria-label="Compare from version" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-16 border-0 bg-transparent px-1 shadow-none" />
                            <span class="text-muted text-xs">→ v3</span>
                            <p class="text-muted ml-2 text-[11px]">4 changes</p>
                          </div>
                          <div class="flex items-center gap-2">
                            <UCheckbox v-model="form.changesOnly" aria-label="Toggle setting" />
                            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs" for="changes-only">Changes only</label>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous change" type="button" @click="openAction(&quot;Previous change&quot;)">
                              <UIcon name="i-lucide-chevron-up" class="size-4" />
                            </UButton>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next change" type="button" @click="openAction(&quot;Next change&quot;)">
                              <UIcon name="i-lucide-chevron-down" class="size-4" />
                            </UButton>
                          </div>
                        </div>
                        <div class="divide-y">
                          <section class="bg-default focus:ring-accented overflow-hidden outline-none focus:ring-2 focus:ring-inset">
                            <header class="flex items-center justify-between gap-3 px-5 pt-5 pb-2">
                              <h2 class="text-xs font-medium text-highlighted">Subtitle</h2>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] capitalize border-default">changed</div>
                            </header>
                            <div class="grid @[500px]/comparison:grid-cols-2">
                              <div class="border-b p-4 @[500px]/comparison:border-r @[500px]/comparison:border-b-0 border-default">
                                <p class="text-muted mb-3 text-[11px]">FROM · v2</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  A 
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">two-week pilot</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">with</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">a</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">clear</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">decision</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">gate</del>
                                </p>
                              </div>
                              <div class="p-4">
                                <p class="text-muted mb-3 text-[11px]">TO · v3</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  A 
                                  <ins class="bg-success/10 text-success no-underline">shorter</ins>
                                  <ins class="bg-success/10 text-success no-underline">setup</ins>
                                  <ins class="bg-success/10 text-success no-underline">for</ins>
                                  <ins class="bg-success/10 text-success no-underline">every</ins>
                                  <ins class="bg-success/10 text-success no-underline">new</ins>
                                  <ins class="bg-success/10 text-success no-underline">workspace</ins>
                                </p>
                              </div>
                            </div>
                          </section>
                          <section class="bg-default focus:ring-accented overflow-hidden outline-none focus:ring-2 focus:ring-inset">
                            <header class="flex items-center justify-between gap-3 px-5 pt-5 pb-2">
                              <h2 class="text-xs font-medium text-highlighted">Rollout</h2>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] capitalize border-default">changed</div>
                            </header>
                            <div class="grid @[500px]/comparison:grid-cols-2">
                              <div class="border-b p-4 @[500px]/comparison:border-r @[500px]/comparison:border-b-0 border-default">
                                <p class="text-muted mb-3 text-[11px]">FROM · v2</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">Start</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">with</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">20</del>
                                  new workspaces 
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">for</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">two</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">weeks.</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">Keep</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">the</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">checklist</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">behind</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">a</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">workspace</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">flag</del>
                                   and 
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">review</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">session</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">recordings</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">before</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">inviting</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">a</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">second</del>
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">cohort.</del>
                                  Existing teams stay on their current flow.
                                </p>
                              </div>
                              <div class="p-4">
                                <p class="text-muted mb-3 text-[11px]">TO · v3</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  <ins class="bg-success/10 text-success no-underline">Enable</ins>
                                  <ins class="bg-success/10 text-success no-underline">the</ins>
                                  <ins class="bg-success/10 text-success no-underline">checklist</ins>
                                  <ins class="bg-success/10 text-success no-underline">for all </ins>
                                  new workspaces 
                                  <ins class="bg-success/10 text-success no-underline">in</ins>
                                  <ins class="bg-success/10 text-success no-underline">the</ins>
                                  <ins class="bg-success/10 text-success no-underline">next</ins>
                                  <ins class="bg-success/10 text-success no-underline">release.</ins>
                                  <ins class="bg-success/10 text-success no-underline">Review</ins>
                                  <ins class="bg-success/10 text-success no-underline">the</ins>
                                  <ins class="bg-success/10 text-success no-underline">first</ins>
                                  <ins class="bg-success/10 text-success no-underline">week</ins>
                                  <ins class="bg-success/10 text-success no-underline">of</ins>
                                  <ins class="bg-success/10 text-success no-underline">usage</ins>
                                   and 
                                  <ins class="bg-success/10 text-success no-underline">follow</ins>
                                  <ins class="bg-success/10 text-success no-underline">up</ins>
                                  <ins class="bg-success/10 text-success no-underline">with</ins>
                                  <ins class="bg-success/10 text-success no-underline">teams</ins>
                                  <ins class="bg-success/10 text-success no-underline">that</ins>
                                  <ins class="bg-success/10 text-success no-underline">do</ins>
                                  <ins class="bg-success/10 text-success no-underline">not</ins>
                                  <ins class="bg-success/10 text-success no-underline">complete</ins>
                                  <ins class="bg-success/10 text-success no-underline">the checklist. </ins>
                                  Existing teams stay on their current flow.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section class="bg-default focus:ring-accented overflow-hidden outline-none focus:ring-2 focus:ring-inset">
                            <header class="flex items-center justify-between gap-3 px-5 pt-5 pb-2">
                              <h2 class="text-xs font-medium text-highlighted">Fallback and decision gate</h2>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] capitalize border-default">removed</div>
                            </header>
                            <div class="grid @[500px]/comparison:grid-cols-2">
                              <div class="border-b p-4 @[500px]/comparison:border-r @[500px]/comparison:border-b-0 border-default">
                                <p class="text-muted mb-3 text-[11px]">FROM · v2</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  <del class="bg-(--ui-error)/10 text-error decoration-destructive/50">Keep the current setup flow available throughout the pilot. Pause expansion if teams lose access to required controls or support requests increase. The product owner reviews the evidence before each new cohort.</del>
                                </p>
                              </div>
                              <div class="p-4">
                                <p class="text-muted mb-3 text-[11px]">TO · v3</p>
                                <p class="text-muted text-sm italic">No section in this version</p>
                              </div>
                            </div>
                          </section>
                          <section class="bg-default focus:ring-accented overflow-hidden outline-none focus:ring-2 focus:ring-inset">
                            <header class="flex items-center justify-between gap-3 px-5 pt-5 pb-2">
                              <h2 class="text-xs font-medium text-highlighted">Launch announcement</h2>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] capitalize border-default">added</div>
                            </header>
                            <div class="grid @[500px]/comparison:grid-cols-2">
                              <div class="border-b p-4 @[500px]/comparison:border-r @[500px]/comparison:border-b-0 border-default">
                                <p class="text-muted mb-3 text-[11px]">FROM · v2</p>
                                <p class="text-muted text-sm italic">No section in this version</p>
                              </div>
                              <div class="p-4">
                                <p class="text-muted mb-3 text-[11px]">TO · v3</p>
                                <p class="text-sm leading-7 whitespace-pre-wrap">
                                  <ins class="bg-success/10 text-success no-underline">Publish the release note on launch day and send a short product email to new workspace owners. Link to the checklist and explain how to invite a teammate.</ins>
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
