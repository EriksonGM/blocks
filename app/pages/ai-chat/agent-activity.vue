<!-- Page: /ai-chat/agent-activity | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Agent 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchRunsOrIDs": "",
  "last24Hours": "Last 24 hours",
  "status": "Status"
})

const last24HoursOptions = [
  "Last hour",
  "Last 24 hours",
  "Last 7 days"
]

const statusOptions = [
  "Status",
  "Needs attention",
  "Running",
  "Awaiting review",
  "Blocked by rule",
  "Completed",
  "Failed",
  "Cancelled"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-agent-activity.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-activity">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col">
        <div class="shrink-0 px-4 pt-6 pb-5 sm:px-8 sm:pt-8">
          <div class="mx-auto flex max-w-6xl flex-col gap-5">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Activity</h1>
                <p class="text-muted mt-1 text-sm">Every agent run, from first step to outcome.</p>
              </div>
              <div class="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-1 text-xs">
                <span class="text-muted flex items-center gap-1.5">
                  <span class="bg-chart-2 size-1.5 rounded-full" />
                  1running
                </span>
                <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted focus-visible:ring-accented flex items-center gap-1.5 rounded-sm focus-visible:ring-2 focus-visible:outline-none" aria-label="3 need attention" type="button" @click="openAction(&quot;3 need attention&quot;)">
                  <span class="bg-warning size-1.5 rounded-full" />
                  3 need attention
                </UButton>
                <span class="text-muted flex items-center gap-1.5">
                  <span class="bg-success size-1.5 rounded-full" />
                  7completed
                </span>
              </div>
            </div>
            <div role="search" aria-label="Filter agent activity" class="flex flex-wrap items-center gap-2">
              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-full sm:w-64">
                <UInput v-model="form.searchRunsOrIDs" type="text" data-slot="input-group-control" aria-label="Search runs or IDs" placeholder="Search runs or IDs" name="searchRunsOrIDs" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                  <UIcon name="i-lucide-search" class="size-4" />
                </div>
              </div>
              <USelect v-model="form.last24Hours" :items="last24HoursOptions" aria-label="Time period" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto max-w-full min-w-0 gap-3" />
              <USelect v-model="form.status" :items="statusOptions" aria-label="Run status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto max-w-full min-w-0 gap-3" />
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs ml-auto" aria-label="Resume" type="button" @click="openAction(&quot;Resume&quot;)">
                <UIcon name="i-lucide-play" class="size-4" />
                Resume
              </UButton>
            </div>
          </div>
        </div>
        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
        <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain" role="region" aria-label="Agent runs" style="mask-image: linear-gradient(var(--ui-text-highlighted) 0%, var(--ui-text-highlighted) 15%, var(--ui-text-highlighted) 85%, color-mix(in oklab, var(--ui-text-highlighted) 0%, transparent) 100%);">
          <div class="mx-auto w-full max-w-[88rem] px-3 pt-8 pb-16 sm:px-6 xl:px-8">
            <div class="relative">
              <span class="text-muted absolute -top-5 left-0 hidden text-[10px] font-medium tracking-wide sm:block">Today</span>
              <ol class="relative flex flex-col gap-3" aria-label="Run timeline">
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:44</p>
                        <p class="mt-1 text-[10px]">1 min ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Refund processor</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_91ac</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 1: Process customer refund -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Process customer refundRefund processor·run_91acStripe → NetSuiteRunning8s1 of 3 completed" type="button" @click="openAction(&quot;Process customer refundRefund processor·run_91acStripe → NetSuiteRunning8s1 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-chart-2" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-chart-2" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" class="motion-safe:animate-pulse" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Process customer refund</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Refund processor
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_91ac</span>
                            </span>
                            <span class="hidden sm:inline">Stripe → NetSuite</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Running
                            <span class="text-muted tabular-nums">8s</span>
                          </span>
                          <span class="text-muted">1 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:42</p>
                        <p class="mt-1 text-[10px]">3 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Customer reporting</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_84f2</p>
                      </div>
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-2xl border transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] bg-muted border-transparent border-default">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-muted rounded-t-2xl p-4 sm:p-5" aria-label="Prepare customer reportCustomer reporting·run_84f2BigQuery → Internal tool → Tableau → SlackAwaiting review2m2 of 4 completed" type="button" @click="openAction(&quot;Prepare customer reportCustomer reporting·run_84f2BigQuery → Internal tool → Tableau → SlackAwaiting review2m2 of 4 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-warning" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(0 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(90 16 16)" class="text-warning" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(180 16 16)" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Prepare customer report</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Customer reporting
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_84f2</span>
                            </span>
                            <span class="hidden sm:inline">BigQuery → Internal tool → Tableau → Slack</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Awaiting review
                            <span class="text-muted tabular-nums">2m</span>
                          </span>
                          <span class="text-muted">2 of 4 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0 rotate-180" />
                    </UButton>
                    <div id="radix-_R_12jjdbsnpfknmlb_" class="agent-run-details" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 268.5px; --radix-collapsible-content-width: 874px;">
                      <div class="agent-run-details-clip">
                        <div class="px-2 pb-2">
                          <!-- Card 2: Read customer dataBigQuery·3,120 active customer records · 1.8sCalculate metricsInternal t -->
                          <UCard class="border-(--ui-border)/50 flex flex-col gap-4 rounded-xl px-4 py-4 sm:px-5 sm:py-5 sm:pl-[64px]" :ui="{ body: 'contents' }">
                            <ol class="divide-(--ui-border)/50 flex flex-col divide-y" aria-label="Steps for Prepare customer report">
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium">Read customer data</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      BigQuery
                                      <span class="mx-1">·</span>
                                      3,120 active customer records · 1.8s
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium">Calculate metrics</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Internal tool
                                      <span class="mx-1">·</span>
                                      Revenue, retention, and account health · 4.1s
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle-alert" class="mt-0.5 size-3.5 shrink-0 text-warning" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium">Export 3,120 records</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Tableau
                                      <span class="mx-1">·</span>
                                      2,420 records over the review threshold
                                    </p>
                                  </div>
                                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Review" type="button" @click="openAction(&quot;Review&quot;)">
                                    Review
                                    <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                                  </UButton>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle" class="mt-0.5 size-3.5 shrink-0 text-(--ui-text-muted)/50" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium text-muted">Notify dashboard owner</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Slack
                                      <span class="mx-1">·</span>
                                      Not started · waiting for the export decision
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </UCard>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:39</p>
                        <p class="mt-1 text-[10px]">6 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Deal desk</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_78de</p>
                      </div>
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-2xl border transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] bg-muted border-transparent border-default">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-muted rounded-t-2xl p-4 sm:p-5" aria-label="Apply discount to Deal #9031Deal desk·run_78deSalesforce → Internal tool → SlackBlocked by rule5m1 of 4 completed" type="button" @click="openAction(&quot;Apply discount to Deal #9031Deal desk·run_78deSalesforce → Internal tool → SlackBlocked by rule5m1 of 4 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-error" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(0 16 16)" class="text-error" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(90 16 16)" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="13.850000000000001 75.4" transform="rotate(180 16 16)" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Apply discount to Deal #9031</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Deal desk
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_78de</span>
                            </span>
                            <span class="hidden sm:inline">Salesforce → Internal tool → Slack</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Blocked by rule
                            <span class="text-muted tabular-nums">5m</span>
                          </span>
                          <span class="text-muted">1 of 4 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0 rotate-180" />
                    </UButton>
                    <div id="radix-_R_13jjdbsnpfknmlb_" class="agent-run-details" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 268.5px; --radix-collapsible-content-width: 874px;">
                      <div class="agent-run-details-clip">
                        <div class="px-2 pb-2">
                          <!-- Card 3: Read deal detailsSalesforce·Harborline Apps · annual team planApply 35% discountSalesforce -->
                          <UCard class="border-(--ui-border)/50 flex flex-col gap-4 rounded-xl px-4 py-4 sm:px-5 sm:py-5 sm:pl-[64px]" :ui="{ body: 'contents' }">
                            <ol class="divide-(--ui-border)/50 flex flex-col divide-y" aria-label="Steps for Apply discount to Deal #9031">
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle-check" class="mt-0.5 size-3.5 shrink-0 text-success" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium">Read deal details</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Salesforce
                                      <span class="mx-1">·</span>
                                      Harborline Apps · annual team plan
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-lock-keyhole" class="mt-0.5 size-3.5 shrink-0 text-error" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium">Apply 35% discount</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Salesforce
                                      <span class="mx-1">·</span>
                                      Requested 35% · maximum allowed 20%
                                    </p>
                                  </div>
                                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="View rule" type="button" @click="openAction(&quot;View rule&quot;)">
                                    View rule
                                  </UButton>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle" class="mt-0.5 size-3.5 shrink-0 text-(--ui-text-muted)/50" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium text-muted">Recalculate quote</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Internal tool
                                      <span class="mx-1">·</span>
                                      Waiting for a compliant discount
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li class="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                                <UIcon name="i-lucide-circle" class="mt-0.5 size-3.5 shrink-0 text-(--ui-text-muted)/50" />
                                <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="text-xs font-medium text-muted">Notify account owner</p>
                                    <p class="text-muted mt-0.5 text-[11px] leading-relaxed">
                                      Slack
                                      <span class="mx-1">·</span>
                                      Waiting for the updated quote
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </UCard>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:35</p>
                        <p class="mt-1 text-[10px]">10 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Invoice reconciliation</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_c31f</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 4: Reconcile Stripe payouts -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Reconcile Stripe payoutsInvoice reconciliation·run_c31fStripe → NetSuiteCompleted42s3 of 3 completed" type="button" @click="openAction(&quot;Reconcile Stripe payoutsInvoice reconciliation·run_c31fStripe → NetSuiteCompleted42s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Reconcile Stripe payouts</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Invoice reconciliation
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_c31f</span>
                            </span>
                            <span class="hidden sm:inline">Stripe → NetSuite</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">42s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:28</p>
                        <p class="mt-1 text-[10px]">17 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Customer reporting</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_b7a1</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 5: Refresh renewal forecast -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Refresh renewal forecastCustomer reporting·run_b7a1Salesforce → Internal tool → TableauCompleted31s3 of 3 completed" type="button" @click="openAction(&quot;Refresh renewal forecastCustomer reporting·run_b7a1Salesforce → Internal tool → TableauCompleted31s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Refresh renewal forecast</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Customer reporting
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_b7a1</span>
                            </span>
                            <span class="hidden sm:inline">Salesforce → Internal tool → Tableau</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">31s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">12:16</p>
                        <p class="mt-1 text-[10px]">29 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Support triage</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_a19c</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 6: Archive resolved tickets -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Archive resolved ticketsSupport triage·run_a19cZendesk → Internal toolCompleted18s3 of 3 completed" type="button" @click="openAction(&quot;Archive resolved ticketsSupport triage·run_a19cZendesk → Internal toolCompleted18s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Archive resolved tickets</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Support triage
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_a19c</span>
                            </span>
                            <span class="hidden sm:inline">Zendesk → Internal tool</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">18s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">11:58</p>
                        <p class="mt-1 text-[10px]">47 mins ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Purchase order review</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_f42b</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 7: Sync purchase order records -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Sync purchase order recordsPurchase order review·run_f42bCoupa → NetSuite → SlackFailed12s1 of 3 completed" type="button" @click="openAction(&quot;Sync purchase order recordsPurchase order review·run_f42bCoupa → NetSuite → SlackFailed12s1 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-error" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-error" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Sync purchase order records</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Purchase order review
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_f42b</span>
                            </span>
                            <span class="hidden sm:inline">Coupa → NetSuite → Slack</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Failed
                            <span class="text-muted tabular-nums">12s</span>
                          </span>
                          <span class="text-muted">1 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">11:45</p>
                        <p class="mt-1 text-[10px]">1 hour ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Customer reporting</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_02cd</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 8: Prepare weekly account digest -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Prepare weekly account digestCustomer reporting·run_02cdSalesforce → Internal tool → SlackCompleted54s3 of 3 completed" type="button" @click="openAction(&quot;Prepare weekly account digestCustomer reporting·run_02cdSalesforce → Internal tool → SlackCompleted54s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Prepare weekly account digest</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Customer reporting
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_02cd</span>
                            </span>
                            <span class="hidden sm:inline">Salesforce → Internal tool → Slack</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">54s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">10:32</p>
                        <p class="mt-1 text-[10px]">2 hours ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Support triage</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_d310</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 9: Route incoming support requests -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Route incoming support requestsSupport triage·run_d310Zendesk → Internal toolCompleted26s3 of 3 completed" type="button" @click="openAction(&quot;Route incoming support requestsSupport triage·run_d310Zendesk → Internal toolCompleted26s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Route incoming support requests</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Support triage
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_d310</span>
                            </span>
                            <span class="hidden sm:inline">Zendesk → Internal tool</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">26s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">09:14</p>
                        <p class="mt-1 text-[10px]">3 hours ago</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Purchase order review</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_2e17</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 10: Review vendor onboarding -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Review vendor onboardingPurchase order review·run_2e17Coupa → Internal tool → NetSuiteCompleted1m 12s3 of 3 completed" type="button" @click="openAction(&quot;Review vendor onboardingPurchase order review·run_2e17Coupa → Internal tool → NetSuiteCompleted1m 12s3 of 3 completed&quot;)">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Review vendor onboarding</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Purchase order review
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_2e17</span>
                            </span>
                            <span class="hidden sm:inline">Coupa → Internal tool → NetSuite</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">1m 12s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
                <li class="relative grid grid-cols-[1fr] gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <div class="text-muted flex items-center gap-2 pl-1 text-[11px] tabular-nums sm:items-start sm:justify-between sm:pt-4">
                    <div class="grid min-w-0 flex-1 grid-cols-[72px_minmax(0,1fr)] gap-3">
                      <div>
                        <p class="text-highlighted text-sm leading-none font-medium">16:20</p>
                        <p class="mt-1 text-[10px]">Yesterday</p>
                      </div>
                      <div class="hidden min-w-0 sm:block">
                        <p class="text-(--ui-text-highlighted)/80 truncate font-sans text-[11px] font-medium">Invoice reconciliation</p>
                        <p class="mt-0.5 truncate font-mono text-[10px]">run_62ca</p>
                      </div>
                    </div>
                  </div>
                  <!-- Card 11: Validate monthly billing export -->
                  <UCard class="overflow-hidden rounded-2xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border-(--ui-border)/60" :ui="{ body: 'contents' }">
                    <UButton color="neutral" variant="soft" class="focus-visible:ring-accented flex w-full items-start gap-3 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:outline-none sm:items-center bg-default hover:bg-(--ui-bg-muted)/20 rounded-2xl p-4 sm:p-5" aria-label="Validate monthly billing exportInvoice reconciliation·run_62caStripe → NetSuite → Internal toolCompleted38s3 of 3 completed" type="button" @click="exportCsv()">
                      <svg viewBox="0 0 32 32" class="size-8 shrink-0 text-success" width="100%" height="100%">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" fill="none" class="text-(--ui-border)" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(-90 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(30 16 16)" class="text-success" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="20.133333333333336 75.4" transform="rotate(150 16 16)" class="text-success" />
                        <path d="m11 16 3 3 7-7" stroke="currentColor" fill="none" stroke-width="1.8" />
                      </svg>
                      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div class="min-w-0">
                          <h2 class="text-sm leading-5 font-medium text-highlighted">Validate monthly billing export</h2>
                          <p class="text-muted mt-0.5 truncate text-xs">
                            <span class="sm:hidden">
                              Invoice reconciliation
                              <span class="mx-1.5">·</span>
                              <span class="font-mono text-[10px]">run_62ca</span>
                            </span>
                            <span class="hidden sm:inline">Stripe → NetSuite → Internal tool</span>
                          </p>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 text-[11px] sm:flex-col sm:items-end sm:gap-0.5">
                          <span class="flex items-center gap-1.5">
                            Completed
                            <span class="text-muted tabular-nums">38s</span>
                          </span>
                          <span class="text-muted">3 of 3 completed</span>
                        </div>
                      </div>
                      <UIcon name="i-lucide-chevron-down" class="text-muted mt-2 size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:mt-0" />
                    </UButton>
                  </UCard>
                </li>
              </ol>
            </div>
            <p class="text-muted mt-8 text-center text-xs">You’re all caught up for this period.</p>
          </div>
        </div>
      </div>
      <p class="sr-only" />
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
