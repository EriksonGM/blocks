<!-- Page: /project-management/project-list-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project List 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "search": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-list-4">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden">
          <header class="flex h-16 shrink-0 items-center gap-3 border-b px-4 sm:px-6 lg:px-8 border-default">
            <div class="grid flex-1 grid-cols-1">
              <UInput v-model="form.search" type="text" placeholder="Search" aria-label="Search projects" name="search" class="rounded-md md:text-sm col-start-1 row-start-1 block size-full pl-8 text-base outline-none sm:text-sm" :ui="{ base: 'h-full' }" />
              <UIcon name="i-lucide-search" class="text-muted pointer-events-none col-start-1 row-start-1 size-5 self-center" />
            </div>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-9 rounded-[6px]" aria-label="More actions" type="button" @click="openAction(&quot;More actions&quot;)">
              <UIcon name="i-lucide-ellipsis" class="size-5" />
              <span class="sr-only">More actions</span>
            </UButton>
          </header>
          <div class="grid min-h-0 flex-1 grid-cols-1 overflow-hidden xl:grid-cols-[minmax(0,1fr)_360px]">
            <main class="min-w-0 overflow-y-auto">
              <header class="bg-default sticky top-0 z-20 flex items-center justify-between border-b px-4 py-4 sm:px-6 sm:py-6 lg:px-8 border-default">
                <h1 class="text-highlighted text-base font-semibold text-highlighted">Projects</h1>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2 text-muted shrink-0 text-sm font-medium" aria-label="Sort by" type="button" @click="openAction(&quot;Sort by&quot;)">
                  Sort by
                  <UIcon name="i-lucide-chevrons-up-down" class="size-4" />
                </UButton>
              </header>
              <ul role="list" class="divide-y">
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8 bg-muted" aria-label="REV-241/Revenue Insights RevampConsolidate reporting, exception tracking, and approval notes into one operating surface for the weekly revenue review.Apr 12, 20267 issues" type="button" @click="openAction(&quot;REV-241/Revenue Insights RevampConsolidate reporting, exception tracking, and approval notes into one operating surface for the weekly revenue review.Apr 12, 20267 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-warning/10 text-warning dark:text-warning">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-241</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Revenue Insights Revamp</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Consolidate reporting, exception tracking, and approval notes into one operating surface for the weekly revenue review.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 12, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">7 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="ONB-118/Enterprise Onboarding FlowReduce activation time for new enterprise accounts with clearer handoffs, owner visibility, and unblock queues.Apr 11, 20267 issues" type="button" @click="openAction(&quot;ONB-118/Enterprise Onboarding FlowReduce activation time for new enterprise accounts with clearer handoffs, owner visibility, and unblock queues.Apr 11, 20267 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">ONB-118</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Enterprise Onboarding Flow</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Reduce activation time for new enterprise accounts with clearer handoffs, owner visibility, and unblock queues.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 11, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">7 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="CLM-084/Claims Resolution WorkspaceBring case intake, review steps, and escalation notes together so the support and finance teams stop working from separate trackers.Apr 10, 20266 issues" type="button" @click="openAction(&quot;CLM-084/Claims Resolution WorkspaceBring case intake, review steps, and escalation notes together so the support and finance teams stop working from separate trackers.Apr 10, 20266 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-muted text-muted">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">CLM-084</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Claims Resolution Workspace</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Bring case intake, review steps, and escalation notes together so the support and finance teams stop working from separate trackers.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 10, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">6 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="RTL-062/Retail Launch ReadinessCoordinate launch blockers, merchandising deadlines, and store feedback ahead of the summer retail rollout.Apr 9, 20266 issues" type="button" @click="openAction(&quot;RTL-062/Retail Launch ReadinessCoordinate launch blockers, merchandising deadlines, and store feedback ahead of the summer retail rollout.Apr 9, 20266 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">RTL-062</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Retail Launch Readiness</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Coordinate launch blockers, merchandising deadlines, and store feedback ahead of the summer retail rollout.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 9, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">6 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="MOB-092/Mobile Release TrainTrack release scope, QA sign-off, and ship-room notes across the next three mobile drops without losing ownership.Apr 8, 20266 issues" type="button" @click="openAction(&quot;MOB-092/Mobile Release TrainTrack release scope, QA sign-off, and ship-room notes across the next three mobile drops without losing ownership.Apr 8, 20266 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-warning/10 text-warning dark:text-warning">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">MOB-092</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Mobile Release Train</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Track release scope, QA sign-off, and ship-room notes across the next three mobile drops without losing ownership.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 8, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">6 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="INV-176/Inventory Accuracy AuditClose the gap between warehouse counts and storefront availability with a focused audit stream for the highest-variance SKUs.Apr 7, 20265 issues" type="button" @click="openAction(&quot;INV-176/Inventory Accuracy AuditClose the gap between warehouse counts and storefront availability with a focused audit stream for the highest-variance SKUs.Apr 7, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">INV-176</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Inventory Accuracy Audit</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Close the gap between warehouse counts and storefront availability with a focused audit stream for the highest-variance SKUs.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 7, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="KB-057/Knowledge Base MigrationMove support guides into the new publishing workflow with clean ownership, review checkpoints, and release-linked updates.Apr 6, 20265 issues" type="button" @click="openAction(&quot;KB-057/Knowledge Base MigrationMove support guides into the new publishing workflow with clean ownership, review checkpoints, and release-linked updates.Apr 6, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">KB-057</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Knowledge Base Migration</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Move support guides into the new publishing workflow with clean ownership, review checkpoints, and release-linked updates.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 6, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="SLA-203/Partner SLA TrackerCreate a shared tracker for partner response commitments, renewal risk, and the exceptions that need follow-up each week.Apr 5, 20265 issues" type="button" @click="openAction(&quot;SLA-203/Partner SLA TrackerCreate a shared tracker for partner response commitments, renewal risk, and the exceptions that need follow-up each week.Apr 5, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-muted text-muted">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">SLA-203</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Partner SLA Tracker</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Create a shared tracker for partner response commitments, renewal risk, and the exceptions that need follow-up each week.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 5, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="HIR-074/Hiring Pipeline CleanupStandardize interview stages, recruiter notes, and decision handoffs so open roles stop stalling between reviews.Apr 4, 20265 issues" type="button" @click="openAction(&quot;HIR-074/Hiring Pipeline CleanupStandardize interview stages, recruiter notes, and decision handoffs so open roles stop stalling between reviews.Apr 4, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">HIR-074</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Hiring Pipeline Cleanup</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Standardize interview stages, recruiter notes, and decision handoffs so open roles stop stalling between reviews.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 4, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="REN-133/Renewal Forecast ConsoleGive account teams one place to review upcoming renewals, pricing changes, and intervention plans before quarter close.Apr 3, 20265 issues" type="button" @click="openAction(&quot;REN-133/Renewal Forecast ConsoleGive account teams one place to review upcoming renewals, pricing changes, and intervention plans before quarter close.Apr 3, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-warning/10 text-warning dark:text-warning">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REN-133</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Renewal Forecast Console</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Give account teams one place to review upcoming renewals, pricing changes, and intervention plans before quarter close.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 3, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="FLD-119/Field Ops Dispatch BoardImprove scheduling and exception handling for field teams managing same-day service requests across priority regions.Apr 2, 20265 issues" type="button" @click="openAction(&quot;FLD-119/Field Ops Dispatch BoardImprove scheduling and exception handling for field teams managing same-day service requests across priority regions.Apr 2, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">FLD-119</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Field Ops Dispatch Board</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Improve scheduling and exception handling for field teams managing same-day service requests across priority regions.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 2, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
                <li>
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full min-w-0 items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 lg:px-8" aria-label="SUB-088/Subscription Save PlaysOrganize churn signals, outreach experiments, and hand-raise workflows for the accounts most likely to cancel next month.Apr 1, 20265 issues" type="button" @click="openAction(&quot;SUB-088/Subscription Save PlaysOrganize churn signals, outreach experiments, and hand-raise workflows for the accounts most likely to cancel next month.Apr 1, 20265 issues&quot;)">
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-3">
                        <span class="shrink-0 rounded-full p-1 bg-muted text-muted">
                          <span class="block size-2 rounded-full bg-current" />
                        </span>
                        <h2 class="text-highlighted flex min-w-0 items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">SUB-088</span>
                          <span class="text-muted shrink-0">/</span>
                          <span class="min-w-0 truncate">Subscription Save Plays</span>
                        </h2>
                      </div>
                      <div class="text-muted mt-3 flex min-w-0 items-center gap-2.5 text-xs">
                        <p class="truncate">Organize churn signals, outreach experiments, and hand-raise workflows for the accounts most likely to cancel next month.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Apr 1, 2026</p>
                      </div>
                    </div>
                    <span class="text-primary ring-primary/20 shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">5 issues</span>
                    <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                  </UButton>
                </li>
              </ul>
            </main>
            <aside class="bg-(--ui-bg-muted)/20 min-w-0 overflow-y-auto border-t xl:border-t-0 xl:border-l border-default">
              <div class="bg-default sticky top-0 z-20 border-b border-default">
                <header class="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
                  <h2 class="text-highlighted text-base font-semibold text-highlighted">Issues</h2>
                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline py-2 text-primary h-auto px-0 text-sm font-semibold" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
                    View all
                  </UButton>
                </header>
                <div class="border-t px-4 py-4 sm:px-6 border-default">
                  <div class="flex min-w-0 items-center gap-3">
                    <span class="bg-default text-muted flex size-10 shrink-0 items-center justify-center rounded-md border border-default">
                      <UIcon name="i-lucide-earth" class="size-5" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-highlighted truncate text-sm font-semibold text-highlighted">Revenue Insights Revamp</p>
                      <p class="text-muted truncate text-xs">3 members ·1/11 tasks closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul role="list" class="divide-y">
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-error/10 text-error dark:text-error">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-201</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Reconcile forecast deltas in weekly revenue view</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/40 dark:text-warning">In Progress</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Variance cells need reviewer notes before Friday export.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">18m ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-warning/10 text-warning dark:text-warning">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-202</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Add exception owner handoff state</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">Review</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Finance wants stale exceptions called out during review.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">46m ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-203</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Lock approval notes after close</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">Planned</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Readonly behavior should match the audit export.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">2h ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-warning/10 text-warning dark:text-warning">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-301</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Review acceptance criteria with project owner</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">Planned</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Confirm open scope and mark any dependency risk before planning.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">3h ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-error/10 text-error dark:text-error">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-302</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">QA edge cases for handoff states</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/40 dark:text-warning">In Progress</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Check empty, blocked, overdue, and reassigned states in the flow.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">5h ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-success/10 text-success dark:text-success">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-303</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Polish reviewer notes and activity copy</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">Review</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Tighten labels so the list remains scannable in compact mode.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex min-w-0 items-start gap-3">
                    <span class="mt-1 shrink-0 rounded-full p-1 bg-muted text-muted">
                      <span class="block size-2 rounded-full bg-current" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-start justify-between gap-2">
                        <h3 class="text-highlighted grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 text-sm font-semibold text-highlighted">
                          <span class="shrink-0">REV-304</span>
                          <span class="text-muted">/</span>
                          <span class="min-w-0 truncate">Add instrumentation for project timeline events</span>
                        </h3>
                        <span class="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium border-(--ui-bg-muted) bg-muted text-muted border-default">Backlog</span>
                      </div>
                      <div class="text-muted mt-2 flex min-w-0 items-center gap-2 text-xs">
                        <p class="min-w-0 truncate">Track status changes, owner updates, and late-stage review events.</p>
                        <span class="bg-(--ui-text-muted)/50 size-0.5 shrink-0 rounded-full" />
                        <p class="shrink-0 whitespace-nowrap">2d ago</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
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
