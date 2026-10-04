<!-- Page: /project-management/issue-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue List 1 · Blocks Admin" })

const toast = useToast()

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <div class="border-b border-default">
            <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
              <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                <div class="flex shrink-0 items-center gap-2 pr-1">
                  <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-folder-kanban" class="size-4" />
                  </div>
                  <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                </div>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-8 shrink-0 rounded-md" aria-label="Project options" type="button" @click="openAction(&quot;Project options&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                </UButton>
                <div class="mx-4 h-5 w-px shrink-0 border-l border-default" />
                <div class="flex items-center gap-1">
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors bg-muted text-highlighted" aria-label="Issues" type="button" @click="openAction(&quot;Issues&quot;)">
                    Issues
                    <span class="bg-(--ui-text-highlighted) absolute bottom-[-14px] left-1/2 h-0.5 w-[80%] -translate-x-1/2 rounded-t-md" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Cycles" type="button" @click="openAction(&quot;Cycles&quot;)">
                    Cycles
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Modules" type="button" @click="openAction(&quot;Modules&quot;)">
                    Modules
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Views" type="button" @click="openAction(&quot;Views&quot;)">
                    Views
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Pages" type="button" @click="openAction(&quot;Pages&quot;)">
                    Pages
                  </UButton>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Filter issues" type="button" @click="openAction(&quot;Filter issues&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-8 shrink-0 gap-1.5" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Add issue
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex min-h-11 items-center justify-between border-b px-4 py-1.5 sm:px-6 border-default">
            <div class="text-highlighted text-[14px] font-semibold">8 Issues</div>
            <div class="text-muted text-[13px] font-medium">Grouped by status</div>
          </div>
          <div class="flex-1 overflow-auto">
            <section class="border-b last:border-b-0 border-default">
              <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 bg-default dark:bg-(--ui-bg)/60 border-default">
                <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted dark:text-default" aria-label="Backlog2" type="button" @click="openAction(&quot;Backlog2&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-full border border-accented text-dimmed dark:border-default dark:text-dimmed">
                    <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                  </span>
                  <span>Backlog</span>
                  <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium dark:bg-default">2</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Backlog" type="button" @click="openAction(&quot;Add issue to Backlog&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
              <div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-104</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Document drag and resize behavior</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Blocked</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>Blocked</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-default dark:text-default">
                      <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                      <span>Backlog</span>
                    </UBadge>
                    <span aria-label="Assign issue" class="text-muted inline-flex size-7 items-center justify-center rounded-md border border-default bg-default dark:border-default dark:bg-default opacity-0 transition-opacity group-hover:opacity-100">
                      <UIcon name="i-lucide-users" class="size-3.5" />
                    </span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Document drag and resize behavior" type="button" @click="openAction(&quot;More actions for Document drag and resize behavior&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-108</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Prepare issue calendar follow-up screen</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>No owner yet</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-default dark:text-default">
                      <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                      <span>Backlog</span>
                    </UBadge>
                    <span aria-label="Assign issue" class="text-muted inline-flex size-7 items-center justify-center rounded-md border border-default bg-default dark:border-default dark:bg-default opacity-0 transition-opacity group-hover:opacity-100">
                      <UIcon name="i-lucide-users" class="size-3.5" />
                    </span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Prepare issue calendar follow-up screen" type="button" @click="openAction(&quot;More actions for Prepare issue calendar follow-up screen&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6 dark:bg-(--ui-bg)/40" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
                New issue
              </UButton>
            </section>
            <section class="border-b last:border-b-0 border-default">
              <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 bg-default dark:bg-(--ui-bg)/60 border-default">
                <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted dark:text-default" aria-label="Todo2" type="button" @click="openAction(&quot;Todo2&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-full border border-info/20 text-info dark:border-info dark:text-info">
                    <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                  </span>
                  <span>Todo</span>
                  <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium dark:bg-default">2</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Todo" type="button" @click="openAction(&quot;Add issue to Todo&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
              <div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-102</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Review gantt interaction states</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>1 sub-issue</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">
                      <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                      <span>Todo</span>
                    </UBadge>
                    <span aria-label="Assign issue" class="text-muted inline-flex size-7 items-center justify-center rounded-md border border-default bg-default dark:border-default dark:bg-default opacity-0 transition-opacity group-hover:opacity-100">
                      <UIcon name="i-lucide-users" class="size-3.5" />
                    </span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Review gantt interaction states" type="button" @click="openAction(&quot;More actions for Review gantt interaction states&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-105</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Create empty and loading timeline states</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>2 sub-issues</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">
                      <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                      <span>Todo</span>
                    </UBadge>
                    <span aria-label="Assign issue" class="text-muted inline-flex size-7 items-center justify-center rounded-md border border-default bg-default dark:border-default dark:bg-default opacity-0 transition-opacity group-hover:opacity-100">
                      <UIcon name="i-lucide-users" class="size-3.5" />
                    </span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Create empty and loading timeline states" type="button" @click="openAction(&quot;More actions for Create empty and loading timeline states&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6 dark:bg-(--ui-bg)/40" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
                New issue
              </UButton>
            </section>
            <section class="border-b last:border-b-0 border-default">
              <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 bg-default dark:bg-(--ui-bg)/60 border-default">
                <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted dark:text-default" aria-label="In Progress1" type="button" @click="openAction(&quot;In Progress1&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-full border border-warning/20 text-warning dark:border-warning dark:text-warning">
                    <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                  </span>
                  <span>In Progress</span>
                  <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium dark:bg-default">1</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to In Progress" type="button" @click="openAction(&quot;Add issue to In Progress&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
              <div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-101</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Finalize issue timeline architecture</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated 2h ago</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>3 sub-issues</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/40 dark:text-warning">
                      <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                      <span>In Progress</span>
                    </UBadge>
                    <div class="inline-flex h-7 items-center gap-2 rounded-md border border-default bg-default px-2 dark:border-default dark:bg-default">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-5">
                        <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                      </span>
                      <span class="hidden text-[12px] font-medium text-toned xl:inline dark:text-default">Nina Oliver</span>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Finalize issue timeline architecture" type="button" @click="openAction(&quot;More actions for Finalize issue timeline architecture&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6 dark:bg-(--ui-bg)/40" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
                New issue
              </UButton>
            </section>
            <section class="border-b last:border-b-0 border-default">
              <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 bg-default dark:bg-(--ui-bg)/60 border-default">
                <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted dark:text-default" aria-label="Review2" type="button" @click="openAction(&quot;Review2&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-full border border-secondary/20 text-secondary dark:border-secondary dark:text-secondary">
                    <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                  </span>
                  <span>Review</span>
                  <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium dark:bg-default">2</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Review" type="button" @click="openAction(&quot;Add issue to Review&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
              <div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-103</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Sync issue filters with project views</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated yesterday</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>4 sub-issues</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">
                      <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                      <span>Review</span>
                    </UBadge>
                    <div class="inline-flex h-7 items-center gap-2 rounded-md border border-default bg-default px-2 dark:border-default dark:bg-default">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-5">
                        <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                      </span>
                      <span class="hidden text-[12px] font-medium text-toned xl:inline dark:text-default">Kai Young</span>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Sync issue filters with project views" type="button" @click="openAction(&quot;More actions for Sync issue filters with project views&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-107</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Polish the quarter view density</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>2 sub-issues</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">
                      <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                      <span>Review</span>
                    </UBadge>
                    <div class="inline-flex h-7 items-center gap-2 rounded-md border border-default bg-default px-2 dark:border-default dark:bg-default">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-5">
                        <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <span class="hidden text-[12px] font-medium text-toned xl:inline dark:text-default">Ava Reed</span>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Polish the quarter view density" type="button" @click="openAction(&quot;More actions for Polish the quarter view density&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6 dark:bg-(--ui-bg)/40" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
                New issue
              </UButton>
            </section>
            <section class="border-b last:border-b-0 border-default">
              <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 bg-default dark:bg-(--ui-bg)/60 border-default">
                <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted dark:text-default" aria-label="Done1" type="button" @click="openAction(&quot;Done1&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-full border border-success/20 text-success dark:border-success dark:text-success">
                    <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                  </span>
                  <span>Done</span>
                  <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium dark:bg-default">1</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Done" type="button" @click="openAction(&quot;Add issue to Done&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
              <div>
                <div class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                  <div class="min-w-0">
                    <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-106</p>
                  </div>
                  <div class="min-w-0 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Add mock dependencies and handoff notes</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Closed today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">low priority</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>1 sub-issue</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/40 dark:text-success">
                      <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                      <span>Done</span>
                    </UBadge>
                    <div class="inline-flex h-7 items-center gap-2 rounded-md border border-default bg-default px-2 dark:border-default dark:bg-default">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-5">
                        <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                      </span>
                      <span class="hidden text-[12px] font-medium text-toned xl:inline dark:text-default">Lena Moss</span>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md opacity-70 transition-opacity group-hover:opacity-100" aria-label="More actions for Add mock dependencies and handoff notes" type="button" @click="openAction(&quot;More actions for Add mock dependencies and handoff notes&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6 dark:bg-(--ui-bg)/40" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                <UIcon name="i-lucide-plus" class="size-3.5" />
                New issue
              </UButton>
            </section>
          </div>
        </main>
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
