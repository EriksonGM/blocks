<!-- Page: /ai-chat/conversation-8 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 8 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-8">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex h-12 shrink-0 items-center border-b px-4 border-default">
            <span class="text-xs font-medium">Create content</span>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default ml-auto size-7" aria-label="Toggle recording transcript" type="button" @click="openAction(&quot;Toggle recording transcript&quot;)">
              <UIcon name="i-lucide-panel-right" class="size-4" />
            </UButton>
          </div>
          <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
            <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
              <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0">
                <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                  <div class="mx-auto flex w-full max-w-2xl flex-col gap-7 px-4 py-7 sm:px-6 md:py-9">
                    <div class="ml-auto grid w-fit max-w-full gap-1.5">
                      <div class="bg-default flex max-w-72 items-center gap-2 rounded-lg border px-2.5 py-2 text-xs shadow-xs border-default">
                        <UIcon name="i-lucide-file-play" class="size-4 shrink-0 text-secondary" />
                        <span class="min-w-0 truncate">creative-work-roundtable.mp4</span>
                        <span class="text-muted shrink-0">38:12</span>
                      </div>
                      <div class="bg-default flex max-w-72 items-center gap-2 rounded-lg border px-2.5 py-2 text-xs shadow-xs border-default">
                        <UIcon name="i-lucide-file-text" class="size-4 shrink-0 text-warning" />
                        <span class="min-w-0 truncate">editorial-research-notes.pdf</span>
                        <span class="text-muted shrink-0">12 pages</span>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                        <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                          <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Summarize this recording and create an editorial brief with the key takeaways, supporting moments, and a publishable opening paragraph.</div>
                        </div>
                      </div>
                    </div>
                    <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                      <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                        <svg viewBox="0 0 64 64" class="drop-shadow-sm size-8" width="100%" height="100%">
                          <defs>
                            <linearGradient id="_R_6imbdbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                              <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                              <stop offset="0.52" stop-color="var(--ui-info)" />
                              <stop offset="1" stop-color="var(--ui-warning)" />
                            </linearGradient>
                            <mask id="_R_6imbdbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                              <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                              <path d="M 54.70 32.11 C 54.82 33.21 54.86 34.33 54.85 35.42 C 54.84 36.52 54.77 37.61 54.64 38.68 C 54.51 39.75 54.32 40.81 54.09 41.83 C 53.86 42.85 53.57 43.85 53.24 44.81 C 52.91 45.76 52.53 46.69 52.11 47.57 C 51.68 48.45 51.22 49.29 50.70 50.07 C 50.19 50.85 49.63 51.59 49.01 52.26 C 48.40 52.93 47.74 53.55 47.01 54.10 C 46.28 54.66 45.50 55.15 44.62 55.57 C 43.75 56.00 42.83 56.36 41.74 56.64 C 40.65 56.93 39.75 57.15 38.08 57.29 C 36.40 57.43 33.82 57.51 31.69 57.51 C 29.57 57.51 26.99 57.43 25.32 57.29 C 23.65 57.15 22.76 56.93 21.67 56.64 C 20.59 56.36 19.68 56.00 18.81 55.57 C 17.94 55.15 17.18 54.66 16.46 54.10 C 15.74 53.55 15.10 52.93 14.50 52.26 C 13.90 51.59 13.36 50.85 12.87 50.07 C 12.37 49.29 11.92 48.45 11.52 47.57 C 11.12 46.69 10.76 45.76 10.45 44.81 C 10.15 43.85 9.88 42.85 9.67 41.83 C 9.47 40.81 9.30 39.75 9.20 38.68 C 9.10 37.61 9.05 36.52 9.07 35.42 C 9.08 34.33 9.16 33.21 9.30 32.11 C 9.44 31.00 9.65 29.89 9.93 28.79 C 10.21 27.70 10.55 26.60 10.97 25.53 C 11.39 24.47 11.87 23.41 12.42 22.39 C 12.97 21.37 13.60 20.36 14.27 19.41 C 14.94 18.45 15.68 17.52 16.45 16.65 C 17.22 15.77 18.06 14.93 18.90 14.15 C 19.74 13.37 20.63 12.63 21.51 11.96 C 22.39 11.28 23.29 10.66 24.17 10.11 C 25.04 9.56 25.92 9.06 26.74 8.64 C 27.56 8.22 28.37 7.86 29.09 7.57 C 29.81 7.29 30.52 7.07 31.06 6.93 C 31.59 6.78 31.89 6.71 32.31 6.71 C 32.72 6.71 33.02 6.78 33.55 6.93 C 34.08 7.07 34.79 7.29 35.50 7.57 C 36.22 7.86 37.02 8.22 37.83 8.64 C 38.64 9.06 39.51 9.56 40.36 10.11 C 41.22 10.66 42.11 11.28 42.98 11.96 C 43.84 12.63 44.71 13.37 45.53 14.15 C 46.36 14.93 47.17 15.77 47.92 16.65 C 48.67 17.52 49.39 18.45 50.04 19.41 C 50.69 20.36 51.29 21.37 51.81 22.39 C 52.34 23.41 52.80 24.47 53.19 25.53 C 53.58 26.60 53.90 27.70 54.15 28.79 C 54.40 29.89 54.58 31.00 54.70 32.11 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                              <rect x="25.599999999999998" y="26.700000000000003" width="3.6" height="7.8" rx="1.8" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27.4 30.6) translate(0 30.6) scale(1 1.000) translate(0 -30.6)" />
                              <rect x="34.800000000000004" y="26.700000000000003" width="3.6" height="7.8" rx="1.8" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 36.6 30.6) translate(0 30.6) scale(1 1.000) translate(0 -30.6)" />
                            </mask>
                          </defs>
                          <rect width="64" height="64" fill="url(#_R_6imbdbsnpfknmlb_)" />
                        </svg>
                      </div>
                      <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                        <div class="mb-1 flex items-center gap-2">
                          <span class="text-[13px] font-medium">Shadcnblocks AI</span>
                          <span class="text-muted text-xs">Content agent</span>
                        </div>
                        <div class="text-muted flex items-center gap-2 px-1.5 text-sm">
                          <UIcon name="i-lucide-circle-check" class="size-4" />
                          <span>Transcribed 38-minute video</span>
                          <span class="text-(--ui-text-muted)/70 min-w-0 truncate text-xs">4 speakers</span>
                        </div>
                        <div class="text-muted flex items-center gap-2 px-1.5 text-sm">
                          <UIcon name="i-lucide-circle-check" class="size-4" />
                          <span>Reviewed linked source material</span>
                          <span class="text-(--ui-text-muted)/70 min-w-0 truncate text-xs">5 sources</span>
                        </div>
                        <div class="text-muted flex items-center gap-2 px-1.5 text-sm">
                          <UIcon name="i-lucide-circle-check" class="size-4" />
                          <span>Aligned claims with transcript moments</span>
                          <span class="text-(--ui-text-muted)/70 min-w-0 truncate text-xs">12 references</span>
                        </div>
                        <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                          <p>AI is not replacing creativity—it is changing where creative professionals spend their attention. Repetitive execution is becoming faster, while direction, taste, storytelling, and accountable decision-making become more important.</p>
                          <h3>Key takeaways</h3>
                          <ul>
                            <li>
                              <strong>Creative judgment moves upstream.</strong>
                               Teams spend less time producing variations and more time defining the right problem and selecting a direction.
                            </li>
                            <li>
                              <strong>Traceability matters.</strong>
                               Generated claims should remain connected to the recording and supporting source material.
                            </li>
                            <li>
                              <strong>Review remains essential.</strong>
                               Faster production still needs explicit editorial checkpoints and clear ownership.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div class="space-y-3 px-1.5">
                            <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 rounded-xl border p-3 text-left shadow-xs transition-colors focus-visible:ring-2 focus-visible:outline-none border-default" aria-label="Future of creative work — editorial briefGenerated document · 3 sections" type="button" @click="openAction(&quot;Future of creative work — editorial briefGenerated document · 3 sections&quot;)">
                              <span class="bg-muted flex size-9 shrink-0 items-center justify-center rounded-lg">
                                <UIcon name="i-lucide-file-text" class="size-4" />
                              </span>
                              <span class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-medium">Future of creative work — editorial brief</span>
                                <span class="text-muted block text-xs">Generated document · 3 sections</span>
                              </span>
                              <UIcon name="i-lucide-book-open" class="text-muted size-4" />
                            </UButton>
                            <div class="flex flex-wrap gap-2">
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Review transcript" type="button" @click="openAction(&quot;Review transcript&quot;)">
                                <UIcon name="i-lucide-captions" class="size-4" />
                                Review transcript
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Create social draft" type="button" @click="openAction(&quot;Create social draft&quot;)">
                                <UIcon name="i-lucide-file-plus-corner" class="size-4" />
                                Create social draft
                              </UButton>
                            </div>
                          </div>
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
            <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl" aria-label="Continue recording conversation">
              <!-- Chat composer: form.message -->
              <div v-if="messages.length" class="my-4 space-y-4">
                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
              </div>
              <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask for another format, clip, or revision" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                <template #footer>
                  <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                    <div class="flex min-w-0 items-center gap-1">
                      <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Add source" type="button" @click="openAction(&quot;Add source&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        <span class="sr-only">Add source</span>
                      </UButton>
                      <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none h-8 gap-1.5 rounded-lg px-2 text-xs font-normal" aria-label="Sources" type="button" @click="openAction(&quot;Sources&quot;)">
                        <UIcon name="i-lucide-clipboard" class="size-4" />
                        Sources
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
              <div class="bg-(--ui-bg-muted)/45 text-muted items-center gap-4 text-xs mx-5 -mt-1 min-h-10 rounded-b-xl px-3 pt-1 hidden sm:flex">
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-lucide-folder" class="size-3.5" />
                   Future of creative work
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-lucide-file-play" class="size-3.5" />
                   Video recording
                </span>
              </div>
            </UForm>
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
