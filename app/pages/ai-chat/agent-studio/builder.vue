<!-- Page: /ai-chat/agent-studio/builder | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Agent builder · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "addAReviewNote": ""
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-studio/builder">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <div class="flex min-h-[66px] shrink-0 flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5 border-default">
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm font-semibold text-highlighted">Customer signal analyst</h1>
              <span class="text-muted rounded border px-1.5 py-0.5 text-[9px] border-default">v1</span>
            </div>
            <p class="text-muted mt-1 text-[11px]">Build the context. Let the agent do the work.</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-muted hidden text-[10px] sm:block">All changes saved</span>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Save agent" type="button" disabled @click="openAction(&quot;Save agent&quot;)">
              Save agent
            </UButton>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Test run" type="button" @click="openAction(&quot;Test run&quot;)">
              <UIcon name="i-lucide-play" class="size-3.5" />
              Test run
            </UButton>
          </div>
        </div>
        <div class="flex shrink-0 border-b p-2 lg:hidden border-default">
          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-8 rounded-md px-3 text-xs" aria-label="Builder" type="button" @click="openAction(&quot;Builder&quot;)">
            Builder
          </UButton>
          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Test conversation" type="button" @click="openAction(&quot;Test conversation&quot;)">
            Test conversation
          </UButton>
        </div>
        <div class="flex min-h-0 flex-1">
          <section aria-label="Agent configuration canvas" class="bg-(--ui-bg-muted)/15 relative min-w-0 flex-1 overflow-hidden block">
            <div class="absolute top-3 right-3 z-10 hidden lg:block">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default shadow-xs hover:bg-elevated hover:text-default size-6 bg-default" aria-label="Hide test conversation" type="button" @click="openAction(&quot;Hide test conversation&quot;)">
                <UIcon name="i-lucide-panel-right-close" class="size-4" />
              </UButton>
            </div>
            <div class="h-full overflow-auto bg-[radial-gradient(var(--ui-border)_1px,transparent_1px)] bg-size-[18px_18px] p-4 pb-20">
              <div class="mx-auto" style="width:720px;height:702px">
                <div class="relative h-[780px] w-[800px] origin-top-left" style="transform:scale(0.9)">
                  <div class="text-muted absolute top-6 left-6 text-[10px] tracking-widest">INPUTS &amp; CONTEXT</div>
                  <div class="text-muted absolute top-6 left-[280px] text-[10px] tracking-widest">YOUR AGENT</div>
                  <div class="text-muted absolute top-6 left-[574px] text-[10px] tracking-widest">CAPABILITIES</div>
                  <svg class="pointer-events-none absolute inset-0 h-full w-full text-success/35 dark:text-success/30" viewBox="0 0 720 702" width="100%" height="100%">
                    <path d="M224 130 C250 130, 247 325, 274 325" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M224 275 C250 275, 247 325, 274 325" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M224 424 C250 424, 247 325, 274 325" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M224 603 C250 603, 247 325, 274 325" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M522 325 C545 325, 545 145, 572 145" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M522 325 C545 325, 545 358, 572 358" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <path d="M522 325 C545 325, 545 559, 572 559" fill="none" stroke="currentColor" stroke-width="1.5" />
                    <circle cx="224" cy="130" r="3" fill="currentColor" />
                    <circle cx="224" cy="275" r="3" fill="currentColor" />
                    <circle cx="224" cy="424" r="3" fill="currentColor" />
                    <circle cx="224" cy="603" r="3" fill="currentColor" />
                    <circle cx="572" cy="145" r="3" fill="currentColor" />
                    <circle cx="572" cy="358" r="3" fill="currentColor" />
                    <circle cx="572" cy="559" r="3" fill="currentColor" />
                  </svg>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[76px] left-6 w-[200px]" aria-label="ScheduleEvery Monday09:00 UTC · Customer brief" type="button" @click="openAction(&quot;ScheduleEvery Monday09:00 UTC · Customer brief&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-calendar-clock" class="text-muted size-3.5" />
                      <span class="font-medium">Schedule</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <p class="text-[11px] leading-5">Every Monday</p>
                      <p class="text-muted mt-1 text-[10px]">09:00 UTC · Customer brief</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[214px] left-6 w-[200px]" aria-label="Event triggerEventNew support conversationpriority = high" type="button" @click="openAction(&quot;Event triggerEventNew support conversationpriority = high&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-webhook" class="text-muted size-3.5" />
                      <span class="font-medium">Event trigger</span>
                      <span class="ml-auto text-[9px] text-success dark:text-success">Event</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <p class="text-[11px] leading-5">New support conversation</p>
                      <code class="text-muted bg-(--ui-bg-muted)/50 mt-2 block rounded px-1.5 py-1 text-[10px]">priority = high</code>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[374px] left-6 w-[200px]" aria-label="ChannelsSlack#customer-insightsApproval before delivery" type="button" @click="openAction(&quot;ChannelsSlack#customer-insightsApproval before delivery&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-message-square" class="text-muted size-3.5" />
                      <span class="font-medium">Channels</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="flex items-center justify-between">
                        <p class="text-[11px] leading-5">Slack</p>
                        <span class="size-1.5 rounded-full bg-success" />
                      </div>
                      <p class="text-muted mt-1 truncate text-[10px]">#customer-insights</p>
                      <p class="mt-2 text-[9px] text-success dark:text-success">Approval before delivery</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[548px] left-6 w-[200px]" aria-label="Memory2Product prioritiesPrevious findings" type="button" @click="openAction(&quot;Memory2Product prioritiesPrevious findings&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-database" class="text-muted size-3.5" />
                      <span class="font-medium">Memory</span>
                      <span class="ml-auto text-[9px] text-success dark:text-success">2</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="space-y-2">
                        <p class="text-[11px] leading-5 flex items-center gap-2">
                          <span class="bg-(--ui-text-muted)/50 size-1 shrink-0 rounded-full" />
                          <span class="truncate">Product priorities</span>
                        </p>
                        <p class="text-[11px] leading-5 flex items-center gap-2">
                          <span class="bg-(--ui-text-muted)/50 size-1 shrink-0 rounded-full" />
                          <span class="truncate">Previous findings</span>
                        </p>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[194px] left-[274px] w-[248px] border-success/35 shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-emerald-500)_5%,transparent)]" aria-label="AgentNCustomer signal analystTurn customer feedback into the next right decision.InstructionsRead the latest customer signals and group them by underlying need. Support every finding with a source. Prioritize recurring issues and separate evidence from assumptions. Prepare a brief for human review; never contact customers directly.GPT-4.1Edit agent →" type="button" @click="openAction(&quot;AgentNCustomer signal analystTurn customer feedback into the next right decision.InstructionsRead the latest customer signals and group them by underlying need. Support every finding with a source. Prioritize recurring issues and separate evidence from assumptions. Prepare a brief for human review; never contact customers directly.GPT-4.1Edit agent →&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-bot" class="text-muted size-3.5" />
                      <span class="font-medium">Agent</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="mb-3 flex items-center gap-2">
                        <div class="flex size-7 items-center justify-center rounded-md bg-success/10 font-serif text-base text-success dark:text-success">N</div>
                        <span class="text-[12px] font-semibold">Customer signal analyst</span>
                      </div>
                      <p class="text-muted text-[11px] leading-5">Turn customer feedback into the next right decision.</p>
                      <div class="my-3 border-t border-default" />
                      <p class="mb-1.5 text-[10px] font-medium">Instructions</p>
                      <p class="text-muted line-clamp-5 text-[11px] leading-[19px]">Read the latest customer signals and group them by underlying need. Support every finding with a source. Prioritize recurring issues and separate evidence from assumptions. Prepare a brief for human review; never contact customers directly.</p>
                      <div class="mt-4 flex items-center justify-between border-t pt-3 text-[10px] border-default">
                        <span>GPT-4.1</span>
                        <span class="text-success dark:text-success">Edit agent →</span>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[76px] left-[572px] w-[204px]" aria-label="Tools3Zendesk · Search ticketsNotion · Read pagesSlack · Read threads" type="button" @click="openAction(&quot;Tools3Zendesk · Search ticketsNotion · Read pagesSlack · Read threads&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-wrench" class="text-muted size-3.5" />
                      <span class="font-medium">Tools</span>
                      <span class="ml-auto text-[9px] text-success dark:text-success">3</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="space-y-2">
                        <p class="text-[11px] leading-5 truncate">Zendesk · Search tickets</p>
                        <p class="text-[11px] leading-5 truncate">Notion · Read pages</p>
                        <p class="text-[11px] leading-5 truncate">Slack · Read threads</p>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[294px] left-[572px] w-[204px]" aria-label="Skills3Signal clusteringSource verificationOpportunity scoring" type="button" @click="openAction(&quot;Skills3Signal clusteringSource verificationOpportunity scoring&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-layers" class="text-muted size-3.5" />
                      <span class="font-medium">Skills</span>
                      <span class="ml-auto text-[9px] text-success dark:text-success">3</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="space-y-2">
                        <p class="text-[11px] leading-5">Signal clustering</p>
                        <p class="text-[11px] leading-5">Source verification</p>
                        <p class="text-[11px] leading-5">Opportunity scoring</p>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/60 absolute rounded-xl border p-1 text-left shadow-xs transition-[border-color,box-shadow] outline-none hover:border-success/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-success top-[505px] left-[572px] w-[204px]" aria-label="Sub-agents2Evidence researcherBrief editor" type="button" @click="openAction(&quot;Sub-agents2Evidence researcherBrief editor&quot;)">
                    <div class="flex items-center gap-2 px-2 py-2 text-[11px]">
                      <UIcon name="i-lucide-git-branch" class="text-muted size-3.5" />
                      <span class="font-medium">Sub-agents</span>
                      <span class="ml-auto text-[9px] text-success dark:text-success">2</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted ml-auto size-3" />
                    </div>
                    <div class="bg-default rounded-lg border px-3 py-3 border-default">
                      <div class="space-y-2">
                        <p class="text-[11px] leading-5 flex items-center gap-2">
                          <span class="size-1.5 rounded-full bg-success/60" />
                          Evidence researcher
                        </p>
                        <p class="text-[11px] leading-5 flex items-center gap-2">
                          <span class="size-1.5 rounded-full bg-success/60" />
                          Brief editor
                        </p>
                      </div>
                    </div>
                  </UButton>
                </div>
              </div>
            </div>
            <div class="bg-default absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center rounded-lg border p-1 shadow-sm border-default">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Zoom out" type="button" @click="openAction(&quot;Zoom out&quot;)">
                <UIcon name="i-lucide-minus" class="size-3.5" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="min-w-14 text-xs tabular-nums" aria-label="90%" type="button" @click="openAction(&quot;90%&quot;)">
                90%
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Zoom in" type="button" @click="openAction(&quot;Zoom in&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
              </UButton>
            </div>
          </section>
          <aside aria-label="Test conversation" class="bg-default w-full shrink-0 flex-col border-l lg:w-[292px] hidden lg:flex border-default">
            <div class="flex items-center justify-between border-b px-4 py-3 border-default">
              <h2 class="text-xs font-medium text-highlighted">Test conversation</h2>
              <span class="text-muted text-[10px]">Sample run</span>
            </div>
            <div class="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 text-xs leading-6">
              <div class="bg-(--ui-bg-muted)/50 rounded-lg border px-3 py-2.5 border-default">Review customer signals from the past seven days.</div>
              <div>
                <div class="mb-2 flex items-center gap-2 text-[10px] text-success dark:text-success">
                  <span class="size-1.5 rounded-full bg-success" />
                  Run complete
                </div>
                <p>I’ll review the latest feedback, check it against our product priorities, and prepare a brief with links to the evidence.</p>
              </div>
              <div class="space-y-2">
                <p class="text-muted text-[10px] font-medium tracking-wide">CONTEXT</p>
                <div class="space-y-1.5">
                  <div class="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[11px] border-default">
                    <UIcon name="i-lucide-database" class="text-muted size-3" />
                    Product priorities
                    <UIcon name="i-lucide-check" class="ml-auto size-3 text-success" />
                  </div>
                  <div class="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[11px] border-default">
                    <UIcon name="i-lucide-database" class="text-muted size-3" />
                    Previous findings
                    <UIcon name="i-lucide-check" class="ml-auto size-3 text-success" />
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <p class="text-muted text-[10px] font-medium tracking-wide">READING SOURCES</p>
                <div class="flex items-center gap-2 text-[11px]">
                  <UIcon name="i-lucide-check" class="size-3 text-success" />
                  Zendesk · Search tickets
                </div>
                <div class="flex items-center gap-2 text-[11px]">
                  <UIcon name="i-lucide-check" class="size-3 text-success" />
                  Notion · Read pages
                </div>
                <div class="flex items-center gap-2 text-[11px]">
                  <UIcon name="i-lucide-check" class="size-3 text-success" />
                  Slack · Read threads
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span class="bg-(--ui-bg-muted)/40 rounded-md border px-2 py-1 text-[10px] border-default">Evidence researcher</span>
                <span class="bg-(--ui-bg-muted)/40 rounded-md border px-2 py-1 text-[10px] border-default">Brief editor</span>
              </div>
              <div class="space-y-3">
                <p class="font-medium">Three themes worth a closer look</p>
                <div class="flex gap-2">
                  <span class="text-muted">1.</span>
                  <p>Invite flows need clearer role descriptions.</p>
                </div>
                <div class="flex gap-2">
                  <span class="text-muted">2.</span>
                  <p>Teams want a single place for handoff decisions.</p>
                </div>
                <div class="flex gap-2">
                  <span class="text-muted">3.</span>
                  <p>Export status needs to be easier to find.</p>
                </div>
                <div class="rounded-lg border border-success/20 bg-success/5 p-3 text-[11px]">
                  <p class="font-medium">Ready for your review</p>
                  <p class="text-muted mt-1">Slack ·#customer-insights</p>
                  <p class="text-muted mt-1">Sample output only. Nothing has been sent.</p>
                </div>
              </div>
            </div>
            <div class="space-y-2 border-t p-3 border-default">
              <div class="text-muted flex items-center justify-between text-[10px]">
                <span>GPT-4.1</span>
                <span>Demo · 1.8k tokens</span>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="rounded-lg border p-2 border-default">
                <UTextarea v-model="form.addAReviewNote" :rows="4" aria-label="Follow-up notes" placeholder="Add a review note…" name="addAReviewNote" class="flex w-full rounded-md md:text-sm min-h-12 resize-none p-1 text-xs" :ui="{ base: 'h-full' }" />
                <div class="flex justify-end">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 size-6" aria-label="Add review note" type="submit" disabled>
                    <UIcon name="i-lucide-arrow-up" class="size-3.5" />
                  </UButton>
                </div>
              </UForm>
            </div>
          </aside>
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
