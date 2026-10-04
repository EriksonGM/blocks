<!-- Page: /project-management/issue-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue List 2 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-list-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <div class="border-b bg-default dark:bg-default border-default">
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
          <div class="flex min-h-11 items-center justify-between border-b bg-default px-4 py-1.5 sm:px-6 dark:bg-default border-default">
            <div class="text-highlighted text-[14px] font-semibold">15 Issues</div>
            <div class="text-muted text-[13px] font-medium">Grouped by status</div>
          </div>
          <div class="flex-1 overflow-auto bg-default p-3 dark:bg-default">
            <div class="min-w-[760px] space-y-2 md:min-w-0">
              <section class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium border-secondary/20 bg-secondary/60 dark:border-secondary dark:bg-secondary/35 text-secondary dark:text-secondary" aria-label="Review3" type="button" @click="openAction(&quot;Review3&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="size-3.5 text-highlighted dark:text-highlighted" />
                  <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-secondary text-secondary">
                    <UIcon name="i-lucide-check" class="size-2.5" />
                  </span>
                  <span>Review</span>
                  <span class="text-muted dark:text-muted">3</span>
                </UButton>
                <div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-103</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-secondary text-secondary">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-secondary dark:text-secondary" />
                      <span class="truncate text-highlighted dark:text-highlighted">Sync issue filters with project views</span>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-full border border-accented bg-default px-2 text-[12px] text-default dark:border-default dark:bg-default dark:text-default">
                        <UIcon name="i-lucide-message-circle" class="size-3.5" />
                        2
                      </UBadge>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Views</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">8 Feb</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-103" type="button" @click="openAction(&quot;Assign RFC-103&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-107</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-secondary text-secondary">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-secondary dark:text-secondary" />
                      <span class="truncate text-highlighted dark:text-highlighted">Polish the quarter view density</span>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Density</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">26 Jun</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-107" type="button" @click="openAction(&quot;Assign RFC-107&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-109</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-secondary text-secondary">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-secondary dark:text-secondary" />
                      <span class="truncate text-highlighted dark:text-highlighted">Verify saved view presets across workspaces</span>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-full border border-accented bg-default px-2 text-[12px] text-default dark:border-default dark:bg-default dark:text-default">
                        <UIcon name="i-lucide-message-circle" class="size-3.5" />
                        1
                      </UBadge>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Views</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">18 Jun</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-109" type="button" @click="openAction(&quot;Assign RFC-109&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium border-accented bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/80 text-toned dark:text-default" aria-label="Backlog3" type="button" @click="openAction(&quot;Backlog3&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="size-3.5 text-highlighted dark:text-highlighted" />
                  <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-accented text-dimmed">
                    <UIcon name="i-lucide-circle" class="size-2.5" />
                  </span>
                  <span>Backlog</span>
                  <span class="text-muted dark:text-muted">3</span>
                </UButton>
                <div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-104</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-accented text-dimmed">
                        <UIcon name="i-lucide-circle" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <span class="truncate text-highlighted dark:text-highlighted">Document drag and resize behavior</span>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Guidelines</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">7 Oct</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-104" type="button" @click="openAction(&quot;Assign RFC-104&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-108</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-accented text-dimmed">
                        <UIcon name="i-lucide-circle" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-toned dark:text-default" />
                      <span class="truncate text-highlighted dark:text-highlighted">Prepare issue calendar follow-up screen</span>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-full border border-accented bg-default px-2 text-[12px] text-default dark:border-default dark:bg-default dark:text-default">
                        <UIcon name="i-lucide-message-circle" class="size-3.5" />
                        1
                      </UBadge>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Calendar</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">20 Mar</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-108" type="button" @click="openAction(&quot;Assign RFC-108&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-110</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-accented text-dimmed">
                        <UIcon name="i-lucide-circle" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <span class="truncate text-highlighted dark:text-highlighted">Define backlog import edge cases</span>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Import</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">4 Aug</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-110" type="button" @click="openAction(&quot;Assign RFC-110&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium border-info/20 bg-info/60 dark:border-info dark:bg-info/35 text-info dark:text-info" aria-label="Todo3" type="button" @click="openAction(&quot;Todo3&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-3.5 text-highlighted dark:text-highlighted" />
                  <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-info text-info">
                    <UIcon name="i-lucide-check" class="size-2.5" />
                  </span>
                  <span>Todo</span>
                  <span class="text-muted dark:text-muted">3</span>
                </UButton>
              </section>
              <section class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium border-warning/20 bg-warning/60 dark:border-warning dark:bg-warning/35 text-warning dark:text-warning" aria-label="In Progress3" type="button" @click="openAction(&quot;In Progress3&quot;)">
                  <UIcon name="i-lucide-chevron-down" class="size-3.5 text-highlighted dark:text-highlighted" />
                  <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-warning text-warning">
                    <UIcon name="i-lucide-check" class="size-2.5" />
                  </span>
                  <span>In Progress</span>
                  <span class="text-muted dark:text-muted">3</span>
                </UButton>
                <div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-101</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-warning text-warning">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-warning dark:text-warning" />
                      <span class="truncate text-highlighted dark:text-highlighted">Finalize issue timeline architecture</span>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Platform</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">12 May</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-101" type="button" @click="openAction(&quot;Assign RFC-101&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-112</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-warning text-warning">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-warning dark:text-warning" />
                      <span class="truncate text-highlighted dark:text-highlighted">Tune inline issue activity affordances</span>
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-full border border-accented bg-default px-2 text-[12px] text-default dark:border-default dark:bg-default dark:text-default">
                        <UIcon name="i-lucide-message-circle" class="size-3.5" />
                        2
                      </UBadge>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Activity</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">22 May</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-112" type="button" @click="openAction(&quot;Assign RFC-112&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-(--ui-bg)/55 dark:hover:bg-(--ui-bg)/80">
                    <div class="flex justify-end pr-1.5 text-highlighted dark:text-highlighted">
                      <UIcon name="i-lucide-signal" class="size-3.5" />
                    </div>
                    <div class="truncate font-medium text-muted dark:text-muted">RFC-113</div>
                    <div class="flex items-center justify-center">
                      <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-warning text-warning">
                        <UIcon name="i-lucide-check" class="size-2.5" />
                      </span>
                    </div>
                    <div class="flex min-w-0 items-center gap-2 pr-4">
                      <UIcon name="i-lucide-git-pull-request" class="size-4 shrink-0 text-warning dark:text-warning" />
                      <span class="truncate text-highlighted dark:text-highlighted">Connect keyboard focus states to list navigation</span>
                    </div>
                    <div class="flex h-full items-center text-muted dark:text-muted">
                      <div class="flex w-36 items-center justify-start border-l border-default px-3 dark:border-default">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px] dark:border-default dark:bg-default">
                          <UIcon name="i-lucide-github" class="size-4" />
                          <span class="truncate">Accessibility</span>
                        </UBadge>
                      </div>
                      <div class="flex w-16 items-center gap-1 border-l border-default px-3 dark:border-default">
                        <UIcon name="i-lucide-circle" class="size-4 text-inverted dark:text-dimmed" />
                        <span>0h</span>
                      </div>
                      <div class="w-20 border-l border-default px-3 dark:border-default">30 May</div>
                      <div class="flex w-12 justify-center">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default size-7 rounded-md border border-default bg-default text-default hover:bg-(--ui-bg-elevated)/70 dark:border-default dark:bg-default dark:text-default dark:hover:bg-default" aria-label="Assign RFC-113" type="button" @click="openAction(&quot;Assign RFC-113&quot;)">
                          <UIcon name="i-lucide-user-round" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium border-success/20 bg-success/60 dark:border-success dark:bg-success/35 text-success dark:text-success" aria-label="Done3" type="button" @click="openAction(&quot;Done3&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-3.5 text-highlighted dark:text-highlighted" />
                  <span class="inline-flex size-3.5 items-center justify-center rounded-full border border-success text-success">
                    <UIcon name="i-lucide-check" class="size-2.5" />
                  </span>
                  <span>Done</span>
                  <span class="text-muted dark:text-muted">3</span>
                </UButton>
              </section>
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
