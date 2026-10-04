<!-- Page: /project-management/issue-gantt-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Gantt 1 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-gantt-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
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
          <div class="flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b px-4 py-1.5 sm:px-6 border-default">
            <div class="flex flex-wrap items-center gap-1.5">
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors bg-muted text-highlighted" aria-label="Week" type="button" @click="openAction(&quot;Week&quot;)">
                  Week
                </UButton>
                <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors" aria-label="Month" type="button" @click="openAction(&quot;Month&quot;)">
                  Month
                </UButton>
                <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors" aria-label="Quarter" type="button" @click="openAction(&quot;Quarter&quot;)">
                  Quarter
                </UButton>
                <UButton color="neutral" variant="soft" class="hover:bg-muted rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors" aria-label="Today" type="button" @click="openAction(&quot;Today&quot;)">
                  Today
                </UButton>
              </div>
            </div>
            <div class="text-muted text-[13px] font-medium">8 Issues</div>
          </div>
          <div class="min-h-0 flex-1 overflow-hidden">
            <div class="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden">
              <div class="min-h-0 flex-1 overflow-auto">
                <div class="flex min-h-full w-max min-w-full">
                  <aside class="bg-default z-20 shrink-0 border-r sm:sticky sm:left-0 border-default" style="width:360px">
                    <div class="bg-default sticky top-0 z-30 border-b px-4 pb-2 border-default" style="height:48px">
                      <div class="text-muted flex h-full items-end justify-between text-[13px] font-medium">
                        <span>Issues</span>
                        <span>Duration</span>
                      </div>
                    </div>
                    <div class="bg-default">
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-101Finalize issue timeline architecture9 days" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architecture9 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-warning/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-101</span>
                            <span class="truncate text-[13px] font-medium">Finalize issue timeline architecture</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">9 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-102Review gantt interaction states3 days" type="button" @click="openAction(&quot;RFC-102Review gantt interaction states3 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-info/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-102</span>
                            <span class="truncate text-[13px] font-medium">Review gantt interaction states</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">3 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-103Sync issue filters with project views9 days" type="button" @click="openAction(&quot;RFC-103Sync issue filters with project views9 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-103</span>
                            <span class="truncate text-[13px] font-medium">Sync issue filters with project views</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">9 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-104Document drag and resize behavior" type="button" @click="openAction(&quot;RFC-104Document drag and resize behavior&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-(--ui-bg-accented)/80" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-104</span>
                            <span class="truncate text-[13px] font-medium">Document drag and resize behavior</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs" />
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-105Create empty and loading timeline states8 days" type="button" @click="openAction(&quot;RFC-105Create empty and loading timeline states8 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-info/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-105</span>
                            <span class="truncate text-[13px] font-medium">Create empty and loading timeline states</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">8 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-106Add mock dependencies and handoff notes5 days" type="button" @click="openAction(&quot;RFC-106Add mock dependencies and handoff notes5 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-106</span>
                            <span class="truncate text-[13px] font-medium">Add mock dependencies and handoff notes</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">5 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-107Polish the quarter view density3 days" type="button" @click="openAction(&quot;RFC-107Polish the quarter view density3 days&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-107</span>
                            <span class="truncate text-[13px] font-medium">Polish the quarter view density</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs">3 days</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height:44px" aria-label="RFC-108Prepare issue calendar follow-up screen" type="button" @click="openAction(&quot;RFC-108Prepare issue calendar follow-up screen&quot;)">
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <div class="size-2 shrink-0 rounded-full bg-(--ui-bg-accented)/80" />
                            <span class="text-muted shrink-0 text-[12px]">RFC-108</span>
                            <span class="truncate text-[13px] font-medium">Prepare issue calendar follow-up screen</span>
                          </div>
                        </div>
                        <span class="text-muted shrink-0 text-xs" />
                      </UButton>
                    </div>
                  </aside>
                  <section class="relative">
                    <div class="bg-(--ui-bg)/95 sticky top-0 z-10 border-b backdrop-blur-sm border-default" style="width:3528px;height:48px">
                      <div class="flex h-full">
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 12</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">15</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">16</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">17</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">18</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">19</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">20</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">21</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 13</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">22</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">23</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">24</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">25</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">26</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">27</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">28</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026 - Apr 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 14</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">29</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">30</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">31</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">1</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">2</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">3</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">4</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 15</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">5</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">6</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">7</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">8</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">9</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">10</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">11</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 16</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">12</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">13</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">14</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">15</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-primary/5 border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium border-primary/12 bg-primary/10 text-highlighted rounded-sm border px-1">16</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">17</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">18</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 17</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">19</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">20</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">21</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">22</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">23</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">24</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">25</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026 - May 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 18</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">26</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">27</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">28</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">29</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">30</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">1</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">2</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">May 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 19</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">3</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">4</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">5</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">6</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">7</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">8</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">9</span>
                            </div>
                          </div>
                        </div>
                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width:392px">
                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">May 2026</div>
                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 20</div>
                          </div>
                          <div class="flex h-5">
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Su</span>
                              <span class="font-medium">10</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">M</span>
                              <span class="font-medium">11</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">T</span>
                              <span class="font-medium">12</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">W</span>
                              <span class="font-medium">13</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">Th</span>
                              <span class="font-medium">14</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width:56px">
                              <span class="text-muted font-medium">F</span>
                              <span class="font-medium">15</span>
                            </div>
                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width:56px">
                              <span class="text-muted font-medium">Sa</span>
                              <span class="font-medium">16</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="relative" style="width: 3528px; height: 758px; background-image: linear-gradient(to right, color-mix(in oklab, var(--ui-border) 85%, transparent) 1px, transparent 1px); background-size: 56px 100%;">
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:0px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:56px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:112px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:168px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:224px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:280px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:336px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:392px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:448px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:504px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:560px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:616px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:672px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:728px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:784px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:840px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:896px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:952px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1008px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1064px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1120px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1176px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1232px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1288px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1344px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1400px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1456px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1512px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1568px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1624px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1680px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1736px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full border-primary/12 bg-primary/4 border-x" style="left:1792px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:1848px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1904px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:1960px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2016px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2072px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2128px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2184px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2240px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:2296px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:2352px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2408px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2464px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2520px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2576px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2632px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:2688px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:2744px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2800px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2856px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2912px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:2968px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3024px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:3080px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:3136px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3192px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3248px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3304px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3360px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full" style="left:3416px;width:56px" />
                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left:3472px;width:56px" />
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:0px;height:44px" />
                        <div class="absolute px-1" style="top:6px;left:1008px;width:504px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-warning/80 bg-warning/90 text-warning dark:border-warning/50 dark:bg-warning/70 dark:text-warning">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Finalize issue timeline architecture from start" type="button" @click="openAction(&quot;Resize Finalize issue timeline architecture from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Finalize issue timeline architecture" type="button" @click="openAction(&quot;Finalize issue timeline architecture&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Finalize issue timeline architecture</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Finalize issue timeline architecture from end" type="button" @click="openAction(&quot;Resize Finalize issue timeline architecture from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:44px;height:44px">
                          <UButton color="neutral" variant="outline" class="bg-(--ui-bg)/95 text-muted hover:text-highlighted absolute top-1/2 z-[6] grid h-8 w-8 -translate-y-1/2 place-items-center rounded-sm border transition-colors border-default" style="left: 1388px;" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                            <UIcon name="i-lucide-arrow-right" class="size-3.5 rotate-180" />
                          </UButton>
                        </div>
                        <div class="absolute px-1" style="top:50px;left:1120px;width:168px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Review gantt interaction states from start" type="button" @click="openAction(&quot;Resize Review gantt interaction states from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Review gantt interaction states" type="button" @click="openAction(&quot;Review gantt interaction states&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Review gantt interaction states</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Review gantt interaction states from end" type="button" @click="openAction(&quot;Resize Review gantt interaction states from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:88px;height:44px" />
                        <div class="absolute px-1" style="top:94px;left:1344px;width:504px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Sync issue filters with project views from start" type="button" @click="openAction(&quot;Resize Sync issue filters with project views from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Sync issue filters with project views" type="button" @click="openAction(&quot;Sync issue filters with project views&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Sync issue filters with project views</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Sync issue filters with project views from end" type="button" @click="openAction(&quot;Resize Sync issue filters with project views from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:132px;height:44px" />
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:176px;height:44px" />
                        <div class="absolute px-1" style="top:182px;left:1680px;width:448px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Create empty and loading timeline states from start" type="button" @click="openAction(&quot;Resize Create empty and loading timeline states from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Create empty and loading timeline states" type="button" @click="openAction(&quot;Create empty and loading timeline states&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Create empty and loading timeline states</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Create empty and loading timeline states from end" type="button" @click="openAction(&quot;Resize Create empty and loading timeline states from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:220px;height:44px">
                          <UButton color="neutral" variant="outline" class="bg-(--ui-bg)/95 text-muted hover:text-highlighted absolute top-1/2 z-[6] grid h-8 w-8 -translate-y-1/2 place-items-center rounded-sm border transition-colors border-default" style="left: 1388px;" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                            <UIcon name="i-lucide-arrow-right" class="size-3.5 rotate-180" />
                          </UButton>
                        </div>
                        <div class="absolute px-1" style="top:226px;left:1064px;width:280px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Add mock dependencies and handoff notes from start" type="button" @click="openAction(&quot;Resize Add mock dependencies and handoff notes from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Add mock dependencies and handoff notes" type="button" @click="openAction(&quot;Add mock dependencies and handoff notes&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Add mock dependencies and handoff notes</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Add mock dependencies and handoff notes from end" type="button" @click="openAction(&quot;Resize Add mock dependencies and handoff notes from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:264px;height:44px" />
                        <div class="absolute px-1" style="top:270px;left:1232px;width:168px">
                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Polish the quarter view density from start" type="button" @click="openAction(&quot;Resize Polish the quarter view density from start&quot;)" />
                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Polish the quarter view density" type="button" @click="openAction(&quot;Polish the quarter view density&quot;)">
                              <span class="truncate text-[13px] leading-none font-medium">Polish the quarter view density</span>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Polish the quarter view density from end" type="button" @click="openAction(&quot;Resize Polish the quarter view density from end&quot;)" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="absolute left-0 w-full transition-colors" style="top:308px;height:44px" />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div class="bg-default sticky bottom-0 z-[1] border-t border-default">
                <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 flex w-full items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  New issue
                </UButton>
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
