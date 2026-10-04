<!-- Page: /ai-chat/conversation-10 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 10 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-10">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <h1 class="sr-only text-highlighted">Research with citations and context</h1>
        <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
          <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
            <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0">
              <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                <div class="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-10">
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                      <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                        <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Research how bulk admin actions should communicate progress when they touch an external API. I want the interface to feel immediate without implying success before the server confirms it.</div>
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
                            <path d="M 56.58 32.00 C 56.58 33.07 56.51 34.15 56.37 35.21 C 56.23 36.27 56.02 37.33 55.74 38.36 C 55.47 39.39 55.12 40.42 54.71 41.41 C 54.30 42.39 53.82 43.36 53.29 44.29 C 52.75 45.22 52.15 46.12 51.50 46.96 C 50.85 47.81 50.14 48.62 49.38 49.38 C 48.62 50.14 47.81 50.85 46.96 51.50 C 46.12 52.15 45.22 52.75 44.29 53.29 C 43.36 53.82 42.39 54.30 41.41 54.71 C 40.42 55.12 39.39 55.47 38.36 55.74 C 37.33 56.02 36.27 56.23 35.21 56.37 C 34.15 56.51 33.07 56.58 32.00 56.58 C 30.93 56.58 29.85 56.51 28.79 56.37 C 27.73 56.23 26.67 56.02 25.64 55.74 C 24.61 55.47 23.58 55.12 22.59 54.71 C 21.61 54.30 20.64 53.82 19.71 53.29 C 18.78 52.75 17.88 52.15 17.04 51.50 C 16.19 50.85 15.38 50.14 14.62 49.38 C 13.86 48.62 13.15 47.81 12.50 46.96 C 11.85 46.12 11.25 45.22 10.71 44.29 C 10.18 43.36 9.70 42.39 9.29 41.41 C 8.88 40.42 8.53 39.39 8.26 38.36 C 7.98 37.33 7.77 36.27 7.63 35.21 C 7.49 34.15 7.42 33.07 7.42 32.00 C 7.42 30.93 7.49 29.85 7.63 28.79 C 7.77 27.73 7.98 26.67 8.26 25.64 C 8.53 24.61 8.88 23.58 9.29 22.59 C 9.70 21.61 10.18 20.64 10.71 19.71 C 11.25 18.78 11.85 17.88 12.50 17.04 C 13.15 16.19 13.86 15.38 14.62 14.62 C 15.38 13.86 16.19 13.15 17.04 12.50 C 17.88 11.85 18.78 11.25 19.71 10.71 C 20.64 10.18 21.61 9.70 22.59 9.29 C 23.58 8.88 24.61 8.53 25.64 8.26 C 26.67 7.98 27.73 7.77 28.79 7.63 C 29.85 7.49 30.93 7.42 32.00 7.42 C 33.07 7.42 34.15 7.49 35.21 7.63 C 36.27 7.77 37.33 7.98 38.36 8.26 C 39.39 8.53 40.42 8.88 41.41 9.29 C 42.39 9.70 43.36 10.18 44.29 10.71 C 45.22 11.25 46.12 11.85 46.96 12.50 C 47.81 13.15 48.62 13.86 49.38 14.62 C 50.14 15.38 50.85 16.19 51.50 17.04 C 52.15 17.88 52.75 18.78 53.29 19.71 C 53.82 20.64 54.30 21.61 54.71 22.59 C 55.12 23.58 55.47 24.61 55.74 25.64 C 56.02 26.67 56.23 27.73 56.37 28.79 C 56.51 29.85 56.58 30.93 56.58 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                            <rect x="25.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.49 -0.53) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                            <rect x="35.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.49 -0.53) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                          </mask>
                        </defs>
                        <rect width="64" height="64" fill="url(#_R_35ddbsnpfknmlb_)" />
                      </svg>
                    </div>
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                      <div class="mb-1 flex items-center gap-2">
                        <span class="text-[13px] font-medium">Shadcnblocks AI</span>
                        <span class="text-muted text-xs">Research agent</span>
                      </div>
                      <div class="not-prose w-full px-1.5">
                        <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex w-full items-center gap-2 text-sm transition-colors" aria-label="Reasoned for 9 seconds" type="button" @click="openAction(&quot;Reasoned for 9 seconds&quot;)">
                          <UIcon name="i-lucide-brain" class="size-4 shrink-0" />
                          <span class="text-left">Reasoned for 9 seconds</span>
                          <UIcon name="i-lucide-chevron-down" class="size-4 shrink-0 transition-transform" />
                        </UButton>
                        <div id="radix-_R_2l5ddbsnpfknmlb_" class="data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-muted data-[state=closed]:animate-out data-[state=open]:animate-in mt-3 border-l pl-4 text-sm leading-6 whitespace-pre-wrap outline-none border-default" style="" />
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <h3>Recommendation</h3>
                        <p>
                          Use a 
                          <strong>hybrid state model</strong>
                          : acknowledge the operator immediately, but reserve completed language for server-confirmed outcomes.
                        </p>
                      </div>
                      <div class="px-1.5 text-[15px] leading-7">
                        <p>
                          <span class="group/citation leading-inherit inline">
                            <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">Show reversible local feedback immediately—selection, queued status, and temporary list changes—while preserving a rollback path</span>
                            <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 mx-1 inline-flex h-5 translate-y-px rounded-full px-2 align-baseline text-[10px] font-normal shadow-none" aria-label="react.dev +1" type="button" @click="openAction(&quot;react.dev +1&quot;)">
                              react.dev +1
                            </UButton>
                          </span>
                          . This makes the interface responsive without presenting the external mutation as finished.
                        </p>
                      </div>
                      <div class="px-1.5 text-[15px] leading-7">
                        <p>
                          <span class="group/citation leading-inherit inline">
                            <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">Keep external side effects in a pending state until the server confirms them, and attach an idempotency key to every retryable mutation</span>
                            <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 mx-1 inline-flex h-5 translate-y-px rounded-full px-2 align-baseline text-[10px] font-normal shadow-none" aria-label="docs.stripe.com" type="button" @click="openAction(&quot;docs.stripe.com&quot;)">
                              docs.stripe.com
                            </UButton>
                          </span>
                          . A retry can then remain visible and auditable without risking a duplicate charge or duplicate workflow run.
                        </p>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <h3>State contract</h3>
                        <ul>
                          <li>
                            <strong>Queued:</strong>
                             accepted by the interface but not sent.
                          </li>
                          <li>
                            <strong>Running:</strong>
                             submitted with progress and a safe cancel boundary.
                          </li>
                          <li>
                            <strong>Succeeded:</strong>
                             confirmed by the authoritative service.
                          </li>
                          <li>
                            <strong>Needs attention:</strong>
                             failed with retry, rollback, and audit details.
                          </li>
                        </ul>
                      </div>
                      <div class="px-1.5 text-[15px] leading-7">
                        <p>
                          If the request fails, 
                          <span class="group/citation leading-inherit inline">
                            <span class="decoration-muted-foreground/45 group-hover/citation:decoration-foreground/70 underline decoration-dotted underline-offset-4 transition-colors">restore the previous client snapshot or replace the optimistic state with an explicit error state</span>
                            <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 mx-1 inline-flex h-5 translate-y-px rounded-full px-2 align-baseline text-[10px] font-normal shadow-none" aria-label="tanstack.com" type="button" @click="openAction(&quot;tanstack.com&quot;)">
                              tanstack.com
                            </UButton>
                          </span>
                          . Never leave an optimistic success indicator in place after the authoritative request fails.
                        </p>
                      </div>
                      <div class="mt-1 flex items-center gap-1">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy response" type="button" @click="copyValue(&quot;Copy response&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Good response" type="button" @click="openAction(&quot;Good response&quot;)">
                          <UIcon name="i-lucide-thumbs-up" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Bad response" type="button" @click="openAction(&quot;Bad response&quot;)">
                          <UIcon name="i-lucide-thumbs-down" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Replay reasoning state" type="button" @click="openAction(&quot;Replay reasoning state&quot;)">
                          <UIcon name="i-lucide-refresh-cw" class="size-4" />
                        </UButton>
                      </div>
                      <div class="px-1">
                        <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 h-8 w-fit px-1.5 text-xs" aria-label="Searched 3 websites" type="button" @click="openAction(&quot;Searched 3 websites&quot;)">
                          <UIcon name="i-lucide-globe" class="size-4" />
                          Searched 3 websites
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
          <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl" aria-label="Continue research conversation">
            <!-- Chat composer: form.message -->
            <div v-if="messages.length" class="my-4 space-y-4">
              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
            </div>
            <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask a follow-up or request another comparison…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
              <template #footer>
                <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                  <div class="flex min-w-0 items-center gap-1">
                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Add research context" type="button" @click="openAction(&quot;Add research context&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      <span class="sr-only">Add research context</span>
                    </UButton>
                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none h-8 gap-1.5 rounded-lg px-2 text-xs font-normal" aria-label="Sources" type="button" @click="openAction(&quot;Sources&quot;)">
                      <UIcon name="i-lucide-clipboard" class="size-4" />
                      Sources
                    </UButton>
                  </div>
                  <div class="flex min-w-0 items-center gap-1 shrink-0">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-8 gap-1.5 px-2 text-xs font-normal" aria-label="14%" type="button" @click="openAction(&quot;14%&quot;)">
                      <svg viewBox="0 0 20 20" class="size-4" role="img" aria-label="Model context usage" width="100%" height="100%">
                        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2" />
                        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="50.26548245743669 50.26548245743669" style="transform:rotate(-90deg);transform-origin:center" />
                      </svg>
                      <span class="text-muted hidden sm:inline">14%</span>
                    </UButton>
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
                Admin interaction research
              </span>
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-file-search" class="size-3.5" />
                <span>3 cited sources</span>
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
