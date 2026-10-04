<!-- Page: /ai-chat/conversation-15 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 15 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/conversation-15">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <h1 class="sr-only text-highlighted">Interactive support triage</h1>
        <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
          <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
            <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0 pb-14">
              <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                <div class="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-10">
                  <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                    <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                      <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                        <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Review the support backlog from the last seven days. Show what changed, prioritize accounts at SLA risk, and let me assign the urgent issues without leaving the conversation.</div>
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
                        <span class="text-muted text-xs">Operations analyst</span>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <p>The backlog peaked on Monday and has started to recover, but 17 cases still carry material SLA risk. I pulled the decision into three focused views.</p>
                      </div>
                      <div>
                        <div class="min-h-[408px] w-full max-w-[22rem]" aria-label="Support insights">
                          <div class="flex items-center justify-between">
                            <span class="flex items-baseline gap-1.5">
                              <span class="text-[13px] font-semibold">Insights</span>
                              <span class="text-muted text-[13px] tabular-nums">3</span>
                            </span>
                            <span class="flex items-center gap-0.5">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous insight" type="button" @click="openAction(&quot;Previous insight&quot;)">
                                <UIcon name="i-lucide-chevron-left" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next insight" type="button" @click="openAction(&quot;Next insight&quot;)">
                                <UIcon name="i-lucide-chevron-right" class="size-4" />
                              </UButton>
                            </span>
                          </div>
                          <div>
                            <p class="text-muted mt-1.5 text-[12.5px] leading-relaxed">
                              <strong class="text-highlighted font-medium">Helio Freight</strong>
                              now ranks first at
                              <span class="font-mono text-error dark:text-error">92</span>
                              after pressure rose all week.
                            </p>
                            <div class="mt-2">
                              <div class="bg-default min-h-[278px] rounded-lg p-3 shadow-[0_0_0_1px_var(--ui-border),0_1px_2px_oklch(0_0_0/0.04)]">
                                <div class="grid grid-cols-2 gap-4">
                                  <div class="min-w-0">
                                    <span class="text-muted flex items-center gap-1.5 truncate text-[11px]">
                                      <span class="size-2 shrink-0 rounded-full bg-error" />
                                      Helio Freight
                                    </span>
                                    <span class="mt-0.5 block font-mono text-lg font-semibold tabular-nums">92</span>
                                    <span class="text-muted block truncate text-[10px]">CS-4827 · Critical</span>
                                  </div>
                                  <div class="min-w-0">
                                    <span class="text-muted flex items-center gap-1.5 truncate text-[11px]">
                                      <span class="size-2 shrink-0 rounded-full bg-warning" />
                                      Northline Labs
                                    </span>
                                    <span class="mt-0.5 block font-mono text-lg font-semibold tabular-nums">87</span>
                                    <span class="text-muted block truncate text-[10px]">CS-4819 · Critical</span>
                                  </div>
                                </div>
                                <div class="bg-(--ui-bg-muted)/40 mt-2 overflow-hidden rounded-md shadow-[0_0_0_1px_var(--ui-border)]">
                                  <div class="text-muted flex items-center justify-between border-b px-2.5 py-1.5 text-[10px] border-default">
                                    <span>Risk pressure</span>
                                    <span>Last 7 days</span>
                                  </div>
                                  <div class="support-chart-stage h-[166px] px-1 pt-2">
                                    <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                                    <div class="chart-responsive-container" style="width:100%;height:158px;min-width:0" role="img" aria-label="Analytics chart">
                                      <div style="width:0;height:0;overflow:visible">
                                        <div width="320" height="158" class="chart-wrapper" style="position: relative; cursor: default; width: 320px; height: 158px;">
                                          <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 320 158" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                            <title />
                                            <desc />
                                            <g class="chart-zIndex-layer_-100">
                                              <g class="chart-cartesian-grid">
                                                <g class="chart-cartesian-grid-horizontal">
                                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="5" y="8" width="310" height="117" x1="5" y1="125" x2="315" y2="125" />
                                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="5" y="8" width="310" height="117" x1="5" y1="95.75" x2="315" y2="95.75" />
                                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="5" y="8" width="310" height="117" x1="5" y1="66.5" x2="315" y2="66.5" />
                                                  <line stroke="var(--ui-border)" stroke-dasharray="3 4" fill="none" x="5" y="8" width="310" height="117" x1="5" y1="8" x2="315" y2="8" />
                                                </g>
                                              </g>
                                            </g>
                                            <g class="chart-zIndex-layer_-50" />
                                            <defs>
                                              <clipPath id="recharts1-clip">
                                                <rect x="5" y="8" height="117" width="310" />
                                              </clipPath>
                                            </defs>
                                            <g class="chart-zIndex-layer_100" />
                                            <g class="chart-zIndex-layer_200" />
                                            <g class="chart-zIndex-layer_300" />
                                            <g class="chart-zIndex-layer_400">
                                              <g class="chart-layer chart-line">
                                                <g class="chart-layer chart-shape">
                                                  <path name="Helio Freight" stroke="var(--ui-error)" stroke-width="2.25" fill="none" id="recharts-line-_r_0_" height="117" width="310" class="chart-curve chart-line-curve" d="M5,89.9C22.222,84.05,39.444,78.2,56.667,78.2C73.889,78.2,91.111,84.05,108.333,84.05C125.556,84.05,142.778,68.938,160,63.575C177.222,58.213,194.444,55.775,211.667,51.875C228.889,47.975,246.111,43.588,263.333,40.175C280.556,36.762,297.778,34.081,315,31.4" />
                                                </g>
                                              </g>
                                              <g class="chart-layer chart-line">
                                                <g class="chart-layer chart-shape">
                                                  <path name="Northline Labs" stroke="var(--ui-warning)" stroke-width="2.25" fill="none" id="recharts-line-_r_1_" height="117" width="310" class="chart-curve chart-line-curve" d="M5,107.45C22.222,104.769,39.444,102.088,56.667,98.675C73.889,95.262,91.111,91.363,108.333,86.975C125.556,82.587,142.778,76.738,160,72.35C177.222,67.962,194.444,63.575,211.667,60.65C228.889,57.725,246.111,57.238,263.333,54.8C280.556,52.363,297.778,49.194,315,46.025" />
                                                </g>
                                              </g>
                                            </g>
                                            <g class="chart-zIndex-layer_500">
                                              <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                                                <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                                  <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                    <g class="chart-layer chart-cartesian-axis-tick" />
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                            <g class="chart-zIndex-layer_600" />
                                            <g class="chart-zIndex-layer_1000" />
                                            <g class="chart-zIndex-layer_1100" />
                                            <g class="chart-zIndex-layer_1200" />
                                            <g class="chart-zIndex-layer_2000">
                                              <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="56.666666666666664" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="56.666666666666664">6d</tspan>
                                                  </text>
                                                </g>
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="108.33333333333333" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="108.33333333333333">5d</tspan>
                                                  </text>
                                                </g>
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="160" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="160">4d</tspan>
                                                  </text>
                                                </g>
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="211.66666666666666" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="211.66666666666666">3d</tspan>
                                                  </text>
                                                </g>
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="263.3333333333333" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="263.3333333333333">2d</tspan>
                                                  </text>
                                                </g>
                                                <g class="chart-layer chart-cartesian-axis-tick-label">
                                                  <text height="30" width="310" stroke="none" x="309.453125" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                                    <tspan x="309.453125">Now</tspan>
                                                  </text>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-8 text-xs bg-default hover:bg-muted mt-2 rounded-full px-3 shadow-[0_0_0_1px_var(--ui-border),0_1px_2px_oklch(0_0_0/0.04)]" aria-label="How did the backlog change?" type="button" @click="openAction(&quot;How did the backlog change?&quot;)">
                              How did the backlog change?
                            </UButton>
                          </div>
                        </div>
                      </div>
                      <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                        <p>Move through the risk comparison and backlog change, then assign the three urgent cases from the final view.</p>
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
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Regenerate response" type="button" @click="openAction(&quot;Regenerate response&quot;)">
                          <UIcon name="i-lucide-refresh-cw" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mx-auto w-full max-w-3xl space-y-6 px-4 pb-6" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-6">
          <!-- Form: controls and draft state are declared in this page -->
          <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-3xl" aria-label="Continue support backlog conversation">
            <!-- Chat composer: form.message -->
            <div v-if="messages.length" class="my-4 space-y-4">
              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
            </div>
            <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask for another view or change the assignment…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
              <template #footer>
                <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                  <div class="flex min-w-0 items-center gap-1">
                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Add support context" type="button" @click="openAction(&quot;Add support context&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      <span class="sr-only">Add support context</span>
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
              <span>Support workspace</span>
              <span>Backlog snapshot · 184 cases</span>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
