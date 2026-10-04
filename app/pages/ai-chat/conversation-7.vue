<!-- Page: /ai-chat/conversation-7 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 7 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": ""
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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-7">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <h1 class="sr-only text-highlighted">Live preview and code artifacts</h1>
            <div class="flex h-10 shrink-0 items-center border-b px-4 border-default">
              <span class="text-xs font-medium">Thread</span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default ml-auto size-7" aria-label="Open workspace" type="button" @click="openAction(&quot;Open workspace&quot;)">
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
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Use the free Mainline marketing template as the starting point and give me a complete responsive landing page.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_1hardbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_1hardbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.34 32.00 C 55.34 34.92 55.30 38.73 55.24 40.75 C 55.18 42.77 55.08 43.14 54.95 44.12 C 54.83 45.09 54.67 45.85 54.47 46.60 C 54.28 47.34 54.05 47.98 53.79 48.58 C 53.53 49.18 53.23 49.71 52.90 50.21 C 52.57 50.71 52.20 51.15 51.79 51.56 C 51.37 51.96 50.92 52.33 50.42 52.66 C 49.92 52.99 49.38 53.28 48.78 53.54 C 48.17 53.80 47.52 54.02 46.77 54.21 C 46.02 54.40 45.25 54.56 44.26 54.69 C 43.27 54.81 42.89 54.91 40.85 54.97 C 38.81 55.03 34.95 55.06 32.00 55.06 C 29.05 55.06 25.19 55.03 23.15 54.97 C 21.11 54.91 20.73 54.81 19.74 54.69 C 18.75 54.56 17.98 54.40 17.23 54.21 C 16.48 54.02 15.83 53.80 15.22 53.54 C 14.62 53.28 14.08 52.99 13.58 52.66 C 13.08 52.33 12.63 51.96 12.21 51.56 C 11.80 51.15 11.43 50.71 11.10 50.21 C 10.77 49.71 10.47 49.18 10.21 48.58 C 9.95 47.98 9.72 47.34 9.53 46.60 C 9.33 45.85 9.17 45.09 9.05 44.12 C 8.92 43.14 8.82 42.77 8.76 40.75 C 8.70 38.73 8.66 34.92 8.66 32.00 C 8.66 29.08 8.70 25.27 8.76 23.25 C 8.82 21.23 8.92 20.86 9.05 19.88 C 9.17 18.91 9.33 18.15 9.53 17.40 C 9.72 16.66 9.95 16.02 10.21 15.42 C 10.47 14.82 10.77 14.29 11.10 13.79 C 11.43 13.29 11.80 12.85 12.21 12.44 C 12.63 12.04 13.08 11.67 13.58 11.34 C 14.08 11.01 14.62 10.72 15.22 10.46 C 15.83 10.20 16.48 9.98 17.23 9.79 C 17.98 9.60 18.75 9.44 19.74 9.31 C 20.73 9.19 21.11 9.09 23.15 9.03 C 25.19 8.97 29.05 8.94 32.00 8.94 C 34.95 8.94 38.81 8.97 40.85 9.03 C 42.89 9.09 43.27 9.19 44.26 9.31 C 45.25 9.44 46.02 9.60 46.77 9.79 C 47.52 9.98 48.17 10.20 48.78 10.46 C 49.38 10.72 49.92 11.01 50.42 11.34 C 50.92 11.67 51.37 12.04 51.79 12.44 C 52.20 12.85 52.57 13.29 52.90 13.79 C 53.23 14.29 53.53 14.82 53.79 15.42 C 54.05 16.02 54.28 16.66 54.47 17.40 C 54.67 18.15 54.83 18.91 54.95 19.88 C 55.08 20.86 55.18 21.23 55.24 23.25 C 55.30 25.27 55.34 29.08 55.34 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_1hardbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Code</span>
                        </div>
                        <div>
                          <p class="text-xs leading-5">I’ll adapt the public Shadcnblocks template, preserve its marketing hierarchy, and keep the rendered page open beside this conversation.</p>
                          <div class="mt-4">
                            <div class="group text-muted hover:text-highlighted flex w-full cursor-pointer items-center gap-2 text-sm transition-colors" type="button">
                              <UIcon name="i-lucide-search" class="size-4" />
                              <p class="text-sm">Read project files</p>
                              <UIcon name="i-lucide-chevron-down" class="size-4 transition-transform group-data-[state=open]:rotate-180" />
                            </div>
                            <div id="radix-_R_5ahardbsnpfknmlb_" class="data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-default data-[state=closed]:animate-out data-[state=open]:animate-in outline-none">
                              <div class="border-(--ui-bg-muted) mt-4 space-y-2 border-l-2 pl-4">
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Composed the complete landing page</span>
                                    <div class="bg-elevated text-highlighted inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 mt-1 max-w-full font-mono text-[10px] border-default">
                                      <UIcon name="i-lucide-file-code-corner" class="size-3 shrink-0" />
                                      <span class="truncate">src/app/page.tsx</span>
                                    </div>
                                  </span>
                                </div>
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Adapted the free Mainline hero</span>
                                    <div class="bg-elevated text-highlighted inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 mt-1 max-w-full font-mono text-[10px] border-default">
                                      <UIcon name="i-lucide-file-code-corner" class="size-3 shrink-0" />
                                      <span class="truncate">src/components/marketing/hero.tsx</span>
                                    </div>
                                  </span>
                                </div>
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Added the responsive feature grid</span>
                                    <div class="bg-elevated text-highlighted inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 mt-1 max-w-full font-mono text-[10px] border-default">
                                      <UIcon name="i-lucide-file-code-corner" class="size-3 shrink-0" />
                                      <span class="truncate">src/components/marketing/features.tsx</span>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9 pb-8">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Show me the result while we continue. Keep the repository available whenever I switch into code.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_1iardbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_1iardbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.34 32.00 C 55.34 34.92 55.30 38.73 55.24 40.75 C 55.18 42.77 55.08 43.14 54.95 44.12 C 54.83 45.09 54.67 45.85 54.47 46.60 C 54.28 47.34 54.05 47.98 53.79 48.58 C 53.53 49.18 53.23 49.71 52.90 50.21 C 52.57 50.71 52.20 51.15 51.79 51.56 C 51.37 51.96 50.92 52.33 50.42 52.66 C 49.92 52.99 49.38 53.28 48.78 53.54 C 48.17 53.80 47.52 54.02 46.77 54.21 C 46.02 54.40 45.25 54.56 44.26 54.69 C 43.27 54.81 42.89 54.91 40.85 54.97 C 38.81 55.03 34.95 55.06 32.00 55.06 C 29.05 55.06 25.19 55.03 23.15 54.97 C 21.11 54.91 20.73 54.81 19.74 54.69 C 18.75 54.56 17.98 54.40 17.23 54.21 C 16.48 54.02 15.83 53.80 15.22 53.54 C 14.62 53.28 14.08 52.99 13.58 52.66 C 13.08 52.33 12.63 51.96 12.21 51.56 C 11.80 51.15 11.43 50.71 11.10 50.21 C 10.77 49.71 10.47 49.18 10.21 48.58 C 9.95 47.98 9.72 47.34 9.53 46.60 C 9.33 45.85 9.17 45.09 9.05 44.12 C 8.92 43.14 8.82 42.77 8.76 40.75 C 8.70 38.73 8.66 34.92 8.66 32.00 C 8.66 29.08 8.70 25.27 8.76 23.25 C 8.82 21.23 8.92 20.86 9.05 19.88 C 9.17 18.91 9.33 18.15 9.53 17.40 C 9.72 16.66 9.95 16.02 10.21 15.42 C 10.47 14.82 10.77 14.29 11.10 13.79 C 11.43 13.29 11.80 12.85 12.21 12.44 C 12.63 12.04 13.08 11.67 13.58 11.34 C 14.08 11.01 14.62 10.72 15.22 10.46 C 15.83 10.20 16.48 9.98 17.23 9.79 C 17.98 9.60 18.75 9.44 19.74 9.31 C 20.73 9.19 21.11 9.09 23.15 9.03 C 25.19 8.97 29.05 8.94 32.00 8.94 C 34.95 8.94 38.81 8.97 40.85 9.03 C 42.89 9.09 43.27 9.19 44.26 9.31 C 45.25 9.44 46.02 9.60 46.77 9.79 C 47.52 9.98 48.17 10.20 48.78 10.46 C 49.38 10.72 49.92 11.01 50.42 11.34 C 50.92 11.67 51.37 12.04 51.79 12.44 C 52.20 12.85 52.57 13.29 52.90 13.79 C 53.23 14.29 53.53 14.82 53.79 15.42 C 54.05 16.02 54.28 16.66 54.47 17.40 C 54.67 18.15 54.83 18.91 54.95 19.88 C 55.08 20.86 55.18 21.23 55.24 23.25 C 55.30 25.27 55.34 29.08 55.34 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_1iardbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Code</span>
                        </div>
                        <div>
                          <p class="text-xs leading-5">The preview is mounted in the large workspace. Switching to Code opens the source with its repository tree without replacing the conversation.</p>
                          <div class="mt-4 rounded-lg border p-3 border-default">
                            <div class="flex items-center gap-2 text-xs font-medium">
                              <UIcon name="i-lucide-monitor" class="size-3.5 text-info" />
                              Preview ready
                              <span class="ml-auto size-1.5 rounded-full bg-success" />
                            </div>
                            <p class="text-muted mt-1.5 text-[11px] leading-4">
                              Rendered locally at 
                              <code>/</code>
                               with desktop, tablet, and phone viewport controls.
                            </p>
                            <div class="mt-3 flex gap-2">
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-[11px]" aria-label="Open preview" type="button" @click="openAction(&quot;Open preview&quot;)">
                                <UIcon name="i-lucide-monitor" class="size-4" />
                                Open preview
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-[11px]" aria-label="View code" type="button" @click="openAction(&quot;View code&quot;)">
                                <UIcon name="i-lucide-code-xml" class="size-4" />
                                View code
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-slot="message-scroller-item" class="shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] flex min-w-0 flex-col gap-9">
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Check the responsive states and make sure this is an app preview, not a fake browser.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-7" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_1jardbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                            </linearGradient>
                            <mask id="_R_1jardbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 55.34 32.00 C 55.34 34.92 55.30 38.73 55.24 40.75 C 55.18 42.77 55.08 43.14 54.95 44.12 C 54.83 45.09 54.67 45.85 54.47 46.60 C 54.28 47.34 54.05 47.98 53.79 48.58 C 53.53 49.18 53.23 49.71 52.90 50.21 C 52.57 50.71 52.20 51.15 51.79 51.56 C 51.37 51.96 50.92 52.33 50.42 52.66 C 49.92 52.99 49.38 53.28 48.78 53.54 C 48.17 53.80 47.52 54.02 46.77 54.21 C 46.02 54.40 45.25 54.56 44.26 54.69 C 43.27 54.81 42.89 54.91 40.85 54.97 C 38.81 55.03 34.95 55.06 32.00 55.06 C 29.05 55.06 25.19 55.03 23.15 54.97 C 21.11 54.91 20.73 54.81 19.74 54.69 C 18.75 54.56 17.98 54.40 17.23 54.21 C 16.48 54.02 15.83 53.80 15.22 53.54 C 14.62 53.28 14.08 52.99 13.58 52.66 C 13.08 52.33 12.63 51.96 12.21 51.56 C 11.80 51.15 11.43 50.71 11.10 50.21 C 10.77 49.71 10.47 49.18 10.21 48.58 C 9.95 47.98 9.72 47.34 9.53 46.60 C 9.33 45.85 9.17 45.09 9.05 44.12 C 8.92 43.14 8.82 42.77 8.76 40.75 C 8.70 38.73 8.66 34.92 8.66 32.00 C 8.66 29.08 8.70 25.27 8.76 23.25 C 8.82 21.23 8.92 20.86 9.05 19.88 C 9.17 18.91 9.33 18.15 9.53 17.40 C 9.72 16.66 9.95 16.02 10.21 15.42 C 10.47 14.82 10.77 14.29 11.10 13.79 C 11.43 13.29 11.80 12.85 12.21 12.44 C 12.63 12.04 13.08 11.67 13.58 11.34 C 14.08 11.01 14.62 10.72 15.22 10.46 C 15.83 10.20 16.48 9.98 17.23 9.79 C 17.98 9.60 18.75 9.44 19.74 9.31 C 20.73 9.19 21.11 9.09 23.15 9.03 C 25.19 8.97 29.05 8.94 32.00 8.94 C 34.95 8.94 38.81 8.97 40.85 9.03 C 42.89 9.09 43.27 9.19 44.26 9.31 C 45.25 9.44 46.02 9.60 46.77 9.79 C 47.52 9.98 48.17 10.20 48.78 10.46 C 49.38 10.72 49.92 11.01 50.42 11.34 C 50.92 11.67 51.37 12.04 51.79 12.44 C 52.20 12.85 52.57 13.29 52.90 13.79 C 53.23 14.29 53.53 14.82 53.79 15.42 C 54.05 16.02 54.28 16.66 54.47 17.40 C 54.67 18.15 54.83 18.91 54.95 19.88 C 55.08 20.86 55.18 21.23 55.24 23.25 C 55.30 25.27 55.34 29.08 55.34 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_1jardbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="flex items-center gap-2">
                          <span class="text-highlighted text-xs font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-[11px]">Code</span>
                        </div>
                        <div>
                          <p class="text-xs leading-5">Confirmed. The workspace renders the React marketing page directly—there is no iframe, remote URL, or browser backend.</p>
                          <div class="mt-4">
                            <div class="group text-muted hover:text-highlighted flex w-full cursor-pointer items-center gap-2 text-sm transition-colors" type="button">
                              <UIcon name="i-lucide-search" class="size-4" />
                              <p class="text-sm">Verified responsive preview</p>
                              <UIcon name="i-lucide-chevron-down" class="size-4 transition-transform group-data-[state=open]:rotate-180" />
                            </div>
                            <div id="radix-_R_5ajardbsnpfknmlb_" class="data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-default data-[state=closed]:animate-out data-[state=open]:animate-in outline-none">
                              <div class="border-(--ui-bg-muted) mt-4 space-y-2 border-l-2 pl-4">
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Desktop keeps the floating navigation, hero, product image, and feature content visible</span>
                                  </span>
                                </div>
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Tablet reflows the hero and feature cards cleanly</span>
                                  </span>
                                </div>
                                <div class="text-muted flex items-start gap-2 text-xs leading-5">
                                  <UIcon name="i-lucide-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                  <span class="min-w-0">
                                    <span class="text-highlighted block">Phone switches to a focused single-column preview</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4 flex items-center gap-2 text-[11px] text-success">
                            <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
                            Preview controls verified
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-3xl space-y-6 px-4 pb-6" />
                </div>
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-5">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-xl" aria-label="Continue preview conversation">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask for a change or add a file…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="no-scrollbar flex min-w-7 flex-1 items-center gap-1 overflow-x-auto">
                          <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 shrink-0" aria-label="Add context" type="button" @click="openAction(&quot;Add context&quot;)">
                            <UIcon name="i-lucide-plus" class="size-4" />
                            <span class="sr-only">Add context</span>
                          </UButton>
                        </span>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-8 text-xs" aria-label="Workspace" type="button" @click="openAction(&quot;Workspace&quot;)">
                          <UIcon name="i-lucide-file-code-corner" class="size-4" />
                          Workspace
                        </UButton>
                      </div>
                      <div class="flex min-w-0 items-center gap-1 shrink-0">
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none h-8 max-w-48 gap-1.5 rounded-lg px-2 text-xs font-normal" aria-label="5.6 Sol" type="button" @click="openAction(&quot;5.6 Sol&quot;)">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 shrink-0" height="100%" width="100%">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                          </svg>
                          <span class="truncate">5.6 Sol</span>
                          <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0" />
                        </UButton>
                        <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                          <UIcon name="i-lucide-arrow-up" class="size-4" />
                          <span class="sr-only">Send message</span>
                        </UButton>
                      </div>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
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
