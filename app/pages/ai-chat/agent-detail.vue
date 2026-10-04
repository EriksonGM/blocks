<!-- Page: /ai-chat/agent-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Agent workspace · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "enableTeamPulse": true,
  "enableNewAccountHandoff": true,
  "enableCustomerSignalCheck": true,
  "enableFridayWrapUp": false,
  "enableTeamPulse2": true,
  "enableNewAccountHandoff2": true,
  "enableCustomerSignalCheck2": true,
  "enableFridayWrapUp2": false
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Background tasks",
    "value": "0"
  },
  {
    "label": "Applications",
    "value": "1"
  }
]

const tabs2Active = ref("2")

const tabs2Items = [
  {
    "label": "Skills",
    "value": "0"
  },
  {
    "label": "Calendar",
    "value": "1"
  },
  {
    "label": "Activity",
    "value": "2"
  },
  {
    "label": "Identity",
    "value": "3"
  }
]

const tabs3Active = ref("0")

const tabs3Items = [
  {
    "label": "All",
    "value": "0"
  },
  {
    "label": "Threads",
    "value": "1"
  },
  {
    "label": "Workflows",
    "value": "2"
  },
  {
    "label": "Checks",
    "value": "3"
  },
  {
    "label": "Tasks",
    "value": "4"
  }
]

const tabs4Active = ref("0")

const tabs4Items = [
  {
    "label": "All",
    "value": "0"
  },
  {
    "label": "Threads",
    "value": "1"
  },
  {
    "label": "Workflows",
    "value": "2"
  },
  {
    "label": "Checks",
    "value": "3"
  },
  {
    "label": "Tasks",
    "value": "4"
  }
]

const tabs5Active = ref("0")

const tabs5Items = [
  {
    "label": "All",
    "value": "0"
  },
  {
    "label": "Threads",
    "value": "1"
  },
  {
    "label": "Workflows",
    "value": "2"
  },
  {
    "label": "Checks",
    "value": "3"
  },
  {
    "label": "Tasks",
    "value": "4"
  }
]

const tabs6Active = ref("0")

