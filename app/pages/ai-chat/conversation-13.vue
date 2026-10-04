<!-- Page: /ai-chat/conversation-13 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 13 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-13">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <h1 class="sr-only text-highlighted">Queued follow-ups and conversation steering</h1>
        <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
          <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
            <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0">
              <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                <div class="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-10">
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                      <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                        <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Continue the final bulk-action review. I may add follow-ups while you work—keep them ordered without interrupting the current pass.</div>
                      </div>
                    </div>
                  </div>
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                      <div class="border-default flex size-8 items-center justify-center rounded-lg border">
                        <img alt="Shadcnblocks" width="14" height="16" class="shrink-0 object-contain dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                      </div>
                    </div>
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                      <div class="mb-1 flex items-center gap-2">
                        <span class="text-[13px] font-medium">Shadcnblocks AI</span>
                        <span class="text-muted text-xs">Task coordinator</span>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <p>I’ll finish the current interaction review first. New instructions will stay in the queue attached to the composer, where you can reprioritize or edit them before they run.</p>
                      </div>
                      <div>
                        <div class="overflow-hidden rounded-xl border border-default">
                          <div class="flex h-10 items-center gap-2 border-b px-3 border-default">
                            <span class="text-muted text-[9px] font-medium tracking-wide uppercase">Current request</span>
                            <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 ml-auto h-6 gap-1.5 rounded-md px-2 text-[10px] font-normal border-default">
                              <span class="size-1.5 animate-pulse rounded-full bg-info motion-reduce:animate-none" />
                              Working
                            </div>
                          </div>
                          <div class="px-3 py-3">
                            <p class="text-[13px] font-medium">Finish the interaction review for the generated bulk actions.</p>
                            <p class="text-muted mt-1 text-[11px] leading-5">Desktop selection, loading, failure, and retry states</p>
                          </div>
                          <div class="bg-(--ui-bg-muted)/15 flex min-h-10 items-center gap-3 border-t px-3 py-2 border-default">
                            <span class="text-muted text-[10px] tabular-nums">3 follow-ups waiting</span>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md ml-auto h-7 px-2.5 text-[10px] shadow-xs" aria-label="Finish current" type="button" @click="openAction(&quot;Finish current&quot;)">
                              <UIcon name="i-lucide-check" class="size-4" />
                              Finish current
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
          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
            <UIcon name="i-lucide-arrow-down" class="size-4" />
          </UButton>
        </div>
        <div class="bg-default shrink-0 px-4 pt-2 pb-4 sm:px-6">
          <div class="mx-auto w-full max-w-2xl">
            <div class="bg-default not-prose overflow-hidden rounded-xl border shadow-xs mb-2 border-default">
              <div class="group/queue">
                <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/45 focus-visible:ring-accented flex h-9 w-full items-center gap-2 px-3 text-left transition-colors focus-visible:ring-1 focus-visible:outline-hidden" aria-label="Queued requests3" type="button" @click="openAction(&quot;Queued requests3&quot;)">
                  <span class="flex min-w-0 items-center gap-2">
                    <span class="truncate text-[11px] font-medium">Queued requests</span>
                    <span class="text-muted text-[10px] tabular-nums">3</span>
                  </span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3.5 transition-transform group-data-[state=open]/queue:rotate-180" />
                </UButton>
                <div id="radix-_R_fdbsnpfknmlb_" class="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1 border-t border-default" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 229px; --radix-collapsible-content-width: 670px;">
                  <div data-slot="scroll-area" class="relative overflow-hidden max-h-60 [&amp;_[data-slot=scroll-area-viewport]&gt;div]:!block [&amp;_[data-slot=scroll-area-viewport]&gt;div]:!w-full" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                    <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                      <div style="min-width:100%;display:table">
                        <ul class="w-full min-w-0 divide-y">
                          <li class="group/queue-item hover:bg-(--ui-bg-muted)/30 flex min-h-12 w-full min-w-0 items-start gap-2.5 px-3 py-2.5 transition-colors">
                            <span class="text-muted mt-0.5 flex h-4 w-5 shrink-0 items-center font-mono text-[9px] tabular-nums">01</span>
                            <div class="min-w-0 flex-1 text-[11px] leading-4">
                              <p>Review the mobile empty and selected states next.</p>
                              <p class="text-muted mt-0.5 truncate text-[10px] leading-4">Compare the compact toolbar against the approved desktop states</p>
                              <div class="bg-(--ui-bg-muted)/55 text-muted mt-1.5 flex w-fit max-w-full items-center gap-1.5 rounded-md border px-1.5 py-1 text-[9px] border-default">
                                <UIcon name="i-lucide-file-text" class="size-3" />
                                <span class="truncate">bulk-actions-mobile.png</span>
                              </div>
                            </div>
                            <div class="flex shrink-0 items-center gap-0.5 opacity-100 sm:opacity-0 sm:group-focus-within/queue-item:opacity-100 sm:group-hover/queue-item:opacity-100">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Move down" aria-label="Move Review the mobile empty and selected states next. down" type="button" @click="openAction(&quot;Move Review the mobile empty and selected states next. down&quot;)">
                                <UIcon name="i-lucide-arrow-down" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Edit in composer" aria-label="Edit Review the mobile empty and selected states next." type="button" @click="openAction(&quot;Edit Review the mobile empty and selected states next.&quot;)">
                                <UIcon name="i-lucide-pencil" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Remove" aria-label="Remove Review the mobile empty and selected states next." type="button" @click="openAction(&quot;Remove Review the mobile empty and selected states next.&quot;)">
                                <UIcon name="i-lucide-x" class="size-4" />
                              </UButton>
                            </div>
                          </li>
                          <li class="group/queue-item hover:bg-(--ui-bg-muted)/30 flex min-h-12 w-full min-w-0 items-start gap-2.5 px-3 py-2.5 transition-colors">
                            <span class="text-muted mt-0.5 flex h-4 w-5 shrink-0 items-center font-mono text-[9px] tabular-nums">02</span>
                            <div class="min-w-0 flex-1 text-[11px] leading-4">
                              <p>Audit the keyboard flow for conflicts and missing focus states.</p>
                              <p class="text-muted mt-0.5 truncate text-[10px] leading-4">Check Enter, Escape, and table selection shortcuts</p>
                            </div>
                            <div class="flex shrink-0 items-center gap-0.5 opacity-100 sm:opacity-0 sm:group-focus-within/queue-item:opacity-100 sm:group-hover/queue-item:opacity-100">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Move up" aria-label="Move Audit the keyboard flow for conflicts and missing focus states. up" type="button" @click="openAction(&quot;Move Audit the keyboard flow for conflicts and missing focus states. up&quot;)">
                                <UIcon name="i-lucide-arrow-up" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Move down" aria-label="Move Audit the keyboard flow for conflicts and missing focus states. down" type="button" @click="openAction(&quot;Move Audit the keyboard flow for conflicts and missing focus states. down&quot;)">
                                <UIcon name="i-lucide-arrow-down" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Edit in composer" aria-label="Edit Audit the keyboard flow for conflicts and missing focus states." type="button" @click="openAction(&quot;Edit Audit the keyboard flow for conflicts and missing focus states.&quot;)">
                                <UIcon name="i-lucide-pencil" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Remove" aria-label="Remove Audit the keyboard flow for conflicts and missing focus states." type="button" @click="openAction(&quot;Remove Audit the keyboard flow for conflicts and missing focus states.&quot;)">
                                <UIcon name="i-lucide-x" class="size-4" />
                              </UButton>
                            </div>
                          </li>
                          <li class="group/queue-item hover:bg-(--ui-bg-muted)/30 flex min-h-12 w-full min-w-0 items-start gap-2.5 px-3 py-2.5 transition-colors">
                            <span class="text-muted mt-0.5 flex h-4 w-5 shrink-0 items-center font-mono text-[9px] tabular-nums">03</span>
                            <div class="min-w-0 flex-1 text-[11px] leading-4">
                              <p>Draft a concise release note after the review is complete.</p>
                              <p class="text-muted mt-0.5 truncate text-[10px] leading-4">Summarize only the behavior that passed verification</p>
                              <div class="bg-(--ui-bg-muted)/55 text-muted mt-1.5 flex w-fit max-w-full items-center gap-1.5 rounded-md border px-1.5 py-1 text-[9px] border-default">
                                <UIcon name="i-lucide-file-text" class="size-3" />
                                <span class="truncate">release-notes.md</span>
                              </div>
                            </div>
                            <div class="flex shrink-0 items-center gap-0.5 opacity-100 sm:opacity-0 sm:group-focus-within/queue-item:opacity-100 sm:group-hover/queue-item:opacity-100">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Move up" aria-label="Move Draft a concise release note after the review is complete. up" type="button" @click="openAction(&quot;Move Draft a concise release note after the review is complete. up&quot;)">
                                <UIcon name="i-lucide-arrow-up" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Edit in composer" aria-label="Edit Draft a concise release note after the review is complete." type="button" @click="openAction(&quot;Edit Draft a concise release note after the review is complete.&quot;)">
                                <UIcon name="i-lucide-pencil" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-6" title="Remove" aria-label="Remove Draft a concise release note after the review is complete." type="button" @click="openAction(&quot;Remove Draft a concise release note after the review is complete.&quot;)">
                                <UIcon name="i-lucide-x" class="size-4" />
                              </UButton>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Form: controls and draft state are declared in this page -->
            <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-none" aria-label="Add a queued follow-up">
              <!-- Chat composer: form.message -->
              <div v-if="messages.length" class="my-4 space-y-4">
                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
              </div>
              <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Add a follow-up without interrupting…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                <template #footer>
                  <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                    <div class="flex min-w-0 items-center gap-1">
                      <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Attach context" type="button" @click="openAction(&quot;Attach context&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        <span class="sr-only">Attach context</span>
                      </UButton>
                      <span class="text-muted hidden text-[11px] sm:inline">New messages join the queue</span>
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
