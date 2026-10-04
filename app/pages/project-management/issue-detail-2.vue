<!-- Page: /project-management/issue-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Detail 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "comment": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-detail-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted min-h-0 flex-1 overflow-y-auto">
          <div class="grid gap-8 px-4 py-5 sm:px-6 sm:py-7 xl:grid-cols-[minmax(0,1fr)_400px]">
            <main class="min-w-0">
              <div class="mx-auto max-w-[920px]">
                <div class="text-muted mb-4 flex items-center justify-between gap-3 text-sm">
                  <div class="flex min-w-0 items-center gap-2">
                    <span>Issues</span>
                    <span class="text-(--ui-border)">/</span>
                    <span class="text-highlighted font-medium">PM-284</span>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 shrink-0 rounded-md xl:hidden" aria-label="Open issue activity" type="button" @click="openAction(&quot;Open issue activity&quot;)">
                    <UIcon name="i-lucide-panel-right" class="size-4" />
                  </UButton>
                </div>
                <div class="mb-4 flex items-start gap-3 sm:mb-5 sm:gap-4">
                  <div class="bg-primary text-inverted flex size-8 shrink-0 items-center justify-center rounded-md sm:size-9">
                    <UIcon name="i-lucide-check" class="size-5" />
                  </div>
                  <h1 class="min-w-0 text-xl leading-tight font-semibold tracking-normal sm:text-2xl text-highlighted">Improve task assignment workflow for multi-team projects</h1>
                </div>
                <div class="mb-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-9 px-4 py-2 justify-between rounded-md sm:justify-center" aria-label="In Progress" type="button" @click="openAction(&quot;In Progress&quot;)">
                    In Progress
                    <UIcon name="i-lucide-chevron-down" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 justify-between rounded-md sm:justify-center" aria-label="High" type="button" @click="openAction(&quot;High&quot;)">
                    <UIcon name="i-lucide-upload" class="size-4" />
                    High
                    <UIcon name="i-lucide-chevron-down" class="size-4" />
                  </UButton>
                  <div class="col-span-2 flex items-center gap-2 sm:col-span-1 sm:contents">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md size-10" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-link-2" class="size-5" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md size-10" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-bookmark" class="size-5" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md size-10" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-5" />
                    </UButton>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-x-3 gap-y-4 border-y py-4 sm:grid-cols-2 2xl:grid-cols-4 border-default">
                  <!-- Card 1: AssigneeOlivia Rhye -->
                  <UCard class="min-w-0 rounded-md px-3 py-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-5 sm:py-0 2xl:border-r 2xl:last:border-r-0" :ui="{ body: 'contents' }">
                    <div class="text-muted mb-2 text-xs font-medium">Assignee</div>
                    <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <span class="truncate">Olivia Rhye</span>
                    </div>
                  </UCard>
                  <!-- Card 2: ReporterNoah Kim -->
                  <UCard class="min-w-0 rounded-md px-3 py-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-5 sm:py-0 2xl:border-r 2xl:last:border-r-0" :ui="{ body: 'contents' }">
                    <div class="text-muted mb-2 text-xs font-medium">Reporter</div>
                    <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Noah Kim" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                      <span class="truncate">Noah Kim</span>
                    </div>
                  </UCard>
                  <!-- Card 3: Due dateJun 6, 2025 -->
                  <UCard class="min-w-0 rounded-md px-3 py-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-5 sm:py-0 2xl:border-r 2xl:last:border-r-0" :ui="{ body: 'contents' }">
                    <div class="text-muted mb-2 text-xs font-medium">Due date</div>
                    <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                      <UIcon name="i-lucide-calendar-days" class="text-muted size-5" />
                      <span class="truncate">Jun 6, 2025</span>
                    </div>
                  </UCard>
                  <!-- Card 4: Estimate8 pts -->
                  <UCard class="min-w-0 rounded-md px-3 py-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-5 sm:py-0 2xl:border-r 2xl:last:border-r-0" :ui="{ body: 'contents' }">
                    <div class="text-muted mb-2 text-xs font-medium">Estimate</div>
                    <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                      <UIcon name="i-lucide-clock-3" class="text-muted size-5" />
                      <span class="truncate">8 pts</span>
                    </div>
                  </UCard>
                </div>
                <div class="grid grid-cols-2 gap-x-3 gap-y-4 py-4 sm:grid-cols-3 2xl:grid-cols-[1fr_1fr_1fr_1.55fr]">
                  <div class="min-w-0 px-1 sm:px-5">
                    <div class="text-muted mb-2 text-xs font-medium">Project</div>
                    <div class="flex min-w-0 items-center gap-2">
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                        <UIcon name="i-lucide-folder" class="mr-1.5 size-3.5" />
                        Phoenix Platform
                      </UBadge>
                    </div>
                  </div>
                  <div class="min-w-0 px-1 sm:px-5">
                    <div class="text-muted mb-2 text-xs font-medium">Team</div>
                    <div class="flex min-w-0 items-center gap-2">
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                        <UIcon name="i-lucide-users" class="mr-1.5 size-3.5" />
                        Platform Team
                      </UBadge>
                    </div>
                  </div>
                  <div class="min-w-0 px-1 sm:px-5">
                    <div class="text-muted mb-2 text-xs font-medium">Cycle</div>
                    <div class="flex min-w-0 items-center gap-2">
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-primary/10 text-primary">
                        <UIcon name="i-lucide-circle" class="mr-1.5 size-3.5" />
                        Sprint 24
                      </UBadge>
                    </div>
                  </div>
                  <div class="col-span-2 min-w-0 px-1 sm:col-span-3 sm:px-5 2xl:col-span-1">
                    <div class="text-muted mb-2 text-xs font-medium">Labels</div>
                    <div class="flex flex-wrap items-center gap-2">
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-primary/10 text-primary">
                        workflow
                      </UBadge>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                        assignment
                      </UBadge>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                        ux
                      </UBadge>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="text-muted mt-3 mb-6 flex flex-wrap items-center gap-3 text-sm">
                  <span>Created May 14, 2025</span>
                  <span>•</span>
                  <span>Updated May 20, 2025 (2 days ago)</span>
                </div>
                <section class="mb-6 max-w-[780px]">
                  <h2 class="mb-3 text-base font-semibold text-highlighted">Description</h2>
                  <div class="space-y-3 text-sm leading-6">
                    <p>Currently, assigning tasks across multiple teams in large projects is manual and error-prone. Project managers need better visibility and control when distributing work across teams.</p>
                    <p>This improvement will streamline the assignment flow, reduce context switching, and ensure the right people are working on the right tasks.</p>
                    <ul class="list-disc space-y-1 pl-6">
                      <li>Add team-based assignee suggestions</li>
                      <li>Allow bulk assignment with workload awareness</li>
                      <li>Show assignment rules and conflicts in real time</li>
                      <li>Improve permissions and assignment validation</li>
                    </ul>
                    <p>This will directly impact planning accuracy and delivery velocity in multi-team environments.</p>
                  </div>
                </section>
                <section class="mb-7 border-y py-6 border-default">
                  <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div class="flex min-w-0 flex-1 flex-wrap items-center gap-3">
                      <h2 class="text-base font-semibold text-highlighted">Subtasks</h2>
                      <span class="text-muted text-sm">2 / 5</span>
                      <div class="bg-elevated h-1.5 min-w-28 flex-1 overflow-hidden rounded-full sm:w-52 sm:flex-none">
                        <div class="bg-primary h-full rounded-full transition-[width]" style="width:40%" />
                      </div>
                      <span class="text-muted text-sm">40%</span>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 px-3 text-xs rounded-md" aria-label="Add subtask" type="button" @click="openAction(&quot;Add subtask&quot;)">
                      <UIcon name="i-lucide-plus" class="size-4" />
                      Add subtask
                    </UButton>
                  </div>
                  <div class="flex flex-col">
                    <div class="grid min-h-9 grid-cols-[24px_minmax(0,1fr)] items-center gap-2 border-b last:border-b-0 md:grid-cols-[24px_minmax(0,1fr)_36px_104px_116px] border-default">
                      <UButton color="primary" variant="solid" class="flex size-5 items-center justify-center rounded border border-primary bg-primary text-inverted" aria-label="Mark incomplete: Design assignment flow and interactions" type="button" @click="openAction(&quot;Mark incomplete: Design assignment flow and interactions&quot;)">
                        <UIcon name="i-lucide-check" class="size-3.5" />
                      </UButton>
                      <span class="truncate text-sm text-muted line-through">Design assignment flow and interactions</span>
                      <div class="hidden justify-self-end md:block">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="hidden md:block">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">Done</div>
                      </div>
                      <span class="text-muted hidden text-sm md:block">May 16, 2025</span>
                    </div>
                    <div class="grid min-h-9 grid-cols-[24px_minmax(0,1fr)] items-center gap-2 border-b last:border-b-0 md:grid-cols-[24px_minmax(0,1fr)_36px_104px_116px] border-default">
                      <UButton color="primary" variant="solid" class="flex size-5 items-center justify-center rounded border border-primary bg-primary text-inverted" aria-label="Mark incomplete: Build team-based assignee suggestions" type="button" @click="openAction(&quot;Mark incomplete: Build team-based assignee suggestions&quot;)">
                        <UIcon name="i-lucide-check" class="size-3.5" />
                      </UButton>
                      <span class="truncate text-sm text-muted line-through">Build team-based assignee suggestions</span>
                      <div class="hidden justify-self-end md:block">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Noah Kim" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="hidden md:block">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">Done</div>
                      </div>
                      <span class="text-muted hidden text-sm md:block">May 18, 2025</span>
                    </div>
                    <div class="grid min-h-9 grid-cols-[24px_minmax(0,1fr)] items-center gap-2 border-b last:border-b-0 md:grid-cols-[24px_minmax(0,1fr)_36px_104px_116px] border-default">
                      <UButton color="neutral" variant="outline" class="flex size-5 items-center justify-center rounded border border-default bg-default" aria-label="Mark complete: Implement bulk assignment API" type="button" @click="openAction(&quot;Mark complete: Implement bulk assignment API&quot;)" />
                      <span class="truncate text-sm">Implement bulk assignment API</span>
                      <div class="hidden justify-self-end md:block">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Emma Hall" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="hidden md:block">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">In Progress</div>
                      </div>
                      <span class="text-muted hidden text-sm md:block">May 29, 2025</span>
                    </div>
                    <div class="grid min-h-9 grid-cols-[24px_minmax(0,1fr)] items-center gap-2 border-b last:border-b-0 md:grid-cols-[24px_minmax(0,1fr)_36px_104px_116px] border-default">
                      <UButton color="neutral" variant="outline" class="flex size-5 items-center justify-center rounded border border-default bg-default" aria-label="Mark complete: Add workload awareness and capacity checks" type="button" @click="openAction(&quot;Mark complete: Add workload awareness and capacity checks&quot;)" />
                      <span class="truncate text-sm">Add workload awareness and capacity checks</span>
                      <div class="hidden justify-self-end md:block">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Liam Patel" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="hidden md:block">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">To Do</div>
                      </div>
                      <span class="text-muted hidden text-sm md:block">Jun 2, 2025</span>
                    </div>
                    <div class="grid min-h-9 grid-cols-[24px_minmax(0,1fr)] items-center gap-2 border-b last:border-b-0 md:grid-cols-[24px_minmax(0,1fr)_36px_104px_116px] border-default">
                      <UButton color="neutral" variant="outline" class="flex size-5 items-center justify-center rounded border border-default bg-default" aria-label="Mark complete: Write tests and update documentation" type="button" @click="openAction(&quot;Mark complete: Write tests and update documentation&quot;)" />
                      <span class="truncate text-sm">Write tests and update documentation</span>
                      <div class="hidden justify-self-end md:block">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Sofia Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="hidden md:block">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">To Do</div>
                      </div>
                      <span class="text-muted hidden text-sm md:block">Jun 5, 2025</span>
                    </div>
                  </div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs mt-3 rounded-md px-1" aria-label="Add subtask" type="button" @click="openAction(&quot;Add subtask&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add subtask
                  </UButton>
                </section>
                <section class="pb-12">
                  <div class="mb-5 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <h2 class="text-base font-semibold text-highlighted">Comments</h2>
                      <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">3</div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 px-3 text-xs rounded-md" aria-label="Oldest" type="button" @click="openAction(&quot;Oldest&quot;)">
                      Oldest
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                  </div>
                  <ol class="space-y-6">
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-6">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                        <div class="bg-default ring-default size-1.5 rounded-full ring-1" />
                      </div>
                      <p class="text-muted min-w-0 flex-auto py-0.5 text-sm leading-5">
                        <span class="text-highlighted font-medium">Olivia Rhye</span>
                        created the issue.
                      </p>
                      <time class="text-muted hidden shrink-0 py-0.5 text-sm leading-5 sm:block">May 14, 2025</time>
                    </li>
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-6">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                        <div class="bg-default ring-default size-1.5 rounded-full ring-1" />
                      </div>
                      <p class="text-muted min-w-0 flex-auto py-0.5 text-sm leading-5">
                        <span class="text-highlighted font-medium">Olivia Rhye</span>
                        updated the issue.
                      </p>
                      <time class="text-muted hidden shrink-0 py-0.5 text-sm leading-5 sm:block">May 15, 2025</time>
                    </li>
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-6">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                        <div class="bg-default ring-default size-1.5 rounded-full ring-1" />
                      </div>
                      <p class="text-muted min-w-0 flex-auto py-0.5 text-sm leading-5">
                        <span class="text-highlighted font-medium">Noah Kim</span>
                        assigned the issue.
                      </p>
                      <time class="text-muted hidden shrink-0 py-0.5 text-sm leading-5 sm:block">May 15, 2025</time>
                    </li>
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-6">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative mt-3 flex size-6 flex-none items-center justify-center">
                        <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                          <img class="aspect-square h-full w-full" alt="Noah Kim" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                      </div>
                      <div class="flex-auto rounded-md border p-3 border-default">
                        <div class="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-x-4">
                          <div class="text-muted text-sm">
                            <span class="text-highlighted font-medium">Noah Kim</span>
                            commented
                          </div>
                          <time class="text-muted shrink-0 text-sm">May 15, 2025 at 10:24 AM</time>
                        </div>
                        <p class="text-muted mt-1 text-sm leading-6">Love this direction. For bulk assignment, should we consider team capacity thresholds?</p>
                      </div>
                    </li>
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-6">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                        <div class="bg-default ring-default size-1.5 rounded-full ring-1" />
                      </div>
                      <p class="text-muted min-w-0 flex-auto py-0.5 text-sm leading-5">
                        <span class="text-highlighted font-medium">Olivia Rhye</span>
                        viewed the issue.
                      </p>
                      <time class="text-muted hidden shrink-0 py-0.5 text-sm leading-5 sm:block">May 15, 2025 at 11:02 AM</time>
                    </li>
                    <li class="relative flex gap-x-4">
                      <div class="absolute top-0 left-0 flex w-6 justify-center h-10">
                        <div class="bg-(--ui-border) w-px" />
                      </div>
                      <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                        <UIcon name="i-lucide-check" class="bg-primary text-inverted size-6 rounded-full p-1" />
                      </div>
                      <p class="text-muted min-w-0 flex-auto py-0.5 text-sm leading-5">
                        <span class="text-highlighted font-medium">Liam Patel</span>
                        completed the issue.
                      </p>
                      <time class="text-muted hidden shrink-0 py-0.5 text-sm leading-5 sm:block">May 16, 2025 at 9:18 AM</time>
                    </li>
                  </ol>
                  <div class="mt-6 flex gap-x-3">
                    <div class="flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                    </div>
                    <!-- Form: controls and draft state are declared in this page -->
                    <UForm :state="form" @submit="saveForm" class="relative flex-auto">
                      <div class="focus-within:ring-accented overflow-hidden rounded-lg border pb-12 focus-within:ring-2 border-default">
                        <label for="issue-comment" class="sr-only">Add your comment</label>
                        <UTextarea v-model="form.comment" :rows="4" placeholder="Add your comment..." name="comment" id="issue-comment" class="block w-full resize-none text-sm leading-6 outline-none" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
                        <div class="text-muted flex items-center gap-5">
                          <UButton color="neutral" variant="ghost" class="hover:text-highlighted -m-2.5 flex size-10 items-center justify-center rounded-full" aria-label="Attach a file" type="button" @click="openAction(&quot;Attach a file&quot;)">
                            <UIcon name="i-lucide-paperclip" class="size-5" />
                            <span class="sr-only">Attach a file</span>
                          </UButton>
                          <UButton color="neutral" variant="ghost" class="hover:text-highlighted -m-2.5 flex size-10 items-center justify-center rounded-full" aria-label="Add your mood" type="button" @click="openAction(&quot;Add your mood&quot;)">
                            <UIcon name="i-lucide-smile-plus" class="size-5" />
                            <span class="sr-only">Add your mood</span>
                          </UButton>
                        </div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Comment" type="submit">
                          Comment
                        </UButton>
                      </div>
                    </UForm>
                  </div>
                </section>
              </div>
            </main>
            <aside class="px-5 xl:border-l xl:px-6 hidden xl:block border-default">
              <section class="border-b pb-6 border-default">
                <div class="mb-5 flex items-center justify-between gap-4">
                  <h2 class="text-lg font-semibold text-highlighted">Activity</h2>
                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-auto p-0" aria-label="View full timeline" type="button" @click="openAction(&quot;View full timeline&quot;)">
                    View full timeline
                  </UButton>
                </div>
                <ol class="space-y-5">
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-5">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                      <div class="bg-default ring-default size-2 rounded-full ring-2" />
                    </div>
                    <div class="flex-auto py-0.5 text-sm font-semibold">May 20, 2025</div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-5">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative mt-1 flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-auto">
                      <div class="flex justify-between gap-x-3 text-sm">
                        <div class="min-w-0">
                          <span class="font-medium">Olivia Rhye</span>
                          <span>changed status</span>
                        </div>
                        <time class="text-muted shrink-0">2:30 PM</time>
                      </div>
                      <div class="mt-2 flex flex-wrap items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                          To Do
                        </UBadge>
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-primary/10 text-primary">
                          In Progress
                        </UBadge>
                      </div>
                    </div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-5">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative mt-1 flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-auto">
                      <div class="flex justify-between gap-x-3 text-sm">
                        <div class="min-w-0">
                          <span class="font-medium">Olivia Rhye</span>
                          <span>updated labels</span>
                        </div>
                        <time class="text-muted shrink-0">2:28 PM</time>
                      </div>
                      <div class="mt-2 flex flex-wrap items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                          workflow
                        </UBadge>
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-primary/10 text-primary">
                          assignment
                        </UBadge>
                      </div>
                    </div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center h-6">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative mt-1 flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Noah Kim" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-auto">
                      <div class="flex justify-between gap-x-3 text-sm">
                        <div class="min-w-0">
                          <span class="font-medium">Noah Kim</span>
                          <span>added a comment</span>
                        </div>
                        <time class="text-muted shrink-0">10:24 AM</time>
                      </div>
                    </div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-5">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                      <div class="bg-default ring-default size-2 rounded-full ring-2" />
                    </div>
                    <div class="flex-auto py-0.5 text-sm font-semibold">May 18, 2025</div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center h-6">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative mt-1 flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Noah Kim" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-auto">
                      <div class="flex justify-between gap-x-3 text-sm">
                        <div class="min-w-0">
                          <span class="font-medium">Noah Kim</span>
                          <span>moved subtask</span>
                          <div class="text-muted mt-1 leading-5">Build team-based assignee suggestions</div>
                        </div>
                        <time class="text-muted shrink-0">4:15 PM</time>
                      </div>
                      <div class="mt-2 flex flex-wrap items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-elevated text-default">
                          To Do
                        </UBadge>
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center rounded-md px-2 text-xs font-medium bg-primary/10 text-primary">
                          Done
                        </UBadge>
                      </div>
                    </div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center -bottom-5">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative flex size-6 flex-none items-center justify-center">
                      <div class="bg-default ring-default size-2 rounded-full ring-2" />
                    </div>
                    <div class="flex-auto py-0.5 text-sm font-semibold">May 16, 2025</div>
                  </li>
                  <li class="relative flex gap-x-4">
                    <div class="absolute top-0 left-0 flex w-6 justify-center h-6">
                      <div class="bg-(--ui-border) w-px" />
                    </div>
                    <div class="bg-default relative mt-1 flex size-6 flex-none items-center justify-center">
                      <span class="relative flex overflow-hidden rounded-full shrink-0 size-6">
                        <img class="aspect-square h-full w-full" alt="Olivia Rhye" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-auto">
                      <div class="flex justify-between gap-x-3 text-sm">
                        <div class="min-w-0">
                          <span class="font-medium">Olivia Rhye</span>
                          <span>created the issue</span>
                        </div>
                        <time class="text-muted shrink-0">9:41 AM</time>
                      </div>
                    </div>
                  </li>
                </ol>
              </section>
              <section class="border-b py-6 border-default">
                <div class="mb-4 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <h2 class="text-lg font-semibold text-highlighted">Attachments</h2>
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">3</div>
                  </div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-plus" class="size-5" />
                  </UButton>
                </div>
                <div class="space-y-3">
                  <div class="grid grid-cols-[40px_minmax(0,1fr)_28px] items-center gap-3">
                    <div class="bg-elevated flex size-10 items-center justify-center rounded-md border border-default">
                      <UIcon name="i-lucide-file-text" class="text-primary size-5" />
                    </div>
                    <div class="min-w-0">
                      <div class="truncate text-sm font-medium">assignment-flow-spec.pdf</div>
                      <div class="text-muted text-sm">
                        PDF
                        <span class="px-1">•</span>
                        1.2 MB
                      </div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-download" class="size-4" />
                    </UButton>
                  </div>
                  <div class="grid grid-cols-[40px_minmax(0,1fr)_28px] items-center gap-3">
                    <div class="bg-elevated flex size-10 items-center justify-center rounded-md border border-default">
                      <UIcon name="i-lucide-upload" class="text-primary size-5" />
                    </div>
                    <div class="min-w-0">
                      <div class="truncate text-sm font-medium">assignment-mockups.sketch</div>
                      <div class="text-muted text-sm">
                        Sketch
                        <span class="px-1">•</span>
                        3.4 MB
                      </div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-download" class="size-4" />
                    </UButton>
                  </div>
                  <div class="grid grid-cols-[40px_minmax(0,1fr)_28px] items-center gap-3">
                    <div class="bg-elevated flex size-10 items-center justify-center rounded-md border border-default">
                      <UIcon name="i-lucide-file-spreadsheet" class="text-primary size-5" />
                    </div>
                    <div class="min-w-0">
                      <div class="truncate text-sm font-medium">team-capacity-analysis.xlsx</div>
                      <div class="text-muted text-sm">
                        XLSX
                        <span class="px-1">•</span>
                        48 KB
                      </div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-download" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </section>
              <section class="py-6">
                <div class="mb-4 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <h2 class="text-lg font-semibold text-highlighted">Linked issues</h2>
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-xs font-medium border-default">2</div>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 px-3 text-xs rounded-md" aria-label="Link issue" type="button" @click="openAction(&quot;Link issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Link issue
                  </UButton>
                </div>
                <div class="space-y-4">
                  <div class="grid grid-cols-[64px_minmax(0,1fr)_92px] items-center gap-3">
                    <span class="text-muted font-mono text-xs font-medium tracking-normal">PM-210</span>
                    <span class="truncate text-sm">Team workload visibility dashboard</span>
                    <span class="justify-self-end rounded-md px-2 py-1 text-xs font-medium bg-elevated text-default">In Progress</span>
                  </div>
                  <div class="grid grid-cols-[64px_minmax(0,1fr)_92px] items-center gap-3">
                    <span class="text-muted font-mono text-xs font-medium tracking-normal">PM-197</span>
                    <span class="truncate text-sm">Role-based permissions overhaul</span>
                    <span class="justify-self-end rounded-md px-2 py-1 text-xs font-medium bg-primary/10 text-primary">Done</span>
                  </div>
                </div>
              </section>
            </aside>
          </div>
          <div class="fixed right-4 bottom-5 z-30 flex items-center gap-2 sm:right-7 sm:bottom-6 sm:gap-3">
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-md px-4 shadow-lg sm:h-11 sm:px-5" aria-label="Edit issue" type="button" @click="openAction(&quot;Edit issue&quot;)">
              <UIcon name="i-lucide-pencil" class="size-5" />
              Edit issue
            </UButton>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default rounded-md bg-default size-10 shadow-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
              <UIcon name="i-lucide-ellipsis" class="size-5" />
            </UButton>
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