const tabs6Items = [
  {
    "label": "All",
    "value": "0"
  },
  {
    "label": "Threads",
    "value": "1"
  },
  {
    "label": "Workflows",
    "value": "2"
  },
  {
    "label": "Checks",
    "value": "3"
  },
  {
    "label": "Tasks",
    "value": "4"
  }
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-detail">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
        <div class="h-full w-full">
          <div class="grid min-w-0 lg:h-full lg:min-h-0 lg:grid-cols-[340px_minmax(0,1fr)]">
            <aside aria-label="Agent profile" class="flex min-h-0 min-w-0 flex-col lg:overflow-y-auto">
              <div class="flex flex-col gap-4 p-5">
                <div class="flex items-center gap-3">
                  <div class="bg-muted flex size-12 shrink-0 items-center justify-center rounded-xl">
                    <UIcon name="i-lucide-bot" class="size-6" />
                  </div>
                  <div class="flex min-w-0 flex-col gap-0.5">
                    <h1 class="text-xl font-semibold tracking-tight text-highlighted">Mira</h1>
                    <p class="text-muted text-xs leading-5">Customer operations partner</p>
                  </div>
                </div>
                <p class="text-muted text-sm leading-6">Tracks customer handoffs, flags account changes, and prepares the team’s next steps.</p>
                <div class="flex items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Message" type="button" @click="openAction(&quot;Message&quot;)">
                    <UIcon name="i-lucide-message-square" class="size-4" />
                    Message
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" title="Pause agent" aria-label="Pause" type="button" @click="openAction(&quot;Pause&quot;)">
                    <UIcon name="i-lucide-pause" class="size-4" />
                    Pause
                  </UButton>
                </div>
              </div>
              <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
              <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="min-w-0" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                <template #content="{ item }">
                  <template v-if="item.value === '0'">
                    <div data-orientation="horizontal" id="radix-_R_3bdbsnpfknmlb_-content-routines" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-3 p-4" style="animation-duration:0s">
                      <!-- Card 1: Team pulse -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Team pulse</span>
                            </div>
                            <USwitch v-model="form.enableTeamPulse" aria-label="Enable Team pulse" />
                          </div>
                          <div class="text-muted text-sm">A concise morning readout of account changes, open decisions, and today's handoffs.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">Weekdays · 08:30</span>
                        </div>
                      </UCard>
                      <!-- Card 2: New account handoff -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">New account handoff</span>
                            </div>
                            <USwitch v-model="form.enableNewAccountHandoff" aria-label="Enable New account handoff" />
                          </div>
                          <div class="text-muted text-sm">Checks new accounts for missing context and prepares a handoff for the account owner.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">When an account is created</span>
                        </div>
                      </UCard>
                      <!-- Card 3: Customer signal check -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Customer signal check</span>
                            </div>
                            <USwitch v-model="form.enableCustomerSignalCheck" aria-label="Enable Customer signal check" />
                          </div>
                          <div class="text-muted text-sm">Groups recent feedback into themes and flags accounts that may need a closer look.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">Daily · 12:00</span>
                        </div>
                      </UCard>
                      <!-- Card 4: Friday wrap-up -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Friday wrap-up</span>
                            </div>
                            <USwitch v-model="form.enableFridayWrapUp" aria-label="Enable Friday wrap-up" />
                          </div>
                          <div class="text-muted text-sm">Collects the week's outcomes and outstanding follow-ups into a shared team note.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-muted">
                            <span class="size-1.5 rounded-full bg-current" />
                            Paused
                          </span>
                          <span class="text-muted text-[11px]">Fridays · 16:00</span>
                        </div>
                      </UCard>
                    </div>
                  </template>
                  <template v-if="item.value === '1'">
                    <div data-orientation="horizontal" id="radix-_R_3bdbsnpfknmlb_-content-routines" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-3 p-4" style="animation-duration:0s">
                      <!-- Card 5: Team pulse -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Team pulse</span>
                            </div>
                            <USwitch v-model="form.enableTeamPulse2" aria-label="Enable Team pulse" />
                          </div>
                          <div class="text-muted text-sm">A concise morning readout of account changes, open decisions, and today's handoffs.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">Weekdays · 08:30</span>
                        </div>
                      </UCard>
                      <!-- Card 6: New account handoff -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">New account handoff</span>
                            </div>
                            <USwitch v-model="form.enableNewAccountHandoff2" aria-label="Enable New account handoff" />
                          </div>
                          <div class="text-muted text-sm">Checks new accounts for missing context and prepares a handoff for the account owner.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">When an account is created</span>
                        </div>
                      </UCard>
                      <!-- Card 7: Customer signal check -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Customer signal check</span>
                            </div>
                            <USwitch v-model="form.enableCustomerSignalCheck2" aria-label="Enable Customer signal check" />
                          </div>
                          <div class="text-muted text-sm">Groups recent feedback into themes and flags accounts that may need a closer look.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-success">
                            <span class="size-1.5 rounded-full bg-current" />
                            Active
                          </span>
                          <span class="text-muted text-[11px]">Daily · 12:00</span>
                        </div>
                      </UCard>
                      <!-- Card 8: Friday wrap-up -->
                      <UCard class="rounded-lg overflow-hidden" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 gap-2 p-4">
                          <div class="flex items-start justify-between gap-3">
                            <div class="leading-none font-semibold tracking-tight">
                              <span class="text-sm leading-5">Friday wrap-up</span>
                            </div>
                            <USwitch v-model="form.enableFridayWrapUp2" aria-label="Enable Friday wrap-up" />
                          </div>
                          <div class="text-muted text-sm">Collects the week's outcomes and outstanding follow-ups into a shared team note.</div>
                        </div>
                        <div class="flex items-center p-6 bg-(--ui-bg-muted)/25 flex-wrap justify-between gap-2 border-t px-4 py-2.5 border-default">
                          <span class="flex items-center gap-1.5 text-[11px] text-muted">
                            <span class="size-1.5 rounded-full bg-current" />
                            Paused
                          </span>
                          <span class="text-muted text-[11px]">Fridays · 16:00</span>
                        </div>
                      </UCard>
                    </div>
                  </template>
                </template>
              </UTabs>
            </aside>
            <section aria-label="Agent workspace" class="min-h-0 min-w-0 border-t lg:overflow-y-auto lg:border-t-0 lg:border-l border-default">
              <UTabs v-model="tabs2Active" :items="tabs2Items" color="primary" variant="link" data-orientation="horizontal" class="min-w-0" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                <template #content="{ item }">
                  <template v-if="item.value === '0'">
                    <div data-orientation="horizontal" id="radix-_R_jdbsnpfknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-5 max-w-5xl overflow-hidden rounded-lg border border-default" style="animation-duration:0s">
                      <div class="bg-(--ui-bg-muted)/20 flex items-center justify-between gap-2 border-b px-4 py-3 border-default">
                        <h2 class="text-sm font-medium text-highlighted">Mira’s activity</h2>
                        <span class="text-muted text-xs">Today, 16 September</span>
                      </div>
                      <div data-orientation="horizontal" class="min-w-0">
                        <UTabs v-model="tabs3Active" :items="tabs3Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center p-1 h-auto max-w-full justify-start gap-1.5 overflow-x-auto rounded-none bg-transparent px-3 py-2" aria-label="Activity type" data-orientation="horizontal" style="outline:none" />
                        <div data-orientation="horizontal" id="radix-_R_15jdbsnpfknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 overflow-hidden border-t border-default" style="animation-duration:0s">
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:24Prepared the Northstar handoffHubSpot" type="button" @click="openAction(&quot;10:24Prepared the Northstar handoffHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:24</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Prepared the Northstar handoff</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:12Grouped onboarding feedbackLinear" type="button" @click="openAction(&quot;10:12Grouped onboarding feedbackLinear&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:12</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Grouped onboarding feedback</span>
                                <span class="text-muted text-xs">Linear</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="09:46Re: Acme rollout questionsSlack" type="button" @click="openAction(&quot;09:46Re: Acme rollout questionsSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">09:46</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Acme rollout questions</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:30Team pulse completedWorkflow · 12.8s" type="button" @click="openAction(&quot;08:30Team pulse completedWorkflow · 12.8s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:30</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Team pulse completed</span>
                                <span class="text-muted text-xs">Workflow · 12.8s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2b5jdbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 180px; --radix-collapsible-content-width: 801px;">
                              <div class="mr-5 mb-5 ml-[68px] flex max-w-prose flex-col gap-4 border-l pl-4 border-default">
                                <div class="flex flex-col gap-1.5">
                                  <span class="text-muted text-xs">Request</span>
                                  <p class="text-sm leading-6">Summarize account changes, open handoffs, and decisions the customer team needs to make today.</p>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                  <span class="flex items-center gap-1.5 text-xs text-success">
                                    <UIcon name="i-lucide-check" class="size-3" />
                                    Completed
                                  </span>
                                  <p class="text-muted text-sm leading-6">Reviewed 18 account updates and 6 open handoffs. Two accounts need an owner check, one kickoff moved to Thursday, and all urgent follow-ups have an assigned owner. A draft brief is ready for the team to review.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:18Checked the integration heartbeatHubSpot" type="button" @click="openAction(&quot;08:18Checked the integration heartbeatHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:18</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Checked the integration heartbeat</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:05Updated the renewal watchlistHubSpot" type="button" @click="openAction(&quot;08:05Updated the renewal watchlistHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:05</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Updated the renewal watchlist</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:52Re: Wednesday customer reviewSlack" type="button" @click="openAction(&quot;07:52Re: Wednesday customer reviewSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:52</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Wednesday customer review</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:40Account context refreshedWorkflow · 9.4s" type="button" @click="openAction(&quot;07:40Account context refreshedWorkflow · 9.4s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:40</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Account context refreshed</span>
                                <span class="text-muted text-xs">Workflow · 9.4s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_4b5jdbsnpfknmlb_" style="" />
                          </div>
                        </div>
                      </div>
                      <p class="text-muted border-t px-4 py-2.5 text-xs border-default">8 events · All times in UTC</p>
                    </div>
                  </template>
                  <template v-if="item.value === '1'">
                    <div data-orientation="horizontal" id="radix-_R_jdbsnpfknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-5 max-w-5xl overflow-hidden rounded-lg border border-default" style="animation-duration:0s">
                      <div class="bg-(--ui-bg-muted)/20 flex items-center justify-between gap-2 border-b px-4 py-3 border-default">
                        <h2 class="text-sm font-medium text-highlighted">Mira’s activity</h2>
                        <span class="text-muted text-xs">Today, 16 September</span>
                      </div>
                      <div data-orientation="horizontal" class="min-w-0">
                        <UTabs v-model="tabs4Active" :items="tabs4Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center p-1 h-auto max-w-full justify-start gap-1.5 overflow-x-auto rounded-none bg-transparent px-3 py-2" aria-label="Activity type" data-orientation="horizontal" style="outline:none" />
                        <div data-orientation="horizontal" id="radix-_R_15jdbsnpfknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 overflow-hidden border-t border-default" style="animation-duration:0s">
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:24Prepared the Northstar handoffHubSpot" type="button" @click="openAction(&quot;10:24Prepared the Northstar handoffHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:24</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Prepared the Northstar handoff</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:12Grouped onboarding feedbackLinear" type="button" @click="openAction(&quot;10:12Grouped onboarding feedbackLinear&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:12</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Grouped onboarding feedback</span>
                                <span class="text-muted text-xs">Linear</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="09:46Re: Acme rollout questionsSlack" type="button" @click="openAction(&quot;09:46Re: Acme rollout questionsSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">09:46</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Acme rollout questions</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:30Team pulse completedWorkflow · 12.8s" type="button" @click="openAction(&quot;08:30Team pulse completedWorkflow · 12.8s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:30</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Team pulse completed</span>
                                <span class="text-muted text-xs">Workflow · 12.8s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2b5jdbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 180px; --radix-collapsible-content-width: 801px;">
                              <div class="mr-5 mb-5 ml-[68px] flex max-w-prose flex-col gap-4 border-l pl-4 border-default">
                                <div class="flex flex-col gap-1.5">
                                  <span class="text-muted text-xs">Request</span>
                                  <p class="text-sm leading-6">Summarize account changes, open handoffs, and decisions the customer team needs to make today.</p>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                  <span class="flex items-center gap-1.5 text-xs text-success">
                                    <UIcon name="i-lucide-check" class="size-3" />
                                    Completed
                                  </span>
                                  <p class="text-muted text-sm leading-6">Reviewed 18 account updates and 6 open handoffs. Two accounts need an owner check, one kickoff moved to Thursday, and all urgent follow-ups have an assigned owner. A draft brief is ready for the team to review.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:18Checked the integration heartbeatHubSpot" type="button" @click="openAction(&quot;08:18Checked the integration heartbeatHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:18</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Checked the integration heartbeat</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:05Updated the renewal watchlistHubSpot" type="button" @click="openAction(&quot;08:05Updated the renewal watchlistHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:05</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Updated the renewal watchlist</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:52Re: Wednesday customer reviewSlack" type="button" @click="openAction(&quot;07:52Re: Wednesday customer reviewSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:52</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Wednesday customer review</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:40Account context refreshedWorkflow · 9.4s" type="button" @click="openAction(&quot;07:40Account context refreshedWorkflow · 9.4s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:40</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Account context refreshed</span>
                                <span class="text-muted text-xs">Workflow · 9.4s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_4b5jdbsnpfknmlb_" style="" />
                          </div>
                        </div>
                      </div>
                      <p class="text-muted border-t px-4 py-2.5 text-xs border-default">8 events · All times in UTC</p>
                    </div>
                  </template>
                  <template v-if="item.value === '2'">
                    <div data-orientation="horizontal" id="radix-_R_jdbsnpfknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-5 max-w-5xl overflow-hidden rounded-lg border border-default" style="animation-duration:0s">
                      <div class="bg-(--ui-bg-muted)/20 flex items-center justify-between gap-2 border-b px-4 py-3 border-default">
                        <h2 class="text-sm font-medium text-highlighted">Mira’s activity</h2>
                        <span class="text-muted text-xs">Today, 16 September</span>
                      </div>
                      <div data-orientation="horizontal" class="min-w-0">
                        <UTabs v-model="tabs5Active" :items="tabs5Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center p-1 h-auto max-w-full justify-start gap-1.5 overflow-x-auto rounded-none bg-transparent px-3 py-2" aria-label="Activity type" data-orientation="horizontal" style="outline:none" />
                        <div data-orientation="horizontal" id="radix-_R_15jdbsnpfknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 overflow-hidden border-t border-default" style="animation-duration:0s">
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:24Prepared the Northstar handoffHubSpot" type="button" @click="openAction(&quot;10:24Prepared the Northstar handoffHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:24</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Prepared the Northstar handoff</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:12Grouped onboarding feedbackLinear" type="button" @click="openAction(&quot;10:12Grouped onboarding feedbackLinear&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:12</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Grouped onboarding feedback</span>
                                <span class="text-muted text-xs">Linear</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="09:46Re: Acme rollout questionsSlack" type="button" @click="openAction(&quot;09:46Re: Acme rollout questionsSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">09:46</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Acme rollout questions</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:30Team pulse completedWorkflow · 12.8s" type="button" @click="openAction(&quot;08:30Team pulse completedWorkflow · 12.8s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:30</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Team pulse completed</span>
                                <span class="text-muted text-xs">Workflow · 12.8s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2b5jdbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 180px; --radix-collapsible-content-width: 801px;">
                              <div class="mr-5 mb-5 ml-[68px] flex max-w-prose flex-col gap-4 border-l pl-4 border-default">
                                <div class="flex flex-col gap-1.5">
                                  <span class="text-muted text-xs">Request</span>
                                  <p class="text-sm leading-6">Summarize account changes, open handoffs, and decisions the customer team needs to make today.</p>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                  <span class="flex items-center gap-1.5 text-xs text-success">
                                    <UIcon name="i-lucide-check" class="size-3" />
                                    Completed
                                  </span>
                                  <p class="text-muted text-sm leading-6">Reviewed 18 account updates and 6 open handoffs. Two accounts need an owner check, one kickoff moved to Thursday, and all urgent follow-ups have an assigned owner. A draft brief is ready for the team to review.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:18Checked the integration heartbeatHubSpot" type="button" @click="openAction(&quot;08:18Checked the integration heartbeatHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:18</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Checked the integration heartbeat</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:05Updated the renewal watchlistHubSpot" type="button" @click="openAction(&quot;08:05Updated the renewal watchlistHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:05</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Updated the renewal watchlist</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:52Re: Wednesday customer reviewSlack" type="button" @click="openAction(&quot;07:52Re: Wednesday customer reviewSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:52</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Wednesday customer review</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:40Account context refreshedWorkflow · 9.4s" type="button" @click="openAction(&quot;07:40Account context refreshedWorkflow · 9.4s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:40</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Account context refreshed</span>
                                <span class="text-muted text-xs">Workflow · 9.4s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_4b5jdbsnpfknmlb_" style="" />
                          </div>
                        </div>
                      </div>
                      <p class="text-muted border-t px-4 py-2.5 text-xs border-default">8 events · All times in UTC</p>
                    </div>
                  </template>
                  <template v-if="item.value === '3'">
                    <div data-orientation="horizontal" id="radix-_R_jdbsnpfknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-5 max-w-5xl overflow-hidden rounded-lg border border-default" style="animation-duration:0s">
                      <div class="bg-(--ui-bg-muted)/20 flex items-center justify-between gap-2 border-b px-4 py-3 border-default">
                        <h2 class="text-sm font-medium text-highlighted">Mira’s activity</h2>
                        <span class="text-muted text-xs">Today, 16 September</span>
                      </div>
                      <div data-orientation="horizontal" class="min-w-0">
                        <UTabs v-model="tabs6Active" :items="tabs6Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center p-1 h-auto max-w-full justify-start gap-1.5 overflow-x-auto rounded-none bg-transparent px-3 py-2" aria-label="Activity type" data-orientation="horizontal" style="outline:none" />
                        <div data-orientation="horizontal" id="radix-_R_15jdbsnpfknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 overflow-hidden border-t border-default" style="animation-duration:0s">
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:24Prepared the Northstar handoffHubSpot" type="button" @click="openAction(&quot;10:24Prepared the Northstar handoffHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:24</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Prepared the Northstar handoff</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="10:12Grouped onboarding feedbackLinear" type="button" @click="openAction(&quot;10:12Grouped onboarding feedbackLinear&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">10:12</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Grouped onboarding feedback</span>
                                <span class="text-muted text-xs">Linear</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="09:46Re: Acme rollout questionsSlack" type="button" @click="openAction(&quot;09:46Re: Acme rollout questionsSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">09:46</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Acme rollout questions</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_1r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:30Team pulse completedWorkflow · 12.8s" type="button" @click="openAction(&quot;08:30Team pulse completedWorkflow · 12.8s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:30</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Team pulse completed</span>
                                <span class="text-muted text-xs">Workflow · 12.8s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2b5jdbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 180px; --radix-collapsible-content-width: 801px;">
                              <div class="mr-5 mb-5 ml-[68px] flex max-w-prose flex-col gap-4 border-l pl-4 border-default">
                                <div class="flex flex-col gap-1.5">
                                  <span class="text-muted text-xs">Request</span>
                                  <p class="text-sm leading-6">Summarize account changes, open handoffs, and decisions the customer team needs to make today.</p>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                  <span class="flex items-center gap-1.5 text-xs text-success">
                                    <UIcon name="i-lucide-check" class="size-3" />
                                    Completed
                                  </span>
                                  <p class="text-muted text-sm leading-6">Reviewed 18 account updates and 6 open handoffs. Two accounts need an owner check, one kickoff moved to Thursday, and all urgent follow-ups have an assigned owner. A draft brief is ready for the team to review.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:18Checked the integration heartbeatHubSpot" type="button" @click="openAction(&quot;08:18Checked the integration heartbeatHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:18</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Checked the integration heartbeat</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_2r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="08:05Updated the renewal watchlistHubSpot" type="button" @click="openAction(&quot;08:05Updated the renewal watchlistHubSpot&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">08:05</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Updated the renewal watchlist</span>
                                <span class="text-muted text-xs">HubSpot</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3b5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:52Re: Wednesday customer reviewSlack" type="button" @click="openAction(&quot;07:52Re: Wednesday customer reviewSlack&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:52</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Re: Wednesday customer review</span>
                                <span class="text-muted text-xs">Slack</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_3r5jdbsnpfknmlb_" style="" />
                          </div>
                          <div class="group border-b last:border-0 border-default">
                            <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented flex w-full items-center gap-3 px-4 py-3 text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="07:40Account context refreshedWorkflow · 9.4s" type="button" @click="openAction(&quot;07:40Account context refreshedWorkflow · 9.4s&quot;)">
                              <span class="text-muted w-10 shrink-0 text-xs tabular-nums">07:40</span>
                              <span class="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                <span class="text-sm leading-5">Account context refreshed</span>
                                <span class="text-muted text-xs">Workflow · 9.4s</span>
                              </span>
                              <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </UButton>
                            <div id="radix-_R_4b5jdbsnpfknmlb_" style="" />
                          </div>
                        </div>
                      </div>
                      <p class="text-muted border-t px-4 py-2.5 text-xs border-default">8 events · All times in UTC</p>
                    </div>
                  </template>
                </template>
              </UTabs>
            </section>
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
