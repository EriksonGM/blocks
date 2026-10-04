<!-- Page: /ai-chat/conversation-11 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 11 · Blocks Admin" })

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
  anchor.download = "ai-chat-conversation-11.csv"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-11">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <h1 class="sr-only text-highlighted">Generated artifacts and code output</h1>
        <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
          <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
            <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0">
              <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                <div class="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-10">
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                      <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                        <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Generate a reusable bulk-actions component for our admin tables. It should expose queued, running, succeeded, and failed states, use our existing buttons, and include a focused hook and tests.</div>
                      </div>
                    </div>
                  </div>
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                      <svg viewBox="0 0 64 64" class="drop-shadow-sm size-8" width="100%" height="100%">
                        <defs>
                          <linearGradient id="_R_35ddbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                            <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                            <stop offset="0.52" stop-color="var(--ui-info)" />
                            <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                          </linearGradient>
                          <mask id="_R_35ddbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                            <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                            <path d="M 55.34 32.00 C 55.34 34.91 55.31 38.72 55.25 40.74 C 55.18 42.76 55.09 43.14 54.96 44.11 C 54.83 45.09 54.67 45.85 54.48 46.59 C 54.29 47.34 54.06 47.97 53.80 48.57 C 53.54 49.18 53.24 49.71 52.91 50.20 C 52.57 50.70 52.20 51.14 51.79 51.55 C 51.38 51.96 50.93 52.32 50.43 52.65 C 49.93 52.98 49.39 53.27 48.78 53.53 C 48.17 53.79 47.53 54.01 46.77 54.20 C 46.02 54.40 45.25 54.55 44.26 54.68 C 43.28 54.81 42.90 54.90 40.85 54.96 C 38.81 55.03 34.95 55.06 32.00 55.06 C 29.05 55.06 25.19 55.03 23.15 54.96 C 21.10 54.90 20.72 54.81 19.74 54.68 C 18.75 54.55 17.98 54.40 17.23 54.20 C 16.47 54.01 15.83 53.79 15.22 53.53 C 14.61 53.27 14.07 52.98 13.57 52.65 C 13.07 52.32 12.62 51.96 12.21 51.55 C 11.80 51.14 11.43 50.70 11.09 50.20 C 10.76 49.71 10.46 49.18 10.20 48.57 C 9.94 47.97 9.71 47.34 9.52 46.59 C 9.33 45.85 9.17 45.09 9.04 44.11 C 8.91 43.14 8.82 42.76 8.75 40.74 C 8.69 38.72 8.66 34.91 8.66 32.00 C 8.66 29.09 8.69 25.28 8.75 23.26 C 8.82 21.24 8.91 20.86 9.04 19.89 C 9.17 18.91 9.33 18.15 9.52 17.41 C 9.71 16.66 9.94 16.03 10.20 15.43 C 10.46 14.82 10.76 14.29 11.09 13.80 C 11.43 13.30 11.80 12.86 12.21 12.45 C 12.62 12.04 13.07 11.68 13.57 11.35 C 14.07 11.02 14.61 10.73 15.22 10.47 C 15.83 10.21 16.47 9.99 17.23 9.80 C 17.98 9.60 18.75 9.45 19.74 9.32 C 20.72 9.19 21.10 9.10 23.15 9.04 C 25.19 8.97 29.05 8.94 32.00 8.94 C 34.95 8.94 38.81 8.97 40.85 9.04 C 42.90 9.10 43.28 9.19 44.26 9.32 C 45.25 9.45 46.02 9.60 46.77 9.80 C 47.53 9.99 48.17 10.21 48.78 10.47 C 49.39 10.73 49.93 11.02 50.43 11.35 C 50.93 11.68 51.38 12.04 51.79 12.45 C 52.20 12.86 52.57 13.30 52.91 13.80 C 53.24 14.29 53.54 14.82 53.80 15.43 C 54.06 16.03 54.29 16.66 54.48 17.41 C 54.67 18.15 54.83 18.91 54.96 19.89 C 55.09 20.86 55.18 21.24 55.25 23.26 C 55.31 25.28 55.34 29.09 55.34 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                            <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.85 0.30) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.85 0.30) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                          </mask>
                        </defs>
                        <rect width="64" height="64" fill="url(#_R_35ddbsnpfknmlb_)" />
                      </svg>
                    </div>
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                      <div class="mb-1 flex items-center gap-2">
                        <span class="text-[13px] font-medium">Shadcnblocks AI</span>
                        <span class="text-muted text-xs">Code generator</span>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <p>I kept the state contract separate from the table implementation and packaged the result as three focused files. Select a file to review it, or use the artifact actions to copy, regenerate, download, or close the output.</p>
                      </div>
                      <div class="px-1.5">
                        <section class="bg-default flex min-w-0 flex-col overflow-hidden rounded-xl border shadow-xs border-default" aria-label="Admin bulk actions generated artifact">
                          <header class="bg-(--ui-bg-muted)/35 flex min-h-12 items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4 border-default">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <p class="text-sm font-medium truncate">Admin bulk actions</p>
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 gap-1 rounded-md px-1.5 text-[10px] font-normal border-default">
                                  <UIcon name="i-lucide-check" class="size-3 text-success" />
                                  Generated
                                </div>
                              </div>
                              <p class="text-muted text-xs leading-5 truncate">3 generated files · updated just now</p>
                            </div>
                            <div class="flex shrink-0 items-center gap-0.5">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Copy selected file" type="button" @click="copyValue(&quot;Copy selected file&quot;)">
                                <UIcon name="i-lucide-copy" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Regenerate artifact" type="button" @click="openAction(&quot;Regenerate artifact&quot;)">
                                <UIcon name="i-lucide-refresh-cw" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Download selected file" type="button" @click="exportCsv()">
                                <UIcon name="i-lucide-download" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Close artifact" type="button" @click="openAction(&quot;Close artifact&quot;)">
                                <UIcon name="i-lucide-x" class="size-4" />
                              </UButton>
                            </div>
                          </header>
                          <div class="min-w-0 flex-1 grid min-h-0 sm:grid-cols-[12rem_minmax(0,1fr)]">
                            <div class="bg-(--ui-bg-muted)/10 flex max-h-44 min-w-0 flex-col overflow-hidden border-b sm:max-h-none sm:border-r sm:border-b-0 border-default">
                              <div class="min-h-0 flex-1 overflow-auto p-2">
                                <div class="text-muted flex h-7 items-center gap-2 px-1.5 text-[10px] font-medium tracking-wide uppercase">
                                  <UIcon name="i-lucide-file-code-corner" class="size-3.5" />
                                  3 files
                                </div>
                                <div class="min-w-0 font-mono text-[11px] bg-transparent" role="tree">
                                  <div>
                                    <div role="treeitem">
                                      <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 w-full items-center gap-1 rounded-md px-1.5 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="src" type="button" @click="openAction(&quot;src&quot;)">
                                        <UIcon name="i-lucide-chevron-right" class="text-muted size-3.5 shrink-0 transition-transform rotate-90" />
                                        <span class="shrink-0">
                                          <UIcon name="i-lucide-folder-open" class="size-3.5 text-info" />
                                        </span>
                                        <span class="min-w-0 truncate">src</span>
                                      </UButton>
                                      <div id="radix-_R_35kl5ddbsnpfknmlb_" role="group" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 140px; --radix-collapsible-content-width: 175px;">
                                        <div class="border-(--ui-border)/70 ml-3.5 border-l pl-1.5 border-default">
                                          <div>
                                            <div role="treeitem">
                                              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 w-full items-center gap-1 rounded-md px-1.5 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="components" type="button" @click="openAction(&quot;components&quot;)">
                                                <UIcon name="i-lucide-chevron-right" class="text-muted size-3.5 shrink-0 transition-transform rotate-90" />
                                                <span class="shrink-0">
                                                  <UIcon name="i-lucide-folder-open" class="size-3.5 text-info" />
                                                </span>
                                                <span class="min-w-0 truncate">components</span>
                                              </UButton>
                                              <div id="radix-_R_1n5kl5ddbsnpfknmlb_" role="group" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 112px; --radix-collapsible-content-width: 154px;">
                                                <div class="border-(--ui-border)/70 ml-3.5 border-l pl-1.5 border-default">
                                                  <div>
                                                    <div role="treeitem">
                                                      <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 w-full items-center gap-1 rounded-md px-1.5 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="admin" type="button" @click="openAction(&quot;admin&quot;)">
                                                        <UIcon name="i-lucide-chevron-right" class="text-muted size-3.5 shrink-0 transition-transform rotate-90" />
                                                        <span class="shrink-0">
                                                          <UIcon name="i-lucide-folder-open" class="size-3.5 text-info" />
                                                        </span>
                                                        <span class="min-w-0 truncate">admin</span>
                                                      </UButton>
                                                      <div id="radix-_R_rn5kl5ddbsnpfknmlb_" role="group" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 84px; --radix-collapsible-content-width: 133px;">
                                                        <div class="border-(--ui-border)/70 ml-3.5 border-l pl-1.5 border-default">
                                                          <div class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-1.5 focus-visible:ring-2 focus-visible:outline-none bg-muted text-highlighted" role="treeitem">
                                                            <span class="shrink-0">
                                                              <UIcon name="i-lucide-file" class="text-muted size-3.5" />
                                                            </span>
                                                            <span class="min-w-0 truncate">bulk-actions.tsx</span>
                                                          </div>
                                                          <div class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-1.5 focus-visible:ring-2 focus-visible:outline-none" role="treeitem">
                                                            <span class="shrink-0">
                                                              <UIcon name="i-lucide-file" class="text-muted size-3.5" />
                                                            </span>
                                                            <span class="min-w-0 truncate">use-bulk-actions.ts</span>
                                                          </div>
                                                          <div class="hover:bg-(--ui-bg-muted)/70 focus-visible:ring-accented flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-1.5 focus-visible:ring-2 focus-visible:outline-none" role="treeitem">
                                                            <span class="shrink-0">
                                                              <UIcon name="i-lucide-file" class="text-muted size-3.5" />
                                                            </span>
                                                            <span class="min-w-0 truncate">bulk-actions.test.tsx</span>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="text-muted flex h-8 shrink-0 items-center gap-2 border-t px-2.5 text-[10px] border-default" aria-label="3 generated files, artifact ready">
                                <UIcon name="i-lucide-file-code-corner" class="size-3 shrink-0" />
                                <span>3 generated</span>
                              </div>
                            </div>
                            <div class="bg-default flex min-w-0 flex-col overflow-hidden rounded-none border-0">
                              <div class="bg-(--ui-bg-muted)/25 flex h-9 shrink-0 items-center justify-between gap-2 border-b px-2.5 border-default">
                                <div class="text-muted flex min-w-0 items-center gap-2 text-xs">
                                  <UIcon name="i-lucide-file-code-corner" class="size-3.5" />
                                  <span class="min-w-0 truncate font-mono text-[11px]">src/components/admin/bulk-actions.tsx</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-0.5">
                                  <span class="text-muted mr-1 text-[10px] uppercase">tsx</span>
                                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Copy code" type="button" @click="copyValue(&quot;Copy code&quot;)">
                                    <UIcon name="i-lucide-copy" class="size-4" />
                                  </UButton>
                                </div>
                              </div>
                              <div class="bg-default min-h-0 min-w-0 flex-1">
                                <diffs-container class="block min-h-56 min-w-full" />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <p>The component stays presentation-focused, while the hook owns the async lifecycle. That keeps it reusable across product, customer, and order tables without coupling it to one data client.</p>
                      </div>
                      <div class="mt-1 flex items-center gap-1">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Good response" type="button" @click="openAction(&quot;Good response&quot;)">
                          <UIcon name="i-lucide-thumbs-up" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Bad response" type="button" @click="openAction(&quot;Bad response&quot;)">
                          <UIcon name="i-lucide-thumbs-down" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mx-auto w-full max-w-3xl space-y-6 px-4 pb-6" />
              </div>
            </div>
          </div>
          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
            <UIcon name="i-lucide-arrow-down" class="size-4" />
          </UButton>
        </div>
        <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-6">
          <!-- Form: controls and draft state are declared in this page -->
          <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-3xl" aria-label="Continue artifact conversation">
            <!-- Chat composer: form.message -->
            <div v-if="messages.length" class="my-4 space-y-4">
              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
            </div>
            <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Request a change to the generated artifact…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
              <template #footer>
                <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                  <div class="flex min-w-0 items-center gap-1">
                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Attach repository context" type="button" @click="openAction(&quot;Attach repository context&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      <span class="sr-only">Attach repository context</span>
                    </UButton>
                    <span class="text-muted hidden items-center gap-1.5 text-xs sm:flex">
                      <UIcon name="i-lucide-braces" class="size-3.5" />
                      TypeScript
                    </span>
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
            <div class="bg-(--ui-bg-muted)/45 text-muted items-center gap-4 text-xs mx-5 -mt-1 min-h-10 rounded-b-xl px-3 pt-1 hidden sm:flex">
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-git-branch" class="size-3.5" />
                Generated workspace
              </span>
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-files" class="size-3.5" />
                3 files
              </span>
            </div>
          </UForm>
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
