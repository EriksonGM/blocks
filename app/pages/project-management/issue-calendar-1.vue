<!-- Page: /project-management/issue-calendar-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Calendar 1 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-calendar-1">
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
          <div class="flex min-h-14 items-center justify-between gap-3 border-b px-4 sm:px-6 border-default">
            <div class="flex min-w-0 items-center gap-2">
              <div class="text-highlighted shrink-0 text-[18px] font-semibold">April 2026</div>
              <div class="flex items-center gap-1">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Previous range" type="button" @click="openAction(&quot;Previous range&quot;)">
                  <UIcon name="i-lucide-chevron-left" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Next range" type="button" @click="openAction(&quot;Next range&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </UButton>
              </div>
            </div>
            <div class="flex shrink-0 items-center gap-2">
              <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium capitalize transition-colors bg-muted text-highlighted" aria-label="month" type="button" @click="openAction(&quot;month&quot;)">
                month
              </UButton>
              <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium capitalize transition-colors" aria-label="week" type="button" @click="openAction(&quot;week&quot;)">
                week
              </UButton>
              <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors" aria-label="Today" type="button" @click="openAction(&quot;Today&quot;)">
                Today
              </UButton>
            </div>
          </div>
          <div class="flex-1 overflow-auto">
            <div class="grid grid-cols-7 border-b bg-(--ui-bg)/80 dark:bg-(--ui-bg)/60 border-default">
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Mon</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Tue</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Wed</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Thu</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Fri</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Sat</div>
              <div class="flex h-12 items-center justify-end border-r px-4 text-[13px] font-medium text-default last:border-r-0 dark:text-default border-default">Sun</div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="grid min-h-[8.75rem] grid-cols-7 divide-x">
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-muted">
                      <span>30</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col px-2 pb-2 bg-(--ui-bg)/50 dark:bg-(--ui-bg)/80">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-muted">
                      <span>31</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col px-2 pb-2 bg-(--ui-bg)/50 dark:bg-(--ui-bg)/80">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span class="text-muted">Apr</span>
                      <span>1</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>2</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>3</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>4</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>5</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid min-h-[8.75rem] grid-cols-7 divide-x">
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>6</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-info/90 bg-info/60 text-info dark:border-info dark:bg-info/25 dark:text-info hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Review gantt interaction states" aria-label="RFC-102Review gantt interaction states" type="button" @click="openAction(&quot;RFC-102Review gantt interaction states&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-info dark:bg-info" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-102</span>
                          <span class="mx-1" />
                          <span>Review gantt interaction states</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>7</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-success/90 bg-success/60 text-success dark:border-success dark:bg-success/25 dark:text-success hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Add mock dependencies and handoff notes" aria-label="RFC-106Add mock dependencies and handoff notes" type="button" @click="openAction(&quot;RFC-106Add mock dependencies and handoff notes&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-success dark:bg-success" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-106</span>
                          <span class="mx-1" />
                          <span>Add mock dependencies and handoff notes</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>8</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-secondary/90 bg-secondary/60 text-secondary dark:border-secondary dark:bg-secondary/25 dark:text-secondary hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Polish the quarter view density" aria-label="RFC-107Polish the quarter view density" type="button" @click="openAction(&quot;RFC-107Polish the quarter view density&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-secondary dark:bg-secondary" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-107</span>
                          <span class="mx-1" />
                          <span>Polish the quarter view density</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>9</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>10</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-warning/90 bg-warning/60 text-warning dark:border-warning dark:bg-warning/25 dark:text-warning hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Finalize issue timeline architecture" aria-label="RFC-101Finalize issue timeline architecture" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architecture&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-warning dark:bg-warning" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-101</span>
                          <span class="mx-1" />
                          <span>Finalize issue timeline architecture</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>11</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>12</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid min-h-[8.75rem] grid-cols-7 divide-x">
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>13</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>14</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>15</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <UBadge color="neutral" variant="subtle" class="bg-primary text-inverted inline-flex size-6 items-center justify-center rounded-full text-[11px] font-semibold">
                        16
                      </UBadge>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-secondary/90 bg-secondary/60 text-secondary dark:border-secondary dark:bg-secondary/25 dark:text-secondary hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Sync issue filters with project views" aria-label="RFC-103Sync issue filters with project views" type="button" @click="openAction(&quot;RFC-103Sync issue filters with project views&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-secondary dark:bg-secondary" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-103</span>
                          <span class="mx-1" />
                          <span>Sync issue filters with project views</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>17</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>18</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>19</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid min-h-[8.75rem] grid-cols-7 divide-x">
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>20</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>21</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1">
                      <UButton color="neutral" variant="outline" class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md border px-2 text-left text-[12px] font-medium shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition border-info/90 bg-info/60 text-info dark:border-info dark:bg-info/25 dark:text-info hover:border-accented hover:bg-default dark:hover:border-default dark:hover:bg-default" title="Create empty and loading timeline states" aria-label="RFC-105Create empty and loading timeline states" type="button" @click="openAction(&quot;RFC-105Create empty and loading timeline states&quot;)">
                        <span class="h-4 w-0.5 shrink-0 rounded-full bg-info dark:bg-info" />
                        <span class="min-w-0 truncate">
                          <span class="text-muted dark:text-muted">RFC-105</span>
                          <span class="mx-1" />
                          <span>Create empty and loading timeline states</span>
                        </span>
                      </UButton>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>22</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>23</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>24</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>25</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>26</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid min-h-[8.75rem] grid-cols-7 divide-x">
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>27</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>28</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>29</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-highlighted">
                      <span>30</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col bg-default px-2 pb-2 dark:bg-default">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-muted">
                      <span class="text-muted">May</span>
                      <span>1</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col px-2 pb-2 bg-(--ui-bg)/50 dark:bg-(--ui-bg)/80">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-muted">
                      <span>2</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col px-2 pb-2 bg-(--ui-bg)/50 dark:bg-(--ui-bg)/80">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
                <div class="group flex h-full min-h-[9rem] w-full flex-col">
                  <div class="hidden flex-shrink-0 justify-end px-3 py-2 text-right text-[12px] font-medium md:flex">
                    <div class="flex items-center gap-1.5 text-muted">
                      <span>3</span>
                    </div>
                  </div>
                  <div class="flex h-full flex-col px-2 pb-2 bg-(--ui-bg)/50 dark:bg-(--ui-bg)/80">
                    <div class="flex min-h-[5.5rem] flex-col gap-1 pt-1" />
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-auto flex h-7 items-center gap-1.5 px-1 text-[12px] font-medium opacity-0 transition group-hover:opacity-100" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      Add issue
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
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
