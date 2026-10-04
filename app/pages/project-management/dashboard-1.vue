<!-- Page: /project-management/dashboard-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 1 · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Meetings",
    "value": "0"
  },
  {
    "label": "Events",
    "value": "1"
  },
  {
    "label": "Focus",
    "value": "2"
  }
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "issues": "RFC-101Finalize issue timeline architecture",
    "issuesText6": "RFC-101",
    "issuesText8": "Finalize issue timeline architecture",
    "issuesArialabel10": "Open actions for RFC-101",
    "status": "In Progress",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/40 dark:text-warning",
    "statusClass3": "size-1.5 rounded-full bg-warning",
    "priority": "high",
    "priorityClass5": "capitalize text-error",
    "assignee": "Nina Oliver",
    "assigneeGroup": "0",
    "assigneeAlt5": "Nina Oliver",
    "assigneeSrc6": "/reference/ac13c01a479a177b.png",
    "labels": "timelinefrontend",
    "labelsGroup": "0",
    "labelsText6": "timeline",
    "labelsText10": "frontend",
    "dueDate": "2026-04-10"
  },
  {
    "_id": "2",
    "issues": "RFC-102Review gantt interaction states",
    "issuesText6": "RFC-102",
    "issuesText8": "Review gantt interaction states",
    "issuesArialabel10": "Open actions for RFC-102",
    "status": "Todo",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info",
    "statusClass3": "size-1.5 rounded-full bg-info",
    "priority": "medium",
    "priorityClass5": "capitalize text-warning",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "review",
    "labelsGroup": "1",
    "labelsText6": "review",
    "labelsText10": "",
    "dueDate": "2026-04-06"
  },
  {
    "_id": "3",
    "issues": "RFC-103Sync issue filters with project views",
    "issuesText6": "RFC-103",
    "issuesText8": "Sync issue filters with project views",
    "issuesArialabel10": "Open actions for RFC-103",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary",
    "statusClass3": "size-1.5 rounded-full bg-secondary",
    "priority": "high",
    "priorityClass5": "capitalize text-error",
    "assignee": "Kai Young",
    "assigneeGroup": "0",
    "assigneeAlt5": "Kai Young",
    "assigneeSrc6": "/reference/82a5a2284fceeed0.png",
    "labels": "viewsfilters",
    "labelsGroup": "0",
    "labelsText6": "views",
    "labelsText10": "filters",
    "dueDate": "2026-04-16"
  },
  {
    "_id": "4",
    "issues": "RFC-105Create empty and loading timeline states",
    "issuesText6": "RFC-105",
    "issuesText8": "Create empty and loading timeline states",
    "issuesArialabel10": "Open actions for RFC-105",
    "status": "Todo",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info",
    "statusClass3": "size-1.5 rounded-full bg-info",
    "priority": "medium",
    "priorityClass5": "capitalize text-warning",
    "assignee": "No owner",
    "assigneeGroup": "1",
    "assigneeAlt5": "",
    "assigneeSrc6": "",
    "labels": "states",
    "labelsGroup": "1",
    "labelsText6": "states",
    "labelsText10": "",
    "dueDate": "2026-04-21"
  },
  {
    "_id": "5",
    "issues": "RFC-106Add mock dependencies and handoff notes",
    "issuesText6": "RFC-106",
    "issuesText8": "Add mock dependencies and handoff notes",
    "issuesArialabel10": "Open actions for RFC-106",
    "status": "Done",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/40 dark:text-success",
    "statusClass3": "size-1.5 rounded-full bg-success",
    "priority": "low",
    "priorityClass5": "capitalize text-success",
    "assignee": "Lena Moss",
    "assigneeGroup": "0",
    "assigneeAlt5": "Lena Moss",
    "assigneeSrc6": "/reference/a99c47c2fa3dc656.png",
    "labels": "handoff",
    "labelsGroup": "1",
    "labelsText6": "handoff",
    "labelsText10": "",
    "dueDate": "2026-04-07"
  },
  {
    "_id": "6",
    "issues": "RFC-107Polish the quarter view density",
    "issuesText6": "RFC-107",
    "issuesText8": "Polish the quarter view density",
    "issuesArialabel10": "Open actions for RFC-107",
    "status": "Review",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary",
    "statusClass3": "size-1.5 rounded-full bg-secondary",
    "priority": "medium",
    "priorityClass5": "capitalize text-warning",
    "assignee": "Ava Reed",
    "assigneeGroup": "0",
    "assigneeAlt5": "Ava Reed",
    "assigneeSrc6": "/reference/5985a55c7498fe2e.png",
    "labels": "density",
    "labelsGroup": "1",
    "labelsText6": "density",
    "labelsText10": "",
    "dueDate": "2026-04-08"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "issues",
    "header": "Issues"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "priority",
    "header": "Priority"
  },
  {
    "accessorKey": "assignee",
    "header": "Assignee"
  },
  {
    "accessorKey": "labels",
    "header": "Labels"
  },
  {
    "accessorKey": "dueDate",
    "header": "Due date"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["issues","status","priority","assignee","labels","dueDate"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default text-highlighted flex min-h-0 w-full max-w-full flex-1 flex-col overflow-hidden">
          <div class="flex min-h-0 w-full max-w-full flex-1 flex-col overflow-x-hidden overflow-y-auto xl:flex-row xl:overflow-hidden">
            <div class="flex max-w-full min-w-0 flex-1 flex-col xl:overflow-hidden">
              <header class="border-default flex min-h-14 items-center justify-between border-b px-4 sm:px-6">
                <div class="flex items-center gap-2.5 text-sm font-medium">
                  <UIcon name="i-lucide-user-round-check" class="text-muted size-4" />
                  <span>My workspace</span>
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8 shrink-0 rounded-[6px] xl:hidden" aria-label="Open workspace panel" type="button" @click="openAction(&quot;Open workspace panel&quot;)">
                  <UIcon name="i-lucide-panel-right-open" class="size-4" />
                </UButton>
              </header>
              <nav class="border-default border-b">
                <div class="horizontal-scrollbar flex w-full min-w-0 items-center overflow-x-auto overscroll-x-contain px-2 sm:px-6">
                  <UButton color="neutral" variant="outline" class="focus-visible:ring-(--ui-text-muted) hover:text-highlighted h-12 shrink-0 border-b-2 px-3 text-[13px] font-medium outline-none focus-visible:ring-2 sm:px-4 border-primary text-primary" aria-label="Overview" type="button" @click="openAction(&quot;Overview&quot;)">
                    Overview
                  </UButton>
                  <UButton color="neutral" variant="outline" class="focus-visible:ring-(--ui-text-muted) text-muted hover:text-highlighted h-12 shrink-0 border-b-2 px-3 text-[13px] font-medium outline-none focus-visible:ring-2 sm:px-4 border-transparent" aria-label="Assigned to me" type="button" @click="openAction(&quot;Assigned to me&quot;)">
                    Assigned to me
                  </UButton>
                  <UButton color="neutral" variant="outline" class="focus-visible:ring-(--ui-text-muted) text-muted hover:text-highlighted h-12 shrink-0 border-b-2 px-3 text-[13px] font-medium outline-none focus-visible:ring-2 sm:px-4 border-transparent" aria-label="Reported by me" type="button" @click="openAction(&quot;Reported by me&quot;)">
                    Reported by me
                  </UButton>
                  <UButton color="neutral" variant="outline" class="focus-visible:ring-(--ui-text-muted) text-muted hover:text-highlighted h-12 shrink-0 border-b-2 px-3 text-[13px] font-medium outline-none focus-visible:ring-2 sm:px-4 border-transparent" aria-label="Watching" type="button" @click="openAction(&quot;Watching&quot;)">
                    Watching
                  </UButton>
                  <UButton color="neutral" variant="outline" class="focus-visible:ring-(--ui-text-muted) text-muted hover:text-highlighted h-12 shrink-0 border-b-2 px-3 text-[13px] font-medium outline-none focus-visible:ring-2 sm:px-4 border-transparent" aria-label="Updates" type="button" @click="openAction(&quot;Updates&quot;)">
                    Updates
                  </UButton>
                </div>
              </nav>
              <div class="min-h-0 flex-1 xl:overflow-y-auto">
                <div class="flex min-w-0 flex-col gap-6 px-3 py-5 sm:gap-7 sm:px-6 sm:py-6">
                  <section class="min-w-0 space-y-2">
                    <h2 class="text-highlighted text-[16px] leading-6 font-medium text-highlighted">Overview</h2>
                    <div class="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      <!-- Card 1: 8 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-center gap-3">
                            <div class="bg-muted grid size-11 shrink-0 place-items-center rounded-[3px]">
                              <UIcon name="i-lucide-file-plus-corner" class="text-highlighted size-5" />
                            </div>
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Issues created</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">8</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 2: 4 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-center gap-3">
                            <div class="bg-muted grid size-11 shrink-0 place-items-center rounded-[3px]">
                              <UIcon name="i-lucide-user-round-check" class="text-highlighted size-5" />
                            </div>
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Issues assigned</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">4</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 3: 6 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-center gap-3">
                            <div class="bg-muted grid size-11 shrink-0 place-items-center rounded-[3px]">
                              <UIcon name="i-lucide-bell" class="text-highlighted size-5" />
                            </div>
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Issues subscribed</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">6</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </section>
                  <section class="min-w-0 space-y-2">
                    <h2 class="text-highlighted text-[16px] leading-6 font-medium text-highlighted">Issue status</h2>
                    <div class="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      <!-- Card 4: 2 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-start gap-3">
                            <span class="mt-1 size-3 shrink-0 rounded-[2px]" style="background-color:var(--ui-text-muted)" />
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Backlog</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">2</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 5: 2 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-start gap-3">
                            <span class="mt-1 size-3 shrink-0 rounded-[2px]" style="background-color:var(--ui-info)" />
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Todo</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">2</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 6: 1 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-start gap-3">
                            <span class="mt-1 size-3 shrink-0 rounded-[2px]" style="background-color:var(--ui-warning)" />
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">In Progress</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">1</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 7: 2 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-start gap-3">
                            <span class="mt-1 size-3 shrink-0 rounded-[2px]" style="background-color:var(--ui-secondary)" />
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Review</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">2</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 8: 1 -->
                      <UCard class="rounded-[6px] shadow-none h-[84px]" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex h-full items-start gap-3">
                            <span class="mt-1 size-3 shrink-0 rounded-[2px]" style="background-color:var(--ui-success)" />
                            <div class="min-w-0 space-y-1">
                              <p class="text-muted truncate text-[13px] leading-5">Done</p>
                              <p class="text-[18px] leading-6 font-semibold text-highlighted">1</p>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </section>
                  <div class="grid min-w-0 grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
                    <section class="flex h-full min-w-0 flex-col gap-2">
                      <div class="flex min-w-0 items-center justify-between gap-3">
                        <h2 class="text-highlighted text-[16px] leading-6 font-medium text-highlighted">Work Hour Analysis</h2>
                      </div>
                      <!-- Card 9: Total Work -->
                      <UCard class="flex min-w-0 flex-1 rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 flex-1 flex-col p-3 py-5">
                          <div class="flex min-w-0 items-center gap-2.5">
                            <div class="bg-primary/10 grid size-8 shrink-0 place-items-center rounded-full">
                              <div class="bg-primary grid size-4 place-items-center rounded-full">
                                <UIcon name="i-lucide-clock-3" class="text-inverted size-2.5" />
                              </div>
                            </div>
                            <div class="min-w-0">
                              <p class="text-muted text-[10px] leading-3 font-semibold tracking-[0.14em] uppercase text-highlighted">Total Work</p>
                              <p class="truncate text-[15px] leading-6 font-semibold tracking-tight sm:text-[17px] text-highlighted">38 hours · 12 mins</p>
                            </div>
                          </div>
                          <div class="border-default bg-default text-muted mt-4 grid h-7 grid-cols-5 overflow-hidden rounded-[6px] border text-[12px] leading-4 font-medium">
                            <UButton color="neutral" variant="outline" class="border-default hover:bg-muted focus-visible:bg-muted border-r transition-colors outline-none last:border-r-0 bg-muted text-highlighted" aria-label="5D" type="button" @click="openAction(&quot;5D&quot;)">
                              5D
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-default hover:bg-muted focus-visible:bg-muted border-r transition-colors outline-none last:border-r-0" aria-label="2W" type="button" @click="openAction(&quot;2W&quot;)">
                              2W
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-default hover:bg-muted focus-visible:bg-muted border-r transition-colors outline-none last:border-r-0" aria-label="1M" type="button" @click="openAction(&quot;1M&quot;)">
                              1M
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-default hover:bg-muted focus-visible:bg-muted border-r transition-colors outline-none last:border-r-0" aria-label="6M" type="button" @click="openAction(&quot;6M&quot;)">
                              6M
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-default hover:bg-muted focus-visible:bg-muted border-r transition-colors outline-none last:border-r-0" aria-label="1Y" type="button" @click="openAction(&quot;1Y&quot;)">
                              1Y
                            </UButton>
                          </div>
                          <div class="relative mt-3 h-[120px] shrink-0">
                            <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                            <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden h-full w-full" style=";--color-minutes:var(--ui-primary)" role="img" aria-label="Analytics chart">
                              <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                              <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-minutes:var(--ui-primary);width:100%;height:120px;min-width:0" role="img" aria-label="Analytics chart">
                                <div style="width:0;height:0;overflow:visible">
                                  <div width="521" height="120" class="chart-wrapper" style="position: relative; cursor: default; width: 521px; height: 120px;">
                                    <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 521 120" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                      <title />
                                      <desc />
                                      <g class="chart-zIndex-layer_-100">
                                        <g class="chart-cartesian-grid">
                                          <g class="chart-cartesian-grid-horizontal">
                                            <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="8" width="521" height="108" x1="0" y1="62" x2="521" y2="62" />
                                            <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="8" width="521" height="108" x1="0" y1="8" x2="521" y2="8" />
                                            <line stroke="var(--ui-border)" stroke-dasharray="6 10" fill="none" x="0" y="8" width="521" height="108" x1="0" y1="116" x2="521" y2="116" />
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-zIndex-layer_-50" />
                                      <defs>
                                        <clipPath id="recharts1-clip">
                                          <rect x="0" y="8" height="108" width="521" />
                                        </clipPath>
                                      </defs>
                                      <g class="chart-zIndex-layer_100" />
                                      <g class="chart-zIndex-layer_200" />
                                      <g class="chart-zIndex-layer_300" />
                                      <g class="chart-zIndex-layer_400">
                                        <g class="chart-layer chart-line">
                                          <g class="chart-layer chart-shape">
                                            <path stroke="var(--color-minutes)" stroke-width="2" fill="none" id="recharts-line-_r_0_" height="108" width="521" class="chart-curve chart-line-curve" d="M0,89L32.563,89L65.125,26L97.688,26L130.25,26L162.813,62L195.375,62L227.938,44L260.5,44L293.063,44L325.625,26L358.188,26L390.75,62L423.313,62L455.875,44L488.438,26L521,26" />
                                          </g>
                                        </g>
                                      </g>
                                      <g class="chart-zIndex-layer_500" />
                                      <g class="chart-zIndex-layer_600" />
                                      <g class="chart-zIndex-layer_1000" />
                                      <g class="chart-zIndex-layer_1100" />
                                      <g class="chart-zIndex-layer_1200" />
                                      <g class="chart-zIndex-layer_2000" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text-muted mt-2.5 flex items-center gap-1.5 text-[12px] leading-4">
                            <UIcon name="i-lucide-info" class="fill-(--ui-text-muted)/30 text-(--ui-bg) size-3.5 shrink-0" />
                            <span>Total work hours include extra hours.</span>
                          </div>
                        </div>
                      </UCard>
                    </section>
                    <section class="flex h-full min-w-0 flex-col gap-2">
                      <h2 class="text-highlighted text-[16px] leading-6 font-medium text-highlighted">Time Tracker</h2>
                      <!-- Card 10: Awaiting -->
                      <UCard class="flex min-w-0 flex-1 overflow-hidden rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="flex min-h-[268px] min-w-0 flex-1 flex-col overflow-hidden p-3 py-5">
                          <UButton color="neutral" variant="outline" class="border-default bg-default hover:bg-muted focus-visible:ring-accented flex h-9 w-full max-w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-[6px] border px-3 text-left text-sm shadow-none outline-none focus-visible:ring-2" aria-label="RFC-101Finalize issue timeline architecture" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architecture&quot;)">
                            <span class="grid min-w-0 flex-1 grid-cols-[auto_minmax(0,1fr)] items-center gap-2 overflow-hidden">
                              <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-101</span>
                              <span class="text-highlighted min-w-0 truncate text-[13px] leading-5 font-normal">Finalize issue timeline architecture</span>
                            </span>
                            <UIcon name="i-lucide-chevron-down" class="text-muted size-4 shrink-0" />
                          </UButton>
                          <div class="bg-muted mt-4 flex flex-1 flex-col items-center justify-center rounded-[6px] px-3 py-4 text-center">
                            <p class="text-muted text-[10px] leading-3 font-semibold tracking-[0.14em] uppercase text-highlighted">Awaiting</p>
                            <p class="text-highlighted mt-2 text-[34px] leading-none font-medium tracking-[-0.02em] whitespace-nowrap tabular-nums">00:00:00</p>
                            <div class="mt-3 flex items-center justify-center gap-1.5">
                              <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 text-primary hover:text-primary hover:bg-default h-7 rounded-[6px] px-2 text-[13px] font-medium" aria-label="Start" type="button" @click="openAction(&quot;Start&quot;)">
                                <UIcon name="i-lucide-play" class="size-3.5 fill-current" />
                                Start
                              </UButton>
                              <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-muted hover:bg-default hover:text-highlighted size-7 rounded-[6px]" aria-label="Reset time tracker" type="button" @click="openAction(&quot;Reset time tracker&quot;)">
                                <UIcon name="i-lucide-rotate-ccw" class="size-3.5" />
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </section>
                  </div>
                  <section class="min-w-0 space-y-2">
                    <h2 class="text-highlighted text-[16px] leading-6 font-medium text-highlighted">My issues</h2>
                    <div class="grid gap-2.5 md:hidden">
                      <!-- Card 11: RFC-101Finalize issue timeline architectureIn ProgresshighNina Oliver2026-04-10timelinefro -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-101</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Finalize issue timeline architecture</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/40 dark:text-warning">
                                  <span class="size-1.5 rounded-full bg-warning" />
                                  In Progress
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  high
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-101" type="button" @click="openAction(&quot;Open actions for RFC-101&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <div class="inline-flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden size-6 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="truncate">Nina Oliver</span>
                              </div>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-10
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              timeline
                            </UBadge>
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              frontend
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 12: RFC-102Review gantt interaction statesTodomediumNo owner2026-04-06review -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-102</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Review gantt interaction states</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">
                                  <span class="size-1.5 rounded-full bg-info" />
                                  Todo
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  medium
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-102" type="button" @click="openAction(&quot;Open actions for RFC-102&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <span>No owner</span>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-06
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              review
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 13: RFC-103Sync issue filters with project viewsReviewhighKai Young2026-04-16viewsfilters -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-103</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Sync issue filters with project views</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">
                                  <span class="size-1.5 rounded-full bg-secondary" />
                                  Review
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  high
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-103" type="button" @click="openAction(&quot;Open actions for RFC-103&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <div class="inline-flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden size-6 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="truncate">Kai Young</span>
                              </div>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-16
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              views
                            </UBadge>
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              filters
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 14: RFC-105Create empty and loading timeline statesTodomediumNo owner2026-04-21states -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-105</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Create empty and loading timeline states</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/40 dark:text-info">
                                  <span class="size-1.5 rounded-full bg-info" />
                                  Todo
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  medium
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-105" type="button" @click="openAction(&quot;Open actions for RFC-105&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <span>No owner</span>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-21
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              states
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 15: RFC-106Add mock dependencies and handoff notesDonelowLena Moss2026-04-07handoff -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-106</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Add mock dependencies and handoff notes</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/40 dark:text-success">
                                  <span class="size-1.5 rounded-full bg-success" />
                                  Done
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  low
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-106" type="button" @click="openAction(&quot;Open actions for RFC-106&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <div class="inline-flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden size-6 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                </span>
                                <span class="truncate">Lena Moss</span>
                              </div>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-07
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              handoff
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                      <!-- Card 16: RFC-107Polish the quarter view densityReviewmediumAva Reed2026-04-08density -->
                      <UCard class="rounded-[6px] shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-3 sm:p-4">
                          <div class="flex min-w-0 items-start justify-between gap-3">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">RFC-107</span>
                                <span class="text-highlighted truncate text-[13px] font-medium">Polish the quarter view density</span>
                              </div>
                              <div class="mt-2 flex flex-wrap items-center gap-2">
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/40 dark:text-secondary">
                                  <span class="size-1.5 rounded-full bg-secondary" />
                                  Review
                                </UBadge>
                                <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium text-toned capitalize border-default">
                                  <UIcon name="i-lucide-flag" class="size-3" />
                                  medium
                                </UBadge>
                              </div>
                            </div>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 shrink-0 rounded-md" aria-label="Open actions for RFC-107" type="button" @click="openAction(&quot;Open actions for RFC-107&quot;)">
                              <UIcon name="i-lucide-ellipsis" class="size-4" />
                            </UButton>
                          </div>
                          <div class="text-muted mt-3 flex min-w-0 flex-wrap items-center justify-between gap-3 text-[12px]">
                            <div class="min-w-0">
                              <div class="inline-flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden size-6 rounded-full">
                                  <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="truncate">Ava Reed</span>
                              </div>
                            </div>
                            <div class="inline-flex shrink-0 items-center gap-1.5 tabular-nums">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              2026-04-08
                            </div>
                          </div>
                          <div class="mt-3 flex min-w-0 flex-wrap gap-1.5">
                            <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                              <UIcon name="i-lucide-tag" class="size-3" />
                              density
                            </UBadge>
                          </div>
                        </div>
                      </UCard>
                    </div>
                    <!-- Card 17: IssuesStatusPriorityAssigneeLabelsDue dateRFC-101Finalize issue timeline architectureIn Pr -->
                    <UCard class="rounded-[6px] shadow-none hidden md:block" :ui="{ body: 'contents' }">
                      <div class="p-3 sm:p-4">
                        <div class="-m-4 overflow-hidden rounded-[6px]">
                          <div class="horizontal-scrollbar overflow-x-auto">
                            <!-- Table 1: Issues / Status / Priority / Assignee / Labels / Due date -->
                            <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[1120px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #issues-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Issues" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #issues-cell="{ row }">
                                <div class="flex items-center justify-between gap-3">
                                  <div class="min-w-0">
                                    <div class="flex min-w-0 items-center gap-3">
                                      <span class="text-muted shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase">{{ row.original.issuesText6 }}</span>
                                      <span class="text-highlighted truncate text-[13px] font-medium">{{ row.original.issuesText8 }}</span>
                                    </div>
                                  </div>
                                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default text-muted hover:bg-muted size-7 rounded-md opacity-0 transition-opacity group-hover:opacity-100" :aria-label="row.original.issuesArialabel10" type="button" @click="openAction(&quot;Open actions for RFC-101&quot;, row.original._id, 1)">
                                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                                  </UButton>
                                </div>
                              </template>
                              <template #status-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #status-cell="{ row }">
                                <UBadge color="neutral" variant="subtle" :class="row.original.statusClass2">
                                  <span :class="row.original.statusClass3" />
                                  {{ row.original.status }}
                                </UBadge>
                              </template>
                              <template #priority-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Priority" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #priority-cell="{ row }">
                                <div class="inline-flex items-center gap-2">
                                  <UIcon name="i-lucide-flag" class="text-muted size-3.5" />
                                  <span :class="row.original.priorityClass5">{{ row.original.priority }}</span>
                                </div>
                              </template>
                              <template #assignee-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Assignee" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #assignee-cell="{ row }">
                                <template v-if="row.original.assigneeGroup === '0'">
                                  <div class="inline-flex items-center gap-2">
                                    <span class="relative flex shrink-0 overflow-hidden size-6 rounded-full">
                                      <img class="aspect-square h-full w-full" :alt="row.original.assigneeAlt5" :src="row.original.assigneeSrc6" loading="lazy" />
                                    </span>
                                    <span class="truncate text-[13px]">{{ row.original.assignee }}</span>
                                  </div>
                                </template>
                                <template v-if="row.original.assigneeGroup === '1'">
                                  <span class="text-muted">{{ row.original.assignee }}</span>
                                </template>
                              </template>
                              <template #labels-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Labels" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #labels-cell="{ row }">
                                <template v-if="row.original.labelsGroup === '0'">
                                  <div class="flex flex-nowrap gap-1.5">
                                    <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                                      <UIcon name="i-lucide-tag" class="size-3" />
                                      {{ row.original.labelsText6 }}
                                    </UBadge>
                                    <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                                      <UIcon name="i-lucide-tag" class="size-3" />
                                      {{ row.original.labelsText10 }}
                                    </UBadge>
                                  </div>
                                </template>
                                <template v-if="row.original.labelsGroup === '1'">
                                  <div class="flex flex-nowrap gap-1.5">
                                    <UBadge color="neutral" variant="subtle" class="text-muted inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-default">
                                      <UIcon name="i-lucide-tag" class="size-3" />
                                      {{ row.original.labels }}
                                    </UBadge>
                                  </div>
                                </template>
                              </template>
                              <template #dueDate-header="{ column }">
                                <UButton color="neutral" variant="ghost" size="xs" label="Due date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                              </template>
                              <template #dueDate-cell="{ row }">
                                <div class="inline-flex items-center gap-2">
                                  <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5" />
                                  <span class="font-normal tabular-nums">{{ row.original.dueDate }}</span>
                                </div>
                              </template>
                            </UTable>
                          </div>
                        </div>
                      </div>
                    </UCard>
                  </section>
                </div>
              </div>
            </div>
            <aside class="border-default bg-default text-default hidden w-full min-w-0 shrink-0 flex-col overflow-hidden border-t xl:flex xl:w-[300px] xl:border-t-0 xl:border-l">
              <div class="flex min-h-0 flex-1 flex-col">
                <section class="min-w-0">
                  <div class="relative h-[110px] sm:h-[132px] xl:h-[110px]" style="background-image:linear-gradient(135deg, var(--ui-info), var(--ui-info)), url('/images/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg');background-position:center;background-size:cover">
                    <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default absolute top-3.5 right-3.5 size-5 rounded-[3px] bg-default text-highlighted hover:bg-(--ui-bg)/90" aria-label="Edit profile" type="button" @click="openAction(&quot;Edit profile&quot;)">
                      <UIcon name="i-lucide-pen-line" class="size-3" />
                    </UButton>
                    <span class="flex shrink-0 overflow-hidden ring-(--ui-bg) absolute -bottom-[26px] left-5 size-[52px] rounded-[3px] ring-2">
                      <img class="aspect-square h-full w-full" alt="ausrobdev" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
                    </span>
                  </div>
                  <div class="px-4 sm:px-5">
                    <div class="mt-[38px]">
                      <h3 class="text-[16px] leading-6 font-semibold text-highlighted">ausrobdev</h3>
                      <p class="text-muted text-[13px] leading-5">rob@shadcnblocks.com</p>
                    </div>
                    <div class="mt-6 flex flex-col gap-5 text-[13px] leading-5">
                      <div class="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-4">
                        <div class="text-muted min-w-0">Joined on</div>
                        <div class="min-w-0 font-medium">Jan 10, 2026</div>
                      </div>
                      <div class="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-4">
                        <div class="text-muted min-w-0">Timezone</div>
                        <div class="min-w-0 font-medium">20:16 UTC</div>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="border-default mt-9 flex min-h-0 flex-1 flex-col border-t pb-5">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="flex min-h-0 flex-1 flex-col" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                    <template #content="{ item }">
                      <template v-if="item.value === '0'">
                        <div data-orientation="horizontal" id="radix-_R_55fiv5uknmlb_-content-meetings" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 min-h-0 flex-1 overflow-y-auto px-4 sm:px-5" style="animation-duration:0s">
                          <div class="flex flex-col gap-2.5">
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Timeline planning review</p>
                                  <p class="text-muted mt-1">09:00 - 09:45 AM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Timeline planning review" type="button" @click="openAction(&quot;Open Timeline planning review&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+2</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">Roadmap</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Google Meet</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Design handoff sync</p>
                                  <p class="text-muted mt-1">11:30 - 12:00 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Design handoff sync" type="button" @click="openAction(&quot;Open Design handoff sync&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+1</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-info/10 text-info dark:bg-info/50 dark:text-info border-default">Design</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Zoom</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Release readiness check</p>
                                  <p class="text-muted mt-1">03:00 - 03:30 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Release readiness check" type="button" @click="openAction(&quot;Open Release readiness check&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+3</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-secondary/10 text-secondary dark:bg-secondary/50 dark:text-secondary border-default">Launch</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Slack</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-if="item.value === '1'">
                        <div data-orientation="horizontal" id="radix-_R_55fiv5uknmlb_-content-meetings" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 min-h-0 flex-1 overflow-y-auto px-4 sm:px-5" style="animation-duration:0s">
                          <div class="flex flex-col gap-2.5">
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Timeline planning review</p>
                                  <p class="text-muted mt-1">09:00 - 09:45 AM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Timeline planning review" type="button" @click="openAction(&quot;Open Timeline planning review&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+2</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">Roadmap</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Google Meet</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Design handoff sync</p>
                                  <p class="text-muted mt-1">11:30 - 12:00 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Design handoff sync" type="button" @click="openAction(&quot;Open Design handoff sync&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+1</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-info/10 text-info dark:bg-info/50 dark:text-info border-default">Design</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Zoom</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Release readiness check</p>
                                  <p class="text-muted mt-1">03:00 - 03:30 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Release readiness check" type="button" @click="openAction(&quot;Open Release readiness check&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+3</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-secondary/10 text-secondary dark:bg-secondary/50 dark:text-secondary border-default">Launch</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Slack</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-if="item.value === '2'">
                        <div data-orientation="horizontal" id="radix-_R_55fiv5uknmlb_-content-meetings" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3 min-h-0 flex-1 overflow-y-auto px-4 sm:px-5" style="animation-duration:0s">
                          <div class="flex flex-col gap-2.5">
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Timeline planning review</p>
                                  <p class="text-muted mt-1">09:00 - 09:45 AM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Timeline planning review" type="button" @click="openAction(&quot;Open Timeline planning review&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+2</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning border-default">Roadmap</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Google Meet</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Design handoff sync</p>
                                  <p class="text-muted mt-1">11:30 - 12:00 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Design handoff sync" type="button" @click="openAction(&quot;Open Design handoff sync&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+1</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-info/10 text-info dark:bg-info/50 dark:text-info border-default">Design</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Zoom</span>
                              </div>
                            </div>
                            <div class="bg-muted rounded-[8px] p-3 text-[12px] leading-4">
                              <div class="flex items-start justify-between gap-2">
                                <div class="min-w-0">
                                  <p class="text-highlighted truncate text-[13px] font-medium">Release readiness check</p>
                                  <p class="text-muted mt-1">03:00 - 03:30 PM</p>
                                </div>
                                <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default bg-default text-muted hover:bg-default size-6 shrink-0 rounded-full" aria-label="Open Release readiness check" type="button" @click="openAction(&quot;Open Release readiness check&quot;)">
                                  <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                                </UButton>
                              </div>
                              <div class="mt-3 flex items-center justify-between gap-3">
                                <div class="flex items-center">
                                  <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2">
                                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                    </span>
                                  </div>
                                  <span class="text-muted ml-2 text-xs font-medium">+3</span>
                                </div>
                                <div class="inline-flex items-center rounded-md border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-sm border-transparent px-2 py-0 text-[11px] font-medium hover:bg-current/0 bg-secondary/10 text-secondary dark:bg-secondary/50 dark:text-secondary border-default">Launch</div>
                              </div>
                              <div class="text-muted mt-3 flex items-center gap-1.5">
                                <UIcon name="i-lucide-video" class="size-3.5" />
                                <span>On Slack</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </template>
                  </UTabs>
                </section>
              </div>
            </aside>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
