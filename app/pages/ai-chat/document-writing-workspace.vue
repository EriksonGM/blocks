<!-- Page: /ai-chat/document-writing-workspace | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Document 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "documentReplacement": "Help new teams get a useful result with three steps: create a project, invite a teammate, and complete a shared task. Introduce advanced settings when they become relevant.",
  "message": "",
  "moreConcise": "More concise",
  "text": "Text"
})

const moreConciseOptions = [
  "More concise",
  "More direct"
]

const textOptions = [
  "Text",
  "Heading"
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
  anchor.download = "ai-chat-document-writing-workspace.csv"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/document-writing-workspace">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <div class="flex h-11 shrink-0 items-center justify-between border-b px-4 border-default">
              <h1 class="text-xs font-medium text-highlighted">Onboarding brief</h1>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Open document" type="button" @click="openAction(&quot;Open document&quot;)">
                <UIcon name="i-lucide-panel-right-open" class="size-4" />
              </UButton>
            </div>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 mx-auto w-full max-w-xl px-4 py-7 sm:px-5">
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9 pb-8">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Turn our onboarding notes into a short recommendation for the product team.</div>
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
                              <path d="M 55.37 32.00 C 55.37 34.91 55.34 38.72 55.28 40.73 C 55.21 42.75 55.12 43.12 54.99 44.10 C 54.86 45.07 54.70 45.83 54.51 46.57 C 54.31 47.32 54.09 47.95 53.83 48.55 C 53.56 49.15 53.27 49.68 52.93 50.18 C 52.60 50.67 52.23 51.12 51.82 51.52 C 51.40 51.93 50.96 52.29 50.45 52.62 C 49.95 52.95 49.41 53.24 48.80 53.50 C 48.19 53.76 47.55 53.98 46.79 54.17 C 46.04 54.37 45.27 54.52 44.28 54.65 C 43.29 54.78 42.91 54.87 40.86 54.93 C 38.82 55.00 34.95 55.03 32.00 55.03 C 29.05 55.03 25.18 55.00 23.14 54.93 C 21.09 54.87 20.71 54.78 19.72 54.65 C 18.73 54.52 17.96 54.37 17.21 54.17 C 16.45 53.98 15.81 53.76 15.20 53.50 C 14.59 53.24 14.05 52.95 13.55 52.62 C 13.04 52.29 12.60 51.93 12.18 51.52 C 11.77 51.12 11.40 50.67 11.07 50.18 C 10.73 49.68 10.44 49.15 10.17 48.55 C 9.91 47.95 9.69 47.32 9.49 46.57 C 9.30 45.83 9.14 45.07 9.01 44.10 C 8.88 43.12 8.79 42.75 8.72 40.73 C 8.66 38.72 8.63 34.91 8.63 32.00 C 8.63 29.09 8.66 25.28 8.72 23.27 C 8.79 21.25 8.88 20.88 9.01 19.90 C 9.14 18.93 9.30 18.17 9.49 17.43 C 9.69 16.68 9.91 16.05 10.17 15.45 C 10.44 14.85 10.73 14.32 11.07 13.82 C 11.40 13.33 11.77 12.88 12.18 12.48 C 12.60 12.07 13.04 11.71 13.55 11.38 C 14.05 11.05 14.59 10.76 15.20 10.50 C 15.81 10.24 16.45 10.02 17.21 9.83 C 17.96 9.63 18.73 9.48 19.72 9.35 C 20.71 9.22 21.09 9.13 23.14 9.07 C 25.18 9.00 29.05 8.97 32.00 8.97 C 34.95 8.97 38.82 9.00 40.86 9.07 C 42.91 9.13 43.29 9.22 44.28 9.35 C 45.27 9.48 46.04 9.63 46.79 9.83 C 47.55 10.02 48.19 10.24 48.80 10.50 C 49.41 10.76 49.95 11.05 50.45 11.38 C 50.96 11.71 51.40 12.07 51.82 12.48 C 52.23 12.88 52.60 13.33 52.93 13.82 C 53.27 14.32 53.56 14.85 53.83 15.45 C 54.09 16.05 54.31 16.68 54.51 17.43 C 54.70 18.17 54.86 18.93 54.99 19.90 C 55.12 20.88 55.21 21.25 55.28 23.27 C 55.34 25.28 55.37 29.09 55.37 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.32 -0.16) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.32 -0.16) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_cljdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Writing</span>
                        </div>
                        <div>
                          <div class="flex min-w-0 flex-col gap-4">
                            <p class="text-xs leading-5">The draft is ready beside this conversation. You can edit it directly or select a passage for a focused revision.</p>
                            <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-colors focus-visible:ring-2 focus-visible:outline-none border-default" aria-label="Onboarding briefEditable document · 164 words" type="button" @click="openAction(&quot;Onboarding briefEditable document · 164 words&quot;)">
                              <span class="bg-muted flex size-9 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-file-text" class="size-4" />
                              </span>
                              <span class="flex-1">
                                <span class="block text-sm font-medium">Onboarding brief</span>
                                <span class="text-muted block text-xs">Editable document · 164 words</span>
                              </span>
                              <UIcon name="i-lucide-arrow-up-right" class="text-muted size-4" />
                            </UButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Make the recommendation shorter and more direct.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_d5jdbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_d5jdbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.37 32.00 C 55.37 34.91 55.34 38.72 55.28 40.73 C 55.21 42.75 55.12 43.12 54.99 44.10 C 54.86 45.07 54.70 45.83 54.51 46.57 C 54.31 47.32 54.09 47.95 53.83 48.55 C 53.56 49.15 53.27 49.68 52.93 50.18 C 52.60 50.67 52.23 51.12 51.82 51.52 C 51.40 51.93 50.96 52.29 50.45 52.62 C 49.95 52.95 49.41 53.24 48.80 53.50 C 48.19 53.76 47.55 53.98 46.79 54.17 C 46.04 54.37 45.27 54.52 44.28 54.65 C 43.29 54.78 42.91 54.87 40.86 54.93 C 38.82 55.00 34.95 55.03 32.00 55.03 C 29.05 55.03 25.18 55.00 23.14 54.93 C 21.09 54.87 20.71 54.78 19.72 54.65 C 18.73 54.52 17.96 54.37 17.21 54.17 C 16.45 53.98 15.81 53.76 15.20 53.50 C 14.59 53.24 14.05 52.95 13.55 52.62 C 13.04 52.29 12.60 51.93 12.18 51.52 C 11.77 51.12 11.40 50.67 11.07 50.18 C 10.73 49.68 10.44 49.15 10.17 48.55 C 9.91 47.95 9.69 47.32 9.49 46.57 C 9.30 45.83 9.14 45.07 9.01 44.10 C 8.88 43.12 8.79 42.75 8.72 40.73 C 8.66 38.72 8.63 34.91 8.63 32.00 C 8.63 29.09 8.66 25.28 8.72 23.27 C 8.79 21.25 8.88 20.88 9.01 19.90 C 9.14 18.93 9.30 18.17 9.49 17.43 C 9.69 16.68 9.91 16.05 10.17 15.45 C 10.44 14.85 10.73 14.32 11.07 13.82 C 11.40 13.33 11.77 12.88 12.18 12.48 C 12.60 12.07 13.04 11.71 13.55 11.38 C 14.05 11.05 14.59 10.76 15.20 10.50 C 15.81 10.24 16.45 10.02 17.21 9.83 C 17.96 9.63 18.73 9.48 19.72 9.35 C 20.71 9.22 21.09 9.13 23.14 9.07 C 25.18 9.00 29.05 8.97 32.00 8.97 C 34.95 8.97 38.82 9.00 40.86 9.07 C 42.91 9.13 43.29 9.22 44.28 9.35 C 45.27 9.48 46.04 9.63 46.79 9.83 C 47.55 10.02 48.19 10.24 48.80 10.50 C 49.41 10.76 49.95 11.05 50.45 11.38 C 50.96 11.71 51.40 12.07 51.82 12.48 C 52.23 12.88 52.60 13.33 52.93 13.82 C 53.27 14.32 53.56 14.85 53.83 15.45 C 54.09 16.05 54.31 16.68 54.51 17.43 C 54.70 18.17 54.86 18.93 54.99 19.90 C 55.12 20.88 55.21 21.25 55.28 23.27 C 55.34 25.28 55.37 29.09 55.37 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.32 -0.16) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.32 -0.16) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_d5jdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Writing</span>
                        </div>
                        <div>
                          <div class="flex min-w-0 flex-col gap-4">
                            <UButton color="neutral" variant="outline" class="focus-visible:ring-accented flex flex-col gap-2 border-l-2 py-1 pl-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="Selected passageWe recommend introducing a guided checklist for new teams so that they can get a useful result before they are asked to configure the entire workspace. The checklist should focus on creating one project, inviting one teammate, and completing one shared task. Advanced settings can wait until the team has a reason to use them.Locate in document" type="button" @click="openAction(&quot;Selected passageWe recommend introducing a guided checklist for new teams so that they can get a useful result before they are asked to configure the entire workspace. The checklist should focus on creating one project, inviting one teammate, and completing one shared task. Advanced settings can wait until the team has a reason to use them.Locate in document&quot;)">
                              <span class="text-muted block text-[10px] font-medium tracking-wide uppercase">Selected passage</span>
                              <span class="text-muted line-clamp-3 text-xs leading-5">We recommend introducing a guided checklist for new teams so that they can get a useful result before they are asked to configure the entire workspace. The checklist should focus on creating one project, inviting one teammate, and completing one shared task. Advanced settings can wait until the team has a reason to use them.</span>
                              <span class="block text-xs underline underline-offset-4">Locate in document</span>
                            </UButton>
                            <div class="overflow-hidden rounded-xl border border-default">
                              <div class="bg-(--ui-bg-muted)/35 flex items-center justify-between border-b px-4 py-3 border-default">
                                <span class="text-xs font-medium">Suggested revision</span>
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">For review</div>
                              </div>
                              <div class="flex flex-col gap-4 p-4">
                                <UFormField label="Proposed replacement" name="documentReplacement" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                  <UTextarea v-model="form.documentReplacement" :rows="4" name="documentReplacement" class="flex w-full rounded-md text-base md:text-sm min-h-32" :ui="{ base: 'h-full' }" />
                                </UFormField>
                                <div class="flex items-center justify-end gap-2">
                                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Dismiss" type="button" @click="openAction(&quot;Dismiss&quot;)">
                                    Dismiss
                                  </UButton>
                                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Accept edit" type="button" @click="openAction(&quot;Accept edit&quot;)">
                                    <UIcon name="i-lucide-check" class="size-4" />
                                    Accept edit
                                  </UButton>
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
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-5">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-xl" aria-label="Continue writing conversation">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Select a passage to suggest an edit…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <USelect v-model="form.moreConcise" :items="moreConciseOptions" aria-label="Revision style" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-30 border-0 shadow-none" />
                      </div>
                      <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                        <UIcon name="i-lucide-arrow-up" class="size-4" />
                        <span class="sr-only">Send message</span>
                      </UButton>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
              <p class="text-muted mt-2 text-center text-[10px]">Demo suggestions · review before applying</p>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize document editor" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:62%">
          <section aria-label="Writing document" class="bg-(--ui-bg-muted)/30 flex min-h-0 min-w-0 flex-1 flex-col">
            <header class="bg-default flex h-11 shrink-0 items-center gap-2 border-b px-3 border-default">
              <UIcon name="i-lucide-file-text" class="text-muted size-3.5" />
              <span class="min-w-0 flex-1 truncate text-xs font-medium">onboarding-brief</span>
              <span class="text-muted mr-2 hidden text-[11px] sm:inline">Draft</span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Expand document" type="button" @click="openAction(&quot;Expand document&quot;)">
                <UIcon name="i-lucide-maximize-2" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close document" type="button" @click="openAction(&quot;Close document&quot;)">
                <UIcon name="i-lucide-x" class="size-4" />
              </UButton>
            </header>
            <div class="bg-default flex shrink-0 flex-wrap items-center gap-1 border-b px-4 py-3 border-default">
              <USelect v-model="form.text" :items="textOptions" aria-label="Text style" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-30 border-0 shadow-none" />
              <span class="bg-(--ui-border) mx-1 h-4 w-px" />
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Bold" type="button" @click="openAction(&quot;Bold&quot;)">
                <UIcon name="i-lucide-bold" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Italic" type="button" @click="openAction(&quot;Italic&quot;)">
                <UIcon name="i-lucide-italic" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Bullet list" type="button" @click="openAction(&quot;Bullet list&quot;)">
                <UIcon name="i-lucide-list" class="size-4" />
              </UButton>
              <span class="bg-(--ui-border) mx-1 h-4 w-px" />
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Undo document edit" type="button" disabled @click="openAction(&quot;Undo document edit&quot;)">
                <UIcon name="i-lucide-undo-2" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Redo document edit" type="button" disabled @click="openAction(&quot;Redo document edit&quot;)">
                <UIcon name="i-lucide-redo-2" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs ml-auto" aria-label="Export" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-arrow-down-to-line" class="size-4" />
                <span class="hidden sm:inline">Export</span>
              </UButton>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="mx-auto max-w-[780px] px-4 py-7 sm:px-7">
                    <article class="bg-default rounded-sm border px-6 py-9 shadow-xs sm:px-10 border-default">
                      <div class="text-muted mb-5 text-[10px] font-medium tracking-[0.16em] uppercase">Product strategy · September 2026</div>
                      <div>
                        <div contenteditable="true" role="textbox" aria-label="Document editor" class="tiptap ProseMirror tiptap-editor prose prose-sm prose-neutral dark:prose-invert max-w-none min-h-[620px] outline-none prose-headings:font-semibold prose-h1:text-[30px] prose-h1:leading-tight prose-h1:tracking-tight prose-h1:mb-5 prose-h2:text-base prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-7 prose-p:my-3 prose-li:my-1 selection:bg-chart-2/20">
                          <h1>Make the first week count</h1>
                          <p>A focused onboarding experience for teams that want to start working, not spend their first day configuring software.</p>
                          <h2>Recommendation</h2>
                          <p>We recommend introducing a guided checklist for new teams so that they can get a useful result before they are asked to configure the entire workspace. The checklist should focus on creating one project, inviting one teammate, and completing one shared task. Advanced settings can wait until the team has a reason to use them.</p>
                          <h2>What changes</h2>
                          <ul>
                            <li>
                              <p>Replace the setup wizard with a short, persistent checklist.</p>
                            </li>
                            <li>
                              <p>Let teams start with a realistic sample project.</p>
                            </li>
                            <li>
                              <p>Keep optional integrations out of the first-run path.</p>
                            </li>
                          </ul>
                          <h2>How we’ll know</h2>
                          <p>Measure the share of new teams that complete a shared task in their first week. Pair that with time to first result and the number of setup-related support requests.</p>
                          <h2>Rollout</h2>
                          <p>Start with a small group of new workspaces. Review their first-week experience before expanding the rollout. Keep the current setup flow available during the pilot.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <footer class="text-muted bg-default flex shrink-0 items-center justify-between gap-3 border-t px-4 py-2 text-[11px] border-default">
              <span>164 words</span>
              <span>Select text to revise a passage</span>
            </footer>
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
