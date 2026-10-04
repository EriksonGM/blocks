<!-- Page: /project-management/project-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project List 3 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-list-3">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <div class="border-b dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 border-default">
            <div class="flex flex-col gap-2 px-4 py-3 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                  <span class="truncate">Projects</span>
                  <span class="bg-muted text-muted shrink-0 rounded-md px-1.5 py-0.5 text-xs dark:bg-default dark:text-default">12</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-9 shrink-0 gap-1.5 p-0 sm:w-auto sm:px-3 lg:hidden" aria-label="Add Project" type="button" @click="openAction(&quot;Add Project&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Add Project</span>
                </UButton>
              </div>
              <div class="grid min-w-0 grid-cols-2 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs relative h-9 w-full justify-center gap-1.5 px-2.5 lg:h-8 lg:w-auto lg:border-transparent lg:bg-transparent lg:shadow-none border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                  <UIcon name="i-lucide-list-filter" class="size-3.5" />
                  Filter
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md px-3 text-xs h-9 w-full justify-center gap-1.5 lg:h-8 lg:w-auto border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Display" type="button" @click="openAction(&quot;Display&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Display
                </UButton>
                <UButton color="primary" variant="solid" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs hidden h-8 gap-1.5 lg:inline-flex" aria-label="Add Project" type="button" @click="openAction(&quot;Add Project&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Add Project
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-auto dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <div class="bg-default sticky top-0 z-10 min-w-[920px] border-b px-4 py-2 text-sm text-muted sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:text-muted border-default">
              <div class="flex items-center">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">Project</div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">Owner</div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">Health</div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">Milestone</div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">Team</div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">Updated</div>
              </div>
            </div>
            <div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Revenue Insights Revamp</p>
                      <p class="truncate text-xs text-muted dark:text-muted">REV-241</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Ava Reed</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">📈</span>
                    <span class="truncate">GROWTH</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 16</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Enterprise Onboarding Flow</p>
                      <p class="truncate text-xs text-muted dark:text-muted">ONB-118</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Kabir Sethi</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🤝</span>
                    <span class="truncate">PARTNER</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 15</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Claims Resolution Workspace</p>
                      <p class="truncate text-xs text-muted dark:text-muted">CLM-084</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Ethan Cole</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🗂️</span>
                    <span class="truncate">PROGRAM</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 14</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Retail Launch Readiness</p>
                      <p class="truncate text-xs text-muted dark:text-muted">RTL-062</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Ben Lewis</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">💬</span>
                    <span class="truncate">CX</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 12</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Mobile Release Train</p>
                      <p class="truncate text-xs text-muted dark:text-muted">MOB-092</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Victor Hale</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🧲</span>
                    <span class="truncate">TALENT</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 10</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Inventory Accuracy Audit</p>
                      <p class="truncate text-xs text-muted dark:text-muted">INV-176</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Tia West</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🧭</span>
                    <span class="truncate">OPS</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 8</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Knowledge Base Migration</p>
                      <p class="truncate text-xs text-muted dark:text-muted">KB-057</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Riya Sharma</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">📱</span>
                    <span class="truncate">MOBILE</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 16</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Partner SLA Tracker</p>
                      <p class="truncate text-xs text-muted dark:text-muted">SLA-203</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Chloe Park</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🛠️</span>
                    <span class="truncate">FIELD</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 15</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Hiring Pipeline Cleanup</p>
                      <p class="truncate text-xs text-muted dark:text-muted">HIR-074</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Sofia Ahmed</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">📈</span>
                    <span class="truncate">GROWTH</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 14</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Renewal Forecast Console</p>
                      <p class="truncate text-xs text-muted dark:text-muted">REN-133</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Harper Singh</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🤝</span>
                    <span class="truncate">PARTNER</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 12</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Field Ops Dispatch Board</p>
                      <p class="truncate text-xs text-muted dark:text-muted">FLD-119</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Owen Lee</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    <UIcon name="i-lucide-activity" class="size-3.5 text-info" />
                    <span>Watching</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">QA window</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      May 7
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">🗂️</span>
                    <span class="truncate">PROGRAM</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 10</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[920px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[34%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md dark:bg-(--ui-bg)/80">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5 text-muted dark:text-muted" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Subscription Save Plays</p>
                      <p class="truncate text-xs text-muted dark:text-muted">SUB-088</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                      <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                    </span>
                    <span class="truncate text-xs font-medium dark:text-highlighted">Leo Park</span>
                  </div>
                </div>
                <div class="w-[130px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 justify-start gap-1 px-2 text-xs font-medium" aria-label="Needs update" type="button" @click="openAction(&quot;Needs update&quot;)">
                    <UIcon name="i-lucide-circle-question-mark" class="size-3.5 text-muted" />
                    <span>Needs update</span>
                  </UButton>
                </div>
                <div class="w-[150px] shrink-0 pl-2 lg:w-[16%] lg:shrink">
                  <div class="flex flex-col gap-0.5">
                    <span class="truncate text-xs font-medium text-muted">Ops review</span>
                    <span class="text-muted flex items-center gap-1 text-xs">
                      <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                      Jun 3
                    </span>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 pl-2 lg:w-[13%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <span class="bg-(--ui-bg-muted)/60 flex size-6 items-center justify-center rounded-md text-xs">💬</span>
                    <span class="truncate">CX</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[10%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 8</span>
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
