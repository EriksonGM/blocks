<!-- Page: /ai-chat/pdf-evidence-chat | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Document 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "",
  "field2": "2",
  "fitWidth": "Fit width"
})

const fitWidthOptions = [
  "Fit width",
  "100%",
  "125%",
  "150%",
  "200%"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/pdf-evidence-chat">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <div class="flex h-11 shrink-0 items-center justify-between gap-2 border-b px-4 border-default">
              <h1 class="truncate text-xs font-medium text-highlighted">First-week research</h1>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Hide PDF reader" type="button" @click="openAction(&quot;Hide PDF reader&quot;)">
                <UIcon name="i-lucide-panel-right-close" class="size-4" />
              </UButton>
            </div>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-xl px-4 py-7 sm:px-5">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">What is getting in the way of a team's first shared result? Use the report and show me the evidence.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_6ljdbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_6ljdbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.39 32.00 C 55.39 34.91 55.35 38.71 55.29 40.73 C 55.23 42.74 55.13 43.12 55.00 44.09 C 54.87 45.06 54.71 45.82 54.52 46.57 C 54.33 47.31 54.10 47.94 53.84 48.54 C 53.57 49.15 53.28 49.68 52.94 50.17 C 52.61 50.66 52.24 51.11 51.83 51.51 C 51.41 51.92 50.97 52.28 50.46 52.61 C 49.96 52.94 49.42 53.23 48.81 53.49 C 48.20 53.75 47.56 53.97 46.80 54.16 C 46.05 54.35 45.28 54.51 44.29 54.64 C 43.30 54.76 42.92 54.86 40.87 54.92 C 38.82 54.98 34.96 55.01 32.00 55.01 C 29.04 55.01 25.18 54.98 23.13 54.92 C 21.08 54.86 20.70 54.76 19.71 54.64 C 18.72 54.51 17.95 54.35 17.20 54.16 C 16.44 53.97 15.80 53.75 15.19 53.49 C 14.58 53.23 14.04 52.94 13.54 52.61 C 13.03 52.28 12.59 51.92 12.17 51.51 C 11.76 51.11 11.39 50.66 11.06 50.17 C 10.72 49.68 10.43 49.15 10.16 48.54 C 9.90 47.94 9.67 47.31 9.48 46.57 C 9.29 45.82 9.13 45.06 9.00 44.09 C 8.87 43.12 8.77 42.74 8.71 40.73 C 8.65 38.71 8.61 34.91 8.61 32.00 C 8.61 29.09 8.65 25.29 8.71 23.27 C 8.77 21.26 8.87 20.88 9.00 19.91 C 9.13 18.94 9.29 18.18 9.48 17.43 C 9.67 16.69 9.90 16.06 10.16 15.46 C 10.43 14.85 10.72 14.32 11.06 13.83 C 11.39 13.34 11.76 12.89 12.17 12.49 C 12.59 12.08 13.03 11.72 13.54 11.39 C 14.04 11.06 14.58 10.77 15.19 10.51 C 15.80 10.25 16.44 10.03 17.20 9.84 C 17.95 9.65 18.72 9.49 19.71 9.36 C 20.70 9.24 21.08 9.14 23.13 9.08 C 25.18 9.02 29.04 8.99 32.00 8.99 C 34.96 8.99 38.82 9.02 40.87 9.08 C 42.92 9.14 43.30 9.24 44.29 9.36 C 45.28 9.49 46.05 9.65 46.80 9.84 C 47.56 10.03 48.20 10.25 48.81 10.51 C 49.42 10.77 49.96 11.06 50.46 11.39 C 50.97 11.72 51.41 12.08 51.83 12.49 C 52.24 12.89 52.61 13.34 52.94 13.83 C 53.28 14.32 53.57 14.85 53.84 15.46 C 54.10 16.06 54.33 16.69 54.52 17.43 C 54.71 18.18 54.87 18.94 55.00 19.91 C 55.13 20.88 55.23 21.26 55.29 23.27 C 55.35 25.29 55.39 29.09 55.39 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.17 -0.32) rotate(-11 27 29.3) translate(0 29.3) scale(1 0.891) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.17 -0.32) rotate(-11 37 29.3) translate(0 29.3) scale(1 0.891) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_6ljdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Research</span>
                        </div>
                        <div>
                          <div class="flex min-w-0 flex-col gap-4 text-xs leading-5">
                            <p>Three handoffs are worth fixing before adding more onboarding steps:</p>
                            <p>
                              <span class="group/citation leading-inherit inline">
                                <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">Teams reach advanced settings before their first shared result. Eight of the 12 observed teams did this, and six needed help understanding what was required.</span>
                                <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 text-xs mx-1 inline-flex h-5 rounded-full px-2 align-baseline" aria-label="p. 2" type="button" @click="openAction(&quot;p. 2&quot;)">
                                  p. 2
                                </UButton>
                              </span>
                            </p>
                            <p>
                              <span class="group/citation leading-inherit inline">
                                <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">An invitation needs a concrete next step. Five teams invited someone without sharing or assigning a task in that session.</span>
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default text-xs mx-1 inline-flex h-5 rounded-full px-2 align-baseline" aria-label="p. 2" type="button" @click="openAction(&quot;p. 2&quot;)">
                                  p. 2
                                </UButton>
                              </span>
                            </p>
                            <p>
                              <span class="group/citation leading-inherit inline">
                                <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">Import recovery needs to make partial success clear. Three teams restarted an upload because they could not tell which rows had been saved.</span>
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default text-xs mx-1 inline-flex h-5 rounded-full px-2 align-baseline" aria-label="p. 2" type="button" @click="openAction(&quot;p. 2&quot;)">
                                  p. 2
                                </UButton>
                              </span>
                            </p>
                            <div>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md text-xs px-0" aria-label="1 source ·3 passages" type="button" @click="openAction(&quot;1 source ·3 passages&quot;)">
                                <UIcon name="i-lucide-file-text" class="size-4" />
                                1 source ·3 passages
                              </UButton>
                              <div id="radix-_R_taljdbsnpfknmlb_" style="" />
                            </div>
                          </div>
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
            <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-5">
              <div class="mb-3 flex flex-wrap gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Study limitations" type="button" @click="openAction(&quot;Study limitations&quot;)">
                  Study limitations
                  <UIcon name="i-lucide-arrow-right" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Pilot plan" type="button" @click="openAction(&quot;Pilot plan&quot;)">
                  Pilot plan
                  <UIcon name="i-lucide-arrow-right" class="size-4" />
                </UButton>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-xl" aria-label="Ask about this PDF">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask about the report…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="text-muted flex items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-file-text" class="size-3.5" />
                          1 report
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
              <p class="text-muted mt-2 text-center text-[10px]">Prepared demo answers · verify against the cited passage</p>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize pdf reader" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:60%">
          <section aria-label="PDF evidence reader" class="flex h-full min-h-0 w-full min-w-0 flex-col">
            <div class="flex h-11 shrink-0 items-center gap-2 border-b px-3 border-default">
              <UIcon name="i-lucide-file-text" class="text-muted size-4 shrink-0" />
              <span class="min-w-0 flex-1 truncate text-xs">first-week-research.pdf</span>
              <NuxtLink aria-label="Download original PDF" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" to="/reference/3b956b1a006ba312.pdf" external>
                <UIcon name="i-lucide-download" class="size-4" />
              </NuxtLink>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close PDF reader" type="button" @click="openAction(&quot;Close PDF reader&quot;)">
                <UIcon name="i-lucide-x" class="size-4" />
              </UButton>
            </div>
            <div role="toolbar" aria-label="PDF navigation" class="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b px-3 py-2 border-default">
              <div class="flex items-center gap-1">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Document outline" type="button" @click="openAction(&quot;Document outline&quot;)">
                  <UIcon name="i-lucide-list-tree" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Search PDF" type="button" @click="openAction(&quot;Search PDF&quot;)">
                  <UIcon name="i-lucide-search" class="size-4" />
                </UButton>
              </div>
              <div class="flex items-center gap-1">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous PDF page" type="button" @click="openAction(&quot;Previous PDF page&quot;)">
                  <UIcon name="i-lucide-chevron-left" class="size-4" />
                </UButton>
                <UInput v-model="form.field2" type="text" aria-label="PDF page number" name="field2" class="flex rounded-md text-base md:text-sm h-7 w-10 text-center" :ui="{ base: 'h-full' }" />
                <span class="text-muted text-xs">/ 3</span>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next PDF page" type="button" @click="openAction(&quot;Next PDF page&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </UButton>
              </div>
              <USelect v-model="form.fitWidth" :items="fitWidthOptions" aria-label="PDF zoom" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-28" />
            </div>
            <div class="bg-(--ui-bg-muted)/30 flex shrink-0 items-center gap-2 border-b px-3 py-2 border-default">
              <span class="bg-chart-2 size-1.5 shrink-0 rounded-full" />
              <span class="min-w-0 flex-1 truncate text-xs">01 / Setup crowds out the first task</span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy cited passage" type="button" @click="copyValue(&quot;Copy cited passage&quot;)">
                <UIcon name="i-lucide-copy" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Clear passage highlight" type="button" @click="openAction(&quot;Clear passage highlight&quot;)">
                <UIcon name="i-lucide-x" class="size-4" />
              </UButton>
            </div>
            <div class="bg-(--ui-bg-muted)/40 min-h-0 flex-1 overflow-auto overscroll-contain p-4 sm:p-6" aria-label="PDF page 2: The friction is in the handoff">
              <div class="relative mx-auto shrink-0 overflow-hidden rounded-sm shadow-sm" style="width:100%;aspect-ratio:612 / 792">
                <img alt="Page 2: The friction is in the handoff. Select a passage to inspect its evidence." width="612" height="792" class="block h-auto w-full" style="color:transparent" src="/reference/c80057a07cb60c2a.png" loading="lazy" />
                <UButton color="neutral" variant="outline" class="hover:bg-chart-2/10 focus-visible:border-chart-2 absolute rounded-sm border-2 transition-colors focus-visible:outline-none border-chart-2/60 bg-chart-2/15" style="left:8.169934640522875%;top:27.02020202020202%;width:83.66013071895425%;height:8.585858585858585%" aria-label="Eight of the 12 observed teams opened advanced settings before completing their first shared task. Six of those teams asked the facilitator which settings were required. The questions were about whether it was safe to proceed, rather than how to use a specific control." type="button" @click="openAction(&quot;Eight of the 12 observed teams opened advanced settings before completing their first shared task. Six of those teams asked the facilitator which settings were required. The questions were about whether it was safe to proceed, rather than how to use a specific control.&quot;)">
                  <span class="sr-only">Eight of the 12 observed teams opened advanced settings before completing their first shared task. Six of those teams asked the facilitator which settings were required. The questions were about whether it was safe to proceed, rather than how to use a specific control.</span>
                </UButton>
                <UButton color="neutral" variant="outline" class="hover:bg-chart-2/10 focus-visible:border-chart-2 absolute rounded-sm border-2 border-transparent transition-colors focus-visible:outline-none" style="left:8.169934640522875%;top:41.035353535353536%;width:83.66013071895425%;height:8.585858585858585%" aria-label="Five teams invited a teammate but did not assign or share a task in the same session. Invitees could enter the workspace, yet the invitation did not explain what they should do first. A small, concrete shared task would give both people a useful starting point." type="button" @click="openAction(&quot;Five teams invited a teammate but did not assign or share a task in the same session. Invitees could enter the workspace, yet the invitation did not explain what they should do first. A small, concrete shared task would give both people a useful starting point.&quot;)">
                  <span class="sr-only">Five teams invited a teammate but did not assign or share a task in the same session. Invitees could enter the workspace, yet the invitation did not explain what they should do first. A small, concrete shared task would give both people a useful starting point.</span>
                </UButton>
                <UButton color="neutral" variant="outline" class="hover:bg-chart-2/10 focus-visible:border-chart-2 absolute rounded-sm border-2 border-transparent transition-colors focus-visible:outline-none" style="left:8.169934640522875%;top:55.05050505050505%;width:83.66013071895425%;height:8.585858585858585%" aria-label="Four teams encountered an invalid row during their first import. Three restarted the upload because they could not tell whether valid rows had been saved. The preview needs a clear count of accepted and rejected rows, plus a way to retry only the rejected rows." type="button" @click="openAction(&quot;Four teams encountered an invalid row during their first import. Three restarted the upload because they could not tell whether valid rows had been saved. The preview needs a clear count of accepted and rejected rows, plus a way to retry only the rejected rows.&quot;)">
                  <span class="sr-only">Four teams encountered an invalid row during their first import. Three restarted the upload because they could not tell whether valid rows had been saved. The preview needs a clear count of accepted and rejected rows, plus a way to retry only the rejected rows.</span>
                </UButton>
              </div>
            </div>
            <div class="text-muted flex shrink-0 items-center justify-between gap-2 border-t px-3 py-2 text-[11px] border-default">
              <span>Page 2 of 3 · Observed friction</span>
              <span>Demo research report</span>
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
